import { config } from "dotenv";

config();

export const DATA_SERVICE = process.env.DATA_SERVICE ?? "";
export const WEBPACK_BUNDLE_SERVER = process.env.WEBPACK_BUNDLE_SERVER ?? "";
