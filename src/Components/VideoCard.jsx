import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "../Context/HistoryContext";
import { FunctionalBtns } from "./FunctionalBtns";

const VideoCard = ({ data, history }) => {
  const { addToHistory } = useHistory();
  return (
    <div className="border p-5 m-3 bg-slate-400 rounded-md w-72 static">
      <Link
        to={`/player/${data._id}`}
        onClick={() => {
          addToHistory(data._id);
        }}
      >
        <img
          className="h-40 w-full rounded-md object-cover"
          src={data.image}
          alt={data.title}
        />
        <h2 className="text-2xl">{data.title}</h2>
        <h5 className="font-medium">{data.creator}</h5>
        <div className="flex gap-2 justify-between ">
          <span>{data.views} views</span> <span>{data.date}</span>{" "}
        </div>
      </Link>
      <FunctionalBtns IsVideo={data} className={"flex justify-between mt-2"} history={history}/>
    </div>
  );
};

export { VideoCard };
