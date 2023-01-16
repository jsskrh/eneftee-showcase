const style = {
  tech: `rounded-lg shadow-lg p-7 bg-white flex flex-col items-center justify-between w-52 h-52 mb-5 md:ml-5`,
  techIconContainer: `h-[128px] w-[128px]`,
  techIcon: `max-h-full max-w-full`,
  techTitle: `font-bold text-sm`,
};

const Technology = ({ tech }) => {
  return (
    <div className={style.tech}>
      <div className={style.techIconContainer}>
        <img src={tech.icon} alt={tech.title} className={style.techIcon} />
      </div>
      <span className={`${style.techTitle} ${tech.color}`}>{tech.title}</span>
    </div>
  );
};

export default Technology;
