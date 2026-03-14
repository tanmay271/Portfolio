// ============================
// CONTENT SECTIONS
// ============================

let homeContent = `<div class="content-wrapper">
<section class="home ">
    <div class="greetings content-card">
        <div class="greetings-title">
            <h1 class="t1"> Hi, </h1>
            <h1 class="t2"> my name is <span>Tanmay</span>. </h1>
            <h1 class="t3"> I'm a Full-Stack Machine Learning Engineer. </h1>
        </div>

    </div>

</section>`;

let workExpContent = `<section class="work-exp-wrapper">
    <div class="work-exp-container work-exp-content-card">
        <div class="work-exp-title">
            <h1>Work</h1>
        </div>
        <div class="work-exp-grid">
            <div class="work-exp-card">
                <div class="work-exp-card-header">
                    <img src="./casp.png" alt="Caspex Logo">
                    <h4>Caspex</h4>
                </div>
                <span class="work-exp-job-title">Software Developer Intern</span>
                <p class="work-exp-desc">Engineered scalable Flask REST APIs with PostgreSQL and AWS Lambda, supporting 12,000+ daily transactions. Optimized cloud data pipelines using Pandas and NumPy, reducing system log latency by 20%. Automated deployment via GitHub CI/CD, increasing release frequency by 25%.</p>
            </div>
            <div class="work-exp-card">
                <div class="work-exp-card-header">
                    <img src="./hygwell.png" alt="Hygwell Logo">
                    <h4>Hygwell</h4>
                </div>
                <span class="work-exp-job-title">Software Developer Intern</span>
                <p class="work-exp-desc">Orchestrated data pipelines using Python and Snowflake to automate cleaning for 100,000+ patient records, reducing manual effort by 25%. Trained Scikit-learn classification models, improving pharmaceutical decision accuracy by 15%. Deployed interactive Power BI dashboards via GitHub Actions.</p>
            </div>
            <div class="work-exp-card">
                <div class="work-exp-card-header">
                    <img src="./hmt.png" alt="Happiest Minds Logo">
                    <h4>Happiest Minds</h4>
                </div>
                <span class="work-exp-job-title">Data Science Intern</span>
                <p class="work-exp-desc">Architected an AI predictive maintenance pipeline for Metro Train APUs, processing high-frequency telemetry from 15 IoT sensors. Engineered a custom pipeline to extract FFT spectral features, feeding a 1D-CNN optimized for sequential data. Achieved 96.4% early fault detection accuracy.</p>
            </div>
        </div>
    </div>
</section>`;

let projectsContent = `
        <div class="work-content work-content-card">
            <div class="work-gallery">

                <div class="work-project-card card-4">
                    <h1 class="work-project-card-title">Semi-supervised Pneumonia Detection</h1>
                    <img class="workPic" src="./semi.jpeg">
                    <div class="project-btn-row">
                        <a href="https://github.com/tanmay271/Semi-supervised-pneumonia-detection-using-Deep-Learning" target="_blank">
                        <p class="button-project btn-github">Go to GitHub</p></a>
                        <p class="button-project btn-github project-desc-btn" data-project="Semi-supervised Pneumonia Detection">Project Description</p>
                    </div>
                </div>

                <div class="work-project-card card-3">
                    <h1 class="work-project-card-title">Predictive Maintenance ML Pipeline</h1>
                    <img class="workPic" src="./metro.jpeg">
                    <div class="project-btn-row">
                        <a href="https://github.com/tanmay271/Train-Predictive-maintenance-using-AI" target="_blank">
                        <p class="button-project btn-github">Go to GitHub</p></a>
                        <p class="button-project btn-github project-desc-btn" data-project="Predictive Maintenance ML Pipeline">Project Description</p>
                    </div>
                </div>

                <div class="work-project-card card-2">
                    <h1 class="work-project-card-title">RAG-Qdrant-AI</h1>
                    <img class="workPic" src="./RAG.jpeg">
                    <div class="project-btn-row">
                        <a href="https://github.com/tanmay271/RAG-Qdrant-AI" target="_blank">
                        <p class="button-project btn-github">Go to GitHub</p></a>
                        <p class="button-project btn-github project-desc-btn" data-project="RAG-Qdrant-AI">Project Description</p>
                    </div>
                </div>

                <div class="work-project-card card-1">
                    <h1 class="work-project-card-title">Zenith Space Tourism</h1>
                    <img class="workPic" src="./zenith.jpeg">
                    <div class="project-btn-row">
                        <a href="https://github.com/tanmay271/zenith-space-app" target="_blank">
                        <p class="button-project btn-github">Go to GitHub</p></a>
                        <p class="button-project btn-github project-desc-btn" data-project="Zenith Space Tourism">Project Description</p>
                    </div>
                </div>

            </div>
        </div>
`;

