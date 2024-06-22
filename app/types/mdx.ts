import type readingTime from "reading-time";

export type ReadingTime = ReturnType<typeof readingTime>;

export interface MdxFrontMatter {
  title: string;
  published: string;
  tags: string[];
  draft?: boolean;
  description: string;
  image?: string;
  readingTime: ReadingTime;
  slug: string;
}
