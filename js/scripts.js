$(document).ready(function() {
  console.log("ready");
  $("#formOne").submit(function(event) {
    console.log("here");

    $(".h1").text($("#name").val());

    event.preventDefault();
  });
});
