// Definování proměnných
let cislo = document.getElementByID("cislo");
let rand = new Random();
let smajlík = 😎;
let pole[10];

// Script pro generování náhodných čísel
for(int i = 0; i < pole.Length; i++)
{
  rand = Next.(cislo, 10);
  pole[i] = rand;
  document.getElementByID("text").innerHTML = $"Náhodné číslo na pozici [{i}] je " + rand;
}
document.getElementByID("smajlik").innerHTML = smajlik; // Velmi důležité pro funkčnost scriptu!!!
