// ─── TYPES ────────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
}

export interface Expertise {
  tag: string;
  title: string;
  description: string;
  stack: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  id: number;
  index: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  tags: string[];
  github: string;
  demo: string;
  hasCaseStudy?: boolean;
}

export interface CaseStudyOption {
  label: string;
  chosen: boolean;
  reason: string;
}

export interface CaseStudyTradeoff {
  tension: string;
  resolution: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
  delta?: string;
}

export interface CaseStudy {
  index: string;
  title: string;
  category: string;
  tagline: string;
  github: string;
  demo: string;
  overview: string;
  problem: {
    heading: string;
    body: string[];
    callout?: string;
  };
  decision: {
    heading: string;
    body: string[];
    options: CaseStudyOption[];
  };
  tradeoffs: {
    heading: string;
    items: CaseStudyTradeoff[];
  };
  results: {
    heading: string;
    metrics: CaseStudyMetric[];
    body: string;
  };
  stack: string[];
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface ContactMeta {
  label: string;
  value: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter';
  href: string;
  label: string;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: '8+', label: 'Years of experience' },
  { value: '50M+', label: 'Requests/day served' },
  { value: '30+', label: 'Production systems' },
  { value: '3', label: 'Continents deployed' },
];

export const expertise: Expertise[] = [
  {
    tag: '01',
    title: 'Software Architecture',
    description:
      'Designing distributed systems, microservices, and event-driven architectures that handle real-world scale. From domain modeling to infrastructure design — built to last.',
    stack: ['DDD', 'CQRS', 'Event Sourcing', 'Microservices'],
  },
  {
    tag: '02',
    title: 'Backend Engineering',
    description:
      'Crafting high-performance APIs, data pipelines, and server-side systems. Every abstraction is intentional, every boundary deliberate.',
    stack: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis'],
  },
  {
    tag: '03',
    title: 'Platform & Infrastructure',
    description:
      'Building the foundation teams rely on — CI/CD pipelines, observability stacks, cloud infrastructure, and developer tooling that multiplies productivity.',
    stack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
  },
];

export const timeline: Experience[] = [
  {
    role: 'Staff Software Engineer',
    company: 'Fintech Scale Inc.',
    period: '2023 — Present',
    description:
      'Leading architecture of a real-time payment processing platform handling $2B+ in annual transactions. Spearheading migration from monolith to event-driven microservices. Defining engineering standards across 4 product teams.',
    tags: ['Distributed Systems', 'Event-Driven', 'Go', 'Kafka'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    period: '2021 — 2023',
    description:
      'Architected a multi-tenant SaaS platform serving 1M+ users. Reduced p99 API latency by 78% through query optimization and strategic caching. Mentored 6 engineers and established architecture review processes.',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    role: 'Software Engineer',
    company: 'StartupXYZ',
    period: '2019 — 2021',
    description:
      'Built core product from 0 to 100k users. Designed the data model and API contracts that remain unchanged 4 years later — proof that good foundations outlive the engineers who write them.',
    tags: ['React', 'Node.js', 'TypeScript', 'Docker'],
  },
  {
    role: 'Junior Developer',
    company: 'WebSolutions Ltd.',
    period: '2017 — 2019',
    description:
      'Delivered full-stack features across 12+ client projects. Gained deep appreciation for how decisions made in week one echo through a codebase for years.',
    tags: ['JavaScript', 'Python', 'PostgreSQL'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Architecture',
    skills: [
      'Domain-Driven Design',
      'Microservices',
      'Event Sourcing',
      'CQRS',
      'Hexagonal Architecture',
      'API Design',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Go',
      'Python',
      'GraphQL',
      'REST',
      'gRPC',
      'WebSockets',
    ],
  },
  {
    category: 'Data',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Kafka',
      'Elasticsearch',
      'Prisma',
    ],
  },
  {
    category: 'Infrastructure',
    skills: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'Datadog',
    ],
  },
];

