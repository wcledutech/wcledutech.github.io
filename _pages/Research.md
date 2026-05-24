---
layout: default
permalink: /Research/
title: "Research Topics"
excerpt: ""
author_profile: true
---

<style>
.research-page {
  --ink: #172033;
  --muted: #5f6b7a;
  --line: rgba(23, 32, 51, .12);
  --soft: #f6f8fb;
  --teal: #0f766e;
  --coral: #b55a3c;
  --gold: #b6821b;
  --indigo: #344a7a;
  --plum: #6b3f68;
  --paper: #ffffff;
  color: var(--ink);
  font-family: "Times New Roman", Times, serif;
}

.research-page * {
  box-sizing: border-box;
}

.research-hero {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, .22);
  border-radius: 8px;
  padding: clamp(2rem, 4vw, 3.6rem);
  color: #fff;
  background:
    linear-gradient(120deg, rgba(19, 34, 56, .98), rgba(15, 118, 110, .9) 54%, rgba(181, 90, 60, .9)),
    repeating-linear-gradient(90deg, rgba(255,255,255,.08) 0 1px, transparent 1px 54px);
  box-shadow: 0 24px 60px rgba(23, 32, 51, .18);
}

.research-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent),
    repeating-linear-gradient(0deg, transparent 0 45px, rgba(255,255,255,.08) 45px 46px);
  mix-blend-mode: screen;
  animation: researchSweep 9s linear infinite;
}

@keyframes researchSweep {
  0% { transform: translateX(-60%); opacity: .25; }
  50% { opacity: .55; }
  100% { transform: translateX(60%); opacity: .25; }
}

.research-hero > * {
  position: relative;
  z-index: 1;
}

.research-kicker {
  display: inline-flex;
  gap: .55rem;
  align-items: center;
  margin: 0 0 .9rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  font-size: .82rem;
  font-weight: 700;
  color: rgba(255, 255, 255, .82);
}

.research-hero h1 {
  margin: 0;
  max-width: 820px;
  border: 0;
  font-size: clamp(2.2rem, 6vw, 4.7rem);
  line-height: .96;
  letter-spacing: 0;
}

.research-hero p {
  max-width: 780px;
  margin: 1.2rem 0 0;
  color: rgba(255, 255, 255, .88);
  font-size: clamp(1.06rem, 2.1vw, 1.32rem);
  line-height: 1.55;
}

.research-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: .75rem;
  margin-top: 1.7rem;
}

.research-metric {
  min-height: 104px;
  padding: 1rem;
  border: 1px solid rgba(255,255,255,.24);
  border-radius: 8px;
  background: rgba(255,255,255,.12);
  backdrop-filter: blur(8px);
}

.research-metric strong {
  display: block;
  font-size: clamp(1.45rem, 3vw, 2rem);
  line-height: 1;
}

.research-metric span {
  display: block;
  margin-top: .5rem;
  color: rgba(255,255,255,.82);
  font-size: .92rem;
  line-height: 1.35;
}

.research-nav {
  position: sticky;
  top: .75rem;
  z-index: 5;
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin: 1.35rem 0 2rem;
  padding: .65rem;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: rgba(255,255,255,.86);
  backdrop-filter: blur(12px);
  box-shadow: 0 14px 36px rgba(23,32,51,.08);
}

.research-nav a {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: .45rem .72rem;
  border-radius: 6px;
  color: var(--ink);
  text-decoration: none;
  font-size: .88rem;
  line-height: 1.2;
  transition: background .2s ease, color .2s ease, transform .2s ease;
}

.research-nav a:hover {
  color: #fff;
  background: var(--ink);
  transform: translateY(-1px);
}

.research-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.5rem 0 2.4rem;
}

.theme-card,
.research-work,
.method-panel {
  border: 1px solid transparent;
  border-radius: 8px;
  background:
    linear-gradient(var(--paper), var(--paper)) padding-box,
    linear-gradient(135deg, var(--accent, var(--teal)), rgba(255,255,255,0) 58%, rgba(182,130,27,.62)) border-box;
  box-shadow: 0 16px 42px rgba(23,32,51,.08);
}

.theme-card {
  min-height: 230px;
  padding: 1.25rem;
  transition: transform .22s ease, box-shadow .22s ease;
}

.theme-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 54px rgba(23,32,51,.14);
}

.theme-card .index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(23,32,51,.12);
  border-radius: 50%;
  color: var(--accent, var(--teal));
  font-weight: 800;
}

.theme-card h2,
.research-section h2 {
  margin: 0;
  border: 0;
  font-size: clamp(1.25rem, 2vw, 1.65rem);
  line-height: 1.18;
}

.theme-card p {
  margin: .75rem 0 1rem;
  color: var(--muted);
  font-size: .98rem;
  line-height: 1.52;
}

.theme-card a {
  color: var(--accent, var(--teal));
  font-weight: 700;
  text-decoration: none;
}

.research-section {
  margin: 2.8rem 0;
  padding-top: 1.15rem;
  border-top: 1px solid var(--line);
}

.research-section .section-lead {
  max-width: 860px;
  margin: .65rem 0 1.2rem;
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.62;
}

.work-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .95rem;
}

.research-work {
  padding: 1rem 1.05rem;
  transition: transform .2s ease, box-shadow .2s ease;
}

.research-work:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 46px rgba(23,32,51,.12);
}

.research-work h3 {
  margin: 0 0 .55rem;
  font-size: 1.02rem;
  line-height: 1.35;
}

.research-work p {
  margin: 0;
  color: var(--muted);
  font-size: .94rem;
  line-height: 1.5;
}

.work-meta {
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
  margin-top: .8rem;
}

.work-meta span,
.method-tags span {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(23,32,51,.12);
  border-radius: 999px;
  padding: .18rem .52rem;
  color: var(--muted);
  background: var(--soft);
  font-size: .78rem;
  line-height: 1.4;
}

.method-panel {
  margin: 2.2rem 0 2.6rem;
  padding: 1.25rem;
  --accent: var(--gold);
}

.method-panel h2 {
  margin-top: 0;
  border: 0;
}

.method-panel p {
  color: var(--muted);
  line-height: 1.6;
}

