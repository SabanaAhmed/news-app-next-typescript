import axios from 'axios';

const API_KEY = 'd265a3b3-9e61-4c06-8132-d04497d84c47';//process.env.NEXT_THEGUARDIAN_REST_API_KEY;

export const fetchNews = async (searchTerm: string) => {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/search?q=${searchTerm}&api-key=${API_KEY}`
    );

    return response.data.response.results;
  } catch (error) {
    throw new Error('Error fetching news: ' + error);
  }
};