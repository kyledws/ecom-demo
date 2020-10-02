import fetch from "node-fetch";

import { getDeveloperJwt } from "local/utils/authentication";
import * as Env from "local/env";

export const getThing = async () => {
  const token = getDeveloperJwt({
    days: 1,
    keyId: Env.APPLE_MUSIC_KEY_ID,
    now: Math.floor(Date.now() / 1000),
    privateKey: Env.APPLE_MUSIC_PRIVATE_KEY,
    teamId: Env.APPLE_MUSIC_TEAM_ID,
  });

  const data = await fetch("https://api.music.apple.com/v1/catalog/us/songs/203709340", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};
