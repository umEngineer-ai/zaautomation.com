import { site, services, machines, waLink } from "@/lib/site";

export const quickReplies = [
  "Services",
  "Machinery",
  "Pricing / quote",
  "Location",
  "Emergency support",
  "Talk to engineer",
];

const knowledge = [
  {
    keys: ["services", "service", "what do you do", "offer", "capability", "help with"],
    answer: `We specialize in foundation & piling machinery automation across the UAE:\n\n• PLC Programming\n• HMI Development\n• CANbus Troubleshooting\n• Sensor Calibration\n• Electrical Fault Finding\n• LMI / Safety Systems\n• Joystick CANbus Integration\n• Control Panels & Harnesses\n\nWhich service do you need?`,
  },
  {
    keys: ["plc", "program", "controller", "logic"],
    answer: `PLC Programming is one of our core services — logic development, retrofit, commissioning, backup restore and fault recovery for foundation equipment controllers.\n\nShare your machine brand/model and the fault codes if you have them.`,
  },
  {
    keys: ["hmi", "screen", "display", "operator", "touch"],
    answer: `We build and repair HMI / operator screens for foundation plant — alarm layouts, parameter pages, panel replacements and usability improvements for site crews.`,
  },
  {
    keys: ["canbus", "can bus", "can-bus", "j1939", "communication", "comm timeout", "node"],
    answer: `CANbus diagnostics is a specialty — bus health checks, node isolation, intermittent communication faults and joystick CANbus integration on multi-module machines (ABI, Bauer, Liebherr and more).`,
  },
  {
    keys: ["sensor", "calibration", "angle", "pressure", "proximity"],
    answer: `We calibrate boom angle, pressure, load and proximity sensors to required tolerances and verify them on site.`,
  },
  {
    keys: ["electrical", "wiring", "harness", "short", "open circuit", "power", "fault"],
    answer: `Electrical fault finding covers harness tracing, open circuits, intermittent loom issues, power integrity and hydraulic-electrical systems. Photos of the panel/harness help us triage faster.`,
  },
  {
    keys: ["lmi", "load moment", "safe load", "safety"],
    answer: `We support Load Moment Indicator (LMI) integration, troubleshooting and safe-load calibration — including boom angle related safety circuits.`,
  },
  {
    keys: ["machinery", "machine", "equipment", "brand", "platform", "abi", "bauer", "liebherr", "sany", "casagrande", "vibro", "antares", "soilmec", "rtg"],
    answer: `Platforms we commonly support:\n\n${machines.map((m) => `• ${m.title} (${m.brand})`).join("\n")}\n\nDon’t see your exact model? Send brand + model + symptoms and we’ll confirm.`,
  },
  {
    keys: ["pricing / quote", "price", "pricing", "cost", "quote", "how much", "rate", "charges"],
    answer: `Pricing depends on machine type, fault complexity and whether parts/programming are required. For a fast quote, share:\n\n1) Machine brand & model\n2) Fault / alarm codes\n3) Location in UAE\n\nOr tap “Talk to engineer” to continue on WhatsApp.`,
  },
  {
    keys: ["location", "where", "address", "office", "dubai", "al barah", "map"],
    answer: `We’re based in Dubai:\n\n📍 ${site.address.line1}\n${site.address.city}, ${site.address.country}\n\nWe provide on-site support across the UAE.`,
  },
  {
    keys: ["contact", "phone", "whatsapp", "email", "call", "number", "reach"],
    answer: `Contact ZA Automation:\n\n📞 / WhatsApp: ${site.phoneDisplay}\n✉️ ${site.email}\n📍 ${site.address.line1}, ${site.address.city}\n\nI can also open WhatsApp with your question pre-filled.`,
  },
  {
    keys: ["emergency support", "emergency", "urgent", "down", "breakdown", "stopped", "offline", "asap", "now"],
    answer: `For machine-down emergencies, WhatsApp is fastest.\n\nSend: machine model + fault codes + site location.\nWhatsApp: ${site.phoneDisplay}\n\nTap “Talk to engineer” below to continue instantly.`,
  },
  {
    keys: ["hour", "time", "open", "working", "availability", "when"],
    answer: `We support foundation sites across the UAE. For urgent breakdowns, message WhatsApp anytime and we’ll respond as soon as possible during active field coverage.\n\nWhatsApp: ${site.phoneDisplay}`,
  },
  {
    keys: ["about", "company", "who are you", "za automation"],
    answer: `${site.name} specializes in automation, troubleshooting and control solutions for piling and foundation machinery from Dubai (Al Barah), serving contractors UAE-wide.\n\nStats: ${site.stats.projects} projects · ${site.stats.installs} major installations · ${site.stats.coverage} coverage.`,
  },
  {
    keys: ["hello", "hi", "hey", "salam", "good morning", "good evening", "assalam"],
    answer: `Hello — welcome to ${site.shortName}. I can help with services, supported machinery, location, or connect you to an engineer on WhatsApp.`,
  },
  {
    keys: ["thanks", "thank you", "thx", "ok", "okay", "great"],
    answer: `You’re welcome. If you need anything else — services, machinery support, or a site visit — just ask.`,
  },
  {
    keys: ["talk to engineer", "talk", "engineer", "human", "agent", "person", "specialist", "speak to", "call me"],
    answer: `I can connect you to an engineer on WhatsApp right away.\n\nWhatsApp: ${site.phoneDisplay}\nEmail: ${site.email}\n\nUse the green “Chat on WhatsApp” button below.`,
  },
];

