import Link from "next/link";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import { ReactNode } from "react";

const FileButton: React.FC<FileButtonType> = ({ href, type = "file", color = "cyan", gap, children }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      
      {color === "cyan"
        ? (
          <button
            className={"border-2 rounded-md border-cyan-500 bg-cyan-950 hover:bg-cyan-800 font-medium px-2.5 pb-0.5"}
            style={{ marginRight: gap ? ".5rem" : 0 }}
          >
            <Icon type={type} />
            {children}
          </button>
        )
        : (
          <button
            className={"border-2 rounded-md border-emerald-500 bg-emerald-950 hover:bg-emerald-800 font-medium px-2.5 pb-0.5"}
            style={{ marginRight: gap ? ".5rem" : 0 }}
          >
            <Icon type={type} />
            {children}
          </button>
        )
      }
    </Link>
  );
}

const Icon: React.FC<{ type: string }> = ({type}) => {
  return (
    <span className="text-lg me-1">
      {type === "web"
        ? <LanguageIcon fontSize="inherit" />
        : <></>
      }
      {type === "github"
        ? <GitHubIcon fontSize="inherit" className="-mt-px" />
        : <></>
      }
      {type === "file"
        ? <InsertDriveFileIcon fontSize="inherit" className="-mt-px" />
        : <></>
      }
    </span>
  )
};

export default FileButton;

interface FileButtonType {
    href: string;
    type?: "github" | "file" | "web";
    color?: "cyan" | "emerald";
    gap?: boolean;
    children: ReactNode;
}
