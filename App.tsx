import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/ProblemStats';
import UseCases from './components/Features';
import Integration from './components/Integration';
import SonarDemo from './components/SonarDemo';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudies from './components/CaseStudies';

function App() {
  return (
    <div className="bg-ocean-950 min-h-screen text-slate-200 selection:bg-sonar-light selection:text-ocean-950">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <UseCases />
        <CaseStudies />
        <Integration />
        <SonarDemo />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;