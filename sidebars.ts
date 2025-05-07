import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'intro/introduction',
        'intro/acknowledgements',
      ],
    },
    {
      type: 'category',
      label: 'Part I: General Conventions',
      items: [
        {
          type: 'category',
          label: '1. Ground Rules',
          items: [
            'part-i-general-conventions/ground-rules/index',
            'part-i-general-conventions/ground-rules/the-stave',
            'part-i-general-conventions/ground-rules/clefs',
            'part-i-general-conventions/ground-rules/noteheads',
            'part-i-general-conventions/ground-rules/stems',
            'part-i-general-conventions/ground-rules/tails',
            'part-i-general-conventions/ground-rules/beams',
            'part-i-general-conventions/ground-rules/rests',
            'part-i-general-conventions/ground-rules/ledger-lines',
            'part-i-general-conventions/ground-rules/octave-signs',
            'part-i-general-conventions/ground-rules/using-ledger-lines-or-octave-signs',
            'part-i-general-conventions/ground-rules/barlines',
            'part-i-general-conventions/ground-rules/rhythmic-spacing',
            'part-i-general-conventions/ground-rules/spacing-symbols',
          ],
        },
        'part-i-general-conventions/chords-dotted-notes-ties',
        'part-i-general-conventions/accidentals-and-key-signatures',
        'part-i-general-conventions/dynamics-and-articulation',
        'part-i-general-conventions/ornamentation',
        'part-i-general-conventions/metre',
        'part-i-general-conventions/tuplets',
        'part-i-general-conventions/repeat-signs',
      ],
    },
    {
      type: 'category',
      label: 'Part II: Idiomatic Notation',
      items: [
        'part-ii-idiomatic-notation/woodwind-and-brass',
        'part-ii-idiomatic-notation/percussion',
        'part-ii-idiomatic-notation/keyboard',
        'part-ii-idiomatic-notation/harp',
        'part-ii-idiomatic-notation/classical-guitar',
        'part-ii-idiomatic-notation/strings',
        'part-ii-idiomatic-notation/vocal-music',
      ],
    },
    {
      type: 'category',
      label: 'Part III: Layout & Presentation',
      items: [
        'part-iii-layout-presentation/preparing-materials',
      ],
    },
    {
      type: 'category',
      label: 'Appendix',
      items: [
        'appendix/index',
        'appendix/further-reading',
      ],
    },
  ],
};

export default sidebars;
