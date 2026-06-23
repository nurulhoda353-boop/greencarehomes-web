/**
 * Single source of truth for Green Care Homes contact data.
 * Update here once — every page/footer/JSON-LD/form references this file.
 */

export const CONTACT = {
  phone: "+880 1992-869025",
  phoneTel: "+8801992869025",
  phoneBn: "+৮৮০ ১৯৯২-৮৬৯০২৫",
  whatsapp: "https://wa.me/8801992869025",
  email: "info@greencarehomesbd.com",

  // Postal address — official
  street: "House-7, Dhaka Uddan Main Road, Mohammadpur",
  streetBn: "হাউস-৭, ঢাকা উদ্যান মেইন রোড, মোহাম্মদপুর",
  city: "Dhaka",
  cityBn: "ঢাকা",
  postalCode: "",
  country: "BD",

  addressFull: "House-7, Dhaka Uddan Main Road, Mohammadpur, Dhaka",
  addressFullBn: "হাউস-৭, ঢাকা উদ্যান মেইন রোড, মোহাম্মদপুর, ঢাকা",

  // Multi-line address for cards (street \n city)
  addressMultiline: "House-7, Dhaka Uddan Main Road,\nMohammadpur, Dhaka",
  addressMultilineBn: "হাউস-৭, ঢাকা উদ্যান মেইন রোড,\nমোহাম্মদপুর, ঢাকা",

  mapsHref:
    "https://maps.google.com/?q=House+7+Dhaka+Uddan+Main+Road+Mohammadpur+Dhaka",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=House+7+Dhaka+Uddan+Main+Road+Mohammadpur+Dhaka&output=embed",
} as const;
