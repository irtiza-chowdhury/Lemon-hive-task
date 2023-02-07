import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Home from "../../assets/images/Home.svg";
import Logo from "../../assets/images/Logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import Abilities from "@/component/Abilities";
import Types from "@/component/Types";
import Stats from "@/component/Stats";
import Weakness from "@/component/Weakness";

const gqlQuery = `query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      order
      height
      weight
      types{
       type{
        id
        url
        name
      }
      }    
      abilities{
        ability{
        url
        name
        }
      }
      stats {
        base_stat
        stat{
        url
        name
        }
      }
      sprites {
        front_default
      }
      status
      species{
        name
      }
    }
  }`;

export default function Single() {
  const [data, setData] = useState();

  const router = useRouter();
  const query = router?.query;
  const pokemon = query?.poke;
  const url = query?.url;
  const id = query?.id;
  const image = query?.image;

  useEffect(() => {
    const gqlVariables = {
      name: pokemon,
    };
    const fetchData = async () => {
      await fetch(`https://graphql-pokeapi.graphcdn.app/`, {
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
    };
    fetchData();
  }, [pokemon]);

  const basic = data?.data?.pokemon;
  const height = basic?.height;
  const weight = basic?.weight;
  const abilities = basic?.abilities;
  const types = basic?.types;
  const stats = basic?.stats;
  const newName = basic?.name;

  return (
    <>
      <div className="outer singlePage flex columns-3 justify-between min-h-fit">
        <div className="inner sidebar-container hidden md:block">
          <div className="singlePage__content w-[93%] mx-auto bg-white pt-[60px] pb-[100px] px-[10px]">
            <div className="pokemon-logo">
              <Image
                className="w-full h-full"
                src={Logo}
                alt="Logo"
                width="0"
                height="0"
                sizes="100vw"
              />
            </div>
            <div className="singlePage__content-body mt-[80px] w-full flex md:columns-3 flex-wrap gap-[30px] ">
              <div className="singlePage__content-body-about w-[100%] md:w-[50%] lg:w-[32%] xl:w-[31%] order-2 md:order-1">
                <div className="singlePage__content-body-about-basic">
                  <div className="singlePage__content-body-about-basic-title text-large md:text-xl text-blue font-medium whitespace-nowrap capitalize">
                    {pokemon} #0{id}
                  </div>
                  <div className="singlePage__content-body-about-basic-text mt-[30px] text-base md:text-lg text-black font-normal text-justify">
                    There is a plant seed on its back right from the day this
                    Pokémon is born. The seed slowly grows larger.
                  </div>
                </div>
                <div className="singlePage__content-body-about-basic-details mt-[40px]">
                  <div className="singlePage-card-wrapper w-[280px] xl:w-[300px]  relative ">
                    <div className="singlePage-card p-[20px] absolute top-[4px] left-[4px] bg-white w-[97%] flex  gap-[25px]">
                      <div>
                        <div className="singlePage-card-category">
                          <div className="singlePage-card-title ">Height</div>
                          {height}&apos;
                        </div>
                        <div className="singlePage-card-category mt-[20px]">
                          <div className="singlePage-card-title">Weight</div>
                          <div className="singlePage-card-value">
                            {weight} <span className="lowercase">lbs</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="singlePage-card-category ">
                          <div className="singlePage-card-title">Category</div>
                          <div className="singlePage-card-value">Seed</div>
                        </div>
                        <Abilities abilities={abilities} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="singlePage__content-body-display w-[100%] md:w-[45%] lg:w-[30%] xl:w-[30%] mb-[60px]  md:order-2">
                <div className="singlePage__content-body-image mx-auto w-[288px] md:w-[320px] xl:w-[370px] 2xl:w-[475px]">
                  <Image
                    className="w-full h-full"
                    src={image}
                    alt="sample"
                    width="0"
                    height="0"
                    sizes="100vw"
                  />
                </div>
              </div>
              <div className="singlePage__content-body-description w-[100%]  lg:w-[30%] xl:w-[33%] order-3">
                <div className="singlePage__content-body-description-type ">
                  <div className="singlePage-characteristics-title text-base md:text-lg text-black font-normal">
                    Type
                  </div>
                  <Types types={types} />
                </div>
                <Weakness types={types} />
                <div className="singlePage__content-body-description-stat mt-[50px]">
                  <div className="stat-title text-lg text-black font-normal">
                    Stats
                  </div>
                  <div className="stat-details mt-[30px]">
                    <Stats stats={stats} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[80px]">
              <Link
                className="text-small md:text-lg text-white font-normal px-[32px] py-[16px] bg-yellow flex gap-[10px] w-fit border-[6px] border-deep-blue rounded-[4px] "
                href="/"
              >
                <Image src={Home} alt="homePage" />
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>

        {/* mobile design */}
        <div className="singlePage__content block md:hidden w-[98%] sm:w-[95%] mx-auto bg-white pt-[60px] pb-[100px] px-[20px]">
          <div className="pokemon-logo">
            <Image
              className="w-full h-full"
              src={Logo}
              alt="Logo"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
          <div className="singlePage__content-body mt-[80px] flex md:columns-3 flex-wrap gap-[30px] ">
            <div className="singlePage__content-body-about w-[100%] md:w-[48%] xl:w-[31%] order-2 md:order-1">
              <div className="singlePage__content-body-about-basic">
                <div className="singlePage__content-body-about-basic-title text-large md:text-xl text-blue font-medium whitespace-nowrap capitalize">
                  {pokemon} #0{id}
                </div>
                <div className="singlePage__content-body-about-basic-text mt-[30px] text-base md:text-lg text-black font-normal text-justify">
                  There is a plant seed on its back right from the day this
                  Pokémon is born. The seed slowly grows larger.
                </div>
              </div>
              <div className="singlePage__content-body-about-basic-details mt-[40px]">
                <div className="singlePage-card-wrapper w-[280px] xl:w-[300px]  relative ">
                  <div className="singlePage-card p-[20px] absolute top-[4px] left-[4px] bg-white w-[97%] flex  gap-[25px]">
                    <div>
                      <div className="singlePage-card-category">
                        <div className="singlePage-card-title ">Height</div>
                        {height}&apos;
                      </div>
                      <div className="singlePage-card-category mt-[20px]">
                        <div className="singlePage-card-title">Weight</div>
                        <div className="singlePage-card-value">
                          {weight} <span className="lowercase">lbs</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="singlePage-card-category ">
                        <div className="singlePage-card-title">Category</div>
                        <div className="singlePage-card-value">Seed</div>
                      </div>
                      <Abilities abilities={abilities} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="singlePage__content-body-display w-[100%] md:w-[47%] xl:w-[31%] mb-[60px]  md:order-2">
              <div className="singlePage__content-body-image mx-auto w-[288px] md:w-[320px] xl:w-[370px] 2xl:w-[475px]">
                <Image
                  className="w-full h-full"
                  src={image}
                  alt="sample"
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="singlePage__content-body-description w-[100%] xl:w-[31%] order-3">
              <div className="singlePage__content-body-description-type ">
                <div className="singlePage-characteristics-title text-base md:text-lg text-black font-normal">
                  Type
                </div>
                <Types types={types} />
              </div>
              <Weakness types={types} />
              <div className="singlePage__content-body-description-stat mt-[50px]">
                <div className="stat-title text-lg text-black font-normal">
                  Stats
                </div>
                <div className="stat-details mt-[30px]">
                  <Stats stats={stats} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[80px]">
            <Link
              className="text-small md:text-lg text-white font-normal px-[32px] py-[16px] bg-yellow flex gap-[10px] w-fit border-[6px] border-deep-blue rounded-[4px] "
              href="/"
            >
              <Image src={Home} alt="homePage" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

//   const res = await fetch(`https://graphql-pokeapi.graphcdn.app/`)
//   const data = await res.json()
//   res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=10, stale-while-revalidate=59'
//   )

//   return {
//     props: {},
//   }
// }
// useEffect(() => {
//   const gqlVariables = {
//     name: pokemon,
//   };
//   const fetchData = async () => {
//     await fetch(`https://graphql-pokeapi.graphcdn.app/`, {
//       credentials: "omit",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         query: gqlQuery,
//         variables: gqlVariables,
//       }),
//       method: "POST",
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res));
//   };
//   fetchData();
// }, [pokemon]);
