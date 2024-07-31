import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import LottieSplash from "../assets/lottie/splash.json";
import useViewportHeight from "../hooks/useViewportHeight";

interface SplashScreenProps {
  setShowSplash: React.Dispatch<React.SetStateAction<boolean>>;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ setShowSplash }) => {
  const navigate = useNavigate();
  const vh = useViewportHeight();

  useEffect(() => {
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [vh]);

  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem("hasSeenSplash", "true");
      setShowSplash(false);
      navigate("/onboarding");
    }, 1850);
    return () => clearTimeout(timer);
  }, [navigate, setShowSplash]);

  return (
    <div className="flex-center full-height bg-black pb-20">
      <Lottie animationData={LottieSplash} className="w-[200px] h-[200px]" />
    </div>
  );
};

export default SplashScreen;
