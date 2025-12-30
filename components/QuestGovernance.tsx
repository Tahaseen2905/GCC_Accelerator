import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Scale, Globe, FileCheck, Shield, Users, Briefcase, Check } from 'lucide-react';
import { InteractiveFloat } from './InteractiveFloat';
import { EntityType } from '../types';

import Float1 from "@/src/assets/pages/solutions/analytics/Hero Section/Hero.png"


interface QuestGovernanceProps {
  entityType: EntityType;
  parentIntegration: string;
  complianceStandards: string[];
  ipOwnership: string;
  reportingCadence: string;
  riskMitigation: string[];
  ecosystemPartners: string[];
  onUpdate: (data: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const QuestGovernance: React.FC<QuestGovernanceProps> = ({
  entityType,
  parentIntegration,
  complianceStandards,
  ipOwnership,
  reportingCadence,
  riskMitigation,
  ecosystemPartners,
  onUpdate,
  onNext,
  onPrev
}) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < 2) setStep(s => s + 1);
    else onNext();
  };

  const handlePrev = () => {
    if (step > 0) setStep(s => s - 1);
    else onPrev();
  };

  const toggleArrayItem = (field: string, current: string[], item: string) => {
    const updated = current.includes(item)
      ? current.filter(i => i !== item)
      : [...current, item];
    onUpdate({ [field]: updated });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col h-full w-full overflow-hidden"
    >
      <div className="flex-1 p-1 overflow-hidden flex flex-col relative bg-white justify-center">
        <AnimatePresence mode="wait">
          {/* Step 0: Structure (Entity & IP) */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4 h-full flex flex-col justify-center max-w-lg mx-auto w-full"
            >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-3 flex items-center gap-4 shrink-0 shadow-[4px_4px_10px_rgba(13,148,136,0.05)] mb-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-[4px_4px_8px_rgba(13,148,136,0.3),-2px_-2px_4px_rgba(255,255,255,0.5)_inset]">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-teal-900">Legal Structure</h3>
                  <p className="text-teal-700 text-xs mt-0.5 leading-relaxed">Define entity type and IP ownership.</p>
                </div>
                <div className="ml-auto w-16 h-16 hidden md:block">
                  <InteractiveFloat src={Float1} alt="Governance Float" />
                </div>
              </motion.div>

              <div className="space-y-3">
                <label className="flex items-center text-xs font-bold text-gray-700 uppercase tracking-widest">
                  <Building2 className="w-4 h-4 mr-2 text-teal-600" />
                  Entity Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Pvt Ltd', 'LLP', 'Branch'] as EntityType[]).map(type => (
                    <button
                      key={type}
                      onClick={() => onUpdate({ entityType: type })}
                      className={`py-3 rounded-xl border font-bold text-xs transition-all ${entityType === type ? 'bg-teal-600 border-teal-600 text-white shadow-md' : 'bg-white border-gray-100 text-gray-500 hover:border-teal-200'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex items-center text-xs font-bold text-gray-700 uppercase tracking-widest">
                  <Globe className="w-4 h-4 mr-2 text-teal-600" />
                  IP Ownership Model
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Global HQ Owned', 'Local Entity Owned', 'Hybrid Licensing', 'Cost+ Transfer'].map(ip => (
                    <button
                      key={ip}
                      onClick={() => onUpdate({ ipOwnership: ip })}
                      className={`p-3 rounded-xl border text-left text-[11px] font-bold transition-all ${ipOwnership === ip ? 'bg-teal-50 border-teal-500 text-teal-900' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'}`}
                    >
                      {ip}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 1: Compliance & Reporting */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4 h-full flex flex-col justify-center max-w-2xl mx-auto w-full"
            >
              <div className="text-center mb-4">
                <h3 className="text-base font-bold text-gray-900">Compliance & Controls</h3>
                <p className="text-xs text-gray-500">Regulatory standards and reporting</p>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-xs font-bold text-gray-700 uppercase tracking-widest">
                  <Scale className="w-4 h-4 mr-2 text-teal-600" />
                  Key Compliance Standards
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['GDPR', 'ISO 27001', 'SOC 2 Type II', 'HIPAA', 'CCPA', 'Local Labor Laws'].map(std => {
                    const active = complianceStandards.includes(std);
                    return (
                      <button
                        key={std}
                        onClick={() => toggleArrayItem('complianceStandards', complianceStandards, std)}
                        className={`flex items-center justify-between p-2.5 rounded-lg border transition-all ${active ? 'bg-green-50 border-green-200' : 'bg-white border-gray-100 hover:bg-gray-50'}`}
                      >
                        <span className={`text-[11px] font-bold ${active ? 'text-green-800' : 'text-gray-500'}`}>{std}</span>
                        {active && <FileCheck className="w-3.5 h-3.5 text-green-600" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-xs font-bold text-gray-700 uppercase tracking-widest">
                  HQ Reporting Cadence
                </label>
                <div className="flex bg-gray-100 p-1 rounded-lg">
                  {['Weekly', 'Monthly', 'Quarterly'].map(c => (
                    <button
                      key={c}
                      onClick={() => onUpdate({ reportingCadence: c })}
                      className={`flex-1 py-1.5 rounded-md text-xs font-bold transition-all ${reportingCadence === c ? 'bg-white text-teal-700 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Risk & Ecosystem */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4 h-full flex flex-col justify-center max-w-4xl mx-auto w-full"
            >
              <div className="text-center mb-4">
                <h3 className="text-base font-bold text-gray-900">Risk & Ecosystem</h3>
                <p className="text-xs text-gray-500">Mitigation strategies and external partners</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-3 rounded-xl border border-red-100 space-y-2">
                  <label className="flex items-center text-xs font-bold text-red-900 uppercase tracking-widest">
                    <Shield className="w-4 h-4 mr-2" />
                    Risk Mitigation
                  </label>
                  <div className="space-y-1.5">
                    {['Cyber Insurance', 'BCP / DR Drill', 'Legal Counsel Retainer', 'Fx Hedging'].map(r => {
                      const active = riskMitigation.includes(r);
                      return (
                        <button
                          key={r}
                          onClick={() => toggleArrayItem('riskMitigation', riskMitigation, r)}
                          className={`w-full text-left flex items-center p-2 rounded-lg transition-all ${active ? 'bg-white shadow-sm text-red-800 font-bold' : 'text-red-400 hover:bg-red-100'}`}
                        >
                          <div className={`w-3.5 h-3.5 rounded border mr-2 flex items-center justify-center ${active ? 'border-red-500 bg-red-500' : 'border-red-200'}`}>
                            {active && <Check className="w-2.5 h-2.5 text-white" />}
                          </div>
                          <span className="text-[11px]">{r}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 p-3 border border-gray-100 rounded-xl">
                  <label className="flex items-center text-xs font-bold text-gray-700 uppercase tracking-widest">
                    <Users className="w-4 h-4 mr-2 text-teal-600" />
                    Ecosystem Partners
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Universities', 'Startups', 'Accelerators', 'Govt Bodies', 'Investors'].map(p => {
                      const active = ecosystemPartners.includes(p);
                      return (
                        <button
                          key={p}
                          onClick={() => toggleArrayItem('ecosystemPartners', ecosystemPartners, p)}
                          className={`px-3 py-1.5 rounded-full border text-[11px] font-bold transition-all ${active ? 'bg-teal-600 border-teal-600 text-white' : 'bg-white border-gray-100 text-gray-500 hover:border-gray-300'}`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="p-2 border-t border-gray-50 flex items-center justify-between shrink-0 mt-auto">
        <button
          onClick={handlePrev}
          className="flex items-center space-x-2 font-bold px-4 py-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="text-xs">Previous</span>
        </button>
        <div className="flex space-x-1">
          {[0, 1, 2].map(i => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${step === i ? 'bg-teal-500' : 'bg-gray-200'}`} />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-teal-200 hover:shadow-teal-300 transition-all active:scale-95"
        >
          <span className="text-xs">Next Step</span>
        </button>
      </div>
    </motion.div>
  );
};