.method-tags {
  display: flex;
  flex-wrap: wrap;
  gap: .55rem;
}

.research-archive {
  margin-top: 3rem;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 1rem 1.1rem;
  background: #fff;
  box-shadow: 0 16px 42px rgba(23,32,51,.06);
}

.research-archive summary {
  cursor: pointer;
  color: var(--ink);
  font-size: 1.2rem;
  font-weight: 800;
}

.research-archive h1 {
  margin-top: 1.1rem;
  font-size: 1.65rem;
}

@media (max-width: 900px) {
  .research-metrics,
  .research-grid,
  .work-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .research-hero {
    padding: 1.55rem;
  }

  .research-metrics,
  .research-grid,
  .work-list {
    grid-template-columns: 1fr;
  }

  .research-nav {
    position: relative;
    top: auto;
  }

  .research-nav a {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .research-hero::after,
  .theme-card,
  .research-work,
  .research-nav a {
    animation: none;
    transition: none;
  }
}
</style>

<div class="research-page" markdown="1">
  <section class="research-hero">
    <p class="research-kicker">Research Portfolio</p>
    <p>
      My research examines how digital technologies reshape learning environments, how learners adopt and use intelligent tools,
      and how rigorous methodological designs can explain, evaluate, and improve technology-enhanced education.
    </p>
    <div class="research-metrics" aria-label="Research overview">
      <div class="research-metric"><strong>5</strong><span>Core research directions</span></div>
      <div class="research-metric"><strong>60</strong><span>Journal and conference publications listed below</span></div>
      <div class="research-metric"><strong>2022-2026</strong><span>Active publication window on this page</span></div>
      <div class="research-metric"><strong>AI + LA</strong><span>Cross-cutting focus on artificial intelligence and learning analytics</span></div>
    </div>
  </section>

  <nav class="research-nav" aria-label="Research directions">
    <a href="#smart-learning-environments">Smart Learning Environments</a>
    <a href="#programming-learning">Programming Learning</a>
    <a href="#methods-evaluation">Methods and Evaluation</a>
    <a href="#learner-modeling">Learner Modeling</a>
    <a href="#ai-education">AI in Education</a>
    <a href="#other-work">Other Work</a>
  </nav>

  <section class="research-grid" aria-label="Research direction map">
    <article class="theme-card" style="--accent: var(--teal);">
      <span class="index">01</span>
      <h2>Smart and Intelligent Learning Environments</h2>
      <p>Designing, mapping, and evaluating digital, virtual, XR, and platform-based learning environments.</p>
      <a href="#smart-learning-environments">View this direction</a>
    </article>
    <article class="theme-card" style="--accent: var(--coral);">
      <span class="index">02</span>
      <h2>Technology-Supported Programming Learning</h2>
      <p>Studying AI agents, ChatGPT, programming problem solving, and new paradigms for computing education.</p>
      <a href="#programming-learning">View this direction</a>
    </article>
    <article class="theme-card" style="--accent: var(--gold);">
      <span class="index">03</span>
      <h2>Educational Research Methods and Evaluation</h2>
      <p>Using meta-analysis, bibliometrics, content analysis, grounded theory, fsQCA, and quantitative ethnography.</p>
      <a href="#methods-evaluation">View this direction</a>
    </article>
    <article class="theme-card" style="--accent: var(--indigo);">
      <span class="index">04</span>
      <h2>Learner Behavior Modeling</h2>
      <p>Explaining technology adoption, continuance intention, knowledge sharing, behavioral intention, and learning experience.</p>
      <a href="#learner-modeling">View this direction</a>
    </article>
    <article class="theme-card" style="--accent: var(--plum);">
      <span class="index">05</span>
      <h2>Artificial Intelligence in Education</h2>
      <p>Investigating AIGC, human-centered AI, AI agents, language learning, higher education, and AI-supported learning systems.</p>
      <a href="#ai-education">View this direction</a>
    </article>
    <article class="theme-card" style="--accent: #4f6f52;">
      <span class="index">06</span>
      <h2>Other Interdisciplinary Studies</h2>
      <p>Housing related work that connects technology acceptance, trust, well-being, robotics, mobility, culture, and society.</p>
      <a href="#other-work">View this direction</a>
    </article>
  </section>

  <section class="method-panel">
    <h2>Cross-cutting methodological toolkit</h2>
    <p>
      Across these directions, I combine theory-driven modeling, learning analytics, systematic review, mixed methods,
      computational analysis, and design-oriented evaluation to make educational technology research both explainable and actionable.
    </p>
    <div class="method-tags">
      <span>Mixed methods</span><span>Meta-analysis</span><span>Bibliometrics</span><span>fsQCA</span>
      <span>Grounded theory</span><span>Quantitative ethnography</span><span>Learning analytics</span><span>Deep learning datasets</span>
    </div>
  </section>

  <section class="research-section" id="smart-learning-environments">
    <h2>Smart and Intelligent Learning Environments</h2>
    <p class="section-lead">This direction focuses on digital learning environments as designed systems: how they are built, how they evolve, and how learners experience them across online, blended, virtual, and XR contexts.</p>
    <div class="work-list">
      <article class="research-work" style="--accent: var(--teal);">
        <h3>The journey of challenges and victories: transformation action framework in the GenAI era</h3>
        <p>A policy-informed framework for understanding educational transformation in the generative AI era.</p>
        <div class="work-meta"><span>ETR&amp;D, 2025</span><span>SSCI Q1</span></div>
      </article>
      <article class="research-work" style="--accent: var(--teal);">
        <h3>Education Reform and Change Driven by Digital Technology</h3>
        <p>A global bibliometric study of digital technology-driven educational reform and frontier evolution.</p>
        <div class="work-meta"><span>HSSCOMMS, 2024</span><span>Highly cited</span></div>
      </article>
      <article class="research-work" style="--accent: var(--teal);">
        <h3>Continuance intention toward new e-learning spaces</h3>
        <p>An integrated TAM and TTF model explaining sustained use of new e-learning spaces among college students.</p>
        <div class="work-meta"><span>IJHCI, 2023</span><span>Hot paper</span></div>
      </article>
      <article class="research-work" style="--accent: var(--teal);">
        <h3>Virtual learning environments and learning outcomes</h3>
        <p>A meta-analytic synthesis of the impact of virtual learning environments on learning outcomes.</p>
        <div class="work-meta"><span>Interactive Learning Environments, 2024</span><span>Meta-analysis</span></div>
      </article>
      <article class="research-work" style="--accent: var(--teal);">
        <h3>Technology-supported learning environments: hot topics and frontier evolution</h3>
        <p>A bibliometric mapping of research trends in technology-supported learning environments.</p>
        <div class="work-meta"><span>JCAL, 2024</span><span>Bibliometrics</span></div>
      </article>
      <article class="research-work" style="--accent: var(--teal);">
        <h3>Virtual laboratory and XR learning research</h3>
        <p>Studies of virtual laboratory development and XR technologies in vocational education and training.</p>
        <div class="work-meta"><span>SAGE Open, 2025</span><span>ICETC, 2024</span></div>
      </article>
    </div>
  </section>

  <section class="research-section" id="programming-learning">
    <h2>Technology-Supported Programming Learning</h2>
    <p class="section-lead">This direction examines how intelligent tools, AI agents, and new learning designs support programming courses, computational thinking, problem solving, and programming education innovation.</p>
    <div class="work-list">
      <article class="research-work" style="--accent: var(--coral);">
        <h3>MetaClassroom: a new paradigm and experience for programming education</h3>
        <p>A programming education study centered on new learning paradigms and immersive learning experience design.</p>
        <div class="work-meta"><span>JECR, 2025</span><span>SSCI Q1</span></div>
      </article>
      <article class="research-work" style="--accent: var(--coral);">
        <h3>AI-agent-supported collaborative learning in university programming courses</h3>
        <p>Evidence on how AI agents shape collaborative learning and learning outcomes in programming education.</p>
        <div class="work-meta"><span>Education and Information Technologies, 2025</span><span>Highly cited</span></div>
      </article>
      <article class="research-work" style="--accent: var(--coral);">
        <h3>ChatGPT for solving programming problems</h3>
        <p>A quasi-experimental study identifying factors that affect the effectiveness of using ChatGPT for programming problem solving.</p>
        <div class="work-meta"><span>HSSCOMMS, 2024</span><span>Hot paper</span></div>
      </article>
      <article class="research-work" style="--accent: var(--coral);">
        <h3>Robot path planning algorithms</h3>
        <p>A technical study of algorithm selection and application for robot path planning problems, extending computational learning contexts.</p>
        <div class="work-meta"><span>Journal of Physics: Conference Series, 2024</span><span>Algorithmic learning</span></div>
      </article>
    </div>
  </section>

  <section class="research-section" id="methods-evaluation">
    <h2>Educational Research Methods and Evaluation</h2>
    <p class="section-lead">This direction builds the methodological layer of my work: evidence synthesis, evaluation logic, mapping techniques, and mixed-method designs for interpreting complex educational technology phenomena.</p>
    <div class="work-list">
      <article class="research-work" style="--accent: var(--gold);">
        <h3>Assessment as learning: meta-analysis and quantitative ethnography</h3>
        <p>A methodological evaluation of assessment as learning using evidence synthesis and quantitative ethnography.</p>
        <div class="work-meta"><span>Studies in Educational Evaluation, 2024</span><span>Evaluation</span></div>
      </article>
      <article class="research-work" style="--accent: var(--gold);">
        <h3>Bibliometric mapping techniques in educational technology research</h3>
        <p>A systematic literature review of bibliometric mapping techniques in educational technology studies.</p>
        <div class="work-meta"><span>Education and Information Technologies, 2024</span><span>Systematic review</span></div>
      </article>
      <article class="research-work" style="--accent: var(--gold);">
        <h3>Educational leadership theory: content analysis-based study</h3>
        <p>A content analysis study tracing the evolution and current status of educational leadership theory.</p>
        <div class="work-meta"><span>SAGE Open, 2024</span><span>Content analysis</span></div>
      </article>
      <article class="research-work" style="--accent: var(--gold);">
        <h3>Big data and data mining in education</h3>
        <p>A bibliometric study mapping big data and data mining research in education from 2010 to 2022.</p>
        <div class="work-meta"><span>IEEE ICCCBDA, 2022</span><span>Bibliometrics</span></div>
      </article>
      <article class="research-work" style="--accent: var(--gold);">
        <h3>Moral education research through knowledge graph analysis</h3>
        <p>A visual analysis of the development and status of moral education research.</p>
        <div class="work-meta"><span>Frontiers in Psychology, 2023</span><span>Knowledge mapping</span></div>
      </article>
      <article class="research-work" style="--accent: var(--gold);">
        <h3>AI agents in education: knowledge mapping and trend analysis</h3>
        <p>A trend analysis of AI-agent research in education from 2004 to 2024.</p>
        <div class="work-meta"><span>ICLS, 2025</span><span>Trend analysis</span></div>
      </article>
    </div>
  </section>

  <section class="research-section" id="learner-modeling">
    <h2>Learner Behavior Modeling</h2>
    <p class="section-lead">This direction models learners' behavioral intention, continuance intention, sharing behavior, adoption mechanisms, and experience formation across AI, online learning, blended learning, and social media contexts.</p>
    <div class="work-list">
      <article class="research-work" style="--accent: var(--indigo);">
        <h3>University students' behavioral intention to use generative AI</h3>
        <p>An integrated model combining the theory of planned behavior and AI literacy.</p>
        <div class="work-meta"><span>IJHCI, 2024</span><span>Hot paper</span></div>
      </article>
      <article class="research-work" style="--accent: var(--indigo);">
        <h3>University learners' adoption intention toward AIGC technology</h3>
        <p>A mixed-methods study using ChatGPT as a focal case for understanding AIGC adoption.</p>
        <div class="work-meta"><span>JCAL, 2025</span><span>Highly cited</span></div>
      </article>
      <article class="research-work" style="--accent: var(--indigo);">
        <h3>Knowledge sharing on social media</h3>
        <p>An fsQCA study identifying configurations that drive learners' behavioral intention to share knowledge.</p>
        <div class="work-meta"><span>Current Psychology, 2025</span><span>fsQCA</span></div>
      </article>
      <article class="research-work" style="--accent: var(--indigo);">
        <h3>Continuance intention in blended learning</h3>
        <p>A study combining grounded theory and fsQCA to explain blended learning continuance intention.</p>
        <div class="work-meta"><span>Interactive Learning Environments, 2024</span><span>Grounded theory + fsQCA</span></div>
      </article>
      <article class="research-work" style="--accent: var(--indigo);">
        <h3>Continuance intention toward online education platforms</h3>
        <p>A meta-analysis synthesizing factors associated with learners' continuance intention in online education.</p>
        <div class="work-meta"><span>Education and Information Technologies, 2024</span><span>Meta-analysis</span></div>
      </article>
      <article class="research-work" style="--accent: var(--indigo);">
        <h3>Influencer-led education</h3>
        <p>An integrated qualitative and quantitative analysis of learners' intentions toward influencer-led education.</p>
        <div class="work-meta"><span>Interactive Learning Environments, 2025</span><span>Mixed methods</span></div>
      </article>
    </div>
  </section>

  <section class="research-section" id="ai-education">
    <h2>Artificial Intelligence in Education</h2>
    <p class="section-lead">This direction investigates AI as both a research object and a learning partner, covering generative AI, human-centered AI, AI agents, AI-supported language learning, and AI-mediated educational systems.</p>
    <div class="work-list">
      <article class="research-work" style="--accent: var(--plum);">
        <h3>Empowering education development through AIGC</h3>
        <p>A systematic literature review of AIGC and education development.</p>
        <div class="work-meta"><span>Education and Information Technologies, 2024</span><span>Hot paper</span></div>
      </article>
      <article class="research-work" style="--accent: var(--plum);">
        <h3>Human-centered artificial intelligence in education</h3>
        <p>A systematic review of the dynamic evolution of human-centered AI in education.</p>
        <div class="work-meta"><span>Interactive Learning Environments, 2025</span><span>SSCI Q1</span></div>
      </article>
      <article class="research-work" style="--accent: var(--plum);">
        <h3>AI-agent school with dual memory</h3>
        <p>A simulation-oriented study of AI-agent school dynamics and high-fidelity educational modeling.</p>
        <div class="work-meta"><span>EMNLP Findings, 2025</span><span>CCF-B</span></div>
      </article>
      <article class="research-work" style="--accent: var(--plum);">
        <h3>Generative AI in higher education</h3>
        <p>An analytical and application framework for the future landscape of generative AI in higher education.</p>
        <div class="work-meta"><span>ICLS, 2025</span><span>Framework</span></div>
      </article>
      <article class="research-work" style="--accent: var(--plum);">
        <h3>Artificial intelligence in language learning</h3>
        <p>A visual analysis of the application landscape and research status of AI in language learning.</p>
        <div class="work-meta"><span>ICETC, 2023</span><span>Visual analysis</span></div>
      </article>
      <article class="research-work" style="--accent: var(--plum);">
        <h3>AI-generated and human-written learning stories</h3>
        <p>A comparative study of GPT and human-written stories for English language learning through moral dilemmas.</p>
        <div class="work-meta"><span>Language Teaching Research, 2025</span><span>AI-supported learning</span></div>
      </article>
    </div>
  </section>

  <section class="research-section" id="other-work">
    <h2>Other Interdisciplinary Studies</h2>
    <p class="section-lead">Work that does not fit fully into the five core directions is grouped here, especially studies connecting technology, trust, culture, psychology, mobility, robotics, consumer behavior, and society.</p>
    <div class="work-list">
      <article class="research-work" style="--accent: #4f6f52;">
        <h3>Panels of peers and AI trustworthiness</h3>
        <p>A commentary on why expert panels alone are not enough to gauge AI's trustworthiness.</p>
        <div class="work-meta"><span>Nature, 2025</span><span>AI trust</span></div>
      </article>
      <article class="research-work" style="--accent: #4f6f52;">
        <h3>Anthropomorphism in robotics</h3>
        <p>A multidimensional study of perception and trust in robotics.</p>
        <div class="work-meta"><span>IJHCI, 2025</span><span>Robotics</span></div>
      </article>
      <article class="research-work" style="--accent: #4f6f52;">
        <h3>Digital art exhibitions and psychological well-being</h3>
        <p>An S-O-R analysis of digital art exhibitions and psychological well-being among Chinese Generation Z.</p>
        <div class="work-meta"><span>HSSCOMMS, 2024</span><span>Well-being</span></div>
      </article>
      <article class="research-work" style="--accent: #4f6f52;">
        <h3>Older adults' technology acceptance</h3>
        <p>A knowledge mapping study of older adults' technology acceptance from 2013 to 2023.</p>
        <div class="work-meta"><span>HSSCOMMS, 2024</span><span>Technology acceptance</span></div>
      </article>
      <article class="research-work" style="--accent: #4f6f52;">
        <h3>Volunteer motivation and major sport events</h3>
        <p>Grounded theory and knowledge mapping studies of volunteer motivation and participation mechanisms.</p>
        <div class="work-meta"><span>Current Psychology, 2025</span><span>Grounded theory</span></div>
      </article>
      <article class="research-work" style="--accent: #4f6f52;">
        <h3>Technology adoption beyond education</h3>
        <p>Studies on facial recognition payment, electric vehicles, supply chain AI adoption, and virtual influencers.</p>
        <div class="work-meta"><span>SSCI journals</span><span>Interdisciplinary modeling</span></div>
      </article>
    </div>
  </section>

<details class="research-archive" markdown="1">
<summary>Complete publication list</summary>

# Complete Publication List

## Authored Journal Paper - First Author
- **Wang, C. L.**, Chen, Y. F., Hu, Z. B., Li, Y. Y., & Gu, X. Q.* (2025). The journey of challenges and victories: Exploring the transformation action framework in the GenAI era from multifaceted policies. *Educational Technology Research and Development*, 1-43. [https://doi.org/10.1007/s11423-025-10535-5](https://doi.org/10.1007/s11423-025-10535-5) (SSCI Q1)
- **Wang, C. L.**, Chen, X. J.\*, Hu Z. B., Jin, S. & Gu, X. Q. (2025). Deconstructing University Learners’ Adoption Intention towards AIGC Technology: A Mixed-Methods Study Using ChatGPT as an Example. *Journal of Computer Assisted Learning*, 41, e13117. [https://doi.org/10.1111/jcal.13117](https://doi.org/10.1111/jcal.13117) (SSCI Q1; ESI 0.1 % hot paper🔥 in 2025; ESI 1% highly cited paper🏆)
- **Wang, C. L.**, Chen, X. J., Li Y. F., Wang, P. J., Wang, H. M. & Li, Y. Y.* (2025). MetaClassroom: A New Paradigm and Experience for Programming Education. *Journal of Educational Computing Research*, 63(4), 864-901. [https://doi.org/10.1177/07356331251322470](https://doi.org/10.1177/07356331251322470) (SSCI Q1)
- **Wang, C. L.**, Wang, H. M., Li Y. Y., Dai, J., Gu, X. Q. & Yu, T.* (2024). Factors Influencing University Students’ Behavioral Intention to Use Generative Artificial Intelligence: Integrating the Theory of Planned Behavior and AI Literacy. *International Journal of Human-Computer Interaction*, 41(11), 6649-6671. [https://doi.org/10.1080/10447318.2024.2383033](https://doi.org/10.1080/10447318.2024.2383033) (SSCI Q1; SCIE Q1; CCF-B; ESI 0.1 % hot paper🔥 in 2025 & 2026; ESI 1% highly cited paper🏆)
- **Wang, C. L.**, Chen, X. J., Yu, T., Liu, Y, D. & Jing, Y. H. (2024). Education Reform and Change Driven by Digital Technology: A Bibliometric Study from a Global Perspective. *Humanities & Social Sciences Communications*, 11, 256. [https://doi.org/10.1057/s41599-024-02717-y](https://doi.org/10.1057/s41599-024-02717-y) (SSCI Q1; AHCI; ESI 0.1 % hot paper🔥in 2025; ESI 1% highly cited paper🏆)
- **Wang, C. L.**, Dai, J. Zhu K. K., Yu, T.* & Gu, X. Q. (2023). Understanding the Continuance Intention of College Students Toward New E-learning Spaces Based on an Integrated Model of the TAM and TTF. *International Journal of Human-Computer Interaction*, 40(24), 8419-8432. [https://doi.org/10.1080/10447318.2023.2291609](https://doi.org/10.1080/10447318.2023.2291609) (SSCI Q1; SCIE Q1; CCF-B; ESI 0.1 % hot paper🔥in 2024, 2025 & 2026; ESI 1% highly cited paper🏆)
- **Wang, C. L.**, Chen, X. J. & Yu, T.* (2025). What drives learners’ behavioral intention to share knowledge on social media: Evidence from a fuzzy-set qualitative comparative analysis (FsQCA). *Current Psychology*, 44(10), 8766-8780. [https://doi.org/10.1007/s12144-025-07813-z](https://doi.org/10.1007/s12144-025-07813-z) (SSCI Q1)
- Wang, H. M.#, **Wang, C. L.#**, Chen, Z., Liu, F., Bao, C. J. & Xu, X. L.* (2025). Impact of AI-Agent-supported Collaborative Learning on the Learning Outcomes of University Programming Courses. *Education and Information Technologies*, 1-33. [https://doi.org/10.1007/s10639-025-13487-8](https://doi.org/10.1007/s10639-025-13487-8) (SSCI Q1; ESI 1% highly cited paper🏆)
- **Wang, C. L.**, Wang, H. M.\*, Hu, Z. H., & Chen, X. J. (2024). Annotated Emotional Image Datasets of Chinese University Students in Real Classrooms for Deep Learning. *Data in Brief*, 57, 111147. [https://doi.org/10.1016/j.dib.2024.111147](https://doi.org/10.1016/j.dib.2024.111147) (ESCI; EI)

## Authored Journal Paper - Corresponding Author
- Chen, X. J., Hu, Z. B., & Wang, C. L.* (2024). Empowering Education Development through AIGC: A Systematic Literature Review. *Education and Information Technologies*, 29, 17485-17537. [https://doi.org/10.1007/s10639-024-12549-7](https://doi.org/10.1007/s10639-024-12549-7) (SSCI Q1; ESI 0.1 % hot paper; ESI 1% highly cited paper🏆)
- Jing, Y. H., Wang, H. M., Chen, X. J., & Wang, C. L.* (2024). What factors will affect the effectiveness of using ChatGPT to solve programming problems? A quasi-experimental study. *Humanities & Social Sciences Communications*, 11, 319. [https://doi.org/10.1057/s41599-024-02751-w](https://doi.org/10.1057/s41599-024-02751-w) (SSCI Q1; AHCI; ESI 0.1 % hot paper🔥 in 2025; ESI 1% highly cited paper🏆)
- Yu, T., Dai, J., Chen, X. J., & Wang, C. L.* (2026). To use or not to use? Generative AI adoption in Chinese business schools. *The International Journal of Management Education*, 24(1), 101323. [https://doi.org/10.1016/j.ijme.2025.101323](https://doi.org/10.1016/j.ijme.2025.101323) (SSCI Q1; AJG 2)
- Chen, X. J., Yu, T., Jian, D., Jing, Y. H.* & Wang, C. L. (2025). Unveiling Learners’ Intentions toward Influencer-led Education: An Integration of Qualitative and Quantitative Analysis. *Interactive Learning Environments*. [https://doi.org/10.1080/10494820.2024.2444533](https://doi.org/10.1080/10494820.2024.2444533) (SSCI Q1; ESI 1% highly cited paper🏆)
- Dai, J., Zhang, X., & Wang, C. L.* (2024). A metaanalysis of learners’ continuance intention toward online education platforms. *Education and Information Technologies*, 29, 21833-21868. [https://doi.org/10.1007/s10639-024-12654-7](https://doi.org/10.1007/s10639-024-12654-7) (SSCI Q1; ESI 0.1 % hot paper; ESI 1% highly cited paper🏆)
- Shang, X., Liu, Z., Gong, C., He, Z., & Wang, C. L.* (2025). From Perception to Trust: The Multidimensional Landscape of Anthropomorphism in Robotics. *International Journal of Human-Computer Interaction*, 1-23. [https://doi.org/10.1080/10447318.2025.2504198](https://doi.org/10.1080/10447318.2025.2504198) (SSCI Q1; SCIE Q1; CCF-B)
- Yu, T., Dai, J., Chen, X. J. & Wang, C. L.* (2024). Factors Influencing Continuance Intention in Blended Learning among Business School students in China: Based on Grounded Theory and FsQCA. *Interactive Learning Environments*, 1-23. [https://doi.org/10.1080/10494820.2024.2370477](https://doi.org/10.1080/10494820.2024.2370477) (SSCI Q1; ESI 1% highly cited paper🏆)
- Yu, T., Dai, J. & Wang, C. L.* (2023). Adoption of blended learning: Chinese university students’ perspectives. *Humanities & Social Sciences Communications*, 10, 390. [https://doi.org/10.1057/s41599-023-01904-7](https://doi.org/10.1057/s41599-023-01904-7) (SSCI Q1; AHCI; ESI 1% highly cited paper🏆)
- Xia, Y. Q., Deng, Y. L., Tao X. Y., Zhang, S. N. & Wang, C. L.* (2024). Digital art exhibitions and psychological well-being in Chinese Generation Z: An analysis based on the S-O-R framework. *Humanities & Social Sciences Communications*, 11, 266. [https://doi.org/10.1057/s41599-024-02718-x](https://doi.org/10.1057/s41599-024-02718-x) (SSCI Q1; AHCI; ESI 1% highly cited paper🏆)
- Liu, Y. C., Xu, G. R., Yuan, S., Zhou, C., & Wang, C. L.* (2024). Assessment as learning: Evidence based on meta-analysis and quantitative ethnography research. *Studies in Educational Evaluation*, 83, 101423. [https://doi.org/10.1016/j.stueduc.2024.101423](https://doi.org/10.1016/j.stueduc.2024.101423) (SSCI Q1)
- Liu, W. S., Chen, L. J., Zhong, X. T., Liu, W., Chen, X. J., & Wang, C. L.* (2025). Thinking outside the box: A systematic review of gamification trends in children's dance. *Research in Dance Education*, 1-30. [https://doi.org/10.1080/14647893.2025.2570912](https://doi.org/10.1080/14647893.2025.2570912) (AHCI)
- Jin, S., Wang, H. M.\*, Gao, Z. Q., Yang, Y. B., Bao, C. J., Wang, C. L.\* (2025). Evolution in simulation: AI-agent school with dual memory for high-fidelity educational dynamics. In Findings of the Association for Computational Linguistics: *EMNLP 2025* (pp. 5843-5857). Association for Computational Linguistics. [https://doi.org/10.18653/v1/2025.findings-emnlp.312](https://doi.org/10.18653/v1/2025.findings-emnlp.312) (CCF-B)
- Mo C., Wang C. L.\*, Dai J. & Jin P. Q. (2022). Video Playback Speed Influence on Learning Effect From the Perspective of Personalized Adaptive Learning: A Study Based on Cognitive Load Theory. *Frontiers in Psychology*, 13, 839982. [https://doi.org/10.3389/fpsyg.2022.839982](https://doi.org/10.3389/fpsyg.2022.839982) (SSCI Q1)
- Ma, Y. & Wang, C. L.* (2025). Empowering music education with technology: a bibliometric perspective. *Humanities and Social Sciences Communications*, 12, 345. [https://doi.org/10.1057/s41599-025-04616-2](https://doi.org/10.1057/s41599-025-04616-2) (SSCI Q1; AHCI)
- Shang, X., Liu, Z., Gong, C., He, Z., & Wang, C. L.* (2025). From Perception to Trust: The Multidimensional Landscape of Anthropomorphism in Robotics. *International Journal of Human-Computer Interaction*, 1-23. [https://doi.org/10.1080/10447318.2025.2504198](https://doi.org/10.1080/10447318.2025.2504198) (SSCI Q1; SCIE Q1; CCF-B)
- Shang, X., Liu, Z., Gong, C., Hu, Z., Wu, Y. & Wang, C. L.* (2024). Knowledge mapping and evolution of research on older adults’ technology acceptance: A bibliometric study from 2013 to 2023. *Humanities and Social Sciences Communications*, 11, 1115. [https://doi.org/10.1057/s41599-024-03658-2](https://doi.org/10.1057/s41599-024-03658-2) (SSCI Q1; AHCI)
- Wang, J. Y., Li, Y. Y., Chen, X. J., & Wang, C. L.* (2025). Before and After: How Did the Pandemic Reshape Virtual Laboratory Research? *SAGE Open*, 15(2), 1-23. [https://doi.org/10.1177/21582440251339961](https://doi.org/10.1177/21582440251339961) (SSCI Q1)
- Wang, J. Y., Chen, X. J., Hu, Z. B., Yang, J. W., & Wang, C. L.* (2025). Fuel for the mind: Exploring coffee’s impact on university learning performance and experience. *British Food Journal*, 27(12), 4767-4788. [https://doi.org/10.1108/BFJ-11-2024-1178](https://doi.org/10.1108/BFJ-11-2024-1178) (SCIE Q1)
- Chen J. Y., Liu Y. D.*, Dai J. & Wang C. L.* (2023). Development and status of moral education research: Visual analysis based on knowledge graph. *Frontiers in Psychology*, 13, 1079955. [https://doi.org/10.3389/fpsyg.2022.1079955](https://doi.org/10.3389/fpsyg.2022.1079955) (SSCI Q1)
- Chen, J., Wang, C. L., & Tang, Y. L.* (2022). Knowledge mapping of volunteer motivation: a bibliometric analysis and cross-cultural comparative study. *Frontiers in Psychology*, 13, 883150. [https://doi.org/10.3389/fpsyg.2022.883150](https://doi.org/10.3389/fpsyg.2022.883150) (SSCI Q1)
- Yu, T., Zhang, Y., Teoh, A. P., Wang, A., & Wang, C. L.* (2023). Factors Influencing University Students’ Behavioral Intention to Use Electric Car-Sharing Services in Guangzhou, China. *SAGE Open*, 13(4), 1-27. [https://doi.org/10.1177/21582440231210551](https://doi.org/10.1177/21582440231210551) (SSCI Q1)
- Yu, T., Teoh, A. P., Bian, Q., & Wang, C. L*. (2025). What drives continuance intention to use electric vehicles: An extension of expectation-confirmation model. *Transportation*. 1-35. [https://doi.org/10.1007/s11116-025-10667-w](https://doi.org/10.1007/s11116-025-10667-w) (SSCI Q2; SCIE Q2)
- Chen, X. J., Hu, Z. B., Li, Y. Y. & Wang, C. L.* (2025). The journey of challenges and triumphs: a systematic literature review of the dynamic evolution of human-centered artificial intelligence in education. *Interactive Learning Environments*, 1-27. [https://doi.org/10.1080/10494820.2025.2472288](https://doi.org/10.1080/10494820.2025.2472288) (SSCI Q1)
- Jing, Y. H., Chen, X. J., Zhu, K. K., Shen, S. S., & Wang, C. L.* (2023). The Implementation Path and Problems Encountered During Emergency Remote Teaching in Vocational Colleges: A Qualitative Study in China. *SAGE Open*, 13(4), 1-16. [https://doi.org/10.1177/21582440231212160](https://doi.org/10.1177/21582440231212160) (SSCI Q1)
- Chen, J., Tang, Y.\*, & Wang, C. L.\* (2025). Motivation and mechanism of university volunteers' participation in major sport events: A grounded theory study on volunteers for the Hangzhou Asian games. *Current Psychology*. [https://doi.org/10.1007/s12144-025-08052-y](https://doi.org/10.1007/s12144-025-08052-y) (SSCI Q1)

## Authored Journal Paper - Other Author
- Cheng, C., Dai, J., Yan, L. L., & **Wang, C. L.** (2025). Panels of peers are needed to gauge AI’s trustworthiness-Experts are not enough. *Nature*, 647(8090), 592. [https://doi.org/10.1038/d41586-025-03783-1](https://doi.org/10.1038/d41586-025-03783-1) (SCIE Q1)
- Li, Y. Y., **Wang, C. L.** & Gu, X. Q. (2025). Instructional Design Guidelines for Virtual Reality-Based Teacher Training: A Meta-analysis. *Education Technology & Society*, 28(1), 338-358. [https://doi.org/10.30191/ETS.202501_28(1).SP02](https://doi.org/10.30191/ETS.202501_28(1).SP02) (SSCI Q1)
- Jing, Y. H., **Wang, C. L.**, Chen, Z. Y., Shen, S. S., & Shadiev, R. (2024). A Bibliometric Analysis of Studies on Technology-Supported Learning Environments: Hot Topics and Frontier Evolution. *Journal of Computer Assisted Learning*, 40(3), 1185-1200. [https://doi.org/10.1111/jcal.12934](https://doi.org/10.1111/jcal.12934) (SSCI Q1)
- Wang, J. Q., **Wang, C. L.**, Xiao, T., Zhang, X. Y. (2025). Enhancing English Language Learning Through Moral Dilemmas: A Comparative Study of GPT and Human-Written Stories. *Language Teaching Research*, 1-32. [https://doi.org/10.1177/13621688251391412](https://doi.org/10.1177/13621688251391412) (SSCI Q1)
- Peng, T., **Wang, C. L.**, Xu, J., Dai, J. & Yu, T. (2024). Evolution and Current Research Status of Educational Leadership Theory: A Content Analysis-Based Study. *SAGE Open*, 14(3), 1-16. [https://doi.org/10.1177/21582440241285763](https://doi.org/10.1177/21582440241285763) (SSCI Q1)
- Jing, Y. H., **Wang, C. L.**, Chen, Y., Wang, H. M., Yu, T., & Shadiev, R. (2024). Bibliometric mapping techniques in educational technology research: A systematic literature review. *Education and Information Technologies*, 29(8), 9283-9311. [https://doi.org/10.1007/s10639-023-12178-6](https://doi.org/10.1007/s10639-023-12178-6) (SSCI Q1)
- Yu, T., **Wang, C. L.**, Bian, Q., & Teoh, A. P. (2024). Acceptance of or resistance to facial recognition payment: A systematic review. *Journal of Consumer Behaviour*, 23(6), 2933-2951. [https://doi.org/10.1002/cb.2385](https://doi.org/10.1002/cb.2385) (SSCI Q1; AJG 2)
- Jing, Y. H., Dai, J., **Wang, C. L.** & Shadiev, R. (2024). Unleashing the Power of Virtual Learning Environment: Exploring the Impact on Learning Outcomes through a Meta-Analysis. *Interactive Learning Environments*, 33(1), 52-69. [https://doi.org/10.1080/10494820.2024.2335481](https://doi.org/10.1080/10494820.2024.2335481) (SSCI Q1)
- Chen, J., Dai, J., Yu, T., & **Wang, C. L.** (2025). Factors influencing the adoption of generative AI in supply chain management: an empirical study based on task-technology fit and the theory of planned behaviour. *International Journal of Logistics Research and Applications*, 1-22. [https://doi.org/10.1080/13675567.2025.2520550](https://doi.org/10.1080/13675567.2025.2520550) (SSCI Q1)
- Yu, T., Teoh, A. P., **Wang, C. L.**, & Bian, Q. (2024). Convenient or risky? Investigating the behavioral intention to use facial recognition payment in smart hospitals. *Humanities and Social Sciences Communications*, 11(1), 1592. [https://doi.org/10.1057/s41599-024-03910](https://doi.org/10.1057/s41599-024-03910) (SSCI Q1; AHCI)
- Yu, T., Teoh, A.P., Bian, Q., Liao, J. & **Wang, C. L.** (2024b). Can virtual influencers affect purchase intentions in tourism and hospitality e-commerce live streaming? An empirical study in China. *International Journal of Contemporary Hospitality Management*, 1-23. [https://doi.org/10.1108/IJCHM-03-2024-0358](https://doi.org/10.1057/s41599-024-03910) (SSCI Q1; AJG 3)
- Yu, T., Teoh, A.P., Liao, J., & **Wang, C. L.** (2025). How do virtual influencers drive impulsive buying behaviour in e-commerce live streaming: the effects of parasocial relationship and influencer-product fit. *Behaviour & Information Technology*, 1-31. [https://doi.org/10.1080/0144929X.2025.2551579](https://doi.org/10.1080/0144929X.2025.2551579) (SSCI Q2; SCIE Q2; AJG 2)
- Yu, T., Teoh, A.P., Liao, J., & **Wang, C. L.** (2025). Factors influencing behavioral intention to use facial recognition payment in the restaurant industry: a comparative analysis of China and Malaysia. *Journal of Travel & Tourism Marketing*, 42(2), 222-247. [https://doi.org/10.1080/10548408.2025.2455421](https://doi.org/10.1080/10548408.2025.2455421) (SSCI Q1; AJG 2)
- Yu, T., Teoh, A. P., Liao, J., & **Wang, C. L.** (2025). Determinants of switching intention to adopt electric vehicles: A comparative analysis of China and Malaysia. *Technology in Society*, 82, 102949. [https://doi.org/10.1016/j.techsoc.2025.102949](https://doi.org/10.1016/j.techsoc.2025.102949) (SSCI Q1; AJG 2)

## Conference Papers

- **Wang, C. L.**, Wang, H. M., Lai, Y. T., Xiao, Z. H., & Xu, X. L. (2025). Prediction of online mathematics test efficiency based on stacked integrated models: A case study of NAEP data. In A. I. Cristea, E. Walker, Y. Lu, O. C. Santos, & S. Isotani (Eds.), *Artificial intelligence in education: Posters and late breaking results, workshops and tutorials, industry and innovation tracks, practitioners, doctoral consortium, blue sky, and WideAIED (AIED 2025)*. Springer. [https://doi.org/10.1007/978-3-031-99261-2_20](https://doi.org/10.1007/978-3-031-99261-2_20)

- **Wang, C. L.**, Dai, J., Chen, Y., Zhang, X., & Xu, L. J.* (2023). A Learning Analytics Model Based on Expression Recognition and Affective Computing: Review of Techniques and Survey of Acceptance. In *Proceedings of the 2022 International Conference on Educational Innovation and Multimedia Technology (EIMT 2022)*. Springer Nature. [https://doi.org/10.2991/978-94-6463-012-1_19](https://doi.org/10.2991/978-94-6463-012-1_19)

- **Wang, C. L.**, Dai, J., & Xu, L. J.* (2022). Big data and data mining in education: a bibliometrics study from 2010 to 2022. In *Proceedings of 2022 7th International Conference on Cloud Computing and Big Data Analytics (Chengdu: IEEE)*, 507-512. [https://doi.org/10.1109/ICCCBDA55098.2022.9778874](https://doi.org/10.1109/ICCCBDA55098.2022.9778874)

- Wang, H. M., Xiao, Z., Lai, Y., Bao, C., & **Wang, C. L.** (2025). Knowledge Mapping and Trend Analysis of AI Agents in Education: A Bibliometric Study From 2004-2024. In Rajala, A., Cortez, A., Hofmann, H., Jornet, A., Lotz-Sisitka, H., & Markauskaite, L. (Eds.), *Proceedings of the 19th International Conference of the Learning Sciences - ICLS 2025* (pp. 1404-1408). International Society of the Learning Sciences (ISLS 2025). [https://doi.org/10.22318/icls2025.764364](https://doi.org/10.22318/icls2025.764364)

- Xiao, Z., **Wang, C. L.**, Lai, Y., Wang, H., & Gu, X. (2025). The Future Landscape of Education: Constructing an Analytical and Application Framework for Generative Artificial Intelligence in Higher Education. In Rajala, A., Cortez, A., Hofmann, H., Jornet, A., Lotz-Sisitka, H., & Markauskaite, L. (Eds.), *Proceedings of the 19th International Conference of the Learning Sciences - ICLS 2025* (pp. 1202-1206). International Society of the Learning Sciences (ISLS 2025). [https://doi.org/10.22318/icls2025.986726](https://doi.org/10.22318/icls2025.986726)

- Chen, X. J., Hu, Z. B., Jing, Y. H. & **Wang, C. L.** (2024). The development and alleviation of humanistic artificial intelligence in the digital age education: A content analysis research. In *Proceedings of the 8th International Conference on Advances in Artificial Intelligence (ICAAI 2024)*, October 17-19, 2024, London, United Kingdom. ACM. [https://doi.org/10.1145/3704137.3704189](https://doi.org/10.1145/3704137.3704189)

- Chen, X. J., Zhu, K. K., Jing, Y. H. & **Wang, C. L.** (2023). The Application Landscape and Research Status of Artificial Intelligence in Language Learning: A Visual Analysis. In *The 15th International Conference on Education Technology and Computers (ICETC 2023)*, Barcelona, Spain (pp. 461-468). ACM. [https://doi.org/10.1145/3629296.3629370](https://doi.org/10.1145/3629296.3629370)

- Chen, Y., Wang, H., Chen, X., Wu, Z., & **Wang, C. L.** (2024). Constructing an Action Model for Educational Systems in Response to Pandemics: A Textual Grounded Analysis. In Lindgren, R., Asino, T. I., Kyza, E. A., Looi, C. K., Keifert, D. T., & Suárez, E. (Eds.), *Proceedings of the 18th International Conference of the Learning Sciences - ICLS 2024* (pp. 979-982). International Society of the Learning Sciences (ISLS 2024). [https://doi.org/10.22318/icls2024.604132](https://doi.org/10.22318/icls2024.604132)

- Chen, X. J., Chen, L., Fu, L., & **Wang, C. L.** (2024, March). Algorithm Selection and Application for Robot Path Planning Problems. In *Journal of Physics: Conference Series (ACCC2023, Vol. 2722, No. 1)*. IOP Publishing. [https://doi.org/10.1088/1742-6596/2722/1/012008](https://doi.org/10.1088/1742-6596/2722/1/012008)

- Xu, Y., Mao, D., & **Wang, C. L.** (2024, September). XR Technologies in vocational education and training research (2000-2024): A Bibliometric Review. In *Proceedings of the 2024 the 16th International Conference on Education Technology and Computers* (pp. 76-83). [https://doi.org/10.1145/3702163.3702174](https://doi.org/10.1145/3702163.3702174)

</details>
</div>
