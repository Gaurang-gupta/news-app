import React from "react";

const Card = ({ data }) => {
  const modifyDesc = (desc, length) => {
    const start = String(desc)
    let output = ""
    for(let i=0;i<Math.min(length, start.length);i++){
      output += start[i];
    }
    return output
  }
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg mx-auto relative">
      <div className="h-48">
        <img src={data?.image} alt={data?.title} className="object-cover w-full h-full" />
      </div>
      <div className="p-4 flex flex-col justify-between mb-12">
        <div>
          <h2 className="text-xl font-bold mb-2">{modifyDesc(data?.title, 50)}...</h2>
          <p className="text-gray-700 mb-4">{modifyDesc(data?.description, 50)}...</p>
        </div>
        <div className="text-sm text-gray-500 ">
        <h2 className="font-bold">By: {data?.author || "unknown"}</h2>
        <h2 className="font-bold pt-1">Source: {data?.source || "unknown"}</h2>
          <span className="italic">{modifyDesc(data?.published_at, 10)}</span>
        </div>
      </div>

      <div className="text-center cursor-pointer text-lg py-2 bg-orange-400 absolute w-full bottom-0">
        Read More
      </div>
    </div>
  );
};

export default Card;
