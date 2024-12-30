import pandas as pd
import numpy as np
import random
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report, confusion_matrix

# Set random seed for reproducibility
np.random.seed(42)
random.seed(42)

# 1. Load the Dataset


def load_dataset(filepath):
    """
    Load the dataset from a CSV file.
    
    Parameters:
    - filepath (str): Path to the CSV file.
    
    Returns:
    - pd.DataFrame: Loaded dataset.
    """
    try:
        df = pd.read_csv(filepath)
        print(f"Dataset loaded successfully with {df.shape[0]} samples and {df.shape[1]} features.")
        return df
    except Exception as e:
        print(f"Error loading dataset: {e}")
        raise

# 2. Preprocess the Data


def preprocess_data(df):
    """
    Preprocess the dataset by encoding categorical variables and scaling numerical features.
    
    Parameters:
    - df (pd.DataFrame): Original dataset.
    
    Returns:
    - X_train_prepared (pd.DataFrame): Preprocessed training features.
    - X_test_prepared (pd.DataFrame): Preprocessed testing features.
    - y_train (pd.Series): Training target.
    - y_test (pd.Series): Testing target.
    - label_encoders (dict): Dictionary of fitted LabelEncoders.
    - scaler (StandardScaler): Fitted scaler.
    - numerical_features (list): List of numerical feature names.
    """
    # Identify categorical features
    categorical_features = [
        'Gender', 'Ethnicity', 'EducationLevel', 'EmploymentStatus',
        'StressLevel', 'AppetiteChange', 'SubstanceUse',
        'PhysicalActivity', 'SocialInteractions', 'LivingSituation',
        'SupportSystems', 'TraumaticEvents'
    ]
    
    # Initialize LabelEncoders
    label_encoders = {}
    for col in categorical_features:
        le = LabelEncoder()
        df[col] = le.fit_transform(df[col])
        label_encoders[col] = le
    
    # Define target variable
    target = 'NeedsProfessionalHelp'
    X = df.drop([target], axis=1)
    y = df[target].map({'Yes': 1, 'No': 0})
    
    # Split the data with stratification to maintain balance
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )
    
    # Feature Scaling
    scaler = StandardScaler()
    numerical_features = ['Age', 'DepressionScore_PHQ9', 'AnxietyScore_GAD7', 'SleepHours']
    X_train_scaled = scaler.fit_transform(X_train[numerical_features])
    X_test_scaled = scaler.transform(X_test[numerical_features])
    
    # Replace numerical features with scaled versions
    X_train_scaled_df = pd.DataFrame(X_train_scaled, columns=numerical_features, index=X_train.index)
    X_test_scaled_df = pd.DataFrame(X_test_scaled, columns=numerical_features, index=X_test.index)
    
    X_train_prepared = X_train.drop(numerical_features, axis=1).join(X_train_scaled_df)
    X_test_prepared = X_test.drop(numerical_features, axis=1).join(X_test_scaled_df)
    
    print("Data preprocessing completed.")
    
    return X_train_prepared, X_test_prepared, y_train, y_test, label_encoders, scaler, numerical_features


# 3. Train the Model


def train_model(X_train, y_train):
    """
    Train the Logistic Regression model with class_weight='balanced'.
    
    Parameters:
    - X_train (pd.DataFrame): Preprocessed training features.
    - y_train (pd.Series): Training target.
    
    Returns:
    - model (LogisticRegression): Trained model.
    """
    model = LogisticRegression(class_weight='balanced', random_state=42, max_iter=1000)
    model.fit(X_train, y_train)
    print("Model training completed.")
    return model


# 4. Evaluate the Model


def evaluate_model(model, X_test, y_test):
    """
    Evaluate the trained model on the test set.
    
    Parameters:
    - model (LogisticRegression): Trained model.
    - X_test (pd.DataFrame): Preprocessed testing features.
    - y_test (pd.Series): Testing target.
    
    Returns:
    - None
    """
    y_pred = model.predict(X_test)
    print("Confusion Matrix:")
    print(confusion_matrix(y_test, y_pred))
    
    print("\nClassification Report:")
    print(classification_report(y_test, y_pred))


# 5. Save the Model and Artifacts


def save_artifacts(model, scaler, label_encoders, filepath_prefix='mental_health'):
    """
    Save the trained model, scaler, and label encoders as .pkl files.
    
    Parameters:
    - model (LogisticRegression): Trained model.
    - scaler (StandardScaler): Fitted scaler.
    - label_encoders (dict): Dictionary of fitted LabelEncoders.
    - filepath_prefix (str): Prefix for the saved files.
    
    Returns:
    - None
    """
    try:
        joblib.dump(model, f'{filepath_prefix}_model.pkl')
        joblib.dump(scaler, f'{filepath_prefix}_scaler.pkl')
        joblib.dump(label_encoders, f'{filepath_prefix}_label_encoders.pkl')
        print(f"Artifacts saved successfully with prefix '{filepath_prefix}_'.")
    except Exception as e:
        print(f"Error saving artifacts: {e}")
        raise


# 6. Main Execution


def main():
    # Path to your dataset
    dataset_path = 'balanced_mental_health_dataset.csv'  # Update this path as necessary
    
    # Load the dataset
    df = load_dataset(dataset_path)
    
    # Preprocess the data
    X_train, X_test, y_train, y_test, label_encoders, scaler, numerical_features = preprocess_data(df)
    
    # Train the model
    model = train_model(X_train, y_train)
    
    # Evaluate the model
    evaluate_model(model, X_test, y_test)
    
    # Save the model and artifacts
    save_artifacts(model, scaler, label_encoders)

if __name__ == '__main__':
    main()
