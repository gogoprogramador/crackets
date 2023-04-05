function op(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/lfFaG5_io/model.json",modeloapartadoh )  
}
function modeloapartadoh(){
    console.log ("lluju");
    classifier.classify(gotResults)
}


function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
      document.getElementById("Escucho").innerHTML = 'Escucho - '+ results[0].label;
      document.getElementById("precision").innerHTML = 'Precisión - '+ (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("Escucho").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("precision").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
  
      img = document.getElementById('Alien01') 
      img1 = document.getElementById('Alien02')
      img2 = document.getElementById('Alien03')
      img3 = document.getElementById('Alien04')
  
      if (results[0].label == "Aplausos") {
        img.src = '90.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (results[0].label == "Campana") {
        img.src = 'cra.jpeg';
        img1.src = 'aliens-02.gif';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
      } else if (results[0].label == "Chasquido") {
        img.src = 'cra.jpeg';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.gif';
        img3.src = 'aliens-04.png';
      }else{
        img.src = 'cra.jpeg';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.gif';
      }
    }
  }