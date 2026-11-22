/** Portfolio content lives here so updates never require editing UI components. */
export type ProjectCategory = 'Full-stack' | 'AI / ML' | 'Backend' | 'Testing';
export type ProjectStatus = 'Completed' | 'In development';

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  detail: string;
  stack: string[];
  github?: string;
  demo?: string;
  image?: string;
  visual: 'knowledge' | 'rental' | 'document' | 'route' | 'clinical' | 'truck' | 'testing' | 'store' | 'meeting' | 'triage' | 'agent';
  featured?: boolean;
}

export const profile = {
  fullName: 'Muhammad Faizan Yousaf',
  shortName: 'Faizan Yousaf',
  role: 'Full-Stack Engineer & Applied AI Developer',
  location: 'Faisalabad, Pakistan',
  email: 'faizanyousaf140@gmail.com',
  github: 'https://github.com/Faizanyousaf140',
  linkedin: 'https://www.linkedin.com/in/faizan-yousaf1/',
  huggingface: 'https://huggingface.co/Faizan11112/spaces',
  resume: '/Faizan_Yousaf_Software_Engineer.pdf',
  bio: 'I build end-to-end web products and practical AI systems. From thoughtful interfaces and reliable APIs to retrieval pipelines and model evaluation, I care about software that can be understood, tested and improved.',
};