let mobileContent = `<section class="work-wrapper">
<div class="work-content work-content-card">
    <div class="work-gallery">

        <div class="work-project-card card-6">
            <h1 class="work-project-card-title ">
            Real Estate Gold
            </h1>
            <a href="https://hopeful-einstein-2a0f32.netlify.com/" target="_blank">
            <img class="qr-card" src="./QRprojects/realestateQR.jpg"> </a>
            <a href="https://github.com/DjordjevicN/Real-Estate-gold">  
            <p class="button-project btn-github ">Go to GITHUB</p></a>
        </div>

        <div class="work-project-card card-5">
            <h1 class="work-project-card-title ">
                Digital Agency
            </h1>
            <a href="https://djordjevicn.github.io/Digital-Agency/" target="_blank">
            <img class="qr-card" src="./QRprojects/digitalagensyQR.jpg"> </a>
            <a href="https://github.com/DjordjevicN/Digital-Agency" target="_blank">  
            <p class="button-project btn-github ">Go to GITHUB</p>
            </a>
        </div>

        <div class="work-project-card card-4">
                <h1 class="work-project-card-title ">
                Mountain Parallax
            </h1>
                <a href="https://djordjevicn.github.io/Parallax-practise-Mountin/" target="_blank">
            <img class="qr-card" src="./QRprojects/paralaxMountinQR.jpg"> </a>
            <a href="https://github.com/DjordjevicN/Parallax-practise-Mountin" target="_blank">  
            <p class="button-project btn-github ">Go to GITHUB</p>
            </a>
        </div>

        <div class="work-project-card card-3">
            <h1 class="work-project-card-title ">
                Shoe Shop
            </h1>
            <a href="https://djordjevicn.github.io/tezga-shop-shoes/" target="_blank">
            <img class="qr-card" src="./QRprojects/tezgaShopQR.jpg"> </a>
            <a href="https://github.com/DjordjevicN/tezga-shop-shoes" target="_blank">  
            <p class="button-project btn-github ">Go to GITHUB</p>
            </a>
        </div>

        <div class="work-project-card card-2">
            <h1 class="work-project-card-title ">
                Burger Online
            </h1>
            <a href="https://djordjevicn.github.io/eCommerce-Burgelicious/" target="_blank">
            <img class="qr-card" src="./QRprojects/burgelicious.jpg"> </a>
            <a href="https://github.com/DjordjevicN/eCommerce-Burgelicious" target="_blank">  
            <p class="button-project btn-github ">Go to GITHUB</p>
            </a>
        </div>

        <div class="work-project-card card-1">
            <h1 class="work-project-card-title ">
                Movie Search
            </h1>
            <a href="https://djordjevicn.github.io/Movie-Search-API-/" target="_blank">
            <img class="qr-card" src="./QRprojects/movieSearchQR.jpg"> </a>
            <a href="https://github.com/DjordjevicN/Movie-Search-API-" target="_blank">  
            <p class="button-project btn-github ">Go to GITHUB</p>
            </a>
        </div>

        
    </div>
    <p class="mobile">GO MOBILE</p>
</div>

</section>`;

