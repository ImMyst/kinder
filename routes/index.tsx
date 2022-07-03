/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from '$fresh/server.ts'
import { Layout } from "../components/Layout.tsx";
import { Card } from "../components/Card.tsx";
import { Title } from "../components/Title.tsx";

export default function Home(props: PageProps) {
  const meta = {
    title: "Fresh Github Finder - Home",
    description: "Super description de fou",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "deno,fresh,github,finder,api,test,yes",
      },
    },
  };

  return (
      <Layout {...meta}>
        <Title />
        <Card
          createdAt='25 Jan 2011'
          imageUrl=''
          information={{
            followers: 10,
            repos: 54,
            following: 0
          }}
          name='ImMyst'
          username="ImMyst"
          location="Lyon"
        />
      </Layout>
  );
}
