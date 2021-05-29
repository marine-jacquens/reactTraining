function MyComponent() {
    return (<p>Hello OpenClassrooms 👋</p>)
}

function DoMaths() {
    return (<p>La grande réponse sur la vie, l'univers et le reste est {6 * 7} </p>)
}

const alexia = "je suis alexia la belle";

function Modify(){
    return (<div>{ alexia.toUpperCase() }</div> 

    )
}

function Ternary(){
    return(<p>{ 0 > 0 ? 'Deux est plus grand que zéro' : "Ceci n'apparaîtra jamais" }</p>)
}

let myTitle = "Harry Potter et le prisonnier d'Azkaban";

function DisplayTitle(){
    return (<h2>{ myTitle }</h2>)
}

function DisplayNumber(){
    return (<p>{ 42 }</p>)
}

ReactDOM.render(<div><MyComponent /><DoMaths /><Modify /><Ternary /><DisplayTitle /><DisplayNumber /></div>, document.getElementById("react-goes-here"))
