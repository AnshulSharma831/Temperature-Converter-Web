document.getElementById('convert-btn').addEventListener('click', () => {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const resultField = document.getElementById('result');
  
    if (isNaN(temperature)) {
      resultField.value = "Please enter a valid number";
      return;
    }
  
    let result;
  
    if (unit === "fahrenheit") {
      result = ((temperature - 32) * 5) / 9;
      resultField.value = `${result.toFixed(2)} °C`;
    } else {
      result = (temperature * 9) / 5 + 32;
      resultField.value = `${result.toFixed(2)} °F`;
    }
  });
  