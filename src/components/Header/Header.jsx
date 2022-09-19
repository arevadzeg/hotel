import { useEffect, useState } from "react"
import config from "../../config"
import './header.css'

const Header = () => {

    const [logo, setLogo] = useState(null)
    const [navItems, setNavItems] = useState([])
    const [styles, setStyles] = useState(null)

    console.log(logo)

    useEffect(() => {
        const { logo, navItems, ...styles } = config.header
        setLogo(logo)
        setNavItems(navItems)
        setStyles(styles)
    }, [])


    return <header style={styles} className='header'>


        <img src={logo} alt="logo" />

        <div className="nav-items">
            {
                navItems.map((navItem, i) => {
                    return <div key={i} className="nav-item">
                        {navItem.displayText}
                    </div>
                })
            }

        </div>

    </header>
}

export default Header