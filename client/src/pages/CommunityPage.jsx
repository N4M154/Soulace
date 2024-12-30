import{ useEffect, useState } from "react";
import Header from "../components/Header.jsx";

const CommunityPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", content: "", author: "", media: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false); // Toggle for showing the form
  const [mediaPreview, setMediaPreview] = useState(null); // To preview the media

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
          likes: blog.likes || 0, // Initialize likes if not present
          loves: blog.loves || 0, // Initialize loves if not present
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
      ]); // Add new blog with likes/loves initialized
      setNewBlog({ title: "", content: "", author: "", media: null }); // Reset the form
      setMediaPreview(null); // Clear media preview
      setShowForm(false); // Hide the form after submission
    } catch (err) {
      alert(err.message);
    }
  };

  // Handle like button click
  const handleLike = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog._id === id ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
  };

  // Handle love button click
  const handleLove = (id) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) =>
        blog._id === id ? { ...blog, loves: blog.loves + 1 } : blog
      )
    );
  };

  if (loading) {
    return <div className="text-center text-lg text-gray-600 animate-pulse">Loading blogs...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-600">Error: {error}</div>;
  }

  return (
    <div>
      {/* Full-Width Header */}
      
        <Header />
        <div className="bg-gradient-to-r from-teal-200 to-teal-100 text-teal-900 text-center py-4 rounded-lg shadow-md mb-6">
          <h1 className="text-4xl font-bold mb-1">Read, Share, and Post Your Thoughts</h1>
          <p>Explore ideas, share your creativity, and contribute to the community!</p>
        </div>
      {/* Main Content */}
      <div className=" ml-20 overflow-y-auto mr-20">
        
        {/* Greeting */}
        
        {/* Flag Buttons */}
      <div className="flex items-center justify-center  w-full space-x-4">
  <button
    onClick={() => setShowForm(!showForm)}
    className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-500 transition z-50"
  >
    {showForm ? "Close It" : "Create Blogs"}
  </button>
  <a
    href="#latest-blogs"
    className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-500 transition z-50"
  >
    Latest Blogs
  </a>
</div>


        {/* Blog Form */}
        {showForm && (
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div
              id="create-blog"
              className="flex-1 bg-white p-6 shadow-lg rounded-lg"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Create a Blog Post</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Title */}
                  <div className="relative">
                    <input
                      type="text"
                      name="title"
                      value={newBlog.title}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300"
                      required
                    />
                    <label
                      className={`absolute top-3 left-4 text-gray-500 bg-white px-1 text-sm transition-all pointer-events-none ${
                        newBlog.title ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Blog Title
                    </label>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <textarea
                      name="content"
                      value={newBlog.content}
                      onChange={handleChange}
                      placeholder=" "
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300"
                      required
                    ></textarea>
                    <label
                      className={`absolute top-3 left-4 text-gray-500 bg-white px-1 text-sm transition-all pointer-events-none ${
                        newBlog.content ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Blog Content
                    </label>
                  </div>

                  {/* Author */}
                  <div className="relative">
                    <input
                      type="text"
                      name="author"
                      value={newBlog.author}
                      onChange={handleChange}
                      placeholder=" "
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300"
                      required
                    />
                    <label
                      className={`absolute top-3 left-4 text-gray-500 bg-white px-1 text-sm transition-all pointer-events-none ${
                        newBlog.author ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      Your Name
                    </label>
                  </div>

                  {/* Media */}
                  <div className="relative">
                    <input
                      type="file"
                      name="media"
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-teal-300"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-teal-300 to-teal-400 text-white text-lg font-semibold rounded-lg hover:bg-gradient-to-r hover:from-teal-400 hover:to-teal-500 transition"
                >
                  Publish Blog
                </button>
              </form>
            </div>

            {/* Live Preview */}
            <div className="flex-1 bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Live Preview</h2>
              <div className="space-y-4">
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
        <div id="latest-blogs">
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
                <div className="w-full">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 line-clamp-3">{blog.content}</p>
                <div className="flex space-x-6">
                  <button
                    className="flex items-center space-x-2 text-teal-400 hover:text-teal-500"
                    onClick={() => handleLike(blog._id)}
                  >
                    <span>👍</span>
                    <span>{blog.likes}</span>
                  </button>
                  <button
                    className="flex items-center space-x-2 text-red-400 hover:text-red-500"
                    onClick={() => handleLove(blog._id)}
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
