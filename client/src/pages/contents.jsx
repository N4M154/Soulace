// import { useEffect, useState } from "react";
// import Header from "../components/Header";
// import SideButtons from "../components/SideButtons";

// const MentalHealthContent = () => {
//   const [articles, setArticles] = useState([]);
//   const [videos, setVideos] = useState([]);
//   const [loadingArticles, setLoadingArticles] = useState(false);
//   const [loadingVideos, setLoadingVideos] = useState(false);

//   const fetchArticles = async () => {
//     setLoadingArticles(true);
//     try {
//       const response = await fetch(
//         "https://newsapi.org/v2/everything?q=mental%20health&apiKey=690c534bd52c4d1e8353e4c34b64eb97"
//       );
//       const data = await response.json();
//       if (data.articles && data.articles.length > 0) {
//         const randomArticles = data.articles.sort(() => 0.5 - Math.random()).slice(0, 3);
//         setArticles(randomArticles);
//       } else {
//         setArticles([]);
//       }
//     } catch (error) {
//       console.error("Error fetching articles:", error);
//       setArticles([]);
//     } finally {
//       setLoadingArticles(false);
//     }
//   };

//   const [isExpanded, setIsExpanded] = useState(true);

//   const fetchVideos = async () => {
//     setLoadingVideos(true);
//     try {
//       const response = await fetch(
//         "https://www.googleapis.com/youtube/v3/search?part=snippet&q=mental%20health&type=video&maxResults=3&key=AIzaSyCkLns1-totD5VbO3sRwUHFwDspAKCLyN4"
//       );
//       const data = await response.json();
//       if (data.items && data.items.length > 0) {
//         setVideos(data.items);
//       } else {
//         setVideos([]);
//       }
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//       setVideos([]);
//     } finally {
//       setLoadingVideos(false);
//     }
//   };

//   useEffect(() => {
//     fetchArticles();
//     fetchVideos();
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-50 ">
//     <SideButtons />
//     <div
//       id="main-content"
//       className="flex-1 transition-all duration-300 "
//       style={{ marginLeft: isExpanded ? "260px" : "80px" }}
//     >
//       <Header />

//         <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "white", padding: "20px" }}>
//           <div style={{ maxWidth: "2000px" }}>
//             <div style={{ backgroundColor: "#d2e9d9", padding: "10px", borderRadius: "5px", marginBottom: "20px" }}>
//               <h1 style={{ textAlign: "center", color: "black", margin: "0", fontSize: "24px" }}>
//                 Discover the Power of Reading
//               </h1>
//               <p style={{ textAlign: "center", color: "gray", margin: "5px 0 0" }}>
//                 Reading can help relax your mind, reduce stress, and improve mental well-being.
//               </p>
//             </div>

//             {loadingArticles ? (
//               <p style={{ textAlign: "center" }}>Loading articles...</p>
//             ) : (
//               <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
//                 {articles.map((article, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       backgroundColor: "#fff",
//                       borderRadius: "8px",
//                       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                       width: "300px",
//                       overflow: "hidden",
//                     }}
//                   >
//                     {article.urlToImage && (
//                       <img
//                         src={article.urlToImage}
//                         alt={article.title}
//                         style={{ width: "100%", height: "180px", objectFit: "cover" }}
//                       />
//                     )}
//                     <div style={{ padding: "15px" }}>
//                       <h3 style={{ fontSize: "18px", color: "#333", margin: "0 0 10px" }}>{article.title}</h3>
//                       <a
//                         href={article.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ color: "#1e90ff", textDecoration: "none", fontSize: "14px" }}
//                       >
//                         Read more
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             <div style={{ textAlign: "center", marginTop: "20px" }}>
//               <button
//                 onClick={fetchArticles}
//                 style={{
//                   color: "teal",
//                   border: "none",
//                   padding: "10px 20px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   fontSize: "16px",
//                 }}
//               >
//                 More
//               </button>
//             </div>
//           </div>

//           <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "20px" }}>
//             <div style={{ backgroundColor: "#cce7ff", padding: "10px", borderRadius: "5px", marginBottom: "20px" }}>
//               <h1 style={{ textAlign: "center", color: "black", margin: "0", fontSize: "24px" }}>
//                 Explore the World of Videos
//               </h1>
//               <p style={{ textAlign: "center", color: "gray", margin: "5px 0 0" }}>
//                 Videos can provide inspiration, practical tips, and insights to boost your mental well-being.
//               </p>
//             </div>

