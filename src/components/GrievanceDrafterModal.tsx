import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, ShieldCheck, FileText, Printer } from 'lucide-react';
import { Locality } from '../types';
import { CITIES } from '../data/citiesData';

interface GrievanceDrafterModalProps {
  locality: Locality | null;
  isOpen: boolean;
  onClose: () => void;
}

export const GrievanceDrafterModal: React.FC<GrievanceDrafterModalProps> = ({
  locality,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !locality) return null;

  const currentCity = CITIES.find((c) => c.id === locality.cityId);
  const [selectedCategory, setSelectedCategory] = useState(locality.civicData.primaryIssues[0] || 'Road Potholes & Infrastructure');
  const [userRemarks, setUserRemarks] = useState('');
  const [copied, setCopied] = useState(false);

  // Generate formal legal draft
  const draftContent = `FORMAL CITIZEN REPRESENTATION / GRIEVANCE
To,
The Competent Authority / Executive Engineer (Public Works & Civic Infrastructure),
Municipal Administrative Division - ${locality.name},
${currentCity?.name}, ${currentCity?.state}.

Date: ${new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
Subject: Urgent Representation regarding ${selectedCategory} in ${locality.name}

Respected Sir/Madam,

I am writing this formal representation as a resident/commuter accessing ${locality.name}. According to verified public records (Reference ID #${locality.civicData.auditTicketId}), persistent civic constraints regarding "${selectedCategory}" have caused commuter delay and public inconvenience.

Specific Observations:
- Locality: ${locality.name} (${currentCity?.name})
- Core Civic Concern: ${selectedCategory}
- Public Record Reference: Sourced from ${locality.civicData.dataSourceName} (Ticket ID: ${locality.civicData.auditTicketId})
${userRemarks ? `- Citizen Remarks: "${userRemarks}"` : ''}

In accordance with the Citizen's Charter and the Centralised Public Grievance Redress and Monitoring System (CPGRAMS) guidelines, I respectfully request an inspection and remedial action by the concerned engineering division at the earliest.

Thanking you,
Yours faithfully,
A Lawful Resident & Commuter of ${currentCity?.name}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(draftContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Citizen Representation - ${locality.name}</title>
            <style>
              body { font-family: monospace; padding: 40px; white-space: pre-wrap; font-size: 14px; line-height: 1.6; }
            </style>
          </head>
          <body>${draftContent}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 text-slate-200">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Draft & Redirect Civic Representation</h2>
              <p className="text-xs text-slate-400">
                Pre-fills a standardized representation for {locality.name} without spamming ministry servers.
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

        {/* Legal Safe-Harbor Protocol Notice */}
        <div className="my-4 p-3 rounded-xl bg-sky-950/20 border border-sky-800/40 text-xs text-sky-200/90 flex items-start gap-2.5">
          <ShieldCheck className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
          <div>
            <strong>Safe Harbor & IT Act Compliance:</strong> To avoid cyber nuisance and ensure compliance with Section 66F of the IT Act, RelocateSmart does not transmit automated mass emails from its server. Copy this draft and file it directly via the official government portals below.
          </div>
        </div>

        {/* Category & Custom Remark inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-xs">
          <div>
            <label className="block text-slate-400 font-semibold mb-1">Issue Classification</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
            >
              {locality.civicData.primaryIssues.map((issue, idx) => (
                <option key={idx} value={issue}>
                  {issue}
                </option>
              ))}
              <option value="Road Potholes & Resurfacing">Road Potholes & Resurfacing</option>
              <option value="Streetlight Non-Functional / Dark Stretch">Streetlight Non-Functional / Dark Stretch</option>
              <option value="Stormwater Drain Desilting & Monsoon Flow">Stormwater Drain Desilting & Monsoon Flow</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-400 font-semibold mb-1">Optional Specific Landmark Note</label>
            <input
              type="text"
              placeholder="e.g. Near Bus Shelter #4 or Crossroad signal"
              value={userRemarks}
              onChange={(e) => setUserRemarks(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* Generated Formal Draft Container */}
        <div>
          <div className="flex justify-between items-center mb-1.5 text-xs text-slate-400">
            <span className="font-semibold">Standardized Citizen Draft:</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="text-slate-400 hover:text-slate-200 flex items-center gap-1 text-[11px]"
              >
                <Printer className="h-3.5 w-3.5" /> Print
              </button>
              <button
                onClick={handleCopy}
                className="text-orange-400 hover:text-orange-300 flex items-center gap-1 text-[11px] font-semibold"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Text'}</span>
              </button>
            </div>
          </div>
          <textarea
            readOnly
            rows={10}
            value={draftContent}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-[11px] text-slate-300 focus:outline-none select-all"
          />
        </div>

        {/* Official Grievance Portals Direct Links */}
        <div className="mt-5 pt-4 border-t border-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
            Submit directly via Verified Government Grievance Portals:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {/* National CPGRAMS */}
            <a
              href="https://pgportal.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all flex items-center justify-between group"
            >
              <div>
                <div className="font-bold text-white group-hover:text-orange-400 transition-colors">
                  CPGRAMS (GoI Portal)
                </div>
                <div className="text-[11px] text-slate-400">Centralised Public Grievance Redress</div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-orange-400 transition-colors" />
            </a>

            {/* State-Specific Portal */}
            {currentCity && (
              <a
                href={currentCity.statePortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="font-bold text-white group-hover:text-orange-400 transition-colors">
                    {currentCity.statePortalName}
                  </div>
                  <div className="text-[11px] text-slate-400">Official {currentCity.state} Grievance Desk</div>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-orange-400 transition-colors" />
              </a>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-3 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
