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
    'intro',
    'preface',
    {
      type: 'category',
      label: 'Part I: General Conventions',
      items: [
        'part-i-general-conventions/ch1-ground-rules',
        'part-i-general-conventions/ch2-chords-dotted-notes-ties',
        'part-i-general-conventions/ch3-accidentals-key-signatures',
        'part-i-general-conventions/ch4-dynamics-articulation',
        'part-i-general-conventions/ch5-grace-notes-trills-glissandos',
        'part-i-general-conventions/ch6-metre',
        'part-i-general-conventions/ch7-tuplets',
        'part-i-general-conventions/ch8-repeat-signs',
      ],
    },
    {
      type: 'category',
      label: 'Part II: Idiomatic Notation',
      items: [
        'part-ii-idiomatic-notation/ch9-woodwind-brass',
        'part-ii-idiomatic-notation/ch10-percussion',
        'part-ii-idiomatic-notation/ch11-keyboard',
        'part-ii-idiomatic-notation/ch12-harp',
        'part-ii-idiomatic-notation/ch13-classical-guitar',
        'part-ii-idiomatic-notation/ch14-strings',
        'part-ii-idiomatic-notation/ch15-vocal-music',
      ],
    },
    {
      type: 'category',
      label: 'Part III: Layout & Presentation',
      items: [
        'part-iii-layout-presentation/ch16-preparing-materials',
        'part-iii-layout-presentation/ch17-score-layout',
        'part-iii-layout-presentation/ch18-part-preparation',
        'part-iii-layout-presentation/ch19-electroacoustic-music',
        'part-iii-layout-presentation/ch20-freedom-and-choice',
      ],
    },
    'appendix',
  ],
};

export default sidebars;
