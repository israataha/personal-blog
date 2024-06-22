import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/hero";

export const meta: MetaFunction = () => {
  return [{ title: "Israa Taha" }];
};

export default function Index() {
  return (
    <div className="mt-10 text-center">
      <Hero />
    </div>
  );
}