let educationContent = `<section class="edu-wrapper">
    <div class="edu-content-card">
        <div class="edu-title">
            <h1>Education</h1>
        </div>
        <div class="edu-grid">
            <div class="edu-card">
                <div class="edu-top-bar">
                    <span class="edu-tag">[ACAD-001]</span>
                    <span class="edu-status">[IN PROGRESS]</span>
                </div>
                <div class="edu-main-info">
                    <img src="./umdd.png" alt="UMD Logo">
                    <div class="edu-info-text">
                        <h3>University of Maryland, College Park</h3>
                        <h4>Master of Science // Data Science</h4>
                    </div>
                </div>
                <hr class="edu-divider">
                <div class="edu-modules-header">
                    <span class="edu-modules-label">&#9660; CORE MODULES</span>
                </div>
                <div class="edu-pills">
                    <span class="edu-pill">Principles of Machine Learning</span>
                    <span class="edu-pill">Big Data Systems</span>
                    <span class="edu-pill">Algorithms for Data Science</span>
                    <span class="edu-pill">Data Representation and Modeling</span>
                </div>
                <p class="edu-description">Currently pursuing advanced graduate studies focused on scalable data architectures and theoretical machine learning. Specializing in designing big data systems and optimizing algorithms to solve complex, high-volume analytical challenges at an enterprise scale.</p>
            </div>
            <div class="edu-card">
                <div class="edu-top-bar">
                    <span class="edu-tag">[ACAD-002]</span>
                    <span class="edu-status">[COMPLETE]</span>
                </div>
                <div class="edu-main-info">
                    <img src="./ggs.png" alt="GGSIPU Logo">
                    <div class="edu-info-text">
                        <h3>Guru Gobind Singh Indraprastha University, Delhi</h3>
                        <h4>Bachelor of Technology // AI and Machine Learning</h4>
                    </div>
                </div>
                <hr class="edu-divider">
                <div class="edu-modules-header">
                    <span class="edu-modules-label">&#9660; CORE MODULES</span>
                </div>
                <div class="edu-pills">
                    <span class="edu-pill">Data Structures</span>
                    <span class="edu-pill">Design and Analysis of Algorithms</span>
                    <span class="edu-pill">Fundamentals of Deep Learning</span>
                    <span class="edu-pill">Natural Language Processing</span>
                    <span class="edu-pill">Computer Vision</span>
                </div>
                <p class="edu-description">Completed a rigorous undergraduate program blending foundational computer science with specialized AI methodologies. Developed hands-on software engineering capabilities while engineering complex machine learning models, laying the groundwork for scalable, data-driven system design.</p>
            </div>
        </div>
    </div>
</section>`;

// ============================
// DOM SELECTIONS
// ============================

const home = document.querySelector("#home");
const work = document.querySelector("#work");
const projects = document.querySelector("#projects");
const education = document.querySelector("#education");
let contentBox = document.querySelector(".content-wrapper");
let phoneContact = document.querySelector(".letsTalk");

// ============================
// PROJECT DESCRIPTION MODAL
// ============================

const projectDescriptions = {
    'Semi-supervised Pneumonia Detection': {
        img: './semi.jpeg',
        summary: 'This project addresses labeled data scarcity by implementing a semi-supervised learning pipeline. It learns visual representations from 9,243 unlabeled chest X-rays using SimCLRv2 contrastive pretraining, then fine-tunes an ensemble of DenseNet169, MobileNetV2, and a 6-layer Vision Transformer. A Feature Attention Network (FA-NET) applies channel and spatial attention for enhanced feature selection.'
    },
    'Predictive Maintenance ML Pipeline': {
        img: './metro.jpeg',
        summary: 'Built a production-ready pipeline that ingests 1.5 million rows of real-world IoT sensor data. It engineers 183 advanced signal features using rolling-window statistics and FFT spectral analysis to train a Random Forest classifier. The system follows a clean modular architecture with centralized YAML-driven configuration.'
    },
    'RAG-Qdrant-AI': {
        img: './RAG.jpeg',
        summary: 'Engineered a production-ready RAG backend to solve LLM hallucinations. By leveraging a Qdrant vector database and the OpenAI API, this system processes raw documents into high-dimensional embeddings to perform rapid semantic searches, ensuring AI responses are strictly grounded in factual data.'
    },
    'Zenith Space Tourism': {
        img: './zenith.jpeg',
        summary: 'A production-grade, decoupled monorepo demonstrating modern web architecture. Driven by Next.js 14 and Strapi v5, the infrastructure is automatically provisioned using Render\'s Infrastructure as Code (IaC) for zero-downtime continuous integration of the PostgreSQL database.'
    }
};

function openProjectModal(projectTitle) {
    let data = projectDescriptions[projectTitle] || { img: '', summary: '' };
    let modalOverlay = document.createElement('div');
    modalOverlay.className = 'project-modal-overlay';
    modalOverlay.innerHTML = `
        <div class="project-modal">
            <button class="project-modal-close">&times;</button>
            <h1>${projectTitle}</h1>
            <img class="project-modal-img" src="${data.img}" alt="${projectTitle} Architecture">
            <p>${data.summary}</p>
        </div>
    `;
    document.body.appendChild(modalOverlay);

    modalOverlay.querySelector('.project-modal-close').addEventListener('click', function() {
        document.body.removeChild(modalOverlay);
    });
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            document.body.removeChild(modalOverlay);
        }
    });
}

function attachProjectDescListeners() {
    document.querySelectorAll('.project-desc-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            openProjectModal(btn.dataset.project);
        });
    });
}

