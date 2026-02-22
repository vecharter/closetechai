import { h } from "preact";
import Router from "preact-router";

import App from "./App.jsx";
import AIDiscoverySession from "./Services/AI-Discovery-Session.jsx";
import AIStrategyRoadmapping from "./Services/AI-Strategy-Roadmapping.jsx";
import ModelInnovationLab from "./Services/Model-Innovation-Lab.jsx";
import AIEnablementWorkshop from "./Services/AI-Enablement-Workshop.jsx";
import AIShowcaseDemo from "./Services/AI-Showcase-Demo.jsx";
import AIIntegrationDeployment from "./Services/AI-Integration-Deployment.jsx";
import AIPerformanceOptimization from "./Services/AI-Performance-Optimization.jsx";
import Industry from "./Industry.jsx";
import EcoEfficiencyAIModel from "./Research/EcoEfficiency-AI-Model.jsx";
import WorkplaceVisionAnalytics from "./Research/Workplace-Vision-Analytics.jsx";
import MalwareAnalysisAI from "./Research/Malware-Analysis-AI.jsx";

import AboutUs from "./About-Us.jsx";
import ContactUs from "./Contact-Us.jsx";

import SecurityPrivacy from "./Security-Privacy.jsx";
import TrustTransparency from "./Trust-Transparency.jsx";
import Research from "./Research.jsx";

export default function Routes() {
  return (
    <Router>
      <App path="/" />
      <AIDiscoverySession path="/Services/AI-Discovery-Session" />
      <AIStrategyRoadmapping path="/Services/AI-Strategy-Roadmapping" />
      <ModelInnovationLab path="/Services/Model-Innovation-Lab" />
      <AIEnablementWorkshop path="/Services/AI-Enablement-Workshop" />
      <AIShowcaseDemo path="/Services/AI-Showcase-Demo" />
      <AIIntegrationDeployment path="/Services/AI-Integration-Deployment" />
      <AIPerformanceOptimization path="/Services/AI-Performance-Optimization" />
      <Industry path="/Industry" />
      <Industry path="/industry" />
      <EcoEfficiencyAIModel path="/Research/EcoEfficiency-AI-Model" />
      <WorkplaceVisionAnalytics path="/Research/Workplace-Vision-Analytics" />
      <MalwareAnalysisAI path="/Research/Malware-Analysis-AI" />
      <AboutUs path="/About-Us" />
      <ContactUs path="/Contact-Us" />
      <SecurityPrivacy path="/Security-Privacy" />
      <TrustTransparency path="/Trust-Transparency" />
      <Research path="/Research" />
    </Router>
  );
}
