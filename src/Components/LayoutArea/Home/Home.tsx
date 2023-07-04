import "./Home.css";
import RandomBrand from "./RandomBrand/RandomBrand";
import Youtube from "./Youtube/Youtube";

const day = new Date().getDay();

const shoeBrands = [
    { id: 1, name: "Nike" },
    { id: 2, name: "Adidas" },
    { id: 3, name: "Puma" },
    { id: 4, name: "Reebok" },
    { id: 5, name: "Converse" },
    { id: 6, name: "Vans" },
    { id: 7, name: "New Balance" },
    { id: 8, name: "ASICS" },
    { id: 9, name: "Skechers" },
    { id: 10, name: "Under Armour" }]



function Home(): JSX.Element {
    return (
        <div className="Home">
            <h1>The coolest shoe store</h1>
            {day === 1 && (
                <p>Buying shoes is an exciting experience that goes beyond just finding a practical necessity. It's a chance to express your style, enhance your comfort, and make a fashion statement. When shopping for shoes, there are several factors to consider. Firstly, it's essential to determine the purpose of the shoes. Are you looking for athletic shoes for sports and exercise, casual shoes for everyday wear, or perhaps something more formal for special occasions? Understanding the intended use will help narrow down your options. Next, consider the fit. Properly fitting shoes provide comfort and support, preventing discomfort and potential foot problems. Take the time to try on different sizes and styles, ensuring that they feel snug but not tight. Additionally, consider the material and quality of the shoes. Durable materials and well-crafted designs ensure longevity and value for your investment. Style is another crucial aspect. Shoes can make a significant impact on your overall look, complementing your outfits and reflecting your personal taste. Whether you prefer classic, trendy, or unique designs, there's a shoe style out there for everyone. Finally, don't forget about the price. Set a budget that aligns with your needs and explore options within that range. Remember, quality shoes are an investment that can provide long-term comfort and style. So, take your time, explore various brands and designs, and choose shoes that not only meet your practical requirements but also bring joy and confidence to your step.</p>
            )}

            <Youtube />

            <div className="ShoeBrandes">
                    <p>{shoeBrands.map((brand) => brand.name).join(", ")}</p>
            </div>

            <RandomBrand />
        </div>
    );
}

export default Home;
