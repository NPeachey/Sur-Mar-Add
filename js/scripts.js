$(document).ready(function() {
  $("#survey").click(function() {
  var beverage = $("#beverage").val();

  $(".drinkresult").append(beverage.toUpperCase());

  $("#result").show();
  $("#beverage").hide();

  event.preventDefault();

  });
});
