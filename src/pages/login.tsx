import { signIn, useSession } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();
  console.log(session?.user);
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Hello welcome to my app!</h1>
      <p>Feel free to sign in </p>
      <button onClick={() => signIn()}>Sign In</button>
    </main>
  );
}
