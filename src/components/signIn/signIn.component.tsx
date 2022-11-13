import { signIn } from "next-auth/react";
import { Logo } from "../logo/logo.component";
export const SignIn: React.FC = () => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <Logo />
      <div className="mt-4 w-4/5 max-w-md rounded-md bg-semi-dark-blue py-4">
        <div className="flex flex-col items-center  gap-4">
          <h1 className="text-left text-xl text-accent-blue">Welcome</h1>
          <button
            onClick={() => signIn()}
            className="rounded-md border-2 border-zinc-800 bg-accent-blue p-2 hover:bg-accent-blue/75  focus:outline-none"
          >
            Sign In
          </button>
        </div>
      </div>
    </main>
  );
};
