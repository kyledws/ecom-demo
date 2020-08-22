import test, { ExecutionContext } from "ava";

import * as Mock from "./memcache.mock";
import * as Memcache from "./memcache";
import * as Test from "./storyblok-cache";

test("cacheContentByFullSlug: no key", async (c: ExecutionContext) => {
  const repo = {};

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const either = await Test.cacheContentByFullSlug("mockFullSlug", {} as any, client);

  c.is(either.isRight(), true);
  c.is(either.extract(), true);
  c.is((repo as any).storyblok_full_slug_mockFullSlug, "{}");
});

test("cacheContentByFullSlug: key exists", async (c: ExecutionContext) => {
  const repo = { storyblok_full_slug_mockFullSlug: "[]" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  c.is(repo.storyblok_full_slug_mockFullSlug, "[]");

  const either = await Test.cacheContentByFullSlug("mockFullSlug", {} as any, client);

  c.is(either.isRight(), true);
  c.is(either.extract(), true);
  c.is((repo as any).storyblok_full_slug_mockFullSlug, "{}");
});

test("cacheContentById: no key", async (c: ExecutionContext) => {
  const repo = {};

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const either = await Test.cacheContentById(123, {} as any, client);

  c.is(either.isRight(), true);
  c.is(either.extract(), true);
  c.is((repo as any).storyblok_id_123, "{}");
});

test("cacheContentById: key exists", async (c: ExecutionContext) => {
  const repo = { storyblok_id_123: "[]" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  c.is(repo.storyblok_id_123, "[]");

  const either = await Test.cacheContentById(123, {} as any, client);

  c.is(either.isRight(), true);
  c.is(either.extract(), true);
  c.is(repo.storyblok_id_123, "{}");
});

test("getContentByFullSlug: no key", async (c: ExecutionContext) => {
  const repo = {};

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const either = await Test.getContentByFullSlug("mockFullSlug", client);

  c.is(either.isLeft(), true);
  c.deepEqual(either.extract(), {
    message: "Null result",
  });
});

test("getContentByFullSlug: key exists", async (c: ExecutionContext) => {
  const repo = { storyblok_full_slug_mockFullSlug: "{}" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const either = await Test.getContentByFullSlug("mockFullSlug", client);

  c.is(either.isRight(), true);
  c.deepEqual(either.extract(), {} as any);
});

test("getContentByFullSlug: malformed json", async (c: ExecutionContext) => {
  const repo = { storyblok_full_slug_mockFullSlug: "malformed" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const either = await Test.getContentByFullSlug("mockFullSlug", client);

  c.is(either.isLeft(), true);
  c.deepEqual(either.extract(), {
    innerError: new SyntaxError("Unexpected token m in JSON at position 0"),
    message: "Failed to parse content for storyblok_full_slug_mockFullSlug",
  });
});

test("getContentById: no key", async (c: ExecutionContext) => {
  const repo = {};

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const either = await Test.getContentById(123, client);

  c.is(either.isLeft(), true);
  c.deepEqual(either.extract(), {
    message: "Null result",
  });
});

test("getContentById: key exists", async (c: ExecutionContext) => {
  const repo = { storyblok_id_123: "{}" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const either = await Test.getContentById(123, client);

  c.is(either.isRight(), true);
  c.deepEqual(either.extract(), {} as any);
});

test("getContentById: malformed json", async (c: ExecutionContext) => {
  const repo = { storyblok_id_123: "malformed" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const either = await Test.getContentById(123, client);

  c.is(either.isLeft(), true);
  c.deepEqual(either.extract(), {
    innerError: new SyntaxError("Unexpected token m in JSON at position 0"),
    message: "Failed to parse content for storyblok_id_123",
  });
});

test("getKeyForFullSlug", (c: ExecutionContext) => {
  const expected = "storyblok_full_slug_mockFullSlug";
  const actual = Test.getKeyForFullSlug("mockFullSlug");
  c.is(actual, expected);
});

test("getKeyForId", (c: ExecutionContext) => {
  const expected = "storyblok_id_123";
  const actual = Test.getKeyForId(123);
  c.is(actual, expected);
});
