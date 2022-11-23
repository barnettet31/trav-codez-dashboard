import { GetServerSidePropsContext, type NextPage } from "next";
import { signOut } from "next-auth/react";
import { ReactElement } from "react";
import { DashboardLayout } from "../components/dashboard-layout/dashboardLayout.component";
import { getServerAuthSession } from "../server/common/get-server-auth-session";
import { trpc } from "../utils/trpc";
import { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = ({}) => {
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
    <div>
      <p>My Adming page with this user: {user.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
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
