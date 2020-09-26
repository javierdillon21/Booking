import React, { useState } from 'react'

function MostrarFormulario() {

    var [personasSubModule,
        setPersonasSuvebmodule] = useState([<DatosAsistenteSubmodule />])

    function hacerReserva(evento) {
        evento.preventDefault()
    }
    function handleSubModulo(evento) {
        evento.preventDefault()
        setPersonasSubmodule((current) =>
            [...current, <DatosAsistenteSubmodule />])
    }

    return <form>
        <button onClick={handleSubModulo}>
            +
        </button>
        {personasSubModule}
        <input type='submit' value='RESERVAR' onClick={hacerReserva} />
    </form>
}


function DatosAsistenteSubmodule() {
    return (<div>
        <label> nombre
        <input type='text' />
        </label>
        <label> apellido
        <input type='text' />
        </label>
        <label> fecha de nacimiento
        <input type='date' />
        </label>
        <label> cedula
        <input type='text' />
        </label>
    </div>)
}
export default MostrarFormulario