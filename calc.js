
function limpar(){
    resp.innerHTML=''
}   

function insert(num){
var numeros=[num]
resp.innerHTML+=numeros
}

function insertop(op){
    var oper=[op]
    resp.innerHTML+=oper
}   

function apagar(){
    var resposta=document.getElementById('resp').innerHTML
    document.getElementById('resp').innerHTML=resposta.substring(0, resposta.length-1)
}

function calcular(){
    var resposta=document.getElementById('resp').innerHTML
    if (resposta){
        document.getElementById('resp').innerHTML=eval(resposta)
    }else{
        document.getElementById('resp').innerHTML=''
    }
}

function insertlog(){
    var resposta=document.getElementById('resp').innerHTML
    if (resposta){
        num=[resposta]
        numero=Number(num)
        console.log(numero)
        document.getElementById('resp').innerHTML=Math.log10(numero)
    }else{
        document.getElementById('resp').innerHTML=''
    }
}
    
/*function soma(soma){
    var resposta=document.getElementById('resp')
    resposta.innerHTML+=soma
}*/