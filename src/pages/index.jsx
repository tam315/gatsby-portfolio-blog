import React from 'react';
import Layout from '../components/Layout';
import ModalConductor from '../components/ModalConductor';
import SEO from '../components/SEO';
import '../css/global.css';
import BlogSection from '../sections/BlogSection';
import FooterSection from '../sections/FooterSection';
import OverviewSection from '../sections/OverviewSection';
import PerformanceSection from '../sections/PerformanceSection';
import ProfileSection from '../sections/ProfileSection';
import SkillSection from '../sections/SkillSection';
import TopSection from '../sections/TopSection';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentModal: null,
    };

    this.setCurrentModal = this.setCurrentModal.bind(this);
  }

  setCurrentModal(target) {
    this.setState({
      currentModal: target,
    });
  }

  render() {
    return (
      <Layout location={this.props.location}>
        {this.state.currentModal && (
          <ModalConductor
            currentModal={this.state.currentModal}
            setCurrentModal={this.setCurrentModal}
          />
        )}

        <TopSection />
        <OverviewSection setCurrentModal={this.setCurrentModal} />
        <SkillSection setCurrentModal={this.setCurrentModal} />
        <PerformanceSection />
        <ProfileSection />
        <BlogSection />
        <FooterSection setCurrentModal={this.setCurrentModal} />

        <SEO />
      </Layout>
    );
  }
}

export default IndexPage;
