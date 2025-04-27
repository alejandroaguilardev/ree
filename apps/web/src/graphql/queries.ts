import { gql } from '@apollo/client';

export const GET_BALANCE_ELÉCTRICO = gql`
  query {
    getEnergyBalanceByDateRange(
      startDate: "2025-01-02T00:00:00Z"
      endDate: "2025-01-03T00:00:00Z"
    ) {
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
