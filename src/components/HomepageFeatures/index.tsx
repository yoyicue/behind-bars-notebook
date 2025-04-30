import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '权威指南',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        《Behind Bars》是当代最权威的音乐记谱规范指南，由 Faber Music 资深音乐编辑 Elaine Gould 编写。
      </>
    ),
  },
  {
    title: '全面覆盖',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        从基础规则到复杂乐器技巧，全面覆盖音乐记谱的各个方面，帮助读者准备清晰精确的乐谱。
      </>
    ),
  },
  {
    title: '实用参考',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        包含 1,500 多个从巴赫到泽纳基斯的已出版乐谱示例，是作曲家、编曲者、教师和学生的必备参考。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
