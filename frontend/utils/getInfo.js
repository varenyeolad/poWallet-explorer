//getInfo
export async function getAddressInfo(address) {
    const res = await fetch(`http://143.110.178.16:8000/address-info/${address}`, {
      headers: {
        "X-API-KEY": "your_api_key_2"
      }
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch address info');
    }
  
    return res.json();
  }
  
  