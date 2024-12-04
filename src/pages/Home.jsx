import React, { useState } from "react";
import {useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

const Home = () => {
  const loadedCoffeCollection = useLoaderData();
  const [coffeeCollection, setCoffeeColection] = useState(
    loadedCoffeCollection
  );
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {coffeeCollection.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffeeCollection={coffeeCollection}
            setCoffeeColection={setCoffeeColection}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
