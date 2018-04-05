import React from 'react';
import Link from 'gatsby-link';
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
      barColorScrolled: 'rgba(0, 0, 15, 0.8)',
      fontColorNonScrolled: 'rgba(255, 255, 255, 0.4)',
      opacityNonScrolled: 0.2,
    }
    const transitionSpeed = '0.15s';
    const { isMenuOpen, isScrolled } = this.state;

    const styles = {
      navbar: {
        background: isMenuOpen || isScrolled ? settings.barColorScrolled : 'transparent',
        color: '#fff',
        display: 'flex',
        height: '50px',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        transition: `background ${settings.transitionSpeed} ease-out`,
        width: '100%',
        zIndex: 10,
        boxShadow: isScrolled ? '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)' : 'none',
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
        cursor: 'pointer',
        opacity: this.state.isMenuOpen || this.state.isScrolled ? 1 : settings.opacityNonScrolled,
        transition: `background ${settings.transitionSpeed} ease-out, opacity ${settings.transitionSpeed} ease-out`,
        '.active': {
          background: 'rgba(100, 100, 110, 0.95)',
        },
        '@media (max-width:749px)': {
          background: this.state.isMenuOpen ? settings.barColorScrolled : 'transparent',
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
        opacity: this.state.isMenuOpen || this.state.isScrolled ? 1 : settings.opacityNonScrolled,
        width: '180px',
        transition: `opacity ${settings.transitionSpeed} ease-out`,
      },
      humbergerIcon: {
        display: 'flex',
        alignItems: 'center',
        width: '28px',
        marginRight: '1.5rem',
        opacity: this.state.isMenuOpen || this.state.isScrolled ? 1 : settings.opacityNonScrolled,
        transition: `opacity ${settings.transitionSpeed} ease-out`,
        '@media (min-width:750px)': {
          display: 'none',
        },
      },
    }

    const menuItem = [
      { name: '概要', id: 'gaiyou' },
      { name: 'スキル', id: 'skill' },
      { name: '実績', id: 'performance'},
      { name: 'プロフィール', id: 'profile'},
      { name: 'ブログ', id: 'blog'},
      { name: '問い合わせ', id: 'contact'},
    ];

    return (
      <nav css={styles.navbar}>
        <LinkForScroll
          to="top"
          smooth={true}
          duration={150}
          css={styles.logo}
        >
        <img src="/images/logo.svg" />
        </LinkForScroll>

        <ul css={styles.menu}>
          { menuItem.map((item) => (
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
          ))}
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

export default onClickOutside(Header)
