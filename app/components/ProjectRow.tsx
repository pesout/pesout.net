import { ReactNode, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProjectRow: React.FC<ProjectRowType> = ({ name, color = "cyan", children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center cursor-pointer group mb-1" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex font-medium leading-7">
          <KeyboardArrowDownIcon className={`-ms-1 mt-0.5 ${isOpen && "rotate-180"}`} />
          {color === "cyan"
            ? <h3 className="inline underline decoration-cyan-500 decoration-2 underline-offset-[.3rem]">{name}</h3>
            : <h3 className="inline underline decoration-emerald-500 decoration-2 underline-offset-[.3rem]">{name}</h3>         
          }
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-64 opacity-100 mt-1.5 mb-3 ms-0.5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-sm italic">{children}</div>
      </div>
    </>
  );
}

export default ProjectRow;

interface ProjectRowType {
    name: string | ReactNode;
    color?: "cyan" | "emerald";
    children: ReactNode;
}
