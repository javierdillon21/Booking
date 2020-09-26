/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAsistente = /* GraphQL */ `
  mutation CreateAsistente(
    $input: CreateAsistenteInput!
    $condition: ModelAsistenteConditionInput
  ) {
    createAsistente(input: $input, condition: $condition) {
      cedula
      nombre
      apellido
      fNacimiento
      createdAt
      updatedAt
    }
  }
`;
export const updateAsistente = /* GraphQL */ `
  mutation UpdateAsistente(
    $input: UpdateAsistenteInput!
    $condition: ModelAsistenteConditionInput
  ) {
    updateAsistente(input: $input, condition: $condition) {
      cedula
      nombre
      apellido
      fNacimiento
      createdAt
      updatedAt
    }
  }
`;
export const deleteAsistente = /* GraphQL */ `
  mutation DeleteAsistente(
    $input: DeleteAsistenteInput!
    $condition: ModelAsistenteConditionInput
  ) {
    deleteAsistente(input: $input, condition: $condition) {
      cedula
      nombre
      apellido
      fNacimiento
      createdAt
      updatedAt
    }
  }
`;
export const createReserva = /* GraphQL */ `
  mutation CreateReserva(
    $input: CreateReservaInput!
    $condition: ModelReservaConditionInput
  ) {
    createReserva(input: $input, condition: $condition) {
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
export const updateReserva = /* GraphQL */ `
  mutation UpdateReserva(
    $input: UpdateReservaInput!
    $condition: ModelReservaConditionInput
  ) {
    updateReserva(input: $input, condition: $condition) {
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
export const deleteReserva = /* GraphQL */ `
  mutation DeleteReserva(
    $input: DeleteReservaInput!
    $condition: ModelReservaConditionInput
  ) {
    deleteReserva(input: $input, condition: $condition) {
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
export const createServicio = /* GraphQL */ `
  mutation CreateServicio(
    $input: CreateServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    createServicio(input: $input, condition: $condition) {
      id
      dia
      horario
      createdAt
      updatedAt
    }
  }
`;
export const updateServicio = /* GraphQL */ `
  mutation UpdateServicio(
    $input: UpdateServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    updateServicio(input: $input, condition: $condition) {
      id
      dia
      horario
      createdAt
      updatedAt
    }
  }
`;
export const deleteServicio = /* GraphQL */ `
  mutation DeleteServicio(
    $input: DeleteServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    deleteServicio(input: $input, condition: $condition) {
      id
      dia
      horario
      createdAt
      updatedAt
    }
  }
`;
