/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
      id
      name
      location
      reports {
        items {
          id
          title
          date
          createdAt
          updatedAt
          siteReportsId
        }
        nextToken
      }
      createdAt
      updatedAt
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
        reports {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
        reports {
          nextToken
        }
        createdAt
        updatedAt
      }
      observations {
        items {
          id
          content
          category
          severity
          createdAt
          updatedAt
          reportObservationsId
        }
        nextToken
      }
      createdAt
      updatedAt
      siteReportsId
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
        site {
          id
          name
          location
          createdAt
          updatedAt
        }
        observations {
          nextToken
        }
        createdAt
        updatedAt
        siteReportsId
      }
      nextToken
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
        site {
          id
          name
          location
          createdAt
          updatedAt
        }
        observations {
          nextToken
        }
        createdAt
        updatedAt
        siteReportsId
      }
      content
      category
      severity
      createdAt
      updatedAt
      reportObservationsId
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
        report {
          id
          title
          date
          createdAt
          updatedAt
          siteReportsId
        }
        content
        category
        severity
        createdAt
        updatedAt
        reportObservationsId
      }
      nextToken
    }
  }
`;
