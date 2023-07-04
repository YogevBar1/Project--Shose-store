import "./Products.css";
import imageSource1 from "../../../assets/images/shose1.jpeg"
import imageSource2 from "../../../assets/images/shose2.jpeg"
import imageSource3 from "../../../assets/images/shose3.jpeg"
import imageSource4 from "../../../assets/images/shose4.jpeg"
import imageSource5 from "../../../assets/images/shose5.jpeg"
import imageSource6 from "../../../assets/images/shose6.jpeg"


function Products(): JSX.Element {
    return (
        <div className="Products">
            Products:
            <div className="image-grid">
                <img src={imageSource1} />
                <img src={imageSource2} />
                <img src={imageSource3} />
                <img src={imageSource4} />
                <img src={imageSource5} />
                <img src={imageSource6} />
            </div>
        </div>
    );
}

export default Products;
