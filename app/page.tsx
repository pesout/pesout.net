"use client";
import Aurora from "@/src/Backgrounds/Aurora/Aurora";
import SkillRow from "./components/SkillRow";
import ProjectRow from "./components/ProjectRow";
import FileButton from "./components/FileButton";
import ExtLink from "./components/ExtLink";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconLink from "./components/IconLink";

const Home: React.FC = () => (
  <div className="flex flex-col min-h-screen">
    <div className="flex-1">
      <div className="h-96 w-screen absolute top-0 left-0 bg-black">
        <Aurora
          colorStops={["#D500F9", "#3D5AFE", "#00E5FF"]}
          speed={0.7} />
      </div>

      <header className="flex items-center justify-center relative z-10 h-64 pt-3 text-center">
        <h1 className="text-6xl px-10 monospace font-medium leading-[1.15]">Štěpán Pešout</h1>
      </header>
    
      <main className="relative z-10 container max-w-screen-md mx-auto px-4">
      {/* <main className="relative z-10 container max-w-screen-md mx-auto px-4 pb-8"> */}
        <h2 className="text-2xl mb-2 monospace">About me</h2>
        <p className="text-md md:text-lg text-justify leading-6">
          I&apos;m a fullstack web app developer, freelancer, machine learning enthusiast, traveller and
          technology minimalist currently living, working and studying in Prague, Czech Republic.
        </p>


        <h2 className="text-2xl mb-2 mt-6 monospace">Technology skills</h2>
        <div className="leading-6">
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


        <h2 className="text-2xl mb-2 mt-5 monospace">Personal projects</h2>
        <div>
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
              <FileButton href="/projects/diplomova_prace.pdf">PDF (CZ)</FileButton>
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
              <FileButton href="/projects/bakalarska_prace.pdf">PDF (CZ)</FileButton>
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
        </div>


        <h2 className="text-2xl mb-2 mt-5 monospace">Projects I contributed to</h2>
        <p className="text-md md:text-lg text-justify leading-6 mb-2">
          Unfortunately, not all the projects I have participated in can be published here. I have worked on internal
          applications for various companies and some projects are still in progress.
        </p>
        <div>
          <ProjectRow name="Robe websites" color="emerald">
            <p>
              I have worked on this project as part of a team at <ExtLink href="https://appio.dev/en" color="emerald">Appio</ExtLink>,
              where I was involved in frontend development (NextJS) and also managed it from a project management perspective.
            </p>
            <p className="mt-2">
              <FileButton type="web" href="https://www.robe.cz" color="emerald" gap>Robe.cz</FileButton>
              <FileButton type="web" href="https://www.robemerch.com" color="emerald">RobeMerch.com</FileButton>
            </p>
          </ProjectRow>
          <ProjectRow name="KineDok" color="emerald">
            <p>
              I have worked on this project as part of a team at <ExtLink href="https://appio.dev/en" color="emerald">Appio</ExtLink>,
              where I was involved mainly in frontend (NextJS) development.
            </p>
            <p className="mt-2">
              <FileButton type="web" href="https://www.kinedok.net" color="emerald">KineDok.net</FileButton>
            </p>
          </ProjectRow>
          <ProjectRow name="Future Bakers" color="emerald">
            <p>
              I have worked on this project as part of a team at <ExtLink href="https://appio.dev/en" color="emerald">Appio</ExtLink>,
              where I was involved mainly in backend and frontend development (PHP, Symfony, Twig).
            </p>
            <p className="mt-2">
              <FileButton type="web" href="https://futurebakers.com" color="emerald">FutureBakers.com</FileButton>
            </p>
          </ProjectRow>
        </div>


        <h2 className="text-2xl mb-2 mt-5 monospace">My travels</h2>
        <p className="text-md md:text-lg text-justify leading-6 mb-2">
          In addition to many small trips and a study internship in Portugal, in mid-2024 I went on an eight-month trip to
          Latin America, mainly to Argentina and Chile. You can watch
          our <ExtLink href="https://www.youtube.com/@jsmenatripu?sub_confirmation=1" color="cyan">YouTube videos</ExtLink> (in&nbsp;Czech)
          that document this journey. I have also
          written <ExtLink href="https://easter-island.pesout.net" color="cyan">a practical travel guide to Easter Island</ExtLink>.
        </p>


        <h2 className="text-2xl mb-2 mt-6 monospace">Contact</h2>
        <p className="text-md md:text-lg text-justify leading-6">
          You can email me
          at <strong dangerouslySetInnerHTML={{ __html: "stepan<!-- antispam-->@<!-- antispam-->pesout<!-- antispam-->.net" }}></strong> or
          connect with me on <ExtLink href="https://www.linkedin.com/in/stepanpesout" color="cyan">LinkedIn</ExtLink>.
        </p>
      </main>
      <footer className="fixed right-0 bottom-0 z-10 hidden lg:flex flex-col gap-3 pb-10 pe-10">
        <IconLink href="https://github.com/pesout"><GitHubIcon fontSize="inherit" /></IconLink>
        <IconLink href="https://www.linkedin.com/in/stepanpesout/"><LinkedInIcon fontSize="inherit" /></IconLink>
      </footer>
    </div>
    <div className="h-32 -mt-9 rotate-180 w-screen bg-black">
      <Aurora
          colorStops={["#006064", "#006064", "#006064"]}
          speed={0.4}
      />
    </div>
  </div>
)

export default Home;
