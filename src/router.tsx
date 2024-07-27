import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import VoiceRequest from "./pages/VoiceRequest";
import Mypage from "./pages/Mypage";
import HeartListPage from "./pages/HeartListPage";
import KeyboardRequest from "./pages/KeyboardRequest";
import KeywordListPage from "./pages/KeywordListPage";
import MicTest from "./test/MicTest";
import LottieTest from "./test/LottieTest";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/voice" element={<VoiceRequest />} />
      <Route path="/keyboard" element={<KeyboardRequest />} />
      <Route path="/keyword" element={<KeywordListPage />} />
      <Route path="/heartlist" element={<HeartListPage />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/speech" element={<MicTest />} />
      <Route path="/lottie" element={<LottieTest />} />
    </Routes>
  );
};

export default Router;
