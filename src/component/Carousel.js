
import { useState } from "react";
import Router from "next/router";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

export default function BootstrapCarousel({ newData }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {newData?.map((pokemon) => (
        <Carousel.Item key={pokemon.id} className="card-item" interval={10000}>
          <div className="homePage__topPart-contents-details-card cursor-pointer bg-white text-black hover:bg-blue hover:text-white ease-in duration-400 rounded-[4px] p-[10px]"
          onClick={()=> Router.push({
            pathname: '/single/single',
            query : {url : pokemon.url,
                    poke : pokemon.name,
                    id : pokemon.id,
                    image : pokemon.image,
                  }
          })}>
            <div className="homePage__topPart-contents-details-card-image bg-neutral-200 p-[10px] rounded-[4px] mx-auto relative w-[215px] h-[215px]">
              <Image
                className="w-full h-full homePage__topPart-contents-details-card-image-item"
                src={`${pokemon.image}`}
                alt="sample"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
            <div className="homePage__topPart-contents-details-card-name my-[16px] text-base font-normal capitalize">
              {pokemon.name}
            </div>
            <div className="homePage__topPart-contents-details-card-speciality flex gap-x-[10px]">
              <span className="card-speciality bg-light-green">Grass</span>
              <span className="card-speciality bg-purple">Poison</span>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