//             {loadingVideos ? (
//               <p style={{ textAlign: "center" }}>Loading videos...</p>
//             ) : (
//               <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
//                 {videos.map((video, index) => (
//                   <div
//                     key={index}
//                     style={{
//                       backgroundColor: "#fff",
//                       borderRadius: "8px",
//                       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                       width: "300px",
//                       overflow: "hidden",
//                     }}
//                   >
//                     <img
//                       src={video.snippet.thumbnails.high.url}
//                       alt={video.snippet.title}
//                       style={{ width: "100%", height: "180px", objectFit: "cover" }}
//                     />
//                     <div style={{ padding: "15px" }}>
//                       <h3 style={{ fontSize: "18px", color: "#333", margin: "0 0 10px" }}>{video.snippet.title}</h3>
//                       <a
//                         href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         style={{ color: "#1e90ff", textDecoration: "none", fontSize: "14px" }}
//                       >
//                         Watch now
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             <div style={{ textAlign: "center", marginTop: "20px" }}>
//               <button
//                 onClick={fetchVideos}
//                 style={{
//                   color: "blue",
//                   border: "none",
//                   padding: "10px 20px",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                   fontSize: "16px",
//                 }}
//               >
//                 More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default MentalHealthContent;

//-----------------------------------------------------------------------------------

import { useEffect, useState } from "react";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const MentalHealthContent = () => {
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  // const fetchArticles = async () => {
  //   setLoadingArticles(true);
  //   try {
  //     const response = await fetch(
  //       "https://newsapi.org/v2/everything?q=mental%20health&apiKey=690c534bd52c4d1e8353e4c34b64eb97"
  //     );
  //     const data = await response.json();
  //     if (data.articles && data.articles.length > 0) {
  //       const randomArticles = data.articles
  //         .sort(() => 0.5 - Math.random())
  //         .slice(0, 3);
  //       setArticles(randomArticles);
  //     } else {
  //       setArticles([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching articles:", error);
  //     setArticles([]);
  //   } finally {
  //     setLoadingArticles(false);
  //   }
  // };

  const fetchArticles = async () => {
    setLoadingArticles(true);
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=mental%20health&apiKey=690c534bd52c4d1e8353e4c34b64eb97",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check for non-200 HTTP response
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Check if articles exist
      if (data.articles && data.articles.length > 0) {
        const randomArticles = data.articles
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        setArticles(randomArticles);
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setArticles([]); // Fallback to an empty list
    } finally {
      setLoadingArticles(false);
    }
  };

  const fetchVideos = async () => {
    setLoadingVideos(true);
    try {
      const response = await fetch(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&q=mental%20health&type=video&maxResults=3&key=AIzaSyCkLns1-totD5VbO3sRwUHFwDspAKCLyN4"
      );
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setVideos(data.items);
      } else {
        setVideos([]);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideos([]);
    } finally {
      setLoadingVideos(false);
    }
  };

  useEffect(() => {
    fetchArticles();
    fetchVideos();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideButtons />
      <div
        id="main-content"
        className="flex-1 transition-all duration-300"
        style={{ marginLeft: isExpanded ? "260px" : "80px" }}
      >
        <Header />

        <div className="p-6 font-sans">
          {/* Articles Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-teal-500 to-teal-30 rounded-xl p-8 mb-8 shadow-sm">
              <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">
                Discover the Power of Reading
              </h1>
              <p className="text-gray-600 text-center text-lg">
                Reading can help relax your mind, reduce stress, and improve
                mental well-being.
              </p>
            </div>

            {loadingArticles ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-pulse text-lg text-gray-600">
                  Loading articles...
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {article.urlToImage && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={article.urlToImage}
                          alt={article.title}
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2">
                        {article.title}
                      </h3>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-teal-800 hover:text-teal-700 font-medium"
                      >
                        Read more
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center mt-8">
              <button
                onClick={fetchArticles}
                className="bg-teal-50 text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
              >
                Load More Articles
              </button>
            </div>
          </section>

          {/* Videos Section */}
          <section>
            <div className="bg-gradient-to-r from-blue-100 to-indigo-50 rounded-xl p-8 mb-8 shadow-sm">
              <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">
                Explore the World of Videos
              </h1>
              <p className="text-gray-600 text-center text-lg">
                Videos can provide inspiration, practical tips, and insights to
                boost your mental well-being.
              </p>
            </div>

            {loadingVideos ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-pulse text-lg text-gray-600">
                  Loading videos...
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48 overflow-hidden group">
                      <img
                        src={video.snippet.thumbnails.high.url}
                        alt={video.snippet.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2">
                        {video.snippet.title}
                      </h3>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                      >
                        Watch now
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="text-center mt-8">
              <button
                onClick={fetchVideos}
                className="bg-indigo-50 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
              >
                Load More Videos
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthContent;
