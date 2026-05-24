---
layout: default
permalink: /collaboration/
title: "Collaboration"
excerpt: ""
author_profile: true
---

<style>
.collaboration-page {
  --ink: #172033;
  --muted: #5f6b7a;
  --line: rgba(23, 32, 51, .13);
  --soft: #f6f8fb;
  --paper: #ffffff;
  --teal: #0f766e;
  --coral: #b55a3c;
  --gold: #b6821b;
  --indigo: #344a7a;
  color: var(--ink);
  font-family: "Times New Roman", Times, serif;
}

.collaboration-page * {
  box-sizing: border-box;
}

.collaboration-hero {
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

.collaboration-kicker {
  margin: 0 0 .9rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  font-size: .86rem;
  font-weight: 700;
  color: rgba(255,255,255,.82);
}

.collaboration-hero h1 {
  margin: 0;
  color: #fff;
  border: 0;
  font-size: clamp(2.1rem, 5vw, 4rem);
  line-height: 1.05;
}

.collaboration-hero p:last-of-type {
  max-width: 900px;
  margin: 1rem 0 0;
  color: rgba(255,255,255,.9);
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  line-height: 1.55;
}

.collaboration-tags {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: .75rem;
  margin-top: 1.7rem;
}

.collaboration-tag {
  min-height: 104px;
  padding: 1rem;
  border: 1px solid rgba(255,255,255,.24);
  border-radius: 8px;
  background: rgba(255,255,255,.12);
  backdrop-filter: blur(8px);
}

.collaboration-tag strong {
  display: block;
  color: #fff;
  font-size: clamp(1.15rem, 2.4vw, 1.55rem);
  line-height: 1.15;
}

.collaboration-tag span {
  display: block;
  margin-top: .55rem;
  color: rgba(255,255,255,.84);
  font-size: .88rem;
  line-height: 1.35;
}

.collaboration-nav {
  position: sticky;
  top: 5rem;
  z-index: 20;
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

.collaboration-nav a {
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

.collaboration-nav a:hover {
  color: #fff;
  background: var(--ink);
  transform: translateY(-1px);
}

.collaboration-page h2 {
  margin: 2.8rem 0 1rem;
  padding-top: 1.15rem;
  border-top: 1px solid var(--line);
  border-bottom: 0;
  color: var(--ink);
  font-size: clamp(1.25rem, 2vw, 1.72rem);
  line-height: 1.2;
}

.collaboration-page ul {
  display: grid;
  gap: .8rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.collaboration-page li {
  position: relative;
  padding: .95rem 1rem .95rem 1.1rem;
  border: 1px solid transparent;
  border-radius: 8px;
  background:
    linear-gradient(var(--paper), var(--paper)) padding-box,
    linear-gradient(135deg, var(--teal), rgba(255,255,255,0) 58%, rgba(182,130,27,.55)) border-box;
  box-shadow: 0 12px 30px rgba(23,32,51,.06);
  color: var(--muted);
  font-size: .98rem;
  line-height: 1.6;
}

.collaboration-page li::before {
  content: "";
  position: absolute;
  left: 0;
  top: .9rem;
  bottom: .9rem;
  width: 4px;
  border-radius: 4px;
  background: var(--teal);
}

.collaboration-page a {
  color: var(--indigo);
  font-weight: 700;
  text-decoration: none;
}

.collaboration-page a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .collaboration-tags {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .collaboration-nav {
    position: relative;
    top: auto;
  }

  .collaboration-nav a {
    width: 100%;
  }

  .collaboration-tags {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="collaboration-page" markdown="1">

<section class="collaboration-hero">
  <p class="collaboration-kicker">Collaboration</p>
  <h1>Collaboration & Routine</h1>
  <p>Collaborative research connects intelligent learning environments, AI agents, programming learning, public academic service, and method support.</p>
  <div class="collaboration-tags" aria-label="Collaboration focus">
    <div class="collaboration-tag"><strong>Research Network</strong><span>Cross-institutional collaborators and mentors</span></div>
    <div class="collaboration-tag"><strong>AI Agents</strong><span>Vertical design and implementation</span></div>
    <div class="collaboration-tag"><strong>Learning Environments</strong><span>Spaces, programming learning, and experience</span></div>
    <div class="collaboration-tag"><strong>Public Service</strong><span>Journal metrics, courses, and method resources</span></div>
  </div>
</section>

<nav class="collaboration-nav" aria-label="Collaboration page sections">
  <a href="#collaboration">Collaboration</a>
  <a href="#routine">Routine</a>
</nav>

## Collaboration

- I have collaborated extensively with PhD students <a href="https://scholar.google.com/citations?user=BkOytCMAAAAJ&hl=en" target="_blank">Yupeng Lin</a> and <a href="https://frank-haoming.github.io" target="_blank">Haoming Wang</a> from Tsinghua University, as well as Associate Professor <a href="https://scholar.google.com/citations?user=P6iOYgQAAAAJ&hl=en" target="_blank">Teng Yu</a> from Guangdong Polytechnic Normal University. I also maintain close professional ties with Associate Professor Yuhui Jing of Zhejiang University of Technology, <a href="https://scholar.google.com/citations?user=I7Go3k0AAAAJ&hl=en" target="_blank">Yuanyuan Li</a> from Shanghai Normal University, and <a href="https://scholar.google.com/citations?user=l2Lo1lYAAAAJ&hl=en" target="_blank">Xiaojiao Chen</a>, an incoming Master’s student at Beijing Normal University. Furthermore, I collaborate with <a href="https://scholar.google.com/citations?user=JdYNWP0AAAAJ&hl=en" target="_blank">Zihan Xiao</a> from the Pudong Institute of Education Development and Professor <a href="https://scholar.google.com/citations?user=TVXmoNkAAAAJ&hl=en" target="_blank">Rustam Shadiev</a> from Zhejiang University. 
Additionally, <a href="https://scholar.google.com/citations?user=Ra8fbcYAAAAJ&hl=en" target="_blank">Jian Dai</a> has been a vital collaborator of mine; though he has transitioned to a direct PhD program in the School of Management, he has recently published several high-quality papers in AJG 3 journals.

- Our collaboration revolves around <a href="https://mp.weixin.qq.com/s/cO4WHEJo2nlkxlWKzI0Yfw" target="_blank">intelligent technology-enabled programming learning</a> (instructional foundation), the <a href="https://mp.weixin.qq.com/s/-msDQsIz6kHtKwSwHA3k3g" target="_blank">construction of intelligent learning environments</a> (learning spaces), and the design and implementation of AI Agents. Beyond these areas, I am also interested in the transformative value of technology in language learning—a research direction rooted in my own personal experiences. Additionally, I occasionally contribute to pedagogical methodology; I have recently developed <a href="https://link.springer.com/article/10.1007/s10639-023-12178-6" target="_blank">application standards for bibliometric mapping</a> and a user guide for Qualitative Comparative Analysis (QCA), which is currently under external review.

- In summary, my research begins with the construction of intelligent learning environments and the vertical design of AI Agents. It focuses on three core pillars: learner experience, behavioral modeling, and cognitive development, ultimately exploring how cutting-edge AI can empower teaching, learning, management, and assessment.

- Our team is also committed to academic public service. We have compiled a set of key metrics for SSCI journals in Education, which can <a href="https://mp.weixin.qq.com/s/lMOSSRYn50dYkK_doqWrpw" target="_blank">be accessed for free</a>. Additionally, I offer a series of free courses on my <a href="https://space.bilibili.com/481706784?spm_id_from=333.788.upinfo.head.click" target="_blank">Bilibili homepage</a>, covering topics such as Structural Equation Modeling (SEM), Quasi-experimental Design, Systematic Literature Review writing, and Bibliometrics. In the future, I plan to launch a series of methodology courses covering Qualitative Comparative Analysis (QCA) and Artificial Neural Networks (ANN).

- I maintain an open attitude toward collaboration; however, to ensure high-quality outcomes given my current capacity, I apply certain baseline criteria for new partnerships. Nevertheless, I welcome potential collaborators to reach out via email (wcledutech@gmail.com). I aim to make time for a brief discussion with all inquiries to efficiently explore the possibility of working together.


## Routine

- <del>Feb 19                   Arrive in Sydney</del>
- May 29 - Jun 04          Hong Kong (GCCCE @ CUHK)
- Jun 30 - Jul 02          Shanghai Visit
- Jul 02 - Jul 23          Shaoxing for holiday
- Jul 24 - Sept 30         Sydney for my research

</div>
