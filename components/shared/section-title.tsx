interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <div className="w-2 h-6 bg-red-500 rounded-sm"></div>
        <span className="text-red-500 text-sm font-medium">{subtitle}</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pl-3">{title}</h2>
    </div>
  );
};

export default SectionTitle;
