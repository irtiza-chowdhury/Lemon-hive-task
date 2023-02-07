import React, { useState, useEffect } from "react";
import classNames from "classnames";

const gqlQuery = `query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      types {
        type {
          name
          url
        }
      }
    }
  }`;

export default function PokemonType({ name }) {
  const [data, setData] = useState();
  useEffect(() => {
    const gqlVariables = {
      name: `${name}`,
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
  }, [name]);

  const types = data?.data?.pokemon?.types;

  const characterName = (newName) => {
    switch (newName) {
      case "grass":
        return "grass";
      case "poison":
        return "poison";
      case "fire":
        return "fire";
      case "flying":
        return "flying";
      case "water":
        return "water";
      case "bug":
        return "bug";

      default:
        return null;
    }
  };

  return (
    <>
      <div className="homePage__topPart-contents-details-card-speciality flex gap-x-[10px]">
        {types?.map((item) => (
          <span
            key={item.type.url}
            className={`${characterName} card-speciality capitalize ${classNames(
              `newName : ${item.type?.name}`
            )}`}
          >
            {item.type?.name}
          </span>
        ))}
      </div>
    </>
  );
}
