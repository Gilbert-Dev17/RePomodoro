import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { MegaFooter } from '../layout/MegaFooter'

const PrivacyPolicyPage = () => {
  return (
    <div id="privacy" className="min-h-full flex flex-col bg-white text-[#2E2017] animate-[fadeIn_0.4s_ease-out]">

    <div className="max-w-[90rem] mx-auto px-6 relative flex items-start justify-center w-full border-t border-[#F6EEE5] xl:border-t-0">
      <div className="hidden xl:block absolute left-6 2xl:left-12 top-0 bottom-0 w-56">
        {/* <FloatingSidebar navigate={navigate} activePage="privacy" /> */}
      </div>

      <main className="w-full max-w-3xl pt-12 pb-32 z-10 flex-1">
        <button
        //   onClick={() => { navigate('landing'); setTimeout(() => document.body.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }}
          className="flex items-center gap-2 text-[#A08878] hover:text-[#C9523A] transition-colors mb-10 font-medium w-fit"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-[#2E2017]">Privacy Policy</h1>
        <p className="text-[#A08878] mb-12">Last updated: May 22, 2026</p>

        <div className="prose prose-lg prose-p:text-[#2E2017] prose-h3:text-[#2E2017] prose-h3:font-serif prose-h3:text-2xl prose-strong:text-[#C9523A] max-w-none">
          <p>At Re.Focus, we believe your focus is your own business. We intentionally designed our application to collect as little data as possible while still providing a seamless, cross-device experience.</p>

          <h3>1. Data we collect</h3>
          <p>If you use Re.Focus without an account, all timer data is stored locally in your browser. We collect zero personal information.</p>
          <p>If you choose to create an account to sync your session history, we collect your email address and securely store your focus logs (timestamps, durations, and task names) to provide you with your history dashboard.</p>

          <h3>2. How we use your data</h3>
          <p>Your data is used strictly to provide the Re.Focus service. We do not sell, rent, or share your personal information or focus habits with any third parties, advertisers, or data brokers.</p>

          <h3>3. Analytics</h3>
          <p>We use privacy-friendly, anonymized analytics to understand general usage trends. These tools do not track individual users or use invasive tracking cookies to follow you across the web.</p>

          <h3>4. Your Rights</h3>
          <p>You have the right to request the export or deletion of your account and all associated data at any time. Simply contact us, and we will completely wipe your history from our servers.</p>
        </div>
      </main>
    </div>

    <MegaFooter  />
  </div>
  )
}

export default PrivacyPolicyPage