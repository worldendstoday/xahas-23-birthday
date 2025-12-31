const birthdayCake = document.querySelector("#birthdayCake")
const cakeContainer = document.querySelector("#cakeContainer")
const notes = document.querySelector("#notes")
const cat1 = document.querySelector("#cat-dance1")
const cat2 = document.querySelector("#cat-dance2")
const cat3 = document.querySelector("#cat-dance3")
const guide = document.querySelector("#guide")
        
const textContainer = document.getElementById("text");
const typingSpeed = 50; 

let index = 0;
let textIndex = 0;
let text = [
    "Hi Xaha!",
    "I have your last sweet treat of this year...",
    "Or the first one in 2026? idk when will you open this website",
    "anywaaayyy",
    "Tadaaa!!!",
    "Before you blow the candle",
    "Make a wish!",
    "Are you done?",
    "Alright now blow the candle!!! You can click on it",
    "Happy birthday twin✌️",
    "I have a letter for u btw :3"
]

function typeWriter(text) {
    let textToType = text
    if (index < textToType.length) {
        textContainer.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(() => typeWriter(text), typingSpeed);
    }
}

function clear() {
    textContainer.innerHTML = "";
    index = 0;
}

function appendNote() {
    notes.style = ""
}

function appendCats() {
    cat1.style = ""
    cat2.style = ""
    cat3.style = ""
}

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') {
    event.preventDefault();
    console.log('Spacebar pressed');
    console.log(textIndex);
    clear();
    if (textIndex == 4) {
        clear();
        typeWriter(text[textIndex])
        cakeContainer.style = ""
        birthdayCake.src= "./Media/birthdayflameon-dark.gif"
        textIndex++;
    } else if (textIndex == 8){
        guide.innerHTML = "Click on the cake"
        birthdayCake.addEventListener("click", () => {
            birthdayCake.src = "./Media/birthdayflameoff-dark.gif"
            clear();
            typeWriter(text[textIndex])
            textIndex++;
            appendCats();
            guide.innerHTML = "Press <bold>spacebar</bold>"
        })
        typeWriter(text[textIndex])
        textIndex++;
    } else if (textIndex == 10) {
        typeWriter(text[textIndex])
        textIndex++
        appendNote()
        guide.style = "display: none;"
    } else if (textIndex == 11) {
        textIndex = 9
        typeWriter(text[textIndex])
    } else {
        typeWriter(text[textIndex]);
        textIndex++;
    }
  }
});



window.onload = typeWriter(text[textIndex]), textIndex++;