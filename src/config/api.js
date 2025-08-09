// Base API URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.coingecko.com/api/v3';

export const CoinList = currency =>
  `${API_BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = id => `${API_BASE_URL}/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
  `${API_BASE_URL}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = currency =>
  `${API_BASE_URL}/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
