import React from 'react';
import Link from 'gatsby-link';
import onClickOutside from 'react-onclickoutside';

class AgeCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.birthday = props.birthday;

    this.state = {
      age: this.calcAge(new Date(this.birthday)),
    }

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
      age: this.calcAge(this.birthday),
    });
  }

  calcAge(birthday) {
    const datetime_from = new Date(birthday);
    const datetime_to = new Date();

    // その年の誕生日を迎えたと仮定し、年齢を仮計算する
    const diffYear = datetime_to.getFullYear() - datetime_from.getFullYear()

    // 小数点以下（1年以下の単位、つまり月日時間）の差をミリ秒単位で計算したのち、
    // その差が1年間に占める割合を計算する
    const YEAR_AS_MILLISEC = 1000 * 60 * 60 * 24 * 365;
    datetime_from.setFullYear(1970)
    datetime_to.setFullYear(1970)
    const diffTime = (datetime_to.getTime() - datetime_from.getTime()) / YEAR_AS_MILLISEC

    // 小数点以下の差を、仮計算した年齢に加算又は減算する
    let result = diffYear + diffTime

    return result
  }

  render() {
    let age = this.state.age.toFixed(9).split('.')
    return <div>{age[0]}.<span css={{ fontSize: '0.8rem' }}>{age[1]}</span>歳</div>
  }
}

export default AgeCalculator;