const ratingBtn = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit");
const ratingContainer = document.querySelector(".rating-circle");
const mainContent = document.querySelector("main");

let selectedRating = null;

for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].addEventListener("click", () => {

        for (let j = 0; j < ratingBtn.length; j++) {
            ratingBtn[j].style.backgroundColor = "";
            ratingBtn[j].style.color = "";
        }

        selectedRating = ratingBtn[i].textContent;
        ratingBtn[i].style.backgroundColor = "white";
        ratingBtn[i].style.color = "black";
    });
}

submitBtn.addEventListener("click", () => {
    if (selectedRating) {
        mainContent.innerHTML = `
          <div class="thankyou-container">
            <div class="thankyou-content"><img src="./Assets/illustration-thankyou.svg" alt="Thank You" class="thankyou-img">
                <p>You selected ${selectedRating} out of 5</p>
            </div>
            <div class="bottomThanks-text">
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating.don't hesitate to get in touch!</p>
            </div>
          </div>
        `;
    } else {
        alert("Please select a rating before submitting.");
    }
});
