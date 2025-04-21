import './Footer.css'
export default function Footer(props) {
    return (
        <footer>
            <p>&copy; Desenvolvido por Pietro D'Avila em parceria com { props.burguerShop }</p>    
        </footer>
    )
}