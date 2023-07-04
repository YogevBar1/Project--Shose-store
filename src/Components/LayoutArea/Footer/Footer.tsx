import "./Footer.css";

function Footer(): JSX.Element {

    const year = new Date().getFullYear();

    const handleClick= () =>{
        alert("Yogev Bar");
    }
    
    return (
        <div className="Footer">
			<h5 onClick={handleClick}>All rights reserved to Yogev | {year}</h5>
        </div>
    );
}

export default Footer;
