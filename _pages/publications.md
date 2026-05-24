---
layout: default
permalink: /publications/
title: "Publications"
excerpt: ""
author_profile: true
---

<style>
.publication-page {
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

.publication-page * {
  box-sizing: border-box;
}

.publication-hero {
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

.publication-kicker {
  margin: 0 0 .9rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  font-size: .86rem;
  font-weight: 700;
  color: rgba(255,255,255,.82);
}

.publication-hero h1 {
  margin: 0;
  color: #fff;
  border: 0;
  font-size: clamp(2.1rem, 5vw, 4rem);
  line-height: 1.05;
}

.publication-hero p:last-of-type {
  max-width: 920px;
  margin: 1rem 0 0;
  color: rgba(255,255,255,.9);
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  line-height: 1.55;
}

.publication-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: .75rem;
  margin-top: 1.7rem;
}

.publication-metric {
  min-height: 104px;
  padding: 1rem;
  border: 1px solid rgba(255,255,255,.24);
  border-radius: 8px;
  background: rgba(255,255,255,.12);
  backdrop-filter: blur(8px);
}

.publication-metric strong {
  display: block;
  color: #fff;
  font-size: clamp(1.35rem, 3vw, 1.9rem);
  line-height: 1;
}

.publication-metric span {
  display: block;
  margin-top: .5rem;
  color: rgba(255,255,255,.84);
  font-size: .92rem;
  line-height: 1.35;
}

.publication-page h2 {
  margin: 2.8rem 0 1rem;
  padding-top: 1.15rem;
  border-top: 1px solid var(--line);
  border-bottom: 0;
  color: var(--ink);
  font-size: clamp(1.25rem, 2vw, 1.72rem);
  line-height: 1.2;
}

.publication-page ul {
  display: grid;
  gap: .8rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.publication-page li {
  position: relative;
  padding: .9rem 1rem .95rem 1.1rem;
  border: 1px solid transparent;
  border-radius: 8px;
  background:
    linear-gradient(var(--paper), var(--paper)) padding-box,
    linear-gradient(135deg, var(--teal), rgba(255,255,255,0) 58%, rgba(182,130,27,.55)) border-box;
  box-shadow: 0 12px 30px rgba(23,32,51,.06);
  color: var(--muted);
  font-size: .95rem;
  line-height: 1.55;
}

.publication-page li strong {
  color: var(--ink);
}

.publication-page a {
  color: var(--indigo);
  font-weight: 700;
  text-decoration: none;
}

.publication-page a:hover {
  text-decoration: underline;
}

.publication-group {
  margin: 1rem 0;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 14px 36px rgba(23,32,51,.07);
}

.publication-group:first-of-type {
  margin-top: 2.8rem;
}

.publication-group summary {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .8rem;
  padding: 1rem 2.5rem 1rem 1rem;
  color: var(--ink);
  font-size: clamp(1.18rem, 2vw, 1.62rem);
  font-weight: 800;
  line-height: 1.2;
  list-style: none;
}

.publication-group summary::-webkit-details-marker {
  display: none;
}

.publication-group summary::after {
  content: "+";
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--teal);
  font-size: 1.35rem;
  line-height: 1;
}

.publication-group[open] summary {
  border-bottom: 1px solid var(--line);
}

.publication-group[open] summary::after {
  content: "-";
}

.publication-group ul {
  padding: 1rem;
}

.method-section {
  margin-top: 3rem;
  padding-top: 1.15rem;
  border-top: 1px solid var(--line);
}

.method-section h2 {
  margin-top: 0;
  border-top: 0;
}

.method-lead {
  max-width: 900px;
  margin: .65rem 0 1.2rem;
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.6;
}

.method-group {
  margin: .8rem 0;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 14px 36px rgba(23,32,51,.07);
}

.method-group summary {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .8rem;
  padding: .95rem 2.5rem .95rem 1rem;
  color: var(--ink);
  font-weight: 800;
  list-style: none;
}

.method-group summary::-webkit-details-marker {
  display: none;
}

.method-group summary::after {
  content: "+";
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--teal);
  font-size: 1.35rem;
  line-height: 1;
}

.method-group[open] summary::after {
  content: "-";
}

.method-count {
  flex: 0 0 auto;
  border: 1px solid rgba(23,32,51,.12);
  border-radius: 999px;
  padding: .18rem .52rem;
  color: var(--muted);
  background: var(--soft);
  font-size: .78rem;
  font-weight: 700;
  line-height: 1.4;
}

.method-group ul {
  padding: 0 1rem 1rem;
}

