import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pavel-ilin`
    )
      .then(res => res.json())
      .then(response => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const renderArticles = (data) => {
      return data.map((article) => {
        console.log(article)
        return  <article key={article.pubDate}>
                  <img width="20%" src={article.thumbnail} />
                  <h3><a href={article.link}>{article.title}</a></h3>
                </article>
      })
  }

  return (
    <div>
      <div>
        <h2 className="App-header">Pavel Ilin's blog</h2>
      </div>
      <div className="App">
          {!isLoading && renderArticles(mediumData)}
      </div>
    </div>
  );
}

export default App;
