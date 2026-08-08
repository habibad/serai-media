export type Service = {
  number: string;
  id: string;
  name: string;
  promise: string;
  description: string;
  included: string[];
  platforms?: { label: string; value: string };
  bestFor: string;
};

export const services: Service[] = [
  {
    number: "01",
    id: "brand-identity",
    name: "Brand Identity",
    promise: "Presence That Matches Your Product",
    description:
      "Your brand should look as good as your product performs. We build complete visual identity systems — not just a logo — so every touchpoint, from your Instagram grid to your storefront sign, tells the same story: this is a business that takes itself seriously.",
    included: [
      "Brand discovery workshop, market & competitor research",
      "Brand strategy, positioning & messaging",
      "Logo design and full logo system",
      "Color palette, typography, and visual identity system",
      "Brand guidelines — a brand book your whole team can use",
      "Digital and print brand assets, including ongoing graphic design",
    ],
    bestFor:
      "businesses launching new, rebranding, or outgrowing a DIY identity.",
  },
  {
    number: "02",
    id: "social-media-management",
    name: "Social Media Management",
    promise: "Consistent Visibility, Without You Doing It Yourself",
    description:
      "You don't need to become a content creator. You need someone who already thinks like one — running your presence with the same care you put into your product, every week, without you having to remember to post.",
    included: [
      "Monthly content strategy built around your business goals",
      "Original content design: static posts, Reels, carousels",
      "Caption writing and call-to-action strategy",
      "Hashtag and keyword research, so you're found, not just seen",
      "Full social kit: bio, banners, covers, account optimization",
      "Page evaluation and a consistent visual theme",
      "Scheduling and monthly performance reporting",
    ],
    platforms: {
      label: "Platforms",
      value:
        "Instagram, Facebook, LinkedIn, TikTok, Pinterest, X, Threads, YouTube Shorts, Google Business Profile",
    },
    bestFor:
      "retail, restaurant, wellness, and fitness brands who need a professional presence — not a part-time employee learning as they go.",
  },
  {
    number: "03",
    id: "influencer-management",
    name: "Influencer Management",
    promise: "The Right Voices, Saying the Right Things",
    description:
      "Word of mouth is the oldest form of marketing there is — a serai's entire reason for existing. We modernize it: sourcing, vetting, and managing creator and influencer partnerships so the people talking about your brand actually reflect it.",
    included: [
      "Creator sourcing and vetting, matched to your brand and audience",
      "Outreach, negotiation, and relationship management",
      "Campaign briefing, so content stays on-brand",
      "User-generated content (UGC) curation for your own channels",
      "Performance tracking on reach, engagement, and content usage rights",
    ],
    platforms: {
      label: "Specialized in",
      value:
        "Beauty & cosmetics, health & wellness, real estate, food & beverage — with capacity for other premium categories.",
    },
    bestFor:
      "brands ready to extend their reach through trusted voices, not just paid reach.",
  },
  {
    number: "04",
    id: "meta-ads-management",
    name: "Meta Ads Management",
    promise: "Predictable New Customers, Not Luck",
    description:
      "Paid social puts your business in front of exactly the people most likely to become customers — and keeps bringing them back.",
    included: [
      "Facebook & Instagram Ads Manager setup",
      "Campaign strategy built around your specific goals",
      "Interest-based targeting and audience research",
      "Pixel & Conversions API (CAPI) setup",
      "Retargeting and lookalike audience campaigns",
      "Ongoing performance monitoring and optimization",
    ],
    bestFor:
      "brands ready to turn visibility into bookings, orders, or foot traffic.",
  },
  {
    number: "05",
    id: "fractional-cmo",
    name: "Fractional CMO",
    promise: "A Senior Marketing Mind, Without the Full-Time Hire",
    description:
      "Some decisions are too important to hand to a freelancer and too early-stage to justify a full-time marketing director. A fractional CMO gives you strategic marketing leadership — quarterly planning, budget guidance, brand oversight — at a fraction of the cost.",
    included: [
      "Quarterly marketing strategy and roadmap",
      "Budget planning and channel prioritization",
      "Oversight of every Serai Media workstream as one coherent strategy",
      "Direct access for high-level decisions, not just execution",
    ],
    bestFor:
      "growing businesses that need a marketing partner in the room, not just a vendor.",
  },
];

export const navLinks = [
  { label: "The Story", href: "#story" },
  { label: "What We Do", href: "#services" },
  { label: "Proof", href: "#proof" },
  { label: "Apply", href: "#apply" },
];
