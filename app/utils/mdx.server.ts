import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { MdxFrontMatter } from "~/types/mdx";

const root = process.cwd();
const blogPath = path.join(root, "content", "blog");

export async function getPost(slug: string) {
  const source = fs.readFileSync(path.join(blogPath, slug + ".mdx"), "utf-8");

  try {
    const { code, frontmatter } = await bundleMDX({
      source,
      mdxOptions(options) {
        options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
        options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug, rehypeAutolinkHeadings];

        return options;
      },
    });

    return {
      code,
      frontmatter: {
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
        readingTime: readingTime(code),
        slug: slug,
        ...frontmatter,
      },
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function getPosts() {
  try {
    const postsPath = await fs.readdirSync(blogPath, {
      withFileTypes: true,
    });

    const posts: MdxFrontMatter[] = [];
    postsPath.forEach(async (dirent) => {
      const file = await fs.readFileSync(path.join(blogPath, dirent.name));
      const frontmatter = matter(file.toString());
      const data = frontmatter.data as MdxFrontMatter;
      data.readingTime = readingTime(frontmatter.content);
      if (data.draft !== true) {
        posts.push({
          ...data,
          slug: dirent.name.replace(/\.mdx/, ""),
        });
      }
    });
    return posts;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
