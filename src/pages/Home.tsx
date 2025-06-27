import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCarousel from '../components/Carousel';
import StepsCarousel from '../components/StepsCarousel';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full m-0 p-0 border-0 hide-scrollbar overflow-auto">
      <div className="relative flex-grow flex flex-col mt-0 min-h-screen w-full m-0 p-0 border-0 hide-scrollbar overflow-auto">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url("/back.jpg")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10" />

        <Navbar />

        {/* Content above background */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-8 py-12">
          <h1 className="moving-text text-3xl sm:text-5xl md:text-6xl font-bold font-playfair text-white italic mt-5 mb-4 max-w-4xl break-words leading-snug tracking-wider">
            Smart Beauty <br />
            Starts with Your <br />
            Facial Skin
          </h1>

          <p className="text-white text-base sm:text-lg font-light mb-6">
            Your AI-Powered Personal Skin Advisor
          </p>

          <div className="mt-4" onClick={() => navigate('/Page1')}>
            <span className="inline-flex items-center gap-2 px-5 py-2 border border-white rounded-md text-white text-base font-medium backdrop-blur-sm bg-white/10 cursor-pointer hover:bg-white/20 transition">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex-grow flex flex-col min-h-screen w-full p-4 sm:p-8 bg-gradient-to-b from-[#7a422c]/20 to-white">
        <h2 className="text-center text-xl sm:text-2xl font-bold font-playfair text-transparent bg-gradient-to-r from-[#7a422c] to-[#b07252] mb-6 tracking-wide bg-clip-text">
          DISCOVER YOUR TRUE BEAUTY
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 px-2 sm:px-12">
          {/* Gambar */}
          <img
            src="/discover.png"
            alt="Discover"
            className="w-48 sm:w-60 h-auto object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          />

          {/* Deskripsi */}
          <p className="text-black text-justify font-montserrat font-light text-base sm:text-lg max-w-xl leading-relaxed">
            Skinalyzer is a smart beauty platform that helps you understand your facial skin like never before. Using advanced AI technology, we analyze your facial condition and recommend the best skincare products just from a single photo.
          </p>
        </div>

        <h2 id="features" className="text-center text-xl sm:text-2xl font-bold font-playfair text-transparent bg-gradient-to-r from-[#7a422c] to-[#b07252] mt-12 mb-6 tracking-wide bg-clip-text">
          SKINALYZER DETECTS YOUR COMMON FACE CONCERNS
        </h2>

        <ImageCarousel />
        <StepsCarousel />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
