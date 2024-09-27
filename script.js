let Los = function (rzecz) {
    this.rzecz = rzecz;

    this.toString = function (wynik) {
        return "Ty wybrales kamien a komputer wybral  " +
            this.rzecz +" -- " + wynik;
    }
    this.toString1 = function (wynik) {
        return "Ty wybrales papier a komputer wybral  " +
            this.rzecz +" -- " + wynik;
    }
    this.toString2 = function (wynik) {
        return "Ty wybrales nożyce a komputer wybral  " +
            this.rzecz +" -- " + wynik;
    }

}

let kamien = new Los("kamien");
let papier = new Los("papier");
let nozyce = new Los("nozyce");

let wynik = "";

let mojLos = [];
mojLos.push(kamien, papier, nozyce);



function losuj() {

    //kamien

    let losowyIndex = Math.floor(Math.random() * mojLos.length);

    let p = document.getElementById("losowanie");

    //p.innerHTML = mojLos[losowyIndex].toString();
    
    if(losowyIndex==0){
        p.innerHTML = mojLos[losowyIndex].toString("Remis");
    }
    if(losowyIndex==1){
        p.innerHTML = mojLos[losowyIndex].toString("Przegrana");
    }
    if(losowyIndex==2){
        p.innerHTML = mojLos[losowyIndex].toString("Wygrana");
    }

}
function losuj1() {

    //papier

    let losowyIndex = Math.floor(Math.random() * mojLos.length);

    let p = document.getElementById("losowanie");

    
    if(losowyIndex==0){
        p.innerHTML = mojLos[losowyIndex].toString1("Wygrana");
    }
    if(losowyIndex==1){
        p.innerHTML = mojLos[losowyIndex].toString1("Remis");
    }
    if(losowyIndex==2){
        p.innerHTML = mojLos[losowyIndex].toString1("Przegrana");
    }

}
function losuj2() {

    //nozyce

    let losowyIndex = Math.floor(Math.random() * mojLos.length);

    let p = document.getElementById("losowanie");

    if(losowyIndex==0){
        p.innerHTML = mojLos[losowyIndex].toString("Przegrana");
    }
    if(losowyIndex==1){
        p.innerHTML = mojLos[losowyIndex].toString("Wygrana");
    }
    if(losowyIndex==2){
        p.innerHTML = mojLos[losowyIndex].toString("Remis");
    }
}
