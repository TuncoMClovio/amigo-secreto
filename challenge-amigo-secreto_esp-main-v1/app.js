    // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
    let addFriends = document.getElementById('amigo');
    let listaDeAmigos = []; 
    let listaFriends =document.getElementById("listaAmigos");

    function agregarAmigo () {
        if (!addFriends.value){
            alert ("Debes ingresar un nombre")
            limpiarCaja();
        }
        listaDeAmigos.push(addFriends.value);
        listaFriends.innerHTML += `<li>${addFriends.value}</li>`;
        limpiarCaja();
        }
        
         console.log (listaDeAmigos)

         function limpiarCaja () {
            document.getElementById("amigo").value = '';
            }
            limpiarCaja();
  

        

