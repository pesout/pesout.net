import Link from "next/link";
import { ReactNode } from "react";

const ExtLink: React.FC<ExtLinkType> = ({ href, color = "cyan", children }) => {

  return color === "cyan"
  ? (
    <Link
      href={href}
      target="_blank"
      className="underline decoration-cyan-400 text-cyan-300 font-medium"
      rel="noopener noreferrer"
    >{children}</Link>
  )
  : (
    <Link
      href={href}
      target="_blank"
      className="underline decoration-emerald-400 text-emerald-300 font-medium"
      rel="noopener noreferrer"
    >{children}</Link>
  );
}

export default ExtLink;

interface ExtLinkType {
    href: string;
    color?: "cyan" | "emerald";
    children: ReactNode;
}
