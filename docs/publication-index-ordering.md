# Publication index ordering

The order is stored in `_data/publication_index.json`, so the same sequence is
available before JavaScript loads and when JavaScript is disabled. The year
selector can reverse year groups without reversing papers inside a year.

Within each year:

1. All journal articles and journal correspondence, then conference papers,
   then other records (currently one preprint).
2. Within each group, Chengliang Wang's first/co-first papers, second-author
   papers, third-author papers, and so on. Corresponding authorship does not
   change author position. Only an owner's co-first marker changes their rank.
3. First/co-first journal papers use descending 2025 Journal Impact Factor.
   These are current JIFs checked on 27 September 2026, not five-year IFs or
   CiteScores. Values and publisher sources are in
   `_data/publication_index_ordering.json`.
4. Equal keys use title and DOI for deterministic ordering. Other author
   positions and conference papers do not use journal impact factors.

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

Without `--write` the script only checks the order. A new first/co-first journal
paper without a verified JIF stops the check instead of receiving a guessed
value. Existing citation text, author-role flags, award markers, record counts,
publication years, and publication categories are not modified by sorting.
