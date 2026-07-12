// ════════════════════════════════════════════════════════════════════
//  SITE CONTENT — the single source of truth for the whole website.
//
//  Edit anything here and the site recompiles automatically (like
//  editing a .tex file). No HTML knowledge needed:
//    · to add a paper / post / project / talk — copy one { ... } block
//      in the matching list and edit the fields;
//    · to remove one — delete its block;
//    · to reorder — move blocks up or down (the site renders in order);
//    · text in "quotes" is what appears on the page, verbatim.
//
//  Optional fields can simply be omitted (e.g. a paper without an
//  abstract, a publication without a PDF link).
// ════════════════════════════════════════════════════════════════════

window.SITE = {

  // ── Profile / hero ──────────────────────────────────────────────
  profile: {
    name: "Minhyuk Nam",
    role: "PhD Candidate in Economics · Carnegie Mellon University",
    tagline: "Markets, energy, and the rules that shape them.",
    taglineOn: false,  // true = show the tagline headline on the home page
    photo: "assets/photo.jpeg",
    bio: "I study trading frictions in emission permit markets, optimal design of climate agreements, and electricity storage dispatch. Advised by Robert A. Miller and Ali Shourideh.",
    fields: "Environmental Economics · Industrial Organization · Market Design",
    location: "Pittsburgh, PA",
    links: [
      { label: "Email",          href: "mailto:minhyukn@andrew.cmu.edu" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=CK2TsPYAAAAJ&hl=en" },
      { label: "GitHub",         href: "https://github.com/mhnam" },
      { label: "CV ↗",           href: "files/cv/Minhyuk_Nam_CV.pdf" },
    ],
    sidebarContacts: [
      { label: "minhyukn@andrew.cmu.edu", href: "mailto:minhyukn@andrew.cmu.edu" },
      { label: "Google Scholar ↗",        href: "https://scholar.google.com/citations?user=CK2TsPYAAAAJ&hl=en" },
      { label: "GitHub ↗",                href: "https://github.com/mhnam" },
    ],
  },

  // ── Working papers ──────────────────────────────────────────────
  //  abstract is optional — papers with one get a +Abstract toggle.
  workingPapers: [
    {
      title: "Financial Intermediation in the European Emissions Market: An Empirical Analysis",
      coauthors: "Robert A. Miller",
      year: 2026, topic: "Emission markets",
      abstract: "The foundational literature on cap-and-trade — Montgomery (1972), Rubin (1996) — establishes that emission permit markets achieve cost-effective allocations under competitive equilibrium. Competitive equilibrium, however, requires a Walrasian price-clearing mechanism that does not exist in practice: in the EU Emissions Trading System, firms must find counterparties through costly search, pay to access centralized platforms, and negotiate bilaterally in decentralized markets. Using the complete record of allowance transfers from the Union Transaction Log, we compile a new transaction-level dataset covering all three trading venues — government auctions, the exchange limit-order market, and over-the-counter bilateral trades — and document patterns inconsistent with the competitive benchmark: persistent cross-venue price dispersion, inefficient inventory holdings, and active financial intermediation. We develop a continuous-time search and matching model that captures these institutional features. Heterogeneous emitters choose which venues to access, how intensely to search for OTC counterparties, and how much to trade; symmetric financial intermediaries (banks) buy from surplus firms and sell to deficit firms, earning an intermediation spread that exists only because of frictions. The model nests competitive equilibrium — where banks are redundant — as a benchmark, and the gap between the two equilibria provides the metric for measuring the cost of frictions and the value of intermediation. We specify a parametric version of the model and establish identification of all structural parameters. Estimation by full-solution methods is in progress. The estimated model will enable counterfactual analysis of market design, including the welfare consequences of financial participation.",
    },
    {
      title: "Optimal Climate Treaties as Delegation with Externalities: the Case of Dynamic Carbon Production",
      coauthors: "Ali Shourideh",
      year: 2025, topic: "Mechanism design",
      abstract: "International climate agreements must delegate emission decisions to sovereign countries that hold private information about their abatement costs while managing a global externality whose damages depend on the cumulative stock of atmospheric carbon. We formulate this problem using dynamic mechanism design and characterize the structure of optimal agreements. Our two main results are that optimal treaties exhibit a cutoff structure in which countries with sufficiently low abatement costs are induced to reduce emissions, and we derive conditions under which simple \u201ctotal carbon budget\u201d mechanisms implement the social optimum.",
    },
    {
      title: "Group Composition and Group Decision-Making: Evidence from Municipal Council Meetings in South Korea",
      coauthors: "Jay Euijung Lee and Martina Zanella",
      year: 2024, topic: "Political economy",
    },
    {
      title: "Compensating Flexibility: How Capacity Markets Distort Battery Storage Dispatch",
      year: 2025, topic: "Electricity markets",
      jmp: true,  // shows the red "Job Market Paper" badge
    },
  ],

  // ── Publications ────────────────────────────────────────────────
  publications: [
    {
      title: "The Effects of Indoor Temperature and Humidity on Local Transmission of COVID-19",
      coauthors: "H.J. Park, S.-G. Lee, J.S. Oh, S. Barrett, S. Lee, W. Hwang",
      journal: "PLoS ONE", year: "2022",
      links: [
        { label: "Journal", href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0271760" },
        { label: "PDF",     href: "files/papers/journal.pone.0271760.pdf" },
      ],
    },
    {
      title: "COVID-19 and Employment in South Korea: Trends and Comparison with the 2008 Financial Crisis",
      coauthors: "S. Lee",
      journal: "Seoul Journal of Economics", year: "2021",
      links: [
        { label: "Paper", href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3785065" },
        { label: "PDF",   href: "files/papers/COVID-19 and Employment in South Korea.pdf" },
      ],
    },
    {
      title: "Does Ramadan Harm Infant Health? Evidence from Ethiopia",
      coauthors: "S. Lee, D. Jeong, W. Lee",
      journal: "International Economic Journal", year: "2020",
      links: [
        { label: "Journal", href: "https://www.tandfonline.com/doi/full/10.1080/10168737.2020.1811750" },
        { label: "PDF",     href: "files/papers/Does Ramadan Harm Infant Health Evidence from Ethiopia.pdf" },
      ],
    },
    {
      title: "Impact of the Clean Air Act on Air Pollution and Infant Health: Evidence from South Korea",
      coauthors: "S. Lee, H. Yoo",
      journal: "Economics Letters", year: "2018",
      links: [
        { label: "Journal", href: "https://www.sciencedirect.com/science/article/abs/pii/S0165176518301393" },
        { label: "PDF",     href: "files/papers/Impact of the Clean Air Act on air pollution and infant health Evidence from South Korea.pdf" },
      ],
    },
  ],

  // ── News (short dated updates — sample entries, edit freely) ────
  news: [
    { date: "Jun 2026", text: "Presented “Financial Intermediation in the European Emissions Market” at IIOC, Boston." },
    { date: "Apr 2026", text: "New draft of my job market paper, Compensating Flexibility, is available." },
    { date: "Jan 2026", text: "TA for Econometrics II (PhD), Spring 2026." },
  ],

  // ── Blog posts (newest first; main page shows the first 3) ──────
  posts: [
    { date: "Jul 2026", title: "Reading the Union Transaction Log: notes on working with EUTL data", href: "blog.html", topic: "Data" },
    { date: "May 2026", title: "A practical checklist for estimating continuous-time search models",  href: "#", topic: "Methods" },
    { date: "Mar 2026", title: "Why battery storage bids look strange in capacity markets",           href: "#", topic: "Energy" },
    { date: "Jan 2026", title: "Setting up a reproducible Julia + Python research stack",             href: "#", topic: "Computing" },
  ],

  // ── Projects (render order = list order) ────────────────────────
  projects: [
    { name: "EUTL Explorer",        blurb: "interactive dashboard of EU ETS allowance transfers", linkLabel: "Dashboard ↗", href: "project-eutl.html" },
    { name: "storage-dispatch-sim", blurb: "battery dispatch simulation toolkit",                 linkLabel: "Code ↗",      href: "https://github.com/mhnam" },
    { name: "kr-council-scraper",   blurb: "municipal council minutes scraper & parser",          linkLabel: "Code ↗",      href: "https://github.com/mhnam" },
  ],

  // ── Talks ───────────────────────────────────────────────────────
  talks: [
    { year: "2026", title: "Financial Intermediation in the European Emissions Market", venue: "IIOC, Boston" },
    { year: "2025", title: "Optimal Climate Treaties as Delegation with Externalities", venue: "CMU Applied Micro Lunch" },
  ],

  // ── Teaching ────────────────────────────────────────────────────
  teaching: [
    {
      school: "Carnegie Mellon University", period: "· 2024–present",
      groups: [
        { level: "PhD",           courses: "Econometrics II · Econometrics III · Advanced Econometrics" },
        { level: "MBA",           courses: "Managerial Economics · Statistical Decision Making" },
        { level: "Undergraduate", courses: "Principles of Macroeconomics · Environmental Economics · Regression Analysis · Probability & Statistics" },
      ],
    },
    {
      school: "Sogang University", period: "· 2018–2022",
      groups: [
        { level: "Undergraduate", courses: "Urban Economics · Python Programming" },
      ],
    },
  ],

  // ── Sidebar submenus (hover Projects / Teaching) ────────────────
  teachingMenu: [
    { label: "Econometrics II & III",   href: "course-econometrics.html" },
    { label: "Advanced Econometrics",   href: "teaching.html" },
    { label: "MBA courses",             href: "teaching.html" },
    { label: "Undergraduate courses",   href: "teaching.html" },
  ],

  // ── Home page sections: order = display order; delete a line to hide ──
  homeSections: ["news", "research", "publications", "blog", "projects", "talks", "teaching"],

  // ── Menu appearance (true = show in navigation, all pages) ──────
  menu: {
    // false = menu item goes straight to the landing page (no + submenu)
    projectsSubmenu: true,
    teachingSubmenu: true,
    research: true,
    blog: true,
    projects: true,
    talks: true,
    teaching: true,
    cv: true,
  },

  footer: "© 2026 Minhyuk Nam",
  updated: "July 2026",
};
