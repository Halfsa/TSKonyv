import { Konyv } from "./konyv";

let lista: Konyv[] = [];


function getRandomInt(min:number, max:number) {
  return Math.floor(Math.random()*(max-min+1)+min)
}  

function bestOf(konyvik:Konyv[]) {
  var legnagyobb = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < konyvik.length; i++) {
    if (konyvik[i].rating>legnagyobb) {
      legnagyobb = konyvik[i].rating;
    }
    
  }
  for (let i = 0; i < konyvik.length; i++) {
    if (konyvik[i].rating == legnagyobb) {
      console.log(lista[i].ToString());
    }
    
  }
}
function init() {
const cimMegad = document.getElementById("cim")as HTMLInputElement;
const ratingMegad = document.getElementById("rating") as HTMLInputElement;
const form = document.getElementById("form");
  form!.addEventListener("submit",(e) =>{
    e.preventDefault();
    const k = new Konyv(cimMegad.value,parseInt(ratingMegad.value));
    lista.push(k);
    console.log(k.ToString());
  });
  }
  for (let i = 0; i < 30; i++) {
    var k = new Konyv("Book #"+i,getRandomInt(1,10));
    lista.push(k);
    console.log(k.ToString());
  }
  console.log("7 fölötti értékeléssel rendelkező könyvek: ")
for (let i = 0; i < lista.length; i++) {
  if (lista[i].rating>7) {
    console.log(lista[i].ToString());
  }

}
console.log("Best Of: ");




bestOf(lista);
document.addEventListener("DOMContentLoaded",init);