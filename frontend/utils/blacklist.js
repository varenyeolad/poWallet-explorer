

export const fetchBlacklistData = async () => {

  const response = await fetch('https://raw.githubusercontent.com/scamsniffer/scam-database/main/blacklist/all.json');
  
  return response.json();
   
};


