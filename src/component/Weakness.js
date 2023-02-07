import React from "react";
import classNames from "classnames";

export default function Weakness(types) {
  

  let totalType = ["grass", "poison", "fire", "water", "flying", "bug"];
  let type = [];
  type = types?.types?.map((item) => item.type.name);
  

  let weakness = [];
  let findWeakness = () => {
    weakness = totalType.filter((n) => !type?.includes(n));

    return weakness;
  };
  findWeakness();
 
  const characterName = newName => {
    switch (newName) {
      case 'grass':
        return 'grass';
      case 'poison':
        return 'poison';
      case 'fire':
        return 'fire';
      case 'flying':
        return 'flying';
      case 'water':
        return 'water';
      case 'bug':
        return 'bug';
  
      default:
        return null;
    }
  };
  
  return (
    <>
      <div className="singlePage__content-body-description-weakness mt-[40px]">
        <div className="singlePage-characteristics-title text-lg text-black font-normal">
          Weakness
        </div>
        <div className="mt-[15px] flex-wrap flex gap-[5px] sm:gap[10px] md:gap-[10px] xl:gap-[12px] 2xl-gap[20px]">
          {weakness?.map((item, index) => (
            <div className="" key={index}>
              <div className={`${characterName} singlePage-characteristics capitalize ${classNames(`newName : ${item}`)}`}>
                {item}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
