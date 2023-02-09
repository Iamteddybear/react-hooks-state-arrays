import React, { useState } from "react";

const SpicyFoodList = () => {
  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Buffalo Wings",
      heatLevel: 8,
      cuisine: "American",
    },
    {
      id: 2,
      name: "Mapo Tofu",
      heatLevel: 9,
      cuisine: "Sichuan",
    },
    {
      id: 3,
      name: "Tom Yum Soup",
      heatLevel: 7,
      cuisine: "Thai",
    },
    {
      id: 4,
      name: "Chilli Con Carne",
      heatLevel: 6,
      cuisine: "Mexican",
    },
  ]);

  const [selectedCuisine, setSelectedCuisine] = useState("All");

  function handleCuisineChange(e) {
    setSelectedCuisine(e.target.value);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1,
        };
      } else {
        return food;
      }
    });
    setFoods(newFoodArray);
  }

  const filteredFoods =
    selectedCuisine === "All"
      ? foods
      : foods.filter((food) => food.cuisine === selectedCuisine);

  const foodList = filteredFoods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select name="filter" onChange={handleCuisineChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
};

export default SpicyFoodList;
