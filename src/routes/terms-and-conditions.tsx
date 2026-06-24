import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { SITE_URL } from "@/config/site";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Greencare Homes" },
      {
        name: "description",
        content:
          "The terms that govern your use of Greencare Homes’ website and home healthcare services in Bangladesh.",
      },
      { property: "og:title", content: "Terms & Conditions — Greencare Homes" },
      {
        property: "og:description",
        content:
          "The terms that govern your use of Greencare Homes’ website and home healthcare services.",
      },
      { rel: "canonical", href: `${SITE_URL}/terms-and-conditions` } as never,
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      variant="terms"
      eyebrow="Service Terms"
      title="Terms & Conditions"
      updatedLabel="Last updated"
      updatedDate="26 May 2026"
      intro="These terms describe the agreement between you and Greencare Homes when you use our website, book an appointment, or receive our home healthcare and residential services."
      sections={[
        {
          heading: "Acceptance of terms",
          body: "By accessing our website or requesting our services, you agree to be bound by these terms. If you do not agree, please do not use our website or services.",
        },
        {
          heading: "Our services",
          body: "Greencare Homes provides home nursing, caregiver support, physiotherapy, residential care, daycare, and respite care across Bangladesh. Service availability, scope, and pricing may vary by location and individual care needs.",
        },
        {
          heading: "Appointments and bookings",
          body: [
            "Appointments are confirmed only after our team reviews your request and contacts you. Time slots are subject to availability.",
            "You agree to provide accurate health, address, and contact information so we can deliver care safely.",
          ],
        },
        {
          heading: "Payments and refunds",
          body: "Service charges are communicated before care begins. Payments must be made as per the agreed schedule. Refunds, where applicable, follow our internal refund policy and are processed after review.",
        },
        {
          heading: "Cancellations",
          body: "You may cancel or reschedule appointments by informing us at least 24 hours in advance where possible. Repeated last-minute cancellations may affect future bookings.",
        },
        {
          heading: "Conduct and safety",
          body: "Patients, family members, and caregivers are expected to treat each other with respect. Any form of harassment, abuse, or unsafe behaviour may result in immediate termination of service.",
        },
        {
          heading: "Medical disclaimer",
          body: "Our services support — but do not replace — emergency medical care. In a medical emergency, please call your nearest hospital or emergency service immediately.",
        },
        {
          heading: "Limitation of liability",
          body: "To the maximum extent permitted by law, Greencare Homes shall not be liable for indirect, incidental, or consequential damages arising from use of our website or services, except where caused by our gross negligence.",
        },
        {
          heading: "Changes to these terms",
          body: "We may update these Terms & Conditions at any time. Continued use of our website or services after updates means you accept the revised terms.",
        },
        {
          heading: "Contact us",
          body: "For questions about these terms, email info@greencarehomesbd.com or call +880 1992-869025.",
        },
      ]}
      footer="These terms are governed by the laws of the People’s Republic of Bangladesh. Any disputes shall be resolved in the courts of Dhaka."
    />
  );
}
