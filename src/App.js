import React, { useEffect, useState } from 'react';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { listServicios } from "./graphql/queries"

import { API, graphqlOperation } from 'aws-amplify'
import { formatSchedule } from './utils'
import Formulario from './Formulario'
import Layout from './Layout'

import './styles/app.css'

Amplify.configure(awsExports);


function App() {
  var [servicios, setServicios] = useState([])
  var [servicioId, setServicioId] = useState(undefined)

  function cambiaServicio(e) {
    var button = e.target
    var servId = button.querySelector('span').innerText
    setServicioId(servId)
  }


  useEffect(() => {
    async function callDB() {
      var serviciosData = await API.graphql(graphqlOperation(listServicios));
      var servicios = serviciosData.data.listServicios.items
      setServicios(servicios)
    }

    callDB()
  }
    , [])

  if (servicios.length == 0) return <p>cargando...</p>
  return (
    <Layout>
      {/* horarios */}
      <div id="services-container">
        {!servicioId && servicios.map(servicio =>
          <button onClick={cambiaServicio} >
            {servicio.dia} {formatSchedule(servicio.horario)} <span>{servicio.id}</span>
          </button>
        )}
      </div>

      {/* formulario */}
      {servicioId && <Formulario servicioId={servicioId} />}
    </Layout>
  )
}

// export default withAuthenticator(App);
export default App;
