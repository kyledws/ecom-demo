/* eslint-disable functional/no-return-void */
/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-this-expression */
/* eslint-disable functional/prefer-readonly-type */
/* eslint-disable functional/no-class */
import { Maybe } from "purify-ts";
import { Client } from "memjs";

import { tryMaybeAsync } from "@package/utilities";

class MemcacheClient {
  #connectionString: string;
  #client: Client | null;

  constructor(uri: string) {
    this.#connectionString = uri;
    this.#client = null;
  }

  close(): void {
    this.#client?.quit();
  }

  connect(): void {
    this.#client = Client.create(this.#connectionString);
  }

  async delete(key: string): Promise<Maybe<boolean>> {
    return tryMaybeAsync(
      async () => {
        if (!this.isConnected()) {
          this.connect();
        }

        const result = await this.#client?.delete(key);
        return result ?? null;
      },
      (e) =>
        console.warn(`Failed to delete key "${key}" from "${this.#connectionString}"`, e)
    );
  }

  async get(key: string): Promise<Maybe<string>> {
    return tryMaybeAsync(
      async () => {
        if (!this.isConnected()) {
          this.connect();
        }

        const buffer = await this.#client?.get(key);
        const value = buffer?.value.toString("utf8");
        return value ?? null;
      },
      (e) =>
        console.warn(`Failed to get key "${key}" from "${this.#connectionString}"`, e)
    );
  }

  isConnected(): boolean {
    return !!this.#client;
  }

  async set(key: string, value: string): Promise<Maybe<boolean>> {
    return tryMaybeAsync(
      async () => {
        if (!this.isConnected()) {
          this.connect();
        }

        const result = await this.#client?.set(key, value, {});
        return result ?? null;
      },
      (e) =>
        console.warn(`Failed to set key "${key}" from "${this.#connectionString}"`, e)
    );
  }
}

export { MemcacheClient as Client };

export const getMemcacheClient = (str: string): MemcacheClient => {
  return new MemcacheClient(str);
};
