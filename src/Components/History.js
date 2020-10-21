import React from "react";
import "../styles/History.sass";

const History = ({ historyData }) => {
  console.log(typeof historyData);
  return (
    <div className="History">
      <h2>Last Operations</h2>
      {historyData.map((curr, i) => (
        <p key={i}>{curr}</p>
      ))}
    </div>
  );
};

export default History;
