import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useDispatch } from "react-redux";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header";

import SideButtons from "../components/SideButtons";
import { app } from "../firebase";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess
} from "../redux/user/userSlice";

const ProfileAnalytics = () => {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const { currentUser, loading, error } = useSelector((state) => state.user);

  // Example data for additional charts
  const barData = [
    { day: "Day 1", stress: 3, happiness: 4, focus: 2, energy: 5, calmness: 3 },
    { day: "Day 2", stress: 4, happiness: 3, focus: 3, energy: 4, calmness: 4 },
    { day: "Day 3", stress: 2, happiness: 5, focus: 4, energy: 3, calmness: 5 },
    { day: "Day 4", stress: 3, happiness: 2, focus: 4, energy: 4, calmness: 3 },
    { day: "Day 5", stress: 4, happiness: 3, focus: 5, energy: 2, calmness: 4 },
  ];

  const lineData = [
    { month: "Jan", mood: 3, energy: 4 },
    { month: "Feb", mood: 4, energy: 3 },
    { month: "Mar", mood: 5, energy: 5 },
    { month: "Apr", mood: 3, energy: 4 },
    { month: "May", mood: 4, energy: 3 },
  ];

  const pieData = [
    { name: "Calmness", value: 30 },
    { name: "Happiness", value: 25 },
    { name: "Stress", value: 15 },
    { name: "Energy", value: 20 },
    { name: "Focus", value: 10 },
  ];

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, profilePicture: downloadURL })
        );
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 ">
      <SideButtons />
      <div
        id="main-content"
        className="flex-1 transition-all duration-300 "
        style={{ marginLeft: isExpanded ? "260px" : "80px" }}
      >
        <Header />
    
      

      <div className="p-4 max-w-6xl mx-auto ">
        {/* Profile Section */}
        <div className="flex items-center justify-between ">
  {/* Content on the left */}
    
</div>

        <div className="flex flex-col bg-gray-50 p-8 rounded-lg shadow-md">
          <Link
    to="/analytics"
    className="ml-auto flex gap-2 text-black"
  >
    {/* Pencil Icon */}
    <img
      src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
      alt="Edit Icon"
      className="h-5 w-5"
    />
    Edit your public profile
  </Link>
  

  {/* Profile Info */}
  <div className="flex ">
    {/* Profile Picture */}
    <img
      src={formData.profilePicture || currentUser.profilePicture}
      alt="profile"
      className="h-32 w-32 rounded-full object-cover border-2 border-gray-300"
    />

    {/* User Details */}
    <div className="ml-6 flex flex-col justify-center">
      <h2 className="text-3xl font-bold text-gray-900">
        {currentUser.username }
      </h2>
      <p className="text-gray-600 mt-1">I am a cloud enthusiast :3</p>
      <ul className="mt-4 text-gray-700 space-y-1">
        <li>
          <i className="fas fa-user-circle mr-2"></i> Pronouns: he/him
        </li>
        <li>
          <i className="fas fa-graduation-cap mr-2"></i> Student at Islamic
          University of Technology
        </li>
        <li>
          <i className="fas fa-map-marker-alt mr-2"></i> Dhaka, Dhaka Division,
          Bangladesh
        </li>
        <li>
          <i className="fas fa-calendar-alt mr-2"></i> Joined 8 months ago •
          last seen in the past day
        </li>
      </ul>
    </div>
  </div>
</div>


        {/* Analytics Section */}
        <div className="mt-10 space-y-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Progress Analytics
          </h2>
          <div className="flex gap-6">
            <ResponsiveContainer width="50%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="stress" fill="#8884d8" />
                <Bar dataKey="happiness" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="50%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="mood" stroke="#8884d8" />
                <Line type="monotone" dataKey="energy" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div>
            <h2 className="text-xl font-bold text-center text-gray-800">
              Mood Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  fill="#82ca9d"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
        
      <Footer></Footer>
    </div>
    </div>
  
  );
};

export default ProfileAnalytics;
