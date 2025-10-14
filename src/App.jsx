import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Services from "./pages/Services";
import "./App.css";
import MainNavagetion from "./components/MainNavagetion";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import ScrollToTop from "./components/ScrollToTop";
import BookDetails from "./pages/BookDetails";
import CaseStudyPage from "./pages/CaseStudyPage";
import ReachOut from "./pages/ReachOut";
import NewsLetter from "./pages/NewsLetter";
import AnimatedBackground from "./components/AnimatedBackground";
import NewsletterPlan from "./pages/NewsLetterPlan";
import PersonalBrand from "./pages/PersonalBrand";
import MaryWithTheVoice from "./pages/MaryWithTheVoice";
import PbpsCompletePurchaseForm from "./pages/PbpsCompletePurchaseForm";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import LimitlessCompleteSubscription from "./pages/LimitlessCompleteSubscription";

function App() {
  return (
    <div className="bg-[#171717] min-h-screen font-sans">
      <AnimatedBackground />
      {/* <AnimatedBlobs /> */}
      <div className="max-w-[100rem] relative z-20 mx-auto">
        <MainNavagetion />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/book/:title" element={<BookDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/xquisite" element={<CaseStudy />} />
          <Route path="/mary-with-the-voice" element={<MaryWithTheVoice />} />
          <Route path="/case-studies" element={<CaseStudyPage />} />
          <Route path="/reach-out" element={<ReachOut />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/newsletter/plan" element={<NewsletterPlan />} />
          <Route
            path="/personalbrandprofitsystem/complete-your-purchase"
            element={<PbpsCompletePurchaseForm />}
          />
          <Route
            path="/limitlesswithevansprecious/complete-your-subscription"
            element={<LimitlessCompleteSubscription />}
          />
          <Route
            path="/personalbrandprofitsystem"
            element={<PersonalBrand />}
          />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
