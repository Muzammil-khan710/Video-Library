import React from "react";
import { useHistory } from "../Context/HistoryContext";

const ClearHistoryBtn = () => {
  const { removeAllHistory } = useHistory();
  return (
    <div className="mt-3 mx-auto w-full flex">
      <button
        className="p-4 mx-auto bg-[#334756]  hover:bg-slate-500 active:bg-slate-400' rounded-md text-white"
        onClick={removeAllHistory}
      >
        Clear History
      </button>
    </div>
  );
};

export { ClearHistoryBtn };
