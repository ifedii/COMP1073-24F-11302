let storyResult = document.querySelector("#storyResult")
let buttons = document.querySelectorAll(".cycle")

let characters = ["Donald Trump", "Jackie Chan", "Santa Claus", "Will Smith"]
let actions = ["ran", "saw", "kicked", "pushed"]
let descriptions = ["a white", "an angry", "a scary", "a funny"]
let sidekicks = ["Joe Biden", "chicken", "ghost", "frog"];
let settings = ["at the ball room", "in the church"]

let charIndex = 0;
let actionIndex = 0;
let descIndex = 0;
let sidekickIndex = 0;
let settingIndex = 0;

// storyResult.textContent = "Hello";

buttons.forEach(button => {
    button.addEventListener("click", (event) => cycleArray(event.target.textContent))
    
});

function cycleArray(sentencePart){
    storyResult.textContent = sentencePart;
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

    storyResult.textContent = word;

}