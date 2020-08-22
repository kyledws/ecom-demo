type Repo = { [key: string]: string };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getMockMemJsClient = (repo: Repo) => {
  return class MockMemJsClient {
    repo: Repo;
    url: string;

    private constructor(url: string) {
      this.repo = repo;
      this.url = url;
    }

    static create(url: string): MockMemJsClient {
      return new MockMemJsClient(url);
    }

    delete(key: string): Promise<boolean> {
      if (key in this.repo) {
        delete this.repo[key];
        return Promise.resolve(true);
      } else {
        throw "Key does not exist, cannot delete";
      }
    }

    get(key: string): Promise<{ flags: Buffer; value: Buffer }> {
      if (key in this.repo) {
        return Promise.resolve({
          flags: Buffer.from(""),
          value: Buffer.from(this.repo[key]),
        });
      } else {
        throw "Key does not exist, cannot get";
      }
    }

    set(key: string, value: string): Promise<boolean> {
      this.repo[key] = value;
      return Promise.resolve(true);
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    quit(): void {}
  };
};
