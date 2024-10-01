/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSite = /* GraphQL */ `
  mutation CreateSite(
    $input: CreateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    createSite(input: $input, condition: $condition) {
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
export const updateSite = /* GraphQL */ `
  mutation UpdateSite(
    $input: UpdateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    updateSite(input: $input, condition: $condition) {
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
export const deleteSite = /* GraphQL */ `
  mutation DeleteSite(
    $input: DeleteSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    deleteSite(input: $input, condition: $condition) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport(
    $input: CreateReportInput!
    $condition: ModelReportConditionInput
  ) {
    createReport(input: $input, condition: $condition) {
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
    $input: UpdateReportInput!
    $condition: ModelReportConditionInput
  ) {
    updateReport(input: $input, condition: $condition) {
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
    $input: DeleteReportInput!
    $condition: ModelReportConditionInput
  ) {
    deleteReport(input: $input, condition: $condition) {
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
export const createObservation = /* GraphQL */ `
  mutation CreateObservation(
    $input: CreateObservationInput!
    $condition: ModelObservationConditionInput
  ) {
    createObservation(input: $input, condition: $condition) {
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
export const updateObservation = /* GraphQL */ `
  mutation UpdateObservation(
    $input: UpdateObservationInput!
    $condition: ModelObservationConditionInput
  ) {
    updateObservation(input: $input, condition: $condition) {
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
export const deleteObservation = /* GraphQL */ `
  mutation DeleteObservation(
    $input: DeleteObservationInput!
    $condition: ModelObservationConditionInput
  ) {
    deleteObservation(input: $input, condition: $condition) {
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
