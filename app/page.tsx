"use client";
import Aurora from "@/src/Backgrounds/Aurora/Aurora";
import SkillRow from "./components/SkillRow";
import ProjectRow from "./components/ProjectRow";
import ExtLink from "./components/ExtLink";

const Home: React.FC = () => {
  return (
    <div>
      <div className="h-[30vh] w-screen absolute top-0 left-0 bg-black">
        <Aurora
          colorStops={["#D500F9", "#3D5AFE", "#00E5FF"]}
          speed={0.4}
        />
      </div>
      <header className="relative z-10 mt-[10vh] text-center">
        <h1 className="text-6xl monospace font-medium">Štěpán Pešout</h1>
      </header>
      <main className="relative z-10 container max-w-screen-md mx-auto px-4 mt-10">
        <h2 className="text-2xl mb-2">About me</h2>
        <p className="text-l text-justify leading-6">
          I&apos;m a fullstack freelance web app developer, machine learning enthusiast, traveller and
          technology minimalist currently living, working and studying in Prague, Czech Republic.
        </p>

        <h2 className="text-2xl mb-2 mt-6">My technology skills</h2>
        <div className="text-l leading-6">
          <SkillRow skill="NodeJS" percentage={85}>
            <p>
              Lately, I have mainly been working with <strong>NestJS</strong> framework.
            </p>
          </SkillRow>
          <SkillRow skill="NextJS" percentage={90}>
            <p>
              I have been working with <strong>React</strong> and <strong>NextJS</strong> for about 4 years. I most
              commonly use libraries like <strong>Tailwind CSS</strong> and <strong>MUI</strong>.
            </p>
          </SkillRow>
          <SkillRow skill="PHP" percentage={100}>
            <p>
              I have built many projects in PHP, especially in the past. I worked with plain PHP&nbsp;7 (OOP) and later also
              with the <strong>Symfony</strong> framework and <strong>Twig</strong> template engine.
            </p>
          </SkillRow>
          <SkillRow skill="Python" percentage={70}>
            <p>
              4Nestreliable, and scalable applications.
            </p>
          </SkillRow>
          <SkillRow skill="Bash" percentage={80}>
            <p>
              5NestJS is a progressive Node.js framework for building efficient, reliable, and scalable applications.
              Building efficient, reliable, and scalable applications.
            </p>
          </SkillRow>
          <SkillRow skill="SQL" percentage={95}>
            <p>
              6NestJS is a progressive Node.js framework for building efficient, reliable, and scalable applications.
              Building efficient, reliable, and scalable applications.
            </p>
          </SkillRow>
        </div>

        <h2 className="text-2xl mb-2 mt-5">My personal projects</h2>
          <ProjectRow name="Recordica">
            <p>
              <ExtLink href="https://recordica.app">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/rcd_logo.png" alt="Recordica logo" className="w-1/2 sm:w-1/3 mb-1" />
              </ExtLink>
              I&apos;m a co-founder of <ExtLink href="https://recordica.app">Recordica</ExtLink> – an app,
              which helps its users uncover hidden patterns in their daily
              routine and gain valuable insights. It also provides them detailed reports and statistics about their
              lifestyle.
            </p>
          </ProjectRow>
          <ProjectRow name="Využití strojového učení pro snížení rizik při užívání psychedelických látek">
            <p>
              6NestJS is a progressive Node.js framework for building efficient, reliable, and scalable applications.
              Building efficient, reliable, and scalable applications.
            </p>
          </ProjectRow>

        <h2 className="text-2xl mb-2 mt-5">Other projects I have contributed to</h2>
        <p className="text-l text-justify leading-6">
          I&apos;m a fullstack freelance web app developer, machine learning enthusiast, traveller and
          technology minimalist currently living, working and studying in Prague, Czech Republic.
        </p>

      </main>
    </div>
  );
}

export default Home;
