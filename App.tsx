import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Hero from './components/Hero';
import { About, Skills, EducationAndCerts } from './components/ContentSections';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Wrapper for internal pages to add top padding for fixed navbar
const PageLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="pt-20">
    {children}
  </div>
);

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white transition-colors duration-300">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={
              <PageLayout>
                <About />
                <EducationAndCerts />
              </PageLayout>
            } />
            <Route path="/skills" element={
              <PageLayout>
                <Skills />
              </PageLayout>
            } />
            <Route path="/experience" element={
              <PageLayout>
                <Experience />
              </PageLayout>
            } />
            <Route path="/projects" element={
              <PageLayout>
                <Projects />
              </PageLayout>
            } />
            <Route path="/contact" element={
              <PageLayout>
                <Contact />
              </PageLayout>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;