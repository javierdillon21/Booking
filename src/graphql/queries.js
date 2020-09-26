/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAsistente = /* GraphQL */ `
  query GetAsistente($cedula: ID!) {
    getAsistente(cedula: $cedula) {
      cedula
      nombre
      apellido
      fNacimiento
      createdAt
      updatedAt
    }
  }
`;
export const listAsistentes = /* GraphQL */ `
  query ListAsistentes(
    $cedula: ID
    $filter: ModelAsistenteFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAsistentes(
      cedula: $cedula
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        cedula
        nombre
        apellido
        fNacimiento
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReserva = /* GraphQL */ `
  query GetReserva($id: ID!) {
    getReserva(id: $id) {
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
export const listReservas = /* GraphQL */ `
  query ListReservas(
    $filter: ModelReservaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getServicio = /* GraphQL */ `
  query GetServicio($id: ID!) {
    getServicio(id: $id) {
      id
      dia
      horario
      createdAt
      updatedAt
    }
  }
`;
export const listServicios = /* GraphQL */ `
  query ListServicios(
    $filter: ModelServicioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dia
        horario
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
