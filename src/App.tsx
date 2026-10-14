import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  X,
  Database,
  Smartphone,
  Globe,
  Layers3,
  GraduationCap,
  BriefcaseBusiness,
  ExternalLink,
  Phone,
  MapPin,
  Languages,
} from "lucide-react";
import { useState } from "react";
import "./index.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const contact = {
  email: "ngogainnocent1@gmail.com",
  phone: "+250782214360",
  linkedin: "https://www.linkedin.com/in/ngoga-innocent-patrick-92b1a621a/",
  github: "https://github.com/ngoga-innocent",
  location: "Kigali, Rwanda",
};

const projects = [
  {
    number: "01",
    name: "Perfect Wallet",
    shortName: "Pwallet",
    category: "FINTECH · PERSONAL FINANCE",
    description:
      "A personal finance application designed to manage financial accounts, income, expenses, transfers, lending, borrowing, and payment reminders.",
    stack: ["React Native", "Expo", "Django", "TypeScript"],
    icon: Smartphone,
    color: "green",
    link: "",
    actionLabel: "Project details coming soon",
  },
  {
    number: "02",
    name: "MyNextMarket",
    category: "WEB PLATFORM",
    description:
      "A web platform project focused on delivering an accessible online experience. Visit the live website to explore the platform.",
    stack: ["Web Development", "Frontend", "Backend"],
    icon: Globe,
    color: "blue",
    link: "https://mynextmarket.com/",
    actionLabel: "Visit live website",
  },
  {
    number: "03",
    name: "VolcanoRom",
    category: "WEB DEVELOPMENT",
    description:
      "A web development project. Explore the live website to learn more about its services and user experience.",
    stack: ["Web Development", "UI Development"],
    icon: Layers3,
    color: "gold",
    link: "https://www.volcanorom.com/",
    actionLabel: "Visit live website",
  },
  {
    number: "04",
    name: "Umuziki Gatolika",
    category: "CATHOLIC MUSIC · DIGITAL PLATFORM",
    description:
      "A platform for Catholic music resources, supporting access to music sheets and digital content for the Catholic music community.",
    stack: ["React", "TypeScript", "Django", "REST API"],
    icon: Code2,
    color: "green",
    link: "https://umuzikigatolika.com/",
    actionLabel: "Visit live website",
  },
  {
    number: "05",
    name: "CatholicCompose",
    category: "CATHOLIC MUSIC · WEB PLATFORM",
    description:
      "A Catholic music-related web project. Visit the website to discover its content and functionality.",
    stack: ["Web Development", "Digital Platform"],
    icon: Globe,
    color: "blue",
    link: "https://catholiccompose.com/",
    actionLabel: "Visit live website",
  },
  {
    number: "06",
    name: "KazniKaz",
    category: "WEB DEVELOPMENT",
    description:
      "A featured project in my development portfolio. Project information and the public website link will be added here.",
    stack: ["Software Development", "Web Technology"],
    icon: Database,
    color: "gold",
    link: "",
    actionLabel: "Project link coming soon",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "jQuery",
    ],
  },
  {
    title: "Backend Development",
    icon: Layers3,
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "PHP",
      "Laravel",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      "React Native",
      "Expo",
      "Flutter",
      "Responsive Design",
      "API Integration",
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Git",
      "GitHub",
      "Vite",
      "Yarn",
    ],
  },
];

const experience = [
  {
    role: "IT Officer",
    company: "College Saint Ignace – Mugina",
    period: "2023–2026",
    description:
      "Supported ICT-related work in an educational environment and contributed to technology adoption and practical digital skills development.",
    icon: BriefcaseBusiness,
  },
  {
    role: "Software Developer",
    company: "Kigali Microloans & House Major",
    period: "Professional experience",
    description:
      "Worked on software development involving mobile applications and web applications, contributing to digital solutions for practical business needs.",
    icon: Code2,
  },
  {
    role: "Software Development Intern",
    company: "TOAST GROUP",
    period: "Professional internship",
    description:
      "Collaborated across software development lifecycle activities, from requirements gathering to production releases. Contributed to desktop and mobile software, reusable code, and development planning.",
    icon: Layers3,
  },
  {
    role: "Academic Development Intern",
    company: "Rwanda Mines, Petroleum and Gas Board",
    period: "Academic internship",
    description:
      "Gained experience with Laravel/PHP and Django/Python, gathered requirements, helped define project specifications, and collaborated with developers to resolve technical issues.",
    icon: Database,
  },
];

