function checkNumber(num) {
      if (num > 0) {
        alert("Positive number.");
      } else if (num < 0) {
        alert("Negative number.");
      } else {
        alert("Zero.");
      }
    }
    function getInput() {
      const input = prompt("Enter a number:");
      const number = parseFloat(input);
      if (isNaN(number)) {
        alert("Please enter a valid number.");
      } else {
        checkNumber(number);
      }
    }