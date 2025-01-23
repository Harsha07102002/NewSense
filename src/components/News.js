import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const { country, category, pageSize, apiKey, setProgress } = props;

  useEffect(() => {
    document.title = `NewSense - ${category.charAt(0).toUpperCase()}${category.slice(1)}`;
    fetchArticles();
    // eslint-disable-next-line
  }, []);

  const fetchArticles = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    try {
      setProgress(0);
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles || []);
      setTotalResults(data.totalResults || 0);
      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setProgress(100);
    }
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${pageSize}`;
    try {
      setPage((prevPage) => prevPage + 1);
      const response = await fetch(url);
      const data = await response.json();
      setArticles((prevArticles) => prevArticles.concat(data.articles || []));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "40px 0px" }}>
        NewSense - Top Headlines on{" "}
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.length > 0 ? (
              articles.map((article) => (
                <div className="col-md-4" key={article.url}>
                  <NewsItem
                    title={article.title || "No title available"}
                    description={article.description || "No description available"}
                    imageUrl={
                      article.urlToImage ||
                      "https://thumbs.dreamstime.com/b/web-324830775.jpg"
                    }
                    newsUrl={article.url || "#"}
                    author={article.author || "Unknown"}
                    date={article.publishedAt || "No date and time"}
                    source={article.source.name}
                  />
                  <br />
                </div>
              ))
            ) : (
              <p>No articles available.</p>
            )}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
