var deck = new Array();
var suits = ["spades", "hearts", "clubs", "diamonds"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var usedSuits = [];
var usedValues = [];
var shuffleButton = document.getElementById("shuffle");

function createDeck() {
  //Set i/j to less than the number of cards you want to print. If you want to print the whold deck, set i < suits.length and j < values.length
  for (let i = 0; i < 1; i++) {
    for (let j = 0; j < 1; j++) {
      var card = {
        Value: values[Math.floor(Math.random() * values.length)],
        Suit: suits[Math.floor(Math.random() * suits.length)]
      };
      console.log(card.Suit, card.Value);

      for (let y = 0; y < usedSuits; y++) {
        for (let t = 0; t < usedValues; t++) {
          if (usedSuits[y] == card.Suit && usedValues[t] == card.Value) {
            console.log(usedSuits[y], usedValues[t]);
            createDeck();
          }
        }
      }

      deck.push(card);
      console.log(deck);

      usedSuits.push(deck["0"].Suit);
      usedValues.push(deck["0"].Value);
      console.log(usedSuits, usedValues);
    }
  }

  return deck;
}

function renderDeck() {
  document.getElementById("cards").innerHTML = "";
  for (let y = 0; y < deck.length; y++) {
    let card = document.createElement("div");
    let value = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit" + deck[y].Suit; //Example: class="suitspades"

    value.innerHTML = deck[y].Value;
    card.appendChild(value);
    card.appendChild(suit);

    document.getElementById("cards").appendChild(card);
  }
  return deck.shift();
}

function removeCard() {
  for (i = 0; i < suits.length; i++) {
    for (j = 0; j < values.length; j++) {
      if (suits[i] == Suit && values[j] == Value) {
      }
    }
  }
}

shuffleButton.addEventListener("click", function() {
  deck.length = 0; //Resets the deck array (Removes all cards)
  createDeck();
  renderDeck();
});
createDeck();
renderDeck();

//Blackjack
var PlayerOne = {
  Total: values
};
