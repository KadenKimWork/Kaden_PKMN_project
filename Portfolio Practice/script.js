

let viewing = true;

let done_button = document.querySelector("#done_box");

let member_list = document.querySelector("#member_list");

let found_photo = document.querySelector("#/Users/found/Pictures/Found_Air Freeze.JPG");


/*member_list.addEventListener("click", () => {

    console.log("clicked!");

});
*/

let cozy_bio = "Ben Coz, aka 'Bboy Cozy' is a Korean-American Bboy who is known for his threading.\nAge: 35\nYears of experience: 15";
let cozy_button = document.querySelector("#cozy");
let bio = document.querySelector("#bio");


cozy_button.addEventListener("click", event => {

    viewing = true;
    console.log("cozy_button, clicked!");
    
    if (viewing = true) {
        let member_name = event.target.textContent;
        bio.textContent += member_name + `: ${cozy_bio}`;
    } else if (viewing = false) {
        console.log("viewing = false");
    };
    
    
    
});

let found_bio = "Kaden Kim, aka 'Bboy Found' is a Korean-American Bboy known for his originality.\nAge: 31\nYears of experience: 15";
let found_button = document.querySelector("#found");


found_button.addEventListener("click", event => {

    viewing = true;
    console.log("found_button, clicked!");
    
    if (viewing = true) {
        let member_name = event.target.textContent;
        bio.textContent += member_name + `: ${found_bio} + ${found_photo}`;
    } else if (viewing = false) {

        console.log("viewing = false");

    };
    
    
});

let viper_bio = "Jiwan Kim, aka 'Bboy Viper' is a Korean-Filipino Bboy know for his flexibility.\nAge: 28\nYears of experience: 15";
let viper_button = document.querySelector("#viper");


viper_button.addEventListener("click", event => {

    viewing = true;
    console.log("found_button, clicked!");
    
    if (viewing = true) {
        let member_name = event.target.textContent;
        bio.textContent += member_name + `: ${viper_bio}`;
    } else if (viewing = false) {
        console.log("viewing = false");
    };
    
    
});

done_button.addEventListener("click", event => {

    console.log("done_button, clicked!");
    viewing = false;
    bio = "";

});