/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSite = /* GraphQL */ `
  subscription OnCreateSite($filter: ModelSubscriptionSiteFilterInput) {
    onCreateSite(filter: $filter) {
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
export const onUpdateSite = /* GraphQL */ `
  subscription OnUpdateSite($filter: ModelSubscriptionSiteFilterInput) {
    onUpdateSite(filter: $filter) {
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
export const onDeleteSite = /* GraphQL */ `
  subscription OnDeleteSite($filter: ModelSubscriptionSiteFilterInput) {
    onDeleteSite(filter: $filter) {
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
