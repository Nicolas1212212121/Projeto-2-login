function validaCampos(){    
let usuario = document.getElementById("usuario").value;
let senha = document.getElementById("senha").value;

if(usuario!="juca"&& senha != "1234"){
    alert("Usuario ou senha invalido");
}else{
    alert("Seja bem-vindo",usuario);
}
    
}