import { Maybe } from "purify-ts";

import test, { ExecutionContext } from "ava";

import * as Mock from "./memcache.mock";
import * as Memcache from "./memcache";
import * as Test from "./storyblok-cache";

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

test("getContentByFullSlug: no key", async (c: ExecutionContext) => {
  const repo = {};

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const maybe = await Test.getContentByFullSlug("mockFullSlug", client);

  c.is(maybe.isNothing(), true);
});

test("getContentByFullSlug: key exists", async (c: ExecutionContext) => {
  const repo = { storyblok_full_slug_mockFullSlug: "{}" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const maybe = (await Test.getContentByFullSlug("mockFullSlug", client)) as Maybe<any>;

  c.deepEqual(maybe.extract(), {});
});

test("getContentByFullSlug: malformed json", async (c: ExecutionContext) => {
  const repo = { storyblok_full_slug_mockFullSlug: "malformed" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const maybe = (await Test.getContentByFullSlug("mockFullSlug", client)) as Maybe<any>;

  c.deepEqual(maybe.isNothing(), true);
});

test("getContentById: no key", async (c: ExecutionContext) => {
  const repo = {};

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const maybe = await Test.getContentById(123, client);

  c.is(maybe.isNothing(), true);
});

test("getContentById: key exists", async (c: ExecutionContext) => {
  const repo = { storyblok_id_123: "{}" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const maybe = (await Test.getContentById(123, client)) as Maybe<any>;

  c.deepEqual(maybe.extract(), {});
});

test("getContentById: malformed json", async (c: ExecutionContext) => {
  const repo = { storyblok_id_123: "malformed" };

  const mockMemJsClient = Mock.getMockMemJsClient(repo);
  const client = Memcache.getClient("", mockMemJsClient.create as any);

  const maybe = (await Test.getContentById(123, client)) as Maybe<any>;

  c.deepEqual(maybe.isNothing(), true);
});
