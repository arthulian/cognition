// Cognitive Capacities - Main JavaScript

// Skills Data
const skills = [
    {
        id: 'self-regulation',
        title: 'Self-Regulation',
        icon: './resources/skill-icons/self-regulation.jpg',
        shortDesc: 'Manages impulses, attention, and emotions via a cycle of self-monitoring, analysis and self-adjusting.',
        fullDesc: `
            <p class="mb-4">Self-regulation is the cornerstone of emotional intelligence and personal effectiveness. It encompasses the ability to monitor, evaluate, and adjust your own emotional responses, attention, and behaviors in real-time.</p>
            
            <h4 class="font-semibold text-lg mb-2">Key Components:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Self-monitoring:</strong> Continuous awareness of your internal states and external behaviors</li>
                <li><strong>Analysis:</strong> Objective evaluation of whether your responses are appropriate and effective</li>
                <li><strong>Self-adjusting:</strong> The capacity to modify your approach based on feedback and changing circumstances</li>
            </ul>
            
            <h4 class="font-semibold text-lg mb-2">Practical Applications:</h4>
            <ul class="list-disc pl-5 space-y-1">
                <li>Managing stress in high-pressure situations</li>
                <li>Maintaining focus during challenging tasks</li>
                <li>Responding constructively to criticism</li>
                <li>Adapting to unexpected changes</li>
            </ul>
        `,
        category: 'self-management'
    },
    {
        id: 'sense-making',
        title: 'Sense-Making',
        icon: './resources/skill-icons/sense-making.jpg',
        shortDesc: 'Converts raw data into structured schemas by integrating metacognitive signals and exploring ideas.',
        fullDesc: `
            <p class="mb-4">Sense-making is the cognitive process of transforming ambiguous, confusing, or incomplete information into coherent understanding. It's how we create meaning from complexity.</p>
            
            <h4 class="font-semibold text-lg mb-2">Core Processes:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Data Integration:</strong> Combining multiple sources of information</li>
                <li><strong>Schema Formation:</strong> Creating mental frameworks to organize knowledge</li>
                <li><strong>Discrepancy Resolution:</strong> Reconciling conflicting information</li>
                <li><strong>Metacognitive Monitoring:</strong> Thinking about your own thinking process</li>
            </ul>
            
            <h4 class="font-semibold text-lg mb-2">Applications:</h4>
            <ul class="list-disc pl-5 space-y-1">
                <li>Understanding complex problems</li>
                <li>Learning new concepts and systems</li>
                <li>Adapting to unfamiliar situations</li>
                <li>Creating innovative solutions</li>
            </ul>
        `,
        category: 'cognitive-processing'
    },
    {
        id: 'critical-thinking',
        title: 'Critical Thinking',
        icon: './resources/skill-icons/critical-thinking.jpg',
        shortDesc: 'Evaluates assertions by assessing source reliability, logical validity, and evidential relevance.',
        fullDesc: `
            <p class="mb-4">Critical thinking is the disciplined, systematic process of evaluating information and arguments. It involves questioning assumptions, assessing evidence, and drawing reasoned conclusions.</p>
            
            <h4 class="font-semibold text-lg mb-2">Essential Elements:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Prior Plausibility:</strong> Assessing how likely something is before examining evidence</li>
                <li><strong>Source Reliability:</strong> Evaluating the credibility and expertise of information sources</li>
                <li><strong>Claim-Evidence Distinction:</strong> Separating what is claimed from what supports it</li>
                <li><strong>Logical Validity:</strong> Checking whether conclusions follow from premises</li>
            </ul>
            
            <h4 class="font-semibold text-lg mb-2">Everyday Use:</h4>
            <ul class="list-disc pl-5 space-y-1">
                <li>Evaluating news and media claims</li>
                <li>Making important decisions</li>
                <li>Solving complex problems</li>
                <li>Engaging in constructive debates</li>
            </ul>
        `,
        category: 'cognitive-processing'
    },
    {
        id: 'objectivity',
        title: 'Objectivity',
        icon: './resources/skill-icons/objectivity.jpg',
        shortDesc: 'Mitigates motivated reasoning by uniformly applying empirical and rational criteria.',
        fullDesc: `
            <p class="mb-4">Objectivity is the capacity to set aside personal biases and evaluate information based on evidence and logical reasoning rather than emotional attachment or preconceived beliefs.</p>
            
            <h4 class="font-semibold text-lg mb-2">Key Mechanisms:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Motivated Reasoning Detection:</strong> Recognizing when you're rationalizing preferred conclusions</li>
                <li><strong>Uniform Standards:</strong> Applying the same evidentiary criteria to all claims</li>
                <li><strong>Empirical Validation:</strong> Prioritizing measurement and replication</li>
                <li><strong>Bayesian Updating:</strong> Revising beliefs based on new evidence</li>
            </ul>
            
            <h4 class="font-semibold text-lg mb-2">Why It Matters:</h4>
            <ul class="list-disc pl-5 space-y-1">
                <li>Better decision-making under uncertainty</li>
                <li>Reduced influence from cognitive biases</li>
                <li>More accurate understanding of reality</li>
                <li>Improved scientific and analytical thinking</li>
            </ul>
        `,
        category: 'decision-making'
    },
    {
        id: 'fairness',
        title: 'Fairness',
        icon: './resources/skill-icons/fairness.jpg',
        shortDesc: 'Maintains impartial balance by weighing empathy against accountability.',
        fullDesc: `
            <p class="mb-4">Fairness is the capacity to make impartial judgments by balancing multiple perspectives and considering both intentions and consequences in equal measure.</p>
            
            <h4 class="font-semibold text-lg mb-2">Balancing Act:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Empathy vs. Accountability:</strong> Understanding others' perspectives while maintaining standards</li>
                <li><strong>Intent vs. Impact:</strong> Considering both what someone meant and what actually happened</li>
                <li><strong>Objective Input-Outcome Ratio:</strong> Applying consistent standards regardless of personal preference</li>
                <li><strong>Multiple Viewpoints:</strong> Actively seeking and considering diverse perspectives</li>
            </ul>
            
            <h4 class="font-semibold text-lg mb-2">Real-World Applications:</h4>
            <ul class="list-disc pl-5 space-y-1">
                <li>Conflict resolution and mediation</li>
                <li>Leadership and management decisions</li>
                <li>Evaluating others' performance or behavior</li>
                <li>Creating equitable policies and procedures</li>
            </ul>
        `,
        category: 'decision-making'
    },
    {
        id: 'self-reflection',
        title: 'Self-Reflection',
        icon: './resources/skill-icons/self-reflection.jpg',
        shortDesc: 'Causal attribution involving separating personal choices from external circumstances.',
        fullDesc: `
            <p class="mb-4">Self-reflection is the capacity to examine your own thoughts, feelings, and behaviors with clarity and objectivity, understanding the patterns that drive your actions.</p>
            
            <h4 class="font-semibold text-lg mb-2">Core Elements:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Causal Attribution:</strong> Distinguishing between what you control and what you don't</li>
                <li><strong>Pattern Recognition:</strong> Identifying recurring themes in your behavior and decisions</li>
                <li><strong>Controllable Leverage:</strong> Focusing on factors you can actually influence</li>
                <li><strong>Insight to Action:</strong> Converting understanding into behavioral change</li>
            </ul>
            
            <h4 class="font-semibold text-lg mb-2">Benefits:</h4>
            <ul class="list-disc pl-5 space-y-1">
                <li>Improved self-awareness and emotional intelligence</li>
                <li>Better decision-making through understanding biases</li>
                <li>More effective personal development</li>
                <li>Enhanced relationships through understanding your impact</li>
            </ul>
        `,
        category: 'self-management'
    },
    {
        id: 'self-efficacy',
        title: 'Self-Efficacy',
        icon: './resources/skill-icons/self-efficacy.jpg',
        shortDesc: 'Grounds self-belief in past achievements and frames setbacks as temporary skill gaps.',
        fullDesc: `
            <p class="mb-4">Self-efficacy is your belief in your own ability to succeed in specific situations or accomplish tasks. It's confidence grounded in actual competence and experience.</p>
            
            <h4 class="font-semibold text-lg mb-2">Building Blocks:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Past Achievement Foundation:</strong> Basing confidence on actual accomplishments</li>
                <li><strong>Growth Mindset:</strong> Viewing failures as skill gaps rather than personal flaws</li>
                <li><strong>Competence Calibration:</strong> Regularly testing beliefs against objective reality</li>
                <li><strong>Resilient Optimism:</strong> Maintaining belief in your ability to learn and adapt</li>
            </ul>
            
            <h4 class="font-semibold text-lg mb-2">Impact Areas:</h4>
            <ul class="list-disc pl-5 space-y-1">
                <li>Willingness to take on challenges</li>
                <li>Persistence in the face of obstacles</li>
                <li>Performance under pressure</li>
                <li>Motivation and goal achievement</li>
            </ul>
        `,
        category: 'self-management'
    },
    {
        id: 'self-discipline',
        title: 'Self-Discipline',
        icon: './resources/skill-icons/self-discipline.jpg',
        shortDesc: 'The establishment of priorities and persistent implementation of goals amid internal conflict.',
        fullDesc: `
            <p class="mb-4">Self-discipline is the ability to pursue what you should do rather than what you want to do, especially when there's internal conflict between immediate gratification and long-term goals.</p>
            
            <h4 class="font-semibold text-lg mb-2">Key Aspects:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Priority Establishment:</strong> Clearly defining what matters most</li>
                <li><strong>Voluntary Inhibition:</strong> Consciously choosing to delay or deny immediate wants</li>
                <li><strong>Persistent Implementation:</strong> Following through consistently despite obstacles</li>
                <li><strong>Goal Alignment:</strong> Ensuring daily actions serve long-term objectives</li>
            </ul>
            
            <h4 class="font-semibold text-lg mb-2">Practical Examples:</h4>
            <ul class="list-disc pl-5 space-y-1">
                <li>Sticking to exercise and diet plans</li>
                <li>Completing important tasks before leisure activities</li>
                <li>Maintaining focus during challenging work</li>
                <li>Building consistent habits and routines</li>
            </ul>
        `,
        category: 'self-management'
    },
    {
        id: 'temperance',
        title: 'Temperance',
        icon: './resources/skill-icons/temperance.jpg',
        shortDesc: 'Allocates effort according to strategic importance and minimizes unnecessary decision load.',
        fullDesc: `
            <p class="mb-4">Temperance is the wisdom to allocate your limited resources—time, energy, attention—strategically, avoiding waste and preserving capacity for what truly matters.</p>
            
            <h4 class="font-semibold text-lg mb-2">Strategic Allocation:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Importance-Based Prioritization:</strong> Focusing on impact rather than sunk costs</li>
                <li><strong>Decision Load Reduction:</strong> Minimizing unnecessary choices to preserve willpower</li>
                <li><strong>Temptation Avoidance:</strong> Structuring environments to reduce self-control challenges</li>
                <li><strong>Resource Preservation:</strong> Saving energy for highest-priority activities</li>
            </ul>
            
            <h4 class="font-semibold text-lg mb-2">Applications:</h4>
            <ul class="list-disc pl-5 space-y-1">
                <li>Time management and productivity</li>
                <li>Energy conservation for important tasks</li>
                <li>Creating supportive environments</li>
                <li>Knowing when to quit vs. persevere</li>
            </ul>
        `,
        category: 'self-management'
    },
    {
        id: 'perseverance',
        title: 'Perseverance',
        icon: './resources/skill-icons/perseverance.jpg',
        shortDesc: 'Goal-directed persistence of action through overriding avoidance urges.',
        fullDesc: `
            <p class="mb-4">Perseverance is the capacity to maintain effort toward valued goals despite discomfort, fear, or the urge to quit. It's persistence guided by wisdom about what truly matters.</p>
            
            <h4 class="font-semibold text-lg mb-2">Core Elements:</h4>
            <ul class="list-disc pl-5 mb-4 space-y-1">
                <li><strong>Values-Based Commitment:</strong> Staying connected to why the goal matters</li>
                <li><strong>Avoidance Override:</strong> Acting despite fear, discomfort, or uncertainty</li>
                <li><strong>Gradual Exposure:</strong> Building tolerance through progressive challenges</li>
                <li><strong>Skill Development:</strong> Growing capabilities to reduce fear-driven withdrawal</li>
            </ul>
            
            <h4 class="font-semibold text-lg mb-2">When to Persevere:</h4>
            <ul class="list-disc pl-5 space-y-1">
                <li>Goals aligned with core values</li>
                <li>Challenges that build capability</li>
                <li>Important projects nearing completion</li>
                <li>Relationships worth preserving</li>
            </ul>
        `,
        category: 'self-management'
    }
];

