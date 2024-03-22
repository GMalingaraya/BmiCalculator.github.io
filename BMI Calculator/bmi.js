function calculate() {
    
    let weight=document.getElementById('weightbmi').value;
    let height=parseFloat(document.getElementById('heightbmi').value);
    let heightinmeter=height / 3.28084;
    let doubleheight=heightinmeter*heightinmeter;
    let output=weight/doubleheight;
    document.getElementById('outputbmi').textContent = output.toFixed(2);
    if(output <= 18.4){
      document.getElementById('estimate').textContent='Underweight';
    } 
    else if(output >= 18.5 && output <= 24.9){
      document.getElementById('estimate').textContent='Normal';
    }
    else if(output >= 25.0 && output<=39.9) {
      document.getElementById('estimate').textContent='Overweight';
    }
    else if(output >=40.0) {
      document.getElementById('estimate').textContent='Obese';
    }
  }


    



