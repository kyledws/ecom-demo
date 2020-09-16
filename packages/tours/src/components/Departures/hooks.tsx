import { gql, useQuery } from "@apollo/client";

export const useDepartures = () => {
  return useQuery(
    gql`
      query($gateway: String!, $tourCode: String!) {
        departures(gateway: $gateway, tourCode: $tourCode) {
          calendarYear
          departure
          gateway
          return
          tourCode
          tourYear
          tripId
        }
      }
    `,
    { variables: { gateway: "BOS", tourCode: "GRIB" } }
  );
};
