import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Introduction</h2>
      <p className="mb-4">This Privacy Policy explains how your information is collected, used, and protected when you use this website.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">2. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Information you provide via contact forms (such as your name, email, and message).</li>
        <li>Technical data such as IP address, browser type, and device information (collected automatically).</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">3. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To respond to your inquiries and provide services.</li>
        <li>To improve the website and user experience.</li>
        <li>To comply with legal obligations.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Cookies</h2>
      <p className="mb-4">This website may use cookies to enhance your experience. You can disable cookies in your browser settings.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Third-Party Services</h2>
      <p className="mb-4">We may use third-party services (such as analytics or email providers) that collect, monitor, and analyze information to improve our service. These third parties have their own privacy policies.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Data Security</h2>
      <p className="mb-4">We take reasonable measures to protect your information but cannot guarantee absolute security.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">7. Your Rights</h2>
      <p className="mb-4">You may request access to, correction of, or deletion of your personal information by contacting us.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Changes to This Policy</h2>
      <p className="mb-4">We may update this Privacy Policy from time to time. Changes will be posted on this page.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">9. Contact</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at your email address.</p>
    </div>
  );
} 