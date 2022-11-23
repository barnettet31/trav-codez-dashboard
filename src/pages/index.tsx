import { GetServerSidePropsContext, type NextPage } from "next";
import { signIn, signOut } from "next-auth/react";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: user, isLoading } = trpc.user.me.useQuery();
  if (isLoading) return <div>Loading....</div>;
  if (user?.role !== "ADMIN")
    return (
      <div>
        <p>I don't know how to tell you this but you're not an admin</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );

  return (
    <main className="flex flex-col items-center">
      <h1>This is my landing page for my admin {user.name}</h1>
      <button onClick={() => signOut()}> You can sign out now</button>
    </main>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(ctx);
  if (!session) {
    return {
      redirect: {
        destination: "/welcome",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default Home;
