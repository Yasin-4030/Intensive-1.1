
const selection = document.querySelector(".selection");
const optionContainer = document.querySelector(".option-container");
const northLot = document.querySelector("#north-lot");
const downtwonLot = document.querySelector("#downtown");
const goldenGateLot = document.querySelector("#goldengate");
const missionLot = document.querySelector("#mission");
const sunsetLot = document.querySelector("#sunset");
const schoolLot = document.querySelector("#school")
const northernLotOption = document.querySelector("#northern-lot");
const downtonOption = document.querySelector("#downtown-lot");
const gGlotOption = document.querySelector("#goldengate-lot");
const missionOption = document.querySelector("#mission-lot");
const sunsetOption = document.querySelector("#sunset-lot");
const mSchoolOption = document.querySelector("#Mschool-lot")


const optionsList = document.querySelectorAll(".option");

selection.addEventListener("click", function() {
    optionContainer.classList.toggle("active");
});

optionsList.forEach(choice => {
    choice.addEventListener("click", function() {
        selection.innerHTML = choice.querySelector("label").innerHTML;
        optionContainer.classList.remove("active");
    });
});



northernLotOption.addEventListener("mouseover", function() {
    console.log("displaycolor")
}); 