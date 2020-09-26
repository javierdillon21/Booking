import React, { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createAsistente, createReserva } from './graphql/mutations'
import { getAsistente } from './graphql/queries'
import {v4} from 'uuid'

var personasObj = []
var personaModel = {
    nombre: undefined,
    apellido: undefined,
    cedula: undefined,
    fNacimiento: undefined
}

function Formulario(props) {
    var [personasModules,
        setPersonasModules] = useState([<PersonaModule index='0'
            modifyPerson={modifyPerson} />])

    function modifyPerson(index, property, value) {
        personasObj[index][property] = value
        console.log(personasObj)
    }
    function validarReserva() {
        var v = true
        for (const persona of personasObj) {
            if (!persona.nombre || !persona.apellido
                || !persona.cedula || !persona.fNacimiento) {
                console.log(persona)
                v = false
                break
            }
        }
        return v
    }

    async function hacerReserva(evento) {
        evento.preventDefault()
        if (!validarReserva()) {
            alert("Algún campo está vacío")
        }
        else { alert("Todo ok") }
        var consulta= await API.graphql(graphqlOperation(getAsistente,{cedula: personasObj[0].cedula}))
        if(!consulta.data.getAsistente){
            console.log(await API.graphql(
            graphqlOperation(createAsistente, { input: personasObj[0] })));
        }
        var cedulas= personasObj.map((persona)=> persona.cedula)

        await API.graphql(graphqlOperation(createReserva,{input: {id:v4(), 
        reservadorCedula: cedulas[0], 
        asistentesCedulas: cedulas.slice(1),
        servicioID: props.servicioId
         }}))
        console.log(consulta)
    }

    function addPersona(evento) {
        setPersonasModules((current) => {
            var index = current.length
            return [...current, <PersonaModule index={index}
                modifyPerson={modifyPerson} />]
        })
        personasObj.push({ ...personaModel })
    }

    function removePersona(evento) {
        evento.preventDefault()
        // updating the UI array
        setPersonasModules((current) => {
            var newPersonas = [...current]
            newPersonas.pop()
            return newPersonas
        })
        // updating object array
        personasObj.pop()
    }

    useEffect(() => {
        // adding the register object
        personasObj.push({ ...personaModel })
    }, [])

    return <form onSubmit={hacerReserva}>
        <h2>Quien Reserva</h2>
        {personasModules[0]}
        <h2>Otros Asistentes</h2>
        <button type="button" onClick={addPersona}>
            +
        </button>
        <button type="button" onClick={removePersona}>
            -
        </button>
        {personasModules.slice(1)}
        <input type='submit' value='RESERVAR' />
    </form>
}

function PersonaModule(props) {
    function onKeyHandler(e) {
        var charCode = e.charCode
        var isLetter = (charCode > 96 && charCode < 123) ||
            (charCode > 64 && charCode < 91)
        if (!isLetter) e.preventDefault()
    }

    function handlerDataChange(e) {
        var textLabel = e.target.parentElement.innerText
        textLabel = textLabel.toLowerCase().trim()
        console.log(textLabel)

        if (textLabel == 'fecha de nacimiento')
            textLabel = 'fNacimiento'

        if (textLabel)
            props.modifyPerson(props.index, textLabel, e.target.value)
        //         if (/^[a-zA-ZñÑ]+$/.test(textNow)) {
        // }else{
        //     console.log('preventing')
        //     e.preventDefault()
        // }
    }
    return (<div>
        <label> Nombre
        <input type='text' onChange={handlerDataChange}
                onKeyPress={onKeyHandler}
            />
        </label>
        <label> apellido
        <input type='text' onChange={handlerDataChange} />
        </label>
        <label> fecha de nacimiento
        <input type='date' onChange={handlerDataChange} />
        </label>
        <label> cedula
        <input type='text' onChange={handlerDataChange} />
        </label>
    </div>)
}
export default Formulario