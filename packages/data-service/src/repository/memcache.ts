import { Client as MemJsClient } from "memjs";

import { TryResult, tryResultAsync } from "@package/utilities";

import { trace } from "local/utils/debug";

type ClientCreator = (url: string) => MemJsClient;

class Client {
  #client: MemJsClient | null;
  #connectionString: string;
  #creator: ClientCreator;

  constructor(uri: string, creator: ClientCreator) {
    this.#client = null;
    this.#connectionString = uri;
    this.#creator = creator;
  }

  close(): void {
    this.#client?.quit();
  }

  connect(): void {
    this.#client = this.#creator(this.#connectionString);
  }

  async delete(key: string): Promise<TryResult<boolean>> {
    return tryResultAsync(
      async () => {
        if (!this.isConnected()) {
          this.connect();
        }

        const result = await this.#client?.delete(key);
        return result ?? null;
      },
      (e: unknown) =>
        trace({
          innerError: e,
          message: `Failed to delete key "${key}" from "${this.#connectionString}"`,
        })
    );
  }

  async get(key: string): Promise<TryResult<string>> {
    return tryResultAsync(
      async () => {
        if (!this.isConnected()) {
          this.connect();
        }

        const buffer = await this.#client?.get(key);
        const value = buffer?.value.toString("utf8");
        return value ?? null;
      },
      (e: unknown) =>
        trace({
          innerError: e,
          message: `Failed to get key "${key}" from "${this.#connectionString}"`,
        })
    );
  }

  isConnected(): boolean {
    return !!this.#client;
  }

  async set(key: string, value: string): Promise<TryResult<boolean>> {
    return tryResultAsync(
      async () => {
        if (!this.isConnected()) {
          this.connect();
        }

        const result = await this.#client?.set(key, value, {});
        return result ?? null;
      },
      (e: unknown) =>
        trace({
          innerError: e,
          message: `Failed to set key "${key}" from "${this.#connectionString}"`,
        })
    );
  }
}

export type { Client };

export const getClient = (str: string, creator: ClientCreator): Client => {
  return new Client(str, creator);
};