export const projects: Project[] = [
  {
    slug: 'ai-knowledge-os', name: 'AI Knowledge OS', eyebrow: '01 / KNOWLEDGE & INTELLIGENCE',
    category: 'Full-stack', status: 'Completed', featured: true,
    description: 'A full-stack knowledge workspace with retrieval-grounded AI chat.',
    detail: 'Projects and notes, JWT-protected APIs, semantic search, source-aware LLM responses, and background embedding jobs with Redis/BullMQ.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'RAG', 'Redis'],
    github: 'https://github.com/Faizanyousaf140/AI-Knowledge-OS',
    demo: 'https://ai-knowledge-os.vercel.app/',
    image: '/projects/ai-knowledge-os.webp', visual: 'knowledge',
  },
  {
    slug: 'rentease-pk', name: 'RentEase PK', eyebrow: '02 / PRODUCT ENGINEERING',
    category: 'Full-stack', status: 'Completed', featured: true,
    description: 'A rental operations platform with separate web, API and PDF services.',
    detail: 'Landlord and tenant workflows for properties, payments and agreements, backed by Django REST, a Next.js dashboard, and a FastAPI document-generation service.',
    stack: ['Next.js', 'TypeScript', 'Django REST', 'FastAPI', 'JWT'],
    github: 'https://github.com/Faizanyousaf140/RentEase-PK', visual: 'rental',
  },
  {
    slug: 'doc2markdown', name: 'Document-to-Markdown VLM', eyebrow: '03 / MULTIMODAL AI',
    category: 'AI / ML', status: 'Completed', featured: true,
    description: 'Fine-tuning a vision-language model to understand document layouts.',
    detail: 'Fine-tuned Qwen2-VL-2B with QLoRA/PEFT to transform document-page images into structured Markdown; packaged a Gradio interface for inspection.',
    stack: ['PyTorch', 'Qwen2-VL', 'QLoRA', 'Hugging Face', 'Gradio'],
    github: 'https://github.com/Faizanyousaf140/VLM-qlora-doc2markdown',
    demo: 'https://huggingface.co/spaces/Faizan11112/doc2markdown-vlm', visual: 'document',
  },
  {
    slug: 'spotter-fuel-route-planner', name: 'Fuel Route Optimizer', eyebrow: 'ALGORITHMS / API DESIGN',
    category: 'Backend', status: 'Completed',
    description: 'Cost-aware routing with optimal fuel stops and an interactive map.',
    detail: 'Django REST APIs combine OSRM routes with fuel-station data and cost constraints to find economical refueling stops. The repository documents 500-mile range and 10-mpg assumptions.',
    stack: ['Python', 'Django REST', 'OSRM', 'Optimization', 'Leaflet'],
    github: 'https://github.com/Faizanyousaf140/spotter-fuel-route-planner',
    image: '/projects/fuel-route-planner.webp', visual: 'route',
  },
  {
    slug: 'clinical-notes-rag', name: 'Clinical Notes RAG', eyebrow: 'AI / RETRIEVAL',
    category: 'AI / ML', status: 'Completed',
    description: 'Evidence-grounded question answering over clinical research notes.',
    detail: 'Retrieves relevant MIMIC-IV-Ext DiReCT passages with embeddings and FAISS, then provides supporting context alongside generated answers. Research prototype; not a medical device.',
    stack: ['Python', 'FAISS', 'Sentence Transformers', 'LLMs'],
    github: 'https://github.com/Faizanyousaf140/RAG-for-Diagnostic-Reasoning-in-Clinical-Notes-DiReCT-',
    image: '/projects/clinical-rag.webp', visual: 'clinical',
  },
  {
    slug: 'eld-trip-planner', name: 'ELD Trip Planner', eyebrow: 'FULL-STACK / TRANSPORT',
    category: 'Full-stack', status: 'Completed',
    description: 'Route planning and driver daily-log generation in one application.',
    detail: 'React and Leaflet interface with Django REST APIs and logic for generating drivers’ daily logs from hours-of-service constraints, including the 70-hour/8-day cycle.',
    stack: ['React', 'Django REST', 'PostgreSQL', 'Leaflet'],
    github: 'https://github.com/Faizanyousaf140/eld-trip-planner',
    image: '/projects/eld-trip-planner.webp', visual: 'truck',
  },
  {
    slug: 'node-auth-tests', name: 'Authentication & CI Tests', eyebrow: 'TESTING / AUTOMATION',
    category: 'Testing', status: 'Completed',
    description: 'API authentication backed by automated tests and a Jenkins pipeline.',
    detail: 'Login and signup flows tested with Mocha, Chai and Supertest, including negative request cases and repeatable CI verification.',
    stack: ['Node.js', 'Mocha/Chai', 'Supertest', 'Jenkins'],
    github: 'https://github.com/Faizanyousaf140/nodejs-auth-mocha-jenkins', visual: 'testing',
  },
  {
    slug: 'craftopia', name: 'Craftopia.pk', eyebrow: 'WEB / COMMERCE',
    category: 'Full-stack', status: 'Completed',
    description: 'A responsive storefront for a handmade-products brand.',
    detail: 'A product catalog and shopping experience built with reusable Next.js and TypeScript components, responsive layouts and a consistent design system.',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    github: 'https://github.com/Faizanyousaf140/craftopia-pk',
    image: '/projects/craftopia-pk.webp', visual: 'store',
  },
  {
    slug: 'verbatim-ai', name: 'VerbatimAI', eyebrow: 'NLP / AUDIO',
    category: 'AI / ML', status: 'Completed',
    description: 'A meeting assistant for transcription, summarization and search.',
    detail: 'Transcribes recordings with Whisper, extracts summaries and action points, and makes transcripts discoverable through semantic retrieval.',
    stack: ['Python', 'Whisper', 'NLP', 'Streamlit', 'FAISS'],
    github: 'https://github.com/Faizanyousaf140/Verbatim-AI-Project', visual: 'meeting',
  },
  {
    slug: 'matacs', name: 'MATACS Proposal Triage', eyebrow: 'DECISION SUPPORT',
    category: 'AI / ML', status: 'Completed',
    description: 'An explainable prototype for criteria-based proposal review.',
    detail: 'Configurable scoring, traceable reasons and human-review checkpoints, with a tested Python prototype for a defined triage challenge.',
    stack: ['Python', 'Rule-based Scoring', 'Testing'],
    github: 'https://github.com/Faizanyousaf140/matacs-th-2026-02', visual: 'triage',
  },
  {
    slug: 'agentqa-cloud', name: 'AgentQA Cloud', eyebrow: 'CURRENTLY BUILDING',
    category: 'Testing', status: 'In development',
    description: 'A software-testing workspace for requirements, documents and test cases.',
    detail: 'Phase-one prototype includes Django REST APIs, project isolation, document ingestion, human-reviewed test cases and a Next.js dashboard. RAG and agentic automation are planned, not shipped.',
    stack: ['Django REST', 'Next.js', 'TypeScript', 'PostgreSQL', 'pytest'],
    visual: 'agent',
  },
];

export interface Experience {
  position: string; organization: string; when: string; kind: string; summary: string; details: string[];
  logo?: string;
  organizationUrl?: string;
  authorUrl?: string;
}

export const deaimerAuthorUrl = 'https://www.deaimer.com/research/authors/R4hfwaXF3QV1o3Lc7g1n';

export const experience: Experience[] = [
  {
    position: 'Software Engineer', organization: 'Deaimer', when: 'Jun 2026 — Present', kind: 'Full-time · On-site',
    logo: '/companies/deaimer.png', organizationUrl: 'https://www.deaimer.com/', authorUrl: deaimerAuthorUrl,
    summary: 'Working across AI research, autonomous agents and evaluation engineering, with a focus on coding-agent benchmarks and reliable task environments.',
    details: [
      'Design coding-agent tasks and acceptance criteria across Python, JavaScript and SQL.',
      'Build Docker/Linux test harnesses, reference solutions and automated verifiers.',
      'Investigate model-generated defects, edge cases and regressions with reproducible evidence.',
      'Write research perspectives on AI oversight, world-model reliability and post-quantum cryptography.',
    ],
  },
  {
    position: 'Teaching Assistant', organization: 'FAST-NUCES', when: 'Jan 2025 — Jun 2026', kind: 'Part-time',
    summary: 'Served as a teaching assistant for four courses across algorithms, networks and web development.',
    details: [
      'Helped students debug assignments and understand data structures, algorithms and web programming.',
      'Supported Computer Networks and Computer Networks Lab activities and assessment.',
    ],
  },
  {
    position: 'AI / Software Engineering Intern', organization: 'Digital Genei', when: 'Jun — Jul 2025', kind: 'On-site',
    summary: 'Built components for a searchable meeting intelligence application.',
    details: ['Integrated Whisper transcription, NLP summarization and FAISS-based semantic retrieval with Python REST endpoints.'],
  },
  {
    position: 'Machine Learning Intern', organization: 'Skillify Zone', when: 'Jul — Aug 2025', kind: 'Remote',
    summary: 'Developed and evaluated a loan-approval prediction workflow.',
    details: ['Prepared tabular data, trained scikit-learn classifiers and presented results with a Streamlit interface.'],
  },
];

export const research = [
  {
    slug: 'quantum-migration',
    title: 'The Quantum Migration Problem: Can the World Replace Its Cryptography Before It Becomes Obsolete?',
    topic: 'AI Safety & Ethics', date: '2026-11-03',
    description: 'Post-quantum migration, cryptographic agility and hybrid protocols, with a proposed framework for assessing readiness.',
    url: 'https://www.deaimer.com/research/the-quantum-migration-problem-can-the-world-replace-its-cryp-41fc3427',
    image: '/research/quantum-migration.webp',
  },
  {
    slug: 'physics-gap',
    title: 'The Physics Gap: Can Generative World Models Become Trustworthy Training Environments for AI Agents?',
    topic: 'RL Environments', date: '2026-11-02',
    description: 'Failure fidelity, action-conditioned world models and sim-to-real transfer, with a proposed evaluation framework for RL environments.',
    url: 'https://www.deaimer.com/research/the-physics-gap-can-generative-world-models-become-trustwort-66e4da63',
    image: '/research/physics-gap.webp',
  },
  {
    slug: 'agi-oversight',
    title: 'The Race Toward AGI: Can Human Oversight Keep Pace with Autonomous AI?',
    topic: 'AI Safety & Ethics', date: '2026-10-21',
    description: 'The gap between growing AI autonomy, effective human oversight and accountability for real-world decisions.',
    url: 'https://www.deaimer.com/research/the-race-with-no-finish-line-f6364920',
    image: '/research/agi-oversight.webp',
  },
];

export const skills = [
  { title: 'Frontend & products', tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Responsive UI'] },
  { title: 'Backend & systems', tags: ['Python', 'Django REST', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB'] },
  { title: 'AI / ML', tags: ['PyTorch', 'RAG', 'FAISS', 'Transformers', 'QLoRA / PEFT', 'Scikit-learn', 'Whisper'] },
  { title: 'Testing & delivery', tags: ['Docker', 'Linux', 'pytest', 'Git', 'GitHub Actions', 'Jenkins', 'API Testing'] },
];

export const credentials = [
  { name: 'Machine Learning Specialization', provider: 'DeepLearning.AI · Stanford Online', date: 'Jul 2025', label: '3-course specialization', image: '/certificates/machine-learning.webp', url: 'https://www.coursera.org/account/accomplishments/specialization/Q4A7R6RWXYD3' },
  { name: 'NLP with Classification and Vector Spaces', provider: 'DeepLearning.AI', date: 'Jul 2025', label: 'Course certificate', image: '/certificates/nlp.webp', url: 'https://www.coursera.org/account/accomplishments/verify/HUZ8D8TG6S7S' },
  { name: 'Google Prompting Essentials', provider: 'Google', date: 'Aug 2026', label: 'Certificate', image: '/certificates/google-prompting.webp', url: 'https://www.coursera.org/account/accomplishments/specialization/Y67VK3EUY21D' },
  { name: 'Google Network Security', provider: 'Google', date: 'Aug 2026', label: 'Certificate', image: '/certificates/google-network-security.webp', url: 'https://www.coursera.org/account/accomplishments/specialization/7G3G47ELAMCH' },
];

export const facts = [
  { value: '2026', label: 'FAST-NUCES CS graduate' },
  { value: '4', label: 'Courses as teaching assistant' },
  { value: '97.7th', label: 'HEC skills test percentile' },
];
