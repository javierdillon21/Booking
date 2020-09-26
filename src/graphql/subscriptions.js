/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAsistente = /* GraphQL */ `
  subscription OnCreateAsistente {
    onCreateAsistente {
      cedula
      nombre
      apellido
      fNacimiento
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAsistente = /* GraphQL */ `
  subscription OnUpdateAsistente {
    onUpdateAsistente {
      cedula
      nombre
      apellido
      fNacimiento
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAsistente = /* GraphQL */ `
  subscription OnDeleteAsistente {
    onDeleteAsistente {
      cedula
      nombre
      apellido
      fNacimiento
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReserva = /* GraphQL */ `
  subscription OnCreateReserva {
    onCreateReserva {
      id
      createdAt
      asistentesCedulas
      reservador {
        cedula
        nombre
        apellido
        fNacimiento
        createdAt
        updatedAt
      }
      servicio {
        id
        dia
        horario
        createdAt
        updatedAt
      }
      servicioID
      reservadorCedula
      updatedAt
    }
  }
`;
export const onUpdateReserva = /* GraphQL */ `
  subscription OnUpdateReserva {
    onUpdateReserva {
      id
      createdAt
      asistentesCedulas
      reservador {
        cedula
        nombre
        apellido
        fNacimiento
        createdAt
        updatedAt
      }
      servicio {
        id
        dia
        horario
        createdAt
        updatedAt
      }
      servicioID
      reservadorCedula
      updatedAt
    }
  }
`;
export const onDeleteReserva = /* GraphQL */ `
  subscription OnDeleteReserva {
    onDeleteReserva {
      id
      createdAt
      asistentesCedulas
      reservador {
        cedula
        nombre
        apellido
        fNacimiento
        createdAt
        updatedAt
      }
      servicio {
        id
        dia
        horario
        createdAt
        updatedAt
      }
      servicioID
      reservadorCedula
      updatedAt
    }
  }
`;
export const onCreateServicio = /* GraphQL */ `
  subscription OnCreateServicio {
    onCreateServicio {
      id
      dia
      horario
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateServicio = /* GraphQL */ `
  subscription OnUpdateServicio {
    onUpdateServicio {
      id
      dia
      horario
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteServicio = /* GraphQL */ `
  subscription OnDeleteServicio {
    onDeleteServicio {
      id
      dia
      horario
      createdAt
      updatedAt
    }
  }
`;
