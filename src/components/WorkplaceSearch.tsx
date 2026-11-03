import React from 'react';
import { Briefcase, Clock, IndianRupee, HeartPulse, ShieldAlert, Building2, Search } from 'lucide-react';
import { OfficeAnchor, BudgetTier } from '../types';

interface WorkplaceSearchProps {
  officeAnchors: OfficeAnchor[];
  selectedOffice: OfficeAnchor;
  onSelectOffice: (office: OfficeAnchor) => void;
  commuteLimitMinutes: number;
  onCommuteLimitChange: (val: number) => void;
  selectedBudget: BudgetTier | 'all';
  onBudgetChange: (val: BudgetTier | 'all') => void;
  requireHospitalWithin3km: boolean;
  onRequireHospitalChange: (val: boolean) => void;
  requirePoliceDeskWithin2km: boolean;
  onRequirePoliceChange: (val: boolean) => void;
  onOpenWorkplaceIntel: () => void;
}

export const WorkplaceSearch: React.FC<WorkplaceSearchProps> = ({
  officeAnchors,
  selectedOffice,
  onSelectOffice,
  commuteLimitMinutes,
  onCommuteLimitChange,
  selectedBudget,
  onBudgetChange,
  requireHospitalWithin3km,
  onRequireHospitalChange,
  requirePoliceDeskWithin2km,
  onRequirePoliceChange,
  onOpenWorkplaceIntel,
}) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Title & Workplace Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/20">
            Smart Commute & Locality Engine
          </span>
          <h2 className="text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-orange-500" />
            Where is your workplace?
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Select your work anchor to match macro-residential zones within rush-hour tolerance and essential safety buffers.
          </p>
        </div>

        {/* View Workplace Civic Intel Button */}
        <button
          onClick={onOpenWorkplaceIntel}
          className="self-start md:self-auto px-3.5 py-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-semibold rounded-xl flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
        >
          <Building2 className="h-4 w-4" />
          <span>Know Your Workplace & Police Desk</span>
        </button>
      </div>

      {/* Form Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {/* 1. Office Selection */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Search className="h-3.5 w-3.5 text-orange-400" /> Target Workplace / Commercial Zone
          </label>
          <select
            value={selectedOffice.id}
            onChange={(e) => {
              const found = officeAnchors.find((o) => o.id === e.target.value);
              if (found) onSelectOffice(found);
            }}
            className="w-full bg-slate-950 text-slate-200 text-xs font-medium border border-slate-700 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
          >
            {officeAnchors.map((office) => (
              <option key={office.id} value={office.id}>
                {office.name}
              </option>
            ))}
          </select>
          <p className="text-[11px] text-slate-500 mt-1 truncate">
            {selectedOffice.address}
          </p>
        </div>

        {/* 2. Commute Tolerance Slider (9:00 AM Rush Hour) */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-orange-400" /> Max Commute (9 AM Rush Hour)
            </label>
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-300 border border-orange-500/30">
              ≤ {commuteLimitMinutes} mins
            </span>
          </div>
          <input
            type="range"
            min={10}
            max={45}
            step={5}
            value={commuteLimitMinutes}
            onChange={(e) => onCommuteLimitChange(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
          <div className="flex justify-between text-[10px] text-slate-500 mt-1">
            <span>10 min (Walk/Cycle)</span>
            <span>25 min (Balanced)</span>
            <span>45 min (Extended)</span>
          </div>
        </div>

        {/* 3. Budget Bracket Filter */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <IndianRupee className="h-3.5 w-3.5 text-orange-400" /> Lifestyle / Budget Scale
          </label>
          <div className="grid grid-cols-4 gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
            {(['all', 'affordable', 'balanced', 'executive'] as const).map((b) => (
              <button
                key={b}
                onClick={() => onBudgetChange(b)}
                className={`py-1.5 rounded-lg font-medium capitalize text-[11px] transition-all ${
                  selectedBudget === b
                    ? 'bg-orange-600 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
          <p className="text-[10px] text-slate-500 mt-1">
            *Macro locality estimates only. Platform does not broker properties.
          </p>
        </div>
      </div>

      {/* Amenity Priority Toggles */}
      <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold text-slate-400">Essential Life Buffers:</span>
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 hover:border-slate-700">
            <input
              type="checkbox"
              checked={requireHospitalWithin3km}
              onChange={(e) => onRequireHospitalChange(e.target.checked)}
              className="rounded bg-slate-800 border-slate-700 text-orange-600 focus:ring-0 focus:ring-offset-0"
            />
            <HeartPulse className="h-3.5 w-3.5 text-rose-400" />
            <span>Emergency Hospital &lt; 3 km</span>
          </label>

          <label className="flex items-center space-x-2 text-xs text-slate-300 cursor-pointer bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 hover:border-slate-700">
            <input
              type="checkbox"
              checked={requirePoliceDeskWithin2km}
              onChange={(e) => onRequirePoliceChange(e.target.checked)}
              className="rounded bg-slate-800 border-slate-700 text-orange-600 focus:ring-0 focus:ring-offset-0"
            />
            <ShieldAlert className="h-3.5 w-3.5 text-sky-400" />
            <span>Police Desk &lt; 2 km</span>
          </label>
        </div>
      </div>
    </div>
  );
};
