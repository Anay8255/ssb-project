/**
 * SSB GROUP (Shree Sai Baba Infra Projects Pvt. Ltd.) — OFFICIAL SEED DATABASE
 * Direct Reference: ssbinfraproject.com
 * Founded in Varanasi in 2013 by Mr. Ram Gopal Singh
 */

const SEED_DATA = {
  company: {
    legalName: "Shree Sai Baba Infra Projects Pvt. Ltd.",
    brandName: "SSB Group",
    tagline: "Stay Blessed · Since 2013",
    subTagline: "Building Spaces. Creating Legacies.",
    address: "20/51-5 and 20/52-4, Sri Das Foundation Building, Cantonment, Mall Road, Varanasi, Uttar Pradesh",
    phones: ["+91 98189 28893", "07080201752", "0542-2500657"],
    email: "info@ssbinfraproject.com",
    establishedYear: 2013,
    stats: {
      experienceYears: "13+",
      projectsDelivered: "8+",
      runningProjects: "2",
      happyFamilies: "10,000+",
      pipelineProjects: "4"
    }
  },

  projects: [
    {
      id: "prj_sai_gaon",
      slug: "sai-gaon",
      title: "Sai Gaon",
      city: "Varanasi, Uttar Pradesh",
      category: "Residential",
      status: "Ongoing",
      tagline: "A planned residential neighbourhood on the Varanasi growth corridor.",
      reraNumber: "UPRERAPRJ647201",
      reraAuthority: "Uttar Pradesh Real Estate Regulatory Authority",
      reraQrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://up-rera.in/ProjectSummary?id=UPRERAPRJ647201",
      startingPrice: 4850000,
      priceDisplay: "₹48.5 Lakhs Onwards",
      locationName: "Shivpur / Ring Road Corridor, Varanasi",
      fullAddress: "Varanasi Growth Corridor, Near Ring Road, Varanasi, UP",
      totalLandArea: "12.5 Acres",
      totalUnitsCount: 380,
      featuredImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      heroImages: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
      ],
      description: "Sai Gaon is a thoughtfully planned residential neighbourhood in Varanasi, designed to provide contemporary family living with expansive green parks, community amenities, and rapid arterial connectivity.",
      configurations: [
        {
          id: "cfg_sg_2bhk",
          title: "2 BHK Contemporary Home",
          bhkType: "2 BHK",
          superBuiltupArea: 1150,
          carpetArea: 840,
          bedrooms: 2,
          bathrooms: 2,
          balconies: 2,
          floorPlanUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
          priceEstimate: "₹48.5 - ₹54 Lakhs"
        },
        {
          id: "cfg_sg_3bhk",
          title: "3 BHK Royal Luxury Suite",
          bhkType: "3 BHK",
          superBuiltupArea: 1620,
          carpetArea: 1190,
          bedrooms: 3,
          bathrooms: 3,
          balconies: 3,
          floorPlanUrl: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80",
          priceEstimate: "₹68 - ₹75 Lakhs"
        }
      ],
      amenities: [
        { name: "Swimming Pool", category: "Health & Sports", icon: "🏊" },
        { name: "Community Clubhouse", category: "Leisure", icon: "🏛️" },
        { name: "Landscaped Gardens", category: "Eco-Living", icon: "🌿" },
        { name: "24x7 Gated Security", category: "Security", icon: "🛡️" }
      ],
      overallProgressPct: 78,
      milestones: [
        { name: "Foundation & Excavation", pct: 100, status: "COMPLETED" },
        { name: "RCC Structure", pct: 90, status: "IN_PROGRESS" },
        { name: "Internal Plaster & MEP", pct: 70, status: "IN_PROGRESS" },
        { name: "Finishing & Landscaping", pct: 45, status: "IN_PROGRESS" }
      ]
    },
    {
      id: "prj_sai_city_housing",
      slug: "shree-sai-city-group-housing",
      title: "Shree Sai City Group Housing",
      city: "Varanasi, Uttar Pradesh",
      category: "Residential",
      status: "Ongoing",
      tagline: "Refined by Nature's Opulence — Life of Wellness. Group housing built with modern Aluminium Formwork Monolithic Construction.",
      reraNumber: "UPRERAPRJ923469",
      reraAuthority: "Uttar Pradesh Real Estate Regulatory Authority (VDA Approved)",
      reraQrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://up-rera.in/ProjectSummary?id=UPRERAPRJ923469",
      startingPrice: 5600000,
      priceDisplay: "₹56 Lakhs Onwards",
      locationName: "Airport Road & Panchkosi Road, Harhua, Varanasi",
      fullAddress: "Airport Road, Harhua Crossing & Panchkosi Road, Varanasi - 221002, UP",
      totalLandArea: "18 Acres Integrated Township",
      totalUnitsCount: 520,
      featuredImage: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948497295-9v1551.png",
      heroImages: [
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948497295-9v1551.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948517426-765q1q.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948520399-r81hq7.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948527122-9nyeu4.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948528227-7x3nua.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948529276-aspkwi.png"
      ],
      gallery: [
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948497295-9v1551.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948517426-765q1q.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948520399-r81hq7.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948527122-9nyeu4.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948528227-7x3nua.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948529276-aspkwi.png"
      ],
      description: "Shree Sai City Group Housing in Varanasi is the very first in the region to incorporate the advanced monolithic Aluminum Formwork System into multi-storied RCC load-bearing construction. By pouring walls and slabs simultaneously, the structure achieves superior strength, an exquisite smooth concrete finish, complete resistance to water seepage and moisture hazards, high seismic resilience, and acoustic insulation. The eco-planned township is designed around nature's microclimate with lush evergreen landscaping, 316.687 KLD water management with 80% recycling through an on-site Sewage Treatment Plant (STP), rainwater harvesting, 24x7 gated security with RFID visitor validation, dual power backup, rooftop solar power, a luxury Club House with swimming pool and wooden sun deck, rooftop sky gardens, tennis court, community school, and a proposed SSB Amusement Park with luxury resort.",
      specifications: {
        structure: "Earthquake Resistance R.C.C. Frame Structure (Advanced Aluminium Formwork monolithic system — walls and slabs cast in single operation)",
        rooms: "Premium Vitrified Tiles flooring in living, dining, and all bedrooms",
        commonArea: "Ceramic Tiles flooring in common corridors, lift lobbies and building passages",
        kitchen: "Ceramic Tiles flooring, Granite Counter with Ceramic Tiles up to 2'-0\" HT above counter, Stainless Steel Sink, Oil Bound Distemper in balance area",
        toiletBathroom: "Anti-skid Ceramic Tiles flooring, Designer Ceramic Wall Tiles up to 7'-0\" HT, Low Level PVC Cistern with European Toilet Seat, ISI standard CP fittings",
        staircase: "Granite / Vitrified Tiles with heavy-duty safety handrails",
        doorWindow: "External UPVC Doors & Windows with 5mm Toughened Glass; Internal door frames of seasoned Marandi Wood with laminated flush door shutters; ISI marked standard fittings & mortise locks",
        plumbing: "PVC / CPVC Pipe for plumbing piping works, premium C.P. Fittings",
        sanitary: "Low Level PVC Cistern with European WC, Stainless Steel Sink in kitchen, premium ISI sanitary fittings",
        electrical: "Fire Resistant I.S.I. Mark Copper Concealed Wiring, Modular Switches & Sockets as per ISI Standard",
        finishing: "Weather Coat Texture Paint on outside walls, Oil Bound Distemper on interior walls"
      },
      configurations: [
        {
          id: "cfg_sc_2bhk",
          title: "2 BHK Premium Residence",
          bhkType: "2 BHK",
          superBuiltupArea: 1100.08,
          carpetArea: 605.58,
          coveredArea: 682.22,
          balconyArea: 116.68,
          commonArea: 170.28,
          servicesArea: 170.64,
          utilitiesArea: 23.25,
          carpetAreaSqM: 56.26,
          coveredAreaSqM: 63.38,
          balconyAreaSqM: 10.84,
          totalAreaSqM: 102.20,
          bedrooms: 2,
          bathrooms: 2,
          balconies: 2,
          highlight: "Living/Dining (11'-4\" x 16'-0\"), Master Bed (11'-8\" x 10'-2\"), Bed 2 (11'-2\" x 10'-8\"), Kitchen (7'-9\" x 7'-2\"), 2 private balconies, Vastu compliant",
          floorPlanUrl: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948527122-9nyeu4.png",
          floorPlanImages: [
            "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948527122-9nyeu4.png"
          ],
          priceEstimate: "₹56 - ₹62 Lakhs"
        },
        {
          id: "cfg_sc_3bhk",
          title: "3 BHK Grand Presidential",
          bhkType: "3 BHK",
          superBuiltupArea: 1351.31,
          carpetArea: 815.80,
          coveredArea: 897.50,
          balconyArea: 152.63,
          commonArea: 107.28,
          servicesArea: 170.64,
          utilitiesArea: 23.25,
          carpetAreaSqM: 75.79,
          coveredAreaSqM: 83.38,
          balconyAreaSqM: 14.18,
          totalAreaSqM: 125.54,
          bedrooms: 3,
          bathrooms: 2,
          balconies: 3,
          highlight: "Living/Dining (13'-8\" x 19'-4\"), Master Bed (10'-5\" x 13'-10\"), Bed 2 (10'-0\" x 10'-4\"), Bed 3 (10'-0\" x 10'-4\"), Kitchen (7'-2\" x 10'-6\"), 3 balconies, 3-side open layout",
          floorPlanUrl: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948528227-7x3nua.png",
          floorPlanImages: [
            "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948528227-7x3nua.png"
          ],
          priceEstimate: "₹78 - ₹88 Lakhs"
        }
      ],
      amenities: [
        { name: "Monolithic Aluminium Formwork Green Tech", category: "Engineering", icon: "🏗️" },
        { name: "316 KLD STP with 80% Water Recycling", category: "Eco Utilities", icon: "💧" },
        { name: "The Club House & Sports Center", category: "Leisure", icon: "🏛️" },
        { name: "Swimming Pool with Wooden Sun Deck", category: "Health & Sports", icon: "🏊" },
        { name: "Tennis Court & Open Sports Arena", category: "Sports", icon: "🎾" },
        { name: "Rooftop Sky Gardens & Terrace Seating", category: "Leisure", icon: "🌴" },
        { name: "Proposed SSB Amusement Park & Resort", category: "Entertainment", icon: "🎡" },
        { name: "Rainwater Harvesting & Drainage System", category: "Eco Utilities", icon: "🌧️" },
        { name: "24x7 Security with CCTV & RFID Gating", category: "Security", icon: "🛡️" },
        { name: "Dual-Source Power & Rooftop Solar", category: "Utilities", icon: "⚡" },
        { name: "Dedicated Community School on Campus", category: "Education", icon: "🏫" },
        { name: "Commercial Retail Arcade on 12m/24m Road", category: "Convenience", icon: "🛍️" }
      ],
      overallProgressPct: 65,
      milestones: [
        { name: "VDA Approvals & Foundation Groundwork", pct: 100, status: "COMPLETED" },
        { name: "Aluminium Formwork Monolithic Superstructure", pct: 85, status: "IN_PROGRESS" },
        { name: "Internal MEP, Plumbing & Electrical Conduits", pct: 60, status: "IN_PROGRESS" },
        { name: "Facade Texture, Club House & Finishing", pct: 40, status: "IN_PROGRESS" }
      ]
    },
    {
      id: "prj_sai_city_pmay",
      slug: "shree-sai-city-ews-pmay",
      title: "Shree Sai City EWS / PMAY",
      city: "Varanasi, Uttar Pradesh",
      category: "Residential",
      status: "Completed",
      tagline: "Affordable housing phase delivered with over 120 families receiving possession.",
      reraNumber: "UPRERAPRJ391820",
      reraAuthority: "Uttar Pradesh Real Estate Regulatory Authority",
      reraQrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://up-rera.in/ProjectSummary?id=UPRERAPRJ391820",
      startingPrice: 1850000,
      priceDisplay: "Delivered & Handed Over",
      locationName: "Harhua, Varanasi",
      fullAddress: "Phase 2, Harhua, Varanasi, UP",
      totalLandArea: "8 Acres",
      totalUnitsCount: 450,
      featuredImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      heroImages: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80"
      ],
      description: "Delivered under the government affordable housing mission, providing dignified, quality living to families with full infrastructure and registry.",
      configurations: [
        {
          id: "cfg_pmay_1bhk",
          title: "1 BHK Affordable Flat",
          bhkType: "1 BHK",
          superBuiltupArea: 560,
          carpetArea: 385,
          bedrooms: 1,
          bathrooms: 1,
          balconies: 1,
          floorPlanUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
          priceEstimate: "Delivered"
        }
      ],
      amenities: [
        { name: "Community Center", category: "Community", icon: "🏢" },
        { name: "Park & Play Area", category: "Leisure", icon: "🌳" }
      ],
      overallProgressPct: 100,
      milestones: [
        { name: "Construction Handed Over", pct: 100, status: "COMPLETED" },
        { name: "Possession Completed", pct: 100, status: "COMPLETED" }
      ]
    },
    {
      id: "prj_pratham",
      slug: "pratham",
      title: "Pratham",
      city: "Lucknow, Uttar Pradesh",
      category: "Commercial",
      status: "Upcoming",
      tagline: "Pratham marks the group's flagship entry into the Lucknow commercial & mixed-use market.",
      reraNumber: "UPRERAPRJ519082",
      reraAuthority: "Uttar Pradesh Real Estate Regulatory Authority",
      reraQrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://up-rera.in/ProjectSummary?id=UPRERAPRJ519082",
      startingPrice: 3500000,
      priceDisplay: "Coming Soon in Lucknow",
      locationName: "Lucknow Growth Corridor, Uttar Pradesh",
      fullAddress: "Prime Location, Lucknow, UP",
      totalLandArea: "15 Acres",
      totalUnitsCount: 220,
      featuredImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      heroImages: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      ],
      description: "Pratham is SSB Group's signature commercial and mixed-use destination in Lucknow, offering premium retail spaces, corporate suites, and world-class architecture.",
      configurations: [
        {
          id: "cfg_pr_retail",
          title: "Prime Retail / Commercial Space",
          bhkType: "Commercial Space",
          superBuiltupArea: 800,
          carpetArea: 650,
          bedrooms: 0,
          bathrooms: 1,
          balconies: 0,
          floorPlanUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
          priceEstimate: "Coming Soon"
        }
      ],
      amenities: [
        { name: "Grand Atrium & Elevators", category: "Infrastructure", icon: "🏛️" },
        { name: "Ample Multi-Level Parking", category: "Infrastructure", icon: "🅿️" }
      ],
      overallProgressPct: 15,
      milestones: [
        { name: "Land Planning & Approvals", pct: 100, status: "COMPLETED" },
        { name: "Site Groundbreaking", pct: 50, status: "IN_PROGRESS" }
      ]
    }
  ],

  // Live Unit Inventory for Interactive Master Plan
  units: [
    { id: "unt_101", projectId: "prj_sai_gaon", unitNumber: "Tower-A 301", towerBlock: "Tower A", floorNumber: 3, unitType: "2 BHK Luxury", facing: "East (Park Facing)", areaSqFt: 1150, totalPrice: 4850000, status: "AVAILABLE" },
    { id: "unt_102", projectId: "prj_sai_gaon", unitNumber: "Tower-A 302", towerBlock: "Tower A", floorNumber: 3, unitType: "2 BHK Luxury", facing: "North-East", areaSqFt: 1150, totalPrice: 4850000, status: "HOLD" },
    { id: "unt_103", projectId: "prj_sai_gaon", unitNumber: "Tower-A 401", towerBlock: "Tower A", floorNumber: 4, unitType: "3 BHK Royal", facing: "East", areaSqFt: 1620, totalPrice: 6800000, status: "BOOKED" },
    { id: "unt_104", projectId: "prj_sai_gaon", unitNumber: "Tower-A 402", towerBlock: "Tower A", floorNumber: 4, unitType: "3 BHK Royal", facing: "North", areaSqFt: 1620, totalPrice: 6800000, status: "AVAILABLE" },
    { id: "unt_105", projectId: "prj_sai_gaon", unitNumber: "Tower-B 101", towerBlock: "Tower B", floorNumber: 1, unitType: "2 BHK Premium", facing: "Clubhouse View", areaSqFt: 1150, totalPrice: 5100000, status: "SOLD" },
    { id: "unt_106", projectId: "prj_sai_gaon", unitNumber: "Tower-B 102", towerBlock: "Tower B", floorNumber: 1, unitType: "3 BHK Luxury", facing: "Garden View", areaSqFt: 1620, totalPrice: 7250000, status: "AVAILABLE" }
  ],

  // Journey Timeline
  journey: [
    { year: "2013", status: "Completed", title: "Inception in Varanasi", desc: "SSB Group was established under the vision of Mr. Ram Gopal Singh to engineer high-integrity real estate." },
    { year: "2015", status: "Completed", title: "Maiden Residential Handover", desc: "Successfully delivered our inaugural residential community, welcoming its first homeowner families." },
    { year: "2018", status: "Completed", title: "Accessible Housing Milestone", desc: "Delivered the dedicated affordable housing sector under the Shree Sai City EWS / PMAY initiative." },
    { year: "2021", status: "Ongoing", title: "Monolithic Formwork Era", desc: "Launched Shree Sai City Group Housing with advanced aluminum formwork for rapid, seismic-resilient construction." },
    { year: "2024", status: "Ongoing", title: "Flagship Township: Sai Gaon", desc: "Unveiled an eco-planned gated township strategically situated along Varanasi's premier development corridor." },
    { year: "2026", status: "Upcoming", title: "Capital Expansion: Lucknow", desc: "Marked strategic growth into Lucknow with 'Pratham', a state-of-the-art mixed-use commercial destination." }
  ],

  // Official Leadership & Key Team (From Official Brochure)
  leadership: [
    {
      name: "Mr. Ram Gopal Singh",
      designation: "Managing Director",
      bio: "Managing Director of SSB Group with over two decades in the real estate market. Dynamic and visionary pioneer who kick-started integrated township solutions in Varanasi under Pradhanmantri Yojna, combining world-class infrastructure with natural serenity.",
      quote: "हमारी दृढ़ता आपके सपनों को पूरा करने की प्रतिबद्धता खोखले वादों से दूर, आपके एक-एक पैसे की भरपूर लाभ देने की वचनबद्धता।",
      photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mr. Jitender Kumar Singh",
      designation: "Director",
      bio: "Director of SSB Group, young, energetic and a go-getter with demonstrable leadership in the Varanasi real estate market. Instrumental in operational planning, execution, and driving long-term strategic objectives.",
      quote: "Building with material discipline, precision engineering, and transparent execution on every project.",
      photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mr. Satish Kumar Singh",
      designation: "Director",
      bio: "Director contributing extensive industry oversight, project governance, and stakeholder alignment across residential developments.",
      quote: "Delivering lasting value and quality living spaces to every homeowner family.",
      photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mr. Anuraag Balwant Singh",
      designation: "Director",
      bio: "Director spearheading strategic growth, technology adoption, and client engagement initiatives for SSB Group.",
      quote: "Adopting modern construction innovations to build a better, sustainable tomorrow.",
      photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mr. Nishant Shekhar",
      designation: "Chief Architect",
      bio: "Architect behind the master planning, monolithic Aluminium Formwork structures, Vastu-compliant layouts, and landscaped green microclimates of Shree Sai City.",
      quote: "Balancing architectural grandeur with functional opulence and natural microclimates.",
      photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // Official Certifications & Registrations
  certifications: [
    { title: "Certificate of Incorporation", issuer: "Ministry of Corporate Affairs, Govt of India", icon: "🏛️" },
    { title: "ISO 9001:2015", issuer: "Quality Management Systems", icon: "🏅" },
    { title: "ISO 9001:2008", issuer: "Quality Management Certified", icon: "🏅" },
    { title: "Awas Bandhu Registration", issuer: "Housing & Urban Planning Dept, UP", icon: "📜" },
    { title: "UP Tourism Registration", issuer: "Uttar Pradesh Tourism Development", icon: "🏛️" }
  ],

  // CRM Leads
  leads: [
    {
      id: "lead_101",
      fullName: "Alok Srivastava",
      email: "alok.sriv@gmail.com",
      phone: "+91 98189 28893",
      source: "SITE_VISIT_MODAL",
      status: "SITE_VISIT_SCHEDULED",
      priority: "HOT",
      projectId: "prj_sai_gaon",
      projectName: "Sai Gaon",
      interestedUnit: "Tower-A 301",
      budgetRange: "₹45 - 55 Lakhs",
      notes: "Requested chauffeur cab pickup from Taj Ganges Varanasi.",
      assignedTo: "Rajesh Sharma",
      createdAt: "2026-08-18T10:00:00Z"
    }
  ],

  // Site Visits
  siteVisits: [
    {
      id: "vis_101",
      leadId: "lead_101",
      customerName: "Alok Srivastava",
      phone: "+91 98189 28893",
      projectId: "prj_sai_gaon",
      projectName: "Sai Gaon",
      scheduledDate: "2026-08-20",
      timeSlot: "11:00 AM - 12:30 PM",
      pickupAddress: "Hotel Taj Ganges, Nadesar, Varanasi",
      cabRequired: true,
      numberOfVisitors: 3,
      driverDetails: "Ramesh Kumar (Innova Crysta - UP65 BT 9922)",
      status: "CONFIRMED",
      assignedTo: "Rajesh Sharma"
    }
  ],

  // Audit Logs
  auditLogs: [
    {
      id: "aud_01",
      adminUser: "Super Admin",
      action: "PROJECT_SYNCED",
      entity: "SSB Group Database",
      oldValue: "Draft",
      newValue: "Production Live",
      timestamp: "2026-08-18 02:30 PM"
    }
  ]
};
