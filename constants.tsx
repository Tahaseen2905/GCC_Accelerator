
import React from 'react';
import { IndustryData, GlobalLeader } from './types';
import { Shield, Rocket, Target, Users, Zap, Briefcase } from 'lucide-react';

export const INDUSTRIES: IndustryData[] = [
  { industry: 'BFSI', headcount: '~5.4 Lakhs', csat: '92%', attrition: '12%-15%' },
  { industry: 'IT', headcount: '~10 Lakhs', csat: '95%', attrition: '15%-20%' },
  { industry: 'Healthcare', headcount: '~4.2 Lakhs', csat: '89%', attrition: '10%-13%' },
  { industry: 'Automotive', headcount: '~1.1 Lakhs', csat: '90%', attrition: '16%-22%' },
];

export const EVOLUTION_STAGES = [
  { id: 'entry', title: 'Entry (Advisory)', details: 'Foundation, Site Selection, Entity Registration', icon: <Target className="w-6 h-6" /> },
  { id: 'growth', title: 'Growth (Setup)', details: 'Scaling, Talent Ramp-up, Governance', icon: <Rocket className="w-6 h-6" /> },
  { id: 'mature', title: 'Mature (Workforce)', details: 'Process Excellence, Innovation Hubs', icon: <Users className="w-6 h-6" /> },
  { id: 'transform', title: 'Transform (Managed)', details: 'Strategic Shift, Digitalization, AI/ML', icon: <Zap className="w-6 h-6" /> },
];

export const GLOBAL_LEADERS: GlobalLeader[] = [
  { name: 'JPMorgan Chase & Co', headcount: '55,000+', focus: 'AI/Blockchain' },
  { name: 'Goldman Sachs', headcount: '9,500+', focus: 'Innovation Incubator' },
  { name: 'Bosch', headcount: '31,000+', focus: 'Global R&D Center' },
  { name: 'Microsoft', headcount: '18,000+', focus: 'AI/ML Research Hub' },
];

export const QUEST_CONFIG = [
  { id: 1, title: 'Mission', icon: <Target className="w-5 h-5" /> },
  { id: 2, title: 'Vision', icon: <Rocket className="w-5 h-5" /> },
  { id: 3, title: 'Tech Arsenal', icon: <Briefcase className="w-5 h-5" /> },
  { id: 4, title: 'Build Your Team', icon: <Users className="w-5 h-5" /> },
  { id: 5, title: 'Governance', icon: <Shield className="w-5 h-5" /> },
  { id: 6, title: 'Partnership', icon: <Zap className="w-5 h-5" /> },
];
