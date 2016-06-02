$(document).ready(function(){
  $("#age").submit(function(event){
    var age = parseInt($("#age1").val());
    console.log(age);

    if(age < 18){
      $(".minor").show();
    }
    else{
      $(".voter").show();
    }

    event.preventDefault();
  });
});
