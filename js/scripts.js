

$(document).ready(function() {
  $("#info-form").submit(function(event){
    event.preventDefault();
    var color = $("#color").val();
    var tv = $("#tv").val();
    var car = $("#car").val();

    var colorA = []
    colorA.push(color, tv ,car)
    alert(colorA);
    alert(colorA[0]);
    var colorB= ["dog"];
    colorB.push(colorA[0]);
    alert(colorB);

  });
});
