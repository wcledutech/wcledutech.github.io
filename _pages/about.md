---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<style>
.about-page {
  --ink: #172033;
  --muted: #5f6b7a;
  --line: rgba(23, 32, 51, .13);
  --soft: #f6f8fb;
  --paper: #ffffff;
  --teal: #0f766e;
  --coral: #b55a3c;
  --gold: #b6821b;
  --indigo: #344a7a;
  --plum: #6b3f68;
  --green: #4f6f52;
  color: var(--ink);
  font-family: "Times New Roman", Times, serif;
}

.about-page * {
  box-sizing: border-box;
}

.about-nav {
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

.about-nav a {
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

.about-nav a:hover {
  color: #fff;
  background: var(--ink);
  transform: translateY(-1px);
}

.about-section {
  margin: 2.8rem 0;
  padding-top: 1.15rem;
  border-top: 1px solid var(--line);
}

.about-section h2,
.about-card h2,
.about-card h3 {
  margin: 0;
  border: 0;
}

.about-section h2 {
  font-size: clamp(1.28rem, 2vw, 1.72rem);
  line-height: 1.2;
}

.section-lead {
  max-width: 900px;
  margin: .65rem 0 1.2rem;
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.62;
}

.profile-grid,
.card-grid,
.timeline-grid {
  display: grid;
  gap: .95rem;
}

.profile-grid {
  grid-template-columns: 1.05fr .95fr;
}

.card-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.timeline-grid {
  grid-template-columns: 1fr;
}

.about-card {
  border: 1px solid transparent;
  border-radius: 8px;
  background:
    linear-gradient(var(--paper), var(--paper)) padding-box,
    linear-gradient(135deg, var(--accent), rgba(255,255,255,0) 58%, rgba(182,130,27,.55)) border-box;
  box-shadow: 0 16px 42px rgba(23,32,51,.08);
  padding: 1.1rem 1.15rem;
}

.about-card h3 {
  font-size: 1.08rem;
  line-height: 1.35;
}

.about-card p,
.about-card li {
  color: var(--muted);
  font-size: .95rem;
  line-height: 1.55;
}

.about-card p:last-child,
.about-card ul:last-child {
  margin-bottom: 0;
}

.about-card ul {
  margin: .75rem 0 0;
  padding-left: 1.1rem;
}

.tag-row {
  display: flex;
  flex-wrap: wrap;
  gap: .45rem;
  margin-top: .85rem;
}

.tag-row span {
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

.scholar-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: .85rem;
}

.scholar-metric {
  min-height: 142px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 1rem 1.05rem;
  background:
    linear-gradient(135deg, rgba(23,32,51,.94), rgba(15,118,110,.74) 48%, rgba(181,90,60,.72)) padding-box,
    linear-gradient(135deg, rgba(255,255,255,.42), rgba(255,255,255,.06)) border-box;
  box-shadow: 0 18px 42px rgba(23,32,51,.12);
  color: #fff;
}

.scholar-metric strong {
  display: block;
  font-size: clamp(2.1rem, 4vw, 3rem);
  line-height: .95;
  letter-spacing: 0;
}

.scholar-metric div > span {
  display: block;
  margin-top: .55rem;
  font-size: .98rem;
  font-weight: 700;
  line-height: 1.25;
}

.scholar-metric small {
  display: block;
  margin-top: .45rem;
  color: rgba(255,255,255,.82);
  font-size: .76rem;
  line-height: 1.35;
}

.scholar-meta {
  margin: .8rem 0 0;
  color: var(--muted);
  font-size: .86rem;
  line-height: 1.45;
}

.award-list,
.funding-list,
.service-list {
  display: grid;
  gap: .75rem;
}

.compact-item {
  position: relative;
  padding: .85rem .9rem .85rem 1.05rem;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 12px 30px rgba(23,32,51,.05);
}

.compact-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: .85rem;
  bottom: .85rem;
  width: 4px;
  border-radius: 4px;
  background: var(--accent);
}

.compact-item strong {
  color: var(--ink);
}

.compact-item p {
  margin: .25rem 0 0;
  color: var(--muted);
  font-size: .93rem;
  line-height: 1.48;
}

@media (max-width: 900px) {
  .profile-grid,
  .card-grid,
  .scholar-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .profile-grid,
  .card-grid,
  .scholar-grid {
    grid-template-columns: 1fr;
  }

  .about-nav {
    position: relative;
    top: auto;
  }

  .about-nav a {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .about-nav a {
    animation: none;
    transition: none;
  }
}
</style>

<div class="about-page">
  <nav class="about-nav" aria-label="About page sections">
    <a href="#scholar-metrics">Scholar Metrics</a>
    <a href="#profile">Profile</a>
    <a href="#honors">Honors</a>
    <a href="#funding">Funding</a>
    <a href="#education">Education</a>
    <a href="#service">Academic Service</a>
    <a href="#internships">Internships</a>
  </nav>

  <section class="about-section" id="scholar-metrics">
    <h2>Scholar Metrics</h2>
    <p class="section-lead">
      Google Scholar metrics are refreshed automatically when the scheduled site data workflow runs. The current values below are seeded from the latest visible profile snapshot.
    </p>
    <div class="scholar-grid" aria-label="Google Scholar and ESI metrics">
      <article class="scholar-metric">
        <div>
          <strong id="gs-citations">2910</strong>
          <span>Total citations</span>
        </div>
        <small>Since 2021: <span id="gs-citations-5y">2908</span></small>
      </article>
      <article class="scholar-metric">
        <div>
          <strong id="gs-hindex">23</strong>
          <span>h-index</span>
        </div>
        <small>Since 2021: <span id="gs-hindex-5y">23</span></small>
      </article>
      <article class="scholar-metric">
        <div>
          <strong id="gs-i10index">44</strong>
          <span>i10-index</span>
        </div>
        <small>Since 2021: <span id="gs-i10index-5y">44</span></small>
      </article>
      <article class="scholar-metric">
        <div>
          <strong>15</strong>
          <span>ESI 1% highly cited papers</span>
        </div>
        <small>Profile metric</small>
      </article>
      <article class="scholar-metric">
        <div>
          <strong>5</strong>
          <span>ESI 0.1% hot papers</span>
        </div>
        <small>Profile metric</small>
      </article>
    </div>
    <p class="scholar-meta" id="gs-updated">Google Scholar metrics update automatically when scheduled data is available.</p>
  </section>

  <section class="about-section" id="profile">
    <h2>Profile</h2>
    <p class="section-lead">
      My work connects educational technology, artificial intelligence, learning environments, programming education,
      and learner behavior modeling.
    </p>
    <div class="profile-grid">
      <article class="about-card" style="--accent: var(--teal);">
        <h3>Academic Background</h3>
        <p>
          Chengliang Wang is pursuing a PhD under the supervision of
          <a href="https://scholar.google.com/citations?user=w911YWwAAAAJ&amp;hl=en" target="_blank" rel="noopener">Prof. Herb Marsh</a>
          and <a href="https://scholar.google.com/citations?user=rixoumgAAAAJ&amp;hl=en" target="_blank" rel="noopener">Prof. Jiesi Guo</a>.
          He earned a Master's degree in Educational Technology from East China Normal University and graduated early under the supervision of
          <a href="https://scholar.google.com/citations?user=231rZmwAAAAJ&amp;hl=en&amp;oi=ao" target="_blank" rel="noopener">Prof. Gu Xiaoqing</a>.
        </p>
        <p>
          As a master's student, he received the 2024 ECNU President's Scholarship, the highest academic honor at the university,
          becoming the first master's student in the history of the Faculty of Education to receive this distinction.
        </p>
      </article>

      <article class="about-card" style="--accent: var(--plum);">
        <h3>Research Focus</h3>
        <p>
          His research interests include technology-supported programming instruction, digital learning environment construction,
          AI literacy education, educational technology philosophy, AI in education, and learner behavior modeling.
        </p>
        <div class="tag-row">
          <span>AI in Education</span><span>Programming Education</span><span>Learning Environments</span>
          <span>Learner Modeling</span><span>Educational Technology</span>
        </div>
      </article>
    </div>
  </section>

  <section class="about-section" id="honors">
    <h2>Honors, Awards, and Scholarships</h2>
    <p class="section-lead">Selected awards and scholarships across undergraduate, master's, and doctoral stages.</p>
    <div class="award-list" style="--accent: var(--gold);">
      <div class="compact-item"><strong>2026-2028 | ACU Vice Chancellor's PhD Excellence Scholarship</strong><p>Research Training Program (RTP) Scholarships, totaling approximately 1,033,000 RMB over 3 years.</p></div>
      <div class="compact-item"><strong>2024-2025 | China National Scholarship for Postgraduate Students</strong><p>20,000 RMB.</p></div>
      <div class="compact-item"><strong>2024 | East China Normal University President's Scholarship</strong><p>The highest academic honor at ECNU, 20,000 RMB.</p></div>
      <div class="compact-item"><strong>2023-2024 | China National Scholarship for Postgraduate Students</strong><p>20,000 RMB.</p></div>
      <div class="compact-item"><strong>2023 | Outstanding Graduate of Zhejiang Province</strong><p>Provincial-level graduation honor.</p></div>
      <div class="compact-item"><strong>2023 | Outstanding Graduation Thesis Award</strong><p>Zhejiang University of Technology.</p></div>
      <div class="compact-item"><strong>2022 | Best Presentation of Session 5</strong><p>The 7th International Conference on Cloud Computing and Big Data Analytics.</p></div>
      <div class="compact-item"><strong>2021 | First Prize in the 7th Jianxing Undergraduate Forum</strong><p>The only First Prize awarded in the Humanities and Social Sciences track, 1,500 RMB.</p></div>
      <div class="compact-item"><strong>2020-2021 and 2019-2020 | Zhejiang Provincial Government Scholarship</strong><p>6,000 RMB each year.</p></div>
    </div>
  </section>

  <section class="about-section" id="funding">
    <h2>Funding</h2>
    <p class="section-lead">Research projects supported by university, provincial, and national undergraduate innovation programs.</p>
    <div class="funding-list" style="--accent: var(--teal);">
      <div class="compact-item"><strong>2023-2024 | ECNU Faculty/Division Project</strong><p><em>Macro Trends, Normative Logic, and Practical Models of AIGC-Driven Educational Transformation</em> (1,000 RMB).</p></div>
      <div class="compact-item"><strong>2022-2023 | National Undergraduate Innovation and Entrepreneurship Training Program</strong><p><em>Constructing Learner Digital Profiles from a Personalized Adaptive Learning Perspective</em>, also funded by Zhejiang Province Xinmiao Talent Program (20,000 RMB).</p></div>
      <div class="compact-item"><strong>2022-2023 | National Undergraduate Innovation and Entrepreneurship Training Program</strong><p><em>An Emotion-Computing-Based System for Analyzing and Intervening in College Students' Classroom Learning States</em> (10,000 RMB).</p></div>
      <div class="compact-item"><strong>2022-2023 | Provincial Undergraduate Innovation and Entrepreneurship Training Program</strong><p><em>Analyzing the Impact of Video Attributes on Learners' Performance and Learning Experience</em> (5,000 RMB).</p></div>
      <div class="compact-item"><strong>2021-2022 | University-Level Xin'an Yangfan Program Project</strong><p><em>A Study on Hangzhou Asian Games Volunteers' Participation Motivation and Willingness</em> (3,000 RMB).</p></div>
      <div class="compact-item"><strong>2020-2021 | National Undergraduate Innovation and Entrepreneurship Training Program</strong><p><em>College Students' Perceived Privacy Risks and Self-Disclosure Behaviors in Mobile Social Networking Apps</em> (10,000 RMB).</p></div>
    </div>
  </section>

  <section class="about-section" id="education">
    <h2>Education</h2>
    <p class="section-lead">A learning pathway from educational technology foundations to project-led doctoral research.</p>
    <div class="timeline-grid" style="--accent: var(--indigo);">
      <article class="about-card" style="--accent: var(--indigo);">
        <h3>2026-present | Australian Catholic University, Institute for Positive Psychology and Education</h3>
        <p>
          Sydney, Australia. A project-led doctoral program focused entirely on independent research rather than
          traditional taught modules, with research training centered on educational psychology, positive education,
          learning analytics, and large-scale project-based doctoral inquiry.
        </p>
      </article>
      <article class="about-card" style="--accent: var(--indigo);">
        <h3>2023-2025 | East China Normal University, Faculty of Education</h3>
        <p>
          Shanghai, China. Master's degree in Educational Technology. Graduated early with outstanding academic
          performance under the supervision of
          <a href="https://scholar.google.com/citations?user=231rZmwAAAAJ&amp;hl=en&amp;oi=ao" target="_blank" rel="noopener">Prof. Gu Xiaoqing</a>.
        </p>
        <ul>
          <li>Theory and Practice of Educational Technology (92).</li>
          <li>Research Methods (90).</li>
        </ul>
        <div class="tag-row"><span>Early graduation</span><span>Educational Technology</span><span>ECNU Faculty of Education</span></div>
      </article>
      <article class="about-card" style="--accent: var(--indigo);">
        <h3>2019-2023 | Zhejiang University of Technology, College of Education</h3>
        <p>
          Hangzhou, Zhejiang Province, China. Undergraduate study in the College of Education, with strong coursework
          performance across artificial intelligence, learning systems, educational data, web development, big data,
          and teacher education.
        </p>
        <ul>
          <li>Linear Algebra (98, highest score in the major).</li>
          <li>Fundamentals of Artificial Intelligence (100, highest score in the major).</li>
          <li>Web Front-End Development Technology (95, highest score in the major) and Educational Web Application Development (95, highest score in the major).</li>
          <li>Intelligent Learning Systems Designing and Developing (95, highest score in the major).</li>
          <li>Theory of Computer Networks (95) and The Forefront of Educational Information Technology (95, highest score in the major).</li>
          <li>Introduction of Big Data (95), Experiment of Big Data in Education (97), and Educational Data Statistics and Evaluation (97, highest score in the major).</li>
          <li>Oral Presentation Skill of Teacher (99, highest score in the major), Class Work Skill Training (97), Teachers Skills Training (95), Pedagogy of ICT in Primary and Secondary School (95), and Educational Management (94, highest score in the major).</li>
        </ul>
      </article>
    </div>
  </section>

  <section class="about-section" id="service">
    <h2>Editorial Membership and Academic Service</h2>
    <p class="section-lead">Academic service across editorial roles, program committees, and journal reviewing.</p>
    <div class="card-grid">
      <article class="about-card" style="--accent: var(--coral);">
        <h3>Editorial Roles</h3>
        <ul>
          <li><strong>Handling Editor</strong>, <em>SAGE Open</em> (SSCI Q1), May 2024-present.</li>
          <li><strong>Editorial Advisory Board Member</strong>, <em>PLOS One</em> (SCI Q1), April 2024-present.</li>
        </ul>
      </article>
      <article class="about-card" style="--accent: var(--coral);">
        <h3>Program Committee</h3>
        <ul>
          <li>The 27th International Conference on Artificial Intelligence in Education (AIED 2026), Seoul, South Korea.</li>
          <li>The 33rd International Conference on Computers in Education (ICCE 2026), New Zealand.</li>
        </ul>
      </article>
      <article class="about-card" style="--accent: var(--coral);">
        <h3>Selected Reviewing</h3>
        <p>
          Reviewer for <em>Educational Psychology Review</em>, <em>Computers &amp; Education</em>, <em>Technology in Society</em>,
          <em>Journal of Innovation and Knowledge</em>, <em>International Multilingual Research Journal</em>,
          <em>Journal of Educational Computing Research</em>, <em>Journal of Computer Assisted Learning</em>,
          <em>Research Papers in Education</em>, <em>International Journal of Human-Computer Interaction</em>,
          <em>European Journal of Education</em>, <em>Interactive Learning Environments</em>,
          <em>Education and Information Technologies</em>, <em>Asia Pacific Education Review</em>,
          <em>Educational Technology Research and Development</em>, <em>International Journal of Educational Research</em>,
          and <em>Technology, Pedagogy and Education</em>.
        </p>
      </article>
      <article class="about-card" style="--accent: var(--coral);">
        <h3>Service Profile</h3>
        <p>Academic service is concentrated in educational technology, AI in education, learning environments, HCI, and education research methods.</p>
        <div class="tag-row"><span>Editorial work</span><span>Program committees</span><span>Journal reviewing</span></div>
      </article>
    </div>
  </section>

  <section class="about-section" id="internships">
    <h2>Internships</h2>
    <div class="service-list" style="--accent: var(--green);">
      <div class="compact-item"><strong>2025.7 | Educational Technology Pedagogy Workshop Summer School</strong><p>Peking University.</p></div>
      <div class="compact-item"><strong>2022.8-2022.11 | High School Information Technology Teacher Intern</strong><p>Jishan High School in Shaoxing.</p></div>
    </div>
  </section>
</div>
