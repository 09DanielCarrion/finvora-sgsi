import { useOutletContext } from "react-router-dom";
import { t } from "../lib/i18n";
import { projectState } from "../data/project-state";
import MaturityGauge from "../components/dashboard/MaturityGauge";
import ComplianceBars from "../components/dashboard/ComplianceBars";
import RiskHeatMap from "../components/dashboard/RiskHeatMap";
import ControlDonut from "../components/dashboard/ControlDonut";
import MilestoneTimeline from "../components/dashboard/MilestoneTimeline";
import RecentArtifacts from "../components/dashboard/RecentArtifacts";

export default function Dashboard() {
  const { lang } = useOutletContext();

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <MaturityGauge value={projectState.overallMaturity} label={t(lang, "maturityScore")} />
          <ControlDonut stats={projectState.controlStats} title={t(lang, "controlDistribution")} />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <ComplianceBars compliance={projectState.compliance} title={t(lang, "complianceStatus")} />
          <RiskHeatMap title={t(lang, "riskHeatMap")} />
        </div>
        <MilestoneTimeline milestones={projectState.milestones} title={t(lang, "projectMilestones")} />
      </div>
      <RecentArtifacts items={projectState.recentArtifacts} title={t(lang, "recentArtifacts")} />
    </div>
  );
}
