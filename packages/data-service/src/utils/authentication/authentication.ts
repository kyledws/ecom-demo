import jws from "jws";

type GetDeveloperJwtArgs = {
  days: number;
  keyId: string;
  now: number;
  privateKey: string;
  teamId: string;
};

const ONE_DAY_IN_SECONDS = 24 * 60 * 60;

export const getDeveloperJwt = (args: GetDeveloperJwtArgs): string => {
  return jws.sign({
    header: {
      alg: "ES256",
      kid: args.keyId,
    },
    payload: {
      iat: args.now,
      iss: args.teamId,
      exp: args.now + Math.floor(ONE_DAY_IN_SECONDS * args.days),
    },
    secret: args.privateKey,
  });
};