const education = [
  {
    qualification: "Master's Degree in Computing and Information Technology",
    institution: "University of Lay Adventists of Kigali (UNILAK)",
    year: "2026",
  },
  {
    qualification: "Bachelor's Degree in Information Technology",
    institution: "University of Rwanda",
    year: "2023",
  },
  {
    qualification: "Advanced Secondary Education — PCM",
    institution: "Petit Séminaire de Rwesero",
    year: "2017",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">N</span>
          <span>
            NGOGA<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav
          id="primary-navigation"
          className={menuOpen ? "nav-links open" : "nav-links"}
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              FULL-STACK DEVELOPER · RWANDA
            </div>

            <h1>
              Building digital
              <br />
              products with
              <br />
              <span className="gradient-text">purpose & precision.</span>
            </h1>

            <p className="hero-description">
              I'm Innocent Patrick Ngoga, a software developer with experience
              in web development, mobile applications, backend systems, and
              database-driven solutions. I turn practical problems into useful
              digital products.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <ArrowRight size={17} />
              </a>

              <a href="#contact" className="button button-secondary">
                Contact me
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub size={18} /> GitHub
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedinIn size={18} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer code illustration">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="code-card">
              <div className="code-card-header">
                <div className="window-dots">
                  <i />
                  <i />
                  <i />
                </div>
                <span>developer.ts</span>
                <Code2 size={16} />
              </div>

              <div className="code-content">
                <p>
                  <span className="line-number">01</span>{" "}
                  <span className="code-purple">const</span> developer = {"{"}
                </p>
                <p>
                  <span className="line-number">02</span> &nbsp; name:{" "}
                  <span className="code-green">"Innocent Ngoga"</span>,
                </p>
                <p>
                  <span className="line-number">03</span> &nbsp; role:{" "}
                  <span className="code-green">"Full-Stack Developer"</span>,
                </p>
                <p>
                  <span className="line-number">04</span> &nbsp; frontend:{" "}
                  <span className="code-yellow">["React", "JS"]</span>,
                </p>
                <p>
                  <span className="line-number">05</span> &nbsp; backend:{" "}
                  <span className="code-yellow">["Python", "Django"]</span>,
                </p>
                <p>
                  <span className="line-number">06</span> &nbsp; mobile:{" "}
                  <span className="code-yellow">["React Native"]</span>,
                </p>
                <p>
                  <span className="line-number">07</span> {"}"};
                </p>
                <p className="code-comment">
                  // Building software that makes a difference.
                </p>
              </div>

              <div className="code-card-footer">
                <span className="status-dot" />
                Ready to build
              </div>
            </div>

            <div className="floating-chip chip-top">
              <Code2 size={17} /> Clean code
            </div>

            <div className="floating-chip chip-bottom">
              <Layers3 size={17} /> Full-stack thinking
            </div>
          </div>

          <a href="#about" className="scroll-cue">
            <ArrowDown size={15} /> SCROLL TO EXPLORE
          </a>
        </section>

        {/* TECHNOLOGY STRIP */}
        <section className="trust-strip" aria-label="Core technologies">
          <div className="section-wrap trust-inner">
            <span>CORE TECHNOLOGIES</span>
            <div>React</div>
            <div>JavaScript</div>
            <div>Python</div>
            <div>Django</div>
            <div>React Native</div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section-wrap content-section" id="about">
          <div className="section-heading">
            <span className="section-kicker">01 / ABOUT ME</span>
            <h2>
              Engineering ideas into{" "}
              <span className="gradient-text">reality.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I am a software developer with a background in Information
                Technology and experience working across web applications,
                mobile software, APIs, and databases.
              </p>

              <p>
                My development experience includes working with organizations
                such as Kigali Microloans and House Major, alongside internship
                experience in software development and enterprise systems.
              </p>

              <p>
                I have also worked in ICT education, supporting digital skills
                development and helping learners gain practical experience with
                technology.
              </p>

              <p>
                I value teamwork, clear communication, maintainable code,
                continuous learning, and delivering reliable solutions.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card">
                <Code2 />
                <strong>Full-stack</strong>
                <span>Web development</span>
              </div>

              <div className="stat-card">
                <Smartphone />
                <strong>Mobile apps</strong>
                <span>Cross-platform development</span>
              </div>

              <div className="stat-card">
                <Database />
                <strong>Backend</strong>
                <span>APIs & databases</span>
              </div>

              <div className="stat-card">
                <GraduationCap />
                <strong>ICT education</strong>
                <span>Teaching & technology</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="content-section section-muted" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <span className="section-kicker">02 / TECHNICAL SKILLS</span>
              <h2>
                The tools behind{" "}
                <span className="gradient-text">the work.</span>
              </h2>
              <p className="section-description">
                Technologies and tools from my development experience.
              </p>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-icon">
                      <Icon size={22} />
                    </div>

                    <h3>{group.title}</h3>

                    <div className="skill-tags">
                      {group.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section-wrap content-section" id="projects">
          <div className="section-heading projects-heading">
            <div>
              <span className="section-kicker">03 / SELECTED PROJECTS</span>
              <h2>
                Work that <span className="gradient-text">matters.</span>
              </h2>
            </div>

            <span className="project-count">
              {String(projects.length).padStart(2, "0")} FEATURED PROJECTS
            </span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article className="project-card" key={project.number}>
                  <div className={`project-art ${project.color}`}>
                    <div className="project-art-top">
                      <span>{project.number} / PROJECT</span>
                      <Icon size={22} />
                    </div>

                    <div className="project-art-symbol">
                      <Icon size={58} strokeWidth={1.1} />
                    </div>

                    <span className="art-watermark">
                      {project.shortName || project.name}
                    </span>
                  </div>

                  <div className="project-body">
                    <span className="project-category">{project.category}</span>

                    <h3>{project.name}</h3>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.stack.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    {project.link ? (
                      <a
                        className="project-link"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.actionLabel}: ${project.name}`}
                      >
                        {project.actionLabel}
                        <ExternalLink size={16} />
                      </a>
                    ) : (
                      <span className="project-private">
                        {project.actionLabel}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="content-section section-muted" id="experience">
          <div className="section-wrap">
            <div className="section-heading">
              <span className="section-kicker">04 / PROFESSIONAL JOURNEY</span>
              <h2>
                Experience that{" "}
                <span className="gradient-text">shapes my work.</span>
              </h2>
            </div>

            <div className="timeline">
              {experience.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="timeline-item"
                    key={`${item.role}-${item.company}`}
                  >
                    <div className="timeline-icon">
                      <Icon size={20} />
                    </div>

                    <div>
                      <span className="timeline-label">
                        {item.period.toUpperCase()}
                      </span>

                      <h3>{item.role}</h3>
                      <p className="timeline-place">{item.company}</p>
                      <p>{item.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section-wrap content-section" id="education">
          <div className="section-heading">
            <span className="section-kicker">05 / EDUCATION</span>
            <h2>
              A foundation for{" "}
              <span className="gradient-text">continuous growth.</span>
            </h2>
          </div>

          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item" key={item.qualification}>
                <div className="timeline-icon">
                  <GraduationCap size={20} />
                </div>

                <div>
                  <span className="timeline-label">{item.year}</span>
                  <h3>{item.qualification}</h3>
                  <p className="timeline-place">{item.institution}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <Languages />
              <strong>Kinyarwanda</strong>
              <span>Native</span>
            </div>

            <div className="stat-card">
              <Languages />
              <strong>English</strong>
              <span>Very good</span>
            </div>

            <div className="stat-card">
              <Languages />
              <strong>French</strong>
              <span>Fluent</span>
            </div>

            <div className="stat-card">
              <MapPin />
              <strong>Rwanda</strong>
              <span>Kigali</span>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <span className="section-kicker">06 / LET'S CONNECT</span>

            <h2>
              Have an idea?
              <br />
              <span className="gradient-text">Let's build it.</span>
            </h2>

            <p>
              Interested in working together, discussing a software development
              opportunity, or collaborating on a project? Feel free to get in
              touch.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={`mailto:${contact.email}`}
              >
                <Mail size={17} />
                Send me an email
                <ArrowUpRight size={17} />
              </a>

              <a
                className="button button-secondary"
                href={`tel:${contact.phone}`}
              >
                <Phone size={17} />
                Call me
              </a>
            </div>

            <div className="contact-details">
              <a href={`mailto:${contact.email}`}>
                <Mail size={17} />
                {contact.email}
              </a>

              <a href={`tel:${contact.phone}`}>
                <Phone size={17} />
                {contact.phone}
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={17} />
                LinkedIn profile
                <ArrowUpRight size={14} />
              </a>

              <span>
                <MapPin size={17} />
                {contact.location}
              </span>
            </div>

            <div className="contact-decoration">
              <Code2 size={120} />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">N</span>
          <span>
            NGOGA<span className="brand-dot">.</span>
          </span>
        </a>

        <p>Designed & built with care.</p>

        <div className="footer-socials">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={17} />
          </a>

          <a href={`mailto:${contact.email}`} aria-label="Email">
            <Mail size={17} />
          </a>

          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>
        </div>

        <span>© {new Date().getFullYear()} Innocent Patrick Ngoga</span>
      </footer>
    </>
  );
}

export default App;
