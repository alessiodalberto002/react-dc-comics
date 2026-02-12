const Navbar = () => {

    const links = [
        { id: 1, text: 'characters', url: '#', current: false },
        { id: 1, text: 'comics', url: '#', current: false },
        { id: 1, text: 'movies', url: '#', current: false },
        { id: 1, text: 'tv', url: '#', current: false },
        { id: 1, text: 'games', url: '#', current: false },
        { id: 1, text: 'collectibles', url: '#', current: false },
        { id: 1, text: 'videos', url: '#', current: false },
        { id: 1, text: 'fans', url: '#', current: false },
        { id: 1, text: 'news', url: '#', current: false },
        { id: 1, text: 'shop', url: '#', current: false },
    ]

    const navList = links.map(link => {
        return (
            <li key={link.id}>
                <a href="" key={link.url} className={link.current ? 'active' : ' '}>
                    {link.text}
                </a>
            </li>
        )
    })

    return (
        <nav id="top-navbar">
            <ul className="d-flex">
                {navList}
            </ul>
        </nav>
    )
}

export default Navbar