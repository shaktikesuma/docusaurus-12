import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Doctor to Doctor',
    Svg: require('@site/static/img/d2d.svg').default,
    description: (
      <>
        Doctor to Doctor (D2D) adalah aplikasi yang membantu 
        dokter di Indonesia untuk mendapatkan komunitas, mengembangkan diri dan memperoleh ilmu baru..
      </>
    ),
  },
  {
    title: 'DKonsul',
    Svg: require('@site/static/img/dkonsul.svg').default,
    description: (
      <>
        Dkonsul adalah Telekonsultasi berbasis faskes yang berpartner dengan dokter 
        yang memiliki izin praktek aktif.
      </>
    ),
  },
  
  {
    title: 'Assist',
    Svg: require('@site/static/img/asisst.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
