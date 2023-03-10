const style = {
  footer: `px-10 py-5 flex justify-center bg-[rgb(0,31,44)]`,
  footerText: `text-white text-sm`,
  boldText: `font-bold`,
};

const Footer = () => {
  return (
    <div className={style.footer}>
      <p className={style.footerText}>
        Made by <span className={style.boldText}>Jesse Akorah</span>
      </p>
    </div>
  );
};

export default Footer;
