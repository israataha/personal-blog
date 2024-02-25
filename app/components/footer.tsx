import { metadata } from "~/data/site-metadata";
import Icon from "./icons";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
        {/* <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" /> */}
        <div className="mb-3 flex justify-center space-x-6">
          <Icon name="mail" href={`mailto:${metadata.email}`} />
          <Icon name="github" href={metadata.github} />
          <Icon name="linkedin" href={metadata.linkedin} />
          <Icon name="twitter" href={metadata.x} />
        </div>
        <p className="text-center text-base text-gray-400">
          Israa Taha • &copy; {new Date().getFullYear()} • All rights reserved
        </p>
      </div>
    </footer>
  );
}
