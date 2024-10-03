/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
      id
      name
      location
      reports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSites = /* GraphQL */ `
  query ListSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
      id
      title
      date
      site {
        id
        name
        location
        createdAt
        updatedAt
        __typename
      }
      observations {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      siteReportsId
      __typename
    }
  }
`;
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        date
        createdAt
        updatedAt
        siteReportsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getObservation = /* GraphQL */ `
  query GetObservation($id: ID!) {
    getObservation(id: $id) {
      id
      report {
        id
        title
        date
        createdAt
        updatedAt
        siteReportsId
        __typename
      }
      content
      category
      severity
      createdAt
      updatedAt
      reportObservationsId
      __typename
    }
  }
`;
export const listObservations = /* GraphQL */ `
  query ListObservations(
    $filter: ModelObservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listObservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        category
        severity
        createdAt
        updatedAt
        reportObservationsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
