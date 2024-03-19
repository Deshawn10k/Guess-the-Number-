function raadhetGetal(){
  var geheimeNummer = Math.floor(Math.random() * 10) + 1;
  var raden = document.getElementById('raden').value;
  var bericht = document.getElementById('bericht');

  if (raden === '') {
    bericht.textContent = "Voer een getal in.";
  } else if (raden == geheimeNummer) {
    bericht.textContent = "Gefeliciteerd! Je hebt het getal geraden.";
  } else if (raden > geheimeNummer) {
    bericht.textContent = "Het ingevoerde getal is te hoog!";
  } else {
    bericht.textContent = "Het ingevoerde getal is te laag!";
  }
}

var checkbtn = document.getElementById('js--checkbutton');
checkbtn.onclick = () =>{
  raadhetGetal();
}

