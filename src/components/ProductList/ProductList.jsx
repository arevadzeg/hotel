import { useState, useEffect } from "react"
import config from "../../config"
import './productList.css'

const ProductList = () => {

    const [styles, setStyles] = useState(null)
    const [products, setProducts] = useState([])
    const [productsListHeader, setProductsListHeader] = useState(null)
    const [enable, setEnable] = useState()

    useEffect(() => {
        const { list, productsListHeader, styles, enable } = config.productList
        setProducts(list)
        setStyles(styles)
        setProductsListHeader(productsListHeader)
        setEnable(enable)

    }, [])
    console.log(products)

    return enable && <div className="products_list-wrapper">
        <video src={config.productList.backgroundVideo} autoPlay muted loop />
        {productsListHeader && <h2 style={styles.productsListHeaderStyles}>{productsListHeader.text}</h2>}
        {
            products.map((product, i) => {
                return <div className="product_wrapper" key={i}>
                    <div className="product_description" style={styles.postStyles}>
                        <h3 style={styles.postHeader}>{product.header}</h3>
                        <p style={styles.postDescription}>{product.description}</p>
                        {
                            product.button.enable && <button className="product_button">
                                {product.button.text}
                            </button>
                        }
                    </div>
                    <img src={product.img} alt=" " />

                </div>
            })
        }
    </div>
}

export default ProductList