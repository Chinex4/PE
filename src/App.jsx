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

function Legacy({ children }) {
  return (
    <div className="legacy-page bg-[#171717] text-[#F5E9DC] min-h-screen font-sans">
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<p className="frame">Loading…</p>}>
          <Routes>
            <Route path="/" element={<Platform page="home" />} />
            <Route
              path="/resources"
              element={
                <Legacy>
                  <Resources />
                </Legacy>
              }
            />
            <Route
              path="/book/:title"
              element={
                <Legacy>
                  <BookDetails />
                </Legacy>
              }
            />
            <Route
              path="/services"
              element={<Navigate to="/personal-branding" replace />}
            />
            <Route path="/about" element={<Platform page="about" />} />
            <Route path="/contact" element={<Platform page="contact" />} />
            <Route
              path="/xquisite"
              element={
                <Legacy>
                  <CaseStudy />
                </Legacy>
              }
            />
            <Route
              path="/mary-with-the-voice"
              element={
                <Legacy>
                  <MaryWithTheVoice />
                </Legacy>
              }
            />
            <Route
              path="/case-studies"
              element={
                <Legacy>
                  <CaseStudyPage />
                </Legacy>
              }
            />
            <Route
              path="/reach-out"
              element={<Navigate to="/contact" replace />}
            />
            <Route
              path="/newsletter"
              element={
                <Legacy>
                  <NewsLetter />
                </Legacy>
              }
            />
            <Route
              path="/newsletter/plan"
              element={
                <Legacy>
                  <NewsletterPlan />
                </Legacy>
              }
            />
            <Route
              path="/personalbrandprofitsystem/complete-your-purchase"
              element={
                <Legacy>
                  <PbpsCompletePurchaseForm />
                </Legacy>
              }
            />
            <Route
              path="/limitlesswithevansprecious/complete-your-subscription"
              element={
                <Legacy>
                  <LimitlessCompleteSubscription />
                </Legacy>
              }
            />
            <Route
              path="/personalbrandprofitsystem"
              element={
                <Legacy>
                  <PersonalBrand />
                </Legacy>
              }
            />
            <Route
              path="/coming-soon"
              element={
                <Legacy>
                  <ComingSoon />
                </Legacy>
              }
            />
            <Route
              path="*"
              element={
                <Legacy>
                  <NotFound />
                </Legacy>
              }
            />
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
