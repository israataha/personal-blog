import { Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError } from "@remix-run/react";
import { ThemeProvider, useTheme } from "./utils/theme-provider";
import Header from "./components/header";
import Footer from "./components/footer";

import "./tailwind.css";

function App() {
  const [theme] = useTheme();
  return (
    <html lang="en" data-theme={theme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-black antialiased dark:bg-neutral-800 dark:text-white">
        <Header />
        <main className="mb-auto flex flex-col justify-center px-10 lg:px-20 sm:px-8">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <main>
      <h1>Unable to fetch list of blog posts. Please check back later</h1>
    </main>
  );
}
