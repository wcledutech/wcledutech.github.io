# Paper author roles

Checked on 2026-09-26 for the 13 paper detail pages. Display convention: `#` means co-first author, `*` means corresponding author, and `#*` means both. The symbols describe roles, not the literal symbols used by a publisher.

Role arrays in `_data/research_highlights.json` use exact names from `authors`. `_layouts/publication.html` adds superscripts only to the visible byline. Plain author names, author order, citation text, BibTeX/RIS downloads and citation metadata stay unchanged. An absent co-first array means no co-first designation is recorded in the evidence used here; do not infer one from author order or CRediT contributions.

## Evidence

1. **MetaClassroom** (`10.1177/07356331251322470`): corresponding author **Yuanyuan Li**. [Sage author information](https://journals.sagepub.com/doi/10.1177/07356331251322470); the publisher PDF uploaded by Chengliang Wang names her under Corresponding Author on its first page. [Author-uploaded paper](https://www.researchgate.net/publication/389368903_MetaClassroom_A_New_Paradigm_and_Experience_for_Programming_Education).
2. **GenAI policy framework** (`10.1007/s11423-025-10535-5`): corresponding author **Xiaoqing Gu**. [Springer author information](https://link.springer.com/article/10.1007/s11423-025-10535-5#author-information).
3. **AIGC adoption and AI literacy** (`10.1111/jcal.13117`): corresponding author **Xiaojiao Chen**. [Wiley author information](https://onlinelibrary.wiley.com/doi/10.1111/jcal.13117).
4. **AI support in self-regulated learning** (`10.1111/bjet.70058`): co-first authors **Jun Xu and Yuying Luo**; corresponding author **Yonghe Wu**. The publisher explicitly states shared first authorship. [Wiley author information and author note](https://bera-journals.onlinelibrary.wiley.com/doi/abs/10.1111/bjet.70058).
5. **ChatGPT programming effectiveness** (`10.1057/s41599-024-02751-w`): corresponding author **Chengliang Wang**. [Nature author information](https://www.nature.com/articles/s41599-024-02751-w#author-information), checked in Edge.
6. **AI-agent-supported collaborative learning** (`10.1007/s10639-025-13487-8`): co-first authors **Haoming Wang and Chengliang Wang**; corresponding author **Xianlong Xu**. [Springer author note and correspondence](https://link.springer.com/article/10.1007/s10639-025-13487-8#author-information).
7. **Human-AI Collaborative Learning Ecosystem** (`10.1080/10447318.2026.2692021`): co-first authors **Zihan Xiao and Haoming Wang**; corresponding authors **Haoming Wang and Chengliang Wang**. The publisher PDF's article-opening page marks the first two authors for equal contributions and names both contacts. [Author-uploaded publisher PDF](https://www.researchgate.net/publication/408495867_Human-AI_Collaborative_Learning_Ecosystem_Effects_of_Multi-Agent-Based_Programming_Learning_on_Learning_Outcomes_Computational_Thinking_and_Behavioral_Patterns_in_Higher_Education).
8. **AIGC systematic review** (`10.1007/s10639-024-12549-7`): corresponding author **Chengliang Wang**. [Springer author information](https://link.springer.com/article/10.1007/s10639-024-12549-7#author-information).
9. **GenAI-agents systematic review** (`10.1080/10494820.2026.2672562`): corresponding author **Chengliang Wang**. [Publisher PDF, first-page CONTACT statement](https://www.tandfonline.com/doi/pdf/10.1080/10494820.2026.2672562).
10. **AI-Agent School** (`10.18653/v1/2025.findings-emnlp.312`): co-first authors **Sheng Jin and Haoming Wang**; corresponding authors **Haoming Wang and Chengliang Wang**. [ACL publisher PDF, page 5843](https://aclanthology.org/2025.findings-emnlp.312.pdf). The PDF uses `*` for equal contribution and `#` for correspondence; the site deliberately translates these into its own convention rather than copying the symbols verbatim.
11. **Classroom emotion image dataset** (`10.1016/j.dib.2024.111147`): corresponding author **Haoming Wang**. [Publisher article in PMC, author footnote](https://pmc.ncbi.nlm.nih.gov/articles/PMC11648130/).
12. **To use or not to use?** (`10.1016/j.ijme.2025.101323`): corresponding author **Chengliang Wang**, retained from the existing structured metadata and the author's explicit confirmation when adding the two IJME studies. No additional co-first designation was supplied. [Publisher record](https://www.sciencedirect.com/science/article/pii/S1472811725001934).
13. **From information evaluation to technology use** (`10.1016/j.ijme.2026.101430`): corresponding author **Chengliang Wang**, retained from the existing structured metadata and the author's explicit confirmation when adding the two IJME studies. No additional co-first designation was supplied. [Publisher record](https://www.sciencedirect.com/science/article/pii/S1472811726000741).

The two IJME publisher pages could not be freshly inspected because ScienceDirect presented access challenges. Their corresponding-author roles use the author's confirmation, not an inferred publisher verification.

## Regression checks

Run `python -B -m unittest discover -s tests -v`. These checks cover exact role assignments, valid and unique author names, byline order, multiple co-first authors and clean citation strings. Rendered-page QA must additionally verify the superscripts and legends on every paper route, unchanged citation downloads, and author wrapping on mobile and desktop.
