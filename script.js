/* ==========================================================================
   PROFESSIONAL 3D PORTFOLIO ENGINE - M. ANJANI SAI VIVEK REDDY
   Three.js 3D Scene Engine, Orbit Controls, Raycaster Fix, and Modals
   ========================================================================== */

const EXACT_NAME = "M. Anjani Sai Vivek Reddy";

// --- RESUME DATA STORAGE ---
const PORTFOLIO_DATA = [
    {
        id: "profile",
        icon: "fa-user",
        category: "ABOUT THE CANDIDATE",
        title: "Profile & Overview",
        subtitle: "Computer Science Graduate & AI/ML Developer",
        summary: "Motivated CS graduate with hands-on experience in AI, ML, and Software Engineering. Proven leadership & problem solving.",
        detailsHtml: `
            <div class="profile-modal-grid">
                <div class="profile-photo-column">
                    <div class="profile-square-photo-frame">
                        <img src="profile.jpg" alt="M. Anjani Sai Vivek Reddy">
                    </div>
                    <div class="photo-overlay-tag">M. Anjani Sai Vivek Reddy</div>
                </div>
                <div class="content-grid">
                    <div class="info-card">
                        <h3>Personal Info <span class="badge">Identity</span></h3>
                        <ul>
                            <li><strong>Full Name:</strong> M. Anjani Sai Vivek Reddy</li>
                            <li><strong>Email:</strong> saivivekm28@gmail.com</li>
                            <li><strong>Phone:</strong> +91-7846933034</li>
                            <li><strong>Location:</strong> Berhampur, India</li>
                            <li><strong>Date of Birth:</strong> 22-03-2005</li>
                            <li><strong>Nationality:</strong> Indian</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h3>Executive Profile <span class="badge">Summary</span></h3>
                        <p style="line-height: 1.6; color: #cbd5e1; font-size: 0.92rem;">
                            A motivated and detail-oriented Computer Science graduate with hands-on experience in AI, machine learning, and software development projects. Skilled in programming, data analysis, and team collaboration, with a strong foundation in problem-solving and communication. Experienced in leading project initiatives, coordinating with cross-functional teams, and delivering results under deadlines. Passionate about leveraging technical expertise and leadership skills to manage projects efficiently and drive successful outcomes.
                        </p>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "education",
        icon: "fa-graduation-cap",
        category: "ACADEMIC TIMELINE",
        title: "Education & Qualifications",
        subtitle: "B.Tech in Computer Science & Technology",
        summary: "Nist University (2022-2026), Priyadarshini Jr College, St. Xavier's High School.",
        detailsHtml: `
            <div class="profile-modal-grid">
                <div class="profile-photo-column">
                    <div class="profile-square-photo-frame">
                        <img src="profile.jpg" alt="M. Anjani Sai Vivek Reddy">
                    </div>
                    <div class="photo-overlay-tag">M. Anjani Sai Vivek Reddy</div>
                </div>
                <div class="content-grid">
                    <div class="info-card">
                        <h3>B.TECH - Computer Science & Technology <span class="badge">2022 - 2026</span></h3>
                        <div class="meta">Nist University | Berhampur, India</div>
                        <ul>
                            <li><strong>CGPA:</strong> 7.81</li>
                            <li>Specialized coursework in Artificial Intelligence, Machine Learning, Data Structures, and Software Development.</li>
                            <li>Active member in university technical events and setubandhan competition winner.</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h3>Intermediate (12th Grade) <span class="badge">2020 - 2022</span></h3>
                        <div class="meta">Priyadarshini Jr College | Vizag</div>
                        <ul>
                            <li><strong>Percentage:</strong> 63%</li>
                            <li>Focus on Mathematics, Physics, and Chemistry (MPC).</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h3>Matriculation (10th Grade) <span class="badge">2019 - 2020</span></h3>
                        <div class="meta">St. Xavier's High School | Berhampur</div>
                        <ul>
                            <li><strong>Percentage:</strong> 55.63%</li>
                            <li>Strong foundation in foundational science and logical reasoning.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "projects",
        icon: "fa-code",
        category: "KEY INNOVATIONS",
        title: "Featured Projects",
        subtitle: "AI/ML Solutions & Full-Stack Systems",
        summary: "AgriAid (2025-26), Insurance Predictor (06/2025), Smart Health Way (Jan 2025), Face Recognition (08/2024), EcoTrack (Apr 2023).",
        detailsHtml: `
            <div class="profile-modal-grid">
                <div class="profile-photo-column">
                    <div class="profile-square-photo-frame">
                        <img src="profile.jpg" alt="M. Anjani Sai Vivek Reddy">
                    </div>
                    <div class="photo-overlay-tag">M. Anjani Sai Vivek Reddy</div>
                </div>
                <div class="content-grid">
                    <div class="info-card">
                        <h3>1. AgriAid: Smart Crop Disease Diagnosis <span class="badge">2025-26</span></h3>
                        <div class="meta">AI-Powered Android App & Cloud Backend</div>
                        <ul>
                            <li>Detects crop diseases from leaf images using a <strong>ResNet50</strong> deep learning model for real-time diagnosis.</li>
                            <li>Incorporates weather-based disease forecasting analyzing historical temperature, rainfall, and humidity data.</li>
                            <li>Provides treatment recommendations and location-based guidance to nearby agro-medicine stores.</li>
                        </ul>
                        <div class="tech-tags">
                            <span class="tech-tag">ResNet50</span>
                            <span class="tech-tag">Android</span>
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">Cloud</span>
                        </div>
                    </div>

                    <div class="info-card">
                        <h3>2. Insurance Cost Price Prediction <span class="badge">06/2025</span></h3>
                        <div class="meta">Machine Learning Regression System</div>
                        <ul>
                            <li>Built a regression model using <strong>Random Forest</strong> to predict medical insurance charges from demographic & health data.</li>
                            <li>Performed label encoding, feature scaling, and train-test splitting on insurance dataset.</li>
                            <li>Evaluated model performance using MAE, MSE, and R² metrics; serialized trained model using Pickle.</li>
                        </ul>
                        <div class="tech-tags">
                            <span class="tech-tag">Random Forest</span>
                            <span class="tech-tag">Scikit-Learn</span>
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">Pickle</span>
                        </div>
                    </div>

                    <div class="info-card">
                        <h3>3. Smart Health Way <span class="badge">Jan 2025</span></h3>
                        <div class="meta">Full-Stack Healthcare Management System</div>
                        <ul>
                            <li>Developed a Healthcare Management System with separate portals for Admin, Doctor, and Patient.</li>
                            <li>Implemented secure role-based authentication, appointment booking, digital prescription generation, and medical record management.</li>
                            <li>Designed and integrated RESTful APIs with MySQL to efficiently manage patient records.</li>
                        </ul>
                        <div class="tech-tags">
                            <span class="tech-tag">Spring Boot</span>
                            <span class="tech-tag">Spring Security</span>
                            <span class="tech-tag">Hibernate</span>
                            <span class="tech-tag">MySQL</span>
                            <span class="tech-tag">REST APIs</span>
                        </div>
                    </div>

                    <div class="info-card">
                        <h3>4. Face Recognition With/Without Cap <span class="badge">08/2024</span></h3>
                        <div class="meta">Computer Vision & Deep Learning</div>
                        <ul>
                            <li>Built a face recognition system using <strong>TensorFlow/Keras</strong> detecting individuals with or without a cap.</li>
                            <li>Optimized real-time facial detection under varied lighting and background conditions.</li>
                            <li>Applied computer vision techniques to enhance model accuracy and reliability.</li>
                        </ul>
                        <div class="tech-tags">
                            <span class="tech-tag">TensorFlow</span>
                            <span class="tech-tag">Keras</span>
                            <span class="tech-tag">OpenCV</span>
                            <span class="tech-tag">Deep Learning</span>
                        </div>
                    </div>

                    <div class="info-card">
                        <h3>5. EcoTrack <span class="badge">Apr 2023</span></h3>
                        <div class="meta">Digital Waste Management System</div>
                        <ul>
                            <li>Digital Waste Management System with multi-role portals for Government, Municipality Officer, Worker, and Public users.</li>
                            <li>Built responsive interactive UI using ReactJS, HTML, CSS, JS, with PHP & MySQL for backend operations.</li>
                            <li>Implemented complaint registration, task assignment, role-based auth, and real-time status tracking.</li>
                        </ul>
                        <div class="tech-tags">
                            <span class="tech-tag">ReactJS</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">PHP</span>
                            <span class="tech-tag">MySQL</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "skills",
        icon: "fa-microchip",
        category: "TECHNICAL EXPERTISE",
        title: "Technical Skills & Competencies",
        subtitle: "Languages, Frameworks, Databases & Core CS",
        summary: "Java, Python, JavaScript, Spring Boot, ReactJS, Node.js, TensorFlow, MySQL, DSA, OOPs, DBMS, Networking, AWS.",
        detailsHtml: `
            <div class="profile-modal-grid">
                <div class="profile-photo-column">
                    <div class="profile-square-photo-frame">
                        <img src="profile.jpg" alt="M. Anjani Sai Vivek Reddy">
                    </div>
                    <div class="photo-overlay-tag">M. Anjani Sai Vivek Reddy</div>
                </div>
                <div class="content-grid">
                    <div class="info-card">
                        <div class="skill-category">
                            <h4>Programming Languages</h4>
                            <div class="tech-tags">
                                <span class="tech-tag">Java</span>
                                <span class="tech-tag">Python</span>
                                <span class="tech-tag">JavaScript</span>
                            </div>
                        </div>
                        <div class="skill-category">
                            <h4>Frameworks & AI Tech</h4>
                            <div class="tech-tags">
                                <span class="tech-tag">Spring Boot</span>
                                <span class="tech-tag">ReactJS</span>
                                <span class="tech-tag">Node.js</span>
                                <span class="tech-tag">TensorFlow</span>
                                <span class="tech-tag">Keras</span>
                                <span class="tech-tag">ResNet50</span>
                                <span class="tech-tag">Spring Security</span>
                                <span class="tech-tag">Hibernate</span>
                            </div>
                        </div>
                    </div>

                    <div class="info-card">
                        <div class="skill-category">
                            <h4>Databases & Storage</h4>
                            <div class="tech-tags">
                                <span class="tech-tag">MySQL</span>
                                <span class="tech-tag">SQL</span>
                            </div>
                        </div>
                        <div class="skill-category">
                            <h4>Core Computer Science</h4>
                            <div class="tech-tags">
                                <span class="tech-tag">Data Structures & Algorithms (DSA)</span>
                                <span class="tech-tag">Object-Oriented Programming (OOPs)</span>
                                <span class="tech-tag">DBMS</span>
                                <span class="tech-tag">Computer Networking</span>
                            </div>
                        </div>
                    </div>

                    <div class="info-card">
                        <div class="skill-category">
                            <h4>Developer Tools & Cloud</h4>
                            <div class="tech-tags">
                                <span class="tech-tag">Git</span>
                                <span class="tech-tag">GitHub</span>
                                <span class="tech-tag">Postman</span>
                                <span class="tech-tag">AWS Cloud</span>
                                <span class="tech-tag">Pickle</span>
                            </div>
                        </div>
                        <div class="skill-category">
                            <h4>Professional Soft Skills</h4>
                            <div class="tech-tags">
                                <span class="tech-tag">Communication</span>
                                <span class="tech-tag">Problem Solving</span>
                                <span class="tech-tag">Analytical Thinking</span>
                                <span class="tech-tag">Team Management</span>
                                <span class="tech-tag">Leadership</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "certifications",
        icon: "fa-award",
        category: "ACHIEVEMENTS & CERTS",
        title: "Certifications & Honors",
        subtitle: "Verified Accomplishments & Industry Badges",
        summary: "Cybersecurity, YUVA AI, Computer Vision, CAC Java, NCC 'C' Cert, Hackfest, Setubandhan 1st Prize.",
        detailsHtml: `
            <div class="profile-modal-grid">
                <div class="profile-photo-column">
                    <div class="profile-square-photo-frame">
                        <img src="profile.jpg" alt="M. Anjani Sai Vivek Reddy">
                    </div>
                    <div class="photo-overlay-tag">M. Anjani Sai Vivek Reddy</div>
                </div>
                <div class="content-grid">
                    <div class="info-card">
                        <h3>Industry Certifications <span class="badge">Verified</span></h3>
                        <ul>
                            <li><strong>Certified by Tecnics for Cybersecurity:</strong> (19th May - 17th June 2025)</li>
                            <li><strong>Certified from YUVA AI FOR ALL:</strong> AI Foundation Course (4hrs 30 mins)</li>
                            <li><strong>Certified by Computer Vision Using ML:</strong> (12th Jul - 1st Aug 2024)</li>
                            <li><strong>JAVA Certified By CAC:</strong> (Jan - April 2024)</li>
                            <li><strong>AMCAT Certification:</strong> High proficiency in aptitude, communication & technical skills.</li>
                            <li><strong>GeeksforGeeks Certification:</strong> Java & Data Structures & Algorithms.</li>
                        </ul>
                    </div>

                    <div class="info-card">
                        <h3>Awards & Achievements <span class="badge">Honors</span></h3>
                        <ul>
                            <li><strong>NCC 'C' Certificate:</strong> Achieved Certificate From 1(O) NAVAL UNIT.</li>
                            <li><strong>1st Prize in Setubandhan:</strong> NIST University competition winner.</li>
                            <li><strong>Hackfest 2024 Participant:</strong> Organized by IIT Bhubaneswar.</li>
                            <li><strong>IIT Dhanbad Hackfest 2024:</strong> Collaborated on limited-time tech solutions.</li>
                            <li><strong>Rajya Puraskar of Scout:</strong> Prestigious scouting achievement award.</li>
                            <li><strong>HackerRank 4-Star Java Badge:</strong> Consistently solved complex algorithmic challenges.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    },
    {
        id: "extra_ref",
        icon: "fa-address-book",
        category: "ACTIVITIES & REFERENCES",
        title: "Extra-Curricular & References",
        subtitle: "Interests & Academic Endorsements",
        summary: "Stand-up Comedy, Sports, Music, Travel & References from NIST Professors.",
        detailsHtml: `
            <div class="profile-modal-grid">
                <div class="profile-photo-column">
                    <div class="profile-square-photo-frame">
                        <img src="profile.jpg" alt="M. Anjani Sai Vivek Reddy">
                    </div>
                    <div class="photo-overlay-tag">M. Anjani Sai Vivek Reddy</div>
                </div>
                <div class="content-grid">
                    <div class="info-card">
                        <h3>Extra-Curricular Activities <span class="badge">Interests</span></h3>
                        <ul>
                            <li><strong>Stand-up Comedian:</strong> Performing humorous monologues & creative storytelling.</li>
                            <li><strong>Playing Kabaddi:</strong> Active team sports participation.</li>
                            <li><strong>Badminton & Cricket:</strong> Athletic wellness & strategy games.</li>
                            <li><strong>Singing & Travelling:</strong> Exploring new cultures, music & places.</li>
                        </ul>
                    </div>

                    <div class="info-card">
                        <h3>Academic References <span class="badge">Endorsements</span></h3>
                        <ul>
                            <li>
                                <strong>Dr. Santosh Kumar Kar</strong><br>
                                Senior Assistant Professor, Dept. of CSE, NIST University<br>
                                📧 santoshkumarkar@nist.edu | 📞 +91 9861124913
                            </li>
                            <li style="margin-top: 1rem;">
                                <strong>Dr. Sandipan Mallik</strong><br>
                                Professor, Dept. of ECE, NIST University<br>
                                📧 sandipan@nist.edu | 📞 +91 9658965687
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        `
    }
];

// --- WEB AUDIO API SYNTHESIZER ---
class AudioEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
    }

    playTossSound() {
        if (this.isMuted || !this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(350, now);
        osc.frequency.exponentialRampToValueAtTime(1000, now + 0.4);

        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.45);
    }

    playImpactSound() {
        if (this.isMuted || !this.ctx) return;
        const now = this.ctx.currentTime;
        
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(140, now);
        osc.frequency.exponentialRampToValueAtTime(35, now + 0.3);

        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.3);
    }

    playClickSound() {
        if (this.isMuted || !this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(750, now);
        osc.frequency.exponentialRampToValueAtTime(380, now + 0.08);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
    }
}

const audioEngine = new AudioEngine();

// Preload Profile Photo Image
const profileImage = new Image();
profileImage.src = 'profile.jpg';

// --- THREE.JS 3D SCENE ENGINE ---
class Scene3D {
    constructor() {
        this.container = document.getElementById('canvas-container');
        this.scene = new THREE.Scene();
        this.camera = null;
        this.renderer = null;
        this.controls = null;

        // 3D Meshes
        this.coinMesh = null;
        this.lightPlateGroup = null;
        this.plateRingMesh = null;
        this.plateDiscMesh = null;
        this.centerPortraitGroup = null;
        this.carouselGroup = null;
        this.cardMeshes = [];
        this.particleSystem = null;

        // State & Geometry
        this.currentIndex = 0;
        this.targetRotationY = 0;
        this.currentRotationY = 0;
        this.radius = 8.2;
        this.isCoinTossed = false;
        this.isTossing = false;

        // Pointer tracking
        this.pointerDownX = 0;
        this.pointerDownY = 0;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();

        this.init();
    }

    init() {
        this.scene.fog = new THREE.FogExp2(0x070b19, 0.018);

        this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.set(0, 1.8, 17.5);

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.container.appendChild(this.renderer.domElement);

        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.maxPolarAngle = Math.PI / 2 - 0.05;
        this.controls.minDistance = 7;
        this.controls.maxDistance = 24;

        this.setupLighting();
        this.setupParticles();
        this.createCoin();
        this.createLightPlate();
        this.createCenterPortrait();
        this.create3DCarousel();
        this.setupInteractions();

        window.addEventListener('resize', () => this.onWindowResize());
        this.animate();
    }

    setupLighting() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
        dirLight.position.set(10, 20, 10);
        dirLight.castShadow = true;
        this.scene.add(dirLight);

        const blueLight = new THREE.PointLight(0x2563eb, 1.8, 20);
        blueLight.position.set(-10, 5, -5);
        this.scene.add(blueLight);

        this.spotLight = new THREE.SpotLight(0x38bdf8, 0);
        this.spotLight.position.set(0, 16, 0);
        this.spotLight.angle = Math.PI / 3.8;
        this.spotLight.penumbra = 0.8;
        this.spotLight.castShadow = true;
        this.scene.add(this.spotLight);
    }

    setupParticles() {
        const particleCount = 650;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 45;
            positions[i * 3 + 1] = Math.random() * 22;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 45;

            colors[i * 3] = 0.2;
            colors[i * 3 + 1] = 0.6 + Math.random() * 0.4;
            colors[i * 3 + 2] = 1;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.12,
            vertexColors: true,
            transparent: true,
            opacity: 0.55,
            blending: THREE.AdditiveBlending
        });

        this.particleSystem = new THREE.Points(geometry, material);
        this.scene.add(this.particleSystem);
    }

    createCoin() {
        const geometry = new THREE.CylinderGeometry(1.2, 1.2, 0.2, 64);
        
        const sideMaterial = new THREE.MeshStandardMaterial({
            color: 0x38bdf8,
            metalness: 0.85,
            roughness: 0.2
        });

        const faceCanvas = document.createElement('canvas');
        faceCanvas.width = 512;
        faceCanvas.height = 512;
        const ctx = faceCanvas.getContext('2d');

        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, 512, 512);

        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 14;
        ctx.beginPath();
        ctx.arc(256, 256, 230, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 120px Orbitron, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('AV', 256, 256);

        const faceTexture = new THREE.CanvasTexture(faceCanvas);
        const topBottomMaterial = new THREE.MeshStandardMaterial({
            map: faceTexture,
            metalness: 0.7,
            roughness: 0.3
        });

        const materials = [sideMaterial, topBottomMaterial, topBottomMaterial];
        this.coinMesh = new THREE.Mesh(geometry, materials);
        this.coinMesh.position.set(0, 5, 0);
        this.coinMesh.rotation.x = Math.PI / 2;
        this.coinMesh.castShadow = true;
        this.scene.add(this.coinMesh);
    }

    createLightPlate() {
        this.lightPlateGroup = new THREE.Group();
        this.lightPlateGroup.position.y = -1.5;

        const baseGeo = new THREE.CylinderGeometry(7.0, 7.3, 0.3, 64);
        const baseMat = new THREE.MeshStandardMaterial({
            color: 0x0f172a,
            metalness: 0.9,
            roughness: 0.4
        });
        const baseMesh = new THREE.Mesh(baseGeo, baseMat);
        baseMesh.position.y = -0.15;
        baseMesh.receiveShadow = true;
        this.lightPlateGroup.add(baseMesh);

        const discGeo = new THREE.CircleGeometry(6.7, 64);
        const discCanvas = document.createElement('canvas');
        discCanvas.width = 1024;
        discCanvas.height = 1024;
        const ctx = discCanvas.getContext('2d');

        const grad = ctx.createRadialGradient(512, 512, 50, 512, 512, 500);
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.85)');
        grad.addColorStop(0.5, 'rgba(37, 99, 235, 0.35)');
        grad.addColorStop(1, 'rgba(7, 11, 25, 0.95)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 1024, 1024);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 3;
        for (let i = 0; i < 12; i++) {
            const angle = (i * Math.PI) / 6;
            ctx.beginPath();
            ctx.moveTo(512, 512);
            ctx.lineTo(512 + Math.cos(angle) * 500, 512 + Math.sin(angle) * 500);
            ctx.stroke();
        }

        for (let r = 120; r <= 480; r += 90) {
            ctx.beginPath();
            ctx.arc(512, 512, r, 0, Math.PI * 2);
            ctx.stroke();
        }

        const discTexture = new THREE.CanvasTexture(discCanvas);
        const discMat = new THREE.MeshBasicMaterial({
            map: discTexture,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide
        });

        const discMesh = new THREE.Mesh(discGeo, discMat);
        discMesh.rotation.x = -Math.PI / 2;
        discMesh.position.y = 0.01;
        this.lightPlateGroup.add(discMesh);
        this.plateDiscMesh = discMesh;

        const ringGeo = new THREE.TorusGeometry(6.8, 0.07, 16, 100);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0x38bdf8,
            transparent: true,
            opacity: 0
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2;
        ringMesh.position.y = 0.05;
        this.lightPlateGroup.add(ringMesh);
        this.plateRingMesh = ringMesh;

        this.scene.add(this.lightPlateGroup);
    }

    createCenterPortrait() {
        this.centerPortraitGroup = new THREE.Group();
        this.centerPortraitGroup.position.set(0, -0.4, 0);

        const portraitGeo = new THREE.PlaneGeometry(2.3, 2.3);
        const texture = new THREE.TextureLoader().load('profile.jpg');
        const portraitMat = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide
        });

        const portraitMesh = new THREE.Mesh(portraitGeo, portraitMat);
        this.centerPortraitGroup.add(portraitMesh);

        const frameGeo = new THREE.RingGeometry(1.6, 1.68, 4);
        const frameMat = new THREE.MeshBasicMaterial({
            color: 0x38bdf8,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide
        });
        const frameMesh = new THREE.Mesh(frameGeo, frameMat);
        frameMesh.rotation.z = Math.PI / 4;
        this.centerPortraitGroup.add(frameMesh);

        this.portraitMesh = portraitMesh;
        this.portraitFrameMesh = frameMesh;
        this.scene.add(this.centerPortraitGroup);
    }

    create3DCarousel() {
        this.carouselGroup = new THREE.Group();
        this.carouselGroup.position.y = -0.25;
        this.scene.add(this.carouselGroup);

        const cardCount = PORTFOLIO_DATA.length;
        const angleStep = (Math.PI * 2) / cardCount;

        PORTFOLIO_DATA.forEach((data, index) => {
            const angle = index * angleStep;
            const x = Math.sin(angle) * this.radius;
            const z = Math.cos(angle) * this.radius;

            const texture = this.createCardTexture(data);
            const cardGeo = new THREE.PlaneGeometry(3.3, 4.3);
            const cardMat = new THREE.MeshBasicMaterial({
                map: texture,
                transparent: true,
                opacity: 0,
                side: THREE.DoubleSide
            });

            const cardMesh = new THREE.Mesh(cardGeo, cardMat);
            cardMesh.position.set(x, 0, z);
            cardMesh.lookAt(0, -0.25, 0);
            cardMesh.userData = { index: index, data: data };

            this.carouselGroup.add(cardMesh);
            this.cardMeshes.push(cardMesh);
        });
    }

    createCardTexture(data) {
        const canvas = document.createElement('canvas');
        canvas.width = 660;
        canvas.height = 860;
        const ctx = canvas.getContext('2d');

        const bgGrad = ctx.createLinearGradient(0, 0, 660, 860);
        bgGrad.addColorStop(0, 'rgba(15, 23, 42, 0.96)');
        bgGrad.addColorStop(1, 'rgba(7, 11, 25, 0.98)');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 660, 860);

        ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
        ctx.lineWidth = 10;
        ctx.strokeRect(5, 5, 650, 850);

        ctx.fillStyle = '#2563eb';
        ctx.fillRect(5, 5, 650, 14);

        if (profileImage.complete) {
            ctx.save();
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 5;
            ctx.strokeRect(35, 40, 160, 160);
            ctx.drawImage(profileImage, 38, 43, 154, 154);
            ctx.restore();

            ctx.fillStyle = '#38bdf8';
            ctx.font = 'bold 26px Orbitron, sans-serif';
            ctx.fillText(data.category, 220, 75);

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 36px Outfit, sans-serif';
            this.wrapText(ctx, data.title, 220, 130, 410, 45);
        } else {
            ctx.fillStyle = '#38bdf8';
            ctx.font = 'bold 28px Orbitron, sans-serif';
            ctx.fillText(data.category, 35, 80);

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 44px Outfit, sans-serif';
            this.wrapText(ctx, data.title, 35, 145, 590, 52);
        }

        ctx.fillStyle = '#94a3b8';
        ctx.font = 'bold 32px Outfit, sans-serif';
        ctx.fillText(data.subtitle, 35, 265);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(35, 300);
        ctx.lineTo(625, 300);
        ctx.stroke();

        ctx.fillStyle = '#cbd5e1';
        ctx.font = '30px Outfit, sans-serif';
        this.wrapText(ctx, data.summary, 35, 365, 590, 46);

        ctx.fillStyle = 'rgba(37, 99, 235, 0.25)';
        ctx.fillRect(35, 735, 590, 80);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.strokeRect(35, 735, 590, 80);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 32px Orbitron, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('CLICK TO VIEW DETAILS ➔', 330, 787);

        return new THREE.CanvasTexture(canvas);
    }

    wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = ctx.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                ctx.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, y);
    }

    tossCoin() {
        if (this.isTossing) return;
        this.isTossing = true;
        audioEngine.init();
        audioEngine.playTossSound();

        document.getElementById('intro-screen').classList.add('hidden');
        this.plateDiscMesh.material.opacity = 0;
        this.plateRingMesh.material.opacity = 0;
        this.portraitMesh.material.opacity = 0;
        this.portraitFrameMesh.material.opacity = 0;
        this.cardMeshes.forEach(mesh => mesh.material.opacity = 0);
        this.spotLight.intensity = 0;

        this.coinMesh.position.set(0, 6, 0);
        this.coinMesh.rotation.set(Math.PI / 2, 0, 0);

        const tl = gsap.timeline({
            onComplete: () => {
                this.onCoinLand();
            }
        });

        tl.to(this.coinMesh.position, {
            y: 9.2,
            duration: 0.8,
            ease: "power2.out"
        })
        .to(this.coinMesh.position, {
            y: -1.35,
            duration: 0.9,
            ease: "bounce.out"
        });

        gsap.to(this.coinMesh.rotation, {
            x: Math.PI * 14,
            y: Math.PI * 6,
            duration: 1.7,
            ease: "power2.inOut"
        });
    }

    onCoinLand() {
        audioEngine.playImpactSound();

        gsap.to(this.spotLight, { intensity: 3.5, duration: 0.4 });

        gsap.to(this.plateDiscMesh.material, { opacity: 0.92, duration: 1 });
        gsap.to(this.plateRingMesh.material, { opacity: 1, duration: 1 });

        gsap.to(this.portraitMesh.material, { opacity: 0.95, duration: 1.2 });
        gsap.to(this.portraitFrameMesh.material, { opacity: 1, duration: 1.2 });

        gsap.to(this.camera.position, {
            x: 0,
            y: 1.8,
            z: 16.5,
            duration: 1.5,
            ease: "power2.out"
        });

        this.cardMeshes.forEach((card, i) => {
            gsap.to(card.material, {
                opacity: 1,
                duration: 1,
                delay: i * 0.1,
                ease: "power2.out"
            });
        });

        this.isCoinTossed = true;
        this.isTossing = false;
        this.rotateCarouselToIndex(0);
    }

    rotateCarouselToIndex(index) {
        if (index < 0) index = PORTFOLIO_DATA.length - 1;
        if (index >= PORTFOLIO_DATA.length) index = 0;

        this.currentIndex = index;
        const angleStep = (Math.PI * 2) / PORTFOLIO_DATA.length;
        this.targetRotationY = -index * angleStep;

        document.querySelectorAll('.nav-item').forEach((item, idx) => {
            if (idx === index) item.classList.add('active');
            else item.classList.remove('active');
        });

        document.querySelectorAll('.indicator-dot').forEach((dot, idx) => {
            if (idx === index) dot.classList.add('active');
            else dot.classList.remove('active');
        });

        audioEngine.playClickSound();
    }

    nextSlide() {
        this.rotateCarouselToIndex(this.currentIndex + 1);
    }

    prevSlide() {
        this.rotateCarouselToIndex(this.currentIndex - 1);
    }

    setupInteractions() {
        const domEl = this.renderer.domElement;

        domEl.addEventListener('pointerdown', (e) => {
            this.pointerDownX = e.clientX;
            this.pointerDownY = e.clientY;
        });

        domEl.addEventListener('pointermove', (e) => {
            const rect = domEl.getBoundingClientRect();
            this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        });

        domEl.addEventListener('pointerup', (e) => {
            if (this.isTossing || !this.isCoinTossed) return;

            const deltaX = Math.abs(e.clientX - this.pointerDownX);
            const deltaY = Math.abs(e.clientY - this.pointerDownY);

            if (deltaX < 6 && deltaY < 6) {
                this.camera.updateMatrixWorld();
                this.raycaster.setFromCamera(this.mouse, this.camera);
                const intersects = this.raycaster.intersectObjects(this.cardMeshes, false);

                if (intersects.length > 0) {
                    const clickedCard = intersects[0].object;
                    const index = clickedCard.userData.index;

                    this.rotateCarouselToIndex(index);
                    openDetailModal(PORTFOLIO_DATA[index]);
                }
            }
        });
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.08;
        if (this.carouselGroup) {
            this.carouselGroup.rotation.y = this.currentRotationY;

            this.cardMeshes.forEach((card, idx) => {
                const worldPos = new THREE.Vector3();
                card.getWorldPosition(worldPos);
                card.lookAt(this.camera.position.x, worldPos.y, this.camera.position.z);

                if (this.isCoinTossed) {
                    if (idx === this.currentIndex) {
                        card.material.opacity = 1.0;
                        card.scale.setScalar(1.05);
                    } else {
                        card.material.opacity = 0.5;
                        card.scale.setScalar(0.85);
                    }
                }
            });
        }

        if (this.centerPortraitGroup && this.isCoinTossed) {
            this.centerPortraitGroup.rotation.y += 0.005;
            this.centerPortraitGroup.position.y = -0.4 + Math.sin(Date.now() * 0.002) * 0.08;
        }

        if (this.particleSystem) {
            this.particleSystem.rotation.y += 0.0004;
        }

        if (!this.isTossing && this.coinMesh) {
            this.coinMesh.rotation.z += 0.01;
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// --- SYSTEM INITIALIZATION ---
let scene3DInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    profileImage.onload = () => {
        if (scene3DInstance) {
            scene3DInstance.cardMeshes.forEach((cardMesh, idx) => {
                cardMesh.material.map = scene3DInstance.createCardTexture(PORTFOLIO_DATA[idx]);
                cardMesh.material.needsUpdate = true;
            });
        }
    };

    scene3DInstance = new Scene3D();

    const indicatorsContainer = document.getElementById('carousel-indicators');
    PORTFOLIO_DATA.forEach((data, index) => {
        const dot = document.createElement('div');
        dot.className = `indicator-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            scene3DInstance.rotateCarouselToIndex(index);
        });
        indicatorsContainer.appendChild(dot);
    });

    document.getElementById('toss-btn').addEventListener('click', () => {
        scene3DInstance.tossCoin();
    });

    document.getElementById('replay-btn').addEventListener('click', () => {
        scene3DInstance.tossCoin();
    });

    document.querySelectorAll('.nav-item').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            scene3DInstance.rotateCarouselToIndex(index);
            openDetailModal(PORTFOLIO_DATA[index]);
        });
    });

    document.getElementById('prev-slide-btn').addEventListener('click', () => {
        scene3DInstance.prevSlide();
    });

    document.getElementById('next-slide-btn').addEventListener('click', () => {
        scene3DInstance.nextSlide();
    });

    document.getElementById('open-active-modal-btn').addEventListener('click', () => {
        openDetailModal(PORTFOLIO_DATA[scene3DInstance.currentIndex]);
    });

    document.getElementById('mute-btn').addEventListener('click', (e) => {
        audioEngine.isMuted = !audioEngine.isMuted;
        const icon = e.currentTarget.querySelector('i');
        icon.className = audioEngine.isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high';
    });

    document.getElementById('close-modal-btn').addEventListener('click', closeDetailModal);
    document.getElementById('detail-modal').addEventListener('click', (e) => {
        if (e.target.id === 'detail-modal') closeDetailModal();
    });

    document.getElementById('modal-prev-btn').addEventListener('click', () => {
        const newIndex = (scene3DInstance.currentIndex - 1 + PORTFOLIO_DATA.length) % PORTFOLIO_DATA.length;
        scene3DInstance.rotateCarouselToIndex(newIndex);
        openDetailModal(PORTFOLIO_DATA[newIndex]);
    });

    document.getElementById('modal-next-btn').addEventListener('click', () => {
        const newIndex = (scene3DInstance.currentIndex + 1) % PORTFOLIO_DATA.length;
        scene3DInstance.rotateCarouselToIndex(newIndex);
        openDetailModal(PORTFOLIO_DATA[newIndex]);
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') scene3DInstance.prevSlide();
        if (e.key === 'ArrowRight') scene3DInstance.nextSlide();
        if (e.key === 'Enter') openDetailModal(PORTFOLIO_DATA[scene3DInstance.currentIndex]);
        if (e.key === 'Escape') closeDetailModal();
    });
});

function openDetailModal(data) {
    audioEngine.playClickSound();
    document.getElementById('modal-category').innerHTML = `<i class="fa-solid ${data.icon}"></i> ${data.category}`;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-subtitle').innerText = data.subtitle;
    document.getElementById('modal-content').innerHTML = data.detailsHtml;

    document.getElementById('detail-modal').classList.add('open');
}

function closeDetailModal() {
    audioEngine.playClickSound();
    document.getElementById('detail-modal').classList.remove('open');
}
