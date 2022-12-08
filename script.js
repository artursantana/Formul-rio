

const form = document.getElementById('form')
let span   = document.querySelectorAll('.span')
let input  = document.querySelectorAll('.inputuser')
let Regex  =  '/^([a-zA-Z0-9_\ \-])+((([a-zA-Z0-9-])+(([a-zA-Z0-9]{2,4})+$/'

function Utilizador(){

    if(input[0].value.length <= 4 ){
        span[0].style.display = 'block'
        span[0].style.color = 'red'
        
    }else{
        span[0].style.display = 'none'
        
    }


}

function emailValidade(){
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input[1].value)){
        span[1].style.display = 'block'
        span[1].style.color = 'red'
        span[1].innerText = 'E-mail introduzido não é válido.'
        
    


    }else{
        span[1].style.display = 'block'
        span[1].innerText = 'E-mail Valido'
        span[1].style.color = 'green'
    }
}


function minPass(){
    if(input[2].value.length < 6 || input[2].value.length > 12){
        span[2].style.display = 'block'
        span[2].style.color = 'red'
    }else{
        span[2].style.display = 'none'
        
    }
}

function igualPass(){
    if(input[3].value.length == input[2].value.length){
        span[3].style.display = 'none'
    }else{
        span[3].style.display = 'block'
        span[3].style.color = 'red'
        
    }
}


