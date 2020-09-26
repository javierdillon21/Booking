import React from 'react'
import logo from './assets/logo-noback.png'
import './styles/Layout.css'

console.log(logo)
export default function Layout(props) {
    return (
        <div id="main-container">
            <header>
                <div id="logo-container">
                    <img src={logo} alt="Logo del Ministerio Rey de Gloria" />
                    <h1>MIN. REY DE GLORIA</h1>
                </div>
                <h2> Reservaciones</h2>
            </header>

            <main>
                {props.children}
            </main>
            <footer>
                <p>gracias por su visita, vuelva pronto...</p>
            </footer>
        </div>
    )
}