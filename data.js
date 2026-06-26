/* ============================================================
   Anish J — Portfolio content (single source of truth)
   Edit this file to update the site. index.html and detail.html
   render everything below dynamically.
   ============================================================ */

const ICONS = {
  experience:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>',
  education:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.2 2.7 3 6 3s6-1.8 6-3v-5"/></svg>',
  projects:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  builds:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  involvement: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"/><path d="M16 5.5a3 3 0 0 1 0 5.5"/><path d="M21 20c0-2.5-1.3-4-3.5-4.7"/></svg>',
  blog:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h8"/><path d="M8 13h5"/></svg>'
};

const PORTFOLIO = {
  profile: {
    name: "Anish J",
    role: "Business & Operations Leader",
    status: "PGPM Candidate · Great Lakes Institute of Management",
    tagline: "Business leader experienced in scaling enterprise capabilities and driving growth through strategic thinking, decision-making, and stakeholder management.",
    location: "Chennai, India",
    email: "anishjoson@gmail.com",
    linkedin: "https://www.linkedin.com/in/anish-j-",
    github: "https://github.com/anish-site"
  },

  // Order here controls tile + section order
  order: ["experience", "education", "projects", "builds", "involvement", "blog"],

  sections: {

    experience: {
      label: "Experience",
      icon: ICONS.experience,
      tagline: "Where I've worked and what I delivered.",
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
        ]},
        { type: "tags", groups: [
          { label: "Business & Growth", items: ["Strategy", "Revenue Growth", "Inventory & Procurement", "Vendor Management", "Pre/Post-Sales", "Marketing Campaigns", "Customer Retention", "Stakeholder Management"] },
          { label: "Reliability & Engineering", items: ["Incident Management", "SRE Best Practices", "Infrastructure Scalability", "Monitoring & Uptime", "AWS", "Terraform", "Datadog"] }
        ]}
      ]
    },

    education: {
      label: "Education",
      icon: ICONS.education,
      tagline: "PGPM at Great Lakes; B.E. in Computer Science.",
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
        { type: "heading", text: "Certifications" },
        { type: "list", items: [
          "App Development — NPTEL, IIT-Madras (2017)",
          "Leading Teams — University of Michigan, Coursera (2019)"
        ]}
      ]
    },

    projects: {
      label: "Projects",
      icon: ICONS.projects,
      tagline: "Business and reliability initiatives I've led.",
      blocks: [
        { type: "cards", items: [
          { title: "Revenue Growth Initiative", meta: "Kolathur Thanga Maligai · Business", text: "Owned pre- and post-sales management and seasonal campaigns that drove a 45% increase in revenue and an improved customer experience." },
          { title: "Operational Efficiency Program", meta: "Kolathur Thanga Maligai · Operations", text: "Optimized inventory and procurement and managed vendor relations and stock reconciliation for a 25% efficiency gain." },
          { title: "Customer Retention & Campaigns", meta: "Kolathur Thanga Maligai · Marketing", text: "Marketing initiatives, seasonal campaigns, and personalized service lifted customer retention from ~45% to ~70%." },
          { title: "Incident Management Standardization", meta: "Cognizant · Reliability", text: "Standardized incident processes and SRE best practices, improving business uptime from 98.5% to 99.82%." }
        ]}
      ]
    },

    builds: {
      label: "Builds",
      icon: ICONS.builds,
      tagline: "My top builds, highlighted — with the rest kept on record below.",
      blocks: [
        { type: "lead", text: "The highlights first — my top builds. Everything else I've made is logged under Et Cetera so nothing's lost." },
        { type: "cards", items: [
          { title: "College Bus Tracking App", meta: "Android · 2019", text: "Led development of an Android application for real-time college bus tracking for students and staff." },
          { title: "Razorpay Payment Gateway", meta: "Fnplus Tech · Intern", text: "Implemented a payment gateway integration using the Razorpay API as a project intern." }
        ]},
        { type: "heading", text: "Et Cetera" },
        { type: "note", text: "A running record of every other project — smaller apps, experiments, and one-offs. (Send me the list and I'll log them all here.)" }
      ]
    },

    involvement: {
      label: "Involvement",
      icon: ICONS.involvement,
      tagline: "Positions of responsibility, activities, and events.",
      blocks: [
        { type: "cards", items: [
          { title: "FoodCom — Committee Member", meta: "Great Lakes Institute of Management", text: "Committee member contributing to the FoodCom student body at GLIM, Chennai." },
          { title: "TEDxGLIM — Club Member", meta: "Great Lakes Institute of Management", text: "Member of the TEDxGLIM club at GLIM, Chennai." },
          { title: "Technical Lead & Mentor — GDSC", meta: "Google Developer Student Club · Sathyabama", text: "Led and mentored 100+ members on Android development and helped organize community events." }
        ]}
      ]
    },

    blog: {
      label: "Blog / Thoughts",
      icon: ICONS.blog,
      tagline: "Notes on business, reliability, and learning.",
      blocks: [
        { type: "note", text: "Posts are written as Markdown files in the /posts folder and picked up automatically — add, edit, or delete a file to manage them (see SETUP-BLOG.md). The cards below are a fallback shown only if posts can't be loaded." },
        { type: "cards", items: [
          { title: "Reliability Is a Product Feature", meta: "Draft · Product", text: "Uptime, latency, and graceful failure aren't just engineering concerns — they shape how customers experience and trust a product.", link: "#", linkText: "Read (coming soon)" },
          { title: "From On-Call to the Shop Floor", meta: "Draft · Career", text: "What moving from engineering into running a business taught me about customers, margins, and decisions.", link: "#", linkText: "Read (coming soon)" },
          { title: "What an MBA Teaches an Engineer", meta: "Draft · Learning", text: "Early reflections from the PGPM at Great Lakes — finance, strategy, and communicating simply.", link: "#", linkText: "Read (coming soon)" }
        ]}
      ]
    }
  }
};
