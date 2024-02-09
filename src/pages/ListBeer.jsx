import React, { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { Link } from "react-router-dom";

export const List = () => {
  const { beerData, isLoading } = useContext(BeerContext);

  if (isLoading) {
    return <div >Loading...</div>;
  }

  return (
    <div >
      <h1 >List</h1>
      <div >
        {beerData.map((beer) => (
          <Link key={beer.id} to={`${beer.id}`}>
            <div >
              <img
                src={beer.image_url}
                alt={beer.name}
              />
              <p >{beer.name}</p>
              <p >{beer.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
