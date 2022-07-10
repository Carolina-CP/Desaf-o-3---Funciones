// Desarrollo del ejercicio 4.1

pintarConTeclas = function(color){
    
    ele1 = document.getElementById('div4.1')
    ele1.style.width='200px' 
    ele1.style.height='200px'
    ele1.style.backgroundColor = color

    ele2 = document.getElementById('div4.2')
    ele2.style.width='200px' 
    ele2.style.height='200px'
    ele2.style.backgroundColor = color

    ele3 = document.getElementById('div4.3')
    ele3.style.width='200px' 
    ele3.style.height='200px'
    ele3.style.backgroundColor = color

    ele4 = document.getElementById('div4.4')
    ele4.style.width='200px' 
    ele4.style.height='200px'
    ele4.style.backgroundColor = color
    }
pintarConTeclas("yellow");    


// Desarrollo del ejercicio 4.2

pintarConTeclas = function(color){
        elemento = document.getElementById("div4.5")
        elemento.style.backgroundColor = color
        elemento.style.width = '200px'
        elemento.style.height = '200px'
        }
pintarConTeclas("black");    

  document.addEventListener('keydown', function pintarConTeclas(event) {
    if (event.key === 'a') {
        elemento.style.backgroundColor = 'green'
    /* Cambiar a color 1 */
    } else if (event.key === 's') {
        elemento.style.backgroundColor = 'yellow'
    /* Cambiar a color 2 */
    } else if (event.key === 'd') {
        elemento.style.backgroundColor = 'blue'
    /* Cambiar a color 2 */
    }
    })

// Desarrollo del ejercicio 4.3


const cuadrado = document.getElementById('div4.10')


document.getElementById("div4.6").addEventListener('click', function(){
        cuadrado.style.backgroundColor = 'blue'
    })
    
document.getElementById("div4.7").addEventListener('click', function(){
        cuadrado.style.backgroundColor = 'green'
    })

document.getElementById("div4.8").addEventListener('click', function(){
        cuadrado.style.backgroundColor = 'pink'
    })

document.getElementById("div4.9").addEventListener('click', function(){
        cuadrado.style.backgroundColor = 'brown'
    })
