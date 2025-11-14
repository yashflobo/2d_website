import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/sections/HeroSection'
import LearningCrisisSection from '../components/sections/LearningCrisisSection'
import SolutionSection from '../components/sections/SolutionSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import ParentsSection from '../components/sections/ParentsSection'
import SchoolsSection from '../components/sections/SchoolsSection'
import ResearchSection from '../components/sections/ResearchSection'
import SocialProofSection from '../components/sections/SocialProofSection'
import WaitlistSection from '../components/sections/WaitlistSection'
import FAQSection from '../components/sections/FAQSection'

const LandingPage = () => (
  <div className="min-h-screen bg-ink-950 text-ink-50">
    <Header />
    <main>
      <HeroSection />
      <LearningCrisisSection />
      <SolutionSection />
      <HowItWorksSection />
      <ParentsSection />
      <SchoolsSection />
      <ResearchSection />
      <SocialProofSection />
      <FAQSection />
      <WaitlistSection />
    </main>
    <Footer />
  </div>
)

export default LandingPage

