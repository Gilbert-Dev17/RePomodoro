'use client';

import React, {useState, useEffect} from 'react'

const FloatinSidebar = () => {
  return (
    <div>FloatinSidebar</div>
  )
}

export default FloatinSidebar

interface FloatingSidebarProps {
  navigate: (page: string, articleId?: string | null) => void;
  activePage?: string;
}

const FloatingSidebar = ({ navigate, activePage = 'landing' }: FloatingSidebarProps) => {
  const [scrolledSection, setScrolledSection] = useState<string>('philosophy');

  useEffect(() => {
    if (activePage !== 'landing') return;
    const sections = ['philosophy', 'features', 'faq'];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setScrolledSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, [activePage]);

  const handleScrollTo = (id: string) => {
    if (activePage !== 'landing') {
      navigate('landing');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getNavClass = (id: string) => {
    if (activePage !== 'landing') return 'text-[#A08878] hover:text-[#2E2017]';
    return scrolledSection === id ? 'text-[#C9523A]' : 'text-[#A08878] hover:text-[#2E2017]';
  };

  return (
    <aside className="flex flex-col sticky top-32 w-full gap-10 pt-4 pb-12 h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
      <div>
        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9523A] mb-4">Overview</h4>
        <div className="flex flex-col gap-5">
          <button onClick={() => handleScrollTo('philosophy')} className={`text-left text-lg font-medium transition-colors ${getNavClass('philosophy')}`}>Philosophy</button>
          <button onClick={() => handleScrollTo('features')} className={`text-left text-lg font-medium transition-colors ${getNavClass('features')}`}>Features</button>
          <button onClick={() => handleScrollTo('faq')} className={`text-left text-lg font-medium transition-colors ${getNavClass('faq')}`}>FAQ</button>
        </div>
      </div>
      <div>
        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9523A] mb-4">Resources</h4>
        <div className="flex flex-col gap-5">
          <button onClick={() => navigate('journal')} className={`text-left text-lg font-medium transition-colors ${activePage === 'journal' || activePage === 'article' ? 'text-[#C9523A]' : 'text-[#A08878] hover:text-[#2E2017]'}`}>The Journal</button>
          <button onClick={() => navigate('about')} className={`text-left text-lg font-medium transition-colors ${activePage === 'about' ? 'text-[#C9523A]' : 'text-[#A08878] hover:text-[#2E2017]'}`}>About Us</button>
        </div>
      </div>
    </aside>
  );
};