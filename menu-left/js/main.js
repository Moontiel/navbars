// ------------------ start show and close menu ----------- //

/* 
    almacenamos en varaibles los elementos html con ID
    icon-burger y ul-header
*/
let $iconBurger = document.querySelector('#icon-burger');
let $ulHeader = document.querySelector('#ul-header');

/* 
    generamos un evento click en el $iconBurger y definimos
    una funcion
*/
$iconBurger.addEventListener('click', () => {
    /* 
        añadimos o removemos de $iconMenuBurger la clase 
        js_transform_iconX definida en la hoja de estilos
    */
	$iconBurger.classList.toggle('js_transform_iconX');

    /* 
        añadimos o removemos de $ulHeader la clase 
        js_show_menu definida en la hoja de estilos
    */
	$ulHeader.classList.toggle('js_show_menu');
});

// ------------------ end show and close menu ----------- //

// ------------------ start li-active --------- //

/*
    linksMenuNav: alamacena todos los elemntos html definidos con
    tag-a que esten dentro de una tag-li
*/
let $linksMenuNav = document.querySelectorAll('li a');

/* 
    ejecutamos la funcion linksActive definida abajo
*/
function linksActive() {
    /*
        realizamos un recorrido forEach en $linksMenuNav y definimos un parametro
        para la funcion

        con esto removemos la clase js_links_active definida en la hoja de 
        estilos de todos los enlaces
    */
	$linksMenuNav.forEach((e) => e.classList.remove('js_links_active'));

    /*
        finalmente añadimos la clase js_links_active definida en la hoja de 
        estilos solamente al enlace al cuando dimos click
    */
	this.classList.add('js_links_active');
}

/*
    realizamos un recorrido forEach en $linksMenuNav y definimos un parametro
    para la funcion

    definimos un evento click en el parametro link y definimos una 
    funcion linksActive que ejecutamos arriba
*/
$linksMenuNav.forEach((link) => link.addEventListener('click', linksActive));

// ------------------ end li-active ----------- //

/* 
	$scrollNavbar: alamacena el elemento definido con el ID 
    scroll-header 
*/
let $scrollHeader = document.querySelector('#scroll-header');

/* 
    generamos un evento scroll en el objeto windows
*/
window.addEventListener('scroll', () => {
	/* 
        si la altura de la ventana al hacer scroll en el eje Y 
        es mayor a 0 añadimos a $scrollHeader la clase 
        js_scroll_header definida en la hoja de estilos
    */
	if (window.pageYOffset > 0) {
		$scrollHeader.classList.add('js_scroll_header');
	} else {
		/* 
            de lo contrario removemos esa clase
        */
		$scrollHeader.classList.remove('js_scroll_header');
	}
});

// ------------------ end scroll header --------- //
