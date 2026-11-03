import React from 'react';
import { ShieldCheck, Scale, Database, AlertCircle } from 'lucide-react';

interface FooterProps {
  onOpenGRO: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGRO }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 mt-16 pt-12 pb-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mandatory Statutory Disclaimers */}
        <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 mb-8 space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-xs">
            <Scale className="h-4 w-4 text-orange-400" />
            <span>MANDATORY INDIAN STATUTORY DISCLAIMERS & DATA TRANSPARENCY NOTICE</span>
          </div>

          <p className="text-[11px] text-slate-400 leading-relaxed">
            <strong>1. RERA Act 2016 & Consumer Protection Act 2019 Non-Broker Notice:</strong> RelocateSmart Technologies is strictly an urban data analytics and public records aggregator. It is <em>not</em> a real estate broker, promoter, or agent as defined under Section 9 of the Real Estate (Regulation and Development) Act (RERA), 2016. Locality suggestions and rental bands are probabilistic algorithmic estimates based on historical commute times, open municipal datasets, and public infrastructure records. The platform does not endorse specific housing units or guarantee service continuity. Users must perform independent physical, legal, and financial due diligence.
          </p>

          <p className="text-[11px] text-slate-400 leading-relaxed">
            <strong>2. Bharatiya Nyaya Sanhita (BNS) 2023 & Defamation Defense:</strong> All scores, complaint tallies, and divergence notices displayed on this platform represent algorithmic tabulations of verified, publicly accessible records (Open Government Data, municipal grievance dockets, NCRB reports, and judicial filings). The platform expresses zero subjective editorial malice and relies on the defense of public truth and fair comment on civic administration.
          </p>

          <p className="text-[11px] text-slate-400 leading-relaxed">
            <strong>3. DPDP Act 2023 & Anti-Doxxing Safeguard:</strong> Personal mobile numbers, private residences, and non-consensual personal identifiers of public officials, Ministers, MLAs, and Police Inspectors are strictly excluded to safeguard data privacy. Only officially designated government desk landlines and institutional emails are cataloged.
          </p>
        </div>

        {/* Source Attributions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-slate-800/60 text-[11px]">
          <div>
            <div className="font-bold text-slate-200 mb-2 flex items-center gap-1.5">
              <Database className="h-3.5 w-3.5 text-orange-400" /> Civic Data Sources
            </div>
            <ul className="space-y-1 text-slate-400">
              <li>• Open Government Data (data.gov.in)</li>
              <li>• OpenCity Urban Data Portal</li>
              <li>• Municipal Corporations (VMC, UMC, BBMP)</li>
              <li>• DISCOM Load-shedding Bulletins</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-slate-200 mb-2 flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-400" /> Safety & Baselines
            </div>
            <ul className="space-y-1 text-slate-400">
              <li>• National Crime Records Bureau (NCRB)</li>
              <li>• State Police Public Directories</li>
              <li>• Traffic Police Advisories</li>
              <li>• Central Ground Water Board (CGWB)</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-slate-200 mb-2 flex items-center gap-1.5">
              <Scale className="h-3.5 w-3.5 text-emerald-400" /> Citizen Redressal
            </div>
            <ul className="space-y-1 text-slate-400">
              <li>• CPGRAMS (pgportal.gov.in)</li>
              <li>• Digital Gujarat Citizen Portal</li>
              <li>• CM Helpline 181 (Madhya Pradesh)</li>
              <li>• e-Janaspandana (Karnataka)</li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-slate-200 mb-2 flex items-center gap-1.5">
              <AlertCircle className="h-3.5 w-3.5 text-amber-400" /> Safe Harbor & Grievance
            </div>
            <p className="text-slate-400 mb-2">
              Intermediary Safe Harbor under Section 79 of the Information Technology Act, 2000.
            </p>
            <button
              onClick={onOpenGRO}
              className="text-orange-400 hover:text-orange-300 font-semibold underline text-left cursor-pointer"
            >
              Contact Grievance Officer (GRO) →
            </button>
          </div>
        </div>

        {/* Copyright & Meta */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} RelocateSmart Bharat Civic Intelligence Platform. Made for Indian Job Seekers.
          </div>
          <div className="flex items-center space-x-4">
            <span>Server Location: Mumbai, India (MeitY Approved Cloud)</span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              100% Law-Compliant Safe Harbor
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
