jQuery(document).ready(function($) {
    $('#slider').bjqs({
 
         
// PARAMETROS OPCIONALES QUE NOS OFRECE EL PLUGIN
width : 1270,
height : 642,
 
// animacion
animtype : 'fade', // 'fade' o 'slide'
animduration : 500, // rapidez de transicion
animspeed : 4000, // delay entre animaciones
automatic : true, // automatico
 
// controles
showcontrols : true, // Mostrar controles prev y next
centercontrols : true, // centrar controles prev y next
nexttext : 'Next', // Texto para boton next
prevtext : 'Prev', // Texto para boton prev
showmarkers : true, // Mostrar botones de navegacion
centermarkers : true, // Centrar botones de navegacion
 
// interaccion
keyboardnav : true, // habilita navegacion por teclado
hoverpause : true, // pausa slide cuando el mouse esta encima
 
// presentacion
usecaptions : true, // muestra texto introducido en el tag title
responsive : true // habilita modo responsive (beta)
    });
});
