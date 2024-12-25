// import React, { useState } from "react";
// import Header from "../components/Header.jsx";

// const CommunityPage = () => {
//   const [newBlog, setNewBlog] = useState({ title: "", content: "", author: "" });

//   // Dummy data for blogs
//   const blogs = [
//     {
//       title: "How to Automatically Rename Files in Google Drive with Apps Script and AI",
//       date: "January 29, 2024",
//       content: "Quickly rename files in Google Drive with Apps Script and Google Gemini AI...",
//       tags: ["Google Sheets", "Google Apps Script", "AI"],
//       author: "Amit Agarwal",
//       img: "https://cdn.dnaindia.com/sites/default/files/2023/10/08/2610562-untitled-design-25.jpg?im=FitAndFill=(1200,900) "
//     },
//     {
//       title: "How to Save Password Protected PDF Attachments from Gmail to Google Drive",
//       date: "November 01, 2023",
//       content: "Learn how to save password protected PDF attachments from Gmail to Google Drive...",
//       tags: ["Gmail", "Password", "PDF", "Google Drive"],
//       author: "Amit Agarwal",
//       img: "https://www.paisc.com/sites/default/files/Monthly%20Health%20Campaign/PAI_214818_22_May%20MHC%20Infographic.png"
//     },
//     {
//       title: "Conditional Email Notifications with Google Forms - Route Responses to Different Email Addresses",
//       date: "November 04, 2023",
//       content: "How to set up conditional email notifications in Google Forms. This powerful feature...",
//       tags: ["Google Forms"],
//       author: "Amit Agarwal",
//       img: "https://mentalhealth.gov.gy/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-04-at-19.24.19-2-300x300.jpeg"
//     },
//     {
//       title: "Monitor Your Stock Portfolio with Google Sheets and Receive Daily Email Reports",
//       date: "October 25, 2023",
//       content: "How to use Google Sheets to monitor your stock portfolio. Get daily performance reports...",
//       tags: ["Google Sheets", "Google Workspace"],
//       author: "Amit Agarwal",
//       img: "https://www.stpatricks.ie/media/2783/site-blog-image.png"
//     },
//   ];

//   // Handle input changes for new blog
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
//   };

//   // Handle blog submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newBlogData = {
//       _id: (blogs.length + 1).toString(),
//       title: newBlog.title,
//       content: newBlog.content,
//       author: newBlog.author,
//       likes: 0,
//       comments: [],
//       image: "https://via.placeholder.com/400x200?text=New+Blog+Image"
//     };
//     setBlogs([...blogs, newBlogData]);
//     setNewBlog({ title: "", content: "", author: "" }); // Clear form
//   };

//   return (
//     <div className="container mx-auto p-8 bg-gray-50">
//       <Header />

//       {/* Blog Form */}
//     <div className="mb-8 mt-8 bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
//         <h2 className="text-2xl font-semibold mb-4 text-teal-600">Post a Blog</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="mb-4">
//             <label htmlFor="title" className="block text-lg text-teal-600">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={newBlog.title}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
//               placeholder="What's on your mind?"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="content" className="block text-lg text-teal-600">Content</label>
//             <textarea
//               name="content"
//               value={newBlog.content}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
//               rows="5"
//               placeholder="Write your blog content here..."
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="author" className="block text-lg text-teal-600">Author</label>
//             <input
//               type="text"
//               name="author"
//               value={newBlog.author}
//               onChange={handleChange}
//               className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
//               placeholder="Your name"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-teal-600 text-white text-lg font-semibold rounded-md hover:bg-teal-700 transition duration-300"
//           >
//             Post Blog
//           </button>
//         </form>

//         {/* Icon Buttons */}
//         <div className="flex space-x-4 mt-6">
//           <button className="flex items-center space-x-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200">
//             <span className="text-xl">📹</span>
//             <span>Live video</span>
//           </button>
//           <button className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
//             <span className="text-xl">📸</span>
//             <span>Photo/video</span>
//           </button>
//           <button className="flex items-center space-x-2 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200">
//             <span className="text-xl">😊</span>
//             <span>Feeling/activity</span>
//           </button>
//         </div>
//       </div>

//       {/* Display Blogs */}
//       <div>
//         <h2 className="text-3xl font-semibold mb-6 text-teal-600 text-center">Latest Blogs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
//             >
//               <img src={blog.img} alt={blog.title} className="rounded-lg mb-4" />
//               <h3 className="text-2xl font-semibold text-teal-700">{blog.title}</h3>
//               <p className="text-sm text-gray-600 mb-4">{blog.date}</p>
//               <p className="text-gray-800 mb-4">{blog.content}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {blog.tags.map((tag, idx) => (
//                   <span key={idx} className="bg-teal-100 text-teal-800 py-1 px-3 rounded-full text-sm">
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//               <p className="text-sm text-gray-600">By {blog.author}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommunityPage;
//----------------------------------------------------------------------------------------------------------