@media (max-width: 900px) {
  .publication-metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .method-count {
    width: 100%;
  }

  .publication-metrics {
    grid-template-columns: 1fr;
  }

  .method-group summary {
    align-items: flex-start;
    flex-direction: column;
  }

  .publication-group summary {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>

<div class="publication-page" markdown="1">

<section class="publication-hero">
  <p class="publication-kicker">Publication Portfolio</p>
  <h1>Publications</h1>
  <p>Selected journal articles and conference papers across AI in education, learning environments, learner modeling, programming education, and educational technology research methods.</p>
  <div class="publication-metrics" aria-label="Publication overview">
    <div class="publication-metric"><strong>56</strong><span>SSCI/SCI papers</span></div>
    <div class="publication-metric"><strong>30</strong><span>First-author and corresponding-author studies</span></div>
    <div class="publication-metric"><strong>15</strong><span>ESI 1% highly cited papers</span></div>
    <div class="publication-metric"><strong>5</strong><span>ESI 0.1% hot papers</span></div>
  </div>
</section>

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

<details class="publication-group" id="corresponding-author-publications" markdown="1">
<summary>Authored Journal Paper - Corresponding Author <span class="method-count">Click to expand</span></summary>

- Chen, X. J., Hu, Z. B., & Wang, C. L.* (2024). Empowering Education Development through AIGC: A Systematic Literature Review. *Education and Information Technologies*, 29, 17485-17537. [https://doi.org/10.1007/s10639-024-12549-7](https://doi.org/10.1007/s10639-024-12549-7) (SSCI Q1; ESI 0.1 % hot paper; ESI 1% highly cited paper🏆)
- Jing, Y. H., Wang, H. M., Chen, X. J., & Wang, C. L.* (2024). What factors will affect the effectiveness of using ChatGPT to solve programming problems? A quasi-experimental study. *Humanities & Social Sciences Communications*, 11, 319. [https://doi.org/10.1057/s41599-024-02751-w](https://doi.org/10.1057/s41599-024-02751-w) (SSCI Q1; AHCI; ESI 0.1 % hot paper🔥 in 2025; ESI 1% highly cited paper🏆)
- Yu, T., Dai, J., Chen, X. J., & Wang, C. L*. (2026). From information evaluation to technology use: Generative AI adoption in Chinese business schools. The International Journal of Management Education, 24(3), 101430. [https://doi.org/10.1016/j.ijme.2026.101430](https://doi.org/10.1016/j.ijme.2026.101430) (SSCI Q1)
- Yu, T., Dai, J., Chen, X. J., & Wang, C. L.* (2026). To use or not to use? Generative AI adoption in Chinese business schools. *The International Journal of Management Education*, 24(1), 101323. [https://doi.org/10.1016/j.ijme.2025.101323](https://doi.org/10.1016/j.ijme.2025.101323) (SSCI Q1)
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
- Wang, J. Y., Wang, H. M., Yang, J. W., & Wang, C. L. (2026). Academic transformation in the era of artificial intelligence: Drivers of university faculty adoption of GenAI based on the UTAUT model. Humanities and Social Sciences Communications, 13. [https://doi.org/10.1057/s41599-026-07606-0](https://doi.org/10.1057/s41599-026-07606-0) (SSCI Q1; AHCI)
- Chen J. Y., Liu Y. D.*, Dai J. & Wang C. L.* (2023). Development and status of moral education research: Visual analysis based on knowledge graph. *Frontiers in Psychology*, 13, 1079955. [https://doi.org/10.3389/fpsyg.2022.1079955](https://doi.org/10.3389/fpsyg.2022.1079955) (SSCI Q1)
- Chen, J., Wang, C. L., & Tang, Y. L.* (2022). Knowledge mapping of volunteer motivation: a bibliometric analysis and cross-cultural comparative study. *Frontiers in Psychology*, 13, 883150. [https://doi.org/10.3389/fpsyg.2022.883150](https://doi.org/10.3389/fpsyg.2022.883150) (SSCI Q1)
- Yu, T., Zhang, Y., Teoh, A. P., Wang, A., & Wang, C. L.* (2023). Factors Influencing University Students’ Behavioral Intention to Use Electric Car-Sharing Services in Guangzhou, China. *SAGE Open*, 13(4), 1-27. [https://doi.org/10.1177/21582440231210551](https://doi.org/10.1177/21582440231210551) (SSCI Q1)
- Yu, T., Teoh, A. P., Bian, Q., & Wang, C. L*. (2025). What drives continuance intention to use electric vehicles: An extension of expectation-confirmation model. *Transportation*. 1-35. [https://doi.org/10.1007/s11116-025-10667-w](https://doi.org/10.1007/s11116-025-10667-w) (SSCI Q2; SCIE Q2)
- Chen, X. J., Hu, Z. B., Li, Y. Y. & Wang, C. L.* (2025). The journey of challenges and triumphs: a systematic literature review of the dynamic evolution of human-centered artificial intelligence in education. *Interactive Learning Environments*, 1-27. [https://doi.org/10.1080/10494820.2025.2472288](https://doi.org/10.1080/10494820.2025.2472288) (SSCI Q1)
- Jing, Y. H., Chen, X. J., Zhu, K. K., Shen, S. S., & Wang, C. L.* (2023). The Implementation Path and Problems Encountered During Emergency Remote Teaching in Vocational Colleges: A Qualitative Study in China. *SAGE Open*, 13(4), 1-16. [https://doi.org/10.1177/21582440231212160](https://doi.org/10.1177/21582440231212160) (SSCI Q1)
- Chen, J., Tang, Y.\*, & Wang, C. L.\* (2025). Motivation and mechanism of university volunteers' participation in major sport events: A grounded theory study on volunteers for the Hangzhou Asian games. *Current Psychology*. [https://doi.org/10.1007/s12144-025-08052-y](https://doi.org/10.1007/s12144-025-08052-y) (SSCI Q1)
- Yu, T., Teoh, A. P., & Wang, C. L. (2026). Integrating explanation and prediction: A PLS-MGA-ANN study of drone food delivery continuance intention. International Journal of Hospitality Management, 137, 104703. [https://doi.org/10.1016/j.ijhm.2026.104703](https://doi.org/10.1016/j.ijhm.2026.104703) (SSCI Q1)

</details>

<details class="publication-group" id="other-author-publications" markdown="1">
<summary>Authored Journal Paper - Other Author <span class="method-count">Click to expand</span></summary>

- Cheng, C., Dai, J., Yan, L. L., & **Wang, C. L.** (2025). Panels of peers are needed to gauge AI’s trustworthiness-Experts are not enough. *Nature*, 647(8090), 592. [https://doi.org/10.1038/d41586-025-03783-1](https://doi.org/10.1038/d41586-025-03783-1) (SCIE Q1)
- Li, Y. Y., **Wang, C. L.** & Gu, X. Q. (2025). Instructional Design Guidelines for Virtual Reality-Based Teacher Training: A Meta-analysis. *Education Technology & Society*, 28(1), 338-358. [https://doi.org/10.30191/ETS.202501_28(1).SP02](https://doi.org/10.30191/ETS.202501_28(1).SP02) (SSCI Q1)
- Jing, Y. H., **Wang, C. L.**, Chen, Z. Y., Shen, S. S., & Shadiev, R. (2024). A Bibliometric Analysis of Studies on Technology-Supported Learning Environments: Hot Topics and Frontier Evolution. *Journal of Computer Assisted Learning*, 40(3), 1185-1200. [https://doi.org/10.1111/jcal.12934](https://doi.org/10.1111/jcal.12934) (SSCI Q1)
- Wang, J. Q., **Wang, C. L.**, Xiao, T., Zhang, X. Y. (2025). Enhancing English Language Learning Through Moral Dilemmas: A Comparative Study of GPT and Human-Written Stories. *Language Teaching Research*, 1-32. [https://doi.org/10.1177/13621688251391412](https://doi.org/10.1177/13621688251391412) (SSCI Q1)
- Peng, T., **Wang, C. L.**, Xu, J., Dai, J. & Yu, T. (2024). Evolution and Current Research Status of Educational Leadership Theory: A Content Analysis-Based Study. *SAGE Open*, 14(3), 1-16. [https://doi.org/10.1177/21582440241285763](https://doi.org/10.1177/21582440241285763) (SSCI Q1)
- Jing, Y. H., **Wang, C. L.**, Chen, Y., Wang, H. M., Yu, T., & Shadiev, R. (2024). Bibliometric mapping techniques in educational technology research: A systematic literature review. *Education and Information Technologies*, 29(8), 9283-9311. [https://doi.org/10.1007/s10639-023-12178-6](https://doi.org/10.1007/s10639-023-12178-6) (SSCI Q1)
- Yu, T., **Wang, C. L.**, Bian, Q., & Teoh, A. P. (2024). Acceptance of or resistance to facial recognition payment: A systematic review. *Journal of Consumer Behaviour*, 23(6), 2933-2951. [https://doi.org/10.1002/cb.2385](https://doi.org/10.1002/cb.2385) (SSCI Q1; AJG 2)
- Xu, J., Luo, Y., **Wang, C. L.**, Wang, M., & Wu, Y. (2026). AI support in self-regulated learning: A decade of technological evolution and meta-analysis. British Journal of Educational Technology, 1-30. [https://doi.org/10.1111/bjet.70058](https://doi.org/10.1111/bjet.70058) (SSCI Q1)
- Jing, Y. H., Dai, J., **Wang, C. L.** & Shadiev, R. (2024). Unleashing the Power of Virtual Learning Environment: Exploring the Impact on Learning Outcomes through a Meta-Analysis. *Interactive Learning Environments*, 33(1), 52-69. [https://doi.org/10.1080/10494820.2024.2335481](https://doi.org/10.1080/10494820.2024.2335481) (SSCI Q1)
- Chen, J., Dai, J., Yu, T., & **Wang, C. L.** (2025). Factors influencing the adoption of generative AI in supply chain management: an empirical study based on task-technology fit and the theory of planned behaviour. *International Journal of Logistics Research and Applications*, 1-22. [https://doi.org/10.1080/13675567.2025.2520550](https://doi.org/10.1080/13675567.2025.2520550) (SSCI Q1)
- Yu, T., Teoh, A. P., **Wang, C. L.**, & Bian, Q. (2024). Convenient or risky? Investigating the behavioral intention to use facial recognition payment in smart hospitals. *Humanities and Social Sciences Communications*, 11(1), 1592. [https://doi.org/10.1057/s41599-024-03910](https://doi.org/10.1057/s41599-024-03910) (SSCI Q1; AHCI)
- Yu, T., Teoh, A.P., Bian, Q., Liao, J. & **Wang, C. L.** (2024b). Can virtual influencers affect purchase intentions in tourism and hospitality e-commerce live streaming? An empirical study in China. *International Journal of Contemporary Hospitality Management*, 1-23. [https://doi.org/10.1108/IJCHM-03-2024-0358](https://doi.org/10.1057/s41599-024-03910) (SSCI Q1; AJG 3)
- Yu, T., Teoh, A.P., Liao, J., & **Wang, C. L.** (2025). How do virtual influencers drive impulsive buying behaviour in e-commerce live streaming: the effects of parasocial relationship and influencer-product fit. *Behaviour & Information Technology*, 1-31. [https://doi.org/10.1080/0144929X.2025.2551579](https://doi.org/10.1080/0144929X.2025.2551579) (SSCI Q2; SCIE Q2; AJG 2)
- Yu, T., Teoh, A.P., Liao, J., & **Wang, C. L.** (2025). Factors influencing behavioral intention to use facial recognition payment in the restaurant industry: a comparative analysis of China and Malaysia. *Journal of Travel & Tourism Marketing*, 42(2), 222-247. [https://doi.org/10.1080/10548408.2025.2455421](https://doi.org/10.1080/10548408.2025.2455421) (SSCI Q1; AJG 2)
- Yu, T., Teoh, A. P., Liao, J., & **Wang, C. L.** (2025). Determinants of switching intention to adopt electric vehicles: A comparative analysis of China and Malaysia. *Technology in Society*, 82, 102949. [https://doi.org/10.1016/j.techsoc.2025.102949](https://doi.org/10.1016/j.techsoc.2025.102949) (SSCI Q1; AJG 2)

</details>

<details class="publication-group" id="conference-publications" markdown="1">
<summary>Conference Papers <span class="method-count">Click to expand</span></summary>


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

<section class="method-section" id="research-methods" markdown="1">
<h2>Publications by Research Method</h2>
<p class="method-lead">The following expandable index reorganizes selected publications by research method. Click a method category to view the related studies.</p>

<details class="method-group" markdown="1">
<summary>Quasi-Experimental and Experimental Studies <span class="method-count">6 studies</span></summary>

- Wang, C. L., Chen, X. J., Li Y. F., Wang, P. J., Wang, H. M. & Li, Y. Y. (2025). MetaClassroom: A New Paradigm and Experience for Programming Education. *Journal of Educational Computing Research*, 63(4), 864-901. [https://doi.org/10.1177/07356331251322470](https://doi.org/10.1177/07356331251322470)
- Wang, H. M., Wang, C. L., Chen, Z., Liu, F., Bao, C. J. & Xu, X. L. (2025). Impact of AI-Agent-supported Collaborative Learning on the Learning Outcomes of University Programming Courses. *Education and Information Technologies*, 30, 17717-17749. [https://doi.org/10.1007/s10639-025-13487-8](https://doi.org/10.1007/s10639-025-13487-8)
- Mo C. Y., Wang C. L., Dai J. & Jin P. Q. (2022). Video Playback Speed Influence on Learning Effect From the Perspective of Personalized Adaptive Learning: A Study Based on Cognitive Load Theory. *Frontiers in Psychology*, 13, 839982. [https://doi.org/10.3389/fpsyg.2022.839982](https://doi.org/10.3389/fpsyg.2022.839982)
- Wang, J. Y., Chen, X. J., Hu, Z. B., Yang, J. W., & Wang, C. L. (2025). Fuel for the mind: Exploring coffee's impact on university learning performance and experience. *British Food Journal*, 127(12), 4767-4788. [https://doi.org/10.1108/BFJ-11-2024-1178](https://doi.org/10.1108/BFJ-11-2024-1178)
- Jing, Y. H., Wang, H. M., Chen, X. J., & Wang, C. L. (2024). What factors will affect the effectiveness of using ChatGPT to solve programming problems? A quasi-experimental study. *Humanities & Social Sciences Communications*, 11, 319. [https://doi.org/10.1057/s41599-024-02751-w](https://doi.org/10.1057/s41599-024-02751-w)
- Wang, J. Q., Wang, C. L., Xiao, T., Zhang, X. Y. (2025). Enhancing English Language Learning Through Moral Dilemmas: A Comparative Study of GPT and Human-Written Stories. *Language Teaching Research*, 1-32. [https://doi.org/10.1177/13621688251391412](https://doi.org/10.1177/13621688251391412)
</details>

<details class="method-group" markdown="1">
<summary>Bibliometric Analysis <span class="method-count">11 studies</span></summary>

- Wang, C. L., Chen, X. J., Yu, T., Liu, Y, D. & Jing, Y. H. (2024) Education Reform and Change Driven by Digital Technology: A Bibliometric Study from a Global Perspective. *Humanities & Social Sciences Communications*, 11, 256. [https://doi.org/10.1057/s41599-024-02717-y](https://doi.org/10.1057/s41599-024-02717-y)
- Wang, C. L., Dai, J., & Xu, L. J. (2022). Big data and data mining in education: a bibliometrics study from 2010 to 2022. In *Proceedings of 2022 7th International Conference on Cloud Computing and Big Data Analytics* (pp. 507-512). [https://doi.org/10.1109/ICCCBDA55098.2022.9778874](https://doi.org/10.1109/ICCCBDA55098.2022.9778874)
- Ma, Y. & Wang, C. L. (2025). Empowering music education with technology: a bibliometric perspective. *Humanities and Social Sciences Communications*, 12, 345. [https://doi.org/10.1057/s41599-025-04616-2](https://doi.org/10.1057/s41599-025-04616-2)
- Shang, X., Liu, Z., Gong, C., He, Z., & Wang, C. L. (2025). From Perception to Trust: The Multidimensional Landscape of Anthropomorphism in Robotics. *International Journal of Human-Computer Interaction*, 1-23. [https://doi.org/10.1080/10447318.2025.2504198](https://doi.org/10.1080/10447318.2025.2504198)
- Shang, X., Liu, Z., Gong, C., Hu, Z., Wu, Y. & Wang, C. L. (2024). Knowledge mapping and evolution of research on older adults' technology acceptance: A bibliometric study from 2013 to 2023. *Humanities and Social Sciences Communications*, 11, 1115. [https://doi.org/10.1057/s41599-024-03658-2](https://doi.org/10.1057/s41599-024-03658-2)
- Wang, J. Y., Li, Y. Y., Chen, X. J., & Wang, C. L. (2025). Before and After: How Did the Pandemic Reshape Virtual Laboratory Research? *SAGE Open*, 15(2), 1-23. [https://doi.org/10.1177/21582440251339961](https://doi.org/10.1177/21582440251339961)
- Chen, J., Wang, C. L., & Tang, Y. L. (2022). Knowledge mapping of volunteer motivation: a bibliometric analysis and cross-cultural comparative study. *Frontiers in Psychology*, 13, 883150. [https://doi.org/10.3389/fpsyg.2022.883150](https://doi.org/10.3389/fpsyg.2022.883150)
- Xu, Y., Mao, D., & Wang, C. L. (2024, September). XR Technologies in vocational education and training research (2000-2024): A Bibliometric Review. In *Proceedings of the 2024 the 16th International Conference on Education Technology and Computers* (pp. 76-83). [https://doi.org/10.1145/3702163.3702174](https://doi.org/10.1145/3702163.3702174)
- Jing, Y. H., Wang, C. L., Chen, Z. Y., Shen, S. S., & Shadiev, R. (2024). A Bibliometric Analysis of Studies on Technology-Supported Learning Environments: Hot Topics and Frontier Evolution. *Journal of Computer Assisted Learning*, 40(3), 1185-1200. [https://doi.org/10.1111/jcal.12934](https://doi.org/10.1111/jcal.12934)
- Liu, Y. D., Jing, Y. H., Li, J., Dai, J., Hu, Z. B., & Wang, C. L. (2025). Application of AI in engineering education: A bibliometric study. *Review of Education*, 13, e70044. [https://doi.org/10.1002/rev3.70044](https://doi.org/10.1002/rev3.70044)
- Wang, H. M., Xiao, Z., Lai, Y., Bao, C., & Wang, C. L. (2025). Knowledge Mapping and Trend Analysis of AI Agents in Education: A Bibliometric Study From 2004-2024. In *Proceedings of the 19th International Conference of the Learning Sciences - ICLS 2025* (pp. 1404-1408). [https://doi.org/10.22318/icls2025.764364](https://doi.org/10.22318/icls2025.764364)
</details>

<details class="method-group" markdown="1">
<summary>Structural Equation Modeling <span class="method-count">20 studies</span></summary>

- Wang, C. L., Dai, J., Zhu K. K., Yu, T., & Gu, X. Q. (2023). Understanding the Continuance Intention of College Students Toward New E-learning Spaces Based on an Integrated Model of the TAM and TTF. *International Journal of Human-Computer Interaction*, 40(24), 8419-8432. [https://doi.org/10.1080/10447318.2023.2291609](https://doi.org/10.1080/10447318.2023.2291609)
- Wang, C. L., Wang, H. M., Li Y. Y., Dai, J., Gu, X. Q., & Yu, T. (2024). Factors Influencing University Students' Behavioral Intention to Use Generative Artificial Intelligence: Integrating the Theory of Planned Behavior and AI Literacy. *International Journal of Human-Computer Interaction*, 41(11), 6649-6671. [https://doi.org/10.1080/10447318.2024.2383033](https://doi.org/10.1080/10447318.2024.2383033)
- Yu, T., Dai, J., Chen, X. J., & Wang, C. L. (2026). From information evaluation to technology use: Generative AI adoption in Chinese business schools. *The International Journal of Management Education*, 24(3), 101430. [https://doi.org/10.1016/j.ijme.2026.101430](https://doi.org/10.1016/j.ijme.2026.101430)
- Yu, T., Dai, J., Chen, X. J., & Wang, C. L. (2026). To use or not to use? Generative AI adoption in Chinese business schools. *The International Journal of Management Education*, 24(1), 101323. [https://doi.org/10.1016/j.ijme.2025.101323](https://doi.org/10.1016/j.ijme.2025.101323)
- Wang, J. Y., Wang, H. M., Yang, J. W., & Wang, C. L. (2026). Academic transformation in the era of artificial intelligence: Drivers of university faculty adoption of GenAI based on the UTAUT model. *Humanities and Social Sciences Communications*, 13, xxxx. [https://doi.org/10.1057/s41599-026-07606-0](https://doi.org/10.1057/s41599-026-07606-0)
- Yu, T., Dai, J., & Wang, C. L. (2023). Adoption of blended learning: Chinese university students' perspectives. *Humanities & Social Sciences Communications*, 10, 390. [https://doi.org/10.1057/s41599-023-01904-7](https://doi.org/10.1057/s41599-023-01904-7)
- Yu, T., Teoh, A. P., & Wang, C. L. (2026). Integrating explanation and prediction: A PLS-MGA-ANN study of drone food delivery continuance intention. *International Journal of Hospitality Management*, 137, 104703. [https://doi.org/10.1016/j.ijhm.2026.104703](https://doi.org/10.1016/j.ijhm.2026.104703)
- Yu, T., Teoh, A. P., Bian, Q., & Wang, C. L. (2025). What drives continuance intention to use electric vehicles: An extension of expectation-confirmation model. *Transportation*, 1-35. [https://doi.org/10.1007/s11116-025-10667-w](https://doi.org/10.1007/s11116-025-10667-w)
- Yu, T., Zhang, Y., Teoh, A. P., Wang, A., & Wang, C. L. (2023). Factors Influencing University Students' Behavioral Intention to Use Electric Car-Sharing Services in Guangzhou, China. *SAGE Open*, 13(4), 1-27. [https://doi.org/10.1177/21582440231210551](https://doi.org/10.1177/21582440231210551)
- Xia, Y. Q., Deng, Y. L., Tao X. Y., Zhang, S. N. & Wang, C. L. (2024). Digital art exhibitions and psychological well-being in Chinese Generation Z: An analysis based on the S-O-R framework. *Humanities & Social Sciences Communications*, 11, 266. [https://doi.org/10.1057/s41599-024-02718-x](https://doi.org/10.1057/s41599-024-02718-x)
- Li, H., Xu, J., Luo, Y., & Wang, C. L. (2024). The role of teachers' direct and emotional mentoring in shaping undergraduates' research aspirations: a social cognitive career theory perspective. *International Journal of Mentoring and Coaching in Education*, 14(2), 123-142. [https://doi.org/10.1108/IJMCE-07-2023-0064](https://doi.org/10.1108/IJMCE-07-2023-0064)
- Yu, T., Teoh, A. P., Wang, C. L., & Bian, Q. (2024). Convenient or risky? Investigating the behavioral intention to use facial recognition payment in smart hospitals. *Humanities and Social Sciences Communications*, 11(1), 1592. [https://doi.org/10.1057/s41599-024-03910-9](https://doi.org/10.1057/s41599-024-03910-9)
- Yu, T., Teoh, A.P., Bian, Q., Liao, J. & Wang, C. L. (2024). Can virtual influencers affect purchase intentions in tourism and hospitality e-commerce live streaming? An empirical study in China. *International Journal of Contemporary Hospitality Management*, 1-23. [https://doi.org/10.1108/IJCHM-03-2024-0358](https://doi.org/10.1108/IJCHM-03-2024-0358)
- Yu, T., Teoh, A. P., Tu, Q., & Wang, C. L. (2026). Quality, norms and privacy in AI chatbot adoption: A multigroup analysis. *International Journal of Contemporary Hospitality Management*, 38(5), 1701-1724. [https://doi.org/10.1108/IJCHM-08-2025-1167](https://doi.org/10.1108/IJCHM-08-2025-1167)
- Yu, T., Teoh, A. P., Liao, J., & Wang, C. L. (2025). Factors influencing behavioral intention to use facial recognition payment in the restaurant industry: a comparative analysis of China and Malaysia. *Journal of Travel & Tourism Marketing*, 42(2), 222-247. [https://doi.org/10.1080/10548408.2025.2455421](https://doi.org/10.1080/10548408.2025.2455421)
- Yu, T., Teoh, A. P., Liao, J., & Wang, C. L. (2025). Determinants of switching intention to adopt electric vehicles: A comparative analysis of China and Malaysia. *Technology in Society*, 82, 102949. [https://doi.org/10.1016/j.techsoc.2025.102949](https://doi.org/10.1016/j.techsoc.2025.102949)
- Yu, T., Teoh, A. P., Bian, Q., Liao, J., & Wang, C. L. (2025). What Drives Purchase Intention in Live Streaming E-Commerce? The Perspectives of Virtual Streamers. *International Journal of Human-Computer Interaction*, 1-20. [https://doi.org/10.1080/10447318.2025.2487721](https://doi.org/10.1080/10447318.2025.2487721)
- Yu, T., Teoh, A. P., Liao, J., & Wang, C. L. (2025). Show Your Palm to Pay: Are Customers Ready for Palm Print Recognition Technology in Retail Stores in China? *International Journal of Human-Computer Interaction*, 1-30. [https://doi.org/10.1080/10447318.2025.2526575](https://doi.org/10.1080/10447318.2025.2526575)
- Yu, T., Teoh, A. P., Liao, J., & Wang, C. L. (2025). How do virtual influencers drive impulsive buying behaviour in e-commerce live streaming: the effects of parasocial relationship and influencer-product fit. *Behaviour & Information Technology*, 1-31. [https://doi.org/10.1080/0144929X.2025.2551579](https://doi.org/10.1080/0144929X.2025.2551579)
- Yu, T., Teoh, A. P., Liao, J., & Wang, C. L. (2026). What drives the continuance intention of service robots in the hospitality industry? An integrated model of motivated consumer innovativeness and extended technology continuance theory. *Journal of Hospitality Marketing & Management*, 1-46. [https://doi.org/10.1080/19368623.2026.2616771](https://doi.org/10.1080/19368623.2026.2616771)
</details>

<details class="method-group" markdown="1">
<summary>Systematic Literature Review <span class="method-count">6 studies</span></summary>

- Chen, X. J., Hu, Z. B., & Wang, C. L. (2024). Empowering Education Development through AIGC: A Systematic Literature Review. *Education and Information Technologies*, 29, 17485-17537. [https://doi.org/10.1007/s10639-024-12549-7](https://doi.org/10.1007/s10639-024-12549-7)
- Chen, X. J., Hu, Z. B., Li, Y. Y. & Wang, C. L. (2025). The journey of challenges and triumphs: a systematic literature review of the dynamic evolution of human-centered artificial intelligence in education. *Interactive Learning Environments*, 33(8), 4906-4931. [https://doi.org/10.1080/10494820.2025.2472288](https://doi.org/10.1080/10494820.2025.2472288)
- Jing, Y. H., Wang, C. L., Chen, Y., Wang, H. M., Yu, T., & Shadiev, R. (2024). Bibliometric mapping techniques in educational technology research: A systematic literature review. *Education and Information Technologies*, 29(8), 9283-9311. [https://doi.org/10.1007/s10639-023-12178-6](https://doi.org/10.1007/s10639-023-12178-6)
- Liu, W. S., Chen, L. J., Zhong, X. T., Liu, W., Chen, X. J., & Wang, C. L. (2025). Thinking outside the box: A systematic review of gamification trends in children's dance. *Research in Dance Education*, 1-30. [https://doi.org/10.1080/14647893.2025.2570912](https://doi.org/10.1080/14647893.2025.2570912)
- Yu, T., Wang, C. L., Bian, Q., & Teoh, A. P. (2024). Acceptance of or resistance to facial recognition payment: A systematic review. *Journal of Consumer Behaviour*, 23(6), 2933-2951. [https://doi.org/10.1002/cb.2385](https://doi.org/10.1002/cb.2385)
- Xiao, Z., Wang, C. L., Lai, Y., Wang, H., & Gu, X. (2025). The Future Landscape of Education: Constructing an Analytical and Application Framework for Generative Artificial Intelligence in Higher Education. In *Proceedings of the 19th International Conference of the Learning Sciences - ICLS 2025* (pp. 1202-1206). [https://doi.org/10.22318/icls2025.986726](https://doi.org/10.22318/icls2025.986726)
</details>

<details class="method-group" markdown="1">
<summary>Meta-Analysis <span class="method-count">5 studies</span></summary>

- Dai, J., Zhang, X., & Wang, C. L. (2024). A meta-analysis of learners' continuance intention toward online education platforms. *Education and Information Technologies*, 29, 21833-21868. [https://doi.org/10.1007/s10639-024-12654-7](https://doi.org/10.1007/s10639-024-12654-7)
- Liu, Y. C., Xu, G. R., Yuan, S., Zhou, C., & Wang, C. L. (2024). Assessment as learning: Evidence based on meta-analysis and quantitative ethnography research. *Studies in Educational Evaluation*, 83, 101423. [https://doi.org/10.1016/j.stueduc.2024.101423](https://doi.org/10.1016/j.stueduc.2024.101423)
- Li, Y. Y., Wang, C. L. & Gu, X. Q. (2025). Instructional Design Guidelines for Virtual Reality-Based Teacher Training: A Meta-analysis. *Educational Technology & Society*, 28(1), 338-358. [https://doi.org/10.30191/ETS.202501_28(1).SP02](https://doi.org/10.30191/ETS.202501_28(1).SP02)
- Xu, J., Luo, Y., Wang, C., Wang, M., & Wu, Y. (2026). AI support in self-regulated learning: A decade of technological evolution and meta-analysis. *British Journal of Educational Technology*, 1-30. [https://doi.org/10.1111/bjet.70058](https://doi.org/10.1111/bjet.70058)
- Jing, Y. H., Dai, J., Wang, C. L. & Shadiev, R. (2024). Unleashing the Power of Virtual Learning Environment: Exploring the Impact on Learning Outcomes through a Meta-Analysis. *Interactive Learning Environments*, 33(1), 52-69. [https://doi.org/10.1080/10494820.2024.2335481](https://doi.org/10.1080/10494820.2024.2335481)
</details>

<details class="method-group" markdown="1">
<summary>Meta-Ethnography and Other Ethnographic Approaches (e.g., ENA) <span class="method-count">2 studies</span></summary>

- Wang, C. L., Chen, Y. F., Hu, Z. B., Li, Y. Y., & Gu, X. Q. (2025). The journey of challenges and victories: Exploring the transformation action framework in the GenAI era from multifaceted policies. *Educational Technology Research and Development*, 73, 2951-2993. [https://doi.org/10.1007/s11423-025-10535-5](https://doi.org/10.1007/s11423-025-10535-5)
- Liu, Y. C., Xu, G. R., Yuan, S., Zhou, C., & Wang, C. L. (2024). Assessment as learning: Evidence based on meta-analysis and quantitative ethnography research. *Studies in Educational Evaluation*, 83, 101423. [https://doi.org/10.1016/j.stueduc.2024.101423](https://doi.org/10.1016/j.stueduc.2024.101423)
</details>

<details class="method-group" markdown="1">
<summary>Content Analysis <span class="method-count">2 studies</span></summary>

- Jing, Y. H., Chen, X. J., Zhu, K. K., Shen, S. S., & Wang, C. L. (2023). The Implementation Path and Problems Encountered During Emergency Remote Teaching in Vocational Colleges: A Qualitative Study in China. *SAGE Open*, 13(4), 1-16. [https://doi.org/10.1177/21582440231212160](https://doi.org/10.1177/21582440231212160)
- Peng, T., Wang, C. L., Xu, J., Dai, J. & Yu, T. (2024). Evolution and Current Research Status of Educational Leadership Theory: A Content Analysis-Based Study. *SAGE Open*, 14(3), 1-16. [https://doi.org/10.1177/21582440241285763](https://doi.org/10.1177/21582440241285763)
</details>

<details class="method-group" markdown="1">
<summary>Grounded Theory <span class="method-count">5 studies</span></summary>

- Wang, C. L., Chen, X. J., Hu Z. B., Jin, S. & Gu, X. Q. (2025). Deconstructing University Learners' Adoption Intention towards AIGC Technology: A Mixed-Methods Study Using ChatGPT as an Example. *Journal of Computer Assisted Learning*, 41, e13117. [https://doi.org/10.1111/jcal.13117](https://doi.org/10.1111/jcal.13117)
- Yu, T., Dai, J., Chen, X. J. & Wang, C. L. (2024). Factors Influencing Continuance Intention in Blended Learning among Business School students in China: Based on Grounded Theory and FsQCA. *Interactive Learning Environments*, 33(2), 1339-1366. [https://doi.org/10.1080/10494820.2024.2370477](https://doi.org/10.1080/10494820.2024.2370477)
- Chen, J., Tang, Y., & Wang, C. L. (2025). Motivation and mechanism of university volunteers' participation in major sport events: A grounded theory study on volunteers for the Hangzhou Asian games. *Current Psychology*, 44, 13339-13366. [https://doi.org/10.1007/s12144-025-08052-y](https://doi.org/10.1007/s12144-025-08052-y)
- Chen, X. J., Yu, T., Jian, D., Jing, Y. H. & Wang, C. L. (2025). Unveiling Learners' Intentions toward Influencer-led Education: An Integration of Qualitative and Quantitative Analysis. *Interactive Learning Environments*, 33(5), 3469-3487. [https://doi.org/10.1080/10494820.2024.2444533](https://doi.org/10.1080/10494820.2024.2444533)
- Chen, Y. F., Wang, H. M., Chen, X. J., Wu, Z., & Wang, C. L. (2024). Constructing an Action Model for Educational Systems in Response to Pandemics: A Textual Grounded Analysis. In *Proceedings of the 18th International Conference of the Learning Sciences - ICLS 2024* (pp. 979-982). [https://doi.org/10.22318/icls2024.604132](https://doi.org/10.22318/icls2024.604132)
</details>

<details class="method-group" markdown="1">
<summary>fsQCA <span class="method-count">4 studies</span></summary>

- Wang, C. L., Chen, X. J., Hu Z. B., Jin, S. & Gu, X. Q. (2025). Deconstructing University Learners' Adoption Intention towards AIGC Technology: A Mixed-Methods Study Using ChatGPT as an Example. *Journal of Computer Assisted Learning*, 41, e13117. [https://doi.org/10.1111/jcal.13117](https://doi.org/10.1111/jcal.13117)
- Wang, C. L., Chen, X. J. & Yu, T. (2025). What drives learners' behavioral intention to share knowledge on social media: Evidence from a fuzzy-set qualitative comparative analysis (FsQCA). *Current Psychology*, 44(10), 8766-8780. [https://doi.org/10.1007/s12144-025-07813-z](https://doi.org/10.1007/s12144-025-07813-z)
- Yu, T., Dai, J., Chen, X. J. & Wang, C. L. (2024). Factors Influencing Continuance Intention in Blended Learning among Business School students in China: Based on Grounded Theory and FsQCA. *Interactive Learning Environments*, 33(2), 1339-1366. [https://doi.org/10.1080/10494820.2024.2370477](https://doi.org/10.1080/10494820.2024.2370477)
- Chen, X. J., Yu, T., Jian, D., Jing, Y. H. & Wang, C. L. (2025). Unveiling Learners' Intentions toward Influencer-led Education: An Integration of Qualitative and Quantitative Analysis. *Interactive Learning Environments*, 33(5), 3469-3487. [https://doi.org/10.1080/10494820.2024.2444533](https://doi.org/10.1080/10494820.2024.2444533)
</details>

<details class="method-group" markdown="1">
<summary>Artificial Intelligence, Human-Computer Interaction, and Algorithms <span class="method-count">8 studies</span></summary>

- Wang, C. L., Wang, H. M., Hu, Z. H., & Chen, X. J. (2024). Annotated Emotional Image Datasets of Chinese University Students in Real Classrooms for Deep Learning. *Data in Brief*, 57, 111147. [https://doi.org/10.1016/j.dib.2024.111147](https://doi.org/10.1016/j.dib.2024.111147)
- Wang, C. L., Wang, H. M., Lai, Y. T., Xiao, Z. H., & Xu, X. L. (2025). Prediction of online mathematics test efficiency based on stacked integrated models: A case study of NAEP data. In *Artificial intelligence in education: WideAIED (AIED 2025)* (pp. 221-229). Springer. [https://doi.org/10.1007/978-3-031-99261-2_20](https://doi.org/10.1007/978-3-031-99261-2_20)
- Wang, C. L., Dai, J., Chen, Y., Zhang, X., & Xu, L. J. (2023). A Learning Analytics Model Based on Expression Recognition and Affective Computing: Review of Techniques and Survey of Acceptance. In *Proceedings of the 2022 International Conference on Educational Innovation and Multimedia Technology* (pp. 169-178). [https://doi.org/10.2991/978-94-6463-012-1_19](https://doi.org/10.2991/978-94-6463-012-1_19)
- Cheng, C., Dai, J., Yan, L. L., & Wang, C. L. (2025). Panels of peers are needed to gauge AI's trustworthiness-Experts are not enough. *Nature*, 647(8090), 592. [https://doi.org/10.1038/d41586-025-03783-1](https://doi.org/10.1038/d41586-025-03783-1)
- Jin, S., Wang, H. M., Gao, Z. Q., Yang, Y. B., Bao, C. J., Wang, C. L. (2025). Evolution in simulation: AI-agent school with dual memory for high-fidelity educational dynamics. In *Findings of the Association for Computational Linguistics: EMNLP 2025* (pp. 5843-5857). [https://doi.org/10.18653/v1/2025.findings-emnlp.312](https://doi.org/10.18653/v1/2025.findings-emnlp.312)
- Wang, H. M., Wang, C. L., Xu, H. X., Bao, C. J., & Xu, X. L. (2026). Enhancing real-time facial emotion recognition in classrooms via Attention-ResNet optimization. *The Visual Computer*, 42(1), 46. [https://doi.org/10.1007/s00371-025-04265-1](https://doi.org/10.1007/s00371-025-04265-1)
- Yang, Y., Gao, Z. Q., Nie, K., Wang, H. M., Wang, C. L., & Zhao, K. (2026). ModuSwarm: A customizable and scalable framework for human-swarm interaction. In *ICHEC25: Proceedings of the 2025 International Conference on Human-Engaged Computing* (Article 61, pp. 1-6). [https://doi.org/10.1145/3786995.3787000](https://doi.org/10.1145/3786995.3787000)
- Chen, X. J., Hu, Z. B., Jing, Y. H. & Wang, C. L. (2024). The development and alleviation of humanistic artificial intelligence in the digital age education: A content analysis research. In *Proceedings of the 8th International Conference on Advances in Artificial Intelligence*. ACM. [https://doi.org/10.1145/3704137.3704189](https://doi.org/10.1145/3704137.3704189)
</details>
</section>

</div>
