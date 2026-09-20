// ============================
// PROJECT DATA (drives the project modal)
// ============================

const projectData = {
    'threshold': {
        tag: '[PROJ-001]',
        name: 'Threshold',
        subtitle: 'AI Onboarding Document Generator',
        img: './screenshots/threshold.jpg',
        alt: 'Threshold AI onboarding document generator app screenshot',
        tags: ['Claude API', 'Python (Async)', 'Streamlit', 'ReportLab', 'Generative AI', 'Python'],
        problem: 'New-hire onboarding paperwork is manually assembled per role and country, with country-specific compliance requirements easy to miss.',
        functionality: 'Runs 5 concurrent Claude API calls to generate a welcome email, a 30-60-90 day plan, a compliance checklist, a first-week schedule, and a manager briefing — tailored to role and site, with built-in compliance logic for the US (ITAR/EAR), Germany (GDPR), and Singapore (MOM/CPF). Compiles everything into one branded PDF.',
        impact: 'Collapses a multi-document, multi-stakeholder onboarding process into a single generation step, under 30 seconds.',
        github: 'https://github.com/tanmay271/threshold',
        live: 'https://threshold-hr.streamlit.app'
    },
    'wren': {
        tag: '[PROJ-002]',
        name: 'Wren',
        subtitle: 'RAG Chatbot for HR Policy Q&A',
        img: './screenshots/wren.jpg',
        alt: 'Wren RAG chatbot for HR policy Q&A app screenshot',
        tags: ['LlamaIndex', 'ChromaDB', 'FastEmbed', 'Claude', 'Generative AI', 'RAG', 'Python'],
        problem: 'HR policy answers are scattered across documents; generic chatbots risk confidently inventing policy that doesn\'t exist.',
        functionality: 'A full RAG pipeline (chunking → embeddings → ChromaDB vector store) retrieves the top-3 semantically relevant passages for a query and cites the exact source page, grounding every generated answer.',
        impact: 'Reduces reliance on HR staff for repetitive policy lookups while keeping every answer traceable to source.',
        github: 'https://github.com/tanmay271/wren',
        live: 'https://wren-ai.streamlit.app'
    },
    'lumen': {
        tag: '[PROJ-003]',
        name: 'Lumen',
        subtitle: 'AI-Narrated HR Workforce Analytics Dashboard',
        img: './screenshots/lumen.jpg',
        alt: 'Lumen AI-narrated HR workforce analytics dashboard app screenshot',
        tags: ['Streamlit', 'Plotly', 'Claude', 'Python', 'Data Visualization'],
        problem: 'Workforce dashboards show numbers but leave interpretation to the viewer, slowing down how stakeholders act on people-analytics data.',
        functionality: 'A multi-page dashboard over workforce data (headcount, hiring pipeline, program tracking) with a Claude-generated "AI Insights" narration layer on every page, plus natural-language Q&A directly over the underlying data.',
        impact: 'Lets a non-technical stakeholder get the "so what" of workforce data without reading raw charts themselves.',
        github: 'https://github.com/tanmay271/lumen',
        live: 'https://lumen-hr.streamlit.app'
    },
    'metropt': {
        tag: '[PROJ-004]',
        name: 'Predictive Maintenance ML Pipeline',
        subtitle: 'MetroPT3',
        img: './metro.jpeg',
        alt: 'Predictive maintenance ML pipeline architecture diagram',
        tags: ['Python', 'Scikit-learn', 'FFT', 'YAML-config pipeline', 'Machine Learning'],
        problem: 'Continuation of prior research into unplanned downtime in metro rail Air Production Units.',
        functionality: '183 engineered features (12 time-domain + 14 FFT-spectral × 7 sensors + 1 indicator) feeding a StandardScaler → Random Forest classifier, in a config-driven (YAML) pipeline with structured logging.',
        impact: 'A personal continuation demonstrating a different technical approach (Random Forest vs. the original 1D-CNN) to the same real-world problem, on the public MetroPT3 dataset.',
        github: 'https://github.com/tanmay271/Train-Predictive-maintenance-using-AI'
    },
    'pneumonia': {
        tag: '[PROJ-005]',
        name: 'Semi-supervised Pneumonia Detection',
        subtitle: '',
        img: './semi.jpeg',
        alt: 'Semi-supervised pneumonia detection model architecture diagram',
        tags: ['TensorFlow', 'Vision Transformers', 'DenseNet169', 'SimCLRv2', 'Deep Learning', 'Computer Vision'],
        problem: 'Labeled medical imaging data is scarce and expensive to produce.',
        functionality: 'SimCLRv2 contrastive pretraining on unlabeled X-rays → ensemble supervised fine-tuning (DenseNet169, MobileNetV2, Vision Transformer) → a custom Feature Attention Network (channel + spatial attention) for enhanced feature selection.',
        impact: '94% accuracy, 0.95 F1 on the pneumonia class, on the public Kaggle chest X-ray dataset.',
        github: 'https://github.com/tanmay271/Semi-supervised-pneumonia-detection-using-Deep-Learning'
    },
    'rag-qdrant': {
        tag: '[PROJ-006]',
        name: 'RAG-Qdrant-AI',
        subtitle: '',
        img: './RAG.jpeg',
        alt: 'RAG-Qdrant-AI retrieval-augmented generation pipeline diagram',
        tags: ['Python', 'OpenAI API', 'Qdrant', 'tiktoken', 'Generative AI', 'Vector Search'],
        problem: 'LLM answers aren\'t grounded in fact by default, risking confident hallucination.',
        functionality: 'A hand-built (no LangChain) ingestion → embedding → Qdrant vector store → retrieval/generation pipeline with tiktoken-based semantic chunking.',
        impact: 'Demonstrates the RAG mechanics directly rather than relying on a framework abstraction layer.',
        github: 'https://github.com/tanmay271/RAG-Qdrant-AI'
    },
    'zenith': {
        tag: '[PROJ-007]',
        name: 'Zenith Space Tourism',
        subtitle: '',
        img: './zenith.jpeg',
        alt: 'Zenith Space Tourism web app screenshot',
        tags: ['Next.js 14', 'Strapi v5', 'Render IaC', 'Full-Stack Development'],
        problem: 'A monorepo demonstrating modern decoupled architecture — a Next.js frontend, a Strapi headless CMS backend, and automated cloud provisioning via Infrastructure-as-Code.',
        functionality: 'A monorepo demonstrating modern decoupled architecture — a Next.js frontend, a Strapi headless CMS backend, and automated cloud provisioning via Infrastructure-as-Code.',
        impact: 'Shows full-stack web engineering range beyond the ML-focused projects.',
        github: 'https://github.com/tanmay271/zenith-space-app'
        // No confirmed live URL found in the prior codebase — Live button omitted.
    }
};

