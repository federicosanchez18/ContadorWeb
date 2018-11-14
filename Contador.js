function  init(){
            var count = 0
            var aumentar = document.getElementById("aumentar");
            var decrementar = document.getElementById("decrementar");
            var resetear = document.getElementById("resetear"); 
            var resultado = document.getElementById("resultado");

           //eventos
           aumentar.onclick = function(e){
                count ++;
                resultado.textContent = count;
            }

            decrementar.onclick = function(e){
                if((count - 1) < 0){
                    alert("Este contador NO admite numeros negativos");
                }
                else {
                count--;
                resultado.textContent = count;
                }
            }    

            resetear.onclick = function(e){
                count = 0;
                resultado.textContent = count;
            }


            resultado.textContent = count;
        }

        