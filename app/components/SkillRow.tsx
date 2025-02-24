import { ReactNode, useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SkillRow: React.FC<SkillRowType> = ({ skill, percentage, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center cursor-pointer group mb-1" onClick={() => setIsOpen(!isOpen)}>
        <span className="w-24 font-medium monospace">
          <KeyboardArrowDownIcon className={`-ms-1 -mt-1 ${isOpen && "rotate-180"}`} />
          {skill}
        </span>
        <span
          className="inline-block rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 group-hover:opacity-80 transition h-4"
          style={{ width: `calc(${percentage}% - 6rem)` }}
        ></span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-40 opacity-100 mt-1.5 mb-3 ms-0.5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-sm italic">{children}</div>
      </div>
    </>
  );
}

export default SkillRow;

interface SkillRowType {
    skill: string;
    percentage: number;
    children: ReactNode;
}
