import HannahBeautyWebsite from "../assets/hannah-beauty.jpeg";
import CaseComp from "../assets/case-comp.jpeg";
import QuickDraw from "../assets/quick-draw.jpeg";
import ExperienceCard from "../UI/ExperienceCard";

function Experience() {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1>What I've done</h1>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 px-10 py-10">
        <ExperienceCard
          name="Hannah Beauty"
          link="https://hannahbeauty.co.nz"
          description="A simple, aesthetic website for a beauty salon."
          image={HannahBeautyWebsite}
          button="Take a look!"
        />
        <ExperienceCard
          name="Case Competition"
          link="https://docs.google.com/presentation/d/1814YFiSSl3GeVpmlreK-WOctzOi0MttWX0MqsJnmXxg/edit#slide=id.g12dddf5d7b8_0_1"
          description="2nd Place for Vista x WDCC Case Competition :)"
          image={CaseComp}

          button="Take a look!"
        />
        <ExperienceCard
          name="Portfolio Website"
          link="#"
          description="This website about me!"
          button="You're here!"
        />
        <ExperienceCard
          name="Quick-Draw Game"
          link="https://github.com/lukekimchi/Quick-Draw-Game"
          description="A speed drawing game for kids encouraging creativity without overthinking art."
          image={QuickDraw}
          button="Take a look!"
        />
      </div>
    </>
  );
}

export default Experience;
