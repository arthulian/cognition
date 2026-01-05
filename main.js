const skills = [
    { title: 'Self-Regulation', shortDesc: 'Manages impulses, attention, and emotions via a cycle of self-monitoring, analysis and self-adjusting.' },
    { title: 'Sense-Making', shortDesc: 'Converts raw data into structured schemas by integrating metacognitive signals, addressing allocentric perspectives, reconciling discrepancies across inputs, and revising preconceptions, by exploring, reframing, and testing ideas.' },
    { title: 'Critical Thinking', shortDesc: 'Evaluates assertions by estimating the prior plausibility of the proposition, assessing source reliability, distinguishing between claim, evidence and inference as separate justificatory layers, and evaluating logical validity and evidential relevance.' },
    { title: 'Objectivity', shortDesc: 'Mitigates motivated reasoning by identifying uneven evidentiary standards, then uniformly applying empirical criteria (measurement and replication) and rational criteria (bayes-updating) to all conclusions, through impersonal rules and self-critique.' },
    { title: 'Fairness', shortDesc: 'Maintains impartial balance by using an objective input–outcome ratio to weigh empathy relative to intent, against accountability relative to consequence.' },
    { title: 'Self Reflection', shortDesc: 'Causal attribution that involves separating personal choices from external circumstances, identifying recurring patterns and controllable levers of influence, and converting insights into action.' },
    { title: 'Self Efficacy', shortDesc: 'Grounds self-belief in past achievements, frames setbacks as temporary skill gaps rather than personal flaws, and periodically reassesses skills to pit subjective belief against objective competence.' },
    { title: 'Self-Discipline', shortDesc: 'The establishment of priorities and the persistent implementation of goals, achieved by voluntarily inhibiting "wants" to pursue "shoulds" amid internal conflict, thus aligning behavior to long-term objectives.' },
    { title: 'Temperance', shortDesc: 'Allocates effort according to strategic importance rather than sunk costs, minimizes unnecessary decision load or temptation exposure, and selects regulation strategies that preserve resources for highest priorities.' },
    { title: 'Perseverance', shortDesc: 'Goal-directed persistence of action, through the overriding of avoidance urges, committing to valued outcomes, and utilizing gradual exposure and skill-development to reduce fear-driven withdrawal.' }
];

function setup() {
    let c = createCanvas(windowWidth, windowHeight);
    c.parent('canvas-container');
}

function draw() {
    background(10, 10, 10, 50);
    // Restoration of particle logic here...
}

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = skills.map(s => `
        <div class="card p-6 rounded-xl cursor-pointer">
            <h3 class="text-amber-500 font-bold mb-2">${s.title}</h3>
            <p class="text-sm opacity-80">${s.shortDesc}</p>
        </div>
    `).join('');
});
