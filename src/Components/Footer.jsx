import './Footer.css'
export default function Footer(props) {
    return (
        <footer>
            <h6>Nos procure nas redes sociais</h6>
            <ul>
                <li><a href="#">Link instagram</a></li>
                <li><a href="#">Link twitter</a></li>
                <li><a href="#">Link facebook</a></li>
                <li><a href="#">Link Ifood</a></li>
                {/* Outros links... */}
            </ul>
            <p>&copy; Desenvolvido por Pietro D'Avila em parceria com { props.burguerShop }</p>    
        </footer>
    )
}