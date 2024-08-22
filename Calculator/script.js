let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let operator = "";
let result = 0;

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let buttonText = e.target.innerHTML;

    if (buttonText === '=') {
      try {
        result = eval(string);
        input.value = result;
        string = result.toString();
      } catch (error) {
        input.value = "Error";
        string = "";
      }
    } else if (buttonText === 'AC') {
      string = "";
      input.value = string;
    } else if (buttonText === 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else if (buttonText === '%') {
      string += '%';
      input.value = string;
    } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      operator = buttonText;
      string += operator;
      input.value = string;
    } else {
      string += buttonText;
      input.value = string;
    }
  });
});