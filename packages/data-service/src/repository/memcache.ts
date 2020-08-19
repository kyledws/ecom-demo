import { Maybe } from "purify-ts";
import { Client } from "memjs";

import { tryMaybeAsync } from "@package/utilities";

class MemcacheClient {
  #client: Client | null;
  #connectionString: string;

  constructor(uri: string) {
    this.#client = null;
    this.#connectionString = uri;
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
      (e: unknown) =>
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
      (e: unknown) =>
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
      (e: unknown) =>
        console.warn(`Failed to set key "${key}" in "${this.#connectionString}"`, e)
    );
  }
}

export { MemcacheClient as Client };

export const getMemcacheClient = (str: string): MemcacheClient => {
  return new MemcacheClient(str);
};