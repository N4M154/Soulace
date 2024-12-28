import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Specialist = () => {
  const [formData, setFormData] = useState({
    familyHistory: "",
    profession: "",
    priorCondition: "",
    physicalHealthEffect: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/recommendation"); // Navigate to the recommendation page
  };

  return (
    <div>
      <Header/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800">Connect with a Specialist</h1>
        <p className="text-lg text-gray-700 mt-2">
          Get personalized guidance from mental health specialists based on your needs.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Take a Test</h2>
        {/* Form Fields */}
        <label className="block mb-2 text-gray-600">Family History</label>
        <select
          name="familyHistory"
          value={formData.familyHistory}
          onChange={handleInputChange}
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200"
          required
        >
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label className="block mb-2 text-gray-600">Your Profession</label>
        <select
          name="profession"
          value={formData.profession}
          onChange={handleInputChange}
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200"
          required
        >
          <option value="">Select your profession</option>
          <option value="Student">Student</option>
          <option value="Professional">Professional</option>
          <option value="Unemployed">Unemployed</option>
        </select>

        <label className="block mb-2 text-gray-600">Any prior mental health condition?</label>
        <input
          type="text"
          name="priorCondition"
          value={formData.priorCondition}
          onChange={handleInputChange}
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200"
          placeholder="E.g., Anxiety, Depression"
          required
        />

        <label className="block mb-2 text-gray-600">
          Effect on your physical health (if any)
        </label>
        <input
          type="text"
          name="physicalHealthEffect"
          value={formData.physicalHealthEffect}
          onChange={handleInputChange}
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-200"
          placeholder="E.g., Fatigue, Insomnia"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Specialist;
