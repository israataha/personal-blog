import { LoaderFunction, MetaFunction, SerializeFrom } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { getPost } from "~/utils/mdx.server";
import { formatDate } from "~/utils/date";

export const meta: MetaFunction = ({ data }) => {
  const { post } = data as SerializeFrom<typeof loader>;
  const { frontmatter } = post;

  return [{ title: frontmatter.title }];
};

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug)
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });

  let post;
  try {
    post = await getPost(params.slug);
  } catch (e) {
    console.log(e);
    throw new Response(null, {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { post };
};

export default function Post() {
  const { post } = useLoaderData<typeof loader>();
  const { code, frontmatter } = post;

  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <article>
      <Link to="/blog">← Back to blog index</Link>
      <header className="pt-6 xl:py-16">
        <div className="space-y-4 text-center md:space-y-2">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl md:leading-[1.25]">
            {frontmatter.title}
          </h1>
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Published on</dt>
              <dd className="flex items-center justify-center text-base font-medium leading-6 text-gray-900 dark:text-gray-100">
                <time dateTime={formatDate(frontmatter.published)} className="flex items-center">
                  <span className="ml-1.5">{formatDate(frontmatter.published)}</span>
                </time>
                <span className="mx-2">-</span>
                <div className="flex items-center">
                  <span>{frontmatter.readingTime.text}</span>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </header>
      <div className="divide-y divide-gray-200 !border-t-0 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
        <div className="prose prose-base md:prose-lg max-w-none pb-8 pt-10 dark:prose-invert">
          <Component frontMatter={code} />
        </div>
      </div>
    </article>
  );
}
