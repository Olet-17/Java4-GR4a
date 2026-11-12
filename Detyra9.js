const Cmimi1="19.90";
const Cmimi2="8.50";

const Sasia1=2;
const Sasia2=3;

CmimiNumer1=parseFloat(Cmimi1,10);
CmimiNumer2=parseFloat(Cmimi2,10);

let TotaliCmim = (CmimiNumer1 * Sasia1) + (CmimiNumer2 * Sasia2);
let Porosite=Sasia1+Sasia2;

const TarifaSherbimi=0.1;

let Shuma=TotaliCmim*TarifaSherbimi;

let Finalja = (TotaliCmim + Shuma).toFixed(2);

console.log(Finalja);

