import './Apresentation.css'
export default function Contact() {
    return (
    <div className="catalog" style={{ backgroundColor: "var(--color-bg)"}}>
        <h2 style={{ textAlign: "center", margin: 0}}>Quem somos nós?</h2>
        {/* descrição desenvolvida pelo restaurante ou por mim  */}
        <div className="para">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed porro alias omnis, temporibus nostrum harum incidunt! Libero, expedita natus. Quidem tempore eius maxime   quis ipsa mollitia ad omnis veniam atque.</p>
        </div>
        <p style={{ textAlign: "center" }}>Baixe nosso cardápio e escolha seu lanche já!</p>
        {/* Link para download ou acesso do cardápio*/}
        <div className="cta-div"><button>Acesse Aqui</button></div>
    </div>

    )
    
}