$(document).ready(function() {
  $("#survey").click(function() {
  var head = $("#head").val();
  var flavor = $("input:radio[name=flavor]:checked").val();
  var name = $("input#person1").val();

  $("#result").show();
  $("#beverage").hide();
  $("#page").hide();

  $(".nameresult").append(name);
  $(".headresult").append(head);
  $(".colorheadresult").append(flavor);

  event.preventDefault();



  });
});
