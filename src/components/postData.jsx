const updateData = async (payload, getData) => {
    try {
      let data = await fetch("http://localhost:8080/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let data1 = await data.json();
      // return data1;
      console.log(data1);
      // console.log(data1);
      getData();
    } catch (error) {
      console.log(error.message, "error");
    }
  };
  
  /// collect data from frontend
  const collectData = (url, name, desc, getData) => {
    const payload = {
      img: url,
      id: Math.floor(Math.random() * 100),
      name: name,
      desc: desc,
      cost: Math.floor(Math.random() * 1000),
      min: Math.floor(Math.random() * 50),
      rating: (Math.random() * 5).toFixed(1),
      review: Math.floor(Math.random() * 100),
      votes: Math.floor(Math.random() * 100),
    };
    // console.log(payload, "payload");
  
    updateData(payload, getData);
  };
  
  export { collectData };