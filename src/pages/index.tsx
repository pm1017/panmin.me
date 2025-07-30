import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import style from './index.module.scss';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <main>
        <section className={style.home}>
          <h1>Hello.</h1>
          <h2>My name is Pan Min.</h2>
          <p>
            I am a front-end engineer. Over the years, I have dedicated myself to enhancing my
            skills in front-end development, accumulating a wealth of experience and expertise.
            Throughout my career, I have been involved in the development and maintenance of various
            projects, ranging from small websites to large, complex applications.
          </p>
          <p>
            My technical stack includes, but is not limited to, HTML5, CSS3, JavaScript, Vue.js,
            React, Node.js, and related front-end development tools and frameworks. I enjoy
            exploring the latest front-end technologies and applying them to real-world projects to
            improve development efficiency and user experience.
          </p>
          <p>
            In my work, I focus on code quality and maintainability, and I excel in collaborating
            with team members to solve problems and ensure project success. I believe that
            continuous learning and practice are essential to staying competitive in a rapidly
            changing technological landscape.
          </p>
          <p>
            Besides my job, I also enjoy writing technical blogs to share my development experiences
            and insights. If you are interested in front-end development, you can check out my{' '}
            <a href="https://github.com/panmins" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
            , where we can exchange ideas and learn together.
          </p>
        </section>
      </main>
    </Layout>
  );
}
