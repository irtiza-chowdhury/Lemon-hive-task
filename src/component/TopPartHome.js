import React, { useEffect, useState } from "react";
import Image from "next/image";
import Background from "../assets/images/Background.png";
import Texture from "../assets/images/Texture.png";
import Logo from "../assets/images/Logo.png";
import BootstrapCarousel from "./Carousel";
import Router from "next/router";
import PokemonType from "./PokemonType";
import { TailSpin } from "react-loader-spinner";

const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
  pokemons(limit: $limit, offset: $offset) {
    count
    next
    previous
    status
    message
    results {
      id
      url
      name
      image
    }
  }
}`;
export default function TopPartHome() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const gqlVariables = {
      limit: 10,
      offset: 0,
    };
    const fetchData = async () => {
      setLoading(true);
      await fetch("https://graphql-pokeapi.graphcdn.app/", {
        credentials: "omit",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: gqlQuery,
          variables: gqlVariables,
        }),
        method: "POST",
      })
        .then((res) => res.json())
        .then((res) => setData(res));
      setLoading(false);
    };
    fetchData();
  }, []);
  const newData = data?.data?.pokemons?.results;
  return (
    <>
      <div className="homePage__topPart hidden md:block min-h-screen w-full relative">
        <div className="homePage__topPart-background absolute top-0 left-0 h-full w-full z-[-1]">
          <Image className="h-full w-full" src={Background} alt="background" />
          <div className="homePage__topPart-background-cover absolute top-0 left-0 h-full">
            <Image className="h-full w-full" src={Texture} alt="texture" />
          </div>
        </div>
        <div className="homePage__topPart-contents py-[60px] px-[30px] mx-auto">
          <div className="pokemon-logo ">
            <Image className="w-full h-full" src={Logo} alt="Logo" />
          </div>

          {loading ? (
            <div className="flex justify-center items-center mt-[100px]">
              <TailSpin
                className="m-auto"
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : (
            <div className="homePage__topPart-contents-details mt-[40px] grid grid-cols-1 mobile:grid-cols-2 tab:grid-cols-3 lg:grid-cols-4 laptop:grid-cols-5 2xl:grid-cols-5 gap-x-[10px] gap-y-[10px] w-full min-h-full 2xl:w-[95%] 2xl:pl-[20px] mx-auto xl:pl-[10px]">
              {newData?.map((pokemon) => (
                <div
                  key={pokemon.id}
                  className="min-h-fit overflow-hidden w-[235px]"
                  onClick={() =>
                    Router.push({
                      pathname: "/single/single",
                      query: {
                        url: pokemon.url,
                        poke: pokemon.name,
                        id: pokemon.id,
                        image: pokemon.image,
                      },
                    })
                  }
                >
                  <div className="homePage__topPart-contents-details-card bg-white text-black hover:bg-blue hover:text-white ease-in duration-400 rounded-[4px] p-[10px]">
                    <div className="homePage__topPart-contents-details-card-image aspect-auto bg-neutral-200 p-[10px] rounded-[4px] relative w-[215px] h-[215px]">
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
                    <PokemonType name={pokemon.name} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <>
        {/* mobile design */}
        <div className="homePage__topPart min-h-screen w-full relative block md:hidden">
          <div className="homePage__topPart-background absolute top-0 left-0 h-full w-full z-[-1]">
            <Image
              className="h-full w-full"
              src={Background}
              alt="background"
            />
            <div className="homePage__topPart-background-cover absolute top-0 left-0 h-full">
              <Image className="h-full w-full" src={Texture} alt="texture" />
            </div>
          </div>
          <div className="homePage__topPart-contents py-[60px] px-[30px]">
            <div className="pokemon-logo">
              <Image className="w-full h-full" src={Logo} alt="Logo" />
            </div>
            {loading ? (
              <div className="flex justify-center align-middle">
                <TailSpin
                  height="80"
                  width="80"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            ) : (
              <div className="homePage__topPart-contents-details items-center mt-[100px] w-full min-h-full">
                <BootstrapCarousel newData={newData} />
              </div>
            )}
          </div>
        </div>
      </>
    </>
  );
}
