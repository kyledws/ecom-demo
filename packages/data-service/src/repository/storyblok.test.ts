import { Story, StoryData, StoryblokComponent } from "storyblok-js-client";
import test, { ExecutionContext } from "ava";

import { getContentFromStory, SbContent } from "./storyblok";

type StoryContent = StoryblokComponent<string> & {
  mockProperty: "mockData";
};

test("getContentFromStory", async (c: ExecutionContext) => {
  const mockStory: Story = {
    headers: null,
    data: {
      story: {
        content: {
          _editable: "mockEditiable",
          _uid: "mockUid",
          component: "mockComponent",
          mockProperty: "mockData",
        },
        full_slug: "mockFullSlug",
        id: 1234,
      } as StoryData<StoryContent>,
    },
  } as Story;

  const expected: SbContent<StoryContent> = {
    body: {
      _editable: "mockEditiable",
      _uid: "mockUid",
      component: "mockComponent",
      mockProperty: "mockData",
    },
    fullSlug: "mockFullSlug",
    id: 1234,
    type: "mockComponent",
  };

  const actual = getContentFromStory(mockStory);
  c.deepEqual(actual, expected);
});
