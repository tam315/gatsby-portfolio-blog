import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { Link as LinkForScroll } from 'react-scroll';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false,
      isScrolled: false,
      activeSection : '', // react-scrollから報告された、現在のスクロール位置を含むエレメントのid
    };

    this.closeMenu = this.closeMenu.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.onHumbergerClick = this.onHumbergerClick.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  closeMenu() {
    this.setState({
      isMenuOpen: false,
    });
  }

  // メニューの外側をクリックするとメニューを閉じる（react-onclickoutsideで制御）
  handleClickOutside(e) {
    if(this.state.isMenuOpen) {
      this.setState({
        isMenuOpen: false,
      });
    }
  }

  // ハンバーガーメニューをクリックするとメニューを開閉する
  onHumbergerClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  // ESCキーでメニューを閉じる
  onKeydown(e) {
    if(e.keyCode === 27) {
      this.setState({
        isMenuOpen: false,
      });
    }
  }

  // スクロール位置がトップになっているか判断する
  onScroll() {
    const JUDGE_POSITION_Y = 50;

    let supportPageOffset = window.pageYOffset !== undefined;
    let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
    let scrollY = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

    if (scrollY > JUDGE_POSITION_Y) {
      this.setState({
        isScrolled: true,
      })
    } else {
      this.setState({
        isScrolled: false,
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('keydown', this.onKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('keydown', this.onKeydown);
  }

  render() {
    const settings = {
      transitionSpeed: '0.15s',
      barColor: 'rgba(0, 0, 15, 0.8)',
      opacityHide: 0.2,
    }
    const transitionSpeed = '0.15s';

    const { isMenuOpen, isScrolled } = this.state;
    const isRootPath = this.props.location.pathname === '/';
    const shouldBeHide = isRootPath && !isMenuOpen && !isScrolled;

    const styles = {
      navbar: {
        background: shouldBeHide ? 'transparent' : settings.barColor,
        display: 'flex',
        height: '50px',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        transition: `background ${settings.transitionSpeed} ease-out`,
        width: '100%',
        zIndex: 10,
        boxShadow: shouldBeHide ? 'none' : '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)',
      },
      menu: {
        display: 'flex',
        '@media (max-width:749px)': {
          flexDirection: 'column',
          left: 0,
          maxHeight: isMenuOpen ? '500px' : '0px',
          overflow: 'hidden',
          position: 'fixed',
          top: '50px',
          transition: `max-height ${settings.transitionSpeed} ease-out`,
          width: '100%',
        },
        '@media (min-width:750px)': {
          flexDirection: 'row',
          marginRight: '1rem',
          width: '500px',
        }
      },
      menuItems: {
        color: '#fff',
        cursor: 'pointer',
        opacity: shouldBeHide ? settings.opacityHide : 1,
        textDecoration: 'none',
        transition: `background ${settings.transitionSpeed} ease-out, opacity ${settings.transitionSpeed} ease-out`,
        '.active': {
          background: 'rgba(100, 100, 110, 0.95)',
        },
        '@media (max-width:749px)': {
          background:  settings.barColor,
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
          display: 'block',
          padding: '12px 25px',
          width: '100%',
        },

        '@media (min-width:750px)': {
          alignItems: 'center',
          flex: '1 0 auto',
          display: 'flex',
          justifyContent: 'center',
        },
      },
      logo: {
        cursor: 'pointer',
        display: 'flex',
        marginLeft: '25px',
        opacity: shouldBeHide ? settings.opacityHide : 1,
        width: '180px',
        transition: `opacity ${settings.transitionSpeed} ease-out`,
        ' img': { // for IE11
          width: '180px',
          height: '50px',
        },
      },
      humbergerIcon: {
        display: 'flex',
        alignItems: 'center',
        width: '28px',
        marginRight: '1.5rem',
        opacity: shouldBeHide ? settings.opacityHide : 1,
        transition: `opacity ${settings.transitionSpeed} ease-out`,
        '@media (min-width:750px)': {
          display: 'none',
        },
      },
    }

    const menuItem = [
      { name: '概要', id: 'gaiyou', path: '/#gaiyou' },
      { name: 'スキル', id: 'skill', path: '/#skill' },
      { name: '実績', id: 'performance', path: '/#performance' },
      { name: 'プロフィール', id: 'profile', path: '/#profile' },
      { name: '問い合わせ', id: 'contact', path: '/#contact' },
      { name: 'ブログ', id: 'blog', path: '/blog/' },
    ];

    return (
      <nav css={styles.navbar}>
        { isRootPath ?
          <LinkForScroll
            to="top"
            smooth={true}
            duration={150}
            css={styles.logo}
          >
          <img src="/images/logo.svg" />
          </LinkForScroll>
        :
          <Link
            to="/"
            css={styles.logo}
          >
          <img src="/images/logo.svg" />
          </Link>
        }

        <ul css={styles.menu}>
          { menuItem.map((item) => {
            return isRootPath && item.path.substr(0, 2) === '/#' ? (
              <LinkForScroll
                to={item.id}
                spy={true /* avtiveクラスを自動で設定するために必須の設定 */}
                smooth={true}
                duration={150}
                offset={-50}
                key={item.id}
                activeClass="active"
                css={styles.menuItems}
                onClick={this.closeMenu}
              >
                {item.name}
              </LinkForScroll>
            ) : (
              <Link
                to={item.path}
                key={item.id}
                css={styles.menuItems}
                className={ this.props.location.pathname.substr(0, item.path.length) === item.path ? 'active' : null }
                onClick={this.closeMenu}
              >
                {item.name}
              </Link>
            )
          })}
        </ul>

        <div
          css={styles.humbergerIcon}
          onClick={this.onHumbergerClick}
        >
        <img src="/images/humberger.svg" />
        </div>

      </nav>
    )
  }
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default onClickOutside(Header)
