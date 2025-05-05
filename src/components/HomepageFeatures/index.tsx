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
    title: '一般惯例',
    Image: () => <img src={require('@site/static/img/general_conventions.png').default} alt="一般惯例" />,
    description: (
      <>
        涵盖五线谱基本规则、谱号、音符、节奏等通用记谱规范，是所有音乐记谱的基础标准。解读谱表结构、音符形状与位置、节奏时值、力度记号、装饰音、反复记号等核心元素，确保记谱的准确性与可读性。
      </>
    ),
  },
  {
    title: '器乐记谱',
    Image: () => <img src={require('@site/static/img/idiomatic_notation.png').default} alt="器乐记谱" />,
    description: (
      <>
        针对各类乐器（键盘、弦乐、管乐、打击乐等）的特定记谱法与演奏技法规范。包括钢琴踏板标记、弦乐泛音、管乐换气、打击乐特殊技法等专业记谱方法，帮助作曲家准确表达各类乐器的独特表现力。
      </>
    ),
  },
  {
    title: '排版呈现',
    Image: () => <img src={require('@site/static/img/layout_presentation.png').default} alt="排版呈现" />,
    description: (
      <>
        总谱布局、分谱准备、排版美学与印刷输出建议，确保乐谱清晰易读、演奏友好。从乐器分组、小节线对齐、系统间距到分谱提取、排练记号设置，提供全面的排版指导，让乐谱既美观又实用。
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
