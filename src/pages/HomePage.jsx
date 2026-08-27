import React from 'react';
import { ScrollVideoSection } from '../components/home/ScrollVideoSection';
import { StatsStrip } from '../components/home/StatsStrip';
import { PresenceMap } from '../components/home/PresenceMap';
import { FounderQuote } from '../components/home/FounderQuote';
import { InteractiveTimeline } from '../components/home/InteractiveTimeline';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { QuickEnquiry } from '../components/home/QuickEnquiry';

export const HomePage = () => {
  return (
    <div className="fade-in">
      <ScrollVideoSection />
      <StatsStrip />
      <PresenceMap />
      <FounderQuote />
      <InteractiveTimeline />
      <FeaturedProjects />
      <QuickEnquiry />
    </div>
  );
};


