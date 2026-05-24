---
layout: default
permalink: /Research/
title: "Research Directions"
excerpt: ""
author_profile: true
---

<style>
.research-page {
  --ink: #172033;
  --muted: #5f6b7a;
  --line: rgba(23, 32, 51, .13);
  --soft: #f6f8fb;
  --paper: #ffffff;
  --ai: #6b3f68;
  --social: #0f766e;
  --space: #344a7a;
  --programming: #b55a3c;
  --modeling: #7a5b16;
  --macro: #315f72;
  --other: #4f6f52;
  color: var(--ink);
  font-family: "Times New Roman", Times, serif;
}

.research-page * {
  box-sizing: border-box;
}

.research-hero {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  padding: clamp(2rem, 4vw, 3.2rem);
  color: #fff;
  background:
    linear-gradient(120deg, rgba(19, 34, 56, .98), rgba(15, 118, 110, .88) 48%, rgba(181, 90, 60, .86)),
    repeating-linear-gradient(90deg, rgba(255,255,255,.1) 0 1px, transparent 1px 58px),
    repeating-linear-gradient(0deg, rgba(255,255,255,.08) 0 1px, transparent 1px 58px);
  box-shadow: 0 24px 60px rgba(23, 32, 51, .18);
}

.research-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(105deg, transparent 20%, rgba(255,255,255,.22) 45%, transparent 63%);
  mix-blend-mode: screen;
  animation: researchSweep 9s linear infinite;
}

@keyframes researchSweep {
  0% { transform: translateX(-70%); opacity: .22; }
  50% { opacity: .5; }
  100% { transform: translateX(70%); opacity: .22; }
}

.research-hero > * {
  position: relative;
  z-index: 1;
}

.research-kicker {
  margin: 0 0 .9rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  font-size: .86rem;
  font-weight: 700;
  color: rgba(255, 255, 255, .82);
}

.research-hero .hero-lead {
  max-width: 900px;
  margin: 0;
  color: rgba(255, 255, 255, .92);
  font-size: clamp(1.2rem, 2.6vw, 1.72rem);
  line-height: 1.55;
  font-weight: 700;
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
  font-size: clamp(1.35rem, 3vw, 1.9rem);
  line-height: 1;
}

.research-metric span {
  display: block;
  margin-top: .5rem;
  color: rgba(255,255,255,.84);
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
  background: rgba(255,255,255,.88);
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

.direction-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 1.5rem 0 2.5rem;
}

.direction-card,
.paper-card,
.method-panel {
  border: 1px solid transparent;
  border-radius: 8px;
  background:
    linear-gradient(var(--paper), var(--paper)) padding-box,
    linear-gradient(135deg, var(--accent), rgba(255,255,255,0) 58%, rgba(182,130,27,.55)) border-box;
  box-shadow: 0 16px 42px rgba(23,32,51,.08);
}

.direction-card {
  min-height: 210px;
  padding: 1.1rem;
  transition: transform .22s ease, box-shadow .22s ease;
}

.direction-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 54px rgba(23,32,51,.14);
}

.direction-card .index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.45rem;
  height: 2.45rem;
  margin-bottom: .9rem;
  border: 1px solid rgba(23,32,51,.12);
  border-radius: 50%;
  color: var(--accent);
  font-weight: 800;
}

.direction-card h2,
.research-section h2,
.method-panel h2 {
  margin: 0;
  border: 0;
  font-size: clamp(1.22rem, 2vw, 1.62rem);
  line-height: 1.2;
}

.direction-card p,
.research-section .section-lead,
.method-panel p {
  color: var(--muted);
  line-height: 1.58;
}

.direction-card p {
  margin: .7rem 0 .95rem;
  font-size: .97rem;
}

.direction-card a {
  color: var(--accent);
  font-weight: 700;
  text-decoration: none;
}

.method-panel {
  margin: 2rem 0 2.5rem;
  padding: 1.2rem;
  --accent: var(--macro);
}

.method-tags {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin-top: .85rem;
}

.method-tags span,
.paper-tags span {
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

.research-section {
  margin: 2.8rem 0;
  padding-top: 1.15rem;
  border-top: 1px solid var(--line);
}

.research-section .section-lead {
  max-width: 880px;
  margin: .65rem 0 1.2rem;
  font-size: 1.02rem;
}

.paper-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .95rem;
}

.paper-card {
  position: relative;
  padding: 1rem 1.05rem 1rem 1.15rem;
  transition: transform .2s ease, box-shadow .2s ease;
}

