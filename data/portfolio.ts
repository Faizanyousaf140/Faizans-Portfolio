/** Portfolio content lives here so updates never require editing UI components. */
export type ProjectCategory = 'Full-stack' | 'LLMs / RAG' | 'NLP' | 'Generative AI' | 'Computer Vision' | 'AI / ML' | 'Backend' | 'Testing';
export type ProjectStatus = 'Completed' | 'In development';

export interface PortfolioImage {
  src: string;
  width: number;
  height: number;
}

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
  demoLabel?: string;
  demoNote?: string;
  image?: PortfolioImage;
  imageKind?: 'screenshot' | 'concept' | 'illustration' | 'training';
  attribution?: string;
  visual: 'knowledge' | 'rental' | 'document' | 'route' | 'clinical' | 'truck' | 'testing' | 'store' | 'meeting' | 'triage' | 'agent' | 'nlp' | 'generative' | 'vision';
  featured?: boolean;
  selected?: boolean;
  evaluation?: { value: string; detail: string; url: string };
}

export const profile = {
  fullName: 'Muhammad Faizan Yousaf',
  shortName: 'Faizan Yousaf',
  role: 'Software Engineer · AI/LLM Applications & Evaluation',
  jobTitle: 'Software Engineer — AI Evaluation',
  location: 'Faisalabad, Pakistan',
  email: 'faizanyousaf140@gmail.com',
  github: 'https://github.com/Faizanyousaf140',
  linkedin: 'https://www.linkedin.com/in/faizan-yousaf1/',
  huggingface: 'https://huggingface.co/Faizan11112/spaces',
  resume: '/Faizan_Yousaf_Software_Engineer.pdf',
  bio: 'I build LLM applications and evaluation harnesses for coding agents. At Deaimer, I prepare coding tasks, reference solutions and automated verifiers. My product work combines Next.js, TypeScript and Python with retrieval and model fine-tuning.',
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
    demoLabel: 'Frontend preview',
    demoNote: 'The public preview exposes the starter interface. API and RAG implementation is available in the source repository.',
    image: { src: '/projects/ai-knowledge-os-preview.webp', width: 1440, height: 520 }, imageKind: 'screenshot', visual: 'knowledge',
  },
  {
    slug: 'rentease-pk', name: 'RentEase PK', eyebrow: 'PRODUCT ENGINEERING',
    category: 'Full-stack', status: 'Completed',
    description: 'A rental operations platform with separate web, API and PDF services.',
    detail: 'Landlord and tenant workflows for properties, payments and agreements, backed by Django REST, a Next.js dashboard, and a FastAPI document-generation service.',
    stack: ['Next.js', 'TypeScript', 'Django REST', 'FastAPI', 'JWT'],
    github: 'https://github.com/Faizanyousaf140/RentEase-PK', visual: 'rental',
  },
  {
    slug: 'doc2markdown', name: 'Document-to-Markdown VLM', eyebrow: '02 / MULTIMODAL & LLM FINE-TUNING',
    category: 'LLMs / RAG', status: 'Completed', featured: true,
    description: 'Fine-tuning a vision-language model to understand document layouts.',
    detail: 'Fine-tuned Qwen2-VL-2B with QLoRA/PEFT to transform document-page images into structured Markdown; packaged a Gradio interface for inspection.',
    stack: ['PyTorch', 'Qwen2-VL', 'QLoRA', 'Hugging Face', 'Gradio'],
    github: 'https://github.com/Faizanyousaf140/VLM-qlora-doc2markdown',
    demo: 'https://huggingface.co/spaces/Faizan11112/doc2markdown-vlm',
    demoNote: 'The Hugging Face demo may need to wake before inference is available.',
    evaluation: { value: 'Test ROUGE-L: 0.57', detail: 'Repository-reported result on its unseen test split; validation ROUGE-L is 0.63.', url: 'https://github.com/Faizanyousaf140/VLM-qlora-doc2markdown/blob/main/README.md' },
    image: { src: '/projects/doc2markdown-concept.webp', width: 1200, height: 800 }, imageKind: 'concept', visual: 'document',
  },
  {
    slug: 'spotter-fuel-route-planner', name: 'Fuel Route Optimizer', eyebrow: 'ALGORITHMS / API DESIGN',
    category: 'Backend', status: 'Completed', selected: true,
    description: 'Cost-aware routing with optimal fuel stops and an interactive map.',
    detail: 'Django REST APIs combine OSRM routes with fuel-station data and cost constraints to find economical refueling stops. The repository documents 500-mile range and 10-mpg assumptions.',
    stack: ['Python', 'Django REST', 'OSRM', 'Optimization', 'Leaflet'],
    github: 'https://github.com/Faizanyousaf140/spotter-fuel-route-planner',
    evaluation: { value: '178 documented tests', detail: 'Repository reports 175 offline and 3 live tests passing on 17 November 2026.', url: 'https://github.com/Faizanyousaf140/spotter-fuel-route-planner/blob/main/README.md' },
    image: { src: '/projects/fuel-route-planner.webp', width: 1852, height: 616 }, visual: 'route',
  },
  {
    slug: 'clinical-notes-rag', name: 'Clinical Notes RAG', eyebrow: 'AI / RETRIEVAL',
    category: 'LLMs / RAG', status: 'Completed', selected: true,
    description: 'Evidence-grounded question answering over clinical research notes.',
    detail: 'Retrieves relevant MIMIC-IV-Ext DiReCT passages with embeddings and FAISS, then provides supporting context alongside generated answers. Research prototype; not a medical device.',
    stack: ['Python', 'FAISS', 'Sentence Transformers', 'LLMs'],
    github: 'https://github.com/Faizanyousaf140/RAG-for-Diagnostic-Reasoning-in-Clinical-Notes-DiReCT-',
    image: { src: '/projects/clinical-rag.webp', width: 1200, height: 800 }, imageKind: 'illustration', visual: 'clinical',
  },
  {
    slug: 'eld-trip-planner', name: 'ELD Trip Planner', eyebrow: 'FULL-STACK / TRANSPORT',
    category: 'Full-stack', status: 'Completed', selected: true,
    description: 'Route planning and driver daily-log generation in one application.',
    detail: 'React and Leaflet interface with Django REST APIs and logic for generating drivers’ daily logs from hours-of-service constraints, including the 70-hour/8-day cycle.',
    stack: ['React', 'Django REST', 'PostgreSQL', 'Leaflet'],
    github: 'https://github.com/Faizanyousaf140/eld-trip-planner',
    demo: 'https://eld-trip-planner-gilt.vercel.app/',
    image: { src: '/projects/eld-trip-planner.webp', width: 1900, height: 823 }, visual: 'truck',
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
    demo: 'https://craftopia-pk.vercel.app/',
    image: { src: '/projects/craftopia-pk.webp', width: 1581, height: 657 }, visual: 'store',
  },
  {
    slug: 'verbatim-ai', name: 'VerbatimAI', eyebrow: '03 / NLP & MEETING INTELLIGENCE',
    category: 'NLP', status: 'Completed', featured: true,
    description: 'A meeting assistant for transcription, summarization and search.',
    detail: 'Transcribes recordings with Whisper, extracts summaries and action points, and makes transcripts discoverable through semantic retrieval.',
    stack: ['Python', 'Whisper', 'NLP', 'Streamlit', 'FAISS'],
    github: 'https://github.com/Faizanyousaf140/Verbatim-AI-Project',
    image: { src: '/projects/verbatim-ai.webp', width: 1400, height: 933 }, imageKind: 'illustration', visual: 'meeting',
  },
  {
    slug: 'urdu-transformer-chatbot', name: 'Urdu Transformer Chatbot', eyebrow: 'NLP / CONVERSATIONAL AI',
    category: 'NLP', status: 'Completed',
    description: 'An Urdu conversational model with a Transformer encoder–decoder and interactive chat.',
    detail: 'PyTorch model, SentencePiece tokenization and a Streamlit interface, with greedy decoding, beam search and top-k sampling for comparing responses.',
    stack: ['PyTorch', 'Transformers', 'SentencePiece', 'Streamlit'],
    github: 'https://github.com/Faizanyousaf140/Conversational-Chatbot-in-Urdu',
    image: { src: '/projects/urdu-chatbot.webp', width: 1200, height: 800 }, imageKind: 'illustration', visual: 'nlp',
  },
  {
    slug: 'bert-feedback-classifier', name: 'BERT Feedback Classifier', eyebrow: 'NLP / MODEL FINE-TUNING',
    category: 'NLP', status: 'Completed',
    description: 'Fine-tuned BERT for positive, negative and neutral customer-feedback classification.',
    detail: 'Preprocessing and tokenization feed an encoder-only classification pipeline; evaluation includes precision, recall, F1 and a confusion matrix, with example inference scripts.',
    stack: ['BERT', 'Hugging Face', 'PyTorch', 'Scikit-learn'],
    github: 'https://github.com/Faizanyousaf140/NLP-BERT-Customer-Feedback-Classifier',
    image: { src: '/projects/bert-feedback-concept.webp', width: 1200, height: 800 }, imageKind: 'concept', visual: 'nlp',
  },
  {
    slug: 't5-bart-summarization', name: 'T5 / BART Summarization', eyebrow: 'NLP / TEXT GENERATION',
    category: 'NLP', status: 'Completed',
    description: 'Encoder–decoder fine-tuning for concise abstractive news summaries.',
    detail: 'Prepares CNN/DailyMail article–summary pairs, fine-tunes T5/BART with Hugging Face Transformers and compares generated summaries using ROUGE-1, ROUGE-2 and ROUGE-L.',
    stack: ['T5 / BART', 'Transformers', 'PyTorch', 'ROUGE'],
    github: 'https://github.com/Faizanyousaf140/abstractive-text-summarization-t5-bart', visual: 'nlp',
  },
  {
    slug: 'deep-generative-models', name: 'GANs & Image Translation', eyebrow: 'GENERATIVE AI / VISION',
    category: 'Generative AI', status: 'Completed',
    description: 'DCGAN, WGAN-GP, Pix2Pix and CycleGAN experiments in generation and image translation.',
    detail: 'Compares adversarial training and mode collapse, then explores paired sketch colorization and unpaired sketch–photo translation with interactive Streamlit and Gradio interfaces.',
    stack: ['PyTorch', 'WGAN-GP', 'Pix2Pix', 'CycleGAN', 'Gradio'],
    github: 'https://github.com/Faizanyousaf140/Deep-Generative-Models-GAN-Pix2Pix-CycleGan',
    demo: 'https://huggingface.co/spaces/Faizan11112/dcgan-wgan-anime-generation',
    image: { src: '/projects/gan-comparison.webp', width: 895, height: 247 }, imageKind: 'training', visual: 'generative',
  },
  {
    slug: 'ddpm-image-generation', name: 'Diffusion Image Generation', eyebrow: 'GENERATIVE AI / DIFFUSION',
    category: 'Generative AI', status: 'Completed',
    description: 'A PyTorch DDPM implementation exploring image generation through iterative denoising.',
    detail: 'Implements a U-Net with residual blocks, attention and time embeddings, a cosine noise schedule and a Gradio interface for sampling. An educational model trained on CelebA-HQ.',
    stack: ['PyTorch', 'DDPM', 'U-Net', 'Gradio'],
    github: 'https://github.com/Faizanyousaf140/Denoising-Diffusion-Probabilistic-Model-DDPM-for-Image-Generation',
    demo: 'https://huggingface.co/spaces/Faizan11112/ddpm-face-generator',
    image: { src: '/projects/diffusion-concept.webp', width: 1200, height: 800 }, imageKind: 'concept', visual: 'generative',
  },
  {
    slug: 'neural-storyteller', name: 'Neural Storyteller', eyebrow: 'MULTIMODAL / IMAGE CAPTIONING',
    category: 'Computer Vision', status: 'Completed',
    description: 'Image-to-text caption generation with a ResNet-50 encoder and LSTM decoder.',
    detail: 'An academic Flickr30k captioning project with a Streamlit interface, comparing greedy decoding and beam search with BLEU and qualitative examples.',
    stack: ['PyTorch', 'ResNet-50', 'LSTM', 'BLEU', 'Streamlit'],
    github: 'https://github.com/Faizanyousaf140/neural-storyteller-image-captioning-seq2seq', visual: 'vision',
  },
  {
    slug: 'masked-autoencoder', name: 'Masked Autoencoder / ViT', eyebrow: 'SELF-SUPERVISED / VISION',
    category: 'Computer Vision', status: 'Completed',
    description: 'Self-supervised visual representation learning by reconstructing masked image patches.',
    detail: 'A PyTorch MAE implementation on TinyImageNet using an asymmetric Vision Transformer encoder–decoder, random patch masking, mixed precision and reconstruction loss.',
    stack: ['PyTorch', 'Vision Transformers', 'MAE', 'TinyImageNet'],
    github: 'https://github.com/Faizanyousaf140/mae-vit-self-supervised-image-representation', visual: 'vision',
  },
  {
    slug: 'urdu-roman-translation', name: 'Urdu → Roman Urdu Translation', eyebrow: 'NLP / SEQUENCE MODELING',
    category: 'NLP', status: 'Completed', attribution: 'Adapted academic study · forked repository',
    description: 'A poetry-focused translation study with a BiLSTM encoder–decoder and attention.',
    detail: 'An adapted/forked project exploring Bahdanau attention, character-level tokenization and a Streamlit translation interface using the Rekhta poetry dataset. Original repository attribution is retained on GitHub.',
    stack: ['PyTorch', 'BiLSTM', 'Bahdanau Attention', 'Streamlit'],
    github: 'https://github.com/Faizanyousaf140/Neural-Machine-Translation-Urdu-to-Roman-Urdu',
    image: { src: '/projects/urdu-translation.webp', width: 1200, height: 800 }, imageKind: 'illustration', visual: 'nlp',
  },
  {
    slug: 'loan-approval-predictor', name: 'Loan Approval Predictor', eyebrow: 'APPLIED ML / CLASSIFICATION',
    category: 'AI / ML', status: 'Completed',
    description: 'A tabular ML workflow from data preparation to an interactive prediction interface.',
    detail: 'Handles missing values, encodes features and compares scikit-learn classifiers with cross-validation and hyperparameter search; includes Streamlit and CLI prediction interfaces.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/Faizanyousaf140/Loan-Approval-Predictor-App',
    image: { src: '/projects/loan-approval.webp', width: 1400, height: 933 }, imageKind: 'illustration', visual: 'triage',
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
  focus?: string;
  organizationDescription?: string;
  logo?: string;
  organizationUrl?: string;
  authorUrl?: string;
  models?: string[];
  certificate?: { label: string; image: string };
}

