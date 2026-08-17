import React from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Mail,
  Menu,
  MousePointer2,
  MoveRight,
  Workflow,
  MessageCircle,
  Palette,
  X,
  Search,
} from "lucide-react";
import "./styles.css";

const portfolioAssets = "/assets";

const projects = [
  {
    id: "glow-skincare",
    number: "01",
    title: "Glow Skincare",
    kicker: "E-commerce experience",
    description: "A responsive skincare storefront shaped around product discovery, a calm visual system, and a clear path from browsing to buying.",
    image: `${portfolioAssets}/glow-skincare-BbikRSqt.jpg`,
    tags: ["React", "Responsive UI", "Vercel"],
    type: "Build",
    live: null,
    code: "https://github.com/BigTrevor1234/glow-skincare",
    detail: "A hands-on study in building a polished product-led interface from the ground up. The work covers layout, responsive behavior, content hierarchy, and deployment.",
  },
  {
    id: "weather",
    number: "02",
    title: "Weather Forecast App",
    kicker: "Live data interface",
    description: "A focused weather experience that turns API data into a readable, responsive interface for quick decisions on the go.",
    image: `${portfolioAssets}/weather-app-C-Qkxwnn.jpg`,
    tags: ["React", "JavaScript", "Weather API"],
    type: "Build",
    live: "https://bigtrevor1234.github.io/weather_projectupdate/",
    code: "https://github.com/BigTrevor1234/weather_projectupdate",
    detail: "A practical project for working with live data, state, responsive layouts, and the small decisions that make an information interface feel effortless.",
  },
  {
    id: "operations",
    number: "03",
    title: "Digital Operations",
    kicker: "Systems that stay clear",
    description: "A growing toolkit of planning, documentation, automation, and support workflows built around the way real teams work.",
    image: `${portfolioAssets}/asana-workspace2-0a1Q1VTc.jpg`,
    tags: ["Asana", "Notion", "Zapier"],
    type: "Support",
    live: "https://calendly.com/sheriffopatola/30min",
    code: null,
    detail: "Beyond interfaces, Trevor helps make the work behind the interface more dependable: research, task tracking, documentation, scheduling, and workflow automation.",
  },
];

const capabilityToolsets = {
  automate: [["n8n concepts", "Connected workflow thinking"], ["Zapier", "Workflow automation"], ["AI workflows", "Practical AI-assisted processes"], ["Zo Computer", "AI-powered computer workflows"]],
};

const skills = [
  { label: "Organize", title: "Projects, tasks, and workflows", icon: BriefcaseBusiness, body: "Keep projects, tasks, calendars, documents, and workflows structured so work stays visible and moving.", tools: ["Asana", "Trello", "Notion", "Google Workspace"] },
  { label: "Connect", title: "CRM, email, and outreach", icon: MessageCircle, body: "Support clear communication, client information, outreach, and dependable follow-up across a team.", tools: ["Gmail", "Google Workspace", "Slack", "CRM support"] },
  { label: "Create", title: "Content and visual assets", icon: Palette, body: "Turn ideas into useful content, social media materials, presentations, and polished visual assets.", tools: ["Canva", "Social content", "Presentations"] },
  { label: "Automate", title: "Workflow and AI support", icon: Workflow, body: "Spot repetitive work and shape practical automations and AI-assisted workflows that improve efficiency.", tools: capabilityToolsets.automate.map(([name]) => name) },
  { label: "Research", title: "Prospecting and data gathering", icon: Search, body: "Find, organize, and interpret useful information for prospecting, lead research, and business decisions.", tools: ["Prospecting", "Lead research", "Data gathering"] },
  { label: "Build", title: "Web development and implementation", icon: Code2, body: "Build and maintain responsive digital experiences with a practical frontend and deployment mindset.", tools: ["React", "JavaScript", "Tailwind CSS", "GitHub", "Vercel"] },
];

