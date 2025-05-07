import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Image: React.ComponentType<React.ComponentProps<'img'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'General Conventions',
    Image: () => <img src={require('@site/static/img/general_conventions.png').default} alt="General Conventions" />,
    description: (
      <>
        Covers basic staff rules, clefs, notes, rhythm, and universal notation standards that form the foundation of all music notation. Interprets staff structure, note shapes and positions, rhythmic values, dynamic markings, ornaments, repeat signs, and other core elements to ensure notation accuracy and readability.
      </>
    ),
  },
  {
    title: 'Idiomatic Notation',
    Image: () => <img src={require('@site/static/img/idiomatic_notation.png').default} alt="Idiomatic Notation" />,
    description: (
      <>
        Specific notation methods and performance technique standards for various instruments (keyboard, strings, winds, percussion, etc.). Includes piano pedal markings, string harmonics, wind breathing, special percussion techniques, and other professional notation methods to help composers accurately express the unique expressiveness of each instrument.
      </>
    ),
  },
  {
    title: 'Layout & Presentation',
    Image: () => <img src={require('@site/static/img/layout_presentation.png').default} alt="Layout & Presentation" />,
    description: (
      <>
        Score layout, part preparation, typography aesthetics, and printing output recommendations to ensure clear, readable, and performer-friendly scores. Provides comprehensive layout guidance from instrument grouping, barline alignment, and system spacing to part extraction and rehearsal mark setup, making scores both beautiful and practical.
      </>
    ),
  },
];

function Feature({title, Image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Image />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
