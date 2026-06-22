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
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <MaturityGauge value={projectState.overallMaturity} label={t(lang, "maturityScore")} />
        <ComplianceBars compliance={projectState.compliance} title={t(lang, "complianceStatus")} />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <RiskHeatMap title={t(lang, "riskHeatMap")} />
        <ControlDonut stats={projectState.controlStats} title={t(lang, "controlDistribution")} />
      </div>
      <MilestoneTimeline milestones={projectState.milestones} title={t(lang, "projectMilestones")} />
      <RecentArtifacts items={projectState.recentArtifacts} title={t(lang, "recentArtifacts")} />
    </div>
  );
}
