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
    role: "Product & Operations Leader",
    status: "PGPM Candidate · Great Lakes Institute of Management",
    tagline: "I turn complex technical systems into reliable, customer-focused products — now sharpening the business lens through an MBA.",
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
      tagline: "Engineer-turned-product leader, now in business school.",
      preview: [
        "4+ years across Product & SRE",
        "Engineering foundation, business lens",
        "Based in Chennai, India"
      ],
      glance: {
        summary: "Product manager and site reliability engineer who turns complex technical systems into products people can rely on — now sharpening the business lens through an MBA.",
        highlights: [
          { h: "4+ years in tech", t: "Across product management and site reliability engineering at Cognizant." },
          { h: "Engineering foundation", t: "B.E. in Computer Science, with a builder's instinct for how systems really work." },
          { h: "Business lens", t: "PGPM at Great Lakes Institute of Management — strategy, finance, and leadership." },
          { h: "Based in Chennai", t: "Open to product and operations roles, in India and remote." }
        ]
      },
      blocks: [
        { type: "lead", text: "I'm Anish — a product manager and site reliability engineer who likes turning messy technical systems into products people can actually rely on." },
        { type: "para", text: "I began my career engineering reliability into mission-critical systems, then grew into product management, where I learned to translate technical depth into customer value. Understanding **how** systems work *and* **why** they matter to the business is what drives me." },
        { type: "para", text: "Today I'm pursuing a Post Graduate Program in Management at **Great Lakes Institute of Management**, formalizing the strategy, finance, and leadership skills to take products from idea to impact at scale." },
        { type: "list", items: [
          "Product strategy & roadmapping",
          "Reliability & operational excellence",
          "Data-driven decision making",
          "Cross-functional leadership"
        ]}
      ]
    },

    resume: {
      label: "Résumé",
      icon: ICONS.resume,
      tagline: "A snapshot of experience, skills, and impact.",
      preview: [
        "PM + SRE dual expertise",
        "AWS · Terraform · Datadog · Split.io",
        "Full résumé available on request"
      ],
      glance: {
        summary: "A snapshot of roles, skills, and the impact behind them — built on a CS degree and a management education in progress.",
        highlights: [
          { h: "Associate Product Manager", t: "Defined features and ran A/B tests to ship an improved customer mobile web app." },
          { h: "Site Reliability Engineer", t: "Owned production stability and led a next-gen platform migration." },
          { h: "Core stack", t: "AWS · Terraform · Datadog · Splunk · PagerDuty · Split.io · incident.io." },
          { h: "Full résumé (PDF)", t: "Available on request — email anishjoson@gmail.com." }
        ]
      },
      blocks: [
        { type: "lead", text: "Product manager and site reliability engineer with 4+ years of experience shipping reliable, customer-facing systems — backed by a computer science degree and a management education in progress." },
        { type: "timeline", entries: [
          { title: "Associate Product Manager", org: "Cognizant Technology Solutions", when: "Dec 2023 – Present", place: "Chennai, India", points: [
            "Defined product features and flows to roll out an improved customer mobile web app.",
            "Ran user-based A/B testing through feature flags on Split.io.",
            "Partnered with engineering and SRE teams on production issues and bug prioritization."
          ]},
          { title: "Site Reliability Engineer", org: "Cognizant Technology Solutions", when: "Jul 2021 – Dec 2023", place: "Chennai, India", points: [
            "Owned production stability for an RSA insurance application handling policy and coverage data.",
            "Led migration from a legacy system to a next-gen platform and built the incident practice behind it.",
            "Defined incident processes and IaC using Terraform, PagerDuty, and incident.io."
          ]}
        ]},
        { type: "tags", groups: [
          { label: "Product & Business", items: ["Product Strategy", "Roadmapping", "A/B Testing", "Stakeholder Mgmt", "User Research"] },
          { label: "Reliability & Infra", items: ["AWS", "Terraform", "Harness", "Datadog", "Splunk", "PagerDuty", "Rollbar", "incident.io"] },
          { label: "Languages", items: ["SQL", "C++", "Java", "YAML"] },
          { label: "Tools", items: ["Jira / Confluence", "Lucidchart", "Sigma", "Split.io", "Postman", "Slack"] }
        ]},
        { type: "note", text: "Want the full PDF résumé? Email me at anishjoson@gmail.com and I'll send it over." }
      ]
    },

    education: {
      label: "Education",
      icon: ICONS.education,
      tagline: "PGPM at Great Lakes; B.E. in Computer Science.",
      preview: [
        "PGPM — Great Lakes (2026–27)",
        "B.E. CSE — Sathyabama (CGPA 7.81)",
        "Certs: NPTEL · Coursera"
      ],
      glance: {
        summary: "A computer science degree, a management program in progress, and certifications along the way.",
        highlights: [
          { h: "PGPM — Great Lakes", t: "Post Graduate Program in Management, 2026–2027, Chennai." },
          { h: "B.E. Computer Science", t: "Sathyabama Institute, 2017–2021, CGPA 7.81." },
          { h: "Leadership", t: "Tech Lead at Google Developer Student Clubs — mentored 100+ members." },
          { h: "Certifications", t: "App Development (NPTEL, IIT-Madras) and Leading Teams (Michigan, Coursera)." }
        ]
      },
      blocks: [
        { type: "timeline", entries: [
          { title: "Post Graduate Program in Management (PGPM)", org: "Great Lakes Institute of Management", when: "2026 – 2027", place: "Chennai, India", points: [
            "Building core management capabilities across strategy, finance, marketing, and operations.",
            "Applying a product and operations background to data-driven business problem solving.",
            "Engaging in case-based learning, team projects, and leadership development."
          ]},
          { title: "B.E. Computer Science & Engineering", org: "Sathyabama Institute of Science and Technology", when: "Aug 2017 – May 2021", place: "Chennai, India · CGPA 7.81", points: [
            "Tech Lead, Google Developer Student Clubs — mentored 100+ members on Android development and organized 10+ events.",
            "Co-hosted 5+ departmental contests for 200+ students; wrote for the department magazine.",
            "Selected for Google India–Partner Innovation alongside 30 students nationwide; submitted a proposal to Swiggy.",
            "Collaborated with 15 MIT students in a 3-day workshop on assistive technology."
          ]}
        ]},
        { type: "cards", items: [
          { title: "App Development", meta: "NPTEL · IIT-Madras · 2017", text: "Foundations of mobile application development." },
          { title: "Leading Teams", meta: "University of Michigan · Coursera · 2019", text: "Team leadership, motivation, and decision making." }
        ]}
      ]
    },

    jobs: {
      label: "Jobs",
      icon: ICONS.jobs,
      tagline: "Where I've worked and what I shipped.",
      preview: [
        "Associate PM — Cognizant",
        "Site Reliability Engineer — Cognizant",
        "Jul 2021 – Present"
      ],
      glance: {
        summary: "Two roles at Cognizant — building products and keeping them reliable.",
        highlights: [
          { h: "Associate Product Manager", t: "Dec 2023–Present · feature definition, A/B testing on Split.io, cross-team delivery." },
          { h: "Site Reliability Engineer", t: "2021–2023 · primary POC for an insurance app; led a legacy-to-next-gen migration." },
          { h: "Reliability practice", t: "Runbooks, IaC with Terraform, incident processes via PagerDuty and incident.io." },
          { h: "Observability", t: "Splunk and Sigma reporting; Datadog and Rollbar monitoring for low downtime." }
        ]
      },
      blocks: [
        { type: "timeline", entries: [
          { title: "Associate Product Manager", org: "Cognizant Technology Solutions", when: "Dec 2023 – Present", place: "Chennai, India", points: [
            "Defined product feature specifications and flows using Lucidchart to roll out an improved customer mobile web app.",
            "Managed feature flags on Split.io to enable user-based A/B testing and controlled rollouts.",
            "Documented product flows on Confluence and delivered slide decks as part of product training.",
            "Collaborated with client engineering and SRE teams on production issues and bug-ticket prioritization.",
            "Drove bug-bash sessions to surface product and UI/UX enhancements."
          ]},
          { title: "Site Reliability Engineer", org: "Cognizant Technology Solutions", when: "Jul 2021 – Dec 2023", place: "Chennai, India", points: [
            "Served as primary point of contact for an RSA insurance application handling policy and vehicle-coverage data.",
            "Led the team's migration from a legacy system to a next-gen platform and facilitated knowledge transfer.",
            "Presented Splunk and Sigma reports to clients, proactively identifying issues and scalability adjustments.",
            "Handled deployments on Harness with post-deployment monitoring via Datadog and Rollbar for minimal downtime.",
            "Codified workflows as runbooks and playbooks; defined incident processes and IaC using Terraform, PagerDuty, and incident.io.",
            "Conducted post-mortem analyses to close gaps and prevent incident recurrence."
          ]}
        ]}
      ]
    },

    blog: {
      label: "Blog / Thoughts",
      icon: ICONS.blog,
      tagline: "Notes on product, reliability, and learning.",
      preview: [
        "Reliability is a product feature",
        "From on-call to roadmap",
        "What an MBA teaches an engineer"
      ],
      glance: {
        summary: "Short notes on product, reliability, and learning in business school. (Starter drafts — easy to swap for the real thing in data.js.)",
        highlights: [
          { h: "Reliability Is a Product Feature", t: "Why uptime and graceful failure belong on the roadmap, not just in ops." },
          { h: "From On-Call to Roadmap", t: "What moving from SRE into product taught me about prioritization." },
          { h: "What an MBA Teaches an Engineer", t: "Early reflections from the PGPM at Great Lakes." },
          { h: "More coming soon", t: "These are placeholders — real posts and links land here next." }
        ]
      },
      blocks: [
        { type: "note", text: "Posts are written as Markdown files in the /posts folder and picked up automatically — add, edit, or delete a file to manage them (see SETUP-BLOG.md). The cards below are a fallback shown only if posts can't be loaded." },
        { type: "cards", items: [
          { title: "Reliability Is a Product Feature", meta: "Draft · Product", text: "Uptime, latency, and graceful failure aren't just engineering concerns — they shape how customers experience and trust a product. A look at bringing SRE thinking into the roadmap.", link: "#", linkText: "Read (coming soon)" },
          { title: "From On-Call to Roadmap", meta: "Draft · Career", text: "What moving from site reliability into product management taught me about empathy, prioritization, and saying no to the right things.", link: "#", linkText: "Read (coming soon)" },
          { title: "What an MBA Teaches an Engineer", meta: "Draft · Learning", text: "Early reflections from the PGPM at Great Lakes — finance, strategy, and the surprisingly hard skill of communicating simply.", link: "#", linkText: "Read (coming soon)" }
        ]}
      ]
    },

    projects: {
      label: "Projects",
      icon: ICONS.projects,
      tagline: "Things I've built and shipped.",
      preview: [
        "Customer mobile web app revamp",
        "Legacy → next-gen migration",
        "College bus tracker app"
      ],
      glance: {
        summary: "A mix of product, reliability, and engineering work — from enterprise systems to student projects.",
        highlights: [
          { h: "Customer Mobile Web App Revamp", t: "Feature definition and A/B experiments via Split.io at Cognizant." },
          { h: "Next-Gen Platform Migration", t: "Led the move off a legacy insurance system with minimal downtime." },
          { h: "College Bus Tracking App", t: "Android app for real-time bus tracking (2019)." },
          { h: "Razorpay Payment Gateway", t: "Payment integration built as a project intern at Fnplus Tech." }
        ]
      },
      blocks: [
        { type: "cards", items: [
          { title: "Customer Mobile Web App Revamp", meta: "Cognizant · Product", text: "Defined features and flows and ran A/B experiments via Split.io to ship an improved customer-facing mobile web experience." },
          { title: "Next-Gen Platform Migration", meta: "Cognizant · SRE", text: "Led the move from a legacy insurance system to a next-gen platform, with knowledge transfer, runbooks, and minimal downtime." },
          { title: "Incident & Observability Practice", meta: "Cognizant · Reliability", text: "Built the incident response and monitoring foundation using Datadog, PagerDuty, incident.io, and Terraform-defined IaC." },
          { title: "College Bus Tracking App", meta: "Android · 2019", text: "Led development of an Android application to track college buses in real time for students and staff." },
          { title: "Razorpay Payment Gateway", meta: "Fnplus Tech · Intern", text: "Implemented a payment gateway integration using the Razorpay API as a project intern." },
          { title: "GDSC Android Mentorship", meta: "Google Developer Student Clubs", text: "Mentored 100+ members on Android development as Tech Lead and helped organize 10+ community events." }
        ]}
      ]
    }
  }
};
