$(document).ready(function(){
  $("#age").submit(function(event){
    var age = parseInt($("#age1").val());
    console.log(age);

    if(age < 18){
      $("#age").hide();
      $(".minor").show();
    }
    else{
      $("#age").hide();
      $(".voter").show();
    }

    event.preventDefault();
  });
});
