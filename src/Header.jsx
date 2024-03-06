import "./Header.css";

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg Header">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Rookie</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                <button class="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Nosotros</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tienda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Ayuda</a>
                            </li>
                        </ul>
                        <form class="container-fluid justify-content-start">
                            <button class="btn btn-outline-dark me-2" type="button">Tu carrito</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header