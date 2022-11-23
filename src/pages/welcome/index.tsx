import Link from "next/link";

export default function Welcome() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Hello welcome to my app!</h1>
      <p>This is where I will code my landing page </p>
      <Link href="/login">Take me to the login Page</Link>
    </main>
  );
}
