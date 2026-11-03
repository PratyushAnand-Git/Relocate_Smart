import React from 'react';
import { ShieldCheck, MapPin, Scale, AlertCircle } from 'lucide-react';
import { CityId } from '../types';
import { CITIES } from '../data/citiesData';

interface HeaderProps {
  selectedCityId: CityId;
  onSelectCity: (id: CityId) => void;
  onOpenGRO: () => void;
  onOpenAlertModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  selectedCityId,
  onSelectCity,
  onOpenGRO,
  onOpenAlertModal,
}) => {

  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
            <MapPin className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight text-white">Relocate<span className="text-orange-500">Smart</span></span>
              <span className="px-2 py-0.5 text-[11px] font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/30 rounded-full">
                Bharat Civic AI
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Commute & Civic Intelligence for Indian Job Seekers</p>
          </div>
        </div>

        {/* City Switcher */}
        <div className="flex items-center space-x-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
          <span className="text-xs font-semibold text-slate-400 px-2 flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-orange-400" /> City:
          </span>
          <select
            value={selectedCityId}
            onChange={(e) => onSelectCity(e.target.value as CityId)}
            className="bg-slate-900 text-sm font-medium text-slate-200 border border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
          >
            {CITIES.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name} ({city.state} - {city.tier})
              </option>
            ))}
          </select>
        </div>

        {/* Quick Legal Actions & Compliance Badges */}
        <div className="flex items-center space-x-2 text-xs">
          <button
            onClick={onOpenAlertModal}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg flex items-center gap-1.5 transition-colors font-medium shadow-sm"
            title="Submit citation-backed civic alert"
          >
            <AlertCircle className="h-3.5 w-3.5 text-amber-400" />
            <span>Report Verified Alert</span>
          </button>

          <button
            onClick={onOpenGRO}
            className="px-3 py-1.5 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-800/60 rounded-lg flex items-center gap-1.5 transition-colors font-medium"
            title="DPDPA & IT Rules 2021 Safe Harbor Grievance Officer"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Grievance Officer (GRO)</span>
          </button>
        </div>
      </div>

      {/* Statutory Safe Harbor Banner */}
      <div className="bg-slate-950/90 border-t border-slate-800/70 px-4 py-1 text-center text-[11px] text-slate-400 flex items-center justify-center gap-2">
        <Scale className="h-3 w-3 text-orange-400 inline" />
        <span>
          <strong>Legal Safe Harbor Notice:</strong> RelocateSmart operates strictly as an Algorithmic Public Data Aggregator (IT Act §79). Data sourced from official municipal portals & NCRB. Not a RERA-registered real estate broker.
        </span>
      </div>
    </header>
  );
};
