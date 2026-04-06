import SeasonalBanner from '@/components/SeasonalBanner'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import IdentityBlock from '@/components/IdentityBlock'
import MissionBlock from '@/components/MissionBlock'
import InclusifBlock from '@/components/InclusifBlock'
import LocationBlock from '@/components/LocationBlock'
import WhyTrustUs from '@/components/WhyTrustUs'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import Commitment from '@/components/Commitment'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import ComingSoon from '@/components/ComingSoon'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import CookieConsent from '@/components/CookieConsent'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <JsonLd />
      <SeasonalBanner />
      <Header />
      <main>
        <Hero />
        <IdentityBlock />
        <MissionBlock />
        <InclusifBlock />
        <LocationBlock />
        <WhyTrustUs />
        <Services />
        <HowItWorks />
        <Commitment />
        <Testimonials />
        <FAQ />
        <ComingSoon />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
      <WhatsAppButton />
    </>
  )
}
