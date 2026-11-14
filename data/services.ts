export interface ServiceSolution {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export const servicesData: ServiceSolution[] = [
  {
    id: "architectural-lighting",
    number: "01",
    title: "Circadian & Architectural Lighting",
    shortTitle: "Lighting",
    tagline: "Light as an architectural material, responding to the sun.",
    description:
      "Precision-tuned circadian lighting that mimics natural solar Kelvin temperatures from dawn to dusk, paired with 0.1% flicker-free dimming and warm cove transitions.",
    longDescription:
      "Transform every room with human-centric illumination. Zenith circadian systems automatically synchronize interior color temperatures with outdoor solar angles—invigorating morning energy with 5500K crisp white light, and nurturing evening relaxation with rich 2200K amber coves.",
    image: "/assets/exp-room.jpg",
    features: [
      "Circadian solar tracking (1800K to 6500K dynamic white)",
      "Continuous ultra-deep dimming down to 0.1% without flicker",
      "Concealed cove, perimeter wash, and micro-aperture fixture support",
      "One-touch scenes: Daylight, Sunset, Cinema, and Night Beacon",
    ],
    specs: [
      { label: "Dimming Resolution", value: "16-Bit Local DMX/DALI" },
      { label: "Color Consistency", value: "<2-Step MacAdam Ellipse" },
      { label: "Hardware Form", value: "DIN Rail & In-Wall Architectural Modules" },
    ],
  },
  {
    id: "motorized-shading",
    number: "02",
    title: "Motorized Architectural Drapery & Shading",
    shortTitle: "Shading",
    tagline: "Silent daylight management and effortless privacy.",
    description:
      "Ultra-quiet motorized curtain tracks and dual-roller shading systems engineered to harvest daylight, eliminate UV solar heat gain, and create instant cinematic darkness.",
    longDescription:
      "Our whisper-quiet motorized drapery glides with acoustic grace. Integrated solar sensors automatically adjust shade positions throughout the day to block heat while preserving panoramic outdoor vistas. In bedrooms and home theaters, dual fabrics deliver sheer daylight filtering or 100% blackout seclusion.",
    image: "/assets/zenith-room.jpg",
    features: [
      "Whisper-quiet acoustic motors (<32 dBA operation)",
      "Solar astronomical clock integration for automated heat rejection",
      "Seamless dual-fabric systems: Sheer privacy + Total blackout",
      "Manual push-to-glide override with soft start and soft stop",
    ],
    specs: [
      { label: "Sound Level", value: "<32 dBA Acoustic Whisper" },
      { label: "Fabric Choices", value: "Linen, Sheer, Blackout, UV Solar" },
      { label: "Alignment", value: "Hem-Bar Alignment Synchronization" },
    ],
  },
  {
    id: "tactile-controls",
    number: "03",
    title: "Tactile Glass Panels & Unified Control",
    shortTitle: "Control",
    tagline: "Architectural wall surfaces that replace plastic switch clutter.",
    description:
      "Custom black glass touch switch plates with brushed gold chamfers that replace clusters of ordinary switches with intuitive one-touch master scene controls.",
    longDescription:
      "Eliminate wall acne with Zenith’s sculptural black glass tactile panels. Crafted with ultra-thin bezels and hand-finished brushed gold chamfers, each plate features capacitive touch sensors, subtle haptic confirmation, and backlit icons that gently brighten when your hand approaches.",
    image: "/assets/zenith-panel.jpg",
    features: [
      "Tempered black glass with chamfered brushed gold accents",
      "Capacitive proximity sensing with subtle wake-on-approach",
      "Consolidates lighting, shading, temperature, and audio into one plate",
      "Local-first intelligence that operates even during internet outages",
    ],
    specs: [
      { label: "Materials", value: "Solid Black Glass & Brushed Anodized Gold" },
      { label: "Response Time", value: "<10 Milliseconds" },
      { label: "Connectivity", value: "Encrypted RS485 & Local Zigbee Mesh" },
    ],
  },
  {
    id: "climate-comfort",
    number: "04",
    title: "Multi-Zone Climate & Air Management",
    shortTitle: "Climate",
    tagline: "Invisible climate balancing tailored to each room.",
    description:
      "Concealed architectural thermostats and dual-zone HVAC integration that balance temperature, humidity, and ventilation across living spaces.",
    longDescription:
      "True luxury is stepping into a home where temperature is consistently effortless. Zenith coordinates VRF, chilled water systems, and radiant cooling zones to maintain pristine comfort without noisy fan surges or wall-mounted plastic thermostats.",
    image: "/assets/control-home.jpg",
    features: [
      "Multi-zone temperature regulation with discrete flush micro-sensors",
      "Automated setback schedules linked to room occupancy and Away mode",
      "Integration with VRF, concealed ducted units, and radiant cooling",
      "Humidification and fresh-air ventilation optimization",
    ],
    specs: [
      { label: "Sensor Precision", value: "±0.2°C Temperature & Humidity" },
      { label: "Integration", value: "BACnet, Modbus, KNX, Direct Relays" },
      { label: "Control Modes", value: "Cool, Comfort Lounge, Eco, Sleep Quiet" },
    ],
  },
  {
    id: "integrated-security",
    number: "05",
    title: "Biometric Security & Perimeter Sentry",
    shortTitle: "Security",
    tagline: "Proactive, multi-radar boundary defense without false alarms.",
    description:
      "Encrypted biometric deadbolts, 2K HDR night-vision surveillance, and millimeter-wave radar perimeter sentries that guard your residence with absolute discretion.",
    longDescription:
      "Zenith treats security as an integrated shield. High-security biometric deadbolts grant instant keyless entry for family members while encrypted multi-radar boundary sensors detect real intruders without triggering false alarms for pets or swaying trees.",
    image: "/assets/security-smart.jpg",
    features: [
      "Biometric fingerprint and digital deadbolt locking with auto-relock",
      "2K HDR surveillance with localized H.265 recording and zero monthly fees",
      "Millimeter-wave radar perimeter detection with zero foliage false alarms",
      "Emergency perimeter deterrence strobe and instant mobile alerts",
    ],
    specs: [
      { label: "Lock Mechanism", value: "Heavy-Duty Motorized Deadbolt" },
      { label: "Camera Stream", value: "2K HDR @ 30 FPS Local Encryption" },
      { label: "Radar Field", value: "360° Millimeter-Wave Sonar" },
    ],
  },
  {
    id: "spatial-audio",
    number: "06",
    title: "Lossless Multi-Zone Audio & Cinema",
    shortTitle: "Audio",
    tagline: "Studio-master sound flowing invisibly through every space.",
    description:
      "Concealed architectural in-ceiling speakers and 96kHz / 24-bit high-resolution audio streaming hubs that fill living rooms, terraces, and private suites.",
    longDescription:
      "Experience music as the artist recorded it. Zenith audio streaming engines distribute studio-grade, 24-bit uncompressed audio to architectural flush speakers that blend invisibly into ceilings or custom wall paneling.",
    image: "/assets/story-2.jpg",
    features: [
      "Lossless 96kHz / 24-bit multi-zone streaming architecture",
      "Flush architectural speakers paintable to match ceilings perfectly",
      "One-touch party or dinner party audio sync across all rooms",
      "Dedicated Cinema Mode audio routing with Dolby Atmos calibration",
    ],
    specs: [
      { label: "Audio Fidelity", value: "96kHz / 24-Bit Studio Master" },
      { label: "Zones Supported", value: "Up to 32 Discrete Audio Zones" },
      { label: "Latency", value: "<1 Millisecond Inter-Zone Synchronization" },
    ],
  },
];

