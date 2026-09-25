export const basePath = "";

export function assetPath(path) {
  return `${basePath}${path}`;
}

export const site = {
  name: "Zaki Abbas Technical Services LLC",
  shortName: "ZA Automation",
  url: "https://zaautomation.com",
  email: "zaki@zaautomation.com",
  phoneDisplay: "+971 55 962 6398",
  phoneE164: "+971559626398",
  whatsapp: "971559626398",
  address: {
    line1: "Office F-201, Building No. 137, Al Barah",
    city: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    maps: "https://maps.google.com/?q=Office+F-201+Building+137+Al+Barah+Dubai",
  },
  stats: {
    projects: "700+",
    installs: "100+",
    coverage: "UAE",
  },
  brands: [
    "ABI",
    "Bauer",
    "Liebherr",
    "SANY",
    "Casagrande",
    "Antares",
    "RTG",
    "Soilmec",
  ],
  defaultOgImage: "/assets/images/abi-tm20.jpg",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/machinery", label: "Machinery" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    id: "plc",
    num: "01",
    title: "PLC Programming",
    short:
      "Logic development, retrofit and commissioning for industrial controllers on foundation equipment.",
    description:
      "Professional PLC programming, retrofit and commissioning for industrial controllers on piling and foundation equipment.",
    bullets: [
      "Logic development and upgrades",
      "Machine retrofit & migration",
      "On-site commissioning support",
      "Fault recovery and backup restore",
    ],
  },
  {
    id: "hmi",
    num: "02",
    title: "HMI Development",
    short:
      "Custom operator interfaces for monitoring, alarms and machine parameter control.",
    description:
      "Custom Human Machine Interface systems for machinery monitoring, alarms and operator control under real site conditions.",
    bullets: [
      "Operator screen design",
      "Alarm & parameter layouts",
      "Panel PC / HMI replacement",
      "Usability improvements for crews",
    ],
  },
  {
    id: "canbus",
    num: "03",
    title: "CANbus Troubleshooting",
    short:
      "Bus analysis, node isolation, joystick integration and communication recovery.",
    description:
      "Advanced CANbus diagnostics and communication fault troubleshooting on multi-module foundation machine networks.",
    bullets: [
      "Bus health analysis",
      "Node isolation & recovery",
      "Joystick CANbus integration",
      "Intermittent comms faults",
    ],
  },
  {
    id: "sensors",
    num: "04",
    title: "Sensor Calibration",
    short:
      "Angle, pressure, load and proximity sensors set to required tolerances.",
    description:
      "Precision setup and calibration for angle, pressure, load and proximity sensors on heavy foundation plant.",
    bullets: [
      "Boom angle sensors",
      "Pressure & load sensors",
      "Proximity / position devices",
      "OEM tolerance setup",
    ],
  },
  {
    id: "electrical",
    num: "05",
    title: "Electrical Fault Finding",
    short:
      "Harness tracing, power integrity and intermittent electrical fault isolation.",
    description:
      "Complete electrical troubleshooting for open circuits, shorts, intermittent harness issues and power integrity problems.",
    bullets: [
      "Harness tracing & repair",
      "Power supply diagnostics",
      "Intermittent fault isolation",
      "Hydraulic-electrical systems",
    ],
  },
  {
    id: "lmi",
    num: "06",
    title: "Load Moment Indicator (LMI)",
    short: "LMI integration, troubleshooting and safe-load calibration.",
    description:
      "LMI integration, troubleshooting and safe-load system calibration for cranes and foundation equipment.",
    bullets: [
      "LMI integration",
      "Safe-load calibration",
      "Fault code diagnostics",
      "Verification under load",
    ],
  },
  {
    id: "joystick",
    num: "07",
    title: "Joystick CANbus Integration",
    short:
      "Control stick integration and mapping for modern foundation machinery.",
    description:
      "CANbus joystick control integration and mapping for modern foundation machinery systems.",
    bullets: [
      "Joystick mapping",
      "Control response tuning",
      "CANbus node setup",
      "Operator preference setup",
    ],
  },
  {
    id: "panels",
    num: "08",
    title: "Control Panels & Harnesses",
    short:
      "Panel solutions, wiring harness repair and industrial loom recovery.",
    description:
      "Custom electrical and automation control panel solutions plus industrial wiring harness repair.",
    bullets: [
      "Panel design & build support",
      "Harness repair / rewire",
      "Connector & loom recovery",
      "Documentation for maintenance",
    ],
  },
];

export const machines = [
  {
    id: "abi-tm20",
    image: assetPath("/assets/images/abi-tm20.jpg"),
    brand: "ABI",
    tag: "Mobilram",
    title: "ABI Mobilram TM20",
    description:
      "PLC, HMI, CANbus, joysticks and sensor systems for ABI Mobilram TM20 foundation plant.",
  },
  {
    id: "abi-tm22",
    image: assetPath("/assets/images/abi-tm22-site.jpg"),
    brand: "ABI",
    tag: "Sheet piles",
    title: "ABI TM22 On-Site Systems",
    description:
      "Field diagnostics and automation support for ABI TM22 piling equipment in live site conditions.",
  },
  {
    id: "abi-mobilram",
    image: assetPath("/assets/images/abi-mobilram.jpg"),
    brand: "ABI",
    tag: "Piling",
    title: "ABI Mobilram Fleet Support",
    description:
      "Controls, harness, electrical and CANbus recovery for ABI Mobilram foundation machines.",
  },
  {
    id: "rotary",
    image: assetPath("/assets/images/drilling-rig.jpeg"),
    brand: "SANY / Rotary",
    tag: "Drilling",
    title: "Rotary Drilling Rigs",
    description:
      "PLC, HMI and electrical diagnostics for rotary foundation drilling fleets.",
  },
  {
    id: "vibro",
    image: assetPath("/assets/images/vibro-hammer.jpeg"),
    brand: "Antares / Vibro",
    tag: "Vibro",
    title: "Vibro Hammers & Systems",
    description:
      "Automation and electrical support for vibro hammers, including Antares MR150 AVM class equipment.",
  },
  {
    id: "liebherr",
    image: assetPath("/assets/images/crane.jpeg"),
    brand: "Liebherr",
    tag: "Drilling",
    title: "Liebherr Drilling Equipment",
    description:
      "Platform-specific control troubleshooting, harness and hydraulic-electrical support.",
  },
];

export const testimonials = [
  {
    quote:
      "Fast CANbus diagnosis on our ABI machine. The team isolated the fault quickly and got us back into production the same day.",
    name: "Ahmed K.",
    role: "Project Manager · Dubai",
    initial: "A",
  },
  {
    quote:
      "Professional PLC and HMI support for our rotary rig. Clear communication and solid technical depth throughout.",
    name: "James R.",
    role: "Fleet Supervisor · Abu Dhabi",
    initial: "J",
  },
  {
    quote:
      "Excellent electrical fault finding and LMI calibration. A reliable partner for foundation equipment automation.",
    name: "Sara M.",
    role: "Site Engineer · Sharjah",
    initial: "S",
  },
];

export function waLink(
  text = "Hello ZA Automation, I need automation support for my machinery.",
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: `${site.url}${site.defaultOgImage}`,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    description:
      "Industrial automation specialists for piling and foundation machinery — PLC, HMI, CANbus, sensors, LMI and electrical diagnostics across the UAE.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    },
    areaServed: {
      "@type": "Country",
      name: site.address.country,
    },
    serviceType: services.map((s) => s.title),
  };
}
