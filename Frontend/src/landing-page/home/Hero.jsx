import React from "react";

function hero() {
  return (
    <div className="container p-5">
      <div className="row  text-center">
        <img src="/media/coin.png" alt="HEro image" className="mb-5" />
        <h1>Invest In Everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary"
          style={{ width: "30%", margin: "0 auto" }}
        >
          {" "}
          SignUp Now{" "}
        </button>
      </div>
    </div>
  );
}

export default hero;
