import './Burguer.css'

export default function Burguer(props) {
    return (
        <div className="burguer">
            <h3>{ props.title }</h3>
            <img src= { props.image } /><br/>
            <input type="button" value="Comprar" />
        </div>
    )
}