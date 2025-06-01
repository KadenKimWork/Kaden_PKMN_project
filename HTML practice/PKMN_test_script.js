let Player = {
    party: [

    ],
    items: {
        PokeBall: {
            name: "Pokeball",
            quantity: 10
        },
        Potion: {
            name: "Potion",
            quantity: 5
        }
    }
    
}


let continue_button = document.querySelector("#continue_button");
let player_party_button = document.querySelector("#player_party");
//let player_name = "";

continue_button.addEventListener("click", () => {

    let player_name = "";
    let name_ask = prompt("What is your name?");
    player_name = name_ask;

    if (name_ask === null || name_ask === undefined) {
        name_ask = prompt("What is your name?");
        player_name = name_ask;
    };

    alert(`Hello, ${player_name}!`);

});

let party_sentence = document.querySelector("#player_party");


continue_button.addEventListener("click", event => {

    let pokemon_name = event.target.textContent;
    party_sentence.textContent += pokemon_name;
    party_sentence.textContent += " ";

});


let chosen_starter_name = "";

let starter_charmander = document.querySelector("#starter_charmander");
let starter_squirtle = document.querySelector("#starter_squirtle");
let starter_bulbasaur = document.querySelector("#starter_bulbasaur");

starter_charmander.addEventListener("click", () => {
    chosen_starter_name = "Charmander"
    party_sentence.textContent += chosen_starter_name;
    party_sentence.textContent += ", ";

});
starter_squirtle.addEventListener("click", () => {
    chosen_starter_name = "Squirtle"
    party_sentence.textContent += chosen_starter_name;
    party_sentence.textContent += ", ";
});
starter_bulbasaur.addEventListener("click", () => {
    chosen_starter_name = "Bulbasaur"
    party_sentence.textContent += chosen_starter_name;
    party_sentence.textContent += ", ";
});

let starter_pokemon_list = document.querySelector("#starter_pokemon");

starter_pokemon_list.addEventListener("click", () => {
    alert(`You chose the Pokemon, ${chosen_starter_name}!`);
    Player.party.pokemon_name = `${chosen_starter_name}`;
    //Player.party.push([]);

});


/*
let charmander_button = document.querySelector("#charmander");
let squirtle_button = document.querySelector("#squirtle");
let bulbasaur_button = document.querySelector("#bulbasaur");

charmander_button.addEventListener("click", () => {

    alert(`You chose the Pokemon, Charmander`);
    player[0].name = "Charmander";
    player_party_button = "PLAYER PARTY:\n[1] Charmander";

});

squirtle_button.addEventListener("click", () => {

    alert(`You chose the Pokemon, Squirtle`);
    player[0].name = "Squirtle";

});

bulbasaur_button.addEventListener("click", () => {

    alert(`You chose the Pokemon, Bulbasaur`);
    player[0].name = "Bulbasaur";

});
*/


