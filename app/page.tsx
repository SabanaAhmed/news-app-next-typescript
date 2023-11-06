'use client'

import { useState, useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const [newsSearchTerm, setSearchNewsTerm] = useState('');

  /*
  // Function to fetch the news
  // This will get the news by calling the REST API
  */
  useEffect(() => {
    const fetchNewsfromAPI = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_THEGUARDIAN_REST_API}search?q=`+newsSearchTerm+`&api-key=${process.env.NEXT_PUBLIC_THEGUARDIAN_REST_API_KEY}`
        ); 

        const data = await response.json();
        setNews(data.response.results);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNewsfromAPI();
  }, []);

  /*
  // Function to set the search term
  // This will replace set the value of newsSearchTerm variable to whatever user types.
  */
  const setSearchTerm = (e) => {
    setSearchNewsTerm(e.target.value);
  };

  /*
  // Function to filter the news
  // This will match the search term to news title
  */
  const filteredNewsList = news.filter((newsItem) =>
    newsItem.webTitle.toLowerCase().includes(newsSearchTerm.toLowerCase())
  );

 // Return html to display

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">News</h1>
      <input
        type="text"
        placeholder="Search News"
        value={newsSearchTerm}
        onChange={setSearchTerm}
        className="p-2 rounded-md border border-gray-300 mb-4"
      />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredNewsList.map((newsItem) => (
          <div key={newsItem.id} className="border p-4 rounded-md">
            <h3 className="text-lg font-bold mb-2"><a href={newsItem.webUrl} target='_blank'>{newsItem.webTitle}</a></h3>
            <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md">Add to Favorites</button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8">Favorites</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
      </div>
    </div>
  );
};

export default News;
