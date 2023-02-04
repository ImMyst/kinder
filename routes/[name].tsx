import { Handlers, PageProps } from "$fresh/server.ts";
import { Layout } from "../components/Layout.tsx";

type TUser = {
  login: string;
  name: string;
  avatar_url: string;
};

export const handler: Handlers<TUser | null> = {
  async GET(_, ctx) {
    const { name } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${name}`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: TUser = await resp.json();
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<TUser | null>) {
  return (
    <Layout>
      {!data ? (
        <h1>User Not Found</h1>
      ) : (
        <>
          <img src={data.avatar_url} width={64} height={64} />
          <h1>{data.name}</h1>
          <p>{data.login}</p>
        </>
      )}
    </Layout>
  );
}
