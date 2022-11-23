import { Head } from "next/document";
import { ReactElement } from "react";
import { DashboardLayout } from "../../components/dashboard-layout/dashboardLayout.component";
import { NextPageWithLayout } from "../_app";

const ProjectsPage: NextPageWithLayout = ({}) => {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>This will be my projects page</h1>
      <p>This is where I will code my projects page </p>
    </main>
  );
};
ProjectsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ProjectsPage;