// ============================
// PROJECT MODAL
// ============================

const projectModalOverlay = document.getElementById('projectModalOverlay');
const projectModalContent = document.getElementById('projectModalContent');
const projectModalClose = document.getElementById('projectModalClose');
let lastFocusedElement = null;

function openProjectModal(key) {
    const data = projectData[key];
    if (!data) return;

    const liveButton = data.live
        ? `<a href="${data.live}" target="_blank" rel="noopener" class="btn btn-primary">Live Demo</a>`
        : '';

    projectModalContent.innerHTML = `
        <div class="project-modal-header">
            <span class="hud-tag">${data.tag}</span>
            <h2 id="projectModalTitle">${data.name}</h2>
        </div>
        <div class="tag-row">
            ${data.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <img class="project-modal-img" src="${data.img}" alt="${data.alt}" loading="lazy">
        <div class="project-modal-section">
            <span class="hud-label">&#9660; PROBLEM</span>
            <p>${data.problem}</p>
        </div>
        <div class="project-modal-section">
            <span class="hud-label">&#9660; FUNCTIONALITY</span>
            <p>${data.functionality}</p>
        </div>
        <div class="project-modal-section">
            <span class="hud-label">&#9660; BUSINESS IMPACT</span>
            <p>${data.impact}</p>
        </div>
        <div class="project-btn-row">
            <a href="${data.github}" target="_blank" rel="noopener" class="btn btn-secondary">GitHub</a>
            ${liveButton}
        </div>
    `;

    lastFocusedElement = document.activeElement;
    projectModalOverlay.hidden = false;
    projectModalClose.focus();
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModalOverlay.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedElement) lastFocusedElement.focus();
}

function attachProjectCardListeners() {
    document.querySelectorAll('.project-card').forEach(function (card) {
        card.addEventListener('click', function () {
            openProjectModal(card.dataset.project);
        });
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProjectModal(card.dataset.project);
            }
        });
    });
}

projectModalClose.addEventListener('click', closeProjectModal);
projectModalOverlay.addEventListener('click', function (e) {
    if (e.target === projectModalOverlay) closeProjectModal();
});
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !projectModalOverlay.hidden) closeProjectModal();
});

// ============================
// TYPEWRITER (Home title)
// ============================

function runTypewriter() {
    const titleEl = document.getElementById('typedTitle');
    const cursorEl = document.getElementById('typeCursor');
    const taglineEl = document.getElementById('heroTagline');
    const chipsEl = document.getElementById('heroChips');
    const buttonsEl = document.getElementById('heroButtons');
    const fullText = 'AI Engineer';
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function revealRest() {
        taglineEl.classList.add('visible');
        chipsEl.classList.add('visible');
        buttonsEl.classList.add('visible');
    }

    if (reducedMotion) {
        titleEl.textContent = fullText;
        cursorEl.style.display = 'none';
        revealRest();
        return;
    }

    let i = 0;
    (function typeChar() {
        if (i <= fullText.length) {
            titleEl.textContent = fullText.slice(0, i);
            i++;
            setTimeout(typeChar, 70);
        } else {
            cursorEl.classList.add('blink');
            revealRest();
        }
    })();
}

// ============================
// SCROLLSPY + SECTION REVEAL
// ============================

function setupScrollSpy() {
    const sections = document.querySelectorAll('main > section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sections are often much taller than the viewport (e.g. Work), so a
    // ratio-based threshold like 0.5 would rarely be reachable. Instead,
    // watch a thin horizontal band centered in the viewport — whichever
    // section currently overlaps that band is "in view".
    const spyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(function (link) {
                    link.classList.toggle('active', link.dataset.section === id);
                });
            }
        });
    }, { threshold: 0, rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(function (section) {
        spyObserver.observe(section);
    });
}

function setupRevealOnScroll() {
    const revealEls = document.querySelectorAll('.reveal');

    // Sections are often taller than the viewport, so trigger as soon as
    // the section starts entering rather than requiring a fixed ratio of
    // its (possibly very large) area to be visible at once.
    const revealObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

    revealEls.forEach(function (el) {
        revealObserver.observe(el);
    });
}

// ============================
// INIT
// ============================

document.addEventListener('DOMContentLoaded', function () {
    attachProjectCardListeners();
    setupScrollSpy();
    setupRevealOnScroll();
    runTypewriter();
});
