import Navbar from "./Navbar"

const Header = () => {
    return(

        <header>
            <div className="container py-2">
                <div className="d-flex justify-content-between align-items-center">

                    <figure>
                        <img src="src/assets/img/dc-logo.png" alt="" />
                    </figure>

                    <Navbar />
                
                </div>
            </div>
        </header>
    
    )
}

export default Header