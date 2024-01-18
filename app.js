function input(num) {
  var result = document.getElementById("result");
  result.value += num;
  console.log(num);
}
function calc() {
  var result = document.getElementById("result");
  var output = eval(result.value);
  result.value = output;
}
function cancel() {
  var result = document.getElementById("result");
  result.value = "";
}
