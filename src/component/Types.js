import React from "react";
import classNames from "classnames";

export default function Types(types) {
  
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
    <div className="mt-[15px] flex gap-[20px]">
      {types?.types?.map((item) => (
        <>
          <div className="flex gap-[20px]" key={item.type.url}>
            <span className={`${characterName} singlePage-characteristics capitalize ${classNames(`newName : ${item.type?.name}`)}`}>
              {item.type.name}
            </span>
          </div>
        </>
      ))}
      
    </div>
  );
}
