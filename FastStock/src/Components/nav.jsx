const Nav = ({onClick}) => {

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">Fast Stock</a>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <a type="button" className="btn btn-outline-dark" onClick={onClick}>Salir</a>

                </div>
            </nav>
        </>
    )
}
export default Nav