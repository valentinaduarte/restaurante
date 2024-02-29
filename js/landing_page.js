const cabecera = document.querySelector('#cabecera');
const buscador = document.querySelector('#buscador');

const contenido = document.querySelector('#contenido');
contenido.innerHTML=`
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="../images/foto_carusel1.png">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="../images/foto_carusel2.jpg">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="../images/foto_carusel3.jpg">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
`
