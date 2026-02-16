const footerSection = [
    {
        id: 1,
        title: "dc comics",
        links: [
            { label: "Characters", href: "#"},
            { label: "Comics", href: "#"},
            { label: "Movies", href: "#"},
            { label: "TV", href: "#"},
            { label: "Games", href: "#"},
            { label: "Videos", href: "#"},
            { label: "News", href: "#"},
        ]
    },
    {
        id: 2,
        title: "shop",
        links: [
            { label: "Shop DC", href: "#"},
            { label: "Shop DC Collectibles", href: "#"}
        ]
    },
    {
        id: 3,
        title: "dc",
        links: [
            { label: "Terms Of Use", href: "#"},
            { label: "Privacy policy(New)", href: "#"},
            { label: "Ad Choices", href: "#"},
            { label: "Advertising", href: "#"},
            { label: "Jobs", href: "#"},
            { label: "Subscriptions", href: "#"},
            { label: "Talent Workshops", href: "#"},
            { label: "CPSC Certificates", href: "#"},
            { label: "Ratings", href: "#"},
            { label: "Shop Help", href: "#"},
            { label: "Contact Us", href: "#"},
        ]
    },
    {
        id: 4,
        title: "sites",
        links: [
            { label: "DC", href: "#"},
            { label: "MAD Magazine", href: "#"},
            { label: "DC Kids", href: "#"},
            { label: "DC Universe", href: "#"},
            { label: "DC Power Visa", href: "#"},
        ]
    },
]

export default function Footer() {

    return (

        <footer>
            <div className="container py-4 position-relative">
                <img className="position-absolute end-0 bottom-img-footer z-0" src="src/assets/img/dc-logo-bg.png" alt="" />
                <div className="d-flex text-light">

                    {footerSection.map((section) => (
                        <div className="me-5" key={section.id}>
                            <h2 className="text-uppercase fw-bold">{section.title}</h2>
                            <ul className="m-0 p-0">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a className="fw-light footer-text" href={link.href}>{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                
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