const virtualSupportTools = [
  { category: "ORGANIZE", icon: BriefcaseBusiness, tools: [["Asana", "Projects and task management"], ["Trello", "Visual task tracking"], ["Notion", "Documents and workspace organization"], ["Google Workspace", "Shared documents and coordination"]] },
  { category: "CONNECT", icon: MessageCircle, tools: [["Gmail", "Email management and outreach"], ["Slack", "Team communication"], ["CRM support", "Contact and relationship organization"]] },
  { category: "CREATE", icon: Palette, tools: [["Canva", "Content and visual asset creation"], ["Social content", "Content planning and publishing support"], ["Presentations", "Clear, useful slide decks"]] },
  { category: "AUTOMATE", icon: Workflow, tools: capabilityToolsets.automate },
  { category: "RESEARCH", icon: Search, tools: [["Prospecting", "Finding relevant opportunities and contacts"], ["Lead research", "Structured information for outreach"], ["Data gathering", "Collecting and organizing useful facts"]] },
  { category: "BUILD", icon: Code2, tools: [["React", "Responsive interface development"], ["JavaScript", "Interactive web experiences"], ["GitHub", "Code and project collaboration"], ["Vercel", "Frontend deployment"]] },
];

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#approach" },
  { label: "Capabilities", href: "#capabilities" },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeProject, setActiveProject] = React.useState(null);
  const [activeSkill, setActiveSkill] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const shouldReduceMotion = useReducedMotion();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sheriffopatola@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:sheriffopatola@gmail.com";
    }
  };

  const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=sheriffopatola%40gmail.com";

  const closeMenu = () => setMenuOpen(false);

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Sheriff Opatola home">
          <span className="wordmark-mark">S</span>
          <span>Sheriff <em>Opatola</em></span>
        </a>
        <nav id="primary-navigation" className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-frame">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="status-dot" /> Available for remote work <span className="eyebrow-line" /> Nigeria / UTC+1
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }}>
              Digital work,<br /><span>made useful.</span>
            </motion.h1>
            <motion.p className="hero-lede" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }}>
              I’m Sheriff — a web developer and virtual assistant who brings together thoughtful interfaces, dependable support, and the systems that keep good work moving.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.26 }}>
              <a className="button button-primary" href="#work">Explore the work <ArrowDown size={16} /></a>
              <button className="text-button" type="button" onClick={copyEmail}>{copied ? <><Check size={15} /> Email copied</> : <><Mail size={15} /> Get in touch</>}</button>
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.18 }}>
            <div className="hero-grid" />
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
            <div className="hero-core"><img src="/assets/trevor-profile.jpg" alt="Sheriff Opatola, web developer and virtual support professional" /></div>
            <div className="hero-note note-top"><span className="note-index">01</span><span>Build with intent</span></div>
            <div className="hero-note note-bottom"><MousePointer2 size={14} /><span>Scroll to explore</span></div>
            <div className="hero-caption">WEB / SUPPORT / SYSTEMS</div>
          </motion.div>
          <div className="hero-footer"><span>Scroll to see how I work</span><span className="hero-footer-line" /><span>01—05</span></div>
        </section>

        <section className="signal-band">
          <div><span className="signal-label">The overlap</span><strong>Technical enough to build it.</strong></div>
          <MoveRight className="signal-arrow" size={22} />
          <div><span className="signal-label">The advantage</span><strong>Organized enough to run it.</strong></div>
        </section>

        <section className="section-frame work-section" id="work">
          <div className="section-heading">
            <div><span className="section-number">01 / Selected work</span><h2>Proof, not promises.</h2></div>
            <p>Projects that show how I think: clarify the problem, make the experience feel simple, and leave behind something that works.</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article key={project.id} className={`project-row ${activeProject === project.id ? "is-expanded" : ""}`} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.06 }}>
                <button className="project-main" type="button" onClick={() => setActiveProject(activeProject === project.id ? null : project.id)} aria-expanded={activeProject === project.id}>
                  <span className="project-number">{project.number}</span>
                  <span className="project-image-wrap"><img src={project.image} alt={project.title} loading="lazy" /><span className="image-overlay"><ExternalLink size={20} /></span></span>
                  <span className="project-info"><span className="project-kicker">{project.kicker}</span><strong>{project.title}</strong><span>{project.description}</span><span className="tag-list">{project.tags.map((tag) => <i key={tag}>{tag}</i>)}</span></span>
                  <span className="project-toggle"><ChevronDown size={19} /></span>
                </button>
                <AnimatePresence initial={false}>
                  {activeProject === project.id && (
                    <motion.div className="project-detail" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      <p>{project.detail}</p>
                      <div className="detail-actions">{project.live && <a href={project.live} target="_blank" rel="noreferrer">{project.type === "Support" ? "Book a conversation" : "View live project"} <ArrowUpRight size={15} /></a>}{project.code && <a href={project.code} target="_blank" rel="noreferrer">{project.live ? "View source" : "View project on GitHub"} <Code2 size={15} /></a>}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="approach-section" id="approach">
          <div className="section-frame approach-layout">
            <div className="approach-intro"><span className="section-number">02 / The approach</span><h2>Good work lives in the details between the brief and the handoff.</h2><p>I’m drawn to the places where technology and operations meet. That means caring about the interface, the process behind it, and whether another person can pick up the work with confidence.</p></div>
            <div className="approach-steps">
              {["Listen for the real problem", "Make the next step obvious", "Leave the system better"].map((step, index) => <div className="approach-step" key={step}><span>0{index + 1}</span><strong>{step}</strong><p>{["Understand the goal, the people involved, and the friction hiding underneath the request.", "Turn complexity into clear structure — whether that is a web experience, a project board, or a repeatable workflow.", "Document clearly, communicate early, and build in a way that can grow beyond the first delivery."][index]}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section-frame capabilities-section" id="capabilities">
          <div className="section-heading capabilities-heading"><div><span className="section-number">03 / Capabilities</span><h2>One person.<br /><span>Useful range.</span></h2></div><p>Not a scattered list of skills — a connected way of helping digital teams move from idea to done.</p></div>
          <div className="capabilities-layout">
            <div className="skill-tabs" role="tablist" aria-label="Capabilities">
              {skills.map((skill, index) => <button key={skill.label} id={`skill-tab-${index}`} type="button" className={activeSkill === index ? "active" : ""} onClick={() => setActiveSkill(index)} role="tab" aria-selected={activeSkill === index} aria-controls="skill-panel"><span>0{index + 1}</span><skill.icon size={18} /><strong>{skill.label}</strong><ArrowUpRight size={16} /></button>)}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeSkill} id="skill-panel" role="tabpanel" aria-labelledby={`skill-tab-${activeSkill}`} className="skill-panel" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}>
                <div className="skill-icon">{(() => { const ActiveIcon = skills[activeSkill].icon; return <ActiveIcon size={25} />; })()}</div><span className="panel-label">{skills[activeSkill].label}</span><h3>{skills[activeSkill].title}</h3><p>{skills[activeSkill].body}</p><div className="panel-detail"><span>Useful range</span><div>{skills[activeSkill].tools.map((tool) => <i key={tool}>{tool}</i>)}</div></div></motion.div>
            </AnimatePresence>
          </div>
          <div className="toolkit-block">
            <div className="toolkit-heading"><div><span className="panel-label">Virtual support toolkit</span><h3>Tools that keep the work moving.</h3></div><p>Familiar platforms, connected thoughtfully to the task at hand.</p></div>
            <div className="toolkit-grid">
              {virtualSupportTools.map((group) => { const GroupIcon = group.icon; return <details className="toolkit-group" key={group.category} open><summary><span className="toolkit-group-icon"><GroupIcon size={16} /></span><strong>{group.category}</strong><ChevronDown size={16} /></summary><div className="tool-list">{group.tools.map(([name, use]) => <div className="tool-item" key={name}><span className="tool-badge">{name.slice(0, 1)}</span><span><strong>{name}</strong><small>{use}</small></span></div>)}</div></details>; })}
            </div>
          </div>
        </section>

        <section className="presence-section">
          <div className="section-frame presence-layout"><div><span className="section-number">04 / A little more context</span><h2>The builder behind the work.</h2></div><div className="presence-copy"><p>I’m an HND graduate in Software & Web Development, based in Nigeria and open to remote work. My experience spans IT administration, freelance web development, volunteer business support, and the everyday coordination that keeps a team moving.</p><p>I like learning in public through real projects — then applying that same curiosity to the practical work: finding information, organizing the details, and making digital tools less frustrating for the people using them.</p><a className="inline-link" href="/Sheriff-Opatola-Resume.pdf" download>Read the full resume <ArrowUpRight size={15} /></a></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="section-frame contact-inner"><div className="contact-top"><span className="section-number">05 / Start a conversation</span><span className="contact-availability"><span className="status-dot" /> Open to remote roles & projects</span></div><h2>Have something worth<br /><em>making clearer?</em></h2><div className="contact-bottom"><p>Tell me what you are building, organizing, or trying to improve. I’m always interested in work where thoughtful execution makes a real difference.</p><div className="contact-actions"><a className="button button-light" href="https://calendly.com/sheriffopatola/30min" target="_blank" rel="noreferrer"><CalendarDays size={16} /> Book a call</a><a className="button button-outline-light" href={gmailComposeUrl} target="_blank" rel="noreferrer" aria-label="Open a Gmail compose window addressed to Sheriff Opatola"><Mail size={16} /> Email me</a></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="section-frame footer-inner"><span>© {new Date().getFullYear()} Sheriff Opatola</span><span className="footer-note">Built with curiosity & care</span><div className="footer-links"><a href="https://github.com/BigTrevor1234" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={17} /></a><a href="https://www.linkedin.com/in/sheriff-opatola-599b2a128" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={17} /></a><a href={gmailComposeUrl} target="_blank" rel="noreferrer" aria-label="Open Gmail compose addressed to Sheriff Opatola"><Mail size={17} /></a></div></div></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
