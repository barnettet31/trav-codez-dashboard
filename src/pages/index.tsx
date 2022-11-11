import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

import { trpc } from "../utils/trpc";
const Projects = () => {
  const { data: projects, isLoading } = trpc.projects.getAll.useQuery();
  if (isLoading) return <div>Loading your messages...</div>;
  return (
    <div className="flex flex-col gap-4">
      {projects?.map((project, index) => {
        return (
          <div key={index}>
            <p>{project.name}</p>
            <p>{project.description}</p>
          </div>
        );
      })}
    </div>
  );
};

const Home: NextPage = () => {
  const { status, data: session } = useSession();
  if (status === "loading") {
    return (
      <main className="flex flex-col items-center pt-4">
        <h1>Loading...</h1>
      </main>
    );
  }
  const ProjectForm = () => {
    const [description, setDescription] = useState("");
    const utils = trpc.useContext();
    const postProject = trpc.projects.postProject.useMutation({
      onMutate: () => {
        utils.projects.getAll.cancel();
        const optimisticUpdate = utils.projects.getAll.getData();
        if (optimisticUpdate) {
          utils.projects.getAll.setData(optimisticUpdate);
        }
      },
      onSettled: () => {
        utils.projects.getAll.invalidate();
      },
    });
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          postProject.mutate({
            name: session?.user?.name as string,
            description,
          });
          setDescription("");
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={description}
          placeholder="your description here"
          minLength={2}
          maxLength={200}
          onChange={(event) => setDescription(event.target.value)}
          className="rounded-md border-2 border-zinc-800 px-4 py-2 text-black focus:outline-none"
        ></input>
        <button
          type="submit"
          className="rounded-md border-2 border-zinc-800 p-2 focus:outline-none"
        >
          Submit
        </button>
      </form>
    );
  };
  return (
    <>
      <main className="flex flex-col items-center">
        <h1 className="pt4 text-3xl">Projects</h1>
        <p>This is me proving my projects are mapped out.</p>
        {session ? (
          <>
            <h1>{session.user?.name}</h1>
            <button onClick={() => signOut()}>Sign Out</button>
            <div className="pt-6">
              <ProjectForm />
            </div>
          </>
        ) : (
          <>
            <h1>Hello Next</h1>
            <button onClick={() => signIn()}>Sign In</button>
          </>
        )}
        <Projects />
      </main>
    </>
  );
};

export default Home;
