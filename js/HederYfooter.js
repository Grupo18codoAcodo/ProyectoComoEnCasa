//********************* Creando mi Header*************************
let miheader=`	<a class="logo" href="./index.html">
<img src="./img/comoEnCasa.png" alt="fernet logo" />
</a>
<nav>	
<ul class="nav-bar">
<li><a class="nav-link" href="index.html">Inicio</a></li>
<li><a class="nav-link" href="menu.html">Menú</a></li>
<li><a class="nav-link" href="sucuarsales.html">Sucursales</a></li>
<li><a class="nav-link" href="pedidos.html">Pedidos</a></li>
<li><a class="nav-link" href="contacto.html">Contacto</a></li>
</ul>
</nav>`
document.querySelector("header").innerHTML=miheader
//****************************************************************

//++++++++++++++++++++++ Creando mi Footer*************************
let miFooter=`<nav>
<a href="https://api.whatsapp.com/send?phone=1127098137" target="_blank">
    <img src="./img/whatsapp.png" alt="Contacto" width="30" height="30">
</a>
<a href="https://www.instagram.com/comoencasa_ar/" target="_blank">
    <img src="./img/instagram.png" alt="instagram" width="30" height="30">
</a>
</nav>
<p>Sitio desarrollado por Grupo 18 | 2023</p>`
document.querySelector("footer").innerHTML=miFooter
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++