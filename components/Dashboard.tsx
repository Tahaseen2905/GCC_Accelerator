
import React, { useState } from 'react';
import { NavigatorState } from '../types';
import { GLOBAL_LEADERS } from '../constants';
import { motion } from 'framer-motion';
import { Search, Download, Share2, RefreshCw, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface DashboardProps {
  state: NavigatorState;
  onReset: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ state, onReset }) => {
  const [search, setSearch] = useState('');

  const heatmapData = [
    { subject: 'Technology', user: 75, peer: 85, fullMark: 100 },
    { subject: 'AI Maturity', user: 45, peer: 60, fullMark: 100 },
    { subject: 'Talent', user: 80, peer: 75, fullMark: 100 },
    { subject: 'Governance', user: 65, peer: 80, fullMark: 100 },
    { subject: 'Process', user: 90, peer: 82, fullMark: 100 },
  ];

  const timelineData = [
    { month: 'M1-2', score: 20, name: 'MVP Pilot' },
    { month: 'M3-4', score: 45, name: 'Beta AI' },
    { month: 'M5-6', score: 70, name: 'GA Launch' },
    { month: 'M7-12', score: 100, name: 'Scale & API' },
  ];

  const filteredLeaders = GLOBAL_LEADERS.filter(l => 
    l.name.toLowerCase().includes(search.toLowerCase()) || 
    l.focus.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-teal-900 tracking-tight">Diagnostic Roadmap</h1>
          {/* Use state.mission.industry instead of companyProfile as it exists in the NavigatorState type */}
          <p className="text-gray-500 font-medium">Strategic GCC Blueprint for {state.mission.industry || 'Your Organization'}</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
            <Download className="w-4 h-4" />
            <span>PDF</span>
          </button>
          <button className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button 
            onClick={onReset}
            className="flex items-center space-x-2 bg-red-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Recalibrate</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Heatmap Section */}
        <div className="lg:col-span-1 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">Maturity Heatmap</h3>
            <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-wider">
                <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-teal-500 mr-1.5"></span> User</div>
                <div className="flex items-center"><span className="w-2 h-2 rounded-full bg-gray-300 mr-1.5"></span> Peer</div>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={heatmapData}>
                <PolarGrid stroke="#f3f4f6" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} axisLine={false} tick={false} />
                <Radar name="User" dataKey="user" stroke="#0d9488" fill="#0d9488" fillOpacity={0.6} />
                <Radar name="Peer" dataKey="peer" stroke="#d1d5db" fill="#d1d5db" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 p-4 bg-teal-50 rounded-2xl border border-teal-100 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs font-medium text-teal-800 leading-relaxed">
              Based on your Tech Arsenal selection, you are <span className="font-bold">15% ahead</span> in Talent Readiness but trailing in AI Governance maturity compared to IT GCC peers.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">Implementation Timeline</h3>
            <TrendingUp className="w-5 h-5 text-teal-600" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={timelineData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600, fill: '#6b7280' }} />
                <YAxis hide domain={[0, 120]} />
                <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    itemStyle={{ fontSize: '12px', fontWeight: 700 }}
                />
                <Area type="monotone" dataKey="score" stroke="#0d9488" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {timelineData.map(d => (
                <div key={d.month} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest">{d.month}</p>
                    <p className="text-sm font-bold text-gray-900 mt-1">{d.name}</p>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Leaders Table Section */}
      <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Global Innovation Hub Benchmarks</h3>
            <p className="text-sm text-gray-500">Compare your scale-up trajectory against industry leaders in India.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text"
              placeholder="Search companies or focus areas..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-100 focus:ring-2 focus:ring-teal-500 outline-none transition-all shadow-sm"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50">
                <th className="pb-4 px-4 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Company</th>
                <th className="pb-4 px-4 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">India Headcount</th>
                <th className="pb-4 px-4 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Strategic Focus</th>
                <th className="pb-4 px-4 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Alignment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredLeaders.map((leader, idx) => (
                <motion.tr 
                    key={leader.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="py-6 px-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center font-bold text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                            {leader.name.charAt(0)}
                        </div>
                        <span className="font-bold text-gray-900">{leader.name}</span>
                    </div>
                  </td>
                  <td className="py-6 px-4 font-semibold text-gray-600">{leader.headcount}</td>
                  <td className="py-6 px-4">
                    <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full border border-red-100">{leader.focus}</span>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center text-teal-600 font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        <span>High Match</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
