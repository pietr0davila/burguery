import { useState } from 'react' 
import './Header.css'

export default function Header() {
    const [menuClosed, setMenuState] = useState(false);
    return (
        <header>
            <div className="parent">
                    <div className="center-menu">
                        <i style={{ fontSize: "3rem", zIndex: "1", cursor: "pointer"}} className="fa-solid fa-bars" onClick={() => setMenuState(!menuClosed)}></i>
                    </div>
                <nav className="open-menu">
                {/* Operação ternária para checar o estado do menu */}
                    <ul className={`menu ${menuClosed ? 'is-open' : ''}`}>
                        <li><a href="">Início</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Sobre nós</a></li>
                        <li><a href="">Nos encontre</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}