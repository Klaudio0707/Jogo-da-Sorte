const frm = document.querySelector("form");
const respNumero = document.querySelector("#numSorteados");
const resp = document.querySelector("#outResp");

const respChances = document.querySelector("#chances");
const respDica = document.querySelector("#outDica");

const erros = [];
const numSortido = Math.floor(Math.random()  * 10  ) +1 ;
const Chances = 3 ;




    //-----------------------------------
frm.addEventListener("submit", (e) => {
e.preventDefault();


const numero = Number(frm.inNumero.value);
resp.className = "exibir";

// resp.innerText = `Numero Sorteado ${numSortido} - Numero ${numero}`;

if( numero == numSortido){
alert("Parabéns!! Você Acertou");
resp.innerText = `Parabéns, Você acertou!`;
respNumero.innerText = ` Número Sorteado ${numSortido}`;
resp.className = "exibir";
frm.btnNova.className = "exibir";
frm.btnSubmit.disabled = "true";
erros.push(numero);


}else{
   if (erros.includes(numero)){
    alert("você já apostou esse número: "+numero + "Tente outro." );
    
}else{
 erros.push(numero);
const numErros = erros.length;
const numChances = Chances - numErros;
resp.className = "exibir";
resp.innerText = `Erros ${numErros} (${erros.join(", ")})`
respChances.innerText = `Chances Restantes ${numChances}`;

if(numChances == 0  ){
alert("Game Over!");
frm.inNumero.disabled = true;
frm.btnSubmit.disabled = true;
frm.btnNova.className = "exibe";

respNumero.innerText = ` Número Sorteado ${numSortido}`;
respChances.innerText = `Chances Restantes: ${numChances}`;

}else{
const dica = numero < sorteado ? "maior" : "menor";
respDica.innerText = `Dica: Tente um numero ${dica} que ${numero}`;
respChances.innerText = numChances;
}

}  
}

frm.btnNova.addEventListener("click", () =>{
    location.reload();
    });


});
