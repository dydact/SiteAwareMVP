/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite($filter: ModelSubscriptionSiteFilterInput) {
    onCreateSite(filter: $filter) {
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
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite($filter: ModelSubscriptionSiteFilterInput) {
    onUpdateSite(filter: $filter) {
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
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite($filter: ModelSubscriptionSiteFilterInput) {
    onDeleteSite(filter: $filter) {
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
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
    onCreateReport(filter: $filter) {
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
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
    onUpdateReport(filter: $filter) {
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
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
    onDeleteReport(filter: $filter) {
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
export const onCreateObservation = /* GraphQL */ `
  subscription OnCreateObservation(
    $filter: ModelSubscriptionObservationFilterInput
  ) {
    onCreateObservation(filter: $filter) {
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
export const onUpdateObservation = /* GraphQL */ `
  subscription OnUpdateObservation(
    $filter: ModelSubscriptionObservationFilterInput
  ) {
    onUpdateObservation(filter: $filter) {
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
export const onDeleteObservation = /* GraphQL */ `
  subscription OnDeleteObservation(
    $filter: ModelSubscriptionObservationFilterInput
  ) {
    onDeleteObservation(filter: $filter) {
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
