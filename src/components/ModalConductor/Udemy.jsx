import PropTypes from 'prop-types';
import React from 'react';
import ReactModal from 'react-modal';
import IconExtLink from '../../components/IconExtLink';
import closeSvg from '../../icons/close.svg';

const propTypes = {
  setCurrentModal: PropTypes.func.isRequired,
};

const Udemy = props => {
  const learnedList = [
    {
      junle: 'Adobe XD',
      courses: [
        {
          name: 'Web UI UX Design using Adobe XD',
          url: 'https://www.udemy.com/ui-ux-web-design-using-adobe-xd',
        },
      ],
    },
    {
      junle: 'Angular',
      courses: [
        {
          name: 'Build a Real Time web app in node.js , Angular.js, mongoDB ',
          url: 'https://www.udemy.com/realtime-meanstack/',
        },
        {
          name: 'Angular 2 Jump Start With Typescript ',
          url: 'https://www.udemy.com/angular-2-jump-start-with-typescript/',
        },
        {
          name: 'Learn and Understand AngularJS ',
          url: 'https://www.udemy.com/learn-angularjs/',
        },
      ],
    },
    {
      junle: 'Git',
      courses: [
        {
          name: 'Git Complete: The definitive, step-by-step guide to Git',
          url: 'https://www.udemy.com/git-complete/',
        },
      ],
    },
    {
      junle: 'GraphQL',
      courses: [
        {
          name: 'GraphQL with React: The Complete Developers Guide',
          url: 'https://www.udemy.com/graphql-with-react-course/',
        },
      ],
    },
    {
      junle: 'Javascript',
      courses: [
        {
          name: "ES6 Javascript: The Complete Developer's Guide ",
          url: 'https://www.udemy.com/javascript-es6-tutorial/',
        },
        {
          name: 'JavaScript - Understanding the Weird Parts',
          url: 'https://www.udemy.com/understand-javascript/',
        },
        {
          name: 'Learning Data Structures in JavaScript from Scratch',
          url:
            'https://www.udemy.com/learning-data-structures-in-javascript-from-scratch/',
        },
        {
          name: 'Projects In JavaScript & Jquery',
          url: 'https://www.udemy.com/projects-in-javascript-jquery/',
        },
      ],
    },
    {
      junle: 'MongoDB',
      courses: [
        {
          name: 'The Complete Developers Guide to MongoDB ',
          url:
            'https://www.udemy.com/the-complete-developers-guide-to-mongodb/',
        },
      ],
    },
    {
      junle: 'MySQL',
      courses: [
        {
          name: 'MySQL Database For Beginners ',
          url: 'https://www.udemy.com/draft/12802/',
        },
      ],
    },
    {
      junle: 'NodeJS',
      courses: [
        {
          name: 'Learn and Understand NodeJS ',
          url: 'https://www.udemy.com/understand-nodejs/',
        },
      ],
    },
    {
      junle: 'PHP',
      courses: [
        {
          name: 'Projects in PHP and MySQL',
          url:
            'https://www.udemy.com/the-complete-web-development-course-learn-by-building-apps/',
        },
      ],
    },
    {
      junle: 'PWA',
      courses: [
        {
          name: 'Progressive Web Apps (PWA) - The Complete Guide',
          url:
            'https://www.udemy.com/progressive-web-app-pwa-the-complete-guide/',
        },
      ],
    },
    {
      junle: 'React / Redux',
      courses: [
        {
          name: 'Advanced React and Redux',
          url: 'https://www.udemy.com/react-redux-tutorial/',
        },
        {
          name: 'Modern React with Redux',
          url: 'https://www.udemy.com/react-redux/',
        },
        {
          name: 'Build Web Apps with React JS and Flux ',
          url: 'https://www.udemy.com/learn-and-understand-reactjs/',
        },
      ],
    },
    {
      junle: 'Serverless',
      courses: [
        {
          name: 'AWS Serverless APIs & Apps - A Complete Introduction',
          url:
            'https://www.udemy.com/aws-serverless-a-complete-introduction/learn/v4/questions',
        },
      ],
    },
    {
      junle: 'Typescript',
      courses: [
        {
          name: 'Introduction to TypeScript ',
          url: 'https://www.udemy.com/typescript/',
        },
      ],
    },
    {
      junle: 'Webpack',
      courses: [
        {
          name: "Webpack 2: The Complete Developer's Guide ",
          url: 'https://www.udemy.com/webpack-2-the-complete-developers-guide/',
        },
      ],
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
      padding: '2rem',
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
      marginBottom: '2rem',
      ':last-child': {
        marginBottom: 0,
      },
    },
    courseJunle: {
      borderLeft: '10px solid gray',
      fontWeight: 'bold',
      paddingLeft: '10px',
    },
    courseName: {
      color: '#262626',
      display: 'block',
      fontSize: '0.7em',
      marginRight: '2px',
      marginTop: '0.5rem',
      textDecoration: 'none',
      '::before': {
        content: '- ',
      },
      ':hover': {
        background: '#eee',
      },
    },
  };

  return (
    <ReactModal
      isOpen
      closeTimeoutMS={100}
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

      {learnedList.map(list => (
        <div css={styles.courseContainer} key={list.junle}>
          <div css={styles.courseJunle}>{list.junle}</div>

          {list.courses.map(course => (
            <a
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              css={styles.courseName}
              key={course.name}
            >
              {course.name}
              <IconExtLink />
            </a>
          ))}
        </div>
      ))}
    </ReactModal>
  );
};

Udemy.propTypes = propTypes;

export default Udemy;
