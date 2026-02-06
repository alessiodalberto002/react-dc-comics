export default function Footer() {

    return (

        <footer>
            <div className="container py-4 position-relative">
                <img className="position-absolute end-0 bottom-img-footer z-0" src="src/assets/img/dc-logo-bg.png" alt="" />
                <div className="d-flex text-light">
                    <div className="me-5">
                        <h2 className="text-uppercase fw-bold">dc comics</h2>
                        <ul className="p-0 footer-text">
                            <li><a href="">Characters</a></li>
                            <li><a href="">Comics</a></li>
                            <li><a href="">Movies</a></li>
                            <li><a href="">TV</a></li>
                            <li><a href="">Games</a></li>
                            <li><a href="">Videos</a></li>
                            <li><a href="">News</a></li>
                        </ul>

                        <h2 className="text-uppercase fw-bold mt-2">shop</h2>
                        <ul className="p-0 footer-text">
                            <li><a href="">Shop DC</a></li>
                            <li><a href="">Shop DC Collectibles</a></li>
                        </ul>
                    </div>

                    <div className="me-2">
                        <h2 className="text-uppercase fw-bold">dc</h2>
                        <ul className="p-0 footer-text">
                            <li><a href="">Term Of Use</a></li>
                            <li><a href="">Privacy Policy (new)</a></li>
                            <li><a href="">Ad Choices</a></li>
                            <li><a href="">Advertising</a></li>
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Subcriptions</a></li>
                            <li><a href="">Talent Workshops</a></li>
                            <li><a href="">CPSC Certificates</a></li>
                            <li><a href="">Ratings</a></li>
                            <li><a href="">Shop Help</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-uppercase fw-bold">sites</h2>
                        <ul className="p-0 footer-text">
                            <li><a href="">DC</a></li>
                            <li><a href="">MAD Magazine</a></li>
                            <li><a href="">DC Kids</a></li>
                            <li><a href="">DC Universe</a></li>
                            <li><a href="">DC Power Visa</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-dark py-5 position-relative z-3">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <button type="button" class="btn btn-outline-primary text-light py-2 text-uppercase">sign up - now!</button> 

                        <div className="d-flex align-items-center">
                            <h3 className="text-uppercase text-primary fw-bold m-0 px-3">follow us</h3>
                            <img className="px-2" src="src/assets/img/footer-facebook.png" alt="" />
                            <img className="px-2" src="src/assets/img/footer-periscope.png" alt="" />
                            <img className="px-2" src="src/assets/img/footer-pinterest.png" alt="" />
                            <img className="px-2" src="src/assets/img/footer-youtube.png" alt="" />
                            <img className="px-2" src="src/assets/img/footer-twitter.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </footer>

    )
}