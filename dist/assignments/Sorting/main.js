const cereal = [
  {
    name: "Apple Cinnamon Cheerios",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "10",
    rating: "29.5"
  },
  {
    name: "Apple Jacks",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "14",
    rating: "33.1"
  },
  {
    name: "Cap'n'Crunch",
    type: "Cold",
    calories: "120",
    vitamins: "25",
    sugar: "12",
    rating: "18"
  },
  {
    name: "Cheerios",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "1",
    rating: "50.8"
  },
  {
    name: "Cinnamon Toast Crunch",
    type: "Cold",
    calories: "120",
    vitamins: "25",
    sugar: "9",
    rating: "19.8"
  },
  {
    name: "Cocoa Puffs",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "13",
    rating: "22.7"
  },
  {
    name: "Cream of Wheat (Quick)",
    type: "Hot",
    calories: "100",
    vitamins: "0",
    sugar: "0",
    rating: "64.5"
  },
  {
    name: "Froot Loops",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "13",
    rating: "32.2"
  },
  {
    name: "Frosted Flakes",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "11",
    rating: "31.4"
  },
  {
    name: "Fruity Pebbles",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "12",
    rating: "28"
  },
  {
    name: "Honey Nut Cheerios",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "10",
    rating: "31"
  },
  {
    name: "Lucky charms",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "12",
    rating: "26"
  },
  {
    name: "Multi-Grain Cheerios",
    type: "Cold",
    calories: "100",
    vitamins: "25",
    sugar: "6",
    rating: "40"
  },
  {
    name: "Quaker Oatmeal",
    type: "Hot",
    calories: "100",
    vitamins: "0",
    sugar: "-1",
    rating: "50.8"
  },
  {
    name: "Raisin Bran",
    type: "Cold",
    calories: "120",
    vitamins: "25",
    sugar: "12",
    rating: "39.2"
  },
  {
    name: "Rice Krispies",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "3",
    rating: "40.5"
  },
  {
    name: "Trix",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "12",
    rating: "27.7"
  }
];

function searchCereal(cerealName) {
  cereal.forEach(function(element) {
    if (element.name.includes(cerealName)) {
      console.log(
        element.name +
          "\n Type: " +
          element.type +
          "\n Calories: " +
          element.calories +
          "\n Sugar: " +
          element.sugar +
          " grams" +
          "\n Number of Vitamins: " +
          element.vitamins +
          "\n Overall Health Rating: " +
          element.rating +
          "/100"
      );
    }
  });
}
function search() {
  const cerealName = document.getElementById("search").value;
  const message = searchCereal(cerealName);
  console.log(message);
  document.getElementById("result").innerHTML =
    "Check the console to see results";
}
