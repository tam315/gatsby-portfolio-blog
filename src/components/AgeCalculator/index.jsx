import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  birthday: PropTypes.string.isRequired,
};

class AgeCalculator extends React.Component {
  static calcAge(birthday) {
    const datetimeFrom = new Date(birthday);
    const datetimeTo = new Date();

    // その年の誕生日を迎えたと仮定し、年齢を仮計算する
    const diffYear = datetimeTo.getFullYear() - datetimeFrom.getFullYear();

    // 小数点以下（1年以下の単位、つまり月日時間）の差をミリ秒単位で計算したのち、
    // その差が1年間に占める割合を計算する
    const YEAR_AS_MILLISEC = 1000 * 60 * 60 * 24 * 365;
    datetimeFrom.setFullYear(1970);
    datetimeTo.setFullYear(1970);
    const diffTime =
      (datetimeTo.getTime() - datetimeFrom.getTime()) / YEAR_AS_MILLISEC;

    // 小数点以下の差を、仮計算した年齢に加算又は減算する
    const result = diffYear + diffTime;

    return result;
  }

  constructor(props) {
    super(props);

    this.birthday = new Date(props.birthday);

    this.state = {
      age: AgeCalculator.calcAge(this.birthday),
    };
  }

  componentDidMount = () => {
    this.updateAge();
  };

  componentWillUnmount = () => {
    window.cancelAnimationFrame(this.animationRequestId);
  };

  updateAge = () => {
    this.setState({
      age: AgeCalculator.calcAge(this.birthday),
    });
    this.animationRequestId = window.requestAnimationFrame(this.updateAge);
  };

  render = () => {
    const { age } = this.state;

    const [integerPart, fractionPart] = age.toFixed(9).split('.');
    return (
      <div>
        {integerPart}.<span css={{ fontSize: '0.8rem' }}>{fractionPart}</span>
      </div>
    );
  };
}

AgeCalculator.propTypes = propTypes;

export default AgeCalculator;
