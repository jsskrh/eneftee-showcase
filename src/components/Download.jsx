const style = {
  sectionInner: `flex justify-center py-12 md:py-20 mx-5 sm:mx-10 md:mx-20`,
  sectionContent: `flex flex-col items-center`,
  titleText: `text-3xl sm:text-4xl font-bold text-center md:text-start`,
  descriptionText: `mt-5 mb-5 md:mb-10 text-center text-base sm:text-lg md:text-start`,
  button: `flex items-center bg-[#7666ff] hover:bg-[#5f4eef] text-white rounded-lg py-3 px-6 shadow-lg cursor-pointer w-full md:w-fit justify-center`,
  imgContainer: `md:order-first`,
  sectionImage: `w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain`,
};

const Download = () => {
  return (
    <div id="code">
      <div className={style.sectionInner}>
        <div className={style.sectionContent}>
          <h2 className={style.titleText}>Download the Source Code</h2>
          <p className={style.descriptionText}>
            Get the full source code on Github
          </p>
          <button
            className={style.button}
            onClick={() =>
              window.open(
                "https://github.com/jsskrh/eneftee-mobile-app",
                "_blank"
              )
            }
          >
            Source Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Download;
