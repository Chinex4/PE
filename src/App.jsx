import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const Resources = lazy(() => import("./pages/Resources"));
import "./App.css";
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
import ScrollToTop from "./components/ScrollToTop";
const BookDetails = lazy(() => import("./pages/BookDetails"));
const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));
const NewsLetter = lazy(() => import("./pages/NewsLetter"));
const NewsletterPlan = lazy(() => import("./pages/NewsLetterPlan"));
const PersonalBrand = lazy(() => import("./pages/PersonalBrand"));
const MaryWithTheVoice = lazy(() => import("./pages/MaryWithTheVoice"));
const PbpsCompletePurchaseForm = lazy(
  () => import("./pages/PbpsCompletePurchaseForm"),
);
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LimitlessCompleteSubscription = lazy(
  () => import("./pages/LimitlessCompleteSubscription"),
);

import { ideas } from "./editorial/content";
import Platform, {
  Header,
  Footer as EditorialFooter,
} from "./editorial/Platform";

function App() {
  return (
    <div>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
        <Suspense fallback={<p className="frame">Loading…</p>}>
          <Routes>
            <Route path="/" element={<Platform page="home" />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/book/:title" element={<BookDetails />} />
            <Route
              path="/services"
              element={<Navigate to="/personal-branding" replace />}
            />
            <Route path="/about" element={<Platform page="about" />} />
            <Route path="/contact" element={<Platform page="contact" />} />
            <Route path="/xquisite" element={<CaseStudy />} />
            <Route path="/mary-with-the-voice" element={<MaryWithTheVoice />} />
            <Route path="/case-studies" element={<CaseStudyPage />} />
            <Route
              path="/reach-out"
              element={<Navigate to="/contact" replace />}
            />
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
            <Route path="/coaching" element={<Platform page="coaching" />} />
            <Route
              path="/personal-branding"
              element={<Platform page="branding" />}
            />
            <Route path="/speaking" element={<Platform page="speaking" />} />
            <Route path="/privacy" element={<Platform page="privacy" />} />
            {ideas.length > 0 && (
              <Route path="/ideas" element={<Platform page="ideas" />} />
            )}
            <Route path="/booking" element={<Platform page="booking" />} />
          </Routes>
        </Suspense>
      </main>
      <EditorialFooter />
    </div>
  );
}

export default App;
