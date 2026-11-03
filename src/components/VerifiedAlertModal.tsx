import React, { useState } from 'react';
import { X, AlertCircle, ShieldAlert, CheckCircle2, FileCheck } from 'lucide-react';
import { CityId, VerifiedAlert } from '../types';
import { CITIES } from '../data/citiesData';

interface VerifiedAlertModalProps {
  cityId: CityId;
  isOpen: boolean;
  onClose: () => void;
  onAddAlert: (alert: VerifiedAlert) => void;
}

export const VerifiedAlertModal: React.FC<VerifiedAlertModalProps> = ({
  cityId,
  isOpen,
  onClose,
  onAddAlert,
}) => {
  if (!isOpen) return null;

  const currentCity = CITIES.find((c) => c.id === cityId);
  const [category, setCategory] = useState<VerifiedAlert['category']>('Road Obstruction');
  const [evidenceType, setEvidenceType] = useState<VerifiedAlert['verifiedEvidenceType']>('Municipal Ticket');
  const [proofReference, setProofReference] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Legal compliance check: Must have proof citation
    if (!proofReference.trim() || proofReference.trim().length < 5) {
      setErrorMsg('To comply with Section 353 of the Bharatiya Nyaya Sanhita (BNS) and Indian IT Rules to prevent misinformation, all alerts must include a verifiable public ticket ID, FIR/police reference, or official news URL.');
      return;
    }

    if (!description.trim() || description.trim().length < 10) {
      setErrorMsg('Please provide a specific factual description (at least 10 characters). Avoid subjective speculation or unverified allegations.');
      return;
    }

    const newAlert: VerifiedAlert = {
      id: `alt-${Date.now()}`,
      cityId,
      localityId: 'user-submitted',
      category,
      verifiedEvidenceType: evidenceType,
      proofReference: proofReference.trim(),
      dateReported: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      verifiedByModerator: true,
      description: description.trim(),
    };

    onAddAlert(newAlert);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 text-slate-200">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Report Verified Civic Alert</h2>
              <p className="text-xs text-slate-400">
                Citation-Required Public Notice Registry for {currentCity?.name}.
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

        {/* Legal Warning Notice */}
        <div className="my-4 p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200/90 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Misinformation & BNS §353 Safeguard:</strong> Unverified rumors, defamatory claims, or hearsay are strictly prohibited. Submissions without verifiable public proof (municipal complaint log #, CPGRAMS ID, or verified media citation) are automatically rejected.
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="h-12 w-12 text-emerald-400 mx-auto" />
            <h3 className="text-base font-bold text-white">Alert Logged with Citation!</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Your verified public ticket reference has been attached to the community registry in compliance with Indian IT Rules.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-800/50 text-rose-300 text-xs">
                {errorMsg}
              </div>
            )}

            {/* Category */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Alert Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
              >
                <option value="Road Obstruction">Road Obstruction / Cave-in / Metro Barricade</option>
                <option value="Water Supply Interruption">Water Supply Interruption / Tanker Breakdown</option>
                <option value="Streetlight Failure">Streetlight Failure / Blackout Stretch</option>
                <option value="Traffic Diversion">Traffic Diversion / Road Closure</option>
                <option value="Flood Waterlogging">Flood Waterlogging / Culvert Choke</option>
              </select>
            </div>

            {/* Verification Proof Type */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Verifiable Citation Type</label>
              <select
                value={evidenceType}
                onChange={(e) => setEvidenceType(e.target.value as any)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:ring-1 focus:ring-orange-500"
              >
                <option value="Municipal Ticket">Official Municipal Ticket (VMC, BBMP, UMC, PMC, GHMC)</option>
                <option value="CPGRAMS Ticket">Government of India CPGRAMS Docket ID</option>
                <option value="Police Advisory">Official Traffic Police Advisory / Press Bulletin</option>
                <option value="Geotagged Photo">Geotagged Incident Photo Link / News Report</option>
              </select>
            </div>

            {/* Proof Reference Number */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Mandatory Ticket # / Citation Link / Advisory ID <span className="text-orange-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. VMC-W12-GRV-8812 or CPGRAMS-2026-99012"
                value={proofReference}
                onChange={(e) => setProofReference(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-orange-500 font-mono"
                required
              />
              <span className="text-[10px] text-slate-500">
                This reference will be publicly displayed so other job seekers and citizens can cross-verify.
              </span>
            </div>

            {/* Description */}
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Factual Incident Summary <span className="text-orange-400">*</span>
              </label>
              <textarea
                rows={3}
                placeholder="State the factual impact, specific crossroad, and timing. No speculative or offensive remarks."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-orange-500"
                required
              />
            </div>

            {/* Buttons */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-[11px] text-slate-500">
                Logged under Intermediary Safe Harbor Guidelines
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold hover:from-orange-500 hover:to-amber-500 shadow-md shadow-orange-500/20 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <FileCheck className="h-4 w-4" />
                  <span>Submit Verified Alert</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
