import React, { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { useParams } from "react-router-dom";

export const BeerDetail = () => {
  const { id } = useParams();
  const { beerData, isLoading } = useContext(BeerContext);

  if (isLoading) {
    return <div >Loading...</div>;
  }
  const selectedBeer = beerData.find((beer) => beer.id === Number(id));
  console.log("🚀 ~ BeerDetail ~ selectedBeer:", selectedBeer);

  return (
      <div>
      <h1>
        Know more about our beers{" "}
      </h1>
      <h2>
        {selectedBeer.name}
      </h2>
      <p>ABV: {selectedBeer.abv}</p>
      <p>{selectedBeer.tagline}</p>
      <p>First Brewed: {selectedBeer.first_brewed}</p>
        <img
          src={selectedBeer.image_url}
          alt={`${selectedBeer?.name}`}
        />
        <p>{selectedBeer.description}</p>
    </div>
  );
};
