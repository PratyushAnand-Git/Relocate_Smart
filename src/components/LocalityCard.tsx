import React from 'react';
import { 
  Clock, 
  HeartPulse, 
  ShieldCheck, 
  ExternalLink, 
  FileEdit, 
  AlertTriangle, 
  CheckCircle2, 
  Bus, 
  HelpCircle
} from 'lucide-react';
import { Locality } from '../types';

interface LocalityCardProps {
  locality: Locality;
  officeName: string;
  onDraftGrievance: (locality: Locality) => void;
}

export const LocalityCard: React.FC<LocalityCardProps> = ({
  locality,
  officeName,
  onDraftGrievance,
}) => {
  const { civicData, amenities, keyTradeoffs } = locality;

  // Discrepancy badge styling
  const getDiscrepancyBadge = () => {
    switch (civicData.prDiscrepancyLevel) {
      case 'High':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/15 text-rose-300 border border-rose-500/30">
            <AlertTriangle className="h-3 w-3 text-rose-400" /> High PR-Reality Gap
          </span>
        );
      case 'Moderate':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <AlertTriangle className="h-3 w-3 text-amber-400" /> Moderate Discrepancy
          </span>
        );
      case 'Low':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 className="h-3 w-3 text-emerald-400" /> Data Aligned
          </span>
        );
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg hover:border-slate-700 transition-all flex flex-col justify-between">
      <div>
        {/* Header: Name, Budget, Discrepancy */}
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg font-bold text-white">{locality.name}</h3>
              <span className="px-2 py-0.5 text-[11px] font-semibold bg-slate-800 text-slate-300 rounded-md border border-slate-700 capitalize">
                {locality.budgetTier} Tier
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Est. Rental Band: <span className="font-semibold text-slate-200">{locality.approxRentBand}</span>
            </p>
          </div>

          <div className="text-right">
            <div className="text-xs text-slate-400">Civic Reality Index</div>
            <div className="text-lg font-extrabold text-orange-400 flex items-center justify-end gap-1">
              <span>{locality.civicIndexScore}</span>
              <span className="text-xs text-slate-500 font-normal">/ 10</span>
            </div>
          </div>
        </div>

        {/* Commute & Medical Matrix Grid */}
        <div className="grid grid-cols-2 gap-3 my-4">
          {/* Commute Box */}
          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
              <Clock className="h-3.5 w-3.5 text-orange-400" /> 9:00 AM Peak Commute
            </div>
            <div className="text-lg font-bold text-white">
              ~{locality.estimatedRushHourMinutes} <span className="text-xs font-normal text-slate-400">mins</span>
            </div>
            <div className="text-[11px] text-slate-500">
              Off-peak: {locality.offPeakMinutes} mins to {officeName.split(' ')[0]}
            </div>
          </div>

          {/* Hospital & Trauma Box */}
          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-1">
              <HeartPulse className="h-3.5 w-3.5 text-rose-400" /> Emergency Health
            </div>
            <div className="text-lg font-bold text-white">
              {amenities.hospitalsWithin3km} <span className="text-xs font-normal text-slate-400">within 3 km</span>
            </div>
            <div className="text-[11px] text-slate-400 truncate" title={amenities.nearestHospital.name}>
              {amenities.nearestHospital.name} ({amenities.nearestHospital.distanceKm} km)
            </div>
          </div>
        </div>

        {/* Public Transit & Police Desk Distance */}
        <div className="space-y-1.5 text-xs bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/60 mb-4">
          <div className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Bus className="h-3.5 w-3.5 text-amber-400" /> Transit:
            </span>
            <span className="font-medium text-slate-200 text-right truncate max-w-[200px]" title={amenities.metroOrArterialBus}>
              {amenities.metroOrArterialBus}
            </span>
          </div>
          <div className="flex items-center justify-between text-slate-300">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-400" /> Police Desk:
            </span>
            <span className="font-medium text-slate-200">
              Official station desk {amenities.policeDeskWikiKm} km away
            </span>
          </div>
        </div>

        {/* PR vs Ground Reality Discrepancy Box */}
        <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 mb-4">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold text-slate-300 flex items-center gap-1">
              Civic Transparency & PR Audit
            </span>
            {getDiscrepancyBadge()}
          </div>

          <div className="space-y-2 text-xs">
            <div className="text-slate-400 text-[11px]">
              <span className="font-semibold text-slate-300">Promotional Narrative:</span> {civicData.prClaimSummary}
            </div>
            <div className="text-slate-300 text-[11px] bg-slate-900/90 p-2 rounded-lg border border-slate-800">
              <span className="font-semibold text-orange-400">Ground Reality Records:</span> {civicData.groundRealitySummary}
            </div>
          </div>

          {/* Source Link & Verification Citation */}
          <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
            <span className="text-slate-500">
              Open Tickets (90d): <strong className="text-slate-300">{civicData.openComplaints90Days}</strong> | Res: <strong className="text-emerald-400">{civicData.resolutionRatePercent}%</strong>
            </span>
            <a
              href={civicData.dataSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 flex items-center gap-1 font-medium hover:underline"
              title={`Public record: ${civicData.auditTicketId}`}
            >
              <span>{civicData.dataSourceName}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Trade-offs Section (Advantages & Nuances) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-xs">
          <div className="bg-emerald-950/20 border border-emerald-900/30 p-2.5 rounded-xl">
            <div className="font-semibold text-emerald-400 mb-1 flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" /> Why It Works
            </div>
            <ul className="space-y-1 text-slate-300 text-[11px]">
              {keyTradeoffs.advantages.map((adv, idx) => (
                <li key={idx} className="flex items-start gap-1">
                  <span className="text-emerald-500">•</span>
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-950/20 border border-amber-900/30 p-2.5 rounded-xl">
            <div className="font-semibold text-amber-400 mb-1 flex items-center gap-1">
              <HelpCircle className="h-3 w-3" /> Known Trade-offs
            </div>
            <ul className="space-y-1 text-slate-300 text-[11px]">
              {keyTradeoffs.disadvantages.map((dis, idx) => (
                <li key={idx} className="flex items-start gap-1">
                  <span className="text-amber-500">•</span>
                  <span>{dis}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
        <span className="text-[10px] text-slate-500">
          Ref ID: #{civicData.auditTicketId}
        </span>
        <button
          onClick={() => onDraftGrievance(locality)}
          className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors border border-slate-700 cursor-pointer"
        >
          <FileEdit className="h-3.5 w-3.5 text-orange-400" />
          <span>Draft Civic Representation</span>
        </button>
      </div>
    </div>
  );
};
