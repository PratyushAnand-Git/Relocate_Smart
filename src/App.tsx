import React, { useState, useMemo } from 'react';
import { 
  CityId, 
  BudgetTier, 
  Locality, 
  VerifiedAlert 
} from './types';
import { 
  CITIES, 
  OFFICE_ANCHORS, 
  LOCALITIES, 
  INITIAL_ALERTS 
} from './data/citiesData';
import { Header } from './components/Header';
import { WorkplaceSearch } from './components/WorkplaceSearch';
import { LocalityCard } from './components/LocalityCard';
import { WorkplaceIntelModal } from './components/WorkplaceIntelModal';
import { GrievanceDrafterModal } from './components/GrievanceDrafterModal';
import { VerifiedAlertModal } from './components/VerifiedAlertModal';
import { GROModal } from './components/GROModal';
import { Footer } from './components/Footer';
import { 
  ShieldCheck, 
  Layers, 
  Info
} from 'lucide-react';

export const App: React.FC = () => {
  // State
  const [selectedCityId, setSelectedCityId] = useState<CityId>('vadodara');
  const [commuteLimit, setCommuteLimit] = useState<number>(30); // 30 mins
  const [budgetTier, setBudgetTier] = useState<BudgetTier | 'all'>('all');
  const [requireHospital, setRequireHospital] = useState<boolean>(true);
  const [requirePolice, setRequirePolice] = useState<boolean>(false);

  // Modals state
  const [isWorkplaceIntelOpen, setIsWorkplaceIntelOpen] = useState<boolean>(false);
  const [selectedLocalityForGrievance, setSelectedLocalityForGrievance] = useState<Locality | null>(null);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false);
  const [isGROModalOpen, setIsGROModalOpen] = useState<boolean>(false);

  // Community verified alerts
  const [alerts, setAlerts] = useState<VerifiedAlert[]>(INITIAL_ALERTS);

  // Current City Config
  const currentCity = useMemo(() => {
    return CITIES.find((c) => c.id === selectedCityId) || CITIES[0];
  }, [selectedCityId]);

  // Office Anchors for current city
  const cityOffices = useMemo(() => {
    return OFFICE_ANCHORS.filter((o) => o.cityId === selectedCityId);
  }, [selectedCityId]);

  // Selected Office Anchor
  const [selectedOfficeId, setSelectedOfficeId] = useState<string>('');

  // Sync selected office when city changes
  const activeOffice = useMemo(() => {
    const found = cityOffices.find((o) => o.id === selectedOfficeId);
    return found || cityOffices[0] || OFFICE_ANCHORS[0];
  }, [cityOffices, selectedOfficeId]);

  // Filtered Localities
  const filteredLocalities = useMemo(() => {
    return LOCALITIES.filter((loc) => {
      if (loc.cityId !== selectedCityId) return false;
      if (loc.estimatedRushHourMinutes > commuteLimit) return false;
      if (budgetTier !== 'all' && loc.budgetTier !== budgetTier) return false;
      if (requireHospital && loc.amenities.hospitalsWithin3km < 1) return false;
      if (requirePolice && loc.amenities.policeDeskWikiKm > 2.0) return false;
      return true;
    }).sort((a, b) => a.estimatedRushHourMinutes - b.estimatedRushHourMinutes);
  }, [selectedCityId, commuteLimit, budgetTier, requireHospital, requirePolice]);

  // City-specific alerts
  const cityAlerts = useMemo(() => {
    return alerts.filter((a) => a.cityId === selectedCityId);
  }, [alerts, selectedCityId]);

  // Handler to add a new alert
  const handleAddAlert = (newAlert: VerifiedAlert) => {
    setAlerts((prev) => [newAlert, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Header with City Switcher and Legal Actions */}
      <Header
        selectedCityId={selectedCityId}
        onSelectCity={(cityId) => {
          setSelectedCityId(cityId);
          setSelectedOfficeId('');
        }}
        onOpenGRO={() => setIsGROModalOpen(true)}
        onOpenAlertModal={() => setIsAlertModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Hero Banner with City Intro */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border border-slate-800 p-6 rounded-2xl shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                {currentCity.tier} City Ecosystem
              </span>
              <span className="text-xs text-slate-400">• {currentCity.state}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Relocation Intelligence for <span className="text-orange-500">{currentCity.name}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              {currentCity.description}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-3 self-start md:self-auto bg-slate-950/80 px-4 py-3 rounded-xl border border-slate-800 text-xs">
            <div className="text-center px-2 border-r border-slate-800">
              <div className="text-slate-400 text-[10px]">Localities</div>
              <div className="text-base font-bold text-white">{filteredLocalities.length}</div>
            </div>
            <div className="text-center px-2 border-r border-slate-800">
              <div className="text-slate-400 text-[10px]">Avg 9 AM Commute</div>
              <div className="text-base font-bold text-orange-400">
                {filteredLocalities.length > 0
                  ? Math.round(
                      filteredLocalities.reduce((acc, l) => acc + l.estimatedRushHourMinutes, 0) /
                        filteredLocalities.length
                    )
                  : '--'}{' '}
                <span className="text-[10px] text-slate-400 font-normal">min</span>
              </div>
            </div>
            <div className="text-center px-2">
              <div className="text-slate-400 text-[10px]">State Grievance</div>
              <div className="text-xs font-semibold text-emerald-400 truncate max-w-[120px]" title={currentCity.statePortalName}>
                {currentCity.statePortalName.split(' ')[0]}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Workplace Search & Commute Filter Controls */}
        <WorkplaceSearch
          officeAnchors={cityOffices}
          selectedOffice={activeOffice}
          onSelectOffice={(office) => setSelectedOfficeId(office.id)}
          commuteLimitMinutes={commuteLimit}
          onCommuteLimitChange={setCommuteLimit}
          selectedBudget={budgetTier}
          onBudgetChange={setBudgetTier}
          requireHospitalWithin3km={requireHospital}
          onRequireHospitalChange={setRequireHospital}
          requirePoliceDeskWithin2km={requirePolice}
          onRequirePoliceChange={setRequirePolice}
          onOpenWorkplaceIntel={() => setIsWorkplaceIntelOpen(true)}
        />

        {/* 3. Verified Community Alerts Bar (Citation-Backed) */}
        {cityAlerts.length > 0 && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Verified Public Incident Registry ({currentCity.name})
                </span>
                <span className="text-[11px] text-slate-500">
                  (Strictly citation-backed; unverified rumors blocked)
                </span>
              </div>
              <button
                onClick={() => setIsAlertModalOpen(true)}
                className="text-orange-400 hover:text-orange-300 font-semibold text-xs flex items-center gap-1 cursor-pointer"
              >
                + Log Alert with Citation
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {cityAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 text-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-slate-200">{alert.category}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {alert.dateReported}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px] line-clamp-2">
                      {alert.description}
                    </p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="font-medium text-emerald-400">
                      ✓ {alert.verifiedEvidenceType}
                    </span>
                    <span className="font-mono text-slate-400">
                      Ref: {alert.proofReference}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Results Section: Commute-Optimized Localities */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="h-5 w-5 text-orange-500" />
                Commute-Optimized Localities for {activeOffice.name.split('(')[0]}
              </h2>
              <p className="text-xs text-slate-400">
                Sorted by 9:00 AM rush hour journey duration. Each zone itemizes audited municipal complaints vs PR claims.
              </p>
            </div>

            <div className="text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 self-start sm:self-auto">
              Matching Zones: <strong className="text-white">{filteredLocalities.length}</strong>
            </div>
          </div>

          {filteredLocalities.length === 0 ? (
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
              <Info className="h-10 w-10 text-orange-400 mx-auto" />
              <h3 className="text-base font-bold text-white">No localities match these strict criteria</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Try widening your commute tolerance slider (e.g. up to 35-40 mins) or toggling off the police desk distance filter.
              </p>
              <button
                onClick={() => {
                  setCommuteLimit(35);
                  setBudgetTier('all');
                  setRequirePolice(false);
                }}
                className="mt-2 px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold text-xs rounded-xl transition-all cursor-pointer"
              >
                Reset to Balanced Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredLocalities.map((locality) => (
                <LocalityCard
                  key={locality.id}
                  locality={locality}
                  officeName={activeOffice.name}
                  onDraftGrievance={(loc) => setSelectedLocalityForGrievance(loc)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* 5. Modals */}
      {/* A. Workplace Intel Modal (Police Station, Municipal Ward, MP/MLA, Roads) */}
      <WorkplaceIntelModal
        office={activeOffice}
        isOpen={isWorkplaceIntelOpen}
        onClose={() => setIsWorkplaceIntelOpen(false)}
      />

      {/* B. Grievance Drafter & Redirect Modal */}
      <GrievanceDrafterModal
        locality={selectedLocalityForGrievance}
        isOpen={!!selectedLocalityForGrievance}
        onClose={() => setSelectedLocalityForGrievance(null)}
      />

      {/* C. Verified Alert Submission Modal (Citation Required) */}
      <VerifiedAlertModal
        cityId={selectedCityId}
        isOpen={isAlertModalOpen}
        onClose={() => setIsAlertModalOpen(false)}
        onAddAlert={handleAddAlert}
      />

      {/* D. Grievance Redressal Officer (GRO) & IT Rules Modal */}
      <GROModal
        isOpen={isGROModalOpen}
        onClose={() => setIsGROModalOpen(false)}
      />

      {/* 6. Law-Compliant Footer with RERA & BNS Disclaimers */}
      <Footer onOpenGRO={() => setIsGROModalOpen(true)} />
    </div>
  );
};

export default App;
