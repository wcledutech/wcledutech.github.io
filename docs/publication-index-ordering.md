# Publication index ordering

The order is stored in `_data/publication_index.json`, so the same sequence is
available before JavaScript loads and when JavaScript is disabled. The year
selector can reverse year groups without reversing papers inside a year.

Within each year:

1. All journal articles and journal correspondence, then conference papers,
   then other records (currently one preprint).
2. The baseline within each group is Chengliang Wang's first/co-first papers,
   second-author papers, third-author papers, and so on. First/co-first papers
   keep their priority even if Wang is also the last listed author. A sole-author
   paper remains first-author rather than entering the last-author ordering.
3. First/co-first journal papers use descending 2025 Journal Impact Factor.
   These are current JIFs checked on 27 September 2026, not five-year IFs or
   CiteScores. Values and publisher sources are in
   `_data/publication_index_ordering.json`.
4. Reorder the last-author entries within each year and publication group:
   sole corresponding author, then shared corresponding author, then
   non-corresponding author. Compare last-author papers regardless of the total
   number of authors. Non-last-author entries retain their baseline slots.
5. Within sole-corresponding last-author entries, education relevance takes
   priority, as confirmed by the owner. Within the same relevance level,
   journal papers use descending JIF. Conference papers do not receive a JIF.
6. Remaining ties retain the baseline author-position, title and DOI keys,
   making the result independent of input order. Shared/non-corresponding
   last-author papers do not gain a new JIF or relevance preference.

Education relevance is an explicit per-DOI editorial classification in
`_data/publication_index_ordering.json`, not a journal ranking or an inferred
numeric score. `education` means the study directly investigates teaching,
learning, assessment, educational systems or educational technology, including
medical, language, music and dance education. Learning-performance outcomes
qualify even in a non-education journal. `other` means the central question is
outside education; merely recruiting university students as consumers does not
qualify. Each entry records a short topic-based reason. New sole-corresponding
last-author entries must receive an explicit classification before reordering.

Three records labeled `book-chapter` are chapters in AIED/EIMT conference
proceedings; their sorting group is conference without changing their
bibliographic category. The JPCS robot path-planning paper also belongs to the
conference group: [IOP's proceedings description](https://publishingsupport.iopscience.iop.org/journals/journal-of-physics-conference-series/).
The four DOI overrides are explicit in the ordering policy; ordinary future
book chapters are not automatically assumed to be conference papers.

To reorder after adding papers or refreshing the JIF snapshot:

```shell
python _scripts/sort_publication_index.py --write
python -B -m unittest discover -s tests -v
```

Without `--write` the script only checks the order. A new first/co-first or
sole-corresponding last-author journal paper without a verified JIF stops the
check instead of receiving a guessed value. Existing citation text, author-role flags, award markers, record counts,
publication years, and publication categories are not modified by sorting.
