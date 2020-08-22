import test, { ExecutionContext } from "ava";

import * as Mock from "./memcache.mock";
import * as Test from "./memcache";

test("MemcacheClient delete: no key", async (c: ExecutionContext) => {
  const repo = {};

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  const either = await client.delete("key");

  c.is(either.isLeft(), true);
  c.deepEqual(either.extract(), {
    innerError: "Key does not exist, cannot delete",
    message: 'Failed to delete key "key" from ""',
  });
});

test("MemcacheClient delete: key exists", async (c: ExecutionContext) => {
  const repo = { key: "mockDelete" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  c.is(repo.key, "mockDelete");

  const either = await client.delete("key");

  c.is(either.isRight(), true);
  c.is(either.extract(), true);
  c.is(repo.key, undefined);
});

test("MemcacheClient get: no key", async (c: ExecutionContext) => {
  const repo = {};

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  const either = await client.get("key");

  c.is(either.isLeft(), true);
  c.deepEqual(either.extract(), {
    innerError: "Key does not exist, cannot get",
    message: 'Failed to get key "key" from ""',
  });
});

test("MemcacheClient get: key exists", async (c: ExecutionContext) => {
  const repo = { key: "mockGet" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  const either = await client.get("key");

  c.is(either.isRight(), true);
  c.is(either.extract(), "mockGet");
});

test("MemcacheClient set: no key", async (c: ExecutionContext) => {
  const repo = {} as any;

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  c.is(repo["key"], undefined);

  const either = await client.set("key", "mockSet");

  c.is(either.isRight(), true);
  c.is(either.extract(), true);
  c.is(repo["key"], "mockSet");
});

test("MemcacheClient set: key exists", async (c: ExecutionContext) => {
  const repo = { key: "mockSet1" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  c.is(repo.key, "mockSet1");

  const either = await client.set("key", "mockSet2");

  c.is(either.isRight(), true);
  c.is(either.extract(), true);
  c.is(repo.key, "mockSet2");
});
