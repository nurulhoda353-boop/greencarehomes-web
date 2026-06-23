import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import {
  ArrowRight,
  Phone,
  Home,
  Stethoscope,
  HeartPulse,
  Activity,
  Baby,
  Users,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  Leaf,
  Star,
  ChevronRight,
  ClipboardList,
  Award,
  type LucideIcon,
} from "lucide-react";

import svcResidenceImg from "@/assets/svc-residence.jpg?format=webp&quality=80&w=1400";
import svcNursingImg from "@/assets/svc-nursing.jpg?format=webp&quality=80&w=1400";
import svcCaregiverImg from "@/assets/svc-caregiver.jpg?format=webp&quality=80&w=1400";
import svcPhysioImg from "@/assets/svc-physio.jpg?format=webp&quality=80&w=1400";
import svcDaycareImg from "@/assets/svc-daycare.jpg?format=webp&quality=80&w=1400";
import svcRespiteImg from "@/assets/svc-respite.jpg?format=webp&quality=80&w=1400";
import { FaqSection } from "@/components/site/FaqSection";
import { SITE_URL } from "@/config/site";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};
const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-60px" },
  transition: { staggerChildren: 0.08 },
};
const childFadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

type PriceRate = { price: string; unit: string };
type PricingTier = {
  name: string;
  daily: PriceRate;
  monthly: PriceRate;
  summary: string;
  features: string[];
  highlight?: boolean;
  cta?: string;
};

