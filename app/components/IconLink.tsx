import Link from "next/link";
import { ReactNode } from "react";

const IconLink: React.FC<IconLinkType> = ({ href, children }) => {

  return (
    <Link
      href={href}
      target="_blank"
      className="font-medium text-4xl hover:text-cyan-200"
      rel="noopener noreferrer"
    >{children}</Link>
  );
}

export default IconLink;

interface IconLinkType {
    href: string;
    children: ReactNode;
}
