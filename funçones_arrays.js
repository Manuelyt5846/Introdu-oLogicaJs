function primeiroeultimodivididopordois (numero){
    const primeiro = numero[0]/2
    const ultimo =  numero[numero.length-1]/2

    return{ultimo,primeiro} 
}
const numero =[0,20,30,40,50]
const resultado = primeiroeultimodivididopordois
(numero)
console.log(resultado),