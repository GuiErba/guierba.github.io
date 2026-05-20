import { client } from '@/sanity/client';
import {
  profileQuery,
  skillsQuery,
  experiencesQuery,
  projectsQuery,
  educationQuery,
} from '@/sanity/queries';
import FooterEasterEgg from './components/FooterEasterEgg';
import ExperienceItem from './components/ExperienceItem';

type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  github: string;
  linkedin: string;
  twitter?: string;
  footerText?: string;
};

type SkillGroup = {
  category: string;
  skills: string[];
};

type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  highlights: string[];
};

type Project = {
  name: string;
  description: string;
  url?: string;
  stars?: string;
};

type Education = {
  degree: string;
  institution: string;
  period: string;
};

const fallbackProfile: Profile = {
  name: 'Guilherme Erba',
  role: 'Senior Software Engineer',
  location: 'São Paulo, BR',
  email: 'contact@example.com',
  bio: 'Software engineer with experience in scalable systems, microservices architecture, and full-stack development. Focused on delivering efficient, high-performance solutions. Experienced in leading projects and defining robust architectures.',
  github: 'https://github.com/guierba',
  linkedin: 'https://linkedin.com/in/guierba',
};

export default async function Home() {
  const [profile, skills, experiences, projects, education] = await Promise.all(
    [
      client.fetch<Profile | null>(profileQuery),
      client.fetch<SkillGroup[]>(skillsQuery),
      client.fetch<Experience[]>(experiencesQuery),
      client.fetch<Project[]>(projectsQuery),
      client.fetch<Education[]>(educationQuery),
    ],
  );

  const p = profile ?? fallbackProfile;

  return (
    <div className="max-w-3xl mx-auto px-8 py-12 space-y-8 relative overflow-hidden z-10">

      <header>
        <h1 className="text-2xl font-bold text-foreground mb-4">
          {p.name} - {p.role}
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 text-muted-foreground text-sm">
          <span>{p.location}</span>
          <span className="hidden md:inline text-border">|</span>
          <span>{p.email}</span>
          {p.github && (
            <>
              <span className="hidden md:inline text-border">|</span>
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                github
              </a>
            </>
          )}
          {p.linkedin && (
            <>
              <span className="hidden md:inline text-border">|</span>
              <a href={p.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin
              </a>
            </>
          )}
        </div>
        <hr className="mt-6" />
      </header>

      <nav className="text-sm flex flex-col md:block gap-2 md:gap-0">
        <span className="block md:inline">
          <span className="text-muted-foreground md:hidden mr-2">&gt;</span>
          <span className="text-muted-foreground hidden md:inline">[</span>
          <a href="#about">About</a>
          <span className="text-muted-foreground hidden md:inline">]</span>
        </span>

        {skills.length > 0 && (
          <span className="block md:inline">
            <span className="text-muted-foreground md:hidden mr-2">&gt;</span>
            <span className="text-muted-foreground hidden md:inline"> [</span>
            <a href="#skills">Skills</a>
            <span className="text-muted-foreground hidden md:inline">]</span>
          </span>
        )}

        {experiences.length > 0 && (
          <span className="block md:inline">
            <span className="text-muted-foreground md:hidden mr-2">&gt;</span>
            <span className="text-muted-foreground hidden md:inline"> [</span>
            <a href="#experience">Experience</a>
            <span className="text-muted-foreground hidden md:inline">]</span>
          </span>
        )}

        {projects.length > 0 && (
          <span className="block md:inline">
            <span className="text-muted-foreground md:hidden mr-2">&gt;</span>
            <span className="text-muted-foreground hidden md:inline"> [</span>
            <a href="#projects">Projects</a>
            <span className="text-muted-foreground hidden md:inline">]</span>
          </span>
        )}

        {education.length > 0 && (
          <span className="block md:inline">
            <span className="text-muted-foreground md:hidden mr-2">&gt;</span>
            <span className="text-muted-foreground hidden md:inline"> [</span>
            <a href="#education">Education</a>
            <span className="text-muted-foreground hidden md:inline">]</span>
          </span>
        )}

        <span className="block md:inline">
          <span className="text-muted-foreground md:hidden mr-2">&gt;</span>
          <span className="text-muted-foreground hidden md:inline"> [</span>
          <a href="#contact">Contact</a>
          <span className="text-muted-foreground hidden md:inline">]</span>
        </span>
      </nav>

      <section id="about">
        <h2 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-3">
          &gt; About Me
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">{p.bio}</p>
      </section>

      {skills.length > 0 && (
        <section id="skills">
          <h2 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-3">
            &gt; Skills
          </h2>
          <div className="text-sm w-full space-y-4 md:space-y-0">
            {skills.map((group, index) => (
              <div
                key={`cat-${group.category}`}
                className={`flex flex-col md:flex-row md:py-2 ${
                  index !== skills.length - 1 ? 'border-b border-border pb-3 md:pb-2' : ''
                }`}
              >
                <div className="text-muted-foreground md:w-36 mb-1 md:mb-0">
                  {group.category}
                </div>
                <div className="text-foreground flex-1">
                  {group.skills.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {experiences.length > 0 && (
        <section id="experience">
          <h2 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-3">
            &gt; Experience
          </h2>
          {experiences.map((exp) => (
            <ExperienceItem
              key={`${exp.role}-${exp.company}`}
              role={exp.role}
              company={exp.company}
              companyUrl={exp.companyUrl}
              period={exp.period}
              highlights={exp.highlights}
            />
          ))}
        </section>
      )}

      {projects.length > 0 && (
        <section id="projects">
          <h2 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-3">
            &gt; Open Source Projects
          </h2>
          <div className="text-sm space-y-3 leading-relaxed">
            {projects.map((proj) => (
              <div key={proj.name}>
                {proj.url ? (
                  <a href={proj.url} target="_blank" rel="noopener noreferrer">
                    {proj.name}
                  </a>
                ) : (
                  <span className="text-primary">{proj.name}</span>
                )}
                <span className="text-muted-foreground">
                  {' '}
                  - {proj.description}
                  {proj.stars && ` ★ ${proj.stars}`}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section id="education">
          <h2 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-3">
            &gt; Education
          </h2>
          <div className="text-sm text-muted-foreground leading-relaxed">
            {education.map((edu) => (
              <p key={`${edu.degree}-${edu.institution}`}>
                <span className="text-foreground">{edu.degree}</span> - {edu.institution} (
                {edu.period})
              </p>
            ))}
          </div>
        </section>
      )}

      <section id="contact">
        <h2 className="text-lg font-bold text-foreground border-b border-border pb-2 mb-3">
          &gt; Contact
        </h2>
        <pre className="text-sm text-muted-foreground leading-relaxed">
          {`Email:    ${p.email}`}
          {p.github && `\nGitHub:   ${p.github}`}
          {p.linkedin && `\nLinkedIn: ${p.linkedin}`}
          {p.twitter && `\nTwitter:  ${p.twitter}`}
        </pre>
      </section>

      <footer className="border-t border-border pt-4 text-sm text-muted-foreground">
        <FooterEasterEgg />
      </footer>
    </div>
  );
}
