const style = {
  btnBlack: `flex items-center bg-black rounded-lg py-3 px-6 shadow-lg cursor-pointer w-full md:w-fit justify-center`,
  btnIcon: `w-5 h-5 object-contain`,
  btnTextContainer: `flex flex-col justify-start ml-4`,
  btnText: `text-white`,
  btnTextSm: `font-normal text-xs`,
  btnTextReg: `font-bold text-sm`,
};

const Button = ({ assetUrl, link }) => {
  return (
    <div className={style.btnBlack} onClick={() => window.open(link, "_blank")}>
      <img src={assetUrl} alt="expo icon" className={style.btnIcon} />
      <div className={style.btnTextContainer}>
        <p className={`${style.btnText} ${style.btnTextSm}`}>View it on</p>
        <p className={`${style.btnText} ${style.btnTextReg}`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
