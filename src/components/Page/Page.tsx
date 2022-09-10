import React, {Fragment, ReactNode} from 'react';
import {Helmet} from 'react-helmet';
import PropTypes from 'prop-types';

type Props = {
  children: ReactNode;
  title?: string;
};

function Page({title, children}: Props): JSX.Element {
  title = title + ' | Space tourism';
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Fragment>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
