// html variables
let storyResult = document.querySelector("#storyResult")
let buttons = document.querySelectorAll(".cycle")
let displayResult = document.querySelector("#result")
let selection = document.querySelector("#selection")
let resetBtn = document.querySelector("#reset")
let randomize = document.querySelector("#randomize")

// array of selections
let characters = ["Donald Trump", "Jackie Chan", "Santa Claus", "Will Smith"]
let actions = ["ran", "saw", "kicked", "pushed"]
let descriptions = ["a white", "an angry", "a scary", "a funny"]
let sidekicks = ["Joe Biden", "chicken", "ghost", "frog"];
let settings = ["at the ball room", "in the church"]

// index to keep track of current selection
let charIndex = 0;
let actionIndex = 0;
let descIndex = 0;
let sidekickIndex = 0;
let settingIndex = 0;

let currentChar = characters[charIndex]
let currentAction = actions[actionIndex]
let currentDesc = descriptions[descIndex]
let currentSidekick = sidekicks[sidekickIndex]
let currentSetting = settings[settingIndex]

// add event lister each button and pass in the text content to the cycle array function
buttons.forEach(button => {

    button.addEventListener("click", (event) => cycleArray(event.target.textContent))
    
});

// funtion to map button clicked to the corresponding variable
function cycleArray(sentencePart){
    // storyResult.textContent = sentencePart;
    let word;
    switch (sentencePart){
        case "Character":
            currentChar = characters[charIndex];
            word = currentChar;
            charIndex = (charIndex + 1) % characters.length
            break;
        case "Action":
            currentAction = actions[actionIndex]
            word = currentAction
            actionIndex = (actionIndex + 1) % actions.length

            break;
        case "Description":
            currentDesc = descriptions[descIndex]
            word = currentDesc
            descIndex = (descIndex + 1) % descriptions.length

            break;
        case "Setting":
            currentSetting = settings[settingIndex];
            word = currentSetting
            settingIndex = (settingIndex + 1) % settings.length

            break;
        case "Sidekick":
            currentSidekick = sidekicks[sidekickIndex]
            word = currentSidekick
            sidekickIndex = (sidekickIndex + 1) % sidekicks.length
            break;
        default:
            word = "";

    }
    document.querySelector(`#${sentencePart.toLowerCase()}`).textContent = word;

}

// display result to the page
function displayStory(){
    storyResult.textContent = `${currentChar} ${currentAction} ${currentDesc} ${currentSidekick} ${currentSetting} `;
    console.log(currentChar)

}
displayResult.addEventListener("click", displayStory)

// reset funtion to reset the story on the page and the local variables
function resetStory(){
    storyResult.textContent = " ";

    document.querySelectorAll(`.displaySelections p`).forEach(ptag => {
        ptag.textContent = "   ";
    });
}

resetBtn.addEventListener("click", resetStory)


// random story
randomize.addEventListener("click", () =>
{
    currentChar = characters[Math.floor(Math.random()*characters.length)]
    currentAction = actions[Math.floor(Math.random()*actions.length)]
    currentDesc =  descriptions[Math.floor(Math.random()*descriptions.length)]
    currentSidekick=  sidekicks[Math.floor(Math.random()*sidekicks.length)]
    currentSetting = settings[Math.floor(Math.random()*settings.length)]

   displayStory();
})