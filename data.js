/* ============================================================
   Anish J — Portfolio content (single source of truth)
   Edit this file to update the site. index.html and detail.html
   render everything below dynamically.
   ============================================================ */

const ICONS = {
  experience:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>',
  education:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.2 2.7 3 6 3s6-1.8 6-3v-5"/></svg>',
  builds:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  involvement: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"/><path d="M16 5.5a3 3 0 0 1 0 5.5"/><path d="M21 20c0-2.5-1.3-4-3.5-4.7"/></svg>',
  blog:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h8"/><path d="M8 13h5"/></svg>'
};

const PORTFOLIO = {
  profile: {
    name: "Anish J",
    role: "Product and Business enthusiast",
    status: "PGPM Candidate · Great Lakes Institute of Management",
    tagline: "Business professional having owned production systems, client reporting for 200+ enterprise stakeholders, and running retail operations across revenue and retention. Now identifying business problems and seeking to drive operational efficiency.",
    location: "Chennai, India",
    email: "anishjoson@gmail.com",
    linkedin: "https://www.linkedin.com/in/anish-j-",
    github: "https://github.com/anish-site"
  },

  // Order here controls tile + section order
  order: ["builds", "involvement", "blog", "experience", "education"],

  sections: {

    experience: {
      label: "Experience",
      icon: ICONS.experience,
      tagline: "Where I've worked and what I delivered.",
      blocks: [
        { type: "lead", text: "Click a role to open what I delivered there." },
        { type: "explist", entries: [
          { title: "Business Manager", org: "Kolathur Thanga Maligai", when: "Mar 2025 – Apr 2026", place: "Chennai, India", points: [
            "Accomplished a 45% increase in revenue (FY'26–FY'27) through pre- and post-sales management, driving higher sales and an improved customer experience.",
            "Optimized inventory and procurement costs and managed vendor/supply relations and stock reconciliation, achieving a 25% increase in operational efficiency.",
            "Delivered higher footfalls and sales through marketing initiatives, seasonal campaign strategies, and personalized service — lifting customer retention from ~45% to ~70%."
          ], skills: ["Strategy", "Revenue Growth", "Inventory & Procurement", "Vendor Management", "Pre/Post-Sales", "Marketing Campaigns", "Customer Retention", "Stakeholder Management"] },
          { title: "Software Engineer", org: "Cognizant Technology Solutions", when: "Jul 2021 – Aug 2024", place: "Chennai, India", points: [
            "Rebuilt incident triage and RCA workflow, improving business uptime from 98.5% (H2 2023) to 99.82% (H1 2024).",
            "Turned infra utilization data into a monthly cost review with the client, cutting 5% in soft-dollar spend.",
            "Built Datadog dashboards and Terraform-managed monitors across 5 services, cutting mean detection time from approx. 18 mins to 5 mins.",
            "Owned the RSA application as single POC and ran its migration to the next-gen platform for 3 clients, with no downtime post cut-over.",
            "Ran bi-weekly release readiness reviews with dev, QA and client teams, cutting repeat incidents by approx. 15%."
          ], skills: ["Incident Management", "SRE Best Practices", "Infrastructure Scalability", "Monitoring & Uptime", "AWS", "Terraform", "Datadog"] }
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
            "Mentored as Tech Lead (Google Developer Student Clubs — Sathyabama IST) on Android development for 100+ members, and guided the team to organise and conduct 10+ events (June 2019 – April 2021).",
            "Managed and co-hosted 5+ contests for the department for over 200 students.",
            "Wrote columns for the department magazine (June – July 2018).",
            "Attended Google India–Partner Innovation along with 30 other students across India, and submitted a project proposal to Swiggy.",
            "Collaborated with 15 MIT (Massachusetts) students in a 3-day workshop on assistive technology.",
            "Led the team for development of an Android application for tracking college bus (2019).",
            "Completed certification on App Development from IIT-Madras (2017, NPTEL) and on Leading Teams from University of Michigan (2019, Coursera).",
            "Implemented the payment gateway as a project intern for Fnplus Tech using the Razorpay API."
          ]}
        ]}
      ]
    },

    builds: {
      label: "Builds & Projects",
      icon: ICONS.builds,
      tagline: "Apps I've built and shipped, plus a record of everything else.",
      blocks: [
        { type: "lead", text: "The highlights first — apps I've built and shipped. Click any card to open the live app. Everything else I've made is logged under Et Cetera so nothing's lost." },
        { type: "cards", group: "highlight", items: [
          { title: "QuickTimes", meta: "News digest · Live app", text: "Keeps you up to date with the day's news from your favourite newspaper, for the days you don't have time to read it.", link: "https://quicktimes.lovable.app/" },
          { title: "DreamJar", meta: "Dream journal · Live app", text: "Log your creative dreams before they fade — and track sleep quality based on whether a dream showed up at all.", link: "https://dreamjar.lovable.app/" },
          { title: "Cold Call Me", meta: "Portfolio builder · Live app", text: "A one-stop, MBA-specific portfolio builder for non-tech folks who need a presence without writing any code.", link: "https://cold-call-me.vercel.app/" },
          { title: "Chennai Compass", meta: "City guide · Live app", text: "A personal guide to Chennai for students arriving from other parts of the world.", link: "https://chennai-compass.vercel.app/" }
        ]},
        // A group with no cards is hidden, heading included. Add a file with
        // `group: project` to /builds and this section reappears on its own.
        { type: "cards", group: "project", heading: "Projects", items: [] },
        { type: "cards", group: "etcetera", heading: "Et Cetera", intro: "A running record of everything else — smaller apps, experiments, and one-offs.", items: [
          { title: "College Bus Tracking App", meta: "Android · 2019", text: "Led development of an Android application for real-time college bus tracking for students and staff." },
          { title: "Razorpay Payment Gateway", meta: "Fnplus Tech · Intern", text: "Implemented a payment gateway integration using the Razorpay API as a project intern." }
        ]}
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
      // Posts come from Markdown files in /posts (see SETUP-BLOG.md).
      // detail.html shows loading, empty and error states around this list.
      blocks: [
        { type: "posts" }
      ]
    }
  }
};
