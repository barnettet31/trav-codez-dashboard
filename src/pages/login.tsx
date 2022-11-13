import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../utils/trpc";

export default function Login() {
  const router = useRouter();
  const { data, isLoading } = trpc.auth.getSession.useQuery();
  if (data) {
    router.push("/");
    return (
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-accent-blue">Redirecting...</h1>
      </main>
    );
  }
  if (isLoading)
    return (
      <main className="flex h-screen w-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-accent-blue">Loading...</h1>
      </main>
    );
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Hello welcome to my app!</h1>
      <p>Feel free to sign in </p>
      <button onClick={() => signIn()}>Sign In</button>
    </main>
  );
}
