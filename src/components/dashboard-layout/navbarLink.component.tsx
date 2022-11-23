import Link from "next/link";
import { useRouter } from "next/router";
import { SVGProps } from "react";
import { classNames } from "../../utils/classNames";
interface NavBarLinkProps {
  item: {
    name: string;
    href: string;
    icon: (
      props: SVGProps<SVGSVGElement> & {
        title?: string | undefined;
        titleId?: string | undefined;
      }
    ) => JSX.Element;
  };
}
export const NavBarLink = ({ item }: NavBarLinkProps) => {
  const router = useRouter();
  return (
    <Link
      key={item.name}
      href={item.href}
      className={classNames(
        router.pathname === item.href
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
      )}
    >
      <item.icon
        className={classNames(
          router.pathname === item.href
            ? "text-gray-300"
            : "text-gray-400 group-hover:text-gray-300",
          "mr-3 h-6 w-6 flex-shrink-0"
        )}
        aria-hidden="true"
      />
      {item.name}
    </Link>
  );
};
