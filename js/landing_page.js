const cabecera = document.querySelector('#cabecera');
const buscador = document.querySelector('#buscador');

const contenido = document.querySelector('#contenido');
contenido.innerHTML=`
    <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../images/foto_carusel_1.png" class="d-block w-100" ">
                <div class="carousel-caption d-none d-md-block">
                <h1>Tortas</h1>
                <p> Explora los contenidos mas exquisitos que tenemos para tus fechas especiales.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../images/foto_carusel_2.jpg" class="d-block w-100">
                <div class="carousel-caption d-none d-md-block">
                <h1>Postres</h1>
                <p>Observa un bosquejo de la gran variedad de postres para tus eventos recreativos, empresariales y familiares</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../images/foto_carusel_3.jpg" class="d-block w-100">
                <div class="carousel-caption d-none d-md-block">
                <h1>Comas Diabeticos</h1>
                <p>Goza de nuestra gran variedad para calmar cualquier antojo</p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
`
const btnLogin = document.querySelector('#btn_login');
const btnGallery = document.querySelector('#btn_gallery');


