import { gql } from '@apollo/client';

export const GET_BALANCE_ELÉCTRICO = gql`
  query getEnergyBalanceByDateRange($startDate: String!, $endDate: String!) {
    getEnergyBalanceByDateRange(startDate: $startDate, endDate: $endDate) {
        startDate
        endDate
    }
  }
`;
