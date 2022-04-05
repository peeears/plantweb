$("#introCheck").change(function () {
  $(".intro").hide();
  if ($("#introCheck").is(":checked")) {
    $(".intro").show();
  }
});

$("#nameCheck").change(function () {
  $(".name").hide();
  if ($("#nameCheck").is(":checked")) {
    $(".name").show();
  }
});

$("#otherCheck").change(function () {
  $(".otherName").hide();
  if ($("#otherCheck").is(":checked")) {
    $(".otherName").show();
  }
});

$("#originalCheck").change(function () {
  $(".original").hide();
  if ($("#originalCheck").is(":checked")) {
    $(".original").show();
  }
});

$("#whereCheck").change(function () {
  $(".where").hide();
  if ($("#whereCheck").is(":checked")) {
    $(".where").show();
  }
});

$("#spritualCheck").change(function () {
  $(".spiritual").hide();
  if ($("#spritualCheck").is(":checked")) {
    $(".spiritual").show();
  }
});

$("#storyCheck").change(function () {
  $(".story").hide();
  if ($("#storyCheck").is(":checked")) {
    $(".story").show();
  }
});

$("#plantCheck").change(function () {
  $(".plantImage").hide();
  $(".plant").hide();
  if ($("#plantCheck").is(":checked")) {
    $(".plantImage").show();
    $(".plant").show();
  }
});

$(".image__inline").click(function () {
  let src = $(this).attr("src");
  $("body").append(`
  <div class="bigImg">
    <img class="bimg" src=${src}>
  </div>
  `);
  $(".bigImg").click(function () {
    $(this).remove();
  });
});

// Lightbox Pseudo-code
// Make some variables
let lightbox = document.querySelector(".lightbox");
let lightboxImage = document.querySelector(".lightbox img");

// Image onClick function() {
//  get src of clicked image;
// set src of lightboximage = clickedSrc;
// lightbox toggleClass hidden
// }
// lightboxImage to have the same src as the clicked small image.
// click lightbox display:none; or toggleClass 'hidden'