export function getBotReply(input) {
  const text = (input || "").toLowerCase().trim();
  if (!text) {
    return {
      text: "Please type a short question, or choose a quick topic below.",
      actions: [],
    };
  }

  // Direct WhatsApp intent for talk to engineer or explicit chat requests
  if (
    text === "talk to engineer" ||
    text.includes("whatsapp") ||
    text.includes("speak to") ||
    text.includes("call me")
  ) {
    return {
      text: `I can connect you to an engineer on WhatsApp right away.\n\nWhatsApp: ${site.phoneDisplay}\nEmail: ${site.email}\n\nUse the button below to start chatting.`,
      actions: [
        {
          type: "whatsapp",
          label: "Chat on WhatsApp",
          href: waLink(
            "Hello ZA Automation, I was chatting on the website and need to speak with an engineer."
          ),
        },
      ],
    };
  }

  for (const item of knowledge) {
    if (item.keys.some((k) => text.includes(k) || text === k)) {
      const actions = [];
      if (
        item.keys.some((k) =>
          ["emergency", "emergency support", "contact", "price", "pricing / quote", "talk", "engineer", "service", "services", "machinery", "machine", "location"].includes(k)
        ) ||
        text.includes("quote") ||
        text.includes("support") ||
        text.includes("down") ||
        text.includes("breakdown")
      ) {
        actions.push({
          type: "whatsapp",
          label: text.includes("emergency") || text.includes("down") || text.includes("breakdown")
            ? "Emergency WhatsApp Support"
            : text.includes("price") || text.includes("quote")
            ? "Get a Quote on WhatsApp"
            : "Continue on WhatsApp",
          href: waLink(`Hello ZA Automation,\n\nWebsite chat question: ${input}`),
        });
      }
      if (text.includes("service") || item.keys.includes("services")) {
        actions.push({ type: "link", label: "View services", href: "/services" });
      }
      if (
        text.includes("machine") ||
        text.includes("machinery") ||
        text.includes("abi") ||
        text.includes("bauer") ||
        text.includes("liebherr") ||
        item.keys.includes("machinery")
      ) {
        actions.push({ type: "link", label: "View machinery", href: "/machinery" });
      }
      if (text.includes("location") || text.includes("address") || text.includes("dubai") || item.keys.includes("location")) {
        actions.push({ type: "link", label: "Contact & map", href: "/contact" });
      }
      if (text.includes("emergency") || text.includes("down") || text.includes("breakdown") || item.keys.includes("emergency support")) {
        actions.push({ type: "link", label: "Contact page", href: "/contact" });
      }
      return { text: item.answer, actions };
    }
  }

  // Fallback
  return {
    text: `I didn’t fully catch that, but I can still help.\n\nTry asking about:\n• Services (PLC, HMI, CANbus, LMI…)\n• Machinery brands we support\n• Dubai office location\n• Emergency / machine-down support\n\nOr talk directly to an engineer on WhatsApp ${site.phoneDisplay}.`,
    actions: [
      {
        type: "whatsapp",
        label: "Talk to engineer",
        href: waLink(`Hello ZA Automation,\n\nWebsite chat question: ${input}`),
      },
      { type: "link", label: "Contact page", href: "/contact" },
    ],
  };
}

export const welcomeMessage = {
  from: "bot",
  text: `Hi — I’m the ZA Automation assistant.\n\nI can help with services, supported machinery, quotes, and Dubai contact details. For urgent breakdowns, I can connect you to an engineer on WhatsApp.`,
  actions: [],
};