export const featuredProjects: Project[] = [
  {
    id: 1,
    index: '01',
    title: 'Distributed Payment Engine',
    category: 'Fintech · Architecture',
    description:
      'Event-driven payment processing system handling $2B+ in annual transactions. Built with CQRS and Event Sourcing patterns, ensuring zero data loss and full audit trails across 30+ microservices.',
    highlight: '99.99% uptime · 12ms p99 latency',
    tags: ['Go', 'Kafka', 'PostgreSQL', 'Event Sourcing'],
    github: 'https://github.com',
    demo: 'https://example.com',
    hasCaseStudy: true,
  },
  {
    id: 2,
    index: '02',
    title: 'Real-time Collaboration Engine',
    category: 'Infrastructure · WebSockets',
    description:
      'High-throughput collaborative editing backend supporting 10k+ concurrent document sessions. Custom CRDT implementation for conflict-free concurrent edits without central locking.',
    highlight: '10k concurrent sessions · <50ms sync',
    tags: ['Rust', 'WebSockets', 'CRDT', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 3,
    index: '03',
    title: 'Multi-Tenant SaaS Platform',
    category: 'B2B SaaS · Backend',
    description:
      'Architected and built a multi-tenant SaaS backend serving 1M+ users from scratch. Designed tenant isolation strategies, a plugin-based billing engine, and horizontal scaling infrastructure.',
    highlight: '1M+ users · 78% latency reduction',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: 4,
    index: '04',
    title: 'Observability Platform',
    category: 'DevOps · Monitoring',
    description:
      'Built a unified observability stack aggregating logs, metrics, and traces from 200+ services. Custom dashboarding layer with anomaly detection and intelligent alerting.',
    highlight: '500M+ events/day processed',
    tags: ['Python', 'ClickHouse', 'OpenTelemetry', 'Kubernetes'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 5,
    index: '05',
    title: 'API Gateway & Auth Layer',
    category: 'Security · Infrastructure',
    description:
      'Designed and implemented a zero-trust API gateway handling authentication, rate limiting, and request routing for 50+ internal services. JWT + mTLS with dynamic policy engine.',
    highlight: '50M+ requests/day · <5ms overhead',
    tags: ['Go', 'Redis', 'mTLS', 'OpenPolicy Agent'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 6,
    index: '06',
    title: 'Open Source CLI Framework',
    category: 'Developer Tools · OSS',
    description:
      'Created and maintained a CLI framework for building developer tools. Plugin architecture, auto-generated help, shell completions, and update notifications.',
    highlight: '1.2k+ stars, 40+ contributors',
    tags: ['Python', 'Apache Spark', 'dbt', 'Airflow'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

export const paymentEngineCaseStudy: CaseStudy = {
  index: '01',
  title: 'Distributed Payment Engine',
  category: 'Fintech · Architecture',
  tagline:
    'How we migrated a $2B+ payment platform from a synchronous monolith to an event-driven architecture — without a single dollar lost in transition.',
  github: 'https://github.com',
  demo: 'https://example.com',
  overview: '',
  problem: {
    heading: 'The Problem',
    body: [
      'The legacy system processed payments synchronously: a single HTTP request would lock multiple database rows, call three external providers in sequence, and only release after a full commit. Under normal load it worked. Under peak load — month-end billing, promotional spikes — it collapsed.',
      'Row-level locks cascaded into table-level contention. Timeouts would leave payments in ambiguous states. The engineering team spent 30% of their time on "payment reconciliation" — manually identifying and resolving stuck transactions. Auditing was a nightmare: the only source of truth was a mutable payments table with no history.',
      'The business impact was measurable: 0.8% of transactions required manual intervention, and each percentage point of downtime represented approximately $63k in lost processing volume.',
    ],
    callout:
      'Root cause: mutable state + synchronous coupling + no event log = unrecoverable ambiguity under failure.',
  },
  decision: {
    heading: 'Architecture Decision',
    body: [
      'We chose an Event Sourcing + CQRS architecture. Every payment intent is now an immutable event appended to an ordered log. The current state of any payment is derived by replaying its event stream — never overwritten. Write and read models are fully separated: the command side enforces business invariants, the query side serves pre-projected read models optimized per use case.',
      'The migration was incremental: we ran old and new systems in parallel for 6 weeks, reconciling outputs nightly. Zero big-bang cutover.',
    ],
    options: [
      {
        label: 'Event Sourcing + CQRS (Kafka + PostgreSQL event store)',
        chosen: true,
        reason:
          'Full audit trail, replayable events, temporal queries. Operational complexity justified by compliance requirements and scale.',
      },
      {
        label: 'Outbox Pattern on existing monolith',
        chosen: false,
        reason:
          'Would fix the immediate consistency problem but not the latency or auditing issues. Kicking the can.',
      },
      {
        label: 'Saga-based orchestration (Temporal.io)',
        chosen: false,
        reason:
          'Great for long-running workflows but adds a coordinator as SPOF. Our failure modes needed local autonomy per service, not central orchestration.',
      },
    ],
  },
  tradeoffs: {
    heading: 'Trade-offs & Tensions',
    items: [
      {
        tension: 'Eventual consistency vs. strong consistency',
        resolution:
          'Payment confirmation uses synchronous event validation within a bounded context — externally eventual, internally consistent. Saga compensations handle cross-boundary failures.',
      },
      {
        tension: 'Kafka vs. RabbitMQ for the event bus',
        resolution:
          "Kafka's log retention was non-negotiable: we need to replay any payment's full history for audits and debugging. RabbitMQ's message TTL would lose that capability.",
      },
      {
        tension: 'Event store in PostgreSQL vs. dedicated EventStoreDB',
        resolution:
          'PostgreSQL reduced operational surface area. The team already had deep expertise, existing tooling, and backup pipelines. 90% of the benefit with 10% of the migration cost.',
      },
      {
        tension: 'Schema evolution of events',
        resolution:
          'Versioned event types with upcasters. Old event versions are never mutated — new projections handle schema differences via explicit upgrade functions.',
      },
    ],
  },
  results: {
    heading: 'Results',
    metrics: [
      { value: '99.99%', label: 'Uptime SLA', delta: '↑ from 99.2%' },
      { value: '12ms', label: 'p99 latency', delta: '↓ from 340ms' },
      {
        value: '0',
        label: 'Data loss events',
        delta: '18 months running',
      },
      { value: '100%', label: 'Audit coverage', delta: '↑ from ~40%' },
    ],
    body: "The manual reconciliation burden dropped from 30% of engineering time to under 2%. Compliance audits — previously a 2-week ordeal — now take hours: any payment's full history is a single query. The architecture has absorbed 3 subsequent product pivots without structural change, which is the quietest validation of all.",
  },
  stack: [
    'Go',
    'Kafka',
    'PostgreSQL',
    'Event Sourcing',
    'CQRS',
    'Docker',
    'Kubernetes',
    'Datadog',
  ],
};

export const principles = [
  'Complexity is the enemy of reliability.',
  'Every system reflects the team that built it.',
  'The best architecture is the one you can delete.',
  'Premature optimization is a smell — not a virtue.',
];

export const aboutHeading = 'Engineer by obsession,\narchitect by necessity.';

export const aboutParagraphs = [
  'I started coding at 15, drawn by the idea that software is one of the few disciplines where you can build something out of nothing. That curiosity never left. What changed is my understanding of what "good" means.',
  'Early in my career, good meant clever. Features shipped fast, patterns applied wherever they fit. Then I inherited those systems 3 years later — and began to understand the difference between clever and simple.',
  'Today, I measure quality by how long a system survives its original authors. Can a new engineer navigate it? Can it absorb change without collapsing? Does the architecture reflect the domain — or fight it? These are the questions I bring to every engagement.',
];

export const quickFacts: QuickFact[] = [
  { label: 'Location', value: 'Remote / Global' },
  { label: 'Focus', value: 'Architecture & Backend' },
  { label: 'Availability', value: 'Open to select work' },
  { label: 'Languages', value: 'Go, TypeScript, Python' },
  { label: 'Industries', value: 'Fintech, SaaS, Infrastructure' },
  { label: 'Open Source', value: 'Active contributor' },
];

export const contactMeta: ContactMeta[] = [
  { label: 'Location', value: 'Remote — Available globally' },
  { label: 'Response', value: 'Within 24 hours' },
];

export const socialLinks: SocialLink[] = [
  { platform: 'github', href: 'https://github.com', label: 'GitHub' },
  {
    platform: 'linkedin',
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    platform: 'twitter',
    href: 'https://twitter.com',
    label: 'Twitter',
  },
];

export const idealEngagements = [
  'Distributed systems design & architecture',
  'Engineering leadership (Staff / Principal)',
  'High-scale backend infrastructure',
  'Technical due diligence',
];

export const navItems = [
  { name: 'About', path: '/#about' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/#contact' },
];
