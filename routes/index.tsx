import { PageProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";
import { Card } from "../components/Card.tsx";
import { Title } from "../components/Title.tsx";
import Search from "../islands/Search.tsx";

export default function Home(props: PageProps) {
  return (
    <Layout>
      <Title />
      <div class="flex flex-col space-y-4">
        <Search />
        <Card
          createdAt="25 Jan 2011"
          imageUrl="https://randomuser.me/api/portraits/men/1.jpg"
          information={{
            followers: 10,
            repos: 54,
            following: 0,
          }}
          name="ImMyst"
          username="ImMyst"
          location="Lyon"
          twitter="immyst_"
          website="https://titou-galva.fr"
        />
      </div>
    </Layout>
  );
}