// ============================
// MAIN APP LOGIC
// ============================

document.addEventListener("DOMContentLoaded", () => {
  let enterSequence = new TimelineMax({});

  contentBox.innerHTML = "";
  contentBox.innerHTML = homeContent;
  enterSequence
    .from(".letsTalk", 1, {
      x: -300
    })
    .from("#home", 0.1, {
      opacity: 0
    })
    .from("#home", 0.3, {
      y: 400,
      fontSize: 250
    })
    .from("#work", 0.1, {
      opacity: 0
    })
    .from("#work", 0.3, {
      y: 400,
      fontSize: 250
    })
    .from("#projects", 0.1, {
      opacity: 0
    })
    .from("#projects", 0.3, {
      y: 400,
      fontSize: 250
    })
    .from("#education", 0.1, {
      opacity: 0
    })
    .from("#education", 0.3, {
      y: 400,
      fontSize: 250
    })
    .from(".home", 1, {
      opacity: 0,
      x: -300
    })
    .from(".t1", 0.1, {
      opacity: 0
    })
    .from(".t2", 0.1, {
      opacity: 0
    })
    .from(".t3", 0.1, {
      opacity: 0
    })
    .from(".interface-settings li", 0.9, {
      x: 350
    });

  // HOME
  home.addEventListener("click", () => {
    contentBox.innerHTML = "";
    contentBox.innerHTML = homeContent;
    let openHome = new TimelineMax({});
    openHome
      .from(".home", 1, {
        opacity: 0,
        x: -300
      })
      .from(".t1", 0.1, {
        opacity: 0
      })
      .from(".t2", 0.1, {
        opacity: 0
      })
      .from(".t3", 0.1, {
        opacity: 0
      });
  });

  // WORK (Professional Experience)
  work.addEventListener("click", () => {
    contentBox.innerHTML = "";
    contentBox.innerHTML = workExpContent;
    let openWorkExp = new TimelineMax({});
    openWorkExp
      .from(".work-exp-container", 1, {
        opacity: 0,
        x: 300
      })
      .from(
        ".work-exp-title h1",
        0.1,
        {
          opacity: 0
        },
        "ww"
      )
      .from(".work-exp-title h1", 0.1, {
        opacity: 1
      })
      .from(".work-exp-title h1", 0.1, {
        opacity: 0
      })
      .from(".work-exp-title h1", 0.1, {
        opacity: 1
      })
      .from(".work-exp-title h1", 0.1, {
        opacity: 0
      })
      .from(".work-exp-card", 0.2, {
        opacity: 0
      });
  });

  // PROJECTS (old Work section repurposed)
  projects.addEventListener("click", () => {
    contentBox.innerHTML = "";
    contentBox.innerHTML = projectsContent;
    let openProjects = new TimelineMax({});

    openProjects
      .from(".work-content-card", 1, {
        opacity: 0,
        x: -300
      })
      .from(
        ".card-4",
        0.1,
        {
          opacity: 0
        },
        "op"
      )
      .from(
        ".card-3",
        0.1,
        {
          opacity: 0
        },
        "op"
      )
      .from(
        ".card-2",
        0.1,
        {
          opacity: 0
        },
        "oz"
      )
      .from(
        ".card-1",
        0.1,
        {
          opacity: 0
        },
        "oz"
      );

    // Attach project description modal listeners
    attachProjectDescListeners();
  });

  // EDUCATION (old About section repurposed)
  education.addEventListener("click", () => {
    contentBox.innerHTML = "";
    contentBox.innerHTML = educationContent;
    let openEdu = new TimelineMax({});
    openEdu
      .from(".edu-content-card", 1, {
        opacity: 0,
        x: -300
      })
      .from(
        ".edu-title h1",
        0.1,
        {
          opacity: 0
        },
        "ww"
      )
      .from(".edu-title h1", 0.1, {
        opacity: 1
      })
      .from(".edu-title h1", 0.1, {
        opacity: 0
      })
      .from(".edu-title h1", 0.1, {
        opacity: 1
      })
      .from(".edu-title h1", 0.1, {
        opacity: 0
      })
      .from(".edu-card", 0.2, {
        opacity: 0
      });
  });

  // CONTACT TOGGLE
  let openContact = new TimelineMax({ paused: true, reversed: true });
  phoneContact.addEventListener("click", () => {
    phoneContact.classList.toggle("opened");

    openContact.reversed() ? openContact.play() : openContact.reverse();

    openContact.to(".interface-settings li", 0.3, {
      x: 350
    });
  });
});
