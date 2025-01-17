import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";
import { app } from "../firebase";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../redux/user/userSlice";


export default function Profile() {
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const navigate = useNavigate();
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const { currentUser, loading, error } = useSelector((state) => state.user);

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
      navigate("/");
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout");
      dispatch(signOut());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <Header />
      <SideButtons/>

      <div className="p-6 max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg mt-10">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-8">
          Edit Your Profile
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Profile Picture Upload */}
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="flex justify-center">
            <img
              src={formData.profilePicture || currentUser.profilePicture}
              alt="profile"
              className="h-28 w-28 cursor-pointer rounded-full object-cover border-4 border-teal-500"
              onClick={() => fileRef.current.click()}
            />
          </div>
          <p className="text-sm text-center">
            {imageError ? (
              <span className="text-red-600">
                Error uploading image (file size must be less than 2 MB)
              </span>
            ) : imagePercent > 0 && imagePercent < 100 ? (
              <span className="text-gray-600">{`Uploading: ${imagePercent}%`}</span>
            ) : imagePercent === 100 ? (
              <span className="text-teal-700">Image uploaded successfully</span>
            ) : (
              ""
            )}
          </p>

          {/* Inputs */}
          <input
            defaultValue={currentUser.username}
            type="text"
            id="username"
            placeholder="Username"
            className="bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={handleChange}
          />
          <input
            defaultValue={currentUser.email}
            type="email"
            id="email"
            placeholder="Email"
            className="bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-gray-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={handleChange}
          />
          <button className="bg-teal-600 text-white font-semibold p-4 rounded-lg uppercase hover:bg-teal-500">
            {loading ? "Loading..." : "Update"}
          </button>
        </form>

        {/* Actions */}
        <div className="flex justify-between mt-8">
          <span
            onClick={handleDeleteAccount}
            className="text-red-600 cursor-pointer font-semibold hover:text-red-500"
          >
            Delete Account
          </span>
          <span
            onClick={handleSignOut}
            className="text-teal-600 font-semibold hover:text-teal-500 cursor-pointer"
          >
            Sign out
          </span>
        </div>

        {/* Status Messages */}
        <p className="text-red-600 mt-6 text-center font-semibold">
          {error && "Something went wrong!"}
        </p>
        <p className="text-teal-600 mt-6 text-center font-semibold">
          {updateSuccess && "User is updated successfully!"}
        </p>
       
<Footer></Footer>
      </div>
    </div>
  );
}
