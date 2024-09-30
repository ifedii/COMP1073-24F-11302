let storyResult = document.querySelector("#storyResult")
let buttons = document.querySelectorAll(".cycle")

// storyResult.textContent = "Hello";

buttons.forEach(button => {
    button.addEventListener("click", (event) => cycleArray(event.target.textContent))
    
});

function cycleArray(sentencePart){
    storyResult.textContent = sentencePart;

}