//Fetching from databse*************************************************************************************

// import React, { useState, useEffect } from "react";
// import Header from "../components/Header.jsx";

// const CommunityPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [newBlog, setNewBlog] = useState({ title: "", content: "", author: "" });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch blogs from the API
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch("http://localhost:5173/api/blog");
//         if (!response.ok) {
//           throw new Error("Failed to fetch blogs");
//         }
//         const data = await response.json();
//         setBlogs(data.blogs);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   // Handle input changes for the new blog form
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
//   };

//   // Submit a new blog to the API
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5173/api/blog", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newBlog),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to create blog");
//       }

//       const result = await response.json();
//       setBlogs((prevBlogs) => [result.blog, ...prevBlogs]); // Add the new blog to the list
//       setNewBlog({ title: "", content: "", author: "" }); // Reset the form
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   if (loading) {
//     return <div className="text-center text-lg text-gray-600">Loading blogs...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-lg text-red-600">Error: {error}</div>;
//   }

//   return (
//     <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
//       <Header />

//       {/* Display Blogs */}
//       <div>
//         <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">Latest Blogs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogs.map((blog) => (
//             <div
//               key={blog._id}
//               className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200"
//             >
//               <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
//               <p className="text-sm text-gray-500 mb-4">{new Date(blog.createdAt).toLocaleDateString()}</p>
//               <p className="text-gray-700 mb-4 line-clamp-3">{blog.content}</p>
//               <p className="text-sm text-gray-500">By {blog.author}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Blog Form */}
//       <div className="mt-12 bg-white shadow-xl rounded-lg p-10 max-w-3xl mx-auto">
//         <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Create a Blog Post</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={newBlog.title}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
//               placeholder="Enter your blog title"
//               required
//             />
//           </div>

//           <div>
//             <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">Content</label>
//             <textarea
//               name="content"
//               value={newBlog.content}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
//               rows="8"
//               placeholder="Write your blog content here"
//               required
//             ></textarea>
//           </div>

//           <div>
//             <label htmlFor="author" className="block text-lg font-medium text-gray-700 mb-2">Author</label>
//             <input
//               type="text"
//               name="author"
//               value={newBlog.author}
//               onChange={handleChange}
//               className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
//               placeholder="Your name"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
//           >
//             Publish Blog
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CommunityPage;

//**********************************************************************************************
import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";

const CommunityPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "", author: "", media: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data.blogs);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Handle input changes for the new blog form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
  };

  // Handle file input change for media upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewBlog((prevBlog) => ({ ...prevBlog, media: file }));
  };

  // Submit a new blog to the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newBlog.title);
    formData.append("content", newBlog.content);
    formData.append("author", newBlog.author);
    if (newBlog.media) {
      formData.append("media", newBlog.media);
    }

    try {
      const response = await fetch("http://localhost:5173/api/blog", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to create blog");
      }

      const result = await response.json();
      setBlogs((prevBlogs) => [result.blog, ...prevBlogs]); // Add the new blog to the list
      setNewBlog({ title: "", content: "", author: "", media: null }); // Reset the form
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) {
    return <div className="text-center text-lg text-gray-600">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <Header />

      {/* Display Blogs */}
      <div>
        <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{new Date(blog.createdAt).toLocaleDateString()}</p>
              <p className="text-gray-700 mb-4 line-clamp-3">{blog.content}</p>
              {blog.media && blog.media.endsWith(".mp4") ? (
                <video controls className="mb-4 rounded-lg w-full">
                  <source src={blog.media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                blog.media && <img src={blog.media} alt="Blog Media" className="mb-4 rounded-lg w-full h-48 object-cover" />
              )}
              <p className="text-sm text-gray-500">By {blog.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Form */}
      <div className="mt-12 bg-white shadow-xl rounded-lg p-10 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Create a Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={newBlog.title}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Enter your blog title"
              required
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">Content</label>
            <textarea
              name="content"
              value={newBlog.content}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
              rows="8"
              placeholder="Write your blog content here"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="author" className="block text-lg font-medium text-gray-700 mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={newBlog.author}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label htmlFor="media" className="block text-lg font-medium text-gray-700 mb-2">Photo/Video</label>
            <input
              type="file"
              name="media"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunityPage;
