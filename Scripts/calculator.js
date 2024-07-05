let calculation = '';

    let inputValues = document.querySelector('.js-input').innerHTML;

    updateValue(inputValues);

    function calculate (inputChar) {

      if (inputChar === '1') {
        calculation = calculation + '1';
        inputValues = calculation;
      }
      else if (inputChar === '2') {
        calculation = calculation + '2';
        inputValues = calculation;
      }
      else if (inputChar === '3') {
        calculation = calculation + '3';
        inputValues = calculation;
      }
      else if (inputChar === '4') {
        calculation = calculation + '4';
        inputValues = calculation;
      }
      else if (inputChar === '5') {
        calculation = calculation + '5';
        inputValues = calculation;
      }
      else if (inputChar === '6') {
        calculation = calculation + '6';
        inputValues = calculation;
      }
      else if (inputChar === '7') {
        calculation = calculation + '7';
        inputValues = calculation;
      }
      else if (inputChar === '8') {
        calculation = calculation + '8';
        inputValues = calculation;
      }
      else if (inputChar === '9') {
        calculation = calculation + '9';
        inputValues = calculation;
      }
      else if (inputChar === '0') {
        calculation = calculation + '0';
        inputValues = calculation;
      }
      else if (inputChar === '+') {
        calculation = inputValues + ' + ';
        inputValues = calculation;
      }
      else if (inputChar === '-') {
        calculation = calculation + ' - ';
        inputValues = calculation;
      }
      else if (inputChar === '*') {
        calculation = calculation + ' * ';
        inputValues = calculation;
      }
      else if (inputChar === '/') {
        calculation = calculation + ' / ';
        inputValues = calculation;
      }
      else if (inputChar === '.') {
        calculation = calculation + '.';
        inputValues = calculation;
      }
      else if (inputChar === '=') {
        inputValues = eval(calculation);
      }

      updateValue(inputValues);
    }

    function evaluateValue () {
      updateValue(inputValues);
    }

    function updateValue (inputValues) {
      document.querySelector('.js-input').innerHTML = inputValues;
    }

    function clearValue () {
      calculation = '';
      inputValues = '0';
      updateValue(inputValues);
    }


    console.log(inputValues);