// Theme Management
class ThemeManager {
    constructor() {
        // Default to dark mode for high contrast
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.applyTheme();
        this.setupToggle();
    }
    
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        document.body.setAttribute('data-theme', this.currentTheme);
    }
    
    toggle() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
        this.applyTheme();
        this.updateToggleIcon();
    }
    
    updateToggleIcon() {
        const toggle = document.getElementById('themeToggle');
        const icon = toggle.querySelector('svg');
        
        if (this.currentTheme === 'dark') {
            icon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>';
        } else {
            icon.innerHTML = '<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>';
        }
    }
    
    setupToggle() {
        const toggle = document.getElementById('themeToggle');
        toggle.addEventListener('click', () => this.toggle());
        this.updateToggleIcon();
    }
}

// Animation Manager
class AnimationManager {
    static initHeroAnimations() {
        // Initialize Splitting.js for text animations
        Splitting();
        
        // Animate hero title
        anime({
            targets: '[data-splitting] .char',
            translateY: [100, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1400,
            delay: anime.stagger(30)
        });
        
        // Typewriter effect for subtitle
        new Typed('#typed-text', {
            strings: [
                'Unlock the power of cognitive mastery',
                'Develop essential mental capacities',
                'Transform your thinking patterns',
                'Achieve peak mental performance'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }
    
    static animateSkillsGrid() {
        anime({
            targets: '.skill-card',
            translateY: [50, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 800,
            delay: anime.stagger(100)
        });
    }
    
    static animateModal() {
        anime({
            targets: '#skillModal .bg-white',
            scale: [0.8, 1],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 400
        });
    }
}

// Skills Manager
class SkillsManager {
    constructor() {
        this.currentSkillIndex = 0;
        this.setupEventListeners();
    }
    
    renderSkillsGrid() {
        const grid = document.getElementById('skillsGrid');
        grid.innerHTML = skills.map((skill, index) => `
            <div class="skill-card card rounded-2xl p-6 cursor-pointer group" data-skill-index="${index}">
                <div class="flex flex-col items-center text-center">
                    <img src="${skill.icon}" alt="${skill.title}" class="skill-icon mb-4 group-hover:scale-110 transition-transform">
                    <h3 class="font-display text-xl font-semibold mb-3">${skill.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">${skill.shortDesc}</p>
                    <div class="mt-4 text-amber-500 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to explore →
                    </div>
                </div>
            </div>
        `).join('');
        
        // Add click listeners
        grid.querySelectorAll('.skill-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.skillIndex);
                this.openSkillModal(index);
            });
        });
        
        AnimationManager.animateSkillsGrid();
    }
    
    openSkillModal(index) {
        this.currentSkillIndex = index;
        const skill = skills[index];
        
        document.getElementById('modalIcon').src = skill.icon;
        document.getElementById('modalIcon').alt = skill.title;
        document.getElementById('modalTitle').textContent = skill.title;
        document.getElementById('modalContent').innerHTML = skill.fullDesc;
        
        document.getElementById('skillModal').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        AnimationManager.animateModal();
    }
    
    closeSkillModal() {
        document.getElementById('skillModal').classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
    
    navigateSkill(direction) {
        if (direction === 'next') {
            this.currentSkillIndex = (this.currentSkillIndex + 1) % skills.length;
        } else {
            this.currentSkillIndex = (this.currentSkillIndex - 1 + skills.length) % skills.length;
        }
        this.openSkillModal(this.currentSkillIndex);
    }
    
    setupEventListeners() {
        // Close modal
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeSkillModal();
        });
        
        // Close modal on backdrop click
        document.getElementById('skillModal').addEventListener('click', (e) => {
            if (e.target.id === 'skillModal') {
                this.closeSkillModal();
            }
        });
        
        // Navigation buttons
        document.getElementById('prevSkill').addEventListener('click', () => {
            this.navigateSkill('prev');
        });
        
        document.getElementById('nextSkill').addEventListener('click', () => {
            this.navigateSkill('next');
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (document.getElementById('skillModal').classList.contains('hidden')) return;
            
            switch(e.key) {
                case 'Escape':
                    this.closeSkillModal();
                    break;
                case 'ArrowLeft':
                    this.navigateSkill('prev');
                    break;
                case 'ArrowRight':
                    this.navigateSkill('next');
                    break;
            }
        });
    }
}

// Smooth Scrolling
class NavigationManager {
    constructor() {
        this.setupSmoothScrolling();
    }
    
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Background Animation with p5.js
let particles = [];
let mouseX = 0;
let mouseY = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('home');
    canvas.style('position', 'absolute');
    canvas.style('top', '0');
    canvas.style('left', '0');
    canvas.style('z-index', '1');
    canvas.style('pointer-events', 'none');
    
    // Initialize particles
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            vx: random(-1, 1),
            vy: random(-1, 1),
            size: random(2, 6),
            opacity: random(0.3, 0.8)
        });
    }
}

function draw() {
    clear();
    
    // Update and draw particles
    for (let particle of particles) {
        // Move particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
        
        // Draw particle
        fill(245, 158, 11, particle.opacity * 255);
        noStroke();
        ellipse(particle.x, particle.y, particle.size);
        
        // Connect nearby particles
        for (let other of particles) {
            let distance = dist(particle.x, particle.y, other.x, other.y);
            if (distance < 100) {
                stroke(245, 158, 11, (1 - distance / 100) * 50);
                strokeWeight(0.5);
                line(particle.x, particle.y, other.x, other.y);
            }
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize managers
    const themeManager = new ThemeManager();
    const skillsManager = new SkillsManager();
    const navigationManager = new NavigationManager();
    
    // Initialize animations
    AnimationManager.initHeroAnimations();
    
    // Render skills grid
    skillsManager.renderSkillsGrid();
    
    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Add CSS animation class
    const style = document.createElement('style');
    style.textContent = `
        .animate-fade-in {
            animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('Cognitive Capacities website initialized successfully!');
});