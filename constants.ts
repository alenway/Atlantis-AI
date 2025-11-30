import { Crosshair, Fish, ShieldAlert, Zap } from "lucide-react";
import {
    CaseStudy,
    IntegrationStep,
    RoadmapItem,
    StatItem,
    TeamMember,
    UseCase,
} from "./types";

export const NAV_LINKS = [
    { label: "SOLUTIONS", href: "#solutions" },
    { label: "PLATFORM", href: "#technology" },
    { label: "INTEGRATION", href: "#integration" },
    { label: "COMPANY", href: "#team" },
];

export const TEAM: TeamMember[] = [
    {
        name: "Anas Mev",
        role: "CEO / STRATEGY",
        bio: "Defense-tech specialist. Ex-Samarthya Capital. Driving the dual-use operational strategy.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    },
    {
        name: "Dr. Sudhir Silwal",
        role: "CTO / SIGNALS",
        bio: "15+ years AI/ML & Signal Processing. Architect of the core acoustic recognition engine.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
    },
    {
        name: "Capt. Sunil Tyagi",
        role: "NAVAL ADVISOR",
        bio: "27 yrs Indian Navy. Submarine stealth designer. PhD in ML Acoustics. Domain Authority.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
];

export const ROADMAP: RoadmapItem[] = [
    {
        phase: "PHASE_I",
        timeline: "DEPLOYMENT",
        milestones: [
            "Navy/iDEX Pilot Secured",
            "Algorithm Optimization",
            "Field Validation",
        ],
    },
    {
        phase: "PHASE_II",
        timeline: "EXPANSION",
        milestones: [
            "Civil Sector Integration",
            "Commercial SDK Launch",
            "Real-time Command Dashboard",
        ],
    },
    {
        phase: "PHASE_III",
        timeline: "SCALE",
        milestones: [
            "Synthetic Data Engine",
            "Global OEM Licensing",
            "Full-stack Sensor Platform",
        ],
    },
];

export const TRUST_METRICS: StatItem[] = [
    {
        label: "VALIDATED ACCURACY",
        value: "89.5%",
        description:
            "On complex naval datasets vs standard 60% industry average.",
    },
    {
        label: "CONTRACT SECURED",
        value: "$6M",
        description: "Technology validated by US Navy Contract (Spear AI).",
    },
    {
        label: "LATENCY",
        value: "<200ms",
        description: "Real-time edge processing for immediate threat response.",
    },
];

export const USE_CASES: Record<string, UseCase[]> = {
    DEFENSE: [
        {
            id: "asw",
            title: "Anti-Submarine Warfare",
            icon: Crosshair,
            description:
                "Autonomous detection of silent adversaries in high-noise littoral zones.",
            capabilities: [
                "Signature Classification",
                "Trajectory Prediction",
                "Decoy Discrimination",
            ],
            image: "/submarine.jpg",
            // Submarine image
        },
        {
            id: "port",
            title: "Port Security & Diver Detection",
            icon: ShieldAlert,
            description:
                "Protect critical naval bases and harbors from intrusion by divers or UUVs.",
            capabilities: [
                "Breathing Apparatus Detection",
                "Small Drone Tracking",
                "Perimeter Alerts",
            ],
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop", // Diver image
        },
    ],
    COMMERCIAL: [
        {
            id: "energy",
            title: "Offshore Infrastructure",
            icon: Zap,
            description:
                "Prevent catastrophic failures in pipelines and wind farms through acoustic monitoring.",
            capabilities: [
                "Leak Detection",
                "Structural Integrity",
                "Third-party Intrusion",
            ],
            image: "/offshore.jpg", // Offshore Rig
        },
        {
            id: "aquaculture",
            title: "Smart Aquaculture",
            icon: Fish,
            description:
                "Optimize yields and protect stock with non-invasive acoustic intelligence.",
            capabilities: [
                "Biomass Estimation",
                "Predator Alerts",
                "Feeding Activity Monitoring",
            ],
            image: "/fishing.jpg", // Underwater school of fish
        },
    ],
};

export const INTEGRATION_STEPS: IntegrationStep[] = [
    {
        title: "SIGNAL INGESTION",
        description:
            "Hardware-agnostic input. Connects to existing hydrophone arrays, sonobuoys, or fiber-optic sensing cables via standard APIs.",
    },
    {
        title: "EDGE PROCESSING",
        description:
            "Our lightweight containerized AI engine deploys directly on the buoy or vessel. No heavy cloud uplink required.",
    },
    {
        title: "COMMAND OUTPUT",
        description:
            "Structured intelligence is fed into your existing Common Operating Picture (COP) or our dashboard via JSON/REST API.",
    },
];

export const SONAR_PRESETS = [
    "Low frequency mechanical hum at 50Hz, constant amplitude, no biological markers.",
    "High pitched variable clicks, rapid frequency modulation, likely biological (pod).",
    "Broadband noise with rhythmic cavitation increasing in intensity. Surface vessel.",
    "Sharp, high-energy impulse detected. Short duration. Potential seismic event.",
];

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: "CS_001",
        client: "NAVAL SPECIAL WARFARE (ANONYMIZED)",
        title: "LITTORAL ZONE SURVEILLANCE",
        sector: "DEFENSE",
        challenge:
            "High false-positive rates (95%) in busy harbor environments due to biological noise (snapping shrimp) and civilian traffic, masking diver incursions.",
        solution:
            "Deployed SONARMind Edge nodes on 5 distributed buoys. Tuned acoustic models to filter biologic noise profiles in real-time.",
        stats: [
            { label: "NOISE REDUCTION", value: "99%" },
            { label: "DETECTION RANGE", value: "800m" },
            { label: "FALSE ALARMS", value: "ZERO" },
        ],
        image: "/surveillance.jpg", // Buoy / Water Surface
    },
    {
        id: "CS_002",
        client: "NORTH SEA WIND CONSORTIUM",
        title: "STRUCTURAL HEALTH MONITORING",
        sector: "COMMERCIAL",
        challenge:
            "Manual inspection of subsea monopiles is costly and infrequent. Micro-fractures often go undetected until they cause critical instability.",
        solution:
            "Retrofitted passive acoustic sensors on turbine foundations. AI monitors for frequency shifts indicating structural fatigue.",
        stats: [
            { label: "REPAIR SAVINGS", value: "$2.4M" },
            { label: "EARLY WARNING", value: "3 WEEKS" },
            { label: "UPTIME", value: "100%" },
        ],
        image: "/Windmills on Grass Field.jpg", // Wind Farm
    },
    {
        id: "CS_003",
        client: "TRANS-ATLANTIC TELECOM",
        title: "SUBSEA CABLE PROTECTION",
        sector: "INFRASTRUCTURE",
        challenge:
            "Rising incidents of cable severance by trawlers and potential sabotage. Current DAS (Distributed Acoustic Sensing) systems overwhelmed operators with raw data.",
        solution:
            'Integrated Atlantis AI layer over existing DAS fiber interrogators to classify "Anchor Drag" vs "Intentional Cut" in milliseconds.',
        stats: [
            { label: "RESPONSE TIME", value: "<5s" },
            { label: "COVERAGE", value: "100km" },
            { label: "ACCURACY", value: "94%" },
        ],
        image: "/Diving Suit Near Sunken Ship.jpg", // Diver / Cable work
    },
];
