function submitAnswer() {
  var radios = document.getElementsByName("choice");
  var i = 0, len = radios.length;
  var checked = false;
  var userAnswer;

  for( ; i < len; i++ ) {
     if(radios[i].checked) {
       checked = true;
       userAnswer = radios[i].value;
     }
  }
  // if user click submit button without selecting any option, alert box should be say "please select choice answer".
  if(!checked) {
    alert("please select choice answer");
    return;
  }
  // Correct answer

  if(userAnswer === "Majorie Cruz") {
     alert("Answer is correct!");
  }if(userAnswer === "1") {
     alert("Answer is correct!");
  }if(userAnswer === "2") {
     alert("Answer is correct!");
  }if(userAnswer === "3") {
     alert("Answer is correct!");
  }if(userAnswer === "4") {
     alert("Answer is correct!");
  }if(userAnswer === "5") {
     alert("Answer is correct!");
  }if(userAnswer === "6") {
     alert("Answer is correct!");
  }if(userAnswer === "7") {
     alert("Answer is correct!");
  }if(userAnswer === "8") {
     alert("Answer is correct!");
  }if(userAnswer === "9") {
     alert("Answer is correct!");
  }if(userAnswer === "10") {
     alert("Answer is correct!");
  }if(userAnswer === "11") {
     alert("Answer is correct!");
  }
  if(userAnswer === "12") {
     alert("Answer is correct!");
  }if(userAnswer === "13") {
     alert("Answer is correct!");
  }
  if(userAnswer === "14") {
     alert("Answer is correct!");
  }if(userAnswer === "15") {
     alert("Answer is correct!");
  }if(userAnswer === "16") {
     alert("Answer is correct!");
  }if(userAnswer === "17") {
     alert("Answer is correct!");
  }
  // incorrect answer
  else {
     alert("Answer is wrong!");
  }

}
