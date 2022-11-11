import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
const Home: NextPage = () => {
  const { status, data: session, } = useSession();
  if (status === "loading") {
    return <main><h1>Loading...</h1></main>;
  }
  return (
    <>
      <main>{
        session?.user ? (<><h1>{session.user.name}</h1><button onClick={() => signOut()}>Sign Out</button></>) : <><h1>Hello Next</h1>
          <button onClick={() => signIn()}>Sign In With Discord</button></>
      }

      </main>
    </>
  );
};

export default Home;

