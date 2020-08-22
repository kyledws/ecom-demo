import { Story, StoryData, StoryblokComponent } from "storyblok-js-client";
import test, { ExecutionContext } from "ava";

import { getContentFromStory, SbContent } from "./storyblok";

type SbData = StoryblokComponent<"mockComponent"> & SbSchema;

type SbSchema = {
  mockProperty: "mockData";
};

type Content = SbContent<"mockComponent", SbSchema>;

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
      } as StoryData<SbData>,
    },
  } as Story;

  const expected: Content = {
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
