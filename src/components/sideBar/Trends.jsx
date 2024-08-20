import React, { useState } from "react";
import TrendsItem from "./TrendsItem";

// useState
function Trends() {
  const [trends, setTrends] = useState([
    {
      id: 1,
      type: "country",
      country: "morocco",
      direction: "rtl",
      content: "سلام و أمان",
      postCount: 1082,
    },
    {
      id: 1,
      type: "category",
      category: "web dev",
      direction: "rtl",
      content: "mdevc",
      postCount: 1082,
    },
    {
      id: 1,
      type: "country",
      country: "saudi arabia",
      direction: "ltr",
      content: "mdevc",
      postCount: 1082,
    },
    {
      id: 1,
      type: "category",
      category: "politics",
      direction: "ltr",
      content: "lmgharba ded tatbi3",
      postCount: 1082,
    },
  ]);
  return (
    <div className="p-3 rounded-[20px] flex flex-col  gap-3  border border-lightGray">
      <h3 className="text-xl font-extrabold">Trends for you</h3>
      <div className="flex flex-col gap-2">
        {trends.map((e) => (
          <TrendsItem key={e.id} e={e} />
        ))}
      </div>
    </div>
  );
}

export default Trends;
