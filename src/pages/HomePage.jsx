import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsStrip } from '../components/home/StatsStrip';
import { PresenceMap } from '../components/home/PresenceMap';
import { FounderQuote } from '../components/home/FounderQuote';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { QuickEnquiry } from '../components/home/QuickEnquiry';

export const HomePage = () => {
  return (
    <div className="fade-in">
      <HeroSection />
      <StatsStrip />
      <PresenceMap />
      <FounderQuote />
      <FeaturedProjects />
      <QuickEnquiry />
    </div>
  );
};
