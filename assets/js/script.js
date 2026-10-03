/* ==========================================================
   Course picker
   Shows only the weeks included in the chosen course.
   ========================================================== */

const TOTAL_WEEKS = 16;

const buttons = document.querySelectorAll(".picker-buttons button");
const weeks = document.querySelectorAll(".week");
const phases = document.querySelectorAll(".phase");
const fill = document.querySelector(".track-fill");
const label = document.querySelector(".track-label");

const btn6 = document.getElementById("btn-6");
const btn8 = document.getElementById("btn-8");
const btn16 = document.getElementById("btn-16");

const mediumCourse = document.getElementById("medium-course");
const fullBootcampCourse = document.getElementById("fullbootcamp-course");


function displayFullbootcampCourse() {

    mediumCourse.style.display = "block";
    fullBootcampCourse.style.display = "block";

}


function displayMediumCourse() {

    mediumCourse.style.display = "block";
    fullBootcampCourse.style.display = "none";

}


function displayShortCourse() {

    mediumCourse.style.display = "none";
    fullBootcampCourse.style.display = "none";

}



buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Set all buttons to false
        buttons.forEach(function (button) {
            button.setAttribute("aria-pressed", "false");
        });

        // Set the clicked button to true
        button.setAttribute("aria-pressed", "true");

    });

});




function showCourse(lastWeek) {
  // Hide any week after the last week of the chosen course
  weeks.forEach(function (week) {
    week.hidden = Number(week.dataset.week) > lastWeek;
  });

  // Hide a whole phase if it starts after the course ends
  phases.forEach(function (phase) {
    phase.hidden = Number(phase.dataset.starts) > lastWeek;
  });

  // Update the progress bar and its label
  fill.style.width = (lastWeek / TOTAL_WEEKS) * 100 + "%";
  label.textContent = "Showing weeks 1 to " + lastWeek;

  // Mark the chosen button as pressed
  buttons.forEach(function (button) {
    const isChosen = Number(button.dataset.weeks) === lastWeek;
    button.setAttribute("aria-pressed", isChosen);
  });
}

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    showCourse(Number(button.dataset.weeks));
  });
});

// Start by showing the full bootcamp
showCourse(TOTAL_WEEKS);



