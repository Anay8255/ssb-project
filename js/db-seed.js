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
      tagline: "Group housing at scale launched with modern aluminium formwork monolithic construction.",
      reraNumber: "UPRERAPRJ882190",
      reraAuthority: "Uttar Pradesh Real Estate Regulatory Authority",
      reraQrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://up-rera.in/ProjectSummary?id=UPRERAPRJ882190",
      startingPrice: 5600000,
      priceDisplay: "₹56 Lakhs Onwards",
      locationName: "Airport Highway corridor, Harhua, Varanasi",
      fullAddress: "Airport Highway Corridor, Harhua, Varanasi, UP",
      totalLandArea: "18 Acres",
      totalUnitsCount: 520,
      featuredImage: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
      heroImages: [
        "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1600&q=80"
      ],
      description: "Shree Sai City Group Housing features state-of-the-art monolithic aluminium formwork construction technology, delivering earthquake-resistant structural longevity and elegant finishes.",
      configurations: [
        {
          id: "cfg_sc_2bhk",
          title: "2.5 BHK Smart Urban Home",
          bhkType: "2.5 BHK",
          superBuiltupArea: 1320,
          carpetArea: 950,
          bedrooms: 2,
          bathrooms: 2,
          balconies: 2,
          floorPlanUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
          priceEstimate: "₹56 - ₹62 Lakhs"
        },
        {
          id: "cfg_sc_3bhk",
          title: "3 BHK Grand Presidential",
          bhkType: "3 BHK",
          superBuiltupArea: 1850,
          carpetArea: 1350,
          bedrooms: 3,
          bathrooms: 3,
          balconies: 4,
          floorPlanUrl: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80",
          priceEstimate: "₹78 - ₹88 Lakhs"
        }
      ],
      amenities: [
        { name: "Olympic Sized Pool", category: "Health & Sports", icon: "🏊" },
        { name: "Commercial Retail Arcade", category: "Convenience", icon: "🛍️" },
        { name: "Children Play Area", category: "Leisure", icon: "🛝" }
      ],
      overallProgressPct: 65,
      milestones: [
        { name: "Foundation Complete", pct: 100, status: "COMPLETED" },
        { name: "Aluminium Formwork Structure", pct: 85, status: "IN_PROGRESS" },
        { name: "MEP & Electricals", pct: 55, status: "IN_PROGRESS" }
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
    { year: "2013", status: "Completed", title: "Founded in Varanasi", desc: "SSB Group is established under the vision of Mr. Ram Gopal Singh." },
    { year: "2015", status: "Completed", title: "First residential delivery", desc: "Early residential development handed over to its first families." },
    { year: "2018", status: "Completed", title: "Affordable housing", desc: "Shree Sai City EWS / PMAY phase delivered." },
    { year: "2021", status: "Ongoing", title: "Group housing at scale", desc: "Shree Sai City Group Housing launched with modern formwork construction." },
    { year: "2024", status: "Ongoing", title: "Sai Gaon", desc: "A planned residential neighbourhood on the Varanasi growth corridor." },
    { year: "2026", status: "Upcoming", title: "Lucknow expansion", desc: "Pratham marks the group's entry into the Lucknow market." }
  ],

  // Official Leadership
  leadership: [
    {
      name: "Mr. Ram Gopal Singh",
      designation: "Founder, Chairman & Managing Director",
      bio: "Founded SSB Group in Varanasi in 2013 with a philosophy centred on quality, innovation, professionalism and customer trust.",
      quote: "A home is not a transaction. It is a family's faith placed in your hands — and that faith must be honoured in every brick.",
      photoUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mr. Jitendra Kumar Singh",
      designation: "Director",
      bio: "Varanasi-born and an MBA, with prior experience at Chadha Group and a background in the petroleum business. With SSB Group since 2012.",
      quote: "Building with material discipline and operational precision on every site we construct.",
      photoUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
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
