        // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
        let addFriends = document.getElementById('amigo');
        let listaDeAmigos = []; 
        let listaFriends =document.getElementById("listaAmigos");
        let amigoResultado =document.getElementById("resultado");

        function agregarAmigo () {
            if (!addFriends.value){
                alert ("Debes ingresar un nombre")
                limpiarCaja();
            }
            listaDeAmigos.push(addFriends.value);
            listaFriends.innerHTML += `<li>${addFriends.value}</li>`;
            limpiarCaja();
            }
            
            

            for(let i = 0; i < listaDeAmigos.length; i++) {
                let li=document.createElement("li");
                li.textContent = listaDeAmigos[i];
                listaFriends.appendChild(li);


            }

            function sortearAmigo(){
                let random = Math.floor (Math.random() * listaDeAmigos.length);
                let amigoSecreto = listaDeAmigos [random] ;
                listaFriends.innerHTML = " ";
                amigoResultado.innerHTML = ` <li>El amigo secreto es: ${amigoSecreto}</li>`;
            }
            


            function limpiarCaja () {
                document.getElementById("amigo").value = '';
                document.getElementById("listaAmigos").value= " ";
                }
                
    

            

