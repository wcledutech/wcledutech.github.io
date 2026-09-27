# Publication index ordering

The order is stored in `_data/publication_index.json`, so the same sequence is
available before JavaScript loads and when JavaScript is disabled. The year
selector can reverse year groups without reversing papers inside a year.

Within each year:

1. Journal articles and journal correspondence, then conference papers,
   then other records. First/co-first preprints are an explicit exception:
   they join the first-author sequence in the journal-led group for that year.
   They keep the `preprint` category and receive no journal impact factor.
2. The baseline within each group is Chengliang Wang's first-author sequence,
   second-author papers, third-author papers, and so on. Ordinary first-author
   papers precede all co-first papers within that sequence, including when Wang
   is the first listed co-first author. A co-first paper remains ahead of
   second-author papers. Co-first credit applies only when Wang himself has it.
   First/co-first papers keep their priority even if Wang is also the last
   listed author. A sole-author paper remains first-author rather than entering
   the last-author ordering.
3. Within each ordinary-first or co-first tier, journals precede preprints.
   Journal papers in each tier use descending 2025 Journal Impact Factor.
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

## Publications by research method

The method lists in `_pages/publications.md` use the same verified author roles,
JIF snapshot and education-relevance decisions. They are not grouped by year.
Within each existing method category, use:

1. Ordinary first-author papers, then co-first papers. Within either tier,
   journals precede preprints and conference papers; journals use descending JIF.
2. Other non-last authors in author-position order, with journals before
   conference papers at the same position.
3. Last-author papers: sole corresponding, shared corresponding, non-corresponding.
   Sole-corresponding papers use education relevance first and JIF second.
   Among equally relevant papers, conference papers follow journals with a JIF.
4. Otherwise equal keys use newest year, title and DOI. Author role takes
   precedence over publication year and type in these method-based lists.

The DOI connects each original citation to `_data/publication_index.json`.
Abbreviated citation text is not used to guess authorship. The updater changes
only citation-line positions within each method group, preserving the original
text, links, markers, category membership, counts, blank lines and line endings.
No publication is added or removed. Unknown DOIs or unsupported multi-line
citations stop the update instead of receiving a guessed position.

```shell
python -B -m _scripts.sort_publications_by_method --write
python -B -m unittest discover -s tests -v
```

Without `--write`, the method updater checks the current order without editing.
