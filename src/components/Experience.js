import HannahBeautyWebsite from "../assets/hannah-beauty.jpeg";
import CaseComp from "../assets/case-comp.jpeg";
import Portfolio from "../assets/portfolio-website.jpeg";
import QuickDraw from "../assets/quick-draw.jpeg";
import ExperienceCard from "../UI/ExperienceCard";
import { FaGithub } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { Carousel } from "flowbite-react";

function Experience() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center">
        <h1 className="animate-text bg-gradient-to-r from-blue-900	0 via-emerald-500 to-teal-300 bg-clip-text text-transparent">
          What I've done
        </h1>
      </div>

      <div className="h-5/6 flex justify-center">
        <Carousel style={{width: "75%"}}
          leftControl={
            <FaPlayCircle className="-scale-x-100 text-3xl text-rose-600 hover:text-rose-900" />
          }
          rightControl={
            <FaPlayCircle className="text-3xl text-rose-600 hover:text-rose-900" />
          }
          indicators={false}
        >
          <div className="flex h-full items-center justify-center">
            <ExperienceCard
              name="Hannah Beauty"
              link="https://hannahbeauty.co.nz"
              description="A simple, aesthetic website for a beauty salon."
              image={HannahBeautyWebsite}
              button="Take a look!"
            />
          </div>

          <div className="flex h-full items-center justify-center">
            <ExperienceCard
              name="Case Competition"
              link="https://docs.google.com/presentation/d/1814YFiSSl3GeVpmlreK-WOctzOi0MttWX0MqsJnmXxg/edit#slide=id.g12dddf5d7b8_0_1"
              description="2nd Place for Vista x WDCC Case Competition :)"
              image={CaseComp}
              button="Take a look!"
            />
          </div>

          <div className="flex h-full items-center justify-center">
            <ExperienceCard
              name="Portfolio Website"
              link="https://github.com/lukekimchi/Luke-Kim-Portfolio-Website"
              description="This website about me!"
              image={Portfolio}
              button={<FaGithub className="text-2xl" />}
            />
          </div>

          <div className="flex h-full items-center justify-center">
            <ExperienceCard
              name="Quick-Draw Game"
              link="https://github.com/lukekimchi/Quick-Draw-Game"
              description="A speed drawing game for kids encouraging creativity without overthinking art."
              image={QuickDraw}
              button="Take a look!"
            />
          </div>

        </Carousel>
      </div>

      {/* <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 px-10 py-10">
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
          link="https://github.com/lukekimchi/Luke-Kim-Portfolio-Website"
          description="This website about me!"
          image={Portfolio}
          button={<FaGithub className="text-2xl"/>}
        />
        <ExperienceCard
          name="Quick-Draw Game"
          link="https://github.com/lukekimchi/Quick-Draw-Game"
          description="A speed drawing game for kids encouraging creativity without overthinking art."
          image={QuickDraw}
          button="Take a look!"
        />
       
      </div> */}
    </div>
  );
}

export default Experience;
