const plusIcons = document.querySelectorAll(".q-box");
const answerBoxes = document.querySelectorAll(".a-box");
const icons = document.querySelectorAll(".q-box img");

for (let i = 0; i < plusIcons.length; i++) {
    plusIcons[i].addEventListener("click", () => {
        for (let j = 0; j < answerBoxes.length; j++) {
            if (j !== i) {
                answerBoxes[j].style.display = "none";
                icons[j].src = "./Assets/icon-plus.svg";
            }
        }

        if (answerBoxes[i].style.display === "none" || !answerBoxes[i].style.display) {
            answerBoxes[i].style.display = "contents";
            icons[i].src = "./Assets/icon-minus.svg";
        } else {
            answerBoxes[i].style.display = "none";
            icons[i].src = "./Assets/icon-plus.svg";
        }
    });
}

