
// const mainClick = document.querySelector(":not(input)");

// const foods = ["Aubergine", "Lasagne", "Thyme"]
// // console.log(foods[1]);

// search.addEventListener("focus", function() {
//     search.style.backgroundColor = "white";
//     searchField.style.backgroundColor = "white";

//     setInterval(switchPlaceholder, 500)
//     function switchPlaceholder(){
//        search.placeholder = foods[0];
       
//     };
    
// });

// mainClick.addEventListener("click", function() {
//     search.style.backgroundColor = "var(--color-grey-950)";
//     searchField.style.backgroundColor = "var(--color-grey-950)";
// });

function dropdown() {
    document.querySelector(".dropdown").classList.toggle("hidden");
    document.querySelector(".loginInfo").classList.add("hidden");
    document.querySelector(".dropdownButton svg").classList.toggle("dropdownButtonRotate");
}

function loginDropdown() {
    document.querySelector(".loginInfo").classList.toggle("hidden");
    document.querySelector(".dropdown").classList.add("hidden");
    document.querySelector(".dropdownButton svg").classList.remove("dropdownButtonRotate");

}

const searchFieldInput = document.querySelector(".searchField input");
const searchField = document.querySelector(".searchField");




searchFieldInput.addEventListener("focus",inFocus);
searchFieldInput.addEventListener("blur", inBlur);

// searchField.addEventListener("click", function (){
//     searchFieldInput.focus();
//  });


function inFocus(){
    if (searchFieldInput.focus = true){
        searchField.style.backgroundColor = "white";
        searchFieldInput.style.backgroundColor = "white";        
    } ;
};

function inBlur(){
    if (searchFieldInput.blur = true){
        searchField.style.backgroundColor = "var(--color-grey-950)";
        searchFieldInput.style.backgroundColor = "var(--color-grey-950)";       
    } ;
};


// HEART

const fullHeart = document.querySelector(".fullHeart");
const emptyHeart = document.querySelector(".emptyHeart");

function toggleHeart() {
    fullHeart.classList.toggle("hidden");
    emptyHeart.classList.toggle("hidden");
}