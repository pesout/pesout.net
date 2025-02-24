import Link from "next/link";
import { ReactNode } from "react";

const ExtLink: React.FC<ExtLinkType> = ({ href, children }) => {

  return (
    <Link
      href={href}
      target="_blank"
      className="underline decoration-cyan-500 decoration-2 text-cyan-400 font-medium"
      rel="noopener noreferrer"
    >{children}</Link>
  );
}

export default ExtLink;

interface ExtLinkType {
    href: string;
    children: ReactNode;
}
