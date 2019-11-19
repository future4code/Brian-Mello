function criarTarefa(){
    const dia = document.getElementById("diaDaSemana").value;
    if (dia === "segunda"){
        const text = document.getElementById("segunda") 
        text.innerHTML += document.getElementById("novaTask").value
    }else if (dia === "terca") {
        const text = document.getElementById("terca")
        text.innerHTML += document.getElementById("novaTask").value 
    }else if (dia === "quarta") {
        const text = document.getElementById("quarta")
        text.innerHTML += document.getElementById("novaTask").value 
    }else if (dia === "quinta") {
        const text = document.getElementById("quinta")
        text.innerHTML += document.getElementById("novaTask").value 
    }else if (dia === "sexta") {
        const text = document.getElementById("sexta")
        text.innerHTML += document.getElementById("novaTask").value 
    }else if (dia === "sabado") {
        const text = document.getElementById("sabado")
        text.innerHTML += document.getElementById("novaTask").value 
    }else if (dia === "domingo") {
        const text = document.getElementById("domingo")
        text.innerHTML += document.getElementById("novaTask").value 
    }
    document.getElementById("novaTask").value = ""
}


