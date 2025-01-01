import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import SideButtons from "../components/SideButtons.jsx";

const CommunityPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "", author: "", media: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // State for sidebar

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5173/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        const updatedBlogs = data.blogs.map((blog) => ({
          ...blog,
          likes: blog.likes || 0,
          loves: blog.loves || 0,
        }));
        setBlogs(updatedBlogs);
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

  // Handle file input change for media upload and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewBlog((prevBlog) => ({ ...prevBlog, media: file }));
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setMediaPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
      setBlogs((prevBlogs) => [
        { ...result.blog, likes: 0, loves: 0 },
        ...prevBlogs,
      ]);
      setNewBlog({ title: "", content: "", author: "", media: null });
      setMediaPreview(null);
      setShowForm(false);
    } catch (err) {
      alert(err.message);
    }
  };

  // Toggle sidebar state
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  if (loading) {
    return <div className="text-center text-lg text-gray-600 animate-pulse">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-600">Error: {error}</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
       <SideButtons/>

      {/* Main Content */}
      <div
        className={`transition-all flex-1 ${
          sidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        <Header />
        <div className="bg-gradient-to-r from-teal-200 to-teal-100 text-teal-900 text-center py-4 rounded-lg shadow-md mb-6">
          <h1 className="text-4xl font-bold mb-1">Read, Share, and Post Your Thoughts</h1>
          <p>Explore ideas, share your creativity, and contribute to the community!</p>
        </div>

        {/* Blog Form Toggle */}
        <div className="flex items-center justify-center w-full space-x-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-500 transition"
          >
            {showForm ? "Close It" : "Create Blogs"}
          </button>
          <a
            href="#latest-blogs"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-500 transition"
          >
            Latest Blogs
          </a>
        </div>

        {/* Blog Form */}
        {showForm && (
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-6">
            <div className="flex-1 bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Create a Blog Post</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="title"
                    value={newBlog.title}
                    onChange={handleChange}
                    placeholder="Blog Title"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300"
                    required
                  />
                  <textarea
                    name="content"
                    value={newBlog.content}
                    onChange={handleChange}
                    placeholder="Blog Content"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300"
                    required
                  ></textarea>
                  <input
                    type="text"
                    name="author"
                    value={newBlog.author}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300"
                    required
                  />
                  <input
                    type="file"
                    name="media"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-teal-600 text-white text-lg font-semibold rounded-lg hover:bg-teal-500 transition"
                >
                  Publish Blog
                </button>
              </form>
            </div>
            <div className="flex-1 bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Preview</h2>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {newBlog.title || "Blog Title"}
                </h3>
                <p className="text-gray-700">{newBlog.content || "Blog content will appear here..."}</p>
                <p className="text-sm text-gray-500">By {newBlog.author || "Your Name"}</p>
                {mediaPreview && (
                  <div className="mt-4">
                    {mediaPreview.endsWith(".mp4") ? (
                      <video controls className="w-full rounded-lg">
                        <source src={mediaPreview} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={mediaPreview}
                        alt="Media Preview"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts */}
        <div id="latest-blogs" className="mt-8">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Latest Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-gray-50 bg-opacity-80 shadow-lg rounded-lg p-6 flex flex-col items-start space-y-4 hover:shadow-xl hover:bg-opacity-90 transition"
              >
                <div className="w-full">
                  {blog.media && blog.media.endsWith(".mp4") ? (
                    <video controls className="w-full rounded-lg">
                      <source src={blog.media} type="video/mp4" />
                    </video>
                  ) : (
                    blog.media && (
                      <img
                        src={blog.media}
                        alt="Blog Media"
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    )
                  )}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                <p className="text-gray-700 line-clamp-3">{blog.content}</p>
                <div className="flex space-x-6">
                  <button
                    className="flex items-center space-x-2 text-teal-400 hover:text-teal-500"
                    onClick={() =>
                      setBlogs((prevBlogs) =>
                        prevBlogs.map((b) =>
                          b._id === blog._id ? { ...b, likes: b.likes + 1 } : b
                        )
                      )
                    }
                  >
                    <span>👍</span>
                    <span>{blog.likes}</span>
                  </button>
                  <button
                    className="flex items-center space-x-2 text-red-400 hover:text-red-500"
                    onClick={() =>
                      setBlogs((prevBlogs) =>
                        prevBlogs.map((b) =>
                          b._id === blog._id ? { ...b, loves: b.loves + 1 } : b
                        )
                      )
                    }
                  >
                    <span>❤️</span>
                    <span>{blog.loves}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
