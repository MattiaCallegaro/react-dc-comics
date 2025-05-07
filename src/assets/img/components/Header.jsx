
const Header = () => {

    const links = [
        {
            id: 1,
            href: "#",
            label: "Characters",
            current: false,
        },
        {
            id: 2,
            href: "#",
            label: "Comics",
            current: true,
        },
        {
            id: 3,
            href: "#",
            label: "Movies",
            current: false,
        },
        {
            id: 4,
            href: "#",
            label: "TV",
            current: false,
        },
        {
            id: 5,
            href: "#",
            label: "Games",
            current: false,
        },
        {
            id: 6,
            href: "#",
            label: "Collectibles",
            current: false,
        },
        {
            id: 7,
            href: "#",
            label: "Videos",
            current: false,
        },
        {
            id: 8,
            href: "#",
            label: "Fans",
            current: false,
        },
        {
            id: 9,
            href: "#",
            label: "News",
            current: false,
        },
        {
            id: 10,
            href: "#",
            label: "Shop",
            current: false,
        }
    ]


    return (<header>
        <figure>
            <img src="dc-logo.png" alt="DC" />
            <nav>
                <ul>
                    {/* `creo una copia di links con map, utilizzo la key assegnado id e vado ad aaplicare la classe */}
                    {links.map((link) => (
                        <li key={link.id}>
                            <a href={link.href} className={link.current ? "active" : ""}>
                                {link.label}
                            </a>
                        </li>

                    ))}
                    {/* <li><a href="#" className="active">CHARACTERS</a></li>
                    <li><a href="#" className="active">COMICS</a></li>
                    <li><a href="#" className="active">MOVIES</a></li>
                    <li><a href="#" className="active">TV</a></li>
                    <li><a href="#" className="active">GAMES</a></li>
                    <li><a href="#" className="active">COLLECTIBLES</a></li>
                    <li><a href="#" className="active">VIDEOS</a></li>
                    <li><a href="#" className="active">FANS</a></li>
                    <li><a href="#" className="active">NEWS</a></li>
                    <li><a href="#" className="active">SHOP</a></li> */}
                </ul>
            </nav>
        </figure>

    </header>)
}

export default Header