import { useQuery } from "graphql-hooks";

export const useDepartures = () => {
  return useQuery(
    /* GraphQL */ `
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
