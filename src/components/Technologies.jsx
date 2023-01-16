import { assets } from "../assets";
import Technology from "./Technology";

const style = {
  sectionInner: `flex flex-col items-center py-12 md:py-20 mx-5 sm:mx-10 md:mx-20`,
  titleText: `text-3xl sm:text-4xl font-bold text-center md:text-start`,
  techContainer: `mt-10 md:flex`,
};

const technologies = [
  {
    title: "JavaScript",
    icon: assets.javascriptIcon,
    color: "text-black",
  },
  {
    title: "React Native",
    icon: assets.reactIcon,
    color: "text-[rgb(156,232,253)]",
  },
];

const Technologies = () => {
  return (
    <div id="technologies">
      <div className={style.sectionInner}>
        <div className={style.sectionHeader}>
          <h2 className={style.titleText}>Technologies</h2>
        </div>
        <div className={style.techContainer}>
          {technologies.map((technology) => (
            <Technology tech={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
