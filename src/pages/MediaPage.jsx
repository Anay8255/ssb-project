import React, { useState, useMemo } from 'react';
import { useModal } from '../context/ModalContext';
import {
  Newspaper,
  Calendar,
  Sparkles,
  Search,
  X,
  ArrowRight,
  User,
  Share2,
  Download,
  Car,
  CheckCircle2,
  ExternalLink,
  BookOpen,
  ZoomIn,
  Image as ImageIcon,
  Film,
  Camera,
  Layers,
  Award
} from 'lucide-react';

export const MediaPage = () => {
  const { openSiteVisitModal, openEnquiryModal, openLightbox } = useModal();
  const [activeTab, setActiveTab] = useState('NEWS'); // 'NEWS' | 'EVENTS' | 'VIDEOS'
  const [newsFilter, setNewsFilter] = useState('ALL');
  const [eventCategory, setEventCategory] = useState('ALL');
  const [search, setSearch] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // 1. Official Newspaper Clippings & Press Coverage (Extracted live from ssbinfraproject.com/media)
  const newsClippings = [
    {
      id: "clip_1",
      title: "SSB Group In Headlines — Regional Press Feature",
      publication: "Dainik Jagran / Amar Ujala",
      date: "August 2026",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121876722-0rxypp.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE4NzY3MjItMHJ4eXBwLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjE4NzgsImV4cCI6MjEwMjQ4MTg3OH0.ZXqvZR9eDwrVf-J_bCXGbERFL32YVR9v1a7UyM9qu9Y",
      caption: "Official newspaper publication highlighting SSB Group's planned township development and infrastructural benchmarks in Eastern Uttar Pradesh."
    },
    {
      id: "clip_2",
      title: "Real Estate Leadership & Growth Milestone Report",
      publication: "Hindustan / Regional Media",
      date: "July 2026",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121901538-3yqjku.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE5MDE1MzgtM3lxamt1LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjE5MDMsImV4cCI6MjEwMjQ4MTkwM30.i4YDS0tFgP1igDmdDKjeO_UuqoN6jzR9pJGEmSfO36E",
      caption: "Press coverage on timely project delivery, high-quality construction materials, and master planned urban corridors."
    },
    {
      id: "clip_3",
      title: "Township Launch & Development Corridor Watch",
      publication: "Uttar Pradesh Infra Times",
      date: "June 2026",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121915155-wonb6g.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE5MTUxNTUtd29uYjZnLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjE5MTcsImV4cCI6MjEwMjQ4MTkxN30.tP0tCOtki_mUKfi6wUHmHQcFpUNen5-Nn_parlqd0Y4",
      caption: "Special report on residential expansion and organized group housing schemes along Varanasi Ring Road."
    },
    {
      id: "clip_4",
      title: "Project Handover & Homeowner Possession Ceremonies",
      publication: "Patrika / Daily News",
      date: "May 2026",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121648777-gins9g.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE2NDg3NzctZ2luczlnLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjE2NTAsImV4cCI6MjEwMjQ4MTY1MH0.hOljyHkGRL1b0_ehBhMsWJueEANbxoP1FC8UuS7VS68",
      caption: "Coverage of possession certificate distribution and handover celebrations for residential township families."
    },
    {
      id: "clip_5",
      title: "Monolithic Aluminium Formwork Engineering Innovation",
      publication: "Construction & Engineering Review",
      date: "May 2026",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121456749-047pwi.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE0NTY3NDktMDQ3cHdpLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjE0NTksImV4cCI6MjEwMjQ4MTQ1OX0.0r219G8IPVWDaEvTCPAZqUbE5xJeTyih6L5WZq9UDYI",
      caption: "Technical news article detailing the modern monolithic aluminium formwork technology implemented across SSB townships."
    },
    {
      id: "clip_6",
      title: "Affordable Housing & PMAY Deliveries Across Varanasi",
      publication: "Jan Varta / Dainik Jagran",
      date: "April 2026",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121692053-5gzhql.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE2OTIwNTMtNWd6aHFsLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjE2OTQsImV4cCI6MjEwMjQ4MTY5NH0.7Hf6gkea8ycubdI95z42gmUVkN-oSu5GlzAoHk4jbwo",
      caption: "Public feature celebrating affordable housing handovers with 120+ verified families receiving possession keys."
    },
    {
      id: "clip_7",
      title: "SSB Group Corporate Milestone & Awards",
      publication: "National Real Estate Chronicle",
      date: "March 2026",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121706388-cf1j5t.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE3MDYzODgtY2YxajV0LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjE3MDgsImV4cCI6MjEwMjQ4MTcwOH0.kEAsFlUjRC5e1TSvGszMP3eyPbSKBZ49P6_tUdQOscs",
      caption: "National real estate spotlight on ISO-certified quality practices and transparent developer accountability."
    },
    {
      id: "clip_8",
      title: "Varanasi Growth Corridor & Infrastructure Vision",
      publication: "Economic & Real Estate Daily",
      date: "February 2026",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121735819-71trnj.jfif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE3MzU4MTktNzF0cm5qLmpmaWYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg3MTIxNzM3LCJleHAiOjIxMDI0ODE3Mzd9.LePuvERf82iijEWw0Q-Y5EUOUCjqD8k-joO4ynw-b7Q",
      caption: "Infrastructure feature focusing on high-speed connectivity to Babatpur International Airport and Ring Road."
    },
    {
      id: "clip_9",
      title: "Customer Handover Ceremony & Possession Distribution",
      publication: "Regional News Bureau",
      date: "January 2026",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121775878-atkjab.jfif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE3NzU4NzgtYXRramFiLmpmaWYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg3MTIxNzc4LCJleHAiOjIxMDI0ODE3Nzh9.MUH8U2V6eiNgeEprBKM_-ZuaQmIVKiO7sQW8diVPOV4",
      caption: "Photographs and media coverage of home buyers receiving allotment letters and keys."
    },
    {
      id: "clip_10",
      title: "UP-RERA Compliance & Consumer Trust Standard",
      publication: "State Infra Review",
      date: "December 2025",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121798691-8urrk8.jfif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE3OTg2OTEtOHVycms4LmpmaWYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg3MTIxODAwLCJleHAiOjIxMDI0ODE4MDB9.AS5JBeRW_FyvDj7Tb9CTTsGVe5L7oKxE2lDnZskIzfo",
      caption: "Press editorial covering SSB Group's 100% verified compliance with Real Estate Regulatory Authority standards."
    },
    {
      id: "clip_11",
      title: "Township Master Planning & Green Open Expanses",
      publication: "Urban Living Feature",
      date: "November 2025",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121813691-qo7mud.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE4MTM2OTEtcW83bXVkLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjE4MTUsImV4cCI6MjEwMjQ4MTgxNX0.6eDf7ShQF1fTk4LHF9x_RXi1p7_RSyOpBtgmsHhTodQ",
      caption: "Architectural news feature on 70% open green landscaped spaces and modern lifestyle amenities."
    },
    {
      id: "clip_12",
      title: "Commercial & High-Street Retail Expansion",
      publication: "Commercial Real Estate Digest",
      date: "October 2025",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121826442-ggj816.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE4MjY0NDItZ2dqODE2LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjE4MjgsImV4cCI6MjEwMjQ4MTgyOH0.5QFRbFTQwh3hgduh7kD-tK1RBGYq6cGnETPiEtlUyRk",
      caption: "Business press release highlighting strategic retail hubs and commercial properties developed by SSB Group."
    },
    {
      id: "clip_13",
      title: "Community Social Responsibility & Healthcare Support",
      publication: "CSR & Community News",
      date: "September 2025",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121848911-c4ws2c.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE4NDg5MTEtYzR3czJjLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjE4NTAsImV4cCI6MjEwMjQ4MTg1MH0.TNm0F_FaXlpEjnUDBB5rz3-Kt3p2UD2UekRsD83iCag",
      caption: "Press documentation of healthcare, plantation, and community outreach drives conducted by the SSB foundation."
    },
    {
      id: "clip_14",
      title: "Excellence in Construction & Developer Recognition",
      publication: "Varanasi Today",
      date: "August 2025",
      tag: "Press Clipping",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787121862169-9bmzdq.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjE4NjIxNjktOWJtemRxLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjE4NjQsImV4cCI6MjEwMjQ4MTg2NH0.LoAzqUyS5YtmKtdVECuq5LgYFH60ZASopKtD6diujbQ",
      caption: "Coverage of builder leadership awards and infrastructure milestones attained across Eastern Uttar Pradesh."
    }
  ];

  // 2. Editorial Press Releases & In-Depth Articles
  const editorialNews = [
    {
      id: "media_pratham_lucknow",
      title: "Pratham: SSB Group's Signature Mixed-Use Commercial Destination in Lucknow",
      publication: "Commercial Real Estate Digest",
      date: "September 2026",
      summary: "Pratham marks SSB Group's strategic capital expansion into Lucknow with a state-of-the-art mixed-use commercial development designed for massive pedestrian footfall, high-visibility retail frontage, high-speed lift lobbies, and world-class glass facade architecture.",
      fullContent: "SSB Group has officially announced its milestone expansion into Lucknow with 'Pratham', a world-class mixed-use commercial and corporate hub situated along a premier high-growth economic corridor. Engineered to cater to premium retail brands, corporate headquarters, and high-footfall lifestyle spaces, Pratham features expansive double-height anchor showrooms, Grade-A office suites, modern high-speed elevators, 100% power backup, and multi-tier basement parking. The development reflects SSB Group's relentless commitment to architectural distinction, rapid construction timelines, and transparent UP-RERA certified standards.",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787284193395-14t94m.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcyODQxOTMzOTUtMTR0OTRtLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcyODQxOTUsImV4cCI6MjEwMjY0NDE5NX0.tsndMES8gtKIpCCZVl34NRQefdmJSxg97yG8UJK1_DM",
      category: "COMMERCIAL",
      tag: "Commercial Expansion",
      author: "SSB Corporate Communications",
      readTime: "4 min read",
      isFeatured: true
    },
    {
      id: "media_pratham_retail_layout",
      title: "Architectural Layout & High-Street Retail Spaces Unveiled for Pratham Lucknow",
      publication: "Uttar Pradesh Infra & Retail Journal",
      date: "August 2026",
      summary: "SSB Group has unveiled the master circulation layout and floor plans for Pratham Lucknow, featuring prime ground & first floor anchor retail showrooms (850 Sq. Ft.) and corporate executive suites (1,250 Sq. Ft.) on a prime growth corridor.",
      fullContent: "The architectural blueprints for Pratham Lucknow have been released by Chief Architect Nishant Shekhar, highlighting an advanced biophilic facade, seamless vehicular drop-off zones, and column-free retail layouts. Ground-floor anchor showrooms provide 30-foot clear frontage, maximizing brand visibility. Upper floors are reserved for boutique corporate offices with customizable modular floor plates, dedicated conference facilities, and rooftop breakout terraces designed for modern enterprise agility.",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948584190-vtay4g.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg1ODQxOTAtdnRheTRnLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg1ODYsImV4cCI6MjEwMjMwODU4Nn0.3hXbNSUYhuCt-ICFEf7OQD74bpGQ4rFH0oX1dREue_Y",
      category: "ARCHITECTURE",
      tag: "Architecture & Blueprints",
      author: "Nishant Shekhar, Chief Architect",
      readTime: "3 min read"
    },
    {
      id: "media_sai_city_formwork",
      title: "Shree Sai City: Varanasi's First Monolithic Aluminium Formwork Green Township",
      publication: "Construction & Infrastructure Times",
      date: "August 2026",
      summary: "SSB Infra Projects is the very first in Varanasi to incorporate the monolithic Aluminum Formwork System into multi-storied RCC construction. Pouring walls and slabs simultaneously eliminates masonry, guarantees zero water seepage, resists seismic tremors, and delivers acoustic insulation across 18 acres.",
      fullContent: "By adopting the globally acclaimed Aluminium Formwork Monolithic Construction methodology, SSB Infra Projects has set a benchmark for engineering excellence in Eastern Uttar Pradesh. Unlike traditional brick-and-mortar masonry, this precision engineering system casts reinforced concrete walls and slabs in a single monolithic pour. The result is jointless, leak-proof structural integrity, superior seismic resistance, silky-smooth wall finishes, and an accelerated delivery cycle that hands over homes ahead of schedule.",
      image: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948497295-9v1551.png",
      category: "ENGINEERING",
      tag: "Engineering & Innovation",
      author: "SSB Technical Desk",
      readTime: "5 min read"
    },
    {
      id: "media_sai_city_floorplans",
      title: "Refined by Nature's Opulence: Inside Shree Sai City Group Housing Floor Plans & Architecture",
      publication: "Varanasi Real Estate Review",
      date: "July 2026",
      summary: "Explore the VDA-approved and UP RERA registered (UPRERAPRJ923469) 2 BHK (1,100.08 Sq. Ft.) and 3 BHK (1,351.31 Sq. Ft.) residences designed with 100% Vastu compliance, cross-ventilation, panoramic decks, and microclimate-controlled evergreen landscaping.",
      fullContent: "Shree Sai City Group Housing represents the epitome of wellness-centric residential design in Varanasi. Each apartment layout is meticulously mapped to ensure 100% Vastu alignment, generous cross-ventilation, and maximum natural daylight penetration. With 70% open green expanses, residents enjoy dedicated jogging loops, an Olympic-length swimming pool, a multi-tier security perimeter, and private sundeck balconies overlooking manicured Japanese zen gardens.",
      image: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948517426-765q1q.png",
      category: "ARCHITECTURE",
      tag: "Architecture & Design",
      author: "Nishant Shekhar, Chief Architect",
      readTime: "4 min read"
    },
    {
      id: "media_sai_city_water_mgmt",
      title: "316 KLD Sustainable Water Management & 80% Recycling Pioneered at Shree Sai City",
      publication: "Eco Living & Green Built Environment",
      date: "May 2026",
      summary: "With a homegrown domestic water capacity of 316.687 KLD, Shree Sai City incorporates an advanced Sewage Treatment Plant (STP) recovering 80% water, alongside extensive rainwater harvesting and dual power supply with rooftop solar.",
      fullContent: "Demonstrating ESG leadership in township infrastructure, SSB Group has commissioned a state-of-the-art 316 KLD closed-loop water treatment facility at Shree Sai City. Utilizing tertiary multi-media filtration and UV disinfection, 80% of domestic wastewater is purified for landscape irrigation and dual-flush cooling systems. Deep-bore rainwater recharging pits across the 18-acre master layout ensure ground water replenishment, making the township a beacon of sustainable living in Varanasi.",
      image: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948529276-aspkwi.png",
      category: "SUSTAINABILITY",
      tag: "Sustainability & Green Living",
      author: "Environmental Engineering Team",
      readTime: "4 min read"
    }
  ];

  // 3. Official Corporate Events & Media Gallery (Extracted from ssbinfraproject.com/media)
  const mediaEvents = [
    {
      id: "evt_mrs_banaras_1",
      title: "Sponsoring Mrs. Banaras — Pageant & Cultural Showcase",
      category: "Sponsorship & Culture",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787122802658-gtm4gl.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjI4MDI2NTgtZ3RtNGdsLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjI4MDQsImV4cCI6MjEwMjQ4MjgwNH0.gZzwDtvqrjTVQTBonPO2S6si7n1yIlYYWhM1itUt7nA",
      date: "2026"
    },
    {
      id: "evt_mrs_banaras_2",
      title: "Sponsoring Mrs. Banaras — Award Ceremony",
      category: "Sponsorship & Culture",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787122822731-9jbmlo.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjI4MjI3MzEtOWpibWxvLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjI4MjQsImV4cCI6MjEwMjQ4MjgyNH0.b5uiPN2Iv-6XH7ZgOaUFs7MgqXxJGibNf0fym2wtTmg",
      date: "2026"
    },
    {
      id: "evt_mrs_banaras_3",
      title: "Sponsoring Mrs. Banaras — Stage Presentation",
      category: "Sponsorship & Culture",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787122848904-ofg3qc.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjI4NDg5MDQtb2ZnM3FjLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjI4NTEsImV4cCI6MjEwMjQ4Mjg1MX0.j3FYwSYF0r2u-UgtqvnLkR9U8XwiNEi3rKOq3B_6C0Y",
      date: "2026"
    },
    {
      id: "evt_radisson_meet_1",
      title: "Annual Company Leadership Meet at Hotel Radisson Mall Road",
      category: "Corporate Meets",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787122967816-k0pvcr.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjI5Njc4MTYtazBwdmNyLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjI5NjksImV4cCI6MjEwMjQ4Mjk2OX0.0ni79HcXwQXmoDVCoi3v_QUgm68jhOpAE8VjXj_oLZY",
      date: "2026"
    },
    {
      id: "evt_radisson_meet_2",
      title: "Executive Strategic Planning Session — Hotel Radisson",
      category: "Corporate Meets",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787122981580-9lc892.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjI5ODE1ODAtOWxjODkyLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjI5ODMsImV4cCI6MjEwMjQ4Mjk4M30.WaD1amMIjVlofc3SpURuEPNExtWDS1weHbNcWszT--4",
      date: "2026"
    },
    {
      id: "evt_swastik_1",
      title: "Swastik Gardenia Project Showcase & Channel Partner Meet",
      category: "Project Launches",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787123014933-vrpz5x.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjMwMTQ5MzMtdnJwejV4LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjMwMTYsImV4cCI6MjEwMjQ4MzAxNn0.NAU-cSp34acOCj4ih_tNkmbI8UasA8war9f7RXr04_0",
      date: "2026"
    },
    {
      id: "evt_swastik_2",
      title: "Swastik Gardenia Promotion & Public Expo",
      category: "Project Launches",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787123028989-jdtfm7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjMwMjg5ODktamR0Zm03LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjMwMzAsImV4cCI6MjEwMjQ4MzAzMH0.N27VhP48W8pdeuMBeQ-Y3k4k-O0k2LYvIvIpao2plko",
      date: "2026"
    },
    {
      id: "evt_inauguration_1",
      title: "SSB Corporate Headquarters Inauguration at Mall Road",
      category: "Inaugurations",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787123164261-rz0fgm.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjMxNjQyNjEtcnowZmdtLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjMxNjYsImV4cCI6MjEwMjQ4MzE2Nn0.XBIeDThSbvPqzNfsfortyajv9-viUQGVXkHeQcIWuQY",
      date: "2025"
    },
    {
      id: "evt_inauguration_2",
      title: "Corporate Office Puja & Ribbon Cutting Ceremony",
      category: "Inaugurations",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787123180005-5zf47c.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjMxODAwMDUtNXpmNDdjLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjMxODIsImV4cCI6MjEwMjQ4MzE4Mn0.tYpIKwHeMBNBuHd87T6ES4CcenpswuSA1zYOOPZRtKI",
      date: "2025"
    },
    {
      id: "evt_up_ki_baat_1",
      title: "UP Ki Baat Media Conclave & Infrastructure Forum",
      category: "Media Conclaves",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787123253061-zgfby7.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjMyNTMwNjEtemdmYnk3LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg3MTIzMjU1LCJleHAiOjIxMDI0ODMyNTV9.Xh46UYlYM1olr67g1MdjQ3X6bq-UmEBamq8fs8yOyzE",
      date: "2025"
    },
    {
      id: "evt_up_ki_baat_2",
      title: "UP Ki Baat — Leadership Panel Discussion",
      category: "Media Conclaves",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787123271413-c0wv24.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjMyNzE0MTMtYzB3djI0LmpwZWciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg3MTIzMjczLCJleHAiOjIxMDI0ODMyNzN9.IwJe1rMTgZhAogT4LBMhqs_FFF51uPPXNfagrbj9b58",
      date: "2025"
    },
    {
      id: "evt_corona_samman_1",
      title: "Corona Yoddha Samman — Healthcare CSR Honors",
      category: "CSR & Community",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787123364168-t2t1g7.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjMzNjQxNjgtdDJ0MWc3LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjMzNjYsImV4cCI6MjEwMjQ4MzM2Nn0.3QgRJsJJ5Z3CzQMuw4SU3uvSxtjOjfUNZu85GIMi-jg",
      date: "CSR Initiative"
    },
    {
      id: "evt_paudharopan_1",
      title: "Massive Tree Plantation Drive (Paudharopan) — 18-Acre Green Campus",
      category: "CSR & Community",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787123427121-z987cp.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjM0MjcxMjEtejk4N2NwLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjM0MjksImV4cCI6MjEwMjQ4MzQyOX0.bFjkoLBFt8dV8gxpxyMxjpkXw-7URBaChmfNj8zb6GI",
      date: "Eco Initiative"
    },
    {
      id: "evt_paudharopan_2",
      title: "Green Varanasi Initiative — Plantation Campaign",
      category: "CSR & Community",
      image: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1787123446010-3q4y3q.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODcxMjM0NDYwMTAtM3E0eTNxLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODcxMjM0NDgsImV4cCI6MjEwMjQ4MzQ0OH0.k-Uoqdc9Kdmpk5PUA6AkKa4TuqCfT7x0WeKCTo7ywt8",
      date: "Eco Initiative"
    }
  ];

  // Filtering news & editorial articles
  const filteredEditorial = useMemo(() => {
    return editorialNews.filter(item => {
      const matchesFilter = newsFilter === 'ALL' || item.category === newsFilter;
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase()) ||
        item.publication.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [editorialNews, newsFilter, search]);

  const filteredClippings = useMemo(() => {
    return newsClippings.filter(item => {
      return (
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.publication.toLowerCase().includes(search.toLowerCase()) ||
        item.caption.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [newsClippings, search]);

  const filteredEvents = useMemo(() => {
    return mediaEvents.filter(item => {
      const matchesCat = eventCategory === 'ALL' || item.category === eventCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [mediaEvents, eventCategory, search]);

  const eventCategories = ['ALL', 'Sponsorship & Culture', 'Corporate Meets', 'Project Launches', 'Inaugurations', 'Media Conclaves', 'CSR & Community'];

  const featuredItem = editorialNews.find(n => n.isFeatured) || editorialNews[0];

  const handleCopyLink = (title) => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="fade-in media-portal-page" style={{ paddingBottom: '6rem' }}>
      {/* Hero Header */}
      <section className="projects-hero">
        <img 
          src="/hero-sai-gaon.png" 
          alt="Media & Press — SSB Group" 
          className="projects-hero-bg-img" 
        />
        <div className="projects-hero-scrim"></div>
        <div className="projects-hero-grain"></div>
        <div className="container projects-hero-container">
          <div className="projects-hero-content">
            <div className="featured-badge-pill" style={{ background: 'rgba(220, 90, 50, 0.15)', color: '#FF7A50', border: '1px solid rgba(220, 90, 50, 0.3)' }}>
              <Sparkles size={13} />
              <span>MEDIA, PRESS &amp; EVENT ARCHIVE</span>
            </div>
            <h1 className="projects-hero-title">
              Media &amp; Press
            </h1>
            <p className="projects-hero-desc">
              Official newspaper clippings, corporate press releases, leadership conclaves, and high-definition architectural drone tours.
            </p>
            <div className="projects-hero-badges">
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">14+</span>
                <span className="about-hero-stat-lbl">Press Clippings</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">100%</span>
                <span className="about-hero-stat-lbl">UP-RERA Verified</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">Corporate</span>
                <span className="about-hero-stat-lbl">Event Gallery</span>
              </div>
              <div className="about-hero-stat-pill">
                <span className="about-hero-stat-num">4K UHD</span>
                <span className="about-hero-stat-lbl">Drone Tours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Navigation Tabs Switcher */}
      <div className="media-master-tabs-bar">
        <div className="container media-master-tabs-container">
          <div className="media-master-tabs-group">
            <button
              type="button"
              className={`media-master-tab-btn ${activeTab === 'NEWS' ? 'active' : ''}`}
              onClick={() => setActiveTab('NEWS')}
            >
              <Newspaper size={16} />
              <span>Press Releases &amp; Clippings</span>
              <span className="media-tab-badge">{newsClippings.length + editorialNews.length}</span>
            </button>

            <button
              type="button"
              className={`media-master-tab-btn ${activeTab === 'EVENTS' ? 'active' : ''}`}
              onClick={() => setActiveTab('EVENTS')}
            >
              <Camera size={16} />
              <span>Corporate Event Gallery</span>
              <span className="media-tab-badge">{mediaEvents.length}</span>
            </button>

            <button
              type="button"
              className={`media-master-tab-btn ${activeTab === 'VIDEOS' ? 'active' : ''}`}
              onClick={() => setActiveTab('VIDEOS')}
            >
              <Film size={16} />
              <span>Drone Video Tours</span>
              <span className="media-tab-badge">4K</span>
            </button>
          </div>

          {/* Search Input Box */}
          <div className="project-search-box" style={{ maxWidth: '380px' }}>
            <div className="project-search-input-wrap">
              <Search size={17} className="project-search-icon" />
              <input 
                type="text" 
                placeholder="Search media, press, or events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="project-search-input"
              />
              {search && (
                <button 
                  type="button" 
                  onClick={() => setSearch('')}
                  className="project-search-clear"
                  title="Clear search"
                  aria-label="Clear search query"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container" style={{ paddingTop: '2.5rem' }}>
        {/* =========================================================================
            TAB 1: NEWS & PRESS CLIPPINGS
            ========================================================================= */}
        {activeTab === 'NEWS' && (
          <div>
            {/* Editorial Top Story Spotlight */}
            {!search && newsFilter === 'ALL' && featuredItem && (
              <div className="media-spotlight-card" onClick={() => setActiveArticle(featuredItem)}>
                <div className="media-spotlight-media">
                  <img 
                    src={featuredItem.image} 
                    alt={featuredItem.title} 
                    className="media-spotlight-img"
                  />
                  <div className="media-spotlight-overlay" />
                  <div className="media-spotlight-badge">
                    <Sparkles size={13} className="text-brand" />
                    <span>FEATURED PRESS RELEASE</span>
                  </div>
                </div>

                <div className="media-spotlight-body">
                  <div>
                    <div className="media-meta-row">
                      <span className="media-pub-badge">
                        <Newspaper size={13} />
                        <span>{featuredItem.publication}</span>
                      </span>
                      <span className="media-date-badge">
                        <Calendar size={13} />
                        <span>{featuredItem.date}</span>
                      </span>
                    </div>

                    <h2 className="media-spotlight-title">
                      {featuredItem.title}
                    </h2>

                    <p className="media-spotlight-desc">
                      {featuredItem.summary}
                    </p>
                  </div>

                  <div className="media-spotlight-footer">
                    <div className="media-author-pill">
                      <User size={13} className="text-brand" />
                      <span>{featuredItem.author}</span>
                    </div>

                    <button type="button" className="media-read-btn">
                      <span>Read Full Release</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* In-Depth Editorial Articles Section */}
            <div style={{ marginBottom: '4rem' }}>
              <div className="media-section-title-box">
                <div className="featured-badge-pill" style={{ background: 'rgba(220, 90, 50, 0.1)', color: '#DC5A32', border: '1px solid rgba(220, 90, 50, 0.25)' }}>
                  <Newspaper size={13} />
                  <span>EDITORIAL PRESS RELEASES</span>
                </div>
                <h3 className="media-sub-heading">Featured Architectural &amp; Corporate Releases</h3>
              </div>

              <div className="media-news-grid">
                {filteredEditorial.map((item) => (
                  <div 
                    key={item.id}
                    className="media-card-luxury"
                    onClick={() => setActiveArticle(item)}
                  >
                    <div className="media-card-media">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="media-card-img"
                        loading="lazy"
                      />
                      <div className="media-card-overlay" />
                      <div className="media-card-top-bar">
                        <span className="media-tag-pill">{item.tag}</span>
                        <span className="media-readtime-pill">{item.readTime}</span>
                      </div>
                    </div>

                    <div className="media-card-body">
                      <div className="media-card-info-top">
                        <div className="media-card-pub-row">
                          <span className="media-card-pub-name">
                            <Newspaper size={12} className="text-brand flex-shrink-0" />
                            <span className="truncate">{item.publication}</span>
                          </span>
                          <span className="media-card-date">{item.date}</span>
                        </div>

                        <h3 className="media-card-title" title={item.title}>
                          {item.title}
                        </h3>

                        <p className="media-card-summary">
                          {item.summary}
                        </p>
                      </div>

                      <div className="media-card-info-bottom">
                        <div className="media-card-author-strip">
                          <span className="media-author-name">
                            <User size={12} className="text-slate flex-shrink-0" />
                            <span>{item.author}</span>
                          </span>
                          <span className="media-card-action-link">
                            <span>Read Article</span>
                            <ArrowRight size={13} className="media-arrow-icon" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Newspaper Clippings Grid (Extracted Live from ssbinfraproject.com/media) */}
            <div style={{ marginTop: '4rem', marginBottom: '4rem' }}>
              <div className="media-section-title-box">
                <div className="featured-badge-pill" style={{ background: 'rgba(15, 41, 74, 0.08)', color: '#0F294A', border: '1px solid rgba(15, 41, 74, 0.2)' }}>
                  <ImageIcon size={13} />
                  <span>OFFICIAL PRINT MEDIA ARCHIVE</span>
                </div>
                <h3 className="media-sub-heading">Newspaper Clippings &amp; Print Coverage</h3>
                <p style={{ color: '#64748B', fontSize: '0.92rem', margin: '0.35rem 0 0 0' }}>
                  High-resolution newspaper clippings covering project handovers, PMAY deliveries, and regional leadership in Eastern UP. Click to view full newspaper articles.
                </p>
              </div>

              <div className="media-clippings-grid">
                {filteredClippings.map((clip) => (
                  <div
                    key={clip.id}
                    className="media-clipping-card"
                    onClick={() => openLightbox(clip.image, clip.title, clip.caption)}
                  >
                    <div className="media-clipping-image-box">
                      <img 
                        src={clip.image} 
                        alt={clip.title} 
                        className="media-clipping-img"
                        loading="lazy"
                      />
                      <div className="media-clipping-hover-scrim">
                        <div className="media-clipping-zoom-btn">
                          <ZoomIn size={18} />
                          <span>View Full Newspaper Article</span>
                        </div>
                      </div>
                      <span className="media-clipping-badge">{clip.tag}</span>
                    </div>

                    <div className="media-clipping-info">
                      <div className="media-clipping-meta">
                        <span className="media-clipping-pub">{clip.publication}</span>
                        <span className="media-clipping-date">{clip.date}</span>
                      </div>
                      <h4 className="media-clipping-title">{clip.title}</h4>
                      <p className="media-clipping-caption">{clip.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: CORPORATE EVENTS & PHOTO GALLERY
            ========================================================================= */}
        {activeTab === 'EVENTS' && (
          <div>
            <div className="media-section-title-box" style={{ marginBottom: '1.5rem' }}>
              <div className="featured-badge-pill" style={{ background: 'rgba(220, 90, 50, 0.1)', color: '#DC5A32', border: '1px solid rgba(220, 90, 50, 0.25)' }}>
                <Camera size={13} />
                <span>CORPORATE &amp; COMMUNITY MOMENTS</span>
              </div>
              <h3 className="media-sub-heading">Event Highlights, Conclaves &amp; CSR Drives</h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', margin: '0.35rem 0 0 0' }}>
                Photographic highlights from corporate summits, channel partner meets, tree plantations, and cultural events.
              </p>
            </div>

            {/* Event Category Filter Pills */}
            <div className="featured-filter-pills-row" style={{ marginBottom: '2rem' }}>
              {eventCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setEventCategory(cat)}
                  className={`featured-filter-btn ${eventCategory === cat ? 'active' : ''}`}
                >
                  <span>{cat === 'ALL' ? 'All Events' : cat}</span>
                </button>
              ))}
            </div>

            <div className="media-events-gallery-grid">
              {filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="media-event-photo-card"
                  onClick={() => openLightbox(evt.image, evt.title, `${evt.category} • ${evt.date}`)}
                >
                  <img 
                    src={evt.image} 
                    alt={evt.title} 
                    className="media-event-img"
                    loading="lazy"
                  />
                  <div className="media-event-overlay">
                    <span className="media-event-cat-pill">{evt.category}</span>
                    <h4 className="media-event-title">{evt.title}</h4>
                    <div className="media-event-zoom-hint">
                      <ZoomIn size={14} />
                      <span>Click to enlarge photo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: CINEMATIC DRONE TOURS
            ========================================================================= */}
        {activeTab === 'VIDEOS' && (
          <div>
            <div className="media-cinematic-banner">
              <div className="media-cinematic-header">
                <div className="featured-badge-pill" style={{ background: 'rgba(220, 90, 50, 0.15)', color: '#FF7A50', border: '1px solid rgba(220, 90, 50, 0.3)' }}>
                  <Sparkles size={13} />
                  <span>CINEMATIC PROJECT SHOWCASE</span>
                </div>
                <h2 className="media-cinematic-title">
                  Architectural Drone Tours &amp; On-Site Walkthroughs
                </h2>
                <p className="media-cinematic-desc">
                  High-definition on-site video documentation capturing rapid construction progress, structural engineering, and master layout scale.
                </p>
              </div>

              <div className="media-video-player-box">
                <div className="media-video-aspect-wrap">
                  <video 
                    src="/projects/pratham/pratham-real-site-video.mp4"
                    poster="/projects/pratham/pratham-site-real-1.jpeg"
                    controls
                    playsInline
                    preload="metadata"
                    className="media-native-video"
                  >
                    Your browser does not support the video tag.
                  </video>
                  <div className="media-video-quality-pill">
                    <span>4K UHD OFFICIAL CAPTURE</span>
                  </div>
                </div>

                <div className="media-video-caption-bar">
                  <div>
                    <h4 className="media-video-name">
                      Pratham (Lucknow) — Official On-Site &amp; Drone Video Footage
                    </h4>
                    <p className="media-video-loc">
                      High-Visibility Mixed-Use Commercial Growth Corridor, Lucknow • UP-RERA Verified
                    </p>
                  </div>

                  <div className="media-video-btn-group">
                    <button 
                      type="button"
                      className="media-video-action-btn primary"
                      onClick={() => openSiteVisitModal('Pratham Lucknow (Media Video Tour)')}
                    >
                      <Car size={15} />
                      <span>Book Site Visit</span>
                    </button>
                    <button 
                      type="button"
                      className="media-video-action-btn secondary"
                      onClick={() => openEnquiryModal('Pratham Lucknow', 'Official Video & Brochure Request')}
                    >
                      <Download size={15} />
                      <span>Get Media Kit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Corporate Media Relations & Press Kit Box */}
        <div className="media-press-contact-card">
          <div className="media-press-contact-left">
            <div className="media-press-icon-wrap">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="media-press-title">Corporate Communications &amp; Media Enquiries</h3>
              <p className="media-press-desc">
                For journalist inquiries, interview requests with executive leadership, and official architectural imagery.
              </p>
            </div>
          </div>

          <div className="media-press-contact-right">
            <a 
              href="mailto:contact@ssbinfraproject.com?subject=Press%20Inquiry%20-%20SSB%20Group" 
              className="media-press-email-btn"
            >
              <span>contact@ssbinfraproject.com</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="media-article-modal-backdrop" onClick={() => setActiveArticle(null)}>
          <div 
            className="media-article-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="media-modal-top-bar">
              <div className="media-modal-tags">
                <span className="media-modal-tag-pill">{activeArticle.tag}</span>
                <span className="media-modal-pub-pill">{activeArticle.publication}</span>
              </div>
              <button 
                type="button" 
                className="media-modal-close-btn"
                onClick={() => setActiveArticle(null)}
                aria-label="Close article reader"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Hero Image */}
            <div className="media-modal-image-wrap">
              <img 
                src={activeArticle.image} 
                alt={activeArticle.title} 
                className="media-modal-image" 
              />
              <div className="media-modal-img-overlay" />
            </div>

            {/* Modal Content Body */}
            <div className="media-modal-content-wrap">
              <div className="media-modal-meta">
                <span><Calendar size={13} /> {activeArticle.date}</span>
                <span>•</span>
                <span><User size={13} /> {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className="media-modal-title">
                {activeArticle.title}
              </h2>

              <div className="media-modal-body-text">
                <p className="media-modal-lead">{activeArticle.summary}</p>
                <div className="media-modal-divider" />
                <p>{activeArticle.fullContent}</p>
              </div>

              {/* Modal Footer */}
              <div className="media-modal-footer">
                <div className="media-modal-footer-left">
                  <button 
                    type="button" 
                    className="media-modal-share-btn"
                    onClick={() => handleCopyLink(activeArticle.title)}
                  >
                    {copiedLink ? <CheckCircle2 size={15} className="text-emerald" /> : <Share2 size={15} />}
                    <span>{copiedLink ? 'Link Copied to Clipboard!' : 'Share Article'}</span>
                  </button>
                </div>

                <div className="media-modal-footer-right">
                  <button 
                    type="button" 
                    className="media-modal-cta-btn"
                    onClick={() => {
                      setActiveArticle(null);
                      openEnquiryModal(activeArticle.title, 'Press Release Follow-up');
                    }}
                  >
                    <span>Connect with Project Desk</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


