import React from 'react';

import Helmet from 'react-helmet';
import Header from '../../components/Header';
import Section from '../../components/Section';
import infos from '../../services/infos';
import cover from '../../assets/images/cover.png';

export default function Main() {
  const { portifolio } = infos;

  return (
    <>
      <Helmet>
        <title>Eduardo Sutil - portfolio</title>
        <meta property="og:image" content={cover} />
      </Helmet>
      <Header />
      {portifolio.map(item => (
        <Section key={item.id} item={item} />
      ))}
    </>
  );
}
