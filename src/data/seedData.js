/**
 * SSB GROUP (Shree Sai Baba Infra Projects Pvt. Ltd.) — OFFICIAL SEED DATABASE
 * Direct Reference: ssbinfraproject.com
 * Founded in Varanasi in 2013 by Mr. Ram Gopal Singh
 */

export const SEED_DATA = {
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
      status: "Completed",
      tagline: "An abode of harmony & happiness — VDA Approved township delivered on Babatpur Airport Road.",
      reraNumber: "UPRERAPRJ13751 / UPRERAPRM31635",
      reraAuthority: "Uttar Pradesh Real Estate Regulatory Authority (VDA Approved)",
      reraQrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://up-rera.in/ProjectSummary?id=UPRERAPRJ13751",
      startingPrice: 3400000,
      priceDisplay: "Delivered & Handed Over",
      locationName: "Babatpur Airport Road, Harhua, Varanasi",
      fullAddress: "Babatpur Airport Road, Near Harhua Crossing, NH-56, Varanasi, UP",
      googleMapUrl: "https://maps.app.goo.gl/Ftpevbgx1D7mNmqx6?g_st=ic",
      googleMapEmbedUrl: "https://maps.google.com/maps?q=SSB(sai+gaon),+Sai+Gaon+SSB,+Kaazi+Sarai,+Bhatauli,+Uttar+Pradesh+221105&t=&z=15&ie=UTF8&iwloc=&output=embed",
      geoCoordinates: { lat: 25.342706, lng: 82.981683 },
      developerPartnership: "A Joint Venture of Shree Sai Baba Infra Projects Pvt. Ltd. & Aarani Developers Pvt. Ltd.",
      approvalStatus: "VDA Approved (Varanasi Development Authority)",
      totalLandArea: "12.5 Acres",
      totalUnitsCount: 380,
      featuredImage: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1786948454583-w6z5b8.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODY5NDg0NTQ1ODMtdzZ6NWI4LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTcsImV4cCI6MjEwMjMwODQ1N30.1zCUF2vs_4XZgxd6-_UaiB1MRwOPfixHwBRnoKV3mSA",
      heroImages: [
        "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1786948454583-w6z5b8.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODY5NDg0NTQ1ODMtdzZ6NWI4LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTcsImV4cCI6MjEwMjMwODQ1N30.1zCUF2vs_4XZgxd6-_UaiB1MRwOPfixHwBRnoKV3mSA",
        "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948443025-3qtprf.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDMwMjUtM3F0cHJmLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDUsImV4cCI6MjEwMjMwODQ0NX0.L5lgOnPP2ujMKC1yLR0qGbPn5N-Wj6bNX489_dD3psQ",
        "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948444844-qundmg.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDQ4NDQtcXVuZG1nLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDYsImV4cCI6MjEwMjMwODQ0Nn0.JFWh0PIOdg0OXgWDpGjAWJZXc-tfGyt0aVSjhvPIaJI",
        "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948441216-d11bsv.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDEyMTYtZDExYnN2LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDMsImV4cCI6MjEwMjMwODQ0M30.JAKh4QpiFzx5GZM2WYmsQkMD9JjptoECRGkMhJXUaDE"
      ],
      gallery: [
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1786948454583-w6z5b8.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODY5NDg0NTQ1ODMtdzZ6NWI4LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTcsImV4cCI6MjEwMjMwODQ1N30.1zCUF2vs_4XZgxd6-_UaiB1MRwOPfixHwBRnoKV3mSA",
          title: "Sai Gaon Front Elevation & Night Facade",
          category: "Exterior"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948439357-jtyw42.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0MzkzNTctanR5dzQyLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDEsImV4cCI6MjEwMjMwODQ0MX0.DjOzOHiEMi1LE3P-EtANHDzsxDIUQzfFBvpWH8K5Us8",
          title: "Grand Entrance Archway & Security Plaza",
          category: "Campus"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948441216-d11bsv.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDEyMTYtZDExYnN2LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDMsImV4cCI6MjEwMjMwODQ0M30.JAKh4QpiFzx5GZM2WYmsQkMD9JjptoECRGkMhJXUaDE",
          title: "Residential Towers Night Perspective",
          category: "Exterior"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948443025-3qtprf.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDMwMjUtM3F0cHJmLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDUsImV4cCI6MjEwMjMwODQ0NX0.L5lgOnPP2ujMKC1yLR0qGbPn5N-Wj6bNX489_dD3psQ",
          title: "Modern Architectural Day View & Boulevard",
          category: "Exterior"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948444844-qundmg.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDQ4NDQtcXVuZG1nLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDYsImV4cCI6MjEwMjMwODQ0Nn0.JFWh0PIOdg0OXgWDpGjAWJZXc-tfGyt0aVSjhvPIaJI",
          title: "Aerial 3D Master Layout & Green Belt",
          category: "Master Layout"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948446478-ptczui.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDY0NzgtcHRjenVpLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDgsImV4cCI6MjEwMjMwODQ0OH0.0f6G5azM-QONL9xq82P5cDrrLgHra0QWO1CFk3XCeY0",
          title: "Floor Plan — 2 BHK Type 2 (718.28 Sq. Ft.)",
          category: "Floor Plan"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948447884-t3r49r.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDc4ODQtdDNyNDlyLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDksImV4cCI6MjEwMjMwODQ0OX0.S1qEXrXC-kGCrACTwNW8Yw2JbzUiPFf9gjPM4p2mBcU",
          title: "Floor Plan — 3 BHK Type 5 (1030.97 Sq. Ft.)",
          category: "Floor Plan"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948449178-hpp7z2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDkxNzgtaHBwN3oyLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTEsImV4cCI6MjEwMjMwODQ1MX0.AZ7if7UXRrZgaOYyW4sds5QVZ6N95hTzrga0RVABFvc",
          title: "Floor Plan — 1 BHK Type 1 (708.26 Sq. Ft.)",
          category: "Floor Plan"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948450778-vwdprf.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NTA3NzgtdndkcHJmLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTIsImV4cCI6MjEwMjMwODQ1Mn0.tGLZ-Rg_YP449Se2vIScOPDcjpcS9e2TLuT2N3x-x2A",
          title: "Floor Plan — 2 BHK Type 3 (765.75 Sq. Ft.)",
          category: "Floor Plan"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948452049-hick9n.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NTIwNDktaGljazluLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTMsImV4cCI6MjEwMjMwODQ1M30.phebcyuDFb_afE-MzqcJ-FDwqP8yh-J9_1ZJaDUAnnc",
          title: "Floor Plan — 2 BHK Type 4 (857.67 Sq. Ft.)",
          category: "Floor Plan"
        }
      ],
      masterPlanUrl: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948444844-qundmg.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDQ4NDQtcXVuZG1nLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDYsImV4cCI6MjEwMjMwODQ0Nn0.JFWh0PIOdg0OXgWDpGjAWJZXc-tfGyt0aVSjhvPIaJI",
      description: "Sai Gaon is a prestigious VDA-approved residential township on Babatpur Airport Road, Varanasi, developed as a Joint Venture between Shree Sai Baba Infra Projects Pvt. Ltd. and Aarani Developers Pvt. Ltd. Featuring earthquake-resistant RCC frame structures, 40 ft and 30 ft wide internal roads, Vastu-friendly layouts, and complete lifestyle infrastructure, the project is completed and handed over to happy homeowners.",
      specifications: {
        structure: "Earthquake Resistance R.C.C. Frame Structure",
        toiletBathroom: "Anti-skid Ceramic Tiles flooring, Wall ceramic tiles up to height of 7'-0\", Low Level PVC Cistern with European Toilet Seat",
        rooms: "Vitrified Tiles flooring in all rooms",
        commonArea: "Ceramic Tiles flooring in common corridors",
        kitchen: "Anti-skid Ceramic Tiles flooring, Green Marble/Granite Counter, Ceramic Tiles up to 2'-0\" HT above counter, Stainless Steel Sink",
        staircase: "Kota Stone Flooring with sturdy safety handrails",
        doorWindow: "Anodised Aluminium Section for Outdoor Windows with plain glass; Internal Wooden Door Frames of Marandi Wood with Flush Door Shutters & Laminate fittings",
        electrical: "Fire Resist ISI Mark Copper Wiring, Modular Switches and Sockets as per ISI Standard",
        plumbing: "PVC / CPVC Pipe for plumbing piping works, premium C.P. Fittings",
        finishing: "Weather Coat Finishing on Outside Walls, Oil Bound Distemper Inside"
      },
      configurations: [
        {
          id: "cfg_sg_type1",
          title: "Type - 1 (1 BHK Apartment)",
          bhkType: "1 BHK",
          superBuiltupArea: 708.26,
          carpetArea: 490.51,
          balconyArea: 67.27,
          coveredAreaSqM: 45.57,
          bedrooms: 1,
          bathrooms: 1,
          balconies: 2,
          floorPlanUrl: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948449178-hpp7z2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDkxNzgtaHBwN3oyLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTEsImV4cCI6MjEwMjMwODQ1MX0.AZ7if7UXRrZgaOYyW4sds5QVZ6N95hTzrga0RVABFvc",
          floorPlanImages: [
            "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948449178-hpp7z2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDkxNzgtaHBwN3oyLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTEsImV4cCI6MjEwMjMwODQ1MX0.AZ7if7UXRrZgaOYyW4sds5QVZ6N95hTzrga0RVABFvc"
          ],
          priceEstimate: "Delivered & Handed Over"
        },
        {
          id: "cfg_sg_type2",
          title: "Type - 2 (2 BHK Residence)",
          bhkType: "2 BHK",
          superBuiltupArea: 718.28,
          carpetArea: 499.01,
          balconyArea: 67.70,
          coveredAreaSqM: 46.36,
          bedrooms: 2,
          bathrooms: 1,
          balconies: 3,
          floorPlanUrl: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948446478-ptczui.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDY0NzgtcHRjenVpLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDgsImV4cCI6MjEwMjMwODQ0OH0.0f6G5azM-QONL9xq82P5cDrrLgHra0QWO1CFk3XCeY0",
          floorPlanImages: [
            "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948446478-ptczui.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDY0NzgtcHRjenVpLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDgsImV4cCI6MjEwMjMwODQ0OH0.0f6G5azM-QONL9xq82P5cDrrLgHra0QWO1CFk3XCeY0"
          ],
          priceEstimate: "Delivered & Handed Over"
        },
        {
          id: "cfg_sg_type3",
          title: "Type - 3 (2 BHK Comfort Suite)",
          bhkType: "2 BHK",
          superBuiltupArea: 765.75,
          carpetArea: 543.79,
          balconyArea: 82.55,
          coveredAreaSqM: 50.52,
          bedrooms: 2,
          bathrooms: 2,
          balconies: 3,
          floorPlanUrl: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948450778-vwdprf.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NTA3NzgtdndkcHJmLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTIsImV4cCI6MjEwMjMwODQ1Mn0.tGLZ-Rg_YP449Se2vIScOPDcjpcS9e2TLuT2N3x-x2A",
          floorPlanImages: [
            "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948450778-vwdprf.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NTA3NzgtdndkcHJmLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTIsImV4cCI6MjEwMjMwODQ1Mn0.tGLZ-Rg_YP449Se2vIScOPDcjpcS9e2TLuT2N3x-x2A"
          ],
          priceEstimate: "Delivered & Handed Over"
        },
        {
          id: "cfg_sg_type4",
          title: "Type - 4 (2 BHK Luxury Residence)",
          bhkType: "2 BHK",
          superBuiltupArea: 857.67,
          carpetArea: 676.94,
          balconyArea: 49.83,
          coveredAreaSqM: 62.89,
          bedrooms: 2,
          bathrooms: 2,
          balconies: 2,
          floorPlanUrl: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948452049-hick9n.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NTIwNDktaGljazluLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTMsImV4cCI6MjEwMjMwODQ1M30.phebcyuDFb_afE-MzqcJ-FDwqP8yh-J9_1ZJaDUAnnc",
          floorPlanImages: [
            "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948452049-hick9n.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NTIwNDktaGljazluLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NTMsImV4cCI6MjEwMjMwODQ1M30.phebcyuDFb_afE-MzqcJ-FDwqP8yh-J9_1ZJaDUAnnc"
          ],
          priceEstimate: "Delivered & Handed Over"
        },
        {
          id: "cfg_sg_type5",
          title: "Type - 5 (3 BHK Grand Suite)",
          bhkType: "3 BHK",
          superBuiltupArea: 1030.97,
          carpetArea: 802.24,
          balconyArea: 87.94,
          coveredAreaSqM: 74.53,
          bedrooms: 3,
          bathrooms: 2,
          balconies: 3,
          floorPlanUrl: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948447884-t3r49r.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDc4ODQtdDNyNDlyLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDksImV4cCI6MjEwMjMwODQ0OX0.S1qEXrXC-kGCrACTwNW8Yw2JbzUiPFf9gjPM4p2mBcU",
          floorPlanImages: [
            "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948447884-t3r49r.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg0NDc4ODQtdDNyNDlyLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg0NDksImV4cCI6MjEwMjMwODQ0OX0.S1qEXrXC-kGCrACTwNW8Yw2JbzUiPFf9gjPM4p2mBcU"
          ],
          priceEstimate: "Delivered & Handed Over"
        }
      ],
      amenities: [
        { name: "VDA Approved Township", category: "Approval", icon: "🏛️" },
        { name: "Hi-Tech CCTV 24x7 Security", category: "Security", icon: "📹" },
        { name: "40 Ft & 30 Ft Wide Roads", category: "Infrastructure", icon: "🛣️" },
        { name: "24 Hr. Water Supply", category: "Utilities", icon: "💧" },
        { name: "24x7 Power Back-up", category: "Utilities", icon: "⚡" },
        { name: "Ample Parking Area", category: "Convenience", icon: "🚗" },
        { name: "Earthquake Resistant Structure", category: "Engineering", icon: "🏢" },
        { name: "Firefighting System", category: "Safety", icon: "🧯" },
        { name: "Vastu-Friendly Layouts", category: "Design", icon: "🧭" },
        { name: "Professional Estate Management", category: "Management", icon: "🤝" }
      ],
      overallProgressPct: 100,
      milestones: [
        { name: "Earthquake Resistant RCC Structure", pct: 100, status: "COMPLETED" },
        { name: "Masonry, Plaster & MEP Works", pct: 100, status: "COMPLETED" },
        { name: "Finishing, Doors & Landscaping", pct: 100, status: "COMPLETED" },
        { name: "VDA Compliance & Handover to Families", pct: 100, status: "COMPLETED" }
      ]
    },
    {
      id: "prj_sai_city_housing",
      slug: "shree-sai-city-group-housing",
      title: "Shree Sai City",
      city: "Varanasi, Uttar Pradesh",
      category: "Residential",
      status: "Ongoing",
      tagline: "Refined by Nature's Opulence — Life of Wellness. Monolithic Aluminium Formwork multi-storied green township.",
      reraNumber: "UPRERAPRJ923469",
      reraAuthority: "Uttar Pradesh Real Estate Regulatory Authority (VDA Approved)",
      reraQrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://up-rera.in/ProjectSummary?id=UPRERAPRJ923469",
      startingPrice: null,
      priceDisplay: "Price on Request",
      locationName: "Panchkosi Road, Harhua, Varanasi",
      fullAddress: "SHREE SAI CITY, 24.0M Wide Panchkosi Road, Near Harhua Crossing & Airport Road, Varanasi, UP 221105",
      googleMapUrl: "https://maps.app.goo.gl/UhJ9xeTP4r6G7HPF9?g_st=ic",
      googleMapEmbedUrl: "https://maps.google.com/maps?q=SHREE+SAI+CITY+Mega+Town+Ship,+Dasepur,+Harhua,+Varanasi,+Uttar+Pradesh+221105&t=&z=15&ie=UTF8&iwloc=&output=embed",
      geoCoordinates: { lat: 25.3789, lng: 82.9362 },
      approvalStatus: "VDA Approved (Varanasi Development Authority) | UP RERA: UPRERAPRJ923469",
      totalLandArea: "18 Acres Integrated Township (S+16 High-Rise Towers)",
      totalUnitsCount: 520,
      featuredImage: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948497295-9v1551.png",
      heroImages: [
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948497295-9v1551.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948517426-765q1q.png",
        "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948529276-aspkwi.png"
      ],
      gallery: [
        {
          url: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948497295-9v1551.png",
          title: "Grand Facade & High-Rise Elevation",
          category: "Exterior"
        },
        {
          url: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948517426-765q1q.png",
          title: "Central Landscaped Spine & Garden",
          category: "Campus"
        },
        {
          url: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948520399-r81hq7.png",
          title: "Township Master Layout & Site Plan",
          category: "Master Layout"
        },
        {
          url: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948528227-7x3nua.png",
          title: "Floor Plan — 2 BHK Unit Layout (1100.08 Sq. Ft.)",
          category: "Floor Plan"
        },
        {
          url: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948527122-9nyeu4.png",
          title: "Floor Plan — 3 BHK Unit Layout (1351.31 Sq. Ft.)",
          category: "Floor Plan"
        },
        {
          url: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948529276-aspkwi.png",
          title: "Township Architectural Perspective & Aerial View",
          category: "Exterior"
        }
      ],
      description: "Shree Sai City is a prestigious VDA-approved and UP-RERA registered (UPRERAPRJ923469) residential township in Varanasi, refined by nature's opulence and designed for a life of wellness. SSB Infra Projects is the very first in Varanasi to incorporate the advanced monolithic Aluminum Formwork System into multi-storied RCC load-bearing construction. By pouring walls and slabs simultaneously in a single operation, the structure achieves superior strength, an exquisite smooth concrete finish, complete resistance to water seepage and moisture hazards, high seismic resilience, acoustic insulation, and eliminates the need for masonry. The eco-planned township is designed around nature's microclimate with lush evergreen landscaping, 316.687 KLD water management with 80% recycling through a scientifically engineered on-site Sewage Treatment Plant (STP), rainwater drainage framework, 24x7 gated security with boundary wall, safety officers, CCTV and resident-authorized visitor access, 24x7 electricity supply with dual-power reinforcement and solar energy, a luxury Club House with swimming pool & wooden sun deck, tennis court, water siphoning stations, rooftop sky gardens, proposed community school, and a proposed SSB Amusement Park with luxury resort.",
      specifications: {
        structure: "Earthquake Resistance R.C.C. Frame Structure (Monolithic Aluminium Formwork System — walls & slabs poured in single operation, no masonry needed, water seepage & tremor resistant)",
        rooms: "Premium Vitrified Tiles flooring in all rooms; Vastu-friendly all-round ventilated format for natural breeze & light",
        commonArea: "Ceramic Tiles flooring in common corridors, lift lobbies and building passages",
        kitchen: "Ceramic Tiles flooring; Granite Counter with Ceramic Tiles up to 2'-0\" HT above counter; Stainless Steel Sink; Oil Bound Distemper in balance area",
        toiletBathroom: "Anti-skid Ceramic Tiles flooring; Designer Ceramic Wall Tiles up to 7'-0\" HT; Low Level PVC Cistern with European Toilet Seat; Premium C.P. Fittings; PVC/CPVC plumbing pipes",
        staircase: "Granite / Vitrified Tiles with heavy-duty safety handrails",
        doorWindow: "External UPVC Doors & Windows with 5mm Toughened Glass; Internal door frames of seasoned Marandi Wood with laminated flush door shutters; ISI marked standard fittings & mortise locks",
        plumbing: "PVC / CPVC Pipe for plumbing piping works, premium C.P. Fittings, Stainless Steel Sink in kitchen",
        sanitary: "Low Level PVC Cistern with European WC, Stainless Steel Sink in kitchen, premium ISI sanitary fittings",
        electrical: "Fire Resistant I.S.I. Mark Copper Concealed Wiring, Modular Switches & Sockets as per ISI Standard, All materials as per ISI standard",
        finishing: "Weather Coat Texture Paint on outside walls, Oil Bound Distemper on interior walls"
      },
      configurations: [
        {
          id: "cfg_sc_2bhk",
          title: "2 BHK Unit Plan",
          bhkType: "2 BHK",
          superBuiltupArea: 1100.08,
          totalArea: 1100.08,
          carpetArea: 605.58,
          coveredArea: 682.22,
          balconyArea: 116.68,
          commonArea: 170.28,
          servicesArea: 107.64,
          utilitiesArea: 23.25,
          carpetAreaSqM: 56.26,
          coveredAreaSqM: 63.38,
          balconyAreaSqM: 10.84,
          totalAreaSqM: 102.20,
          bedrooms: 2,
          bathrooms: 2,
          balconies: 2,
          highlight: "Living/Dining (11'-4\" x 16'-0\"), Master Bed (11'-8\" x 10'-2\"), Bedroom 2 (11'-2\" x 10'-8\"), Kitchen (7'-9\" x 7'-2\"), Entrance Lobby (4'-2\" x 5'-10\"), 2 Toilets (7'-2\" x 5'-0\" & 5'-1\" x 7'-1\"), 1800mm Wide Balconies, Vastu Compliant",
          floorPlanUrl: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948528227-7x3nua.png",
          floorPlanImages: [
            "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948528227-7x3nua.png"
          ],
          priceEstimate: "Price on Request"
        },
        {
          id: "cfg_sc_3bhk",
          title: "3 BHK Unit Plan",
          bhkType: "3 BHK",
          superBuiltupArea: 1351.31,
          totalArea: 1351.31,
          carpetArea: 815.80,
          coveredArea: 897.50,
          balconyArea: 152.63,
          commonArea: 107.28,
          servicesArea: 107.64,
          utilitiesArea: 23.25,
          carpetAreaSqM: 75.79,
          coveredAreaSqM: 83.38,
          balconyAreaSqM: 14.18,
          totalAreaSqM: 125.54,
          bedrooms: 3,
          bathrooms: 2,
          balconies: 3,
          highlight: "Living/Dining (13'-8\" x 19'-4\"), Master Bed (10'-5\" x 13'-10\"), Bedroom 2 (10'-0\" x 10'-4\"), Bedroom 3 (10'-0\" x 10'-4\"), Kitchen (7'-2\" x 10'-6\"), 2 Toilets (5'-0\" x 7'-6\" & 5'-1\" x 7'-6\"), 1800mm Wide Balconies, 3-Side Open Layout",
          floorPlanUrl: "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948527122-9nyeu4.png",
          floorPlanImages: [
            "https://pub-8c92dc28c0514f96887bbf235d670445.r2.dev/sai%20city%20image/shree-sai-city-group-housing/1786948527122-9nyeu4.png"
          ],
          priceEstimate: "Price on Request"
        }
      ],
      amenities: [
        { name: "Monolithic Aluminium Formwork Green Tech", category: "Engineering", icon: "🏗️" },
        { name: "316.687 KLD STP with 80% Water Recycling", category: "Eco Utilities", icon: "💧" },
        { name: "The Club House & Sports Facilities", category: "Leisure", icon: "🏛️" },
        { name: "Swimming Pool with Wooden Sun Deck", category: "Health & Sports", icon: "🏊" },
        { name: "Tennis Court & Open Sports Arena", category: "Sports", icon: "🎾" },
        { name: "Rooftop Sky Gardens & Terrace Seating", category: "Leisure", icon: "🌴" },
        { name: "Proposed SSB Amusement Park & Luxury Resort", category: "Entertainment", icon: "🎡" },
        { name: "Rainwater Removal & Drainage System", category: "Eco Utilities", icon: "🌧️" },
        { name: "24x7 Gated Security with CCTV & Resident Authorization", category: "Security", icon: "🛡️" },
        { name: "Dual-Source Power & Rooftop Solar Energy", category: "Utilities", icon: "⚡" },
        { name: "Water Siphoning Stations & Reinforcement", category: "Utilities", icon: "🚰" },
        { name: "Proposed Dedicated Community School on Campus", category: "Education", icon: "🏫" },
        { name: "Direct 24.0M Wide Panchkosi Road & 12.0M Internal Road", category: "Convenience", icon: "🛣️" }
      ],
      overallProgressPct: 90,
      milestones: [
        { name: "VDA Approval, Land Development & Foundation Groundwork", pct: 100, status: "COMPLETED" },
        { name: "Monolithic Aluminium Formwork Superstructure (S+16)", pct: 100, status: "COMPLETED" },
        { name: "Internal MEP, Plumbing, Electrical & Toughened UPVC", pct: 90, status: "IN_PROGRESS" },
        { name: "Exterior Weather Coat Texture, Sky Gardens & Club House", pct: 75, status: "IN_PROGRESS" }
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
      locationName: "Dasepur, Harhua, Varanasi",
      fullAddress: "SHREE SAI CITY Mega Town Ship, Dasepur, Harhua, Varanasi, Uttar Pradesh 221105",
      googleMapUrl: "https://maps.app.goo.gl/UhJ9xeTP4r6G7HPF9?g_st=ic",
      googleMapEmbedUrl: "https://maps.google.com/maps?q=SHREE+SAI+CITY+Mega+Town+Ship,+Dasepur,+Harhua,+Varanasi,+Uttar+Pradesh+221105&t=&z=15&ie=UTF8&iwloc=&output=embed",
      geoCoordinates: { lat: 25.3789, lng: 82.9362 },
      totalLandArea: "8 Acres",
      totalUnitsCount: 450,
      featuredImage: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1786948610097-b941ee.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODY5NDg2MTAwOTctYjk0MWVlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTEsImV4cCI6MjEwMjMwODYxMX0.Fugl3Q1fB6RFcmItIcNzG8ZJmGI8sbMwA2CFYHyIkw0",
      heroImages: [
        "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1786948610097-b941ee.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODY5NDg2MTAwOTctYjk0MWVlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTEsImV4cCI6MjEwMjMwODYxMX0.Fugl3Q1fB6RFcmItIcNzG8ZJmGI8sbMwA2CFYHyIkw0",
        "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948618109-ygpqdc.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTgxMDkteWdwcWRjLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTksImV4cCI6MjEwMjMwODYxOX0.sTIShsuPCZenVgp0DhQaq2pC6tywjHHEdKy_9X5uqwI",
        "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948619049-dzkwls.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTkwNDktZHprd2xzLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MjAsImV4cCI6MjEwMjMwODYyMH0.Jn2KpvtzXWWl9cudI5i6Im6IFEESOIvGsTYZDbXlw2o",
        "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948623554-zguhs8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MjM1NTQtemd1aHM4LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MjQsImV4cCI6MjEwMjMwODYyNH0.Z5G7k5x6ngOFG0tkJP1mK1W3ZV0-WCvUPCp8pX4iuHo",
        "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948624233-nhbz35.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MjQyMzMtbmhiejM1LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MjUsImV4cCI6MjEwMjMwODYyNX0.8_gIlutInw2n8Kj9ptUOJMCT6pdQBHokV45dojy1Rcs"
      ],
      gallery: [
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/content/1786948610097-b941ee.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9jb250ZW50LzE3ODY5NDg2MTAwOTctYjk0MWVlLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTEsImV4cCI6MjEwMjMwODYxMX0.Fugl3Q1fB6RFcmItIcNzG8ZJmGI8sbMwA2CFYHyIkw0",
          title: "Exterior Drone Elevation & Front View",
          category: "Exterior"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948615341-1i5w1c.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTUzNDEtMWk1dzFjLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTYsImV4cCI6MjEwMjMwODYxNn0.n69jhHvyV57zFbr3f4LHGGmV5Wy-k5ohDkRJGatJhqc",
          title: "Master Plan & Layout Blueprint",
          category: "Master Layout"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948616294-kx0ypc.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTYyOTQta3gweXBjLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTgsImV4cCI6MjEwMjMwODYxOH0.bwl6HMM7g66piGbcpyc27CjggrpVL1tU3Db4BAOyRvo",
          title: "1 BHK Detailed Floor Plan",
          category: "Floor Plan"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948618109-ygpqdc.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTgxMDkteWdwcWRjLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTksImV4cCI6MjEwMjMwODYxOX0.sTIShsuPCZenVgp0DhQaq2pC6tywjHHEdKy_9X5uqwI",
          title: "Residential Towers Elevation",
          category: "Exterior"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948619049-dzkwls.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTkwNDktZHprd2xzLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MjAsImV4cCI6MjEwMjMwODYyMH0.Jn2KpvtzXWWl9cudI5i6Im6IFEESOIvGsTYZDbXlw2o",
          title: "Internal Courtyard & Access Corridors",
          category: "Campus"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948620162-bnsegn.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MjAxNjItYm5zZWduLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MjEsImV4cCI6MjEwMjMwODYyMX0.6RKY556InKj-xiNdq7yHG_BwFCNLJHqqWbo6ZFFcoiA",
          title: "Floor Plan & Architectural Layout",
          category: "Floor Plan"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948620850-kxhjy0.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MjA4NTAta3hoankwLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MjQsImV4cCI6MjEwMjMwODYyNH0.EZ7bQyKQ_2M9J1jZv97j8V7kkbbRVeWFocK0op4sFuw",
          title: "Wing Structure & Walkways",
          category: "Campus"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948623554-zguhs8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MjM1NTQtemd1aHM4LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MjQsImV4cCI6MjEwMjMwODYyNH0.Z5G7k5x6ngOFG0tkJP1mK1W3ZV0-WCvUPCp8pX4iuHo",
          title: "Community Area & Street Infrastructure",
          category: "Campus"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948624233-nhbz35.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MjQyMzMtbmhiejM1LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MjUsImV4cCI6MjEwMjMwODYyNX0.8_gIlutInw2n8Kj9ptUOJMCT6pdQBHokV45dojy1Rcs",
          title: "Exterior Building Perspective",
          category: "Exterior"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948625133-if56gq.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MjUxMzMtaWY1NmdxLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MjgsImV4cCI6MjEwMjMwODYyOH0.l-vLtVE5Vtq_iK7OV3oS23spmIkhl6oNmXnWKbfox9E",
          title: "Ground Floor Layout & Access Plan",
          category: "Floor Plan"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948628162-nt0gmg.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MjgxNjItbnQwZ21nLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MzIsImV4cCI6MjEwMjMwODYzMn0.tgjFKPbvqrG6dyK23SsRwhFWoLS1AQYO74adBmInLIQ",
          title: "Floor Plan Detailed Schematic",
          category: "Floor Plan"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948632183-kp2bpj.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MzIxODMta3AyYnBqLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MzQsImV4cCI6MjEwMjMwODYzNH0.D8cGxEcEvSPX4qFGsprKKYq6bTM36Xbut2auMLk6kK4",
          title: "Cluster Layout & Tower Map",
          category: "Floor Plan"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948634469-dcv8gw.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MzQ0NjktZGN2OGd3LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MzcsImV4cCI6MjEwMjMwODYzN30.OEfpgpm6PtJkSgcVhD5rrSdAfMtkqYDu5tzgWeR1SgU",
          title: "Architectural Section View",
          category: "Floor Plan"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948637554-eemsvs.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2Mzc1NTQtZWVtc3ZzLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MzksImV4cCI6MjEwMjMwODYzOX0.vjOtNHuQVb1wKh-JJMlScKOgcN8-oX5OlweOUQLW6F8",
          title: "Site Engineering & Utilities Plan",
          category: "Master Layout"
        },
        {
          url: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948639353-x29hp7.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MzkzNTMteDI5aHA3LnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2NDEsImV4cCI6MjEwMjMwODY0MX0.iaWqwTGHjfVZpH34wDqH67-Ppnon1XZyImsduPa2hC4",
          title: "Comprehensive Phase Elevation Layout",
          category: "Floor Plan"
        }
      ],
      masterPlanUrl: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948615341-1i5w1c.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTUzNDEtMWk1dzFjLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTYsImV4cCI6MjEwMjMwODYxNn0.n69jhHvyV57zFbr3f4LHGGmV5Wy-k5ohDkRJGatJhqc",
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
          floorPlanUrl: "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948616294-kx0ypc.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTYyOTQta3gweXBjLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTgsImV4cCI6MjEwMjMwODYxOH0.bwl6HMM7g66piGbcpyc27CjggrpVL1tU3Db4BAOyRvo",
          floorPlanImages: [
            "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948616294-kx0ypc.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MTYyOTQta3gweXBjLnBuZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MTgsImV4cCI6MjEwMjMwODYxOH0.bwl6HMM7g66piGbcpyc27CjggrpVL1tU3Db4BAOyRvo",
            "https://msntutkwceqmbjlauaea.supabase.co/storage/v1/object/sign/site-assets/gallery/1786948620162-bnsegn.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZTU5NjdiNS01NWViLTRhNDQtYmU0OS01NDU3NDZiNTkxMzAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWFzc2V0cy9nYWxsZXJ5LzE3ODY5NDg2MjAxNjItYm5zZWduLmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODY5NDg2MjEsImV4cCI6MjEwMjMwODYyMX0.6RKY556InKj-xiNdq7yHG_BwFCNLJHqqWbo6ZFFcoiA"
          ],
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
      category: "Residential",
      status: "Upcoming",
      tagline: "Out-of-this-world homes at down-to-earth prices — 2 BHK to 4 BHK Apartments on Amar Shaheed Path, Lucknow.",
      reraNumber: "UPRERAPRJ11089",
      reraAuthority: "Uttar Pradesh Real Estate Regulatory Authority (www.up-rera.in)",
      reraQrUrl: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://up-rera.in/ProjectSummary?id=UPRERAPRJ11089",
      startingPrice: null,
      priceDisplay: "Price on Request",
      locationName: "Bijnaur Road, Amar Shaheed Path, Lucknow",
      fullAddress: "PRATHAM, Bijnaur Road, Near Amar Shaheed Path, Lucknow, Uttar Pradesh 226002",
      googleMapUrl: "https://maps.google.com/?q=Bijnaur+Road+Amar+Shaheed+Path+Lucknow",
      googleMapEmbedUrl: "https://maps.google.com/maps?q=Bijnaur+Road,+Amar+Shaheed+Path,+Lucknow,+Uttar+Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed",
      geoCoordinates: { lat: 26.7644, lng: 80.9126 },
      approvalStatus: "UP RERA Registered (UPRERAPRJ11089)",
      totalLandArea: "10 Acres Gated Township (7 Towers: A to G)",
      totalUnitsCount: 480,
      featuredImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      heroImages: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
          title: "Pratham Residential Towers Elevation",
          category: "Exterior"
        },
        {
          url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
          title: "Lavish Club House & Central Greens",
          category: "Campus"
        },
        {
          url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
          title: "Modern Architectural Facade & Balconies",
          category: "Exterior"
        }
      ],
      description: "SSB GROUP presents PRATHAM, offering out-of-this-world residential apartments at down-to-earth prices on Bijnaur Road, Amar Shaheed Path, Lucknow. Built in a lush green, pollution-free atmosphere surrounded by picturesque Mango Orchards, PRATHAM delivers a stunning combination of great location, comfortable living, and access to all modern lifestyle amenities. The gated township comprises 7 residential high-rise towers (Tower-A to Tower-G), a lavish Club House (Tower-C), swimming pool, open amphitheatre, jogging track, senior citizen bay, landscaped gardens, 24x7 manned periphery security with boom barriers and CCTV surveillance, on-site STP, and pre-heated solar water heating systems. Strategically located just 4 km from Lucknow Airport and Metro Station, 5 km from Lulu Mall and Ansal Sushant Golf City, and 7 km from Ekana International Cricket Stadium.",
      specifications: {
        structure: "Earthquake-resistant RCC framed structure conforming to BIS Seismic codes",
        drawingDining: "Drawing & Dining with Imported / Vitrified Tiles, POP False Ceiling, pleasing shades of Low VOC Plastic Emulsion Paint with designer wallpaper on one wall",
        rooms: "Master Bedroom with Wooden Laminated Flooring; Other Bedrooms with Vitrified Tiles; POP punning with Low VOC emulsion paint",
        kitchen: "International style kitchen with Anti-skid Ceramic / Vitrified Tiles; Pre-polished Granite stone counter with Anti-Scratch Stainless Steel Sink; Ceramic tiles up to 2'-0\" HT above counter; Hot & Cold water with Solar Pre-heated Water provision",
        toiletBathroom: "Anti-skid Ceramic Tiles flooring; Glazed Ceramic Designer Wall Tiles up to 7'-0\" / 8'-0\" HT; Wall Hung WC; Diverter in Master Toilet & Shower Enclosure; Concealed Hot & Cold water with Solar Water Heater / Geyser provision; Superior quality CP & Sanitary fittings",
        balconies: "Anti-skid Ceramic Tiles / Wooden Flooring; External Grade Water Repellent Paint; Dedicated Provision for Washing Machine in Service / Utility Balcony; Space for ODU",
        staircase: "Marble / Kota Stone / Granite flooring with safety handrails; Low VOC plastic emulsion paint in passages",
        doorWindow: "Solid wood entrance door with SS fittings & Teak finish; Seasoned wood frame internal flush doors; UPVC / Powder-coated Aluminium Balcony Doors & Windows with tinted glass",
        electrical: "Concealed Copper wiring in all rooms; Modern design lights with plug point in each room; Modular Switches (Schneider / Crabtree / Anchor / SSK); Exhaust fans in all toilets & kitchen",
        plumbing: "Superior Quality CPVC / PPR Pipes for Water Supply; Superior Quality SWR Pipes for Sewage System; On-site Sewage Treatment Plant (STP)",
        security: "24 Hours manned periphery security for the complex; Boom barrier for main gate; Access control with CCTV surveillance at basement & ground floor lobby; Intercom & Video Door Phone provision",
        finishing: "Pleasing shades of Low VOC / No VOC Plastic Emulsion Paint inside, Weather-resistant exterior texture paint, Stone Cladding / ACP Work"
      },
      configurations: [
        {
          id: "cfg_pr_2bhk",
          title: "2 BHK Layout",
          bhkType: "2 BHK",
          superBuiltupArea: 990,
          totalArea: 990,
          carpetArea: 601.49,
          coveredArea: 682,
          balconyArea: 96.01,
          externalWallArea: 61.35,
          carpetAreaSqM: 55.88,
          balconyAreaSqM: 8.92,
          totalAreaSqM: 91.97,
          bedrooms: 2,
          bathrooms: 2,
          balconies: 3,
          highlight: "Living/Dining (16'-2\" x 10'-0\"), Master Bed (10'-5\" x 10'-9\"), Bed 2 (10'-0\" x 10'-9\"), Kitchen (8'-0\" x 6'-9\"), Dry Balcony (4'-0\" x 6'-9\"), 2 Balconies (11'-1\" x 4'-5\" & 4'-9\" x 4'-0\"), Space for ODU",
          priceEstimate: "Price on Request"
        },
        {
          id: "cfg_pr_2_5bhk",
          title: "2.5 BHK Layout (2 BHK + Study)",
          bhkType: "2.5 BHK",
          superBuiltupArea: 1250,
          totalArea: 1250,
          carpetArea: 750.03,
          coveredArea: 850,
          balconyArea: 125.40,
          externalWallArea: 71.04,
          carpetAreaSqM: 69.68,
          balconyAreaSqM: 11.65,
          totalAreaSqM: 116.13,
          bedrooms: 2,
          bathrooms: 2,
          balconies: 4,
          study: 1,
          highlight: "Living/Dining (18'-4\" x 10'-9\"), Master Bed (10'-5\" x 10'-9\"), Bed 2 (10'-5\" x 10'-0\"), Dedicated Study (6'-9\" x 10'-0\"), Kitchen (8'-5\" x 6'-9\"), Dry Balcony, 3 Balconies, Space for ODU",
          priceEstimate: "Price on Request"
        },
        {
          id: "cfg_pr_3bhk",
          title: "3 BHK Layout",
          bhkType: "3 BHK",
          superBuiltupArea: 1490,
          totalArea: 1490,
          carpetArea: 889.96,
          coveredArea: 1020,
          balconyArea: 167.06,
          externalWallArea: 97.31,
          carpetAreaSqM: 82.68,
          balconyAreaSqM: 15.52,
          totalAreaSqM: 138.43,
          bedrooms: 3,
          bathrooms: 2,
          balconies: 5,
          highlight: "Living/Dining (19'-1\" x 11'-5\"), Master Bed (12'-4\" x 11'-5\"), Bed 2 (10'-0\" x 12'-5\"), Bed 3 (11'-3\" x 12'-5\"), Kitchen (9'-0\" x 6'-9\"), Dry Balcony, 4 Balconies, Space for ODU",
          priceEstimate: "Price on Request"
        },
        {
          id: "cfg_pr_3_5bhk",
          title: "3.5 BHK Layout (3 BHK + Study)",
          bhkType: "3.5 BHK",
          superBuiltupArea: 1825,
          totalArea: 1825,
          carpetArea: 1113.31,
          coveredArea: 1260,
          balconyArea: 193.43,
          externalWallArea: 93.54,
          carpetAreaSqM: 103.43,
          balconyAreaSqM: 17.97,
          totalAreaSqM: 169.55,
          bedrooms: 3,
          bathrooms: 4,
          balconies: 5,
          study: 1,
          highlight: "Living (15'-9\" x 11'-7\"), Dining (8'-9\" x 11'-7\"), Master Bed (11'-0\" x 14'-3\") with Dresser, Bed 2 (10'-5\" x 12'-5\"), Bed 3 (11'-0\" x 12'-0\"), Study (7'-0\" x 10'-4\") with Attached Bath, Kitchen (10'-0\" x 6'-9\"), 4 Balconies",
          priceEstimate: "Price on Request"
        },
        {
          id: "cfg_pr_4bhk",
          title: "4 BHK Layout",
          bhkType: "4 BHK",
          superBuiltupArea: 1950,
          totalArea: 1950,
          carpetArea: 1188.33,
          coveredArea: 1350,
          balconyArea: 207.53,
          externalWallArea: 93.65,
          carpetAreaSqM: 110.40,
          balconyAreaSqM: 19.28,
          totalAreaSqM: 181.16,
          bedrooms: 4,
          bathrooms: 4,
          balconies: 5,
          highlight: "Living (15'-9\" x 11'-6\"), Dining (8'-9\" x 10'-3\"), Master Bed (11'-0\" x 14'-2\") with Dresser, Bed 2 (10'-5\" x 14'-3\"), Bed 3 (11'-0\" x 12'-0\"), Bed 4 (10'-5\" x 10'-9\"), Kitchen (12'-0\" x 6'-9\"), Dry Balcony, 4 Balconies",
          priceEstimate: "Price on Request"
        }
      ],
      amenities: [
        { name: "Lavish Club House with Indoor Recreation", category: "Leisure", icon: "🏛️" },
        { name: "Swimming Pool & Kids Splash Pool", category: "Health & Sports", icon: "🏊" },
        { name: "Open Amphitheatre & Cultural Arena", category: "Entertainment", icon: "🎭" },
        { name: "Jogging Track & Landscaped Green Walkways", category: "Health & Sports", icon: "🏃" },
        { name: "Senior Citizen Bay & Quiet Sit-Outs", category: "Community", icon: "🧓" },
        { name: "Surrounded by Picturesque Mango Orchards", category: "Eco Utilities", icon: "🌳" },
        { name: "24x7 Manned Security, CCTV & Boom Barriers", category: "Security", icon: "🛡️" },
        { name: "On-Site Sewage Treatment Plant (STP)", category: "Eco Utilities", icon: "💧" },
        { name: "Pre-Heated Solar Water Heating System", category: "Utilities", icon: "☀️" },
        { name: "Intercom & Video Door Phone Provision", category: "Security", icon: "📹" },
        { name: "Badminton & Open Sports Court", category: "Sports", icon: "🏸" },
        { name: "Easy Bank Finance Available from All Leading Banks", category: "Convenience", icon: "🏦" }
      ],
      overallProgressPct: 20,
      milestones: [
        { name: "Land Planning, UP-RERA Registration & Approvals", pct: 100, status: "COMPLETED" },
        { name: "Site Clearance, Boundary Wall & Groundbreaking", pct: 60, status: "IN_PROGRESS" },
        { name: "Tower-A to G Foundation & Civil Piling", pct: 20, status: "IN_PROGRESS" },
        { name: "Superstructure, Club House & Landscaping", pct: 0, status: "UPCOMING" }
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
    { year: "2026", status: "Upcoming", title: "Capital Expansion: Lucknow", desc: "Marked strategic growth into Lucknow with 'Pratham', a prestigious 2 BHK to 4 BHK residential gated community on Amar Shaheed Path." }
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
