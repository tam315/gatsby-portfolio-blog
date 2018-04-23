import React from 'react';
import PropTypes from 'prop-types';

import Contact from './Contact';
import SkillHelp from './SkillHelp';
import Udemy from './Udemy';

class ModalConductor extends React.Component {
  componentDidMount() {
    // - モーダルの背景画面のスクロールを防止する。
    // - propsの値に変化があるたびに実行する。
    // - ライフサイクルメソッドの外で'document'を扱うと、
    //   'gatsby build' したときにWebpackでエラーが出るため、仕方なくstateful componentにした。
    document.documentElement.style.overflowY = 'hidden';
  }

  componentWillUnmount() {
    document.documentElement.style.overflowY = 'visible';
  }

  render() {
    const modals = {
      CONTACT: <Contact {...this.props} />,
      SKILL_HELP: <SkillHelp {...this.props} />,
      UDEMY: <Udemy {...this.props} />,
    };

    return modals[this.props.currentModal] || null;
  }
}

ModalConductor.propTypes = {
  // string or null
  currentModal: (props, propName, componentName) => {
    const propValue = props[propName]; // the actual value of `currentModal` prop

    if (propValue === null || typeof propValue === 'string') return null;
    return new Error(`${componentName} must receive null or string for '${propName}' prop`);
  },
  setCurrentModal: PropTypes.func.isRequired,
};

ModalConductor.defaultProps = {
  currentModal: null,
};

export default ModalConductor;
