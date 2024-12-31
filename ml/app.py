# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pandas as pd
# import numpy as np
# import joblib

# app = Flask(__name__)
# CORS(app)  # Enable CORS for all routes


# # 1. Load Trained Artifacts


# try:
#     model = joblib.load('model/mental_health_model.pkl')
#     scaler = joblib.load('model/mental_health_scaler.pkl')
#     label_encoders = joblib.load('model/mental_health_label_encoders.pkl')
#     print("Model, scaler, and label encoders loaded successfully.")
# except Exception as e:
#     print(f"Error loading model artifacts: {e}")
#     raise

# # Define feature order
# feature_order = [
#     'Age', 'Gender', 'Ethnicity', 'EducationLevel', 'EmploymentStatus',
#     'DepressionScore_PHQ9', 'AnxietyScore_GAD7', 'StressLevel',
#     'SleepHours', 'AppetiteChange', 'SubstanceUse',
#     'PhysicalActivity', 'SocialInteractions', 'LivingSituation',
#     'SupportSystems', 'TraumaticEvents'
# ]

# numerical_features = ['Age', 'DepressionScore_PHQ9', 'AnxietyScore_GAD7', 'SleepHours']


# # 2. Prediction Endpoint


# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.json

#     if not data:
#         return jsonify({'error': 'No input data provided'}), 400

#     # Process input data
#     try:
#         processed_features = []
#         for feature in feature_order:
#             value = data.get(feature)
#             if value is None:
#                 return jsonify({'error': f'Missing feature: {feature}'}), 400

#             if feature in label_encoders:
#                 le = label_encoders[feature]
#                 if value not in le.classes_:
#                     return jsonify({'error': f'Invalid value for {feature}: {value}'}), 400
#                 encoded_value = le.transform([value])[0]
#                 processed_features.append(encoded_value)
#             else:
#                 # Numerical features
#                 try:
#                     numeric_value = float(value)
#                     processed_features.append(numeric_value)
#                 except ValueError:
#                     return jsonify({'error': f'Invalid numeric value for {feature}: {value}'}), 400

#         # Convert to numpy array and reshape
#         input_array = np.array(processed_features).reshape(1, -1)

#         # Scale numerical features
#         numerical_indices = [feature_order.index(feat) for feat in numerical_features]
#         input_array[:, numerical_indices] = scaler.transform(input_array[:, numerical_indices])

#         # Get probability for 'Yes' class (index 1)
#         probabilities = model.predict_proba(input_array)[0]
#         prob_yes = probabilities[1]  # Probability of 'Yes'

#         result = {
#             'probability': float(prob_yes)
#         }

#         return jsonify(result)

#     except Exception as e:
#         return jsonify({'error': str(e)}), 500


# # 3. Run the Flask App


# if __name__ == '__main__':
#     app.run(debug=True)



# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from groq import Groq 
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# 1. Initialize Groq SDK

groq_api_key = os.getenv('GROQ_API_KEY')
if not groq_api_key:
    raise ValueError("GROQ_API_KEY not found in the environment variables.")

groq = Groq(
    api_key= groq_api_key,  
    
)

# Define feature order
feature_order = [
    'Age', 'Gender', 'Ethnicity', 'EducationLevel', 'EmploymentStatus',
    'DepressionScore_PHQ9', 'AnxietyScore_GAD7', 'StressLevel',
    'SleepHours', 'AppetiteChange', 'SubstanceUse',
    'PhysicalActivity', 'SocialInteractions', 'LivingSituation',
    'SupportSystems', 'TraumaticEvents'
]

numerical_features = ['Age', 'DepressionScore_PHQ9', 'AnxietyScore_GAD7', 'SleepHours']

# 2. Prediction Endpoint

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    if not data:
        return jsonify({'error': 'No input data provided'}), 400

    # Process input data into a prompt for Groq
    try:
        prompt = "Assess the following mental health assessment inputs and provide a probability percentage indicating the need for professional help.\n\n"
        for feature in feature_order:
            value = data.get(feature)
            if value is None:
                return jsonify({'error': f'Missing feature: {feature}'}), 400
            prompt += f"{feature}: {value}\n"
        prompt += "\nProvide only the percentage (e.g., 75%)."

        # Send prompt to Groq
        chat_completion = groq.chat.completions.create(
            model="llama-3.3-70b-versatile",  # Specify the Groq model if necessary
            temperature=0.5,  # Adjust temperature as needed
            max_tokens=10,     # Enough to capture percentage
            messages=[
                {
                    "role": "system",
                    "content": "You are an AI trained to assess mental health based on given inputs and provide a probability percentage indicating the need for professional help."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        # Extract AI response
        ai_response = chat_completion.choices[0].message.content.strip()

        # Extract percentage from the response
        # Assuming Groq returns a string like "75%"
        if '%' in ai_response:
            percentage_str = ai_response.split('%')[0]
            percentage = float(percentage_str)
            probability = percentage / 100.0
        else:
            # If no percentage is found, default to an error
            return jsonify({'error': 'Invalid response format from Groq.'}), 500

        result = {
            'probability': float(probability)
        }

        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# 3. Run the Flask App

if __name__ == '__main__':
    app.run(debug=True)
