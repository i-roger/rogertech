'use client';

import { useSystemTelemetry } from '@/lib/hooks';
import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import ServicesSection from '@/components/services/servicesSection';
import AnalyticsSection from '@/components/analytics/analyticsSection';
import DiagnosticsComparison from '@/components/comparison/diagnosticsComparison';
import PortfolioSection from '@/components/portfolio/portfolioSection';
import ContactForm from '@/components/contact/contactForm';
import Footer from '@/components/footer/footer';

export default function App() {
  const { sysUptime, sysPing, uxValue, perfValue, diagnosticsLogs } = useSystemTelemetry();

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">

      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-emerald-900/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <Hero uxValue={uxValue} perfValue={perfValue} diagnosticsLogs={diagnosticsLogs} />
        <ServicesSection />
        <AnalyticsSection />
        <PortfolioSection />
        <DiagnosticsComparison />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
