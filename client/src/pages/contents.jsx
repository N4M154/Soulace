import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideButtons from "../components/SideButtons";

const MentalHealthContent = () => {
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(false);
  const [loadingVideos, setLoadingVideos] = useState(false);
  

  const fetchArticles = async () => {
    setLoadingArticles(true);
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=mental%20health&apiKey=690c534bd52c4d1e8353e4c34b64eb97"
      );
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        const randomArticles = data.articles.sort(() => 0.5 - Math.random()).slice(0, 3);
        setArticles(randomArticles);
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setArticles([]);
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
    <div>
      <Header />
      <SideButtons/>
    <div className="flex">
      
      <div
        
        className="transition-all duration-300"
        style={{
          marginLeft:  "400px" ,
        }}
      >
        
        <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "white", padding: "20px" }}>
          <div style={{ maxWidth: "2000px" }}>
            <div style={{ backgroundColor: "#d2e9d9", padding: "10px", borderRadius: "5px", marginBottom: "20px" }}>
              <h1 style={{ textAlign: "center", color: "black", margin: "0", fontSize: "24px" }}>
                Discover the Power of Reading
              </h1>
              <p style={{ textAlign: "center", color: "gray", margin: "5px 0 0" }}>
                Reading can help relax your mind, reduce stress, and improve mental well-being.
              </p>
            </div>

            {loadingArticles ? (
              <p style={{ textAlign: "center" }}>Loading articles...</p>
            ) : (
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                {articles.map((article, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      width: "300px",
                      overflow: "hidden",
                    }}
                  >
                    {article.urlToImage && (
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        style={{ width: "100%", height: "180px", objectFit: "cover" }}
                      />
                    )}
                    <div style={{ padding: "15px" }}>
                      <h3 style={{ fontSize: "18px", color: "#333", margin: "0 0 10px" }}>{article.title}</h3>
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1e90ff", textDecoration: "none", fontSize: "14px" }}
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={fetchArticles}
                style={{
                  color: "teal",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                More
              </button>
            </div>
          </div>

          <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "20px" }}>
            <div style={{ backgroundColor: "#cce7ff", padding: "10px", borderRadius: "5px", marginBottom: "20px" }}>
              <h1 style={{ textAlign: "center", color: "black", margin: "0", fontSize: "24px" }}>
                Explore the World of Videos
              </h1>
              <p style={{ textAlign: "center", color: "gray", margin: "5px 0 0" }}>
                Videos can provide inspiration, practical tips, and insights to boost your mental well-being.
              </p>
            </div>

            {loadingVideos ? (
              <p style={{ textAlign: "center" }}>Loading videos...</p>
            ) : (
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                {videos.map((video, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      width: "300px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={video.snippet.thumbnails.high.url}
                      alt={video.snippet.title}
                      style={{ width: "100%", height: "180px", objectFit: "cover" }}
                    />
                    <div style={{ padding: "15px" }}>
                      <h3 style={{ fontSize: "18px", color: "#333", margin: "0 0 10px" }}>{video.snippet.title}</h3>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#1e90ff", textDecoration: "none", fontSize: "14px" }}
                      >
                        Watch now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                onClick={fetchVideos}
                style={{
                  color: "blue",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MentalHealthContent;
