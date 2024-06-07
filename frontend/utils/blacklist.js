const axios = require("axios");

let blacklistData = {};

const fetchBlacklistData = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/scamsniffer/scam-database/main/blacklist/all.json');
    blacklistData = response.data;
    console.log('Blacklist data fetched successfully');
  } catch (error) {
    console.error('Error fetching blacklist data:', error);
  }
};

const getBlacklistData = () => {
  return blacklistData;
};

module.exports = { fetchBlacklistData, getBlacklistData };
