import React, { useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { useGsap } from './hooks/useGsap';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { PageLoader } from './components/ui/PageLoader';
import { CustomCursor } from './components/ui/CustomCursor';
import { PageTransitionOverlay } from './components/ui/PageTransition';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { ImpactPage } from './pages/ImpactPage';
import { PressPage } from './pages/PressPage';
import { PartnerPage } from './pages/PartnerPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { LeaderProfilePage } from './components/about/LeaderProfilePage';

const AppContent: React.FC = () => {
  const { currentPath, selectedLeaderSlug, isTransitioning } = useNavigation();
  const { scrollTo, refreshScrollTrigger } = useGsap();

  // Scroll to top and refresh ScrollTrigger instances on path changes
  useEffect(() => {
    scrollTo(0, { immediate: true });
    // Slight tick to ensure new DOM elements have rendered
    const timer = setTimeout(() => {
      refreshScrollTrigger();
    }, 50);
    return () => clearTimeout(timer);
  }, [currentPath, selectedLeaderSlug, scrollTo, refreshScrollTrigger]);

  const renderCurrentPage = () => {
    // If a leadership profile route is requested (/people/:slug)
    if (selectedLeaderSlug) {
      return <LeaderProfilePage slug={selectedLeaderSlug} />;
    }

    if (currentPath.startsWith('/people/') && currentPath !== '/people/' && currentPath !== '/people') {
      const slug = currentPath.replace(/^\/people\//, '').replace(/\/$/, '');
      return <LeaderProfilePage slug={slug} />;
    }

    switch (currentPath) {
      case '/leadership':
      case '/leadership/':
      case '/people':
      case '/people/':
        return <LeadershipPage />;
      case '/about':
      case '/about/':
        return <AboutPage />;
      case '/capabilities':
      case '/capabilities/':
        return <CapabilitiesPage />;
      case '/impact':
      case '/impact/':
        return <ImpactPage />;
      case '/press':
      case '/press/':
        return <PressPage />;
      case '/partner':
      case '/partner/':
        return <PartnerPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#141413] relative selection:bg-[#141413] selection:text-white">
      {/* 2. Page Loading Experience (0.8-1.2s horizontal letters, upward foods, line expand, clip-path wipe) */}
      <PageLoader />

      {/* 6. Desktop Custom Cursor */}
      <CustomCursor />

      {/* 36. Page Transition Overlay */}
      <PageTransitionOverlay />

      {/* Global Navigation Header */}
      <Header />

      {/* Main Page Area */}
      <main
        className={`flex-grow w-full transition-opacity duration-300 ease-out ${
          isTransitioning ? 'opacity-40' : 'opacity-100'
        }`}
      >
        {renderCurrentPage()}
      </main>

      {/* Global Editorial Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
