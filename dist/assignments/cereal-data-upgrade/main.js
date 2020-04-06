const cereal = [
  {
    name: "Apple Cinnamon Cheerios",

    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "10",
    rating: 29.5,
  },
  {
    name: "Apple Jacks",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "14",
    rating: 33.1,
  },
  {
    name: "Cap'n'Crunch",
    type: "Cold",
    calories: "120",
    vitamins: "25",
    sugar: "12",
    rating: 18,
  },
  {
    name: "Cheerios",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "1",
    rating: 50.8,
  },
  {
    name: "Cinnamon Toast Crunch",
    type: "Cold",
    calories: "120",
    vitamins: "25",
    sugar: "9",
    rating: 19.8,
  },
  {
    name: "Cocoa Puffs",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "13",
    rating: 22.7,
  },
  {
    name: "Cream of Wheat (Quick)",
    type: "Hot",
    calories: "100",
    vitamins: "0",
    sugar: "0",
    rating: 64.5,
  },
  {
    name: "Froot Loops",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "13",
    rating: 32.2,
  },
  {
    name: "Frosted Flakes",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "11",
    rating: 31.4,
  },
  {
    name: "Fruity Pebbles",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "12",
    rating: 28,
  },
  {
    name: "Honey Nut Cheerios",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "10",
    rating: 31,
  },
  {
    name: "Lucky charms",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "12",
    rating: 26,
  },
  {
    name: "Multi-Grain Cheerios",
    type: "Cold",
    calories: "100",
    vitamins: "25",
    sugar: "6",
    rating: 40,
  },
  {
    name: "Quaker Oatmeal",
    type: "Hot",
    calories: "100",
    vitamins: "0",
    sugar: "-1",
    rating: 50.8,
  },
  {
    name: "Raisin Bran",
    type: "Cold",
    calories: "120",
    vitamins: "25",
    sugar: "12",
    rating: 39.2,
  },
  {
    name: "Rice Krispies",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "3",
    rating: 40.5,
  },
  {
    name: "Trix",
    type: "Cold",
    calories: "110",
    vitamins: "25",
    sugar: "12",
    rating: 27.7,
  },
];

function searchCereal(cerealName) {
  cereal.forEach(function (element) {
    if (element.name.includes(document.getElementById("search").value)) {
      let body = $("</body>");
      let cerealItem = $("<div/>", { class: "cereal-item" });
      let cerealName = $("<div/>", { class: "cereal-name" }).html(element.name);
      let cerealType = $("<div/>", { class: "cereal-type" }).html(
        "Type: " + element.type
      );
      let cerealCalories = $("<div/>", { class: "cereal-calories" }).html(
        "Calories: " + element.calories
      );
      let cerealVitamins = $("<div/>", { class: "cereal-vitamins" }).html(
        "Num. of Vitamins: " + element.vitamins
      );
      let cerealSugar = $("<div/>", { class: "cereal-sugar" }).html(
        "Grams of Sugar: " + element.sugar
      );
      let cerealRating = $("<div/>", { class: "cereal-rating" }).html(
        "Rating: " + element.rating + "/100"
      );
      let approvalButton = $("<button>", {
        class: "approval-button",
      }).html("Check Approval");

      $("#result").append(cerealItem);

      $(cerealName).appendTo(cerealItem);
      $(cerealType).appendTo(cerealItem);
      $(cerealCalories).appendTo(cerealItem);
      $(cerealVitamins).appendTo(cerealItem);
      $(cerealSugar).appendTo(cerealItem);
      $(cerealRating).appendTo(cerealItem);
      $(approvalButton).appendTo(cerealItem);

      $(approvalButton).click(function () {
        let modalBackground = $("<div/>", { class: "modal-background" });
        let modal = $("<div/>", {
          class: "modal",
        });
        let approvedImg = $("<img>", {
          class: "approval-img",
          src:
            "https://cdn.pixabay.com/photo/2017/06/09/05/21/ok-2385794_960_720.jpg",
        });
        let deniedImg = $("<img>", {
          class: "approval-img",
          src:
            "https://cdn.pixabay.com/photo/2018/01/12/21/06/shocked-3079071_960_720.jpg",
        });
        let approvedTxt = $("<h2/>").html("This cereal is Mom Approved!");
        let deniedTxt = $("<h2/>").html("This cereal is Mom Denied!");

        if (element.rating > 35) {
          $(modalBackground).appendTo("body");
          $(modal).appendTo(modalBackground);
          $(approvedImg).appendTo(modal);
          $(approvedTxt).appendTo(modal);
        } else {
          $(modalBackground).appendTo("body");
          $(modal).appendTo(modalBackground);
          $(deniedImg).appendTo(modal);
          $(deniedTxt).appendTo(modal);
        }

        $(modalBackground).click(function () {
          $(modalBackground).hide();
          $(modal).hide();
          $(approvedImg).hide();
          $(approvedTxt).hide();
        });
      });
    }
  });
}
