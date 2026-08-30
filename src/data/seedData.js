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
