let storyResult = document.querySelector("#storyResult")
let buttons = document.querySelectorAll(".cycle")
let displayResult = document.querySelector("#result")
let selection = document.querySelector("#selection")
let resetBtn = document.querySelector("#reset")

let characters = ["Donald Trump", "Jackie Chan", "Santa Claus", "Will Smith"]
let actions = ["ran", "saw", "kicked", "pushed"]
let descriptions = ["a white", "an angry", "a scary", "a funny"]
let sidekicks = ["Joe Biden", "chicken", "ghost", "frog"];
let settings = ["at the ball room", "in the church"]
let story = ":character: :action: :description: :sidekick: :setting:";

let charIndex = 0;
let actionIndex = 0;
let descIndex = 0;
let sidekickIndex = 0;
let settingIndex = 0;

// add event lister each button and pass in the text content to the cycle array function
buttons.forEach(button => {

    button.addEventListener("click", (event) => cycleArray(event.target.textContent))
    
});

function cycleArray(sentencePart){
    // storyResult.textContent = sentencePart;
    let word;
    switch (sentencePart){
        case "Character":
            word = characters[charIndex];
            charIndex = (charIndex + 1) % characters.length
            break;
        case "Action":
            word = actions[actionIndex];
            actionIndex = (actionIndex + 1) % actions.length

            break;
        case "Description":
            word = descriptions[descIndex];
            descIndex = (descIndex + 1) % descriptions.length

            break;
        case "Setting":
            word = settings[settingIndex];
            settingIndex = (settingIndex + 1) % settings.length

            break;
        case "Sidekick":
            word = sidekicks[sidekickIndex];
            sidekickIndex = (sidekickIndex + 1) % sidekicks.length

            break;
        default:
            word = "";

    }

    selection.textContent = `${sentencePart}: ${word}`;
    capture(sentencePart, word)

}

function capture(sentencePart, word){
    switch (sentencePart){
        case "Character":
            story = story.replace(":character:", word)
            break;
        case "Action":
            story = story.replace(":action:", word)
            break;
        case "Description":
            story = story.replace(":description:", word)
            break;
        case "Setting":
            story = story.replace(":setting:", word)
            break;
        case "Sidekick":
            story = story.replace(":sidekick:", word)
            break;
        default:
            story = "an error occured"; 

    }
}

// display the story on the page
displayResult.addEventListener("click", () => {
    if (story.includes(":")){
        storyResult.textContent = "Pls complete your story";

    } else{
        storyResult.textContent = story;
        story = ":character: :action: :description: :sidekick: :setting:";
    }
})

// reset funtion to reset the story on the page and the local variables
function resetStory(){
    console.log("Hello");
    charIndex = 0;
    actionIndex = 0;
    descIndex = 0;
    sidekickIndex = 0;
    settingIndex = 0;
    storyResult.textContent = "";
    story = ":character: :action: :description: :sidekick: :setting:";

}

resetBtn.addEventListener("click", resetStory)