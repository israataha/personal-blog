import { LoaderFunction, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { MdxFrontMatter } from "~/types/mdx";
import { formatDate } from "~/utils/date";
import { getPosts } from "~/utils/mdx.server";

export const meta: MetaFunction = () => {
  return [{ title: "Blog | Israa Taha" }];
};

export const loader: LoaderFunction = async () => {
  let posts: MdxFrontMatter[] = [];
  try {
    posts = await getPosts();
  } catch (e) {
    console.error(e);
  }
  return { posts };
};

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <div className="p-10">
      <ul className="space-y-8">
        {posts.map((post: MdxFrontMatter) => (
          <li key={post.slug}>
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <dl>
                <dt className="sr-only">Published On</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={post.published}>{formatDate(post.published)}</time>
                </dd>
              </dl>
              <div className="space-y-3 xl:col-span-3">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link to={`/blog/${post.slug}`} className="text-gray-900 dark:text-gray-100">
                      <span>{post.title}</span>
                    </Link>
                  </h3>
                  <div className="flex flex-wrap">
                    {post.tags?.map((tag) => (
                      <div key={tag} className="mr-3 text-sm font-medium uppercase hover:text-primary-600">
                        <span>{tag.split(" ").join("-")}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">{post.description}</div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
