import React from "react";

export const metadata = {
  title: "Terms of Service | Tom Hamilton",
  description: "Understand the terms and conditions for using Tom Hamilton's website and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing or using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Use of the Site</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>You may use this website for lawful purposes only.</li>
        <li>You agree not to misuse the site or attempt to access it using a method other than the interface provided.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">All content on this website, including text, graphics, logos, and images, is the property of the site owner unless otherwise stated.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Disclaimers</h2>
      <p className="mb-4">This website is provided "as is" without warranties of any kind. We do not guarantee the accuracy or completeness of any information on the site.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Limitation of Liability</h2>
      <p className="mb-4">To the fullest extent permitted by law, we are not liable for any damages arising from your use of this website.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Changes to Terms</h2>
      <p className="mb-4">We may update these Terms of Service at any time. Changes will be posted on this page.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Contact</h2>
      <p>If you have any questions about these Terms of Service, please contact us at your email address.</p>
    </div>
  );
} 