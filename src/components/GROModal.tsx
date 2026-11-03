import React from 'react';
import { X, ShieldCheck, Mail, MapPin, Clock, Scale } from 'lucide-react';

interface GROModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GROModal: React.FC<GROModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 text-slate-200">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Statutory Grievance Redressal Officer (GRO)</h2>
              <p className="text-xs text-slate-400">
                Compliance with Rule 3(2) of the Information Technology (Intermediary Guidelines) Rules, 2021.
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

        {/* Content */}
        <div className="space-y-4 my-4 text-xs">
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="font-bold text-white text-sm">Designated Grievance Officer (India)</div>
            <div className="text-slate-300">
              <strong>Name:</strong> Advocate Raghavan Sharma (Grievance Redressal & Compliance Lead)
            </div>
            <div className="text-slate-300 flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 text-emerald-400" />
              <strong>Official Email:</strong>{' '}
              <a href="mailto:grievance-officer@relocatesmart.in" className="text-orange-400 hover:underline">
                grievance-officer@relocatesmart.in
              </a>
            </div>
            <div className="text-slate-300 flex items-start gap-2">
              <MapPin className="h-3.5 w-3.5 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <strong>Physical Redressal Desk:</strong> RelocateSmart Technologies Private Limited, Level 4, Tech Enclave, Outer Ring Road, Bengaluru, Karnataka, 560103, India.
              </div>
            </div>
          </div>

          {/* Response Timeline Accordance */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2.5">
            <div className="font-bold text-white flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-400" /> Statutory Turnaround Times (Rule 3)
            </div>
            <ul className="space-y-1.5 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>24-Hour Acknowledgment:</strong> Every grievance or content notice received is acknowledged with a unique tracking ticket within 24 hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>36-Hour Safe Harbor Takedown:</strong> In receipt of a lawful court order or government notification under Section 79(3)(b) regarding defamatory, privacy-infringing, or unlawful content, data will be expeditiously disabled within 36 hours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span><strong>15-Day Final Resolution:</strong> Complete investigative disposition and reporting provided within 15 days of grievance receipt.</span>
              </li>
            </ul>
          </div>

          {/* DPDPA 2023 Rights Notice */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <Scale className="h-4 w-4 text-sky-400" /> Digital Personal Data Protection (DPDP) Act, 2023 Notice
            </div>
            <p className="text-slate-400 leading-relaxed">
              If any public official, government representative, or citizen identifies unintended processing of non-public personal identifiers, they may exercise their Right to Correction and Erasure under Section 12 of the DPDP Act, 2023 by emailing our Grievance Officer with the subject line <em>"DPDPA Data Erasure Request"</em>.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-5 pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
};
