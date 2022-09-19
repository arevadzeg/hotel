import { useEffect, useState } from "react"
import config from "../../config"
import './footer.css'

const Footer = () => {

    const [footerStyles, setFooterStyles] = useState(null)
    const [footerColumns, setFooterColumns] = useState([])
    const [enable, setEnable] = useState([])

    useEffect(() => {
        const { styles, footerColumns, enable } = config.footer
        setFooterStyles(styles)
        setFooterColumns(footerColumns)
        setEnable(enable)
    }, [])

    return enable && <footer style={footerStyles?.general} className='footer'>
        <div className="footer_links-wrapper">
            {
                footerColumns.map((column) => {
                    return <div >
                        <p style={footerStyles.header}>{column.header}</p>
                        <div className="footer_column-wrapper">
                            {
                                column.links.map((link) => {
                                    return <span className="footer_link"
                                        style={footerStyles.footerLink}>
                                        {link.text}
                                    </span>
                                })
                            }
                        </div>
                    </div>
                })
            }
        </div>
        <p>All rights reserved</p>
    </footer>

}

export default Footer