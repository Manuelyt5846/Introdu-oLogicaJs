function podeEstudar(concluiuEnsinoMedia,idade,cursandoOutrafaculdade){
return concluiuEnsinoMedia &&idade>=18 &&!cursandoOutrafaculdade}

let concluiuEnsinoMedia= true
let idade=22 
let cursandoOutrafaculdade =false

let resultado =poEstudar(concluiuEnsinoMedia,idade,cursandoOutrafaculdade)
   
if(resultado){
    console.log("vc pode entrar na faculdade")
}
else{
    console.log("vc nao pode entrar na facudade")
}

