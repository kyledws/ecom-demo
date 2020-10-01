import StoryblokClient, { Story, StoryblokComponent } from "storyblok-js-client";

import { TryResult, tryResultAsync } from "@package/utilities";

import { trace } from "local/utils/debug";
import { WebpageContent as GqlContent } from "local/schema/webpage-content";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SbContent<C extends string = any, T = unknown> = Omit<GqlContent, "body"> & {
  body: StoryblokComponent<C> & T;
};

export const getContentByFullSlug = (
  fullSlug: string,
  client: StoryblokClient
): Promise<TryResult<SbContent>> => {
  return tryResultAsync(
    async () => {
      const response = await client.getStory(fullSlug);
      return getContentFromStory(response);
    },
    (e: unknown) =>
      trace({
        innerError: e,
        message: `Failed to get story for fullSlug "${fullSlug}"`,
      })
  );
};

export const getContentById = (
  id: number,
  client: StoryblokClient
): Promise<TryResult<SbContent>> => {
  return tryResultAsync(
    async () => {
      const response = await client.getStory(id.toString());
      return getContentFromStory(response);
    },
    (e: unknown) =>
      trace({
        innerError: e,
        message: `Failed to get story for id "${id}"`,
      })
  );
};

export const getContentFromStory = (story: Story): SbContent => {
  const data = story.data.story;
  const content = {
    body: data.content,
    fullSlug: data.full_slug,
    id: data.id,
    type: data.content.component,
  };
  return content;
};
