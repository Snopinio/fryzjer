function ceny() {
 let krotkie = document.getElementById("Krótkie").checked;
 let srednie = document.getElementById("Średnie").checked;
 let poldlugie = document.getElementById("Półdługie").checked;
 let dlugie = document.getElementById("Długie").checked;
 let wynik = document.getElementById("wynik");
 let cena = 0;
 if(krotkie) cena = 25; 
 if(srednie) cena = 30; 
 if(poldlugie) cena = 40; 
 if(dlugie) cena = 50; 
 wynik.innerHTML = "Cena strzyżenia: " + cena;
}