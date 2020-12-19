var blogueo = document.getElementById("signin");
    //blogueo.innerHTML = "algo"
blogueo.addEventListener("click",function(){
    const parametros = new URLSearchParams();
    parametros.append("Prtemail", document.getElementById("email").value);
    parametros.append("Prtpassword", document.getElementById("password").value);
    axios.get("http://127.0.0.1::4567", parametros)
         .then(function(response){
            console.log(response)
        })
        .catch(function(error){
        console.log(error)

        })
    //alert (parametros)

    //alert("Hola  "+blogueo.innerHTML)
    //alert("Hola  "+document.getElementById("email").value)
    //alert("Hola  "+document.getElementById("password").value)
})