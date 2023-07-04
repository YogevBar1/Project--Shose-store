import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import "./RandomBrand.css";
import { useState } from "react";



function RandomBrand(): JSX.Element {
    const [randomBrand, setRandomBrand] = useState("");
    const shoseBrand = ["Nike", "Adidas", "Air Jordan", "ASICS", "Reebok"];

    function handleClick(){
        const randomNum = Math.floor(Math.random() * shoseBrand.length);
        const randomBrand = shoseBrand[randomNum];

        setRandomBrand(randomBrand);

    };
    return (
        <div className="RandomBrand">
            <h4 onClick={handleClick}>Random Shoe:</h4>
            <span>{randomBrand}</span>

        </div>
    );
}

export default RandomBrand;
