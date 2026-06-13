import { ArrowLeft } from 'lucide-react'
import { MegaFooter } from '../../layout/MegaFooter'

export const TermsOfServicePage = () => (
  <div id="terms" className="min-h-full flex flex-col bg-white text-[#2E2017] animate-[fadeIn_0.4s_ease-out]">

    <div className="max-w-[90rem] mx-auto px-6 relative flex items-start justify-center w-full border-t border-[#F6EEE5] xl:border-t-0">
      <div className="hidden xl:block absolute left-6 2xl:left-12 top-0 bottom-0 w-56">
        {/* <FloatingSidebar navigate={navigate} activePage="terms" /> */}
      </div>

      <main className="w-full max-w-3xl pt-12 pb-32 z-10 flex-1">
        <button
        //   onClick={() => { navigate('landing'); setTimeout(() => document.body.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }}
          className="flex items-center gap-2 text-[#A08878] hover:text-[#C9523A] transition-colors mb-10 font-medium w-fit"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-[#2E2017]">Terms of Service</h1>
        <p className="text-[#A08878] mb-12">Last updated: May 22, 2026</p>

        <div className="prose prose-lg prose-p:text-[#2E2017] prose-h3:text-[#2E2017] prose-h3:font-serif prose-h3:text-2xl prose-strong:text-[#C9523A] max-w-none">
          <p>Welcome to Re.Focus. By accessing our website and using our timer application, you agree to be bound by these terms.</p>

          <h3>1. Acceptance of Terms</h3>
          <p>If you disagree with any part of these terms, you may not access or use the service. We reserve the right to update these terms at any time.</p>

          <h3>2. Use of Service</h3>
          <p>Re.Focus is provided for your personal productivity use. You agree not to misuse the service, attempt to access it using a method other than the interface and the instructions that we provide, or help anyone else do so.</p>

          <h3>3. "As Is" Service</h3>
          <p>We strive to provide a reliable tool for deep work, but Re.Focus is provided "as is" and "as available." We don't make any specific promises about the service, its specific functions, its reliability, or its ability to meet your exact needs.</p>

          <h3>4. Account Termination</h3>
          <p>We reserve the right to suspend or terminate your account at any time, with or without cause, and with or without notice, if we believe you have violated these terms or are abusing the platform.</p>
        </div>
      </main>
    </div>

    <MegaFooter />
  </div>
);

export default TermsOfServicePage