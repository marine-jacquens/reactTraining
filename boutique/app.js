//const Header = React.createElement('h1', {}, 'La maison jungle')

function Header() {

    let title = "la maison jungle";
    return (<h1>{title.toUpperCase()}</h1>)

}

function Description() {
    const text = "Ici achetez toutes les plantes dont vous avez toujours rêvées"
    const emojis = "🌵🌱🎍"
    return (<p>{text + emojis}</p>)
}

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

function Banner() {
    return (<div>
        <Header />
        <Description />
        <Cart />
    </div>)
}

ReactDOM.render(<Banner />, document.getElementById('root'))

//pour accrocher plusieurs éléments au DOM => wrapper dans un composant parent
ReactDOM.render(<Banner />, document.getElementById("root"))

//wrapper deux éléments sans que le parent n'apparaisse
//ReactDOM.render(<React.Fragment><Header /><Description /></React.Fragment>, document.getElementById("root"))


//ReactDOM.render(Header, document.getElementById("root"))
