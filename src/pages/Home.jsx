// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import blogs from "../data/blog";
import "../styles/Home.css"
// import axios from "axios"; // optional, can use fetch instead

function Home() {
  // const [blogs, setBlogs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Fetching the blog data from an API
  //   const fetchBlogs = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://cryptonews-api.com/api/v1?tickers=PEPE&items=3&page=2nwuj2pkt"
  //       );
  //       setBlogs(response.data.data); // Assuming the data is an array of blogs
  //       setLoading(false);
  //       console.log(response.data.data)
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>NEWS</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.news_url} className="blog-card">
            <div className="crypto_img">
              <img src={blog.image_url} alt="Not loading" />
            </div>
            <div className="crypto_content">
              <a href={blog.news_url} target="_blank" rel="noopener noreferrer">
                <h2>{blog.title}</h2>
              </a>
              <p className="text">{blog.text}</p>
              <div className="meta">
                {blog.tickers.map((ticker) => (
                  <div key={ticker} className="tickers">
                    {ticker}
                  </div>
                ))}
                <p className="time">{blog.time}</p>
                <p className={blog.sentiments === "Positive"? 'positive':'negative'}>{blog.sentiments}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

