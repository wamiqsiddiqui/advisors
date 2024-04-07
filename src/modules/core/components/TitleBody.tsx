type TitleBodyProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};
const TitleBody = ({ title, subtitle, children }: TitleBodyProps) => {
  return (
    <div className="flex flex-col px-6 pb-2">
      <p
        className={`text-5xl font-normal text-start ${
          subtitle ? "mb-2" : "mb-4"
        }`}
      >
        {title}
      </p>
      {subtitle && (
        <p className="text-base font-light text-start mb-4">{subtitle}</p>
      )}
      {children}
    </div>
  );
};

export default TitleBody;
