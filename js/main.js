$(document).ready(function () {
  let currentFloor = 2;
  const counterUp = $(".counter-up");
  const counterDown = $(".counter-down");
  const floorPath = $(".home-image path"); //floor in the svg

  //mouseover on the floor
  $(floorPath).on("mouseover", function () {
    $(floorPath).removeClass("current-floor"); //remove active class from floor
    currentFloor = $(this).attr("data-floor"); // get current floor
    $(".counter").text(currentFloor); // write down current floor in the counter
  });
  // click on the button up
  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGroupping: false,
      }); //formatting variabels with floor 02, don't 2
      $(".counter").text(usCurrentFloor); // write down current floor in the counter
      floorPath.removeClass("current-floor"); //remove active class from floor
      $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor"); // get light on the current floor
    }
  });
  // click on the button down
  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGroupping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor = ${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });
});
