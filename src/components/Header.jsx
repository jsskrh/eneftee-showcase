import { useEffect, useState } from "react";

const style = {
  header: `flex justify-between items-center bg-[rgb(0,31,44)] max-w-[75rem] w-[calc(100%-2.5rem)] p-4 rounded-[100px] fixed left-[50%] -translate-x-1/2 top-3 duration-[.25s] transition-all ease-in-out opacity-100`,
  isHidden: `-translate-y-2/3 duration-[.25s] transition-all ease-in-out opacity-0`,
  titleText: `font-bold text-2xl text-[#fff] ml-5`,
  navbar: `hidden md:flex`,
  navItem: `font-bold uppercase text-[#ecedf8] text-xs mx-3`,
  button: `flex items-center bg-[#7666ff] text-white rounded-[100px] py-[6px] px-4 shadow-lg cursor-pointer justify-center uppercase text-sm font-bold hover:bg-[#5f4eef] hover:shadow-[0_0_1.625rem_0_#5f4eef]`,
};

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? true : false;
      if (
        direction !== isHidden &&
        (scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1)
      ) {
        setIsHidden(direction);
      }
      if (scrollY === 0) setIsHidden(true);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [isHidden]);

  return (
    <div className={`${style.header} ${isHidden && style.isHidden}`}>
      <div>
        <h1 className={style.titleText}>Eneftee</h1>
      </div>
      <div className={style.navbar}>
        <a href="#deployment">
          <span className={style.navItem}>Deployment</span>
        </a>
        <a href="#technologies">
          <span className={style.navItem}>Technologies</span>
        </a>
        <a href="#code">
          <span className={style.navItem}>Code</span>
        </a>
      </div>
      <div>
        <button className={style.button}>Try Now</button>
      </div>
    </div>
  );
};

export default Header;
