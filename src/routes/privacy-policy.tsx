import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { SITE_URL } from "@/config/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Greencare Homes" },
      {
        name: "description",
        content:
          "How Greencare Homes collects, uses, and protects your personal and health information across our home healthcare services in Bangladesh.",
      },
      { property: "og:title", content: "Privacy Policy — Greencare Homes" },
      {
        property: "og:description",
        content:
          "How Greencare Homes collects, uses, and protects your personal and health information.",
      },
      { rel: "canonical", href: `${SITE_URL}/privacy-policy` } as never,
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      variant="privacy"
      eyebrow="Privacy & Trust"
      title="Privacy Policy"
      updatedLabel="Last updated"
      updatedDate="26 May 2026"
      intro="At Greencare Homes, your trust is the foundation of our care. This policy explains what information we collect, how we use it, and the steps we take to keep it private and secure."
      sections={[
        {
          heading: "Information we collect",
          body: [
            "When you contact us, book an appointment, or use our home healthcare services, we may collect your name, phone number, email, address, age, and basic medical or care-related details you choose to share.",
            "We may also collect technical information such as IP address, device type, and browser when you visit our website, used only to improve experience and security.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "To schedule visits, dispatch caregivers, and provide nursing, physiotherapy, residential, daycare, or respite care services.",
            "To communicate appointment confirmations, care updates, billing details, and answer your inquiries.",
            "To improve our services, train our team, and comply with applicable Bangladeshi laws and medical regulations.",
          ],
        },
        {
          heading: "Confidentiality of health information",
          body: "All medical and personal care information is treated as strictly confidential. Access is limited to authorised caregivers, nurses, and supervisors directly involved in your or your family member’s care.",
        },
        {
          heading: "Sharing of information",
          body: "We do not sell or rent your personal data. Information may only be shared with hospitals, physicians, or emergency services when necessary for your care, or when required by law.",
        },
        {
          heading: "Data security",
          body: "We use reasonable administrative, physical, and digital safeguards to protect your information from unauthorised access, alteration, or disclosure.",
        },
        {
          heading: "Your rights",
          body: "You may request access to, correction of, or deletion of your personal information by contacting us. We will respond within a reasonable time, subject to legal and operational requirements.",
        },
        {
          heading: "Contact us",
          body: "For any privacy-related question, email info@greencarehomesbd.com or call +880 1992-869025.",
        },
      ]}
      footer="By using our website and services, you agree to the terms of this Privacy Policy. We may update this policy from time to time, and any changes will be posted on this page."
    />
  );
}
