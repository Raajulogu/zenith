export type SceneId = "day" | "evening" | "movie" | "night" | "away";

export interface DeviceState {
  name: string;
  category: "lighting" | "curtains" | "climate" | "security" | "audio";
  status: string;
  metric?: string;
  active: boolean;
}

export interface SmartHomeScene {
  id: SceneId;
  name: string;
  subtitle: string;
  headline: string;
  description: string;
  image: string;
  lightingState: {
    label: string;
    level: number; // 0 to 100
    colorTemp: string; // e.g., "5500K", "2700K", "1800K"
    modeName: string;
    glowClass: string;
    overlayGradient: string;
  };
  curtainState: {
    label: string;
    percentage: number; // 0 (closed) to 100 (open)
    status: string;
  };
  climateState: {
    tempC: number;
    mode: "cool" | "comfort" | "rest" | "eco";
    label: string;
  };
  audioState: {
    status: string;
    source: string;
    active: boolean;
  };
  securityState: {
    status: string;
    mode: "unarmed" | "perimeter" | "night" | "away";
    isLocked: boolean;
  };
  devices: DeviceState[];
  cssVariables: {
    lightingBrightness: string;
    lightingWarmth: string;
    draperyWidth: string;
    ambientOpacity: string;
  };
}

export const smartHomeScenes: SmartHomeScene[] = [
  {
    id: "day",
    name: "Day Mode",
    subtitle: "08:00 — 16:30",
    headline: "Natural Sunlight & Circadian Vitality",
    description:
      "Crisp natural daylight streams into the living room. Circadian lighting tracks solar Kelvin values for elevated energy and focus, while climate maintains eco-balanced air distribution.",
    image: "/assets/control-home.jpg",
    lightingState: {
      label: "Circadian Daylight Wash",
      level: 95,
      colorTemp: "5500K Crisp White",
      modeName: "Solar Tracking",
      glowClass: "from-sky-100/30 via-amber-50/15 to-transparent",
      overlayGradient:
        "radial-gradient(ellipse at 30% 20%, rgba(240, 248, 255, 0.25), transparent 70%)",
    },
    curtainState: {
      label: "Window Glazing",
      percentage: 100,
      status: "Open (100% Daylight)",
    },
    climateState: {
      tempC: 21.0,
      mode: "eco",
      label: "21.0°C • Eco Natural Cycle",
    },
    audioState: {
      status: "Morning Acoustic Resonance",
      source: "Lounge Stream (24-bit)",
      active: true,
    },
    securityState: {
      status: "Perimeter Disarmed • Entry Permitted",
      mode: "unarmed",
      isLocked: false,
    },
    devices: [
      {
        name: "Circadian Lighting",
        category: "lighting",
        status: "5500K Daylight Sync",
        metric: "95% Output",
        active: true,
      },
      {
        name: "Side Window Glazing",
        category: "curtains",
        status: "Fully Open to Skyline",
        metric: "Open",
        active: true,
      },
      {
        name: "Dual-Zone HVAC",
        category: "climate",
        status: "Passive Eco Airflow",
        metric: "21.0°C",
        active: true,
      },
      {
        name: "Lossless Audio",
        category: "audio",
        status: "Acoustic Resonance",
        metric: "Playing",
        active: true,
      },
    ],
    cssVariables: {
      lightingBrightness: "1.10",
      lightingWarmth: "0deg",
      draperyWidth: "0%",
      ambientOpacity: "0.85",
    },
  },
  {
    id: "evening",
    name: "Evening Mode",
    subtitle: "18:00 — 22:00",
    headline: "Warm Amber Glow & Relaxed Elegance",
    description:
      "As dusk approaches, concealed cove lighting warms to 2700K. The city skyline sparkles through the open window, complemented by relaxing multi-zone soundscapes and comfortable living warmth.",
    image: "/assets/control-home.jpg",
    lightingState: {
      label: "Warm Architectural Coves",
      level: 70,
      colorTemp: "2700K Soft Amber",
      modeName: "Evening Lounge",
      glowClass: "from-amber-500/25 via-amber-700/10 to-transparent",
      overlayGradient:
        "radial-gradient(ellipse at 70% 30%, rgba(255, 160, 40, 0.22), transparent 65%)",
    },
    curtainState: {
      label: "Side Window",
      percentage: 100,
      status: "Open (Twilight View)",
    },
    climateState: {
      tempC: 21.5,
      mode: "comfort",
      label: "21.5°C • Evening Comfort",
    },
    audioState: {
      status: "Hi-Fi Evening Lounge",
      source: "Living & Dining Sync",
      active: true,
    },
    securityState: {
      status: "Perimeter Auto-Armed • Entry Monitored",
      mode: "perimeter",
      isLocked: true,
    },
    devices: [
      {
        name: "Cove & Accent Fixtures",
        category: "lighting",
        status: "Warm 2700K Sunset Tone",
        metric: "70% Dimmer",
        active: true,
      },
      {
        name: "Side Window Glazing",
        category: "curtains",
        status: "Open to City Panorama",
        metric: "Open",
        active: true,
      },
      {
        name: "Multi-Room Audio",
        category: "audio",
        status: "Hi-Fi 96kHz Lossless",
        metric: "Playing",
        active: true,
      },
      {
        name: "Biometric Deadbolt",
        category: "security",
        status: "Perimeter Locked",
        metric: "Secured",
        active: true,
      },
    ],
    cssVariables: {
      lightingBrightness: "1.00",
      lightingWarmth: "5deg",
      draperyWidth: "0%",
      ambientOpacity: "0.90",
    },
  },
  {
    id: "movie",
    name: "Movie Mode",
    subtitle: "Cinema Experience",
    headline: "Immersive Cinema Ambiance & Accent Glow",
    description:
      "Ceiling fixtures gently dim into an intimate cinema setting with subtle indigo cove illumination. Spatial audio engages Dolby Atmos surround, creating an authentic private screening theater.",
    image: "/assets/control-home.jpg",
    lightingState: {
      label: "Cinema Indigo Cove Glow",
      level: 25,
      colorTemp: "Cinema Indigo Glow (2000K)",
      modeName: "Cinema Backlight",
      glowClass: "from-indigo-900/35 via-black/60 to-black/80",
      overlayGradient:
        "radial-gradient(ellipse at 50% 60%, rgba(99, 102, 241, 0.24), transparent 65%), rgba(0, 0, 0, 0.42)",
    },
    curtainState: {
      label: "Cinema Setting",
      percentage: 100,
      status: "Low-Glare Skyline Ambiance",
    },
    climateState: {
      tempC: 20.5,
      mode: "comfort",
      label: "20.5°C • Cinema Air Conditioning",
    },
    audioState: {
      status: "Spatial Surround Processing",
      source: "Dolby Atmos 7.1.4",
      active: true,
    },
    securityState: {
      status: "Whole Villa Perimeter Armed",
      mode: "perimeter",
      isLocked: true,
    },
    devices: [
      {
        name: "Ambient Downlights",
        category: "lighting",
        status: "Subtle Indigo Edge Glow",
        metric: "25% Dim",
        active: true,
      },
      {
        name: "Side Window Glazing",
        category: "curtains",
        status: "Skyline Ambient Filter",
        metric: "Open",
        active: true,
      },
      {
        name: "Cinema Spatial Audio",
        category: "audio",
        status: "Spatial Stream Active",
        metric: "7.1.4 Sync",
        active: true,
      },
      {
        name: "Intercom & Doorbells",
        category: "security",
        status: "Silent Chime Routed to Phone",
        metric: "Silent Mode",
        active: true,
      },
    ],
    cssVariables: {
      lightingBrightness: "0.76",
      lightingWarmth: "-8deg",
      draperyWidth: "0%",
      ambientOpacity: "0.90",
    },
  },
  {
    id: "night",
    name: "Night Mode",
    subtitle: "23:00 — 06:30",
    headline: "Warm Ambient Night Light & Peaceful Rest",
    description:
      "The living room dims into a soft, visible warm nighttime illumination. Gentle 2200K cove warmth keeps the room beautifully visible for nighttime movement without waking the residence.",
    image: "/assets/control-home.jpg",
    lightingState: {
      label: "Warm Ambient Night Light",
      level: 15,
      colorTemp: "Warm Pathway Light (2200K)",
      modeName: "Night Beacon",
      glowClass: "from-amber-900/25 via-black/60 to-black/75",
      overlayGradient:
        "radial-gradient(ellipse at 70% 65%, rgba(255, 175, 45, 0.22), transparent 60%), rgba(10, 12, 22, 0.38)",
    },
    curtainState: {
      label: "Side Window",
      percentage: 100,
      status: "Open (City Night Skyline)",
    },
    climateState: {
      tempC: 19.5,
      mode: "rest",
      label: "19.5°C • Deep Rest Cycle",
    },
    audioState: {
      status: "All AV Zones Silent",
      source: "Muted",
      active: false,
    },
    securityState: {
      status: "Full Night Sentry Active • 2K Radar Armed",
      mode: "night",
      isLocked: true,
    },
    devices: [
      {
        name: "Pathway & Cove Illumination",
        category: "lighting",
        status: "Warm Ambient 2200K Night Glow",
        metric: "15% Visible",
        active: true,
      },
      {
        name: "Side Window Glazing",
        category: "curtains",
        status: "Night Skyline Open",
        metric: "Open",
        active: true,
      },
      {
        name: "HVAC Quiet Mode",
        category: "climate",
        status: "Whisper 18dB Rest Cycle",
        metric: "19.5°C",
        active: true,
      },
      {
        name: "Perimeter Sentry",
        category: "security",
        status: "Radar & Deadbolts Armed",
        metric: "Armed Night",
        active: true,
      },
    ],
    cssVariables: {
      lightingBrightness: "0.68",
      lightingWarmth: "10deg",
      draperyWidth: "0%",
      ambientOpacity: "0.85",
    },
  },
  {
    id: "away",
    name: "Away Mode",
    subtitle: "Departure",
    headline: "All Systems Powered Off • Motorized Curtains Closed",
    description:
      "All lights, displays, and audio are completely turned off to cut phantom energy. Motorized shades close over the side window for privacy and thermal protection, while biometric deadbolts lock and 360° radar sentry activates.",
    image: "/assets/control-home.jpg",
    lightingState: {
      label: "All Circuits Turned Off",
      level: 0,
      colorTemp: "All Lights Off (0W)",
      modeName: "Standby Off",
      glowClass: "from-black/70 to-black/85",
      overlayGradient: "rgba(0, 0, 0, 0.58)",
    },
    curtainState: {
      label: "Side Window Shades",
      percentage: 0,
      status: "Curtains Closed on Window",
    },
    climateState: {
      tempC: 24.0,
      mode: "eco",
      label: "24.0°C • Eco Standby (0W Phantom Cut)",
    },
    audioState: {
      status: "Powered Off (0W Standby)",
      source: "Disconnected",
      active: false,
    },
    securityState: {
      status: "Fortress Sentry Armed • Radar Sonar Active",
      mode: "away",
      isLocked: true,
    },
    devices: [
      {
        name: "All Lighting Circuits",
        category: "lighting",
        status: "Switched Off Completely",
        metric: "OFF",
        active: false,
      },
      {
        name: "Side Window Curtains",
        category: "curtains",
        status: "Motorized Shades Fully Closed",
        metric: "Closed",
        active: true,
      },
      {
        name: "AV & Sound Systems",
        category: "audio",
        status: "0W Phantom Power Cut",
        metric: "OFF",
        active: false,
      },
      {
        name: "Biometric Deadbolts",
        category: "security",
        status: "All Portals Locked & Armed",
        metric: "ARMED",
        active: true,
      },
    ],
    cssVariables: {
      lightingBrightness: "0.40",
      lightingWarmth: "0deg",
      draperyWidth: "100%",
      ambientOpacity: "0.90",
    },
  },
];

