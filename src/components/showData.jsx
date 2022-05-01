import { useState } from "react";

const ShowData = ({ data }) => {
  const paymentPost = async (payload) => {
    try {
      let res = await fetch("http://localhost:8080/payments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      let data = await res.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const payment = (value) => {
    const payload = {
      card: false,
      cash: false,
      upi: false,
    };
    if (value === "cash") {
      payload.cash = true;
    } else if (value === "card") {
      payload.card = true;
    } else {
      payload.cash = true;
      payload.card = true;
      payload.upi = true;
    }
    paymentPost(payload);
  };
  return (
    <>
      {!data
        ? null
        : data.map((el) => {
            return (
              <div key={el.id} className="allProducts">
                <div id="productDetails">
                  <div className="productLeftDiv">
                    <div>
                      <img src={el.img} alt="" />
                    </div>
                    <div>
                      <h1>{el.name}</h1>
                      <p className="grey">{el.desc}</p>
                      <p className="grey">Cost ₹{el.cost} for one</p>
                      <span>Min₹{el.min}</span>
                      <span>Up to 30 min</span>
                      <p>Accepts online payment only</p>
                    </div>
                  </div>
                  <div>
                    <p className="rating">{el.rating}</p>
                    <p className="grey">{el.votes} votes</p>
                    <p className="grey">{el.review} reviews</p>
                  </div>
                </div>
                <div className="payment">
                  <div className="hidden">abx</div>
                  <button>Order Online &gt;</button>
                  <span className="none">
                    <button
                      onClick={() => {
                        payment("cash");
                      }}
                    >
                      Cash Payment
                    </button>
                    <button
                      onClick={() => {
                        payment("card");
                      }}
                    >
                      Card Payment
                    </button>
                    <button
                      onClick={() => {
                        payment("all");
                      }}
                    >
                      All
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
    </>
  );
};

export { ShowData };