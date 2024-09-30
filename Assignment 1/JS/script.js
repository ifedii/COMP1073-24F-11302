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
let story = ":character: :action: :description: :sidekick: :setting:";

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
displayResult.addEventListener("click", () => {
    storyResult.textContent = `${currentChar} ${currentAction} ${currentDesc} ${currentSidekick} ${currentSetting} `;

})

// reset funtion to reset the story on the page and the local variables
resetBtn.addEventListener("click", () => {
    storyResult.textContent = "";

    document.querySelectorAll(`.displaySelections p`).forEach(ptag => {
        ptag.textContent = "   ";
        
    });
})


// random story
randomize.addEventListener("click", () =>
{
    story = story.replace(":character:", characters[Math.floor(Math.random()*characters.length)])
    story = story.replace(":action:", actions[Math.floor(Math.random()*actions.length)])
    story = story.replace(":description:", descriptions[Math.floor(Math.random()*descriptions.length)])
    story = story.replace(":sidekick:", sidekicks[Math.floor(Math.random()*sidekicks.length)])
    story = story.replace(":setting:", settings[Math.floor(Math.random()*settings.length)])

    storyResult.textContent = story;
    resetStory();
})