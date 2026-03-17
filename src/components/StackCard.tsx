import { IconType } from "react-icons";

interface Tech {
  name: string;
  Icon: IconType;
}

interface StackCardProps {
  title: string;
  summary: string;
  techList: Tech[];
}

export default function StackCard({
  title,
  summary,
  techList,
}: StackCardProps) {
  return (
    <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group">
      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 text-sm mb-6 leading-relaxed">{summary}</p>

      <div className="flex flex-wrap gap-5">
        {techList.map(({ name, Icon }) => (
          <div
            key={name}
            title={name}
            className="text-slate-400 hover:text-blue-500 transition-colors cursor-help"
          >
            <Icon size={32} />
          </div>
        ))}
      </div>
    </div>
  );
}
