import { LocalSee } from "@mui/icons-material";
import "./ShoePics.css";
import image1 from "../../assets/images/shose1.jpeg"
import image2 from "../../assets/images/shose2.jpeg"
import image3 from "../../assets/images/shose3.jpeg"
import image4 from "../../assets/images/shose4.jpeg"
import image5 from "../../assets/images/shose5.jpeg"
import { useState } from "react";

function ShoePics(): JSX.Element {

    const [randomImageSrc, setRandomImageSrc] = useState("");



    function showRandomImage() {
        const index = Math.floor(Math.random() * 5 + 1);
        switch (index) {
            case 1:
                setRandomImageSrc(image1);
                break;
            case 2:
                setRandomImageSrc(image2);
                break;
            case 3:
                setRandomImageSrc(image3);
                break;
            case 4:
                setRandomImageSrc(image4);
                break;
            case 5:
                setRandomImageSrc(image5);
                break;
            default:
                break;
        }
    }


    return (
        <div className="ShoePics">
            <img src={randomImageSrc} alt="Random Shoe" className="randomImage"/>
            <LocalSee onClick={showRandomImage} /> | ShoePics
        </div>
    );
}

export default ShoePics;
