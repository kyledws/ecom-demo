/* eslint-disable functional/immutable-data */
/* eslint-disable functional/prefer-readonly-type */
import { Stream } from "stream";

export function streamToString(stream: Stream): Promise<string> {
  const chunks: Uint8Array[] = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk: Uint8Array) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });
}
