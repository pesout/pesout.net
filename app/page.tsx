"use client";
import Aurora from "@/src/Backgrounds/Aurora/Aurora";
import SkillRow from "./components/SkillRow";
import ProjectRow from "./components/ProjectRow";
import FileButton from "./components/FileButton";

const Home: React.FC = () => {
  return (
    <div>
      <div className="h-[35vh] w-screen absolute top-0 left-0 bg-black">
        <Aurora
          colorStops={["#D500F9", "#3D5AFE", "#00E5FF"]}
          speed={0.6}
        />
      </div>
      <header className="relative z-10 mt-[9vh] text-center">
        <h1 className="text-6xl px-4 monospace font-medium leading-[1.15]">Štěpán Pešout</h1>
      </header>
      <main className="relative z-10 container max-w-screen-md mx-auto px-4 mt-10">
        <h2 className="text-2xl mb-2">About me</h2>
        <p className="text-l text-justify leading-6">
          I&apos;m a fullstack web app developer, freelancer, machine learning enthusiast, traveller and
          technology minimalist currently living, working and studying in Prague, Czech Republic.
        </p>

        <h2 className="text-2xl mb-2 mt-6">Technology skills</h2>
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
              In Python, I mainly worked on projects involving machine learning, neural networks and data processing in general.
              I have extensive experience with libraries such
              as <strong>NumPy</strong>, <strong>scikit-learn</strong>, <strong>TensorFlow</strong>/<strong>Keras</strong>, <strong>Matplotlib</strong>, <strong>Pillow</strong>,
              or <strong>Pandas</strong>.
            </p>
          </SkillRow>
          <SkillRow skill="Bash" percentage={80}>
            <p>
              I have over 10 years of experience working with various Linux distributions. I have also contributed to managing
              Linux servers on smaller projects and have written deployment scripts in Bash.
            </p>
          </SkillRow>
          <SkillRow skill="SQL" percentage={95}>
            <p>
              I have worked with relational databases in various PHP and NestJS projects,
              mainly with <strong>MySQL</strong> and <strong>PostgreSQL</strong>.
              Additionally, I have experience in data architecture and designing databases to align with business and
              project needs.
            </p>
          </SkillRow>
        </div>

        <h2 className="text-2xl mb-2 mt-5">Personal projects</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <ProjectRow name={(<img src="/images/rcd_logo.png" alt="Recordica logo" className="w-[7rem] mt-0.5" />)}>
            <p>
              I&apos;m a co-founder of <strong>Recordica</strong> – an app,
              which helps its users uncover hidden patterns in their daily
              routine and gain valuable insights. It also provides them detailed reports and statistics about their
              lifestyle.
            </p>
            <p className="mt-2">
              <FileButton type="web" href="https://recordica.app">Recordica.app</FileButton>
            </p>
          </ProjectRow>
          <ProjectRow name="Machine learning models to reduce the risks of psychedelics use">
            <p>
              This was my <strong>diploma thesis</strong> (2023) at the Czech University of Life Sciences.
            </p>
            <p className="mt-1.5">
              The project applies machine learning to predict and reduce risks in psychedelic experiences using classification
              models written in Python. It explores theoretical foundations, data processing, model optimization, and evaluation,
              highlighting the potential applications and future improvements of the developed models.
            </p>
            <p className="mt-2">
              <FileButton type="github" href="https://github.com/pesout/master-thesis" gap>GitHub</FileButton>
              <FileButton href="/projects/psychedelic-ml-models.html" gap>HTML</FileButton>
              <FileButton href="/projects/diplomova_prace.pdf">PDF (Czech)</FileButton>
            </p>
          </ProjectRow>
          <ProjectRow name="Regression compressor">
            <p>
              One of the final projects of my internship at the University of Évora in Portugal (2022).
            </p>
            <p className="mt-1.5">
              This project processes images using a combination of lossy and lossless compression techniques. It applies
              linear regression to reduce color data, represents similar values with their median, encodes data using a
              Huffman tree, and includes a decompression algorithm that reconstructs the image.
            </p>
            <p className="mt-2">
              <FileButton type="github" href="https://github.com/pesout/regression-compressor" gap>GitHub</FileButton>
              <FileButton href="/projects/regression-compressor.html">HTML</FileButton>
            </p>
          </ProjectRow>
          <ProjectRow name="Drug consumption by personality data">
            <p>
              One of the final projects of my internship at the University of Évora in Portugal (2022).
            </p>
            <p className="mt-1.5">
              This paper explores the construction of classification models to predict drug use, utilizing various
              algorithms (Rules, J48, SMO, and NaiveBayes), analyzing factors influencing substance use, and
              summarizing results while outlining future research possibilities.
            </p>
            <p className="mt-2">
              <FileButton href="/projects/drug_consumption_by_personality_data.pdf">PDF</FileButton>
            </p>
          </ProjectRow>
          <ProjectRow name="Web application for a non-profit organization">
            <p>
              This was my <strong>bachelor&apos;s thesis</strong> (2021) at the Czech University of Life Sciences.
            </p>
            <p className="mt-1.5">
              This work covers the analysis, design, and implementation of a web application in PHP and JS
              with a MySQL database for a non-profit organization, including testing, evaluation, and future
              development suggestions.
            </p>
            <p className="mt-2">
              <FileButton type="github" href="https://github.com/pesout/bakalarska-prace" gap>GitHub</FileButton>
              <FileButton href="/projects/bakalarska_prace.pdf">PDF (Czech)</FileButton>
            </p>
          </ProjectRow>
          <ProjectRow name="Classifier of handwritten digits">
            <p>
              The classifier utilizing convolutional neural networks was presented at a workshop of 
              the <strong>AI Bridge</strong> initiative at the Czech University of Life Sciences. I also created
              a simple web app working with camera images as a practical example of using an exported prediction model.
            </p>
            <p className="mt-2">
              <FileButton type="github" href="https://github.com/pesout/digit-classifier" gap>GitHub</FileButton>
              <FileButton href="/projects/digit-classifier.html">HTML</FileButton>
            </p>
          </ProjectRow>
          <ProjectRow name="Other projects">
            <p>
              Some of my other personal projects can be found on my GitHub, although I have a lot of old and outdated
              stuff there as well.
            </p>
            <p className="mt-2">
              <FileButton type="github" href="https://github.com/pesout" gap>GitHub</FileButton>
            </p>
          </ProjectRow>

        <h2 className="text-2xl mb-2 mt-5">Projects I have contributed to</h2>
        <p className="text-l text-justify leading-6 mb-2">
          Unfortunately, not all the projects I have participated in can be published here. I have worked on internal
          applications for various companies and some projects are still in progress.
        </p>
        <ProjectRow name="Robe websites" color="emerald">
          <p>
            Appio, frontend, PM
          </p>
          <p className="mt-2">
            <FileButton type="web" href="https://www.robe.cz" color="emerald" gap>Robe.cz</FileButton>
          </p>
        </ProjectRow>

      </main>
    </div>
  );
}

export default Home;
