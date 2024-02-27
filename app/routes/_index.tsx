import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/hero";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div className="mt-10 text-center">
      <Hero />
    </div>
  );
}
