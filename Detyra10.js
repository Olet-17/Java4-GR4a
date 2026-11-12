const Pjesemaresit=45;
const Pagesa=12;

const salla=180;
const materialet=95;
const reklama=60;

let Teardhurat=Pjesemaresit*Pagesa;
let Shpenzimet=salla+materialet+reklama;

let Dallimi=Teardhurat-Shpenzimet;

let ShpenzimetePapritura = 25;

Shpenzimet += ShpenzimetePapritura;

Dallimi=Teardhurat-Shpenzimet;

console.log("Parat e Fituara",Teardhurat);
console.log("Parat e Shpenzuara",Shpenzimet);
console.log("Fitimi bruto",Dallimi);
console.log("Shpenzimet e Papritura",Shpenzimet);