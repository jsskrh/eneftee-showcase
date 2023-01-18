import assets from "../assets";
import Button from "./Button";

const style = {
  screenHeight: `min-h-screen flex items-stretch`,
  sectionInner: `flex flex-col justify-between md:flex-row py-12 md:py-28 mx-5 sm:mx-10 md:mx-20`,
  imgContainer: `md:order-last md:flex-1 mb-5`,
  imgContainerReverse: `order-last md:order-1 mt-10`,
  sectionImage: `w-full h-full minmd:w-11/12 minmd:h-11/12 object-contain`,
  sectionContent: `flex flex-col items-center md:items-start md:w-[45%] md:max-w-[30rem]`,
  reverseContent: `md:order-last md:justify-center`,
  titleText: `text-3xl sm:text-4xl font-bold text-center md:text-start`,
  descriptionText: `mt-5 mb-5 md:mb-10 text-center text-base sm:text-lg md:text-start`,
  reverseText: `md:text-end md:self-end`,
  deviceText: `my-5 text-sm sm:text-base`,
};

const SectionWrapper = ({
  name,
  title,
  description,
  showBtn,
  mockupImg,
  reverse,
}) => {
  return (
    <div className={`${!reverse && style.screenHeight}`} id={name}>
      <div className={style.sectionInner}>
        <div
          className={`${style.imgContainer} ${
            reverse && style.imgContainerReverse
          }`}
        >
          <img
            src={mockupImg}
            alt="mockup"
            className={`${style.sectionImage}`}
          />
        </div>

        <div
          className={`${style.sectionContent} ${
            reverse && style.reverseContent
          }`}
        >
          <h2 className={`${style.titleText} ${reverse && style.reverseText}`}>
            {title}
          </h2>
          <p
            className={`${style.descriptionText} ${
              reverse && style.reverseText
            }`}
          >
            {description}
          </p>
          {showBtn && (
            <>
              <Button
                assetUrl={assets.expo}
                link="https://expo.dev/@jsskrh/eneftee-mobile-app?serviceType=classic&distribution=expo-go"
              />
              <p className={style.deviceText}>
                Available for both iOS and Android.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
