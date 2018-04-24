import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import IconExtLink from '../../components/IconExtLink';

import closeSvg from '../../icons/close.svg';

const Udemy = (props) => {
  const cources = [
    {
      'junle': 'Adobe XD',
      'name': 'Web UI UX Design using Adobe XD',
      'url': 'https://www.udemy.com/ui-ux-web-design-using-adobe-xd',
    },
    {
      'junle': 'Angular(v1), MongoDB',
      'name': 'Build a Real Time web app in node.js , Angular.js, mongoDB ',
      'url': 'https://www.udemy.com/realtime-meanstack/',
    },
    {
      'junle': 'Angular(v2), Typescript',
      'name': 'Angular 2 Jump Start With Typescript ',
      'url': 'https://www.udemy.com/angular-2-jump-start-with-typescript/',
    },
    {
      'junle': 'AngularJS(v1)',
      'name': 'Learn and Understand AngularJS ',
      'url': 'https://www.udemy.com/learn-angularjs/',
    },
    {
      'junle': 'Git',
      'name': 'Git Complete: The definitive, step-by-step guide to Git ',
      'url': 'https://www.udemy.com/git-complete/',
    },
    {
      'junle': 'Javascript',
      'name': 'ES6 Javascript: The Complete Developer\'s Guide ',
      'url': 'https://www.udemy.com/javascript-es6-tutorial/',
    },
    {
      'junle': 'Javascript',
      'name': 'JavaScript - Understanding the Weird Parts',
      'url': 'https://www.udemy.com/understand-javascript/',
    },
    {
      'junle': 'Javascript, Jquery',
      'name': 'Projects In JavaScript & Jquery',
      'url': 'https://www.udemy.com/projects-in-javascript-jquery/',
    },
    {
      'junle': 'MongoDB',
      'name': 'The Complete Developers Guide to MongoDB ',
      'url': 'https://www.udemy.com/the-complete-developers-guide-to-mongodb/',
    },
    {
      'junle': 'MySQL',
      'name': 'MySQL Database For Beginners ',
      'url': 'https://www.udemy.com/draft/12802/',
    },
    {
      'junle': 'NodeJS',
      'name': 'Learn and Understand NodeJS ',
      'url': 'https://www.udemy.com/understand-nodejs/',
    },
    {
      'junle': 'PHP, MySQL',
      'name': 'Projects in PHP and MySQL',
      'url': 'https://www.udemy.com/the-complete-web-development-course-learn-by-building-apps/',
    },
    {
      'junle': 'React',
      'name': 'Build Web Apps with React JS and Flux ',
      'url': 'https://www.udemy.com/learn-and-understand-reactjs/',
    },
    {
      'junle': 'React, Redux',
      'name': 'Modern React with Redux ',
      'url': 'https://www.udemy.com/react-redux/',
    },
    {
      'junle': 'Typescript',
      'name': 'Introduction to TypeScript ',
      'url': 'https://www.udemy.com/typescript/',
    },
    {
      'junle': 'Webpack',
      'name': 'Webpack 2: The Complete Developer\'s Guide ',
      'url': 'https://www.udemy.com/webpack-2-the-complete-developers-guide/',
    },
  ];

  const styles = {
    modalOverlay: {
      background: 'rgba(64,64,64,0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 500,
    },
    modalContent: {
      margin: '1rem',
      maxHeight: '90vh',
      maxWidth: '600px',
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
    },
    closeButton: {
      background: `url(${closeSvg})`,
      border: 0,
      boxSizing: 'border-box',
      cursor: 'pointer',
      height: '18px',
      padding: 0,
      position: 'absolute',
      right: '1rem',
      top: '1rem',
      width: '18px',
    },
    courseContainer: {
      marginBottom: '1rem',
    },
    courseJunle: {
      fontWeight: 'bold',
      fontSize: '0.9rem',
    },
    courseName: {
      color: '#262626',
      fontSize: '0.7em',
      marginRight: '2px',
    },
  };

  return (
    <ReactModal
      isOpen
      onRequestClose={() => props.setCurrentModal(null)}
      style={{
        overlay: styles.modalOverlay,
        content: styles.modalContent,
      }}
      ariaHideApp={false}
    >

      <button
        css={styles.closeButton}
        onClick={() => props.setCurrentModal(null)}
      />

      {cources.map(course => (
        <div css={styles.courseContainer} key={course.name}>
          <div css={styles.courseJunle}>{course.junle}</div>
          <a
            href={course.url}
            target="_blank"
            css={styles.courseName}
          >{course.name}
          </a><IconExtLink />
        </div>
      ))}
    </ReactModal>
  );
};

Udemy.propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

export default Udemy;
