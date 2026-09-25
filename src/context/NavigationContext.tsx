import React, { createContext, useContext, useState, useEffect } from 'react';

export type RoutePath =
  | '/'
  | '/about'
  | '/about/'
  | '/leadership'
  | '/leadership/'
  | '/capabilities'
  | '/impact'
  | '/press'
  | '/partner'
  | string;

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
  isTransitioning: boolean;
  selectedLeaderSlug: string | null;
  openLeaderProfile: (slug: string) => void;
  closeLeaderProfile: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const parsePath = (pathname: string): { cleanPath: string; leaderSlug: string | null } => {
    const p = pathname.toLowerCase();
    const leaderMatch = p.match(/^\/people\/([a-z0-9-]+)\/?$/);
    if (leaderMatch) {
      let slug = leaderMatch[1];
      if (slug === 'steve-choppen') {
        slug = 'stephen-choppen';
      }
      return { cleanPath: `/people/${slug}`, leaderSlug: slug };
    }
    const trimmed = p.replace(/\/$/, '') || '/';
    if (trimmed === '/about' || trimmed === 'about') {
      return { cleanPath: '/about', leaderSlug: null };
    }
    if (trimmed === '/leadership' || trimmed === 'leadership' || trimmed === '/people' || trimmed === 'people') {
      return { cleanPath: '/leadership', leaderSlug: null };
    }
    return { cleanPath: trimmed, leaderSlug: null };
  };

  const initial = parsePath(window.location.pathname);
  const [currentPath, setCurrentPath] = useState<string>(initial.cleanPath);
  const [selectedLeaderSlug, setSelectedLeaderSlug] = useState<string | null>(initial.leaderSlug);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      const { cleanPath, leaderSlug } = parsePath(window.location.pathname);
      setCurrentPath(cleanPath);
      setSelectedLeaderSlug(leaderSlug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    const { cleanPath, leaderSlug } = parsePath(path);

    if (cleanPath === currentPath && leaderSlug === selectedLeaderSlug) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsTransitioning(true);

    const targetUrl = leaderSlug ? `/people/${leaderSlug}/` : cleanPath === '/about' ? '/about/' : cleanPath === '/leadership' ? '/leadership/' : cleanPath;
    window.history.pushState({}, '', targetUrl);

    setTimeout(() => {
      setCurrentPath(cleanPath);
      setSelectedLeaderSlug(leaderSlug);
      updatePageTitle(cleanPath, leaderSlug);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 380);
  };

  const openLeaderProfile = (slug: string) => {
    navigate(`/people/${slug}/`);
  };

  const closeLeaderProfile = () => {
    navigate('/leadership/');
  };

  const updatePageTitle = (path: string, leaderSlug: string | null) => {
    if (leaderSlug) {
      const formatted = leaderSlug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      document.title = `${formatted} - Leadership | Choice Foods Group`;
      return;
    }

    const titles: Record<string, string> = {
      '/': 'Choice Foods Group - Purpose-Driven Global Food & Seafood Company',
      '/about': 'About Choice - Our Story, Heritage & Leadership | Choice Foods Group',
      '/leadership': 'Leadership - 11 Executive Stewards & Directors | Choice Foods Group',
      '/capabilities': 'Capabilities - Value Added, Recipe Development & Private Label | Choice Foods',
      '/impact': 'Impact & Responsibility - A Legacy of Integrity | Choice Foods',
      '/press': 'Press & News - Thought Leadership & Media | Choice Foods',
      '/partner': 'Partner With Us - Global Seafood & Food Supply Solutions | Choice Foods',
    };
    document.title = titles[path] || 'Choice Foods Group';
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        isTransitioning,
        selectedLeaderSlug,
        openLeaderProfile,
        closeLeaderProfile,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
