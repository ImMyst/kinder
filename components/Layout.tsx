/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { tw } from "@twind";
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
      <div style={{ minHeight: "100vh" }}>
        <Seo {...customMeta} />
        <div class={tw`p-12 mx-auto max-w-screen-md`}>{children}</div>
      </div>
    </>
  );
};

const Seo = ({ ...customMeta }) => {
  const meta = {
    title: "Fresh Github Finder",
    description: "Fresh test",
    type: "website",
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/main.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700 display=swap" rel="stylesheet" />
    </Head>
  );
};