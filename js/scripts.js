$(document).ready(function() {
  $("#survey").click(function() {
  var head = $("#head").val();

  $("#result").show();
  $("#beverage").hide();
  $("#page").hide();

  $(".headresult").append(head);

  event.preventDefault();



  });
});
