
export type DigitalMaturity = 'Ad-hoc' | 'Defined' | 'Optimized';
export type OperatingModel = 'Cost Center' | 'Shared Services' | 'Innovation Hub';
export type EntityType = 'Pvt Ltd' | 'LLP' | 'Branch';
export type InvolvementLevel = 'Advisory' | 'Co-delivery' | 'Managed Services';

export interface TechState {
  platforms: string[];
  stacks: string[];
  cloudStrategy: string;
  aiUseCases: string[];
  customPlatform?: string;
  customStack?: string;
  customAiUseCase?: string;
}

export interface NavigatorState {
  mission: {
    industry: string;
    companyName: string;
    goals: string[];
    maturity: DigitalMaturity;
    timeline: string;
  };
  vision: {
    model: OperatingModel;
    objective: string;
    valueProposition: string;
    differentiation: string;
    kpis: string[];
  };
  tech: TechState;
  team: {
    headcount: number;
    budget: string;
    location: string;
    workModel: string;
    talentChannels: string[];
    cultureFrameworks: string[];
    infrastructure: string[];
  };
  governance: {
    entityType: EntityType;
    parentIntegration: string;
    complianceStandards: string[];
    ipOwnership: string;
    reportingCadence: string;
    riskMitigation: string[];
    ecosystemPartners: string[];
  };
  partner: {
    involvement: InvolvementLevel;
    duration: string;
    authority: string;
    cadence: string;
    services: string[];
    outcomes: string[];
  };
}

export interface IndustryData {
  industry: string;
  headcount: string;
  csat: string;
  attrition: string;
}

export interface GlobalLeader {
  name: string;
  headcount: string;
  focus: string;
}