.paper-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 46px rgba(23,32,51,.12);
}

.paper-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: .95rem;
  bottom: .95rem;
  width: 4px;
  border-radius: 4px;
  background: var(--accent);
}

.paper-card h3 {
  margin: 0 0 .55rem;
  font-size: 1.02rem;
  line-height: 1.35;
}

.paper-card p {
  margin: 0;
  color: var(--muted);
  font-size: .94rem;
  line-height: 1.52;
}

.paper-tags {
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
  margin-top: .78rem;
}

@media (max-width: 900px) {
  .research-metrics,
  .direction-grid,
  .paper-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .research-hero {
    padding: 1.45rem;
  }

  .research-metrics,
  .direction-grid,
  .paper-list {
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
  .direction-card,
  .paper-card,
  .research-nav a {
    animation: none;
    transition: none;
  }
}
</style>

<div class="research-page">
  <section class="research-hero">
    <p class="research-kicker">Research Portfolio</p>
    <p class="hero-lead">
      My research focuses on AI in education, social media learning, learning spaces and environments,
      technology-enabled programming education, learner behavior modeling, and macro-level educational technology research.
    </p>
    <div class="research-metrics" aria-label="Research overview">
      <div class="research-metric"><strong>7</strong><span>Research directions</span></div>
      <div class="research-metric"><strong>44</strong><span>Direction-linked works listed on this page</span></div>
      <div class="research-metric"><strong>2023-2026</strong><span>Main publication window represented here</span></div>
      <div class="research-metric"><strong>AI + LA</strong><span>Cross-cutting focus on AI, analytics, and learning systems</span></div>
    </div>
  </section>

  <nav class="research-nav" aria-label="Research directions">
    <a href="#ai-education">AI in Education</a>
    <a href="#social-media-learning">Social Media Learning</a>
    <a href="#learning-spaces">Learning Spaces and Environments</a>
    <a href="#programming-education">Technology-Enabled Programming Education</a>
    <a href="#learner-modeling">Learner Behavior Modeling</a>
    <a href="#macro-edtech">Macro Educational Technology Research</a>
    <a href="#other-research">Other Research</a>
  </nav>

  <section class="direction-grid" aria-label="Research direction map">
    <article class="direction-card" style="--accent: var(--ai);">
      <span class="index">01</span>
      <h2>AI in Education</h2>
      <p>Research on generative AI, AIGC, AI agents, learning emotion recognition, AI trust, and AI-supported learning.</p>
      <a href="#ai-education">View direction</a>
    </article>
    <article class="direction-card" style="--accent: var(--social);">
      <span class="index">02</span>
      <h2>Social Media Learning</h2>
      <p>Research on learner intention and behavioral mechanisms in social media, knowledge sharing, influencer-led education, and platform-based learning.</p>
      <a href="#social-media-learning">View direction</a>
    </article>
    <article class="direction-card" style="--accent: var(--space);">
      <span class="index">03</span>
      <h2>Learning Spaces and Environments</h2>
      <p>Research on online education platforms, virtual learning environments, virtual laboratories, digital art spaces, and technology-supported learning environments.</p>
      <a href="#learning-spaces">View direction</a>
    </article>
    <article class="direction-card" style="--accent: var(--programming);">
      <span class="index">04</span>
      <h2>Technology-Enabled Programming Education</h2>
      <p>Research on how AI agents, ChatGPT, MetaClassroom, and collaborative learning support programming education.</p>
      <a href="#programming-education">View direction</a>
    </article>
    <article class="direction-card" style="--accent: var(--modeling);">
      <span class="index">05</span>
      <h2>Learner Behavior Modeling</h2>
      <p>Research explaining learners' adoption, continuance use, and behavioral intention in AIGC, social media, and emerging learning spaces.</p>
      <a href="#learner-modeling">View direction</a>
    </article>
    <article class="direction-card" style="--accent: var(--macro);">
      <span class="index">06</span>
      <h2>Macro Educational Technology Research</h2>
      <p>Research on methodological evaluation, guideline construction, framework design, policy analysis, and global educational technology trends.</p>
      <a href="#macro-edtech">View direction</a>
    </article>
    <article class="direction-card" style="--accent: var(--other);">
      <span class="index">07</span>
      <h2>Other Research</h2>
      <p>Interdisciplinary studies related to educational evaluation, teacher training, leadership, robotics trust, volunteering, music education, and dance education.</p>
      <a href="#other-research">View direction</a>
    </article>
  </section>

  <section class="method-panel">
    <h2>Cross-cutting methodological toolkit</h2>
    <p>
      Across these directions, I combine theory-driven modeling, mixed methods, systematic review, meta-analysis,
      bibliometrics, content analysis, grounded theory, fsQCA, quantitative ethnography, and learning analytics.
    </p>
    <div class="method-tags">
      <span>Mixed methods</span><span>Meta-analysis</span><span>Bibliometrics</span><span>fsQCA</span>
      <span>Grounded theory</span><span>Quantitative ethnography</span><span>Learning analytics</span><span>Framework design</span>
    </div>
  </section>

  <section class="research-section" id="ai-education">
    <h2>AI in Education</h2>
    <p class="section-lead">This direction examines the educational use of generative AI, AIGC, AI agents, emotion recognition, AI trustworthiness, and AI-supported learning.</p>
    <div class="paper-list">
      <article class="paper-card" style="--accent: var(--ai);"><h3>Factors Influencing University Students' Behavioral Intention to Use Generative Artificial Intelligence</h3><p>Wang, C. L., Wang, H. M., Li, Y. Y., Dai, J., Gu, X. Q. &amp; Yu, T.* (2024). <em>International Journal of Human-Computer Interaction</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>SCIE Q1</span><span>CCF-B</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>Deconstructing University Learners' Adoption Intention towards AIGC Technology</h3><p>Wang, C. L., Chen, X. J.*, Hu, Z. B., Jin, S. &amp; Gu, X. Q. (2025). <em>Journal of Computer Assisted Learning</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Mixed methods</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>Annotated Emotional Image Datasets of Chinese University Students in Real Classrooms for Deep Learning</h3><p>Wang, C. L., Wang, H. M.*, Hu, Z. H., &amp; Chen, X. J. (2024). <em>Data in Brief</em>.</p><div class="paper-tags"><span>ESCI</span><span>EI</span><span>Dataset</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>To use or not to use? Generative AI adoption in Chinese business schools</h3><p>Yu, T., Dai, J., Chen, X. J. &amp; Wang, C. L.* (2026). <em>The International Journal of Management Education</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Corresponding Author</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>From information evaluation to technology use: Generative AI adoption in Chinese business schools</h3><p>Yu, T., Dai, J., Chen, X. J., &amp; Wang, C. L.* (2026). <em>The International Journal of Management Education</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Corresponding Author</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>Empowering Education Development through AIGC: A Systematic Literature Review</h3><p>Chen, X. J., Hu, Z. B., &amp; Wang, C. L.* (2024). <em>Education and Information Technologies</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Corresponding Author</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>What factors will affect the effectiveness of using ChatGPT to solve programming problems?</h3><p>Jing, Y. H., Wang, H. M., Chen, X. J., &amp; Wang, C. L.* (2024). <em>Humanities &amp; Social Sciences Communications</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>A&amp;HCI</span><span>Corresponding Author</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>The dynamic evolution of human-centered artificial intelligence in education</h3><p>Chen, X. J., Hu, Z. B., Li, Y. Y. &amp; Wang, C. L.* (2025). <em>Interactive Learning Environments</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Corresponding Author</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>Evolution in Simulation: AI-Agent School with Dual Memory for High-Fidelity Educational Dynamics</h3><p>Jin, S.#, Wang, H. M.#,*, Gao, Z. Q., Yang, Y. B., Bao, C. J., Wang, C. L.* (2025). <em>Conference on Empirical Methods in Natural Language Processing</em>.</p><div class="paper-tags"><span>EMNLP25</span><span>ICORE A*</span><span>CCF-B</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>Panels of peers are needed to gauge AI's trustworthiness-Experts are not enough</h3><p>Cheng, C., Dai, J.*, Yan, L. L., &amp; Wang, C. L. (2025). <em>Nature</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>SCIE Q1</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>Enhancing real-time facial emotion recognition in classrooms via Attention-ResNet optimization</h3><p>Wang, H. M., Wang, C. L., Xu, H. X., Bao, C. J., &amp; Xu, X. L.* (2026). <em>The Visual Computer</em>.</p><div class="paper-tags"><span>SCIE Q2</span><span>CCF-C</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>Enhancing English Language Learning Through Moral Dilemmas</h3><p>Wang, J. Q., Wang, C. L., Xiao, T., Zhang, X. Y. (2025). <em>Language Teaching Research</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>GPT comparison</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>AI support in self-regulated learning: A decade of technological evolution and meta-analysis</h3><p>Xu, J., Luo, Y. Y., Wang, C. L., Wang, M. J., &amp; Wu, Y. H. (2026). <em>British Journal of Educational Technology</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Meta-analysis</span></div></article>
      <article class="paper-card" style="--accent: var(--ai);"><h3>Knowledge Mapping and Trend Analysis of AI Agents in Education</h3><p>Wang, H. M., Xiao, Z., Lai, Y., Bao, C., &amp; Wang, C. L. (2025). <em>Proceedings of the 19th International Conference of the Learning Sciences - ICLS2025</em>.</p><div class="paper-tags"><span>AI agents</span><span>ICLS</span></div></article>
    </div>
  </section>

  <section class="research-section" id="social-media-learning">
    <h2>Social Media Learning</h2>
    <p class="section-lead">This direction focuses on social media learning, knowledge sharing, influencer-led education, and platform-based learning behaviors.</p>
    <div class="paper-list">
      <article class="paper-card" style="--accent: var(--social);"><h3>Understanding the Continuance Intention of College Students Toward New E-learning Spaces</h3><p>Wang, C. L., Dai, J., Zhu, K. K., Yu, T.* &amp; Gu, X. Q. (2023). <em>International Journal of Human-Computer Interaction</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>SCIE Q1</span><span>CCF-B</span></div></article>
      <article class="paper-card" style="--accent: var(--social);"><h3>What drives learners' behavioral intention to share knowledge on social media</h3><p>Wang, C. L., Chen, X. J. &amp; Yu, T.* (2025). <em>Current Psychology</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>fsQCA</span></div></article>
      <article class="paper-card" style="--accent: var(--social);"><h3>Unveiling Learners' Intentions toward Influencer-led Education</h3><p>Chen, X. J., Yu, T., Jian, D., Jing, Y. H.* &amp; Wang, C. L. (2024). <em>Interactive Learning Environments</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Mixed methods</span></div></article>
    </div>
  </section>

  <section class="research-section" id="learning-spaces">
    <h2>Learning Spaces and Environments</h2>
    <p class="section-lead">This direction studies e-learning spaces, online education platforms, virtual learning environments, virtual laboratories, and technology-supported learning environments.</p>
    <div class="paper-list">
      <article class="paper-card" style="--accent: var(--space);"><h3>Understanding the Continuance Intention of College Students Toward New E-learning Spaces</h3><p>Wang, C. L., Dai, J., Zhu, K. K., Yu, T.* &amp; Gu, X. Q. (2023). <em>International Journal of Human-Computer Interaction</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>SCIE Q1</span><span>CCF-B</span></div></article>
      <article class="paper-card" style="--accent: var(--space);"><h3>MetaClassroom: A New Paradigm and Experience for Programming Education</h3><p>Wang, C. L., Chen, X. J., Li, Y. F., Wang, P. J., Wang, H. M. &amp; Li, Y. Y.* (2025). <em>Journal of Educational Computing Research</em>.</p><div class="paper-tags"><span>SSCI Q1</span></div></article>
      <article class="paper-card" style="--accent: var(--space);"><h3>A meta-analysis of learners' continuance intention toward online education platforms</h3><p>Dai, J., Zhang, X., &amp; Wang, C. L.* (2024). <em>Education and Information Technologies</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Corresponding Author</span></div></article>
      <article class="paper-card" style="--accent: var(--space);"><h3>Digital art exhibitions and psychological well-being in Chinese Generation Z</h3><p>Xia, Y. Q., Deng, Y. L., Tao, X. Y., Zhang, S. N. &amp; Wang, C. L.* (2024). <em>Humanities &amp; Social Sciences Communications</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>A&amp;HCI</span><span>Corresponding Author</span></div></article>
      <article class="paper-card" style="--accent: var(--space);"><h3>Before and After: How Did the Pandemic Reshape Virtual Laboratory Research?</h3><p>Wang, J. Y., Li, Y. Y., Chen, X. J., &amp; Wang, C. L.* (2025). <em>SAGE Open</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Corresponding Author</span></div></article>
      <article class="paper-card" style="--accent: var(--space);"><h3>A Bibliometric Analysis of Studies on Technology-Supported Learning Environments</h3><p>Jing, Y. H., Wang, C. L., Chen, Z. Y., Shen, S. S. &amp; Shadiev, R.* (2024). <em>Journal of Computer Assisted Learning</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Bibliometrics</span></div></article>
      <article class="paper-card" style="--accent: var(--space);"><h3>Unleashing the Power of Virtual Learning Environment</h3><p>Jing, Y. H., Jian, D., Wang, C. L. &amp; Shadiev, R.* (2024). <em>Interactive Learning Environments</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Meta-analysis</span></div></article>
      <article class="paper-card" style="--accent: var(--space);"><h3>Unveiling Learners' Intentions toward Influencer-led Education</h3><p>Chen, X. J., Yu, T., Jian, D., Jing, Y. H.* &amp; Wang, C. L. (2024). <em>Interactive Learning Environments</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Learning environment</span></div></article>
    </div>
  </section>

  <section class="research-section" id="programming-education">
    <h2>Technology-Enabled Programming Education</h2>
    <p class="section-lead">This direction explores AI-supported programming education, including MetaClassroom, AI-agent-supported collaborative learning, and ChatGPT-assisted programming problem solving.</p>
    <div class="paper-list">
      <article class="paper-card" style="--accent: var(--programming);"><h3>MetaClassroom: A New Paradigm and Experience for Programming Education</h3><p>Wang, C. L., Chen, X. J., Li, Y. F., Wang, P. J., Wang, H. M. &amp; Li, Y. Y.* (2025). <em>Journal of Educational Computing Research</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>中科院一区 Top</span></div></article>
      <article class="paper-card" style="--accent: var(--programming);"><h3>Impact of AI-Agent-supported Collaborative Learning on University Programming Courses</h3><p>Wang, H. M.#, Wang, C. L.#, Chen, Z., Liu, F., Bao, C. J. &amp; Xu, X. L.* (2025). <em>Education and Information Technologies</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Co-first author</span></div></article>
      <article class="paper-card" style="--accent: var(--programming);"><h3>What factors will affect the effectiveness of using ChatGPT to solve programming problems?</h3><p>Jing, Y. H., Wang, H. M., Chen, X. J., &amp; Wang, C. L.* (2024). <em>Humanities &amp; Social Sciences Communications</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>A&amp;HCI</span><span>Corresponding Author</span></div></article>
    </div>
  </section>

  <section class="research-section" id="learner-modeling">
    <h2>Learner Behavior Modeling</h2>
    <p class="section-lead">This direction models adoption intention, continuance intention, behavioral intention, and knowledge-sharing mechanisms across AI and digital learning contexts.</p>
    <div class="paper-list">
      <article class="paper-card" style="--accent: var(--modeling);"><h3>Deconstructing University Learners' Adoption Intention towards AIGC Technology</h3><p>Wang, C. L., Chen, X. J.*, Hu, Z. B., Jin, S. &amp; Gu, X. Q. (2025). <em>Journal of Computer Assisted Learning</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Adoption intention</span></div></article>
      <article class="paper-card" style="--accent: var(--modeling);"><h3>Understanding the Continuance Intention of College Students Toward New E-learning Spaces</h3><p>Wang, C. L., Dai, J., Zhu, K. K., Yu, T.* &amp; Gu, X. Q. (2023). <em>International Journal of Human-Computer Interaction</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>SCIE Q1</span><span>CCF-B</span></div></article>
      <article class="paper-card" style="--accent: var(--modeling);"><h3>Factors Influencing University Students' Behavioral Intention to Use Generative Artificial Intelligence</h3><p>Wang, C. L., Wang, H. M., Li, Y. Y., Dai, J., Gu, X. Q. &amp; Yu, T.* (2024). <em>International Journal of Human-Computer Interaction</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>SCIE Q1</span><span>CCF-B</span></div></article>
      <article class="paper-card" style="--accent: var(--modeling);"><h3>What drives learners' behavioral intention to share knowledge on social media</h3><p>Wang, C. L., Chen, X. J. &amp; Yu, T.* (2025). <em>Current Psychology</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>fsQCA</span></div></article>
    </div>
  </section>

  <section class="research-section" id="macro-edtech">
    <h2>Macro Educational Technology Research</h2>
    <p class="section-lead">This direction covers macro-level educational technology research, including methodological evaluation, guideline construction, framework design, policy analysis, and field mapping.</p>
    <div class="paper-list">
      <article class="paper-card" style="--accent: var(--macro);"><h3>The journey of challenges and victories: transformation action framework in the GenAI era</h3><p>Wang, C. L., Chen, Y. F., Hu, Z. B., Li, Y. Y., &amp; Gu, X. Q. (2025). <em>Educational Technology Research and Development</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Framework design</span></div></article>
      <article class="paper-card" style="--accent: var(--macro);"><h3>Education Reform and Change Driven by Digital Technology</h3><p>Wang, C. L., Chen, X. J., Yu, T., Liu, Y. D. &amp; Jing, Y. H.* (2024). <em>Humanities &amp; Social Sciences Communications</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>A&amp;HCI</span><span>Bibliometrics</span></div></article>
      <article class="paper-card" style="--accent: var(--macro);"><h3>Bibliometric mapping techniques in educational technology research</h3><p>Jing, Y., Wang, C. L., Chen, Y., Wang, H., Yu, T., &amp; Shadiev, R.* (2023). <em>Education and Information Technologies</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Systematic review</span></div></article>
      <article class="paper-card" style="--accent: var(--macro);"><h3>The Future Landscape of Education: Generative AI in Higher Education</h3><p>Xiao, Z., Wang, C. L., Lai, Y., Wang, H., &amp; Gu, X. (2025). <em>Proceedings of the 19th International Conference of the Learning Sciences - ICLS2025</em>.</p><div class="paper-tags"><span>Framework</span><span>ISLS</span></div></article>
    </div>
  </section>

  <section class="research-section" id="other-research">
    <h2>Other Research</h2>
    <p class="section-lead">This section includes interdisciplinary studies that connect educational evaluation, teacher training, leadership theory, robotics, volunteering, emergency remote teaching, music education, and dance education.</p>
    <div class="paper-list">
      <article class="paper-card" style="--accent: var(--other);"><h3>Assessment as learning: Evidence based on meta-analysis and quantitative ethnography research</h3><p>Liu, Y. C., Xu, G. R., Yuan, S., Zhou, C., &amp; Wang, C. L.* (2024). <em>Studies in Educational Evaluation</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Corresponding Author</span></div></article>
      <article class="paper-card" style="--accent: var(--other);"><h3>Instructional Design Guidelines for Virtual Reality-Based Teacher Training</h3><p>Li, Y. Y., Wang, C. L. &amp; Gu, X. Q.* (2024). <em>Education Technology &amp; Society</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Meta-analysis</span></div></article>
      <article class="paper-card" style="--accent: var(--other);"><h3>Evolution and Current Research Status of Educational Leadership Theory</h3><p>Peng, T., Wang, C. L., Xu, J., Dai, J. &amp; Yu, T.* (2024). <em>SAGE Open</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Content analysis</span></div></article>
      <article class="paper-card" style="--accent: var(--other);"><h3>From Perception to Trust: The Multidimensional Landscape of Anthropomorphism in Robotics</h3><p>Shang, X., Liu, Z., Gong, C., He, Z., &amp; Wang, C. L.* (2025). <em>International Journal of Human-Computer Interaction</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>SCIE Q1</span><span>CCF-B</span><span>Corresponding Author</span></div></article>
      <article class="paper-card" style="--accent: var(--other);"><h3>Motivation and mechanism of university volunteers' participation in major sport events</h3><p>Chen, J., Tang, Y.*, &amp; Wang, C. L.* (2025). <em>Current Psychology</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Grounded theory</span></div></article>
      <article class="paper-card" style="--accent: var(--other);"><h3>The Implementation Path and Problems Encountered During Emergency Remote Teaching</h3><p>Jing, Y. H., Chen, X. J., Zhu, K. K., Shen, S. S., &amp; Wang, C. L.* (2023). <em>SAGE Open</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>Corresponding Author</span></div></article>
      <article class="paper-card" style="--accent: var(--other);"><h3>Empowering music education with technology: a bibliometric perspective</h3><p>Ma, Y. &amp; Wang, C. L.* (2025). <em>Humanities and Social Sciences Communications</em>.</p><div class="paper-tags"><span>SSCI Q1</span><span>A&amp;HCI</span></div></article>
      <article class="paper-card" style="--accent: var(--other);"><h3>Thinking outside the box: A systematic review of gamification trends in children's dance</h3><p>Liu, W. S., Chen, L. J., Zhong, X. T., Liu, W., Chen, X. J., &amp; Wang, C. L.* (2025). <em>Research in Dance Education</em>.</p><div class="paper-tags"><span>A&amp;HCI</span><span>Systematic review</span></div></article>
    </div>
  </section>
</div>
