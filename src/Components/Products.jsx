import './Products.css'
import Burguer from './Burguer.jsx'
import burguerImage from '/burguer-template.jpg'

export default function Products() {
    return (
        <div className="products" style={{cursor: "pointer"}}>
            <h2 style={{textAlign: "center"}}>Confira nossos melhores lanches</h2>
            <div className="product">
                {/* substituir pelos nomes reais */}
                <Burguer title="Hamburguer 1" image={burguerImage}/>
                <Burguer title="Hamburguer 2" image={burguerImage}/>
                <Burguer title="Hamburguer 3" image={burguerImage}/>
                <Burguer title="Hamburguer 4" image={burguerImage}/>
            </div>
        </div>
    )
}