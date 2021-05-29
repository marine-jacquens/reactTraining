
function Cart() {

    let monsteraPrice = 8;
    let ivyPrice = 10;
    let flowerPrice = 15;

    return (
        <div>
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monsteraPrice}€</li>
                <li>Lierre : {ivyPrice}€</li>
                <li> Bouquet de fleur : {flowerPrice}€</li>
            </ul>
            <p>TOTAL : {monsteraPrice + ivyPrice + flowerPrice}€</p>
        </div>
    )
}

export default Cart