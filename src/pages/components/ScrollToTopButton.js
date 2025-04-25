import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // or any up arrow icon you prefer

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:right-[calc(50%-min(theme(maxWidth.screen-lg),1280px)/2+1rem)] lg:bottom-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none
                  w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center"
          aria-label="Back to top"
        >
          <FaArrowUp className="text-lg sm:text-xl" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
