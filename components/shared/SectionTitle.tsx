type SectionTitleProps = {
  heading: string;
  title: string;
  description: string;
};

const SectionTitle = ({heading, title, description}: SectionTitleProps) => {
  return (
    <div className="flex flex-col justify-center gap-y-5 text-center mb-[75px]">
      <h6 className="text-primary text-xl font-bold">{heading}</h6>
      <h3 className="text-black font-bold text-5xl">{title}</h3>
      <p className="text-[#737373] px-4 md:px-10 lg:px-60">{description}</p>
    </div>
  );
};

export default SectionTitle;
