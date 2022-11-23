import NavBar from "./navbar.component";
interface IProps {
  children: React.ReactNode;
}
export const DashboardLayout = ({ children }: IProps) => {
  return <NavBar>{children}</NavBar>;
};
