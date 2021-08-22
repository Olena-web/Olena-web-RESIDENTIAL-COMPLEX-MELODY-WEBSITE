$(document).ready(function () {
  let currentFloor = 2;
  let currentFlat = 40;
  let currentInfo = 40;
  const counterUp = $(".counter-up");
  const counterDown = $(".counter-down");
  const floorPath = $(".home-image path"); //floor in the svg
  const modal = $(".modal");
  const modalCloseButton = $(".modal-close-button");
  const viewFlatsButton = $(".view-flats");
  const flatsPath = $(".flats path");
  const flatsLink = $(".flat-link");

  //mouseover on the floor
  floorPath.on("mouseover", function () {
    $(floorPath).removeClass("current-floor"); //remove active class from floor
    currentFloor = $(this).attr("data-floor"); // get current floor
    $(".counter").text(currentFloor); // write down current floor in the counter
  });

  floorPath.on("click", toggleModal);

  modalCloseButton.on("click", toggleModal);

  viewFlatsButton.on("click", toggleModal);

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

  flatsPath.on("mouseover", function () {
    deleteClass();
    currentFlat = $(this).attr("data-flat");
    $(`[data-item=${currentFlat}]`).toggleClass("current-flat"); // добавляем класс квартиры
  });

  flatsLink.on("mouseover", function () {
    deleteClass();
    currentLink = $(this).attr("data-item");
    $(`[data-flat="${currentLink}"]`).toggleClass("current-flat");
  });
  function toggleModal() {
    modal.toggleClass("is-open");
  }
  function deleteClass() {
    flatsPath.removeClass("current-flat");
    flatsLink.removeClass("current-flat");
  }
});
