async function getTopData() {
    const res = await fetch('http://143.110.178.16:8000/top-risk-addresses'
    , {
        headers: {
          "X-API-KEY": "your_api_key_2"
        }
      })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    const data = await res.json();
    console.log(data);
    return data;
   
}
  

  export {getTopData} 