export const deaimerAuthorUrl = 'https://www.deaimer.com/research/authors/R4hfwaXF3QV1o3Lc7g1n';

export const experience: Experience[] = [
  {
    position: profile.jobTitle, organization: 'Deaimer', when: 'Jun 2026 — Present', kind: 'Full-time · On-site',
    focus: 'LLM Evaluation & Agent Harnesses',
    organizationDescription: 'AI research lab building reinforcement-learning environments, coding-agent benchmarks and evaluation datasets.',
    logo: '/companies/deaimer.png', organizationUrl: 'https://www.deaimer.com/', authorUrl: deaimerAuthorUrl,
    summary: 'Contribute coding tasks and evaluation harnesses to frontier LLM training and evaluation workflows, working across autonomous agents, benchmarks and reliable task environments.',
    models: ['GPT-6 Astra', 'GPT-5.6 Sol', 'Claude Opus 5', 'Claude Opus 5.5', 'Claude Sonnet 5.5'],
    details: [
      'Design coding-agent tasks and acceptance criteria across Python, JavaScript and SQL.',
      'Build Docker/Linux test harnesses, reference solutions and automated verifiers.',
      'Work with GPT and Claude models, Codex and Claude Code on agent workflows, tool calling, debugging and failure analysis.',
      'Investigate model-generated defects, edge cases and regressions with reproducible evidence.',
      'Write research perspectives on AI oversight, world-model reliability and post-quantum cryptography.',
    ],
  },
  {
    position: 'Teaching Assistant', organization: 'FAST-NUCES', when: 'Jan 2025 — Jun 2026', kind: 'Part-time',
    summary: 'Supported four courses part-time across algorithms, networks and web development, including during the 2025 internships.',
    details: [
      'Helped students debug assignments and understand data structures, algorithms and web programming.',
      'Supported Computer Networks and Computer Networks Lab activities and assessment.',
    ],
  },
  {
    position: 'AI / Software Engineering Intern', organization: 'Digital Genei', when: 'Jul — Aug 2025', kind: 'On-site',
    summary: 'Built components for a searchable meeting intelligence application. Skillify Zone and teaching assistant work ran concurrently on a part-time basis.',
    details: ['Integrated Whisper transcription, NLP summarization and FAISS-based semantic retrieval with Python REST endpoints.'],
    certificate: { label: 'View experience letter · 1 Jul–10 Aug 2025', image: '/certificates/digital-genei-internship.webp' },
  },
  {
    position: 'Machine Learning Intern', organization: 'Skillify Zone', when: 'Jul — Aug 2025', kind: 'Remote · Part-time',
    summary: 'Developed and evaluated a loan-approval prediction workflow during a part-time internship, concurrent with Digital Genei and teaching assistant work.',
    details: ['Prepared tabular data, trained scikit-learn classifiers and presented results with a Streamlit interface.'],
    certificate: { label: 'View internship certificate · 10 Jul–10 Aug 2025', image: '/certificates/skillify-zone-internship.webp' },
  },
];

export const research = [
  {
    slug: 'quantum-migration',
    title: 'The Quantum Migration Problem: Can the World Replace Its Cryptography Before It Becomes Obsolete?',
    topic: 'Security & Cryptography', date: '2026-11-03',
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
  { title: 'Frontend engineering', tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Backend & systems', tags: ['Python', 'Django REST', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB'] },
  { title: 'GenAI & LLM engineering', tags: ['RAG', 'FAISS', 'Hugging Face', 'Qwen2-VL', 'QLoRA / PEFT', 'Tool Calling'] },
  { title: 'NLP & machine learning', tags: ['PyTorch', 'Transformers', 'BERT', 'T5 / BART', 'Whisper', 'Scikit-learn', 'GANs', 'Diffusion'] },
  { title: 'Agent tools & evaluation', tags: ['GPT', 'Claude', 'Codex', 'Claude Code', 'Evaluation Harnesses', 'Tool Calling', 'Coding-task Design'] },
  { title: 'Testing & delivery', tags: ['Docker', 'Linux', 'pytest', 'Git', 'Jenkins', 'API Testing'] },
];

export interface Credential {
  name: string; provider: string; date: string; label: string; image: PortfolioImage; url?: string;
}

export const credentials: Credential[] = [
  { name: 'Machine Learning Specialization', provider: 'DeepLearning.AI · Stanford Online', date: 'Jul 2025', label: '3-course specialization', image: { src: '/certificates/machine-learning.webp', width: 1600, height: 1237 }, url: 'https://www.coursera.org/account/accomplishments/specialization/Q4A7R6RWXYD3' },
  { name: 'NLP with Classification and Vector Spaces', provider: 'DeepLearning.AI', date: 'Jul 2025', label: 'Course certificate', image: { src: '/certificates/nlp.webp', width: 1600, height: 1237 }, url: 'https://www.coursera.org/account/accomplishments/verify/HUZ8D8TG6S7S' },
  { name: 'AI / ML Internship Experience', provider: 'Digital Genei', date: 'Jul–Aug 2025', label: 'Experience letter · 1 Jul–10 Aug 2025', image: { src: '/certificates/digital-genei-internship.webp', width: 800, height: 1131 } },
  { name: 'Machine Learning Internship', provider: 'Skillify Zone', date: 'Jul–Aug 2025', label: 'Completion certificate · 10 Jul–10 Aug 2025', image: { src: '/certificates/skillify-zone-internship.webp', width: 800, height: 1131 } },
  { name: 'Google Prompting Essentials', provider: 'Google', date: 'Aug 2026', label: 'Certificate', image: { src: '/certificates/google-prompting.webp', width: 1600, height: 1237 }, url: 'https://www.coursera.org/account/accomplishments/specialization/Y67VK3EUY21D' },
  { name: 'Google Network Security', provider: 'Google', date: 'Aug 2026', label: 'Certificate', image: { src: '/certificates/google-network-security.webp', width: 1600, height: 1237 }, url: 'https://www.coursera.org/account/accomplishments/specialization/7G3G47ELAMCH' },
];

export const facts = [
  { value: '2026', label: 'FAST-NUCES CS graduate' },
  { value: '4', label: 'Courses as teaching assistant' },
  { value: '97.7th', label: 'HEC National Skills Competency Test percentile' },
];
