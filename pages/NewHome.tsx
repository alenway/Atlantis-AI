import CaseStudies from "../components/CaseStudies";
import Contact from "../components/Contact";
import UseCases from "../components/Features";
import Hero from "../components/Hero";
import Integration from "../components/Integration";
import TrustBar from "../components/ProblemStats";
import SonarDemo from "../components/SonarDemo";
import Team from "../components/Team";

export default function Home() {
    return (
        <>
            <Hero />
            <TrustBar />
            <UseCases />
            <CaseStudies />
            <Integration />
            <SonarDemo />
            <Team />
            <Contact />
        </>
    );
}
