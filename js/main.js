$(document).ready(function () {
  let currentFloor = 2;
  const counterUp = $(".counter-up");
  const counterDown = $(".counter-down");
  $(".home-image path").on("mouseover", function () {
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);

    counterUp.on("click", function () {
      console.log("click up");
    });
    counterDown.on("click", function () {
      console.log("click down");
    });
  });
});
