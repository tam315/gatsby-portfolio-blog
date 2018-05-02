import PropTypes from 'prop-types';
import React from 'react';

class AgeCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.birthday = new Date(props.birthday);

    this.state = {
      age: this.calcAge(),
    };

    this.updateAge = this.updateAge.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.updateAge, 50);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateAge() {
    this.setState({
      age: this.calcAge(),
    });
  }

  calcAge() {
    const datetimeFrom = new Date(this.birthday);
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

  render() {
    const age = this.state.age.toFixed(9).split('.');
    return (
      <div>
        {age[0]}.<span css={{ fontSize: '0.8rem' }}>{age[1]}</span>歳
      </div>
    );
  }
}

AgeCalculator.propTypes = {
  birthday: PropTypes.string.isRequired,
};

export default AgeCalculator;
