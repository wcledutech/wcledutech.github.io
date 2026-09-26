# Publication index annotations

Checked 26-27 September 2026. Scope: `/publication-index/`, 82 existing records.
Bibliographic titles, author order, years, venues, DOIs and citations are unchanged.
Annotations live in separate fields on each record, never inside names or titles.

## Sources and precedence

- `publication-index-annotation-sources.json` records the matched Scholar URL,
  observed byline and applied annotations for each DOI. The Scholar profile had
  86 records: 18 trophy titles and 10 titles with dated fire markers.
- Existing verified roles for the 13 detailed paper pages are reused by DOI.
  See [paper-author-roles.md](paper-author-roles.md) for the supporting sources.
- Co-first authors use `#`; corresponding authors use `*`. A person with both
  roles gets `#*`. Author position alone never determines a role.
- Author updates in this task take precedence over the Scholar snapshot:
  BJET `10.1111/bjet.70058` is highly cited; co-first EAIT
  `10.1007/s10639-025-13487-8` is a hot paper in 2026 and remains highly cited.
  Result: 19 trophy entries and 11 dated fire entries on the index.
- On 27 September 2026 the author confirmed no co-first/corresponding designation
  for ModuSwarm (`10.1145/3786995.3787000`), Future Landscape of Education
  (`10.22318/icls2025.986726`) and XR vocational education
  (`10.1145/3702163.3702174`). These three remain unmarked.
- Fire years are copied exactly from the profile, with the EAIT update above.
  Historical hot-paper years do not imply current hot-paper status. No sitewide
  summary metric or record count was changed.

## Additional role evidence

Publisher pages or author-uploaded manuscripts resolve unmarked Scholar bylines:

- [My culture is as good as yours](https://link.springer.com/chapter/10.1007/978-3-032-29791-4_24): Yang Pian, corresponding.
- [Attention-ResNet](https://link.springer.com/article/10.1007/s00371-025-04265-1): Haoming Wang and Chenliang Wang, co-first; Xianlong Xu, corresponding. Retain the index's existing spelling of Chenliang Wang.
- [Trust the messenger](https://doi.org/10.1108/AJIM-01-2026-0111): Yuying Luo, corresponding, consistent with the verified publications source.
- [TAM and TTF](https://doi.org/10.1080/10447318.2023.2291609): Teng Yu, corresponding, consistent with the verified publications source.
- [Online education continuance meta-analysis](https://link.springer.com/article/10.1007/s10639-024-12654-7): Chengliang Wang, corresponding.
- [AI in engineering education](https://www.researchgate.net/publication/389085991_Application_of_AI_in_engineering_education_A_bibliometric_study): Yuhui Jing, correspondence on the manuscript's first page.
- [English learning through moral dilemmas](https://journals.sagepub.com/doi/10.1177/13621688251391412): Xinyu Zhang, author notes/contact.
- [Quality, norms and privacy](https://www.researchgate.net/publication/403242630_Quality_norms_and_privacy_in_AI_chatbot_adoption_a_multigroup_analysis): Qiuyang Tu, explicitly corresponding in the author biography.
- [Virtual streamers, real purchases](https://www.emerald.com/ijchm/article/38/13/239/1389751/Virtual-streamers-real-purchases-the-roles-of): Teng Liu, explicitly corresponding.
- [Virtual influencers and purchase intentions](https://www.researchgate.net/publication/384182611_Can_virtual_influencers_affect_purchase_intentions_in_tourism_and_hospitality_e-commerce_live_streaming_An_empirical_study_in_China): Junyun Liao, corresponding author.
- [Service robots](https://www.researchgate.net/publication/400021177_What_drives_the_continuance_intention_of_service_robots_in_the_hospitality_industry_An_integrated_model_of_motivated_consumer_innovativeness_and_extended_technology_continuance_theory): Junyun Liao, CONTACT on the manuscript's first page.
- [Extended Reality in higher education](https://www.researchgate.net/publication/400968717_Empowering_higher_education_with_Extended_Reality_technology_a_bibliometric_perspective): Decheng Mao, explicitly corresponding on the first page.
- [Sociotechnical Turn](https://www.researchgate.net/publication/408064867_Sociotechnical_Turn_in_Interactive_Learning_Environments_Research_Knowledge_Structures_from_Multi-Database_Topic_Modeling_2020-2026): Chengliang Wang and Yuanyuan Li, co-first; Chengliang Wang and Yupeng Lin, corresponding. The index's existing title/year-range is not edited by this annotation task.

Three truncated/differing Scholar titles were matched by their observed citation
IDs, not by fuzzy title matching: Human-AI ecosystem (`rO6llkc54NcC`),
Sociotechnical Turn (`zA6iFVUQeVQC`) and Service robots (`70eg2SAEIzsC`).
The IEEE Extended Reality paper is verified from the author-uploaded manuscript;
it was not present among the 86 Scholar profile records.
