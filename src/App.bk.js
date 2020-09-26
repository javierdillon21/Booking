import React, { useState, useEffect } from 'react'

export default function App() {
    var [persona, setPersona] = useState(undefined)

    function initPersona() {
        persona = {
            nombre: 'javi',
            apellido: 'dillon'
        }
    }

    setTimeout(initPersona, 5000)
    setInterval(function(){console.log(persona)}, 1000)

    return (
        <div>
            {persona && <h1>mi nombre es {persona.nombre}</h1>}
        </div>
    )
}