from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# 1. Load Trained Artifacts


try:
    model = joblib.load('model/mental_health_model.pkl')
    scaler = joblib.load('model/mental_health_scaler.pkl')
    label_encoders = joblib.load('model/mental_health_label_encoders.pkl')
    print("Model, scaler, and label encoders loaded successfully.")
except Exception as e:
    print(f"Error loading model artifacts: {e}")
    raise

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

    # Process input data
    try:
        processed_features = []
        for feature in feature_order:
            value = data.get(feature)
            if value is None:
                return jsonify({'error': f'Missing feature: {feature}'}), 400

            if feature in label_encoders:
                le = label_encoders[feature]
                if value not in le.classes_:
                    return jsonify({'error': f'Invalid value for {feature}: {value}'}), 400
                encoded_value = le.transform([value])[0]
                processed_features.append(encoded_value)
            else:
                # Numerical features
                try:
                    numeric_value = float(value)
                    processed_features.append(numeric_value)
                except ValueError:
                    return jsonify({'error': f'Invalid numeric value for {feature}: {value}'}), 400

        # Convert to numpy array and reshape
        input_array = np.array(processed_features).reshape(1, -1)

        # Scale numerical features
        numerical_indices = [feature_order.index(feat) for feat in numerical_features]
        input_array[:, numerical_indices] = scaler.transform(input_array[:, numerical_indices])

        # Get probability for 'Yes' class (index 1)
        probabilities = model.predict_proba(input_array)[0]
        prob_yes = probabilities[1]  # Probability of 'Yes'

        result = {
            'probability': float(prob_yes)
        }

        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500


# 3. Run the Flask App


if __name__ == '__main__':
    app.run(debug=True)