type ServiceDetail = {
  slug: string;
  icon: LucideIcon;
  image: string;
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  highlights: { icon: LucideIcon; label: string; value: string }[];
  whoIsItFor: string[];
  whatsIncluded: { icon: LucideIcon; title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  pricing: PricingTier[];
  pricingNote: string;
  faqs: { q: string; a: string }[];
};

const FAQ_TITLES: Record<string, ReactNode> = {
  residence: (<>Living here, <span className="italic font-light text-brand">answered plainly.</span></>),
  nursing: (<>Nursing at home, <span className="italic font-light text-brand">without the guesswork.</span></>),
  caregiver: (<>Daily care, <span className="italic font-light text-brand">made simple.</span></>),
  physiotherapy: (<>Recovery questions, <span className="italic font-light text-brand">answered clearly.</span></>),
  daycare: (<>Daytime care, <span className="italic font-light text-brand">made stress-free.</span></>),
  respite: (<>Short-term cover, <span className="italic font-light text-brand">explained honestly.</span></>),
};

const services: Record<string, ServiceDetail> = {
  residence: {
    slug: "residence",
    icon: Home,
    image: svcResidenceImg,
    eyebrow: "Residential Assisted Living",
    title: "Green Living Residence",
    tagline: "A premium assisted-living home with 24/7 nursing & warmth.",
    intro:
      "A thoughtfully designed residence in Mohammadpur where seniors enjoy continuous clinical care, three nutritious meals, daily physiotherapy support, recreation and companionship — without losing the dignity, calm and rhythm of home life.",
    highlights: [
      { icon: Clock, label: "On-site", value: "24/7 nursing" },
      { icon: HeartPulse, label: "Rounds", value: "Daily clinical" },
      { icon: ShieldCheck, label: "Hygiene", value: "Premium protocols" },
      { icon: Users, label: "Care ratio", value: "1 nurse : 4 guests" },
    ],
    whoIsItFor: [
      "Seniors who live alone and need continuous, gentle supervision",
      "Post-surgery or post-stroke recovery requiring full-time nursing",
      "Families travelling abroad needing trusted residential care",
      "Patients with chronic conditions (diabetes, hypertension, dementia)",
    ],
    whatsIncluded: [
      { icon: Home, title: "Private or shared rooms", desc: "Clean, well-lit rooms with attached or shared washrooms, fans, daily housekeeping." },
      { icon: Stethoscope, title: "24-hour nursing team", desc: "Certified nurses on duty round the clock, with a supervising clinician on call." },
      { icon: HeartPulse, title: "Three nutritious meals", desc: "Doctor-approved menus, diabetic & low-salt options, evening snacks and tea." },
      { icon: Activity, title: "Physiotherapy on-site", desc: "Daily mobility, breathing and gentle strengthening sessions as needed." },
      { icon: Users, title: "Recreation & companionship", desc: "Group activities, prayer space, music, reading and family video calls." },
      { icon: ShieldCheck, title: "Safety & emergency response", desc: "Fall-safe layouts, emergency protocols, nearest-hospital transport plan." },
    ],
    process: [
      { step: "01", title: "Family visit", desc: "Walk through the residence with our care lead — see the rooms, kitchen, nursing station." },
      { step: "02", title: "Health assessment", desc: "Doctor-led review of medical history, medication, mobility and dietary needs." },
      { step: "03", title: "Personalised plan", desc: "A written care plan with itemised inclusions, room choice and monthly pricing." },
      { step: "04", title: "Move-in support", desc: "We help with the transition — paperwork, packing checklist, family orientation." },
    ],
    pricing: [
      {
        name: "Shared Room",
        daily: { price: "৳ 1,400", unit: "/ day" },
        monthly: { price: "৳ 35,000", unit: "/ month" },
        summary: "Comfortable shared room with full residence inclusions.",
        features: [
          "Shared room (2–3 guests)",
          "3 meals + 2 snacks daily",
          "24/7 nursing supervision",
          "Weekly physiotherapy",
          "Daily housekeeping",
          "Family visits welcomed",
        ],
      },
      {
        name: "Private Room",
        daily: { price: "৳ 2,000", unit: "/ day" },
        monthly: { price: "৳ 55,000", unit: "/ month" },
        summary: "Private room with priority care attention.",
        features: [
          "Private single room",
          "Attached washroom",
          "3 meals + 2 snacks daily",
          "24/7 nursing supervision",
          "Daily physiotherapy",
          "Dedicated family liaison",
          "Free monthly doctor visit",
        ],
        highlight: true,
        cta: "Reserve a Room",
      },
      {
        name: "Premium Suite",
        daily: { price: "৳ 2,900", unit: "/ day" },
        monthly: { price: "৳ 80,000", unit: "/ month" },
        summary: "Top-tier suite with concierge-level care.",
        features: [
          "Large private suite + sitting area",
          "All meals + custom menu",
          "Dedicated caregiver hours",
          "Daily physiotherapy + doctor rounds",
          "Priority hospital coordination",
          "Personal care concierge",
        ],
      },
    ],
    pricingNote:
      "All prices include lodging, meals, nursing, housekeeping and standard physiotherapy. Medication, lab tests, doctor consultations and specialist therapy billed separately at transparent rates.",
    faqs: [
      { q: "Can family visit anytime?", a: "Yes — visitors are warmly welcomed between 9 AM and 8 PM. Out-of-hours visits are accommodated on request, especially for outstation families." },
      { q: "What if my parent needs hospitalization?", a: "We coordinate transport to the nearest preferred hospital, send a nurse along when possible, and keep the room reserved during admission." },
      { q: "Is there a minimum stay?", a: "We recommend a minimum 1-month commitment for proper care continuity, but short-stay (respite) rates are available for 7–14 day stays." },
      { q: "Are meals and dietary needs customised?", a: "Absolutely. Our in-house cook follows doctor-approved menus and accommodates diabetic, low-salt, soft-diet and personal preferences at no extra cost." },
      { q: "How are doctors and specialists coordinated?", a: "A visiting physician reviews each resident monthly, and we arrange specialist consultations, lab tests and follow-ups on your behalf — transparently billed." },
    ],
  },
  nursing: {
    slug: "nursing",
    icon: Stethoscope,
    image: svcNursingImg,
    eyebrow: "Home & Clinical Nursing",
    title: "Gentle Nursing Care",
    tagline: "Certified nurses at home — for recovery, chronic care and confidence.",
    intro:
      "Trained, supervised nurses delivering post-hospital recovery, wound care, IV therapy, medication management and continuous monitoring — at your home, with the same standards you would expect from a quality hospital ward.",
    highlights: [
      { icon: ShieldCheck, label: "All nurses", value: "Govt. certified" },
      { icon: Clock, label: "Response", value: "12–24 hours" },
      { icon: HeartPulse, label: "Reports", value: "Daily vitals" },
      { icon: Users, label: "Backup", value: "Replacement assured" },
    ],
    whoIsItFor: [
      "Post-surgical patients discharged from hospital needing recovery care",
      "Stroke, cardiac and cancer patients requiring continuous monitoring",
      "Elderly with diabetes, hypertension and chronic medication routines",
      "Bedridden patients needing wound care, catheter care and turning",
    ],
    whatsIncluded: [
      { icon: Stethoscope, title: "Vitals & monitoring", desc: "BP, sugar, pulse, oxygen, temperature — recorded and shared with family daily." },
      { icon: HeartPulse, title: "Medication management", desc: "On-time medication, injections, IV fluids and dose tracking with a written log." },
      { icon: ShieldCheck, title: "Wound & post-op care", desc: "Sterile dressing, suture care, drain management, infection prevention." },
      { icon: Activity, title: "Tube & catheter care", desc: "NG tube feeding, Foley catheter care, tracheostomy care, oxygen support." },
      { icon: Users, title: "Family communication", desc: "Daily summary to a designated family member — WhatsApp updates or call." },
      { icon: Clock, title: "Shift flexibility", desc: "8h, 12h or 24h live-in shifts; same nurse continuity wherever possible." },
    ],
    process: [
      { step: "01", title: "Tele-assessment", desc: "Quick call with our nursing supervisor to understand the patient and home setup." },
      { step: "02", title: "Nurse matching", desc: "We assign a nurse trained in the specific condition (cardiac, surgical, geriatric, etc.)." },
      { step: "03", title: "On-site briefing", desc: "Supervisor visits with the nurse on day one, briefs the family and reviews medication." },
      { step: "04", title: "Ongoing supervision", desc: "Weekly supervisor checks, monthly clinical review, 24/7 helpline for the family." },
    ],
    pricing: [
      {
        name: "Visit Nurse",
        daily: { price: "৳ 600", unit: "/ visit" },
        monthly: { price: "৳ 16,000", unit: "/ month" },
        summary: "Single visit for injection, dressing, vitals check or short procedure.",
        features: [
          "1–2 hour home visit",
          "Vitals, injection, dressing or BP/sugar check",
          "Visit report shared with family",
          "Same-day slots in Dhaka",
        ],
      },
      {
        name: "12-Hour Shift",
        daily: { price: "৳ 1,800", unit: "/ day" },
        monthly: { price: "৳ 50,000", unit: "/ month" },
        summary: "Day or night shift — ideal for post-hospital recovery.",
        features: [
          "12 hours continuous nursing",
          "All medication & monitoring",
          "Wound care, catheter care, tube feeding",
          "Daily vitals report to family",
          "Supervisor on call",
        ],
        highlight: true,
        cta: "Book Nurse Now",
      },
      {
        name: "24-Hour Live-In",
        daily: { price: "৳ 3,200", unit: "/ day" },
        monthly: { price: "৳ 90,000", unit: "/ month" },
        summary: "Round-the-clock nursing — bedridden or critical care at home.",
        features: [
          "24/7 nurse at home (with breaks)",
          "Full clinical care + monitoring",
          "Family liaison & weekly supervisor visit",
          "Free monthly clinical review",
          "Same nurse continuity",
        ],
      },
    ],
    pricingNote:
      "Specialised nursing (ICU-trained, ventilator, dialysis support) priced separately. Long-term contracts (30+ days) receive a structured discount.",
    faqs: [
      { q: "Are the nurses certified?", a: "Yes — every nurse holds a recognised diploma or BSc nursing degree, with verified credentials and a minimum 2 years of clinical experience." },
      { q: "Can we keep the same nurse?", a: "Wherever possible we maintain continuity. For 12h shifts the same 2 nurses rotate; for live-in we keep the same primary nurse with a relief nurse for weekly off-days." },
      { q: "What if we are not satisfied?", a: "Call your supervisor — a replacement is arranged within 24 hours, no questions asked." },
      { q: "How quickly can a nurse start?", a: "Most cases in Dhaka are placed within 12–24 hours. For urgent post-discharge needs we maintain a same-day standby roster." },
      { q: "Do you handle specialised cases like ventilator or dialysis?", a: "Yes — we have ICU-trained nurses for tracheostomy, ventilator, dialysis support and complex wound care. These are quoted separately based on equipment and shift length." },
    ],
  },
  caregiver: {
    slug: "caregiver",
    icon: HeartPulse,
    image: svcCaregiverImg,
    eyebrow: "Daily Personal Care",
    title: "Caregiver Home Service",
    tagline: "Trained caregivers for everyday dignity and gentle companionship.",
    intro:
      "Warm, trained caregivers who help with bathing, dressing, mobility, meals and medication reminders — restoring everyday dignity at home and giving families the calm of knowing someone trusted is there.",
    highlights: [
      { icon: ShieldCheck, label: "Verified", value: "Police-checked" },
      { icon: HeartPulse, label: "Trained", value: "Care protocols" },
      { icon: Users, label: "Continuity", value: "Same caregiver" },
      { icon: Clock, label: "Flexibility", value: "8h / 12h / 24h" },
    ],
    whoIsItFor: [
      "Elderly parents who need help with daily personal care",
      "Bedridden patients needing turning, bathing and feeding support",
      "Dementia/Alzheimer patients needing gentle daily routines",
      "Recovering patients needing companionship and supervision",
    ],
    whatsIncluded: [
      { icon: HeartPulse, title: "Personal hygiene", desc: "Bathing, oral care, hair, nails, toileting and incontinence care with full dignity." },
      { icon: Activity, title: "Mobility assistance", desc: "Help with walking, transferring from bed to chair, and gentle exercises." },
      { icon: Users, title: "Meal prep & feeding", desc: "Diet-appropriate meals prepared and served, feeding support for those who need it." },
      { icon: Clock, title: "Medication reminders", desc: "On-time medication reminders as per the family's prescribed schedule." },
      { icon: Sparkles, title: "Companionship", desc: "Reading, conversation, walks, prayer support and emotional presence." },
      { icon: Home, title: "Light housekeeping", desc: "Patient's room, bed linen, clothes and immediate area kept clean." },
    ],
    process: [
      { step: "01", title: "Needs call", desc: "10-minute call to understand routines, preferences and special needs." },
      { step: "02", title: "Caregiver matching", desc: "We match a caregiver by language, gender preference, experience and personality." },
      { step: "03", title: "Meet & approve", desc: "Family meets the caregiver before placement — only proceed if comfortable." },
      { step: "04", title: "Supervised start", desc: "First-day handover with our supervisor; check-ins on day 3, 7 and weekly thereafter." },
    ],
    pricing: [
      {
        name: "8-Hour Shift",
        daily: { price: "৳ 900", unit: "/ day" },
        monthly: { price: "৳ 25,000", unit: "/ month" },
        summary: "Daytime support for routine personal care and companionship.",
        features: [
          "8 hours daily presence",
          "Bathing, dressing, meals",
          "Mobility & light housekeeping",
          "Daily activity log",
        ],
      },
      {
        name: "12-Hour Shift",
        daily: { price: "৳ 1,300", unit: "/ day" },
        monthly: { price: "৳ 36,000", unit: "/ month" },
        summary: "Extended day coverage — ideal for working families.",
        features: [
          "12 hours daily presence",
          "Full personal care + meals",
          "Companionship & light activities",
          "Family WhatsApp updates",
          "Free caregiver replacement",
        ],
        highlight: true,
        cta: "Hire Caregiver",
      },
      {
        name: "24-Hour Live-In",
        daily: { price: "৳ 2,200", unit: "/ day" },
        monthly: { price: "৳ 60,000", unit: "/ month" },
        summary: "Round-the-clock caregiver living at home with the patient.",
        features: [
          "24/7 caregiver at home",
          "Includes night-time care",
          "Full personal & companion care",
          "Weekly supervisor visit",
          "Free meals & accommodation by family",
        ],
      },
    ],
    pricingNote:
      "Monthly contracts include a free 7-day trial period — if the caregiver isn't the right fit, we replace at no extra cost.",
    faqs: [
      { q: "Female or male caregiver?", a: "Both available — most families prefer female caregivers for elderly mothers and either gender for fathers. Tell us your preference." },
      { q: "Can the caregiver cook?", a: "Yes — most caregivers can prepare simple, dietary-appropriate meals. Specialised cooking can be arranged on request." },
      { q: "How is the caregiver supervised?", a: "Weekly in-person supervisor visits, surprise checks, daily activity logs, and a 24/7 family helpline." },
      { q: "What if the caregiver falls ill or needs leave?", a: "We send a fully briefed backup caregiver within hours so your loved one is never left without support." },
      { q: "Can the same caregiver continue long-term?", a: "Absolutely — many of our caregivers stay with the same family for years. Continuity is our default, not the exception." },
    ],
  },
  physiotherapy: {
    slug: "physiotherapy",
    icon: Activity,
    image: svcPhysioImg,
    eyebrow: "Rehabilitation & Mobility",
    title: "Physiotherapy at Home",
    tagline: "BPT/DPT certified therapists — recovery without leaving home.",
    intro:
      "Certified physiotherapists delivering personalised rehabilitation, stroke recovery, orthopaedic therapy and pain management at home — with proper equipment, structured plans and measurable progress reports.",
    highlights: [
      { icon: Award, label: "Therapists", value: "BPT / DPT" },
      { icon: Activity, label: "Equipment", value: "Brought to home" },
      { icon: HeartPulse, label: "Programs", value: "Personalised" },
      { icon: Clock, label: "Sessions", value: "45–60 minutes" },
    ],
    whoIsItFor: [
      "Stroke patients in rehabilitation phase",
      "Post-orthopaedic surgery (knee, hip, spine) recovery",
      "Elderly with arthritis, joint pain or mobility loss",
      "Patients with neurological conditions (Parkinson's, MS)",
      "Sports injury recovery and chronic back pain",
    ],
    whatsIncluded: [
      { icon: Activity, title: "Initial assessment", desc: "Detailed evaluation of mobility, strength, posture and pain — with a written report." },
      { icon: HeartPulse, title: "Personalised plan", desc: "Goal-based therapy plan: weekly sessions, home exercises, and progress milestones." },
      { icon: Sparkles, title: "Hands-on therapy", desc: "Manual therapy, mobilisation, soft-tissue release, electrotherapy when indicated." },
      { icon: Users, title: "Family education", desc: "Caregivers and family taught safe transfer techniques and supportive exercises." },
      { icon: ClipboardList, title: "Progress reports", desc: "Bi-weekly written progress notes — measurable improvement, not just sessions." },
      { icon: ShieldCheck, title: "Equipment support", desc: "Therapist brings essential equipment; we can arrange parallel bars, walkers, TENS units on request." },
    ],
    process: [
      { step: "01", title: "Assessment visit", desc: "60-minute home evaluation with a senior physiotherapist — full report shared." },
      { step: "02", title: "Care plan", desc: "Number of sessions, weekly frequency, expected outcomes — written and approved." },
      { step: "03", title: "Therapy sessions", desc: "Structured 45–60 min sessions, with home exercise sheets after each visit." },
      { step: "04", title: "Review & graduation", desc: "Every 4 weeks we review progress and adjust the plan — until you've reached your goal." },
    ],
    pricing: [
      {
        name: "Single Session",
        daily: { price: "৳ 1,200", unit: "/ session" },
        monthly: { price: "৳ 13,500", unit: "/ month" },
        summary: "One-off session for assessment, pain relief or maintenance therapy.",
        features: [
          "45–60 minute session",
          "BPT/DPT certified therapist",
          "Hands-on therapy + home exercise sheet",
          "Visit report shared with family",
        ],
      },
      {
        name: "10-Session Package",
        daily: { price: "৳ 1,000", unit: "/ session" },
        monthly: { price: "৳ 10,000", unit: "/ package" },
        summary: "Most popular — structured rehab for stroke, post-op or chronic conditions.",
        features: [
          "10 sessions (use within 6 weeks)",
          "Free initial assessment included",
          "Personalised progress plan",
          "Bi-weekly written progress report",
          "Free home exercise sheets",
          "Save ৳ 2,000 vs single sessions",
        ],
        highlight: true,
        cta: "Start Recovery",
      },
      {
        name: "Monthly Intensive",
        daily: { price: "৳ 1,000", unit: "/ session" },
        monthly: { price: "৳ 22,000", unit: "/ month" },
        summary: "Daily therapy for serious rehabilitation needs (stroke, major surgery).",
        features: [
          "Up to 24 sessions / month",
          "6 sessions per week",
          "Same dedicated therapist",
          "Senior physio supervision",
          "Monthly clinical review with doctor",
        ],
      },
    ],
    pricingNote:
      "Specialised therapy (neuro-rehab, paediatric, lymphedema) priced separately. Equipment hire (TENS, parallel bars) available at additional cost.",
    faqs: [
      { q: "How many sessions will I need?", a: "Depends on the condition — typical stroke rehab needs 20–40 sessions, post-knee surgery 12–18 sessions. We give you a clear plan after the first assessment." },
      { q: "Will my therapist always be the same?", a: "Yes — for continuity, we assign one primary therapist for your full program, with a backup if they're unavailable." },
      { q: "What equipment do I need at home?", a: "Most therapy uses bodyweight and simple props. For specific cases we'll recommend (and arrange) walkers, exercise bands, parallel bars or TENS units." },
      { q: "How long is each session?", a: "Standard sessions are 45–60 minutes including assessment, hands-on therapy and guided exercises. Paediatric and neuro-rehab sessions can extend to 75 minutes." },
      { q: "Do you share progress reports?", a: "Yes — a written progress summary is shared every 2 weeks, with measurable goals so the family can see steady improvement, not just attendance." },
    ],
  },
  daycare: {
    slug: "daycare",
    icon: Baby,
    image: svcDaycareImg,
    eyebrow: "Supervised Daytime Care",
    title: "Day Care for Aged & Child",
    tagline: "Safe, structured daytime care — for elderly parents and young children.",
    intro:
      "A nurturing daytime environment for elderly parents and young children, with trained supervisors, structured activities, nutritious meals and on-site medical support — so working families have one less worry.",
    highlights: [
      { icon: Clock, label: "Hours", value: "8 AM – 7 PM" },
      { icon: Users, label: "Staff ratio", value: "Trained & supervised" },
      { icon: HeartPulse, label: "On-site", value: "Nurse available" },
      { icon: Sparkles, label: "Activities", value: "Daily structured" },
    ],
    whoIsItFor: [
      "Working families with elderly parents at home alone",
      "Seniors with mild dementia needing safe daytime company",
      "Working parents needing reliable child day care",
      "Families on a transition between full-time and home care",
    ],
    whatsIncluded: [
      { icon: Sparkles, title: "Structured activities", desc: "Music, light exercise, prayer time, group games, reading and creative sessions." },
      { icon: HeartPulse, title: "Nutritious meals", desc: "Breakfast, lunch, evening snacks and tea — diabetic and special diets accommodated." },
      { icon: ShieldCheck, title: "On-site nurse", desc: "Medication, vitals check and emergency response by a qualified nurse." },
      { icon: Activity, title: "Gentle physiotherapy", desc: "Daily 20-minute group mobility sessions for seniors led by a physiotherapist." },
      { icon: Users, title: "Companionship", desc: "Other seniors, conversations, friendships — combating loneliness is the biggest benefit." },
      { icon: Home, title: "Pickup & drop", desc: "Optional door-to-door pickup and drop service within Dhaka (additional)." },
    ],
    process: [
      { step: "01", title: "Visit the centre", desc: "Family tour with the day-care lead — see the space, staff and activities." },
      { step: "02", title: "Trial day", desc: "Bring your parent or child for a free trial day to see how they settle in." },
      { step: "03", title: "Enrolment", desc: "Choose a package (full-time, part-time or flexi-days) and complete simple paperwork." },
      { step: "04", title: "Daily updates", desc: "Photo + activity update sent to family every day via WhatsApp." },
    ],
    pricing: [
      {
        name: "Day Drop-in",
        daily: { price: "৳ 1,200", unit: "/ day" },
        monthly: { price: "৳ 28,000", unit: "/ month" },
        summary: "Single day for occasional needs or trial.",
        features: [
          "Full day 8 AM – 7 PM",
          "All meals & snacks",
          "All activities & supervision",
          "Daily update to family",
        ],
      },
      {
        name: "Full-Time Monthly",
        daily: { price: "৳ 900", unit: "/ day" },
        monthly: { price: "৳ 18,000", unit: "/ month" },
        summary: "5 days a week, full days — best for working families.",
        features: [
          "Monday – Friday, 8 AM – 7 PM",
          "All meals & snacks included",
          "Daily activities + physiotherapy",
          "On-site nurse & medication support",
          "Daily photo update",
          "Free trial day before enrolment",
        ],
        highlight: true,
        cta: "Enroll Now",
      },
      {
        name: "Part-Time Monthly",
        daily: { price: "৳ 1,100", unit: "/ day" },
        monthly: { price: "৳ 12,000", unit: "/ month" },
        summary: "3 days a week — flexible coverage for partial needs.",
        features: [
          "3 chosen days per week",
          "All meals & activities",
          "Same supervision & care",
          "Flexible day selection",
        ],
      },
    ],
    pricingNote:
      "Pickup & drop service available across Dhaka at ৳ 4,500/month. Sibling and parent-pair discounts available — talk to us.",
    faqs: [
      { q: "What age groups do you serve?", a: "Seniors 55+ and children 3–10 years, in separate supervised areas with age-appropriate activities and staff." },
      { q: "What about medical emergencies?", a: "An on-site nurse handles routine care; for emergencies we have transport ready to the nearest hospital and immediately notify the family." },
      { q: "Can I drop off and pick up at flexible times?", a: "Yes — within the 8 AM to 7 PM window, drop-off and pickup are fully flexible. Outside this window can be arranged with notice." },
      { q: "Do you provide transport to and from home?", a: "Yes — optional door-to-door pickup and drop is available across Dhaka at a fixed monthly add-on, with trained attendants escorting your loved one." },
      { q: "Can I try a day before enrolling?", a: "Absolutely. We offer a free full-day trial so your parent or child can experience the space, meals and activities before any commitment." },
    ],
  },
  respite: {
    slug: "respite",
    icon: Users,
    image: svcRespiteImg,
    eyebrow: "Short-Term Family Relief",
    title: "Respite & Companion Care",
    tagline: "Short-term, trusted care that gives the family a real break.",
    intro:
      "A specially-trained caregiver who steps in for a few hours, a few days, or a few weeks — so the primary caregiver in the family can travel, rest, recover or simply breathe — without compromising the quality of care.",
    highlights: [
      { icon: Clock, label: "Booking", value: "Hourly to weekly" },
      { icon: Users, label: "Caregivers", value: "Respite-trained" },
      { icon: HeartPulse, label: "Handover", value: "Full briefing" },
      { icon: ShieldCheck, label: "Continuity", value: "Same caregiver" },
    ],
    whoIsItFor: [
      "Family caregivers needing a short break, travel or recovery",
      "Adult children visiting from abroad needing cover",
      "Sudden situations — illness, surgery, family emergency",
      "Companion care for socially isolated seniors",
    ],
    whatsIncluded: [
      { icon: ClipboardList, title: "Full handover", desc: "Supervisor briefs the respite caregiver on routines, medications, preferences before starting." },
      { icon: HeartPulse, title: "Same standard of care", desc: "Personal care, meals, medication, companionship — identical to long-term caregiving." },
      { icon: Users, title: "Continuity caregiver", desc: "Where possible, the same respite caregiver returns for repeat bookings." },
      { icon: Clock, title: "Flexible blocks", desc: "Book by hour, half-day, full-day, or weeks — same-day availability for emergencies." },
      { icon: Sparkles, title: "Companionship focus", desc: "Conversation, reading, walks, prayer support — especially valuable for isolated seniors." },
      { icon: ShieldCheck, title: "Transparent pricing", desc: "Clear hourly and daily rates with no hidden charges, even for last-minute bookings." },
    ],
    process: [
      { step: "01", title: "Call us", desc: "Tell us when, how long, and the patient's main needs — even a few hours' notice is fine." },
      { step: "02", title: "Caregiver assigned", desc: "We match a respite-trained caregiver and brief them on the patient's routine." },
      { step: "03", title: "Handover", desc: "Family does a 15-minute in-person handover; supervisor on call throughout." },
      { step: "04", title: "Daily updates", desc: "Photo and short update every day so the family stays connected and reassured." },
    ],
    pricing: [
      {
        name: "Hourly Respite",
        daily: { price: "৳ 250", unit: "/ hour" },
        monthly: { price: "৳ 45,000", unit: "/ month" },
        summary: "A few hours of cover — perfect for appointments, errands, meetings.",
        features: [
          "Minimum 4 hours booking",
          "Personal care + companionship",
          "Same-day availability in Dhaka",
          "No long-term commitment",
        ],
      },
      {
        name: "Daily Respite",
        daily: { price: "৳ 1,500", unit: "/ day" },
        monthly: { price: "৳ 40,000", unit: "/ month" },
        summary: "Full-day cover for weekends, travel or recovery time.",
        features: [
          "12-hour day cover",
          "Full personal care + meals",
          "Family WhatsApp updates",
          "Same caregiver for repeat days",
          "24h emergency line",
        ],
        highlight: true,
        cta: "Book Respite Care",
      },
      {
        name: "Weekly Live-In",
        daily: { price: "৳ 2,000", unit: "/ day" },
        monthly: { price: "৳ 55,000", unit: "/ month" },
        summary: "Live-in cover for a week or more — for travel and extended breaks.",
        features: [
          "7 days, 24/7 live-in caregiver",
          "Full handover briefing",
          "Daily update + photo",
          "Supervisor visit on day 3",
          "Save 30% vs daily rate",
        ],
      },
    ],
    pricingNote:
      "Emergency / same-day bookings incur a small priority fee (৳ 500). Long respite stays (2+ weeks) often qualify for our caregiver monthly rates — ask us.",
    faqs: [
      { q: "Can I book for just one evening?", a: "Yes — minimum 4 hours, available same-day in Dhaka. Perfect for evening events or appointments." },
      { q: "Will my regular caregiver be replaced?", a: "Never. Respite is in addition to or in place of your existing arrangement, purely for short-term needs. Your regular setup continues unchanged." },
      { q: "Can I get the same respite caregiver every time?", a: "Yes — for repeat bookings we prioritise sending the same caregiver who already knows your family's routine and preferences." },
      { q: "How much notice do you need?", a: "Ideally 24 hours, but we cover same-day emergencies in Dhaka through our standby roster — just call and we'll arrange it." },
      { q: "What about medication and special routines?", a: "Our supervisor briefs the respite caregiver in writing on every medication, allergy, mealtime and personal preference before they begin." },
    ],
  },
};

// also-explore helper
const allSlugs = Object.keys(services);

function PricingCard({ p }: { p: PricingTier }) {
  const [isMonthly, setIsMonthly] = useState(true);
  const rate = isMonthly ? p.monthly : p.daily;
  return (
    <motion.div
      {...childFadeUp}
      className={`relative flex flex-col rounded-[32px] border p-8 transition ${
        p.highlight
          ? "border-brand/30 bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] text-cream shadow-[0_30px_70px_-28px_rgba(20,60,30,0.45)]"
          : "border-border/60 bg-white text-foreground shadow-[0_10px_30px_-18px_rgba(17,25,23,0.18)]"
      }`}
    >
      {p.highlight && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-brand px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary-foreground shadow-[0_10px_25px_-10px_rgba(76,175,47,0.6)]">
          <Star className="h-3 w-3 fill-current" />
          Most Chosen
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
          {p.name}
        </p>
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 ${
            p.highlight
              ? "border-cream/15 bg-cream/[0.06]"
              : "border-border/60 bg-secondary/40"
          }`}
        >
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
              !isMonthly
                ? p.highlight ? "text-cream" : "text-brand-deep"
                : p.highlight ? "text-cream/45" : "text-muted-foreground"
            }`}
          >
            Daily
          </span>
          <Switch
            checked={isMonthly}
            onCheckedChange={setIsMonthly}
            aria-label="Toggle daily or monthly pricing"
          />
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.14em] transition ${
              isMonthly
                ? p.highlight ? "text-cream" : "text-brand-deep"
                : p.highlight ? "text-cream/45" : "text-muted-foreground"
            }`}
          >
            Monthly
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-baseline gap-2">
        <motion.span
          key={rate.price}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className={`font-display text-4xl font-extrabold ${p.highlight ? "text-cream" : "text-brand-deep"} sm:text-[2.6rem]`}
        >
          {rate.price}
        </motion.span>
        <span className={`text-[13px] font-semibold ${p.highlight ? "text-cream/65" : "text-muted-foreground"}`}>
          {rate.unit}
        </span>
      </div>
      <p className={`mt-3 text-[13.5px] leading-[1.7] ${p.highlight ? "text-cream/75" : "text-muted-foreground"}`}>
        {p.summary}
      </p>

      <ul className="mt-6 space-y-3">
        {p.features.map((f) => (
          <li key={f} className={`flex items-start gap-2.5 text-[13.5px] leading-[1.6] ${p.highlight ? "text-cream/88" : "text-foreground/85"}`}>
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 pt-2">
        <Link
          to="/contact"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${
            p.highlight
              ? "bg-brand text-primary-foreground hover:-translate-y-0.5 hover:bg-brand-deep"
              : "border border-brand-deep/15 bg-brand-soft text-brand-deep hover:bg-brand hover:text-cream"
          }`}
        >
          {p.cta || "Get Started"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}





export const Route = createFileRoute("/services_/$slug")({
  beforeLoad: ({ params }) => {
    if (!services[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const s = services[params.slug as keyof typeof services];
    if (!s) {
      return {
        meta: [{ title: "Service not found — Green Care Homes" }],
      };
    }
    const url = `${SITE_URL}/services/${s.slug}`;
    const ogImage = `${SITE_URL}/og-cover.jpg`;
    return {
      meta: [
        { title: `${s.title} — Green Care Homes` },
        { name: "description", content: s.tagline },
        { property: "og:title", content: `${s.title} — Green Care Homes` },
        { property: "og:description", content: s.tagline },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: ogImage },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: s.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
              { "@type": "ListItem", position: 3, name: s.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const s = services[slug];
  if (!s) return null;

  const Icon = s.icon;
  const otherServices = allSlugs.filter((x) => x !== slug).slice(0, 3).map((x) => services[x]);

  return (
    <>
      {/* ===================== HERO — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] pt-28 pb-16 text-cream lg:pt-32 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse at center, #000 35%, transparent 85%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, #000 35%, transparent 85%)",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full bg-brand/25 blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-brand-deep/40 blur-[140px]" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-8">
          <div>
            {/* breadcrumb */}
            <motion.nav {...fadeUp} className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-cream/55">
              <Link to="/" className="hover:text-cream">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/services" className="hover:text-cream">Services</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-cream">{s.title}</span>
            </motion.nav>

            <motion.div {...fadeUp} className="mt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
                <Leaf className="h-3.5 w-3.5 text-brand" />
                {s.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.04] text-cream sm:text-5xl lg:text-[3.75rem]"
            >
              {s.title}
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.18 }}
              className="mt-5 text-[17px] font-medium text-cream/85 sm:text-[19px]"
            >
              {s.tagline}
            </motion.p>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.25 }}
              className="mt-5 max-w-2xl text-[15px] leading-[1.85] text-cream/65"
            >
              {s.intro}
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.32 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                <ClipboardList className="h-4 w-4" />
                Book a Free Home Visit
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+8801992869025"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/[0.06] px-6 py-3 text-sm font-bold text-cream backdrop-blur-sm transition hover:bg-cream/[0.1]"
              >
                <Phone className="h-4 w-4" />
                Talk to a Care Advisor
              </a>
            </motion.div>

            <motion.div {...stagger} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {s.highlights.map((h) => (
                <motion.div
                  key={h.label}
                  {...childFadeUp}
                  className="rounded-[24px] border border-cream/10 bg-cream/[0.05] px-4 py-4 backdrop-blur-sm"
                >
                  <h.icon className="h-4 w-4 text-brand" />
                  <p className="mt-4 text-sm font-semibold text-cream">{h.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-cream/48">{h.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="relative">
            <div className="absolute -inset-6 rounded-[42px] bg-gradient-to-br from-brand/20 via-brand-deep/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[38px] border border-cream/10 bg-cream/[0.06] p-3 shadow-[0_30px_90px_-32px_rgba(20,60,30,0.32)] backdrop-blur-md">
              <img
                src={s.image}
                alt={s.title}
                className="min-h-[460px] w-full rounded-[30px] object-cover"
                loading="lazy"
              />
              <div className="absolute left-6 bottom-6 flex items-center gap-3 rounded-full border border-cream/25 bg-cream/15 px-4 py-2 backdrop-blur-xl">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand/90 text-cream">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-cream/70">Service</p>
                  <p className="text-sm font-bold text-cream">{s.eyebrow}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== PRICING — LIGHT ===================== */}
      <section id="pricing" className="relative scroll-mt-32 bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

          <motion.div {...stagger} className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {s.pricing.map((p) => (
              <PricingCard key={p.name} p={p} />
            ))}
          </motion.div>


          <motion.p
            {...fadeUp}
            className="mx-auto mt-10 max-w-3xl rounded-[20px] border border-border/60 bg-secondary/40 px-6 py-4 text-center text-[13px] leading-[1.7] text-muted-foreground"
          >
            <ShieldCheck className="mr-2 inline h-4 w-4 text-brand" />
            {s.pricingNote}
          </motion.p>
        </div>
      </section>

      {/* ===================== WHO IS IT FOR + WHAT'S INCLUDED — PREMIUM SIDE-BY-SIDE ===================== */}
      <section className="relative bg-gradient-to-b from-background via-secondary/20 to-background py-20 lg:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Who is it for — left inner section */}
            <motion.div
              {...fadeUp}
              className="relative overflow-hidden lg:col-span-5 rounded-[24px] sm:rounded-[32px] border border-cream/10 bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.22_0.08_150)] p-5 sm:p-7 lg:p-10 text-cream shadow-[0_30px_80px_-30px_rgba(20,60,30,0.45)]"
            >
              <div aria-hidden className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-brand/25 blur-[120px]" />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.06),transparent_60%)]" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                  <span className="h-px w-5 bg-brand" />
                  Who Is It For
                </span>
                <h2 className="mt-3 sm:mt-4 font-display text-[22px] sm:text-[28px] lg:text-[34px] font-bold leading-[1.2] text-cream">
                  Designed for families who want care done right.
                </h2>
                <p className="mt-2.5 text-[13px] sm:text-[14px] leading-[1.65] text-cream/70">
                  Thoughtful support tailored to those who need it most — at home, with dignity.
                </p>

                <motion.ul {...stagger} className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                  {s.whoIsItFor.map((w) => (
                    <motion.li
                      key={w}
                      {...childFadeUp}
                      className="group flex items-start gap-2.5 sm:gap-3 rounded-xl border border-transparent px-2 sm:px-3 py-2 sm:py-2.5 text-[13.5px] sm:text-[14.5px] leading-[1.55] text-cream/90 transition hover:border-brand/30 hover:bg-cream/[0.04]"
                    >
                      <span className="mt-0.5 grid h-5 w-5 sm:h-6 sm:w-6 shrink-0 place-items-center rounded-full bg-brand/20 text-brand ring-1 ring-brand/40">
                        <CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </span>
                      <span>{w}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Decorative visual to fill space */}
                <motion.div
                  {...fadeUp}
                  className="mt-6 sm:mt-8 overflow-hidden rounded-[20px] sm:rounded-[24px] border border-cream/12 bg-cream/[0.04] p-4 sm:p-6 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-2xl bg-brand/20 text-brand ring-1 ring-brand/40">
                      <HeartPulse className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-cream/55">Our Promise</p>
                      <p className="mt-1.5 sm:mt-2 font-display text-[14.5px] sm:text-[17px] font-semibold leading-[1.45] text-cream">
                        “Care delivered like family — with the discipline of a hospital.”
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="rounded-xl sm:rounded-2xl border border-cream/10 bg-cream/[0.05] px-2 py-2.5 sm:p-3 text-center">
                      <p className="font-display text-lg sm:text-2xl font-bold text-brand">500+</p>
                      <p className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-cream/55">Families</p>
                    </div>
                    <div className="rounded-xl sm:rounded-2xl border border-cream/10 bg-cream/[0.05] px-2 py-2.5 sm:p-3 text-center">
                      <p className="font-display text-lg sm:text-2xl font-bold text-brand">24/7</p>
                      <p className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-cream/55">On-Call</p>
                    </div>
                    <div className="rounded-xl sm:rounded-2xl border border-cream/10 bg-cream/[0.05] px-2 py-2.5 sm:p-3 text-center">
                      <p className="font-display text-lg sm:text-2xl font-bold text-brand whitespace-nowrap">9+ yrs</p>
                      <p className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.14em] text-cream/55">Trusted</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* What's included — right inner section */}
            <motion.div
              {...fadeUp}
              className="lg:col-span-7 rounded-[32px] border border-border/60 bg-card/80 p-8 backdrop-blur-sm shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_30px_60px_-30px_rgba(0,0,0,0.15)] lg:p-10"
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                <span className="h-px w-6 bg-brand" />
                What's Included
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-[1.15] text-brand-deep sm:text-[34px]">
                Premium standards, plainly explained.
              </h2>
              <p className="mt-3 text-[14px] leading-[1.7] text-muted-foreground">
                Every visit follows the same disciplined checklist our families trust.
              </p>

              <motion.div {...stagger} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {s.whatsIncluded.map((item) => (
                  <motion.div
                    key={item.title}
                    {...childFadeUp}
                    className="group rounded-2xl border border-border/60 bg-background/60 p-5 transition hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.25)]"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-soft to-brand-soft/40 text-brand-deep ring-1 ring-brand/15 transition group-hover:from-brand group-hover:to-brand-deep group-hover:text-cream">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-[15.5px] font-bold text-brand-deep">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-[1.65] text-muted-foreground">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ===================== HOW IT WORKS — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-20 text-cream lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 h-[460px] w-[460px] rounded-full bg-brand/20 blur-[130px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 h-[460px] w-[460px] rounded-full bg-brand-deep/40 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              How it works
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-cream sm:text-[2.5rem]">
              From the first call to confident care.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/65">
              No long forms, no pressure, no salespeople — just a calm, professional process.
            </p>
          </motion.div>

          <motion.div {...stagger} className="relative mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {s.process.map((p) => (
              <motion.div
                key={p.step}
                {...childFadeUp}
                className="relative rounded-[26px] border border-cream/10 bg-cream/[0.05] p-6 backdrop-blur-sm transition hover:border-brand/25 hover:bg-cream/[0.08]"
              >
                <p className="font-display text-[12px] font-bold tracking-[0.22em] text-brand">STEP {p.step}</p>
                <h3 className="mt-3 font-display text-[18px] font-bold text-cream">{p.title}</h3>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-cream/65">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ===================== FAQ — STANDARD LAYOUT ===================== */}
      <FaqSection
        eyebrow={`FAQ · ${s.eyebrow}`}
        title={FAQ_TITLES[s.slug] ?? (
          <>
            Frequently asked,{" "}
            <span className="italic font-light text-brand">honestly answered.</span>
          </>
        )}
        image={s.image}
        imageAlt={s.title}
        caption={`\u201C${s.tagline}\u201D`}
        items={s.faqs}
        hideFooter
      />


      {/* ===================== ALSO EXPLORE — DARK ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.32_0.06_155)] via-[oklch(0.28_0.07_152)] to-[oklch(0.24_0.08_150)] py-20 text-cream lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-[460px] w-[460px] rounded-full bg-brand/20 blur-[130px]" />
        <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 h-[460px] w-[460px] rounded-full bg-brand-deep/40 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <motion.div {...fadeUp} className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm">
                <Leaf className="h-3.5 w-3.5 text-brand" />
                Also explore
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold text-cream sm:text-[2.4rem]">
                Other services in the ecosystem.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/[0.06] px-5 py-2.5 text-sm font-bold text-cream backdrop-blur-sm transition hover:bg-cream/[0.1]"
            >
              All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div {...stagger} className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {otherServices.map((o) => {
              const OIcon = o.icon;
              return (
                <motion.div key={o.slug} {...childFadeUp}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: o.slug }}
                    className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-cream/10 bg-cream/[0.05] backdrop-blur-sm transition hover:-translate-y-1 hover:border-brand/30 hover:bg-cream/[0.08]"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={o.image}
                        alt={o.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                      <span className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-2xl bg-white/10 text-brand ring-1 ring-white/20 backdrop-blur-md">
                        <OIcon className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand">{o.eyebrow}</p>
                      <h3 className="mt-3 font-display text-[20px] font-bold text-cream">{o.title}</h3>
                      <p className="mt-2 line-clamp-2 text-[13.5px] leading-[1.7] text-cream/65">{o.tagline}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-cream/85 transition group-hover:text-brand">
                        Explore <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===================== FINAL CTA — LIGHT ===================== */}
      <section className="relative bg-white py-16 lg:py-20">
        <div className="relative mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[36px] border border-border/60 bg-gradient-to-br from-brand-soft/60 via-white to-secondary/40 px-8 py-14 text-center shadow-[0_30px_80px_-40px_rgba(17,25,23,0.18)] sm:px-14"
          >
            <div aria-hidden className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
            <div aria-hidden className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-deep/10 blur-3xl" />
            <h2 className="relative font-display text-3xl font-extrabold text-brand-deep sm:text-[2.5rem]">
              Ready to start with {s.title.toLowerCase()}?
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-[15px] leading-[1.8] text-muted-foreground">
              Book a free assessment — no commitment, no pressure. Just a calm conversation to understand your family's needs and what would actually help.
            </p>
            <div className="relative mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_16px_35px_rgba(76,175,47,0.30)] transition hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                Book Free Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+8801992869025"
                className="inline-flex items-center gap-2 rounded-full border border-brand-deep/20 bg-white px-6 py-3 text-sm font-bold text-brand-deep transition hover:bg-brand-soft"
              >
                <Phone className="h-4 w-4" />
                +880 1992-869025
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
