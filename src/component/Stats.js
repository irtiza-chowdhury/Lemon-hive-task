import React from "react";

export default function Stats(stats) {
  return (
    <>
      {stats?.stats?.map((item) => (
        <div className="mt-[20px]" key={item.stat.url}>
          <div className="stat-details-title capitalize">{item.stat.name}</div>
          <div className="stat-details-percentage meter">
            <span
              data-progress="14"
              style={{ width: `${item?.base_stat}%` }}
            ></span>
          </div>
        </div>
      ))}
    </>
  );
}
