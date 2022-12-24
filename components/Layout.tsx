import { ComponentChildren } from "preact";
import { Head } from "$fresh/runtime.ts";

export type Props = {
  children: ComponentChildren;
};

export const Layout = ({ children, ...customMeta }: Props) => {
  const meta = {
    title: "Kinder - Github Profile Finder",
    description:
      "Kinder, a Github Profile Finder built with Fresh, Preact and Tailwind",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/main.css" />
      </Head>
      <div
        style={{ minHeight: "100vh" }}
        className="bg-primary text-text font-sans"
      >
        <div class="p-12 mx-auto max-w-screen-md">{children}</div>
      </div>
    </>
  );
};
