import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';
import { rhythm } from '../utils/typography';

const GaiyouSection = props => {
  const articles = [
    [
      '何ができる？',
      'シングルページアプリケーション開発、静的サイトジェネレータによるWebページの作成、Node.js等によるバックエンド開発等を行っています。',
    ],
    [
      '契約形態は？',
      '準委任契約による人的リソースの提供が可能です。内容によっては請負契約も可能です。',
    ],
    [
      '常駐できる？',
      'リモートワークを前提とさせて頂いておりますが、遠方での打ち合わせ等にも柔軟に対応いたします。',
    ],
    [
      'いくらかかる？',
      '準委任契約の場合は4000円/hから承っております。請負契約の場合は期間や内容に応じたお見書を作成いたします。',
    ],
    [
      'いま仕事できる？',
      '内容・期間によっては受託可能です。お気軽にお問い合わせください。',
    ],
  ];

  const styles = {
    container: {
      display: 'grid',
      gridGap: rhythm(1.5),
      gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
      margin: 'auto',
      maxWidth: '700px',
      padding: rhythm(1.5),
    },
    caret: {
      color: '#6292F1',
      marginRight: rhythm(1 / 8),
    },
    title: {
      fontWeight: 'bold',
      borderBottom: '1px dotted rgba(0,0,0,0.3)',
      marginBottom: rhythm(0.5),
    },
    button: {
      background: '#fff',
      border: '5px solid #6292F1',
      borderRadius: '7px',
      boxShadow:
        '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
      color: '#6292F1',
      display: 'block',
      margin: '60px auto 0',
      maxWidth: '100%',
      outline: 'none',
      padding: '15px 0',
      width: '300px',
      ':hover': {
        background: '#6292F1',
        color: '#fff',
        cursor: 'pointer',
      },
    },
  };

  return (
    <SectionContainer id="gaiyou">
      <SectionHeader text="概要" colorNumber="1" />

      <WhiteBox css={styles.container}>
        {articles.map(article => (
          <li key={article[0]}>
            <div css={styles.title}>
              <FontAwesomeIcon icon="caret-square-right" style={styles.caret} />
              {article[0]}
            </div>
            <div>{article[1]}</div>
          </li>
        ))}
      </WhiteBox>

      <button
        css={styles.button}
        onClick={() => props.setCurrentModal('CONTACT')}
      >
        お問い合わせ
      </button>
    </SectionContainer>
  );
};

GaiyouSection.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default GaiyouSection;
