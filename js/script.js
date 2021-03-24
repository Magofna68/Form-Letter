// const myCallBack = function() { // function expression
//   const name1Input = $("input#name-field").val();

//   $("").text(name1Input);
// }

// function myCallBack2() { // function declaration
//   const name1Input = $("input#name-field").val();

//   $("").text(name1Input);
// }

// function add(num, num2) { // function declaration
//   return num + num2
// }

// const result = add(1,2);

$(function() {
  $("#name-field").submit(function() {
    const name1Input = $("input#name-field").val();
  
    $(".name-field").text(name1Input);

    $("#").show()
  });
});