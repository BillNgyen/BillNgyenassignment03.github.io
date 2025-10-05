"use strict";

// Email-elements
const hideEmail = document.getElementById("email-container");
const emailInput = document.getElementById("email");
const errorEmail = document.getElementById("error-email");
const personalInfoContainer = document.getElementById("personal-info");
const submit = document.getElementById("submit");
let alert = document.getElementById("alert");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Email-function
submit.addEventListener("click", function () {
  const eValue = emailInput.value;
  const check = eValue.match(regex);

  if (check) {
    hideEmail.classList.add("hidden");
    // personalInfoContainer.style.display = "block";
    personalInfoContainer.classList.remove("hidden");
  } else {
    errorEmail.classList.add("hidden");
    alert.innerHTML = "Please enter email";
    // alert.style.color = "red";
  }
});

// Work function

// // Show btn when mouseover
// document.addEventListener("mouseover", (event) => {
//   if (event.target.closest(".work-info")) {
//     const workCon = event.target.closest(".work-info");
//     const viewMore = workCon.querySelector(".view");
//     viewMore.classList.remove("hidden");
//   }
// });
// /// Close btn when mouseout
// document.addEventListener("mouseout", (event) => {
//   if (event.target.closest(".work-info")) {
//     const workCon = event.target.closest(".work-info");
//     const viewMore = workCon.querySelector(".view");
//     viewMore.classList.add("hidden");

//     // Let the button stays when it is view less
//     const workInfo = workCon.querySelector(
//       ".work-item, .work-info-con, .hobbies-list"
//     );

//     const closeBtn = !workInfo.classList.contains("hidden")
//       ? viewMore.classList.remove("hidden")
//       : viewMore.classList.add("hidden");
//   }
// });

// document.addEventListener("click", (event) => {
//   const viewMore = event.target.closest(".view");
//   if (viewMore) {
//     const workCon = viewMore.closest(".work-info");
//     const workInfo = workCon.querySelector(
//       ".work-item, .work-info-con, .hobbies-list"
//     );
//     if (workInfo) {
//       workInfo.classList.toggle("hidden");
//       viewMore.textContent = workInfo.classList.contains("hidden")
//         ? "▼ View More"
//         : "▲ View Less";
//     }
//   }
// });

// Using For loop

// Work Els

const workContainer = document.querySelectorAll(".work-info");

// Work func

for (let i = 0; i < workContainer.length; i++) {
  const workCon = workContainer[i];
  // console.log(workCon);

  const viewMore = workCon.querySelector(".view");
  const workItem = workCon.querySelector(".display-info");

  // Mouseover
  workCon.addEventListener("mouseover", () => {
    viewMore.classList.remove("hidden");
  });

  // Mouseout
  workCon.addEventListener("mouseout", () => {
    viewMore.classList.add("hidden");

    // if (!workItem.classList.contains("hidden")) {
    //   viewMore.classList.remove("hidden");
    // } else {
    //   viewMore.classList.add("hidden");
    // }
    const closeBtn = !workItem.classList.contains("hidden")
      ? viewMore.classList.remove("hidden")
      : viewMore.classList.add("hidden");
  });

  // Display info
  if (viewMore) {
    viewMore.addEventListener("click", () => {
      workItem.classList.toggle("hidden");
      viewMore.textContent = workItem.classList.contains("hidden")
        ? "▼ View More"
        : "▲ View Less";
    });
  }
}
