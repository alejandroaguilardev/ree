import { gql } from '@apollo/client';

export const GET_BALANCE_ELÉCTRICO = gql`
  query getEnergyBalanceByDateRange($startDate: String!, $endDate: String!) {
    getEnergyBalanceByDateRange(startDate: $startDate, endDate: $endDate) {
      startDate
      endDate
      data {
        data {
          type
          id
          attributes {
            title
            lastUpdate
            description
          }
          meta {
            cacheControl {
              cache
              expireAt
            }
          }
        }
        included {
          type
          id
          attributes {
            title
            lastUpdate
            description
            magnitude
            content {
              type
              id
              groupId
              attributes {
                title
                description
                color
                icon
                type
                magnitude
                composite
                lastUpdate
                values {
                  value
                  percentage
                  datetime
                }
                total
                totalPercentage
              }
            }
          }
        }
      }
    }
  }
`;
