import React from "react";

export default function Abilities(abilities) {
  return (
    <>
      <div className="singlePage-card-category mt-[20px]">
        <div className="singlePage-card-title">Abilties</div>
        {abilities?.abilities?.map((ability) => (
          <div key={ability.ability.url} className="gap-[10px]">
            <div className="singlePage-card-value">{ability.ability.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
