import { useState, useEffect } from "react";

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const bannerSrc = windowWidth < 600
    ? "/assets/banner-mobile.jpg"
    : windowWidth < 900
    ? "/assets/banner-tablette.jpg"
    : "/assets/banner.jpg";

  return (
    <div>
      <img
        src={bannerSrc}
        alt="banner"
        style={{ width: '100%', height: 'auto' }}
        className="img-fluid"
      />
    </div>
  );
};

export default Banner;
