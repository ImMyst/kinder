import { ComponentChildren } from "preact";
import { Head } from "https://deno.land/x/fresh@1.0.0/runtime.ts";

export type Props = {
  children: ComponentChildren;
  title?: string;
  name?: string;
  description?: string;
};

export const Layout = ({ children, ...customMeta }: Props) => {
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="bg-primary text-text font-sans"
      >
        <Seo {...customMeta} />
        <div class="p-12 mx-auto max-w-screen-md">{children}</div>
      </div>
    </>
  );
};

const Seo = ({ ...customMeta }) => {
  const meta = {
    title: "Kinder - Github Profile Finder",
    description:
      "Kinder, a Github Profile Finder built with Fresh, Preact and Tailwind",
    type: "website",
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/main.css" />
    </Head>
  );
};
