import ReactMarkdown from "react-markdown";

export default function TermsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Terms of Use</h1>
      <p className="text-gray-700 leading-relaxed">
        These terms govern your use of Dcommando Security’s services. By
        accessing or using our platform, you agree to be bound by these terms.
      </p>
      <div>
        <ReactMarkdown>
          {`
          
# **Terms of Use**



*Last updated: July 15, 2025*

Welcome to **Dcommando Security Ltd.**. These Terms of Use ("Terms") govern your use of our website, services, and applications (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.

## 1. Acceptance of Terms

By accessing and using our Services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms, do not use the Services.

## 2. Description of Services

Dcommando Security offers a variety of security-related services including but not limited to:

* Cybersecurity consultancy
* Bodyguard and escort services
* Event bouncers and crowd control
* Trained security guards and ushers
* Vendor sourcing for security needs

## 3. Eligibility

You must be at least 18 years old to use our Services. By using the Services, you represent and warrant that you have the legal capacity to enter into these Terms.

## 4. User Conduct

You agree not to:

* Use the Services for unlawful purposes
* Violate any local, state, national or international law or regulation
* Interfere with or disrupt the Services or servers/networks

## 5. Payments

All service fees must be paid in advance unless stated otherwise. Payments are subject to our cancellation and refund policies, which are available upon request.

## 6. Intellectual Property

All content on the site, including text, graphics, logos, and service marks, are the property of Dcommando Security or its licensors and are protected by Nigerian and international copyright laws.

## 7. Limitation of Liability

To the maximum extent permitted by law, Dcommando Security shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from the use or inability to use the Services.

## 8. Governing Law

These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Where applicable, international law may supplement but not override Nigerian law.

## 9. Modifications

We reserve the right to update or modify these Terms at any time. Continued use of the Services after such changes constitutes acceptance of the updated Terms.

## 10. Contact Us

If you have any questions about these Terms, please contact us at:

* Email: [info@dcommandosecurity.com](mailto:info@dcommandosecurity.com)
* Phone: +234 703 822 3500

---
          
          `}
        </ReactMarkdown>
      </div>
    </div>
  );
}
