import test, { ExecutionContext } from "ava";

import * as Mock from "./memcache.mock";
import * as Test from "./memcache";

test("MemcacheClient delete: no key", async (c: ExecutionContext) => {
  const repo = {};

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  const maybe = await client.delete("key");

  c.is(maybe.isNothing(), true);
});

test("MemcacheClient delete: key exists", async (c: ExecutionContext) => {
  const repo = { key: "mockDelete" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  c.is(repo.key, "mockDelete");

  const maybe = await client.delete("key");

  c.is(maybe.isJust(), true);
  c.is(maybe.unsafeCoerce(), true);
  c.is(repo.key, undefined);
});

test("MemcacheClient get: no key", async (c: ExecutionContext) => {
  const repo = {};

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  const maybe = await client.get("key");

  c.is(maybe.isNothing(), true);
});

test("MemcacheClient get: key exists", async (c: ExecutionContext) => {
  const repo = { key: "mockGet" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  const maybe = await client.get("key");

  c.is(maybe.isJust(), true);
  c.is(maybe.unsafeCoerce(), "mockGet");
});

test("MemcacheClient set: no key", async (c: ExecutionContext) => {
  const repo = {} as any;

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  c.is(repo["key"], undefined);

  const maybe = await client.set("key", "mockSet");

  c.is(maybe.isJust(), true);
  c.is(maybe.unsafeCoerce(), true);
  c.is(repo["key"], "mockSet");
});

test("MemcacheClient set: key exists", async (c: ExecutionContext) => {
  const repo = { key: "mockSet1" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Test.getClient("", mockMemJsClient.create as any);

  c.is(repo.key, "mockSet1");

  const maybe = await client.set("key", "mockSet2");

  c.is(maybe.isJust(), true);
  c.is(maybe.unsafeCoerce(), true);
  c.is(repo.key, "mockSet2");
});
