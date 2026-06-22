/* ============================================================
   Anish J — Portfolio content (single source of truth)
   Edit this file to update the site. index.html and detail.html
   render everything below dynamically.
   ============================================================ */

const ICONS = {
  bio:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>',
  resume:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>',
  education: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.2 2.7 3 6 3s6-1.8 6-3v-5"/></svg>',
  jobs:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>',
  blog:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h8"/><path d="M8 13h5"/></svg>',
  projects:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
};

const PORTFOLIO = {
  profile: {
    name: "Anish J",
    role: "Business & Operations Leader",
    status: "PGPM Candidate · Great Lakes Institute of Management",
    tagline: "Business leader experienced in scaling enterprise capabilities and driving growth through strategic thinking, decision-making, and stakeholder management.",
    location: "Chennai, India",
    email: "anishjoson@gmail.com",
    linkedin: "https://www.linkedin.com/in/anish-j-"
  },

  // Order here controls tab + tile order
  order: ["bio", "resume", "education", "jobs", "blog", "projects"],

  sections: {

    bio: {
      label: "Bio",
      icon: ICONS.bio,
      tagline: "From engineering reliability to running a business — now in management school.",
      preview: [
        "Business Manager → 45% revenue growth",
        "Ex-Software Engineer → 99.82% uptime",
        "PGPM at Great Lakes (pursuing)"
      ],
      glance: {
        summary: "A business leader who started in engineering, scaled a retail business end-to-end, and is now formalizing the strategy and finance behind it with an MBA.",
        highlights: [
          { h: "Business leadership", t: "Drove 45% revenue growth and 25% efficiency gains as a Business Manager." },
          { h: "Engineering foundation", t: "Software Engineer at Cognizant — lifted uptime from 98.5% to 99.82%." },
          { h: "Strategy & stakeholders", t: "Strength in strategic thinking, decision-making, and stakeholder management." },
          { h: "PGPM at Great Lakes", t: "Pursuing a Post Graduate Program in Management, Chennai." }
        ]
      },
      blocks: [
        { type: "lead", text: "I'm Anish — a business and operations leader who started out engineering reliable systems, then moved into running a business end-to-end, and is now sharpening the strategy and finance behind it with an MBA." },
        { type: "para", text: "I'm experienced in **scaling enterprise capabilities and driving growth** through strategic thinking, decision-making, and stakeholder management. As a Business Manager I owned pre- and post-sales, inventory, procurement, vendor relationships, and marketing — growing revenue **45%** while lifting customer retention from ~45% to ~70%." },
        { type: "para", text: "Before that, as a Software Engineer at Cognizant, I built the incident-management and reliability practices that took business uptime from **98.5% to 99.82%**. That blend of operational rigor and commercial instinct is what I bring to every team." },
        { type: "list", items: [
          "Strategy & decision-making",
          "Revenue & growth",
          "Operational efficiency",
          "Stakeholder management"
        ]}
      ]
    },

    resume: {
      label: "Résumé",
      icon: ICONS.resume,
      tagline: "Experience, impact, and the metrics behind them.",
      preview: [
        "Business Manager · +45% revenue",
        "Software Engineer · 99.82% uptime",
        "PGPM — Great Lakes (pursuing)"
      ],
      glance: {
        summary: "Business leadership and engineering, with results: revenue growth, operational efficiency, and reliability.",
        highlights: [
          { h: "Business Manager", t: "Kolathur Thanga Maligai — 45% revenue growth, 25% efficiency, ~70% retention." },
          { h: "Software Engineer", t: "Cognizant — uptime 98.5% → 99.82%, 5% soft-dollar savings." },
          { h: "Education", t: "PGPM (Great Lakes, pursuing); B.E. Computer Science (Sathyabama)." },
          { h: "Strengths", t: "Strategy, stakeholder management, operations, reliability." }
        ]
      },
      blocks: [
        { type: "lead", text: "Business leader experienced in scaling enterprise capabilities and driving growth through strategic thinking, decision-making, and stakeholder management." },
        { type: "timeline", entries: [
          { title: "Business Manager", org: "Kolathur Thanga Maligai", when: "Mar 2025 – Apr 2026", place: "Chennai, India", points: [
            "Drove a 45% increase in revenue through pre- and post-sales management.",
            "Optimized inventory, procurement, and vendor relations for a 25% efficiency gain.",
            "Lifted customer retention from ~45% to ~70% via marketing and seasonal campaigns."
          ]},
          { title: "Software Engineer", org: "Cognizant Technology Solutions", when: "Jul 2021 – Aug 2024", place: "Chennai, India", points: [
            "Standardized incident management, improving uptime from 98.5% to 99.82%.",
            "Delivered 5% soft-dollar savings through data-driven reporting.",
            "Implemented SRE best practices with cross-functional teams to cut downtime."
          ]}
        ]},
        { type: "tags", groups: [
          { label: "Business & Growth", items: ["Strategy", "Revenue Growth", "P&L Awareness", "Inventory & Procurement", "Vendor Management", "Pre/Post-Sales", "Marketing Campaigns", "Customer Retention", "Stakeholder Management"] },
          { label: "Reliability & Engineering", items: ["Incident Management", "SRE Best Practices", "Infrastructure Scalability", "Monitoring & Uptime", "AWS", "Terraform", "Datadog"] },
          { label: "Languages", items: ["SQL", "C++", "Java", "YAML"] },
          { label: "Tools", items: ["Jira / Confluence", "Splunk", "PagerDuty", "Postman", "Slack"] }
        ]},
        { type: "note", text: "Want the full PDF résumé? Email me at anishjoson@gmail.com and I'll send it over." }
      ]
    },

    education: {
      label: "Education",
      icon: ICONS.education,
      tagline: "PGPM at Great Lakes; B.E. in Computer Science.",
      preview: [
        "PGPM — Great Lakes (pursuing)",
        "B.E. CSE — Sathyabama",
        "Leadership at GLIM & GDSC"
      ],
      glance: {
        summary: "A management program in progress, a computer science degree, and active leadership roles.",
        highlights: [
          { h: "PGPM — Great Lakes", t: "Post Graduate Program in Management, Chennai (pursuing)." },
          { h: "B.E. Computer Science", t: "Sathyabama Institute of Science and Technology, Chennai." },
          { h: "Positions of responsibility", t: "FoodCom & TEDxGLIM at GLIM; Tech Lead & Mentor at GDSC." },
          { h: "Leadership", t: "Mentored 100+ members as Google DSC Technical Lead." }
        ]
      },
      blocks: [
        { type: "timeline", entries: [
          { title: "Post Graduate Program in Management (PGPM)", org: "Great Lakes Institute of Management", when: "2026 – 2027", place: "Chennai, India · Pursuing", points: [
            "Building core management capabilities across strategy, finance, marketing, and operations.",
            "Applying business and engineering experience to data-driven decision making."
          ]},
          { title: "B.E. Computer Science & Engineering", org: "Sathyabama Institute of Science and Technology", when: "Aug 2017 – May 2021", place: "Chennai, India", points: [
            "Foundation in computer science, software engineering, and data structures.",
            "Active in technical community leadership and student development."
          ]}
        ]},
        { type: "heading", text: "Positions of Responsibility" },
        { type: "cards", items: [
          { title: "FoodCom — Committee Member", meta: "Great Lakes Institute of Management", text: "Committee member contributing to the FoodCom student body at GLIM, Chennai." },
          { title: "TEDxGLIM — Club Member", meta: "Great Lakes Institute of Management", text: "Member of the TEDxGLIM club at GLIM, Chennai." },
          { title: "Technical Lead & Mentor — GDSC", meta: "Google Developer Student Club · Sathyabama", text: "Led and mentored 100+ members on Android development and helped organize community events." }
        ]}
      ]
    },

    jobs: {
      label: "Jobs",
      icon: ICONS.jobs,
      tagline: "Where I've worked and what I delivered.",
      preview: [
        "Business Manager — Kolathur Thanga Maligai",
        "Software Engineer — Cognizant",
        "Mar 2025 – Apr 2026 · Jul 2021 – Aug 2024"
      ],
      glance: {
        summary: "Two roles — running a business and engineering reliability — each with measurable impact.",
        highlights: [
          { h: "Business Manager · 2025–2026", t: "Kolathur Thanga Maligai — sales, inventory, vendors, marketing." },
          { h: "45% revenue growth", t: "Through pre/post-sales management and seasonal campaigns." },
          { h: "Software Engineer · 2021–2024", t: "Cognizant — incident management and SRE best practices." },
          { h: "99.82% uptime", t: "Improved business uptime from 98.5% to 99.82%." }
        ]
      },
      blocks: [
        { type: "timeline", entries: [
          { title: "Business Manager", org: "Kolathur Thanga Maligai", when: "Mar 2025 – Apr 2026", place: "Chennai, India", points: [
            "Accomplished a 45% increase in revenue (FY'26–FY'27) through pre- and post-sales management, driving higher sales and an improved customer experience.",
            "Optimized inventory and procurement costs and managed vendor/supply relations and stock reconciliation, achieving a 25% increase in operational efficiency.",
            "Delivered higher footfalls and sales through marketing initiatives, seasonal campaign strategies, and personalized service — lifting customer retention from ~45% to ~70%."
          ]},
          { title: "Software Engineer", org: "Cognizant Technology Solutions", when: "Jul 2021 – Aug 2024", place: "Chennai, India", points: [
            "Standardized incident management processes, improving business uptime from 98.5% (H2 2023) to 99.82% (H1 2024).",
            "Accounted for 5% soft-dollar savings through data-driven reports, improving infrastructure scalability.",
            "Collaborated with cross-functional teams to implement SRE best practices, reducing bug introduction and downtime for higher operational efficiency."
          ]}
        ]}
      ]
    },

    blog: {
      label: "Blog / Thoughts",
      icon: ICONS.blog,
      tagline: "Notes on business, reliability, and learning.",
      preview: [
        "Reliability is a product feature",
        "From on-call to the shop floor",
        "What an MBA teaches an engineer"
      ],
      glance: {
        summary: "Short notes on business, reliability, and learning in management school. (Starter drafts — easy to swap for the real thing in /posts.)",
        highlights: [
          { h: "Reliability Is a Product Feature", t: "Why uptime and graceful failure belong on the roadmap, not just in ops." },
          { h: "From On-Call to the Shop Floor", t: "What moving from engineering into running a business taught me." },
          { h: "What an MBA Teaches an Engineer", t: "Early reflections from the PGPM at Great Lakes." },
          { h: "More coming soon", t: "Add Markdown files to /posts and they appear here automatically." }
        ]
      },
      blocks: [
        { type: "note", text: "Posts are written as Markdown files in the /posts folder and picked up automatically — add, edit, or delete a file to manage them (see SETUP-BLOG.md). The cards below are a fallback shown only if posts can't be loaded." },
        { type: "cards", items: [
          { title: "Reliability Is a Product Feature", meta: "Draft · Product", text: "Uptime, latency, and graceful failure aren't just engineering concerns — they shape how customers experience and trust a product.", link: "#", linkText: "Read (coming soon)" },
          { title: "From On-Call to the Shop Floor", meta: "Draft · Career", text: "What moving from engineering into running a business taught me about customers, margins, and decisions.", link: "#", linkText: "Read (coming soon)" },
          { title: "What an MBA Teaches an Engineer", meta: "Draft · Learning", text: "Early reflections from the PGPM at Great Lakes — finance, strategy, and communicating simply.", link: "#", linkText: "Read (coming soon)" }
        ]}
      ]
    },

    projects: {
      label: "Projects",
      icon: ICONS.projects,
      tagline: "Initiatives and projects I've delivered.",
      preview: [
        "Revenue growth initiative (+45%)",
        "Incident management standardization",
        "College bus tracker app"
      ],
      glance: {
        summary: "Business initiatives and engineering projects, grounded in measurable outcomes.",
        highlights: [
          { h: "Revenue Growth Initiative", t: "Pre/post-sales + campaigns → 45% revenue increase." },
          { h: "Operational Efficiency", t: "Inventory, procurement, vendor management → 25% gain." },
          { h: "Incident Management", t: "Standardized processes → 99.82% uptime." },
          { h: "Customer Retention", t: "Personalized service & campaigns → ~70% retention." }
        ]
      },
      blocks: [
        { type: "cards", items: [
          { title: "Revenue Growth Initiative", meta: "Kolathur Thanga Maligai · Business", text: "Owned pre- and post-sales management and seasonal campaigns that drove a 45% increase in revenue and an improved customer experience." },
          { title: "Operational Efficiency Program", meta: "Kolathur Thanga Maligai · Operations", text: "Optimized inventory and procurement and managed vendor relations and stock reconciliation for a 25% efficiency gain." },
          { title: "Customer Retention & Campaigns", meta: "Kolathur Thanga Maligai · Marketing", text: "Marketing initiatives, seasonal campaigns, and personalized service lifted customer retention from ~45% to ~70%." },
          { title: "Incident Management Standardization", meta: "Cognizant · Reliability", text: "Standardized incident processes and SRE best practices, improving business uptime from 98.5% to 99.82%." },
          { title: "College Bus Tracking App", meta: "Android · 2019", text: "Led development of an Android application for real-time college bus tracking." },
          { title: "Razorpay Payment Gateway", meta: "Fnplus Tech · Intern", text: "Implemented a payment gateway integration using the Razorpay API as a project intern." }
        ]}
      ]
    }
  }
};
