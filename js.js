var btnCadastrar = document.getElementById("submit")
var elementos = document.querySelectorAll(".elemento")
var retorno = document.getElementById('retorno')

btnCadastrar.addEventListener('click', (e) =>{
    e.preventDefault();
    elementos.forEach(element => {
        console.log(element.value)    
        let novoElemento = document.createElement('p');

        if(element.type == 'SELECT'){
            novoElemento.innerHTML = element.options[element.options['selectedIndex']];
        
        }else if(element.type == 'checkbox'){
            novoElemento.innerHTML = (element.checked == true)? element.value: '';
        
        }else if(element.type == 'radio'){
            novoElemento.innerHTML = (element.checked == true)? element.value: '';
        
        }else if(element.type == 'date'){
            let novaData = new Date(element.value).toLocaleDateString('pt-BR',{timeZone:'utc'});            
            novoElemento.innerHTML = novaData;
        
        }else{
            novoElemento.innerHTML = element.value;
        }

        retorno.appendChild(novoElemento);
        
    
    });
})