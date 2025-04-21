import "./Main.css" 
export default function Main() {
    return (
        <main>
            <div className="overlay"></div>
            <div className="text">
            <h1>Descubra <span>sua próxima refeição</span></h1>
            <p style={{color: "var(--color-error)"}}>Banner sujeito a alterações</p>
            </div>
        </main>
    )
}