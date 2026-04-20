import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="text-content">
            <h2>
              Customer Attrion Prediction
            </h2>
            <p className="text-white-50 md:text-xl"></p>
          </div>

          <div className="image-wrapper relative group overflow-hidden">
            <img 
              src="/images/Cust_.png" 
              alt="Ryde App Interface"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
            />

            {/* GitHub Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a 
                href="https://github.com/NithisshKrishna/Customer-Attrition-Prediction" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-200"
              >
                View Project on GitHub
              </a>
            </div>
          </div>
            <div className="text-content">
              <h2>
                Professional Management Services Systems - ISSI
              </h2>
              <p className="text-white-50 md:text-xl"></p>
            </div>

            <div className="image-wrapper relative group overflow-hidden">
              <img 
                src="/images/ISSI_.png" 
                alt="Ryde App Interface"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />

              {/* GitHub Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href="https://github.com/yourusername/issi-project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-gray-200"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
          

          

          <div className="project-list-wrapper overflow-hidden">
            <div className="project px-2 sm:px-0" ref={libraryRef}>
                <div className="image-wrapper bg-[#FFEFDB] relative group overflow-hidden rounded-lg">
                  
                  <img
                    src="/images/ordinal_thumbnail.png"
                    alt="Ordinal - A Mental Wellness App"
                    className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center 
                                  opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
                                  transition-opacity duration-300">
                    
                    <a 
                      href="https://github.com/NithisshKrishna/Ordinal-" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-black px-4 py-2 sm:px-6 sm:py-2.5 
                                text-sm sm:text-base rounded-full font-medium 
                                transform sm:translate-y-4 sm:group-hover:translate-y-0 
                                transition-transform duration-300 hover:bg-gray-200"
                    >
                      View Project on GitHub
                    </a>
                  </div>
                </div>

                <h2>
                  Ordinal - A Mental Wellness App
                </h2>
              </div>

              <div className="project px-2 sm:px-0" ref={libraryRef}>
                <div className="image-wrapper bg-[#FFE7EB] relative group overflow-hidden rounded-lg">
                  
                  <img
                    src="images/Bookstore_analytics.png"
                    alt="Ordinal - A Mental Wellness App"
                    className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center 
                                  opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
                                  transition-opacity duration-300">
                    
                    <a 
                      href="https://github.com/NithisshKrishna/-Bookstore-Analytics-case" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-black px-4 py-2 sm:px-6 sm:py-2.5 
                                text-sm sm:text-base rounded-full font-medium 
                                transform sm:translate-y-4 sm:group-hover:translate-y-0 
                                transition-transform duration-300 hover:bg-gray-200"
                    >
                      View Project on GitHub
                    </a>
                  </div>
                </div>

                <h2>
                  Bookstore Analytics - Tableau
                </h2>
              </div>


            
            <div className="project px-2 sm:px-0" ref={libraryRef}>
                <div className="image-wrapper bg-[#FFEFDB] relative group overflow-hidden rounded-lg">
                  
                  <img
                    src="images/Mush_.png"
                    alt="Ordinal - A Mental Wellness App"
                    className="w-full h-full object-cover transition-transform duration-500 sm:group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center 
                                  opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
                                  transition-opacity duration-300">
                    
                    <a 
                      href="https://github.com/NithisshKrishna/Mush_Project" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-black px-4 py-2 sm:px-6 sm:py-2.5 
                                text-sm sm:text-base rounded-full font-medium 
                                transform sm:translate-y-4 sm:group-hover:translate-y-0 
                                transition-transform duration-300 hover:bg-gray-200"
                    >
                      View Project on GitHub
                    </a>
                  </div>
                </div>

                <h2>
                  Mushroom Classification
                </h2>
              </div>



            

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
