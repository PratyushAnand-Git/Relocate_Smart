import React from 'react';
import { X, Building2, Phone, Mail, ShieldAlert, AlertCircle, MapPin, Landmark, Hammer } from 'lucide-react';
import { OfficeAnchor } from '../types';

interface WorkplaceIntelModalProps {
  office: OfficeAnchor;
  isOpen: boolean;
  onClose: () => void;
}

export const WorkplaceIntelModal: React.FC<WorkplaceIntelModalProps> = ({
  office,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 text-slate-200">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">{office.name}</h2>
              <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                <MapPin className="h-3.5 w-3.5 text-orange-400" /> {office.address}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* DPDP Act 2023 Compliance Notice */}
        <div className="my-4 p-3.5 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200/90 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>DPDPA 2023 & IT Act Compliance:</strong> In strict accordance with the Digital Personal Data Protection Act, 2023 and Section 66E of the IT Act, personal mobile numbers of Ministers, MLAs, MPs, and public officers are omitted to prevent unauthorized harassment/doxxing. All contacts below are verified institutional public desks and landlines.
          </div>
        </div>

        {/* Police Station & Emergency Desks */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-sky-400" /> Jurisdictional Police & Emergency Desk
            </h3>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="text-slate-400">Jurisdictional Thana:</span>
                <span className="font-bold text-white">{office.policeThana.stationName}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="text-slate-400">Station Landline (Official Desk):</span>
                <a
                  href={`tel:${office.policeThana.landline}`}
                  className="font-mono font-bold text-orange-400 hover:underline flex items-center gap-1"
                >
                  <Phone className="h-3.5 w-3.5" /> {office.policeThana.landline}
                </a>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="text-slate-400">National Emergency Control Room:</span>
                <span className="font-mono font-bold text-emerald-400">{office.policeThana.controlRoom}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                <span className="text-slate-400">Official Thana Email:</span>
                <span className="font-mono text-slate-300 flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5 text-slate-400" /> {office.policeThana.emergencyEmail}
                </span>
              </div>
              <div className="text-[11px] text-slate-500">
                <strong>Jurisdiction Coverage:</strong> {office.policeThana.jurisdictionArea}
              </div>
            </div>
          </div>

          {/* Administrative Hierarchy */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Landmark className="h-4 w-4 text-orange-400" /> Administrative & Legislative Footprint
            </h3>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2.5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Municipal Corporation:</span>
                <span className="font-medium text-slate-200">{office.municipalBody}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Municipal Ward / Division:</span>
                <span className="font-medium text-slate-200">{office.ward}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Assembly (MLA) Constituency:</span>
                <span className="font-medium text-slate-200">{office.mlaConstituency}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Parliamentary (MP) Constituency:</span>
                <span className="font-medium text-slate-200">{office.mpConstituency}</span>
              </div>
            </div>
          </div>

          {/* Infrastructure & Public Works Custodians */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Hammer className="h-4 w-4 text-amber-400" /> Responsible Roadways & Infra Agencies
            </h3>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
              <p className="text-slate-400 mb-2">
                For potholes, stormwater drains, water lines, or streetlights around this workplace, formal petitions must be addressed to:
              </p>
              <div className="flex flex-wrap gap-2">
                {office.infraAgencies.map((agency, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 font-medium text-[11px]"
                  >
                    {agency}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Close Directory
          </button>
        </div>
      </div>
    </div>
  );
};

