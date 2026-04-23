import TitleHeader from "../components/TitleHeader";
import FeatureCards from "../sections/FeatureCards";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">

        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />

        <div className="mt-10">
          <FeatureCards />
        </div>

      </div>
    </div>
  );
};

export default TechStack;