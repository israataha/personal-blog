export default function Hero() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-zinc-100 sm:text-5xl">
        {"Hi, I'm Israa"}
      </h1>
      <p className="mt-2 text-2xl text-gray-600 dark:text-gray-400">
        <span>Developer | Speaker | Writer </span>
      </p>
      <p className="mt-8 text-xl text-gray-600 dark:text-gray-400 text-wrap">
        {
          "Welcome to my corner of the internet, where I share my thoughts, insights and lessons learned \
         as I navigate the ever-evolving world of tech."
        }
      </p>
    </div>
  );
}
