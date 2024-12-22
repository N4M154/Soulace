import React, { useState } from "react";
import Header from "../components/Header.jsx";

const CommunityPage = () => {
  const [newBlog, setNewBlog] = useState({ title: "", content: "", author: "" });

  // Dummy data for blogs
  const blogs = [
    {
      title: "How to Automatically Rename Files in Google Drive with Apps Script and AI",
      date: "January 29, 2024",
      content: "Quickly rename files in Google Drive with Apps Script and Google Gemini AI...",
      tags: ["Google Sheets", "Google Apps Script", "AI"],
      author: "Amit Agarwal",
      img: "https://cdn.dnaindia.com/sites/default/files/2023/10/08/2610562-untitled-design-25.jpg?im=FitAndFill=(1200,900) "
    },
    {
      title: "How to Save Password Protected PDF Attachments from Gmail to Google Drive",
      date: "November 01, 2023",
      content: "Learn how to save password protected PDF attachments from Gmail to Google Drive...",
      tags: ["Gmail", "Password", "PDF", "Google Drive"],
      author: "Amit Agarwal",
      img: "https://www.paisc.com/sites/default/files/Monthly%20Health%20Campaign/PAI_214818_22_May%20MHC%20Infographic.png"
    },
    {
      title: "Conditional Email Notifications with Google Forms - Route Responses to Different Email Addresses",
      date: "November 04, 2023",
      content: "How to set up conditional email notifications in Google Forms. This powerful feature...",
      tags: ["Google Forms"],
      author: "Amit Agarwal",
      img: "https://mentalhealth.gov.gy/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-04-at-19.24.19-2-300x300.jpeg"
    },
    {
      title: "Monitor Your Stock Portfolio with Google Sheets and Receive Daily Email Reports",
      date: "October 25, 2023",
      content: "How to use Google Sheets to monitor your stock portfolio. Get daily performance reports...",
      tags: ["Google Sheets", "Google Workspace"],
      author: "Amit Agarwal",
      img: "https://www.stpatricks.ie/media/2783/site-blog-image.png"
    },
  ];

  // Handle input changes for new blog
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
  };

  // Handle blog submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlogData = {
      _id: (blogs.length + 1).toString(),
      title: newBlog.title,
      content: newBlog.content,
      author: newBlog.author,
      likes: 0,
      comments: [],
      image: "https://via.placeholder.com/400x200?text=New+Blog+Image"
    };
    setBlogs([...blogs, newBlogData]);
    setNewBlog({ title: "", content: "", author: "" }); // Clear form
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50">
      <Header />

      {/* Blog Form */}
    <div className="mb-8 mt-8 bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-teal-600">Post a Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg text-teal-600">Title</label>
            <input
              type="text"
              name="title"
              value={newBlog.title}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="What's on your mind?"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block text-lg text-teal-600">Content</label>
            <textarea
              name="content"
              value={newBlog.content}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
              rows="5"
              placeholder="Write your blog content here..."
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="author" className="block text-lg text-teal-600">Author</label>
            <input
              type="text"
              name="author"
              value={newBlog.author}
              onChange={handleChange}
              className="w-full p-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
              placeholder="Your name"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white text-lg font-semibold rounded-md hover:bg-teal-700 transition duration-300"
          >
            Post Blog
          </button>
        </form>

        {/* Icon Buttons */}
        <div className="flex space-x-4 mt-6">
          <button className="flex items-center space-x-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200">
            <span className="text-xl">📹</span>
            <span>Live video</span>
          </button>
          <button className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
            <span className="text-xl">📸</span>
            <span>Photo/video</span>
          </button>
          <button className="flex items-center space-x-2 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200">
            <span className="text-xl">😊</span>
            <span>Feeling/activity</span>
          </button>
        </div>
      </div>

      {/* Display Blogs */}
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-teal-600 text-center">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <img src={blog.img} alt={blog.title} className="rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-teal-700">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{blog.date}</p>
              <p className="text-gray-800 mb-4">{blog.content}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, idx) => (
                  <span key={idx} className="bg-teal-100 text-teal-800 py-1 px-3 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600">By {blog.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
