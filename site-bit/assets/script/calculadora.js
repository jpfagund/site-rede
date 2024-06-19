function converter(){
    let inicio = document.getElementById("inicio").value;
    let converter = document.getElementById("converter").value;
    let valor = document.getElementById("valor").value;
    let valor_convertido;

    if(inicio == converter){
        valor_convertido = valor; 
    }else if(inicio == "bps" && converter == "kbps"){
        valor_convertido = valor / 1000;
    }else if(inicio == "bps" && converter == "Mbps"){
        valor_convertido = valor / 1000000;
    }else if(inicio == "bps" && converter == "Gbps"){
        valor_convertido = valor / 1000000000;
    }else if(inicio == "bps" && converter == "Tbps"){
        valor_convertido = valor / 1000000000000;
    }else if(inicio == "kbps" && converter == "bps"){
        valor_convertido = valor * 1000;
    }else if(inicio == "kbps" && converter == "Mbps"){
        valor_convertido = valor / 1000;
    }else if(inicio == "kbps" && converter == "Gbps"){
        valor_convertido = valor / 1000000;
    }else if(inicio == "kbps" && converter == "Tbps"){
        valor_convertido = valor / 1000000000;
    }else if(inicio == "Mbps" && converter == "bps"){
        valor_convertido = valor * 1000000;
    }else if(inicio == "Mbps" && converter == "kbps"){
        valor_convertido = valor * 1000;
    }else if(inicio == "Mbps" && converter == "Gbps"){
        valor_convertido = valor / 1000;
    }else if(inicio == "Mbps" && converter == "Tbps"){
        valor_convertido = valor / 1000000;
    }else if(inicio == "Gbps" && converter == "bps"){
        valor_convertido = valor * 1000000000;
    }else if(inicio == "Gbps" && converter == "kbps"){
        valor_convertido = valor * 1000000;
    }else if(inicio == "Gbps" && converter == "Mbps"){
        valor_convertido = valor * 1000;
    }else if(inicio == "Gbps" && converter == "Tbps"){
        valor_convertido = valor / 1000;
    }else if(inicio == "Tbps" && converter == "bps"){
        valor_convertido = valor * 1000000000000;
    }else if(inicio == "Tbps" && converter == "kbps"){
        valor_convertido = valor * 1000000000;
    }else if(inicio == "Tbps" && converter == "Mbps"){
        valor_convertido = valor * 1000000;
    }else if(inicio == "Tbps" && converter == "Gbps"){
        valor_convertido = valor * 1000;
    }else{}

    document.getElementById("resultado").innerHTML = "O valor convertido é igual a: " + valor_convertido + converter;
}