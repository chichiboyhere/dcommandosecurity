import ReactMarkdown from "react-markdown";

export default function PrivacyPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">Privacy Policy</h1>
      <p className="text-gray-700 leading-relaxed">
        Dcommando Security respects your privacy and is committed to protecting
        your personal data. This privacy policy explains how we handle your
        information.
      </p>
      <div className="mt-4">
        <ReactMarkdown>
          {`
# **Privacy Policy**

*Last updated: July 15, 2025*

**Dcommando Security Ltd.** is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and disclose information we obtain through our Services.

## 1. Information We Collect

* **Personal Information**: Name, email, phone number, service preferences, etc.
* **Technical Information**: IP address, browser type, device info.
* **Cookies**: We use cookies to improve user experience and for analytics.

## 2. How We Use Your Information

We use your information to:

* Provide and improve our services
* Communicate with you regarding your inquiries or orders
* Comply with legal obligations

## 3. Sharing of Information

We do not sell your personal data. We may share it with:

* Service providers assisting with operations
* Legal authorities if required by law

## 4. Data Security

We implement reasonable safeguards to protect your information. However, no electronic transmission is completely secure.

## 5. Your Rights

Under Nigerian law and applicable international privacy regulations (e.g., GDPR):

* You have the right to access, correct, or delete your data
* You may request restriction of processing
* You may opt out of marketing communications

## 6. Data Retention

We retain personal data only for as long as necessary for legitimate business purposes or as required by law.

## 7. International Transfers

If we transfer your data outside Nigeria, we will ensure appropriate safeguards are in place as required by applicable data protection laws.

## 8. Children’s Privacy

Our services are not intended for individuals under the age of 18. We do not knowingly collect data from minors.

## 9. Changes to this Policy

We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.

## 10. Contact Us

For questions about this policy or to exercise your privacy rights:

* Email: [info@dcommandosecurity.com](mailto:info@dcommandosecurity.com)
* Phone: +234 703 822 3500`}
        </ReactMarkdown>
      </div>
    </div>
  );
}
