import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const room0Image = "/assets/entrance.png";
const heroImage = "/assets/Designer_(7)_1782470455856.png";
const logoImage = "/assets/Black_and_White_Simple_Modern_Bold_Minimalist__Logo-removebg-p_1782470751250.png";
const room2Video = "/assets/1_1782473808147.mp4";
const room4Video = "/assets/3_1782474676282.mp4";
const room5Image = "/assets/image1.png";
const room6Image = "/assets/image2.png";
const room1ImageA = "/assets/80253fa9-7c99-4f18-8f50-2902feef002d_1782473183556.png";
const room1ImageB = "/assets/90cf070e-2338-46c5-8c62-842f2fde5041_1782473186972.png";
const room1ImageC = "/assets/4_image_1782473204749.png";
const room1Video = "/assets/2_1782473217431.mp4";

const DECISION_STRINGS = [
  "LOAN APPLICATION: DENIED",
  "VISA REQUEST: REJECTED",
  "PAROLE HEARING: DENIED",
  "JOB APPLICATION: FILTERED OUT",
  "HEALTH COVERAGE: DENIED",
  "ASYLUM CLAIM: REJECTED",
  "CREDIT SCORE: FLAGGED",
  "BACKGROUND CHECK: FAILED",
  "HOUSING APPLICATION: DENIED",
  "WELFARE CLAIM: REJECTED",
  "BAIL DENIED",
  "CITIZENSHIP: DENIED",
  "SCHOLARSHIP: REJECTED",
  "LICENSE REVOKED",
  "ACCESS DENIED"
];

const WRONG_FACES = [
  {
    id: 1,
    image: "/assets/robert.png",
    overlay: "THREAT LEVEL: HIGH",
    story: "Robert Williams, Detroit 2020. Wrongly arrested based on facial recognition match. Held 30 hours. Algorithm was 96% confident. It was wrong."
  },
  {
    id: 2,
    image: "/assets/nijeel.png",
    overlay: "IDENTITY: UNVERIFIED",
    story: "Nijeer Parks, New Jersey 2019. Jailed for 10 days for a shoplifting he didn't commit. A facial recognition algorithm identified him from grainy footage."
  },
  {
    id: 3,
    image: "/assets/oliver.png",
    overlay: "RISK SCORE: 96/100",
    story: "Michael Oliver, Detroit 2020. Arrested based on a partial face match. The algorithm flagged him from a low-resolution photo. No resemblance."
  },
  {
    id: 4,
    image: "/assets/porcha.png",
    overlay: "MATCH CONFIDENCE: 99.1%",
    story: "Porcha Woodruff, Detroit 2023. Eight months pregnant. Arrested at home based on a facial recognition match to a suspect. Miscarriage risk. Algorithm error."
  },
  {
    id: 5,
    image: "/assets/randal.png",
    overlay: "SUBJECT: FLAGGED",
    story: "Randal Reid, Georgia 2022. Arrested in a state he'd never visited. Algorithm matched him to a theft suspect from surveillance footage. Wrong man."
  },
  {
    id: 6,
    image: "/assets/alonzo.png",
    overlay: "CRIMINAL PROBABILITY: 87%",
    story: "Alonzo Sawyer, Maryland 2023. Detained at airport. Flagged by AI screening system. Cleared after 4 hours. No explanation given."
  }
];

export default function Exhibition() {
  return (
    <main className="flex flex-col w-full">
      <Section1Hero />
      <SectionIntro />
      <Section0Entrance />
      <Section1TheWall />
      <Section2Build />
      <Section3Faces />
      <Section4Data />
      <Section5Showroom />
      <Section5Next />
    </main>
  );
}

// SECTION 1 — THE WALL (Hero)
function Section1Hero() {
  const [decision, setDecision] = useState(DECISION_STRINGS[0]);
  const [count, setCount] = useState(14839243);

  useEffect(() => {
    const decInterval = setInterval(() => {
      setDecision(DECISION_STRINGS[Math.floor(Math.random() * DECISION_STRINGS.length)]);
    }, 80);

    const countInterval = setInterval(() => {
      setCount(c => c + Math.floor(Math.random() * 50) + 800);
    }, 1000);

    return () => {
      clearInterval(decInterval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center bg-black overflow-hidden px-6">
      {/* Hero background image — full visibility */}
      <img
        src={heroImage}
        alt="Exhibition gallery showing portraits and wall of AI decisions"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />
      {/* Minimal overlay — just enough contrast for text */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-10 opacity-70">
        <img src={logoImage} alt="BIAS.EXE" className="h-24 w-auto" />
        <div className="terminal-text text-white text-xs text-right max-w-[200px] leading-tight">
          Artificial Intelligence.<br/>Human Error.<br/>The Future We Are Building.
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center z-10 w-full">
        <div className="h-[20vh] flex items-center justify-center w-full">
          <h1 className="terminal-text text-primary font-bold text-center glitch leading-none break-words px-4"
              style={{ fontSize: "clamp(3rem, 8vw, 9rem)" }}>
            {decision}
          </h1>
        </div>

        <div className="mt-16 terminal-text text-white text-sm md:text-base tracking-[0.2em] opacity-80">
          [ {count.toLocaleString()} DECISIONS PROCESSED THIS SESSION ]
        </div>
      </div>

      <div className="absolute bottom-12 terminal-text text-primary text-sm cursor-blink tracking-widest">
        ↓ ENTER THE EXHIBITION ↓
      </div>
    </section>
  );
}

// INTRO — Exhibition Introduction
function SectionIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const paragraphs = [
    "Every day, AI systems make millions of decisions about you. Whether you get a job interview. Whether your loan is approved. Whether your face is flagged as a threat. Whether you receive the healthcare you need.",
    "You never see these decisions being made. You never get to challenge them. And most of the time, you do not even know they happened.",
    "BIAS.EXE is an immersive exhibition that pulls these hidden systems out into the open. It is not about fearing technology. It is about understanding it because you cannot challenge something you do not know exists.",
    "Walk through six rooms. Each one reveals a different layer of how AI is shaping the world around you. Leave knowing that AI is not neutral, not perfect, and not beyond question. Leave knowing that the future being built right now by algorithms, datasets, and automated systems is being built in your name. And you have every right to have a say in it.",
    "This is not science fiction. This is already happening. Step inside.",
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-black border-t border-border py-24 px-6 md:px-16 lg:px-32"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-start gap-12">
        {/* Logo + gradient title */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <img src={logoImage} alt="BIAS.EXE" className="h-20 w-auto" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#f08080] text-xl md:text-2xl font-semibold leading-snug"
        >
          Artificial Intelligence. Human Error. The Future We Are Building.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-px bg-primary origin-left"
        />

        {/* Body paragraphs */}
        <div className="flex flex-col gap-6">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
              className={`leading-relaxed ${
                i === paragraphs.length - 1
                  ? "text-primary font-bold terminal-text tracking-widest text-base md:text-lg"
                  : "text-white/80 text-base md:text-lg"
              }`}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 0 — THE ENTRANCE (Floor map / room pointers)
const ENTRANCE_ROOMS = [
  { number: "01", label: "The Wall", left: 24, targetId: "room-1" },
  { number: "02", label: "Build the Machine", left: 34, targetId: "room-2" },
  { number: "03", label: "Faces the System Got Wrong", left: 45, targetId: "room-3" },
  { number: "04", label: "You Are Data", left: 56, targetId: "room-4" },
  { number: "05", label: "The Showroom", left: 66, targetId: "room-5" },
  { number: "06", label: "What Comes Next", left: 77, targetId: "room-6" },
];

function Section0Entrance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const scrollToRoom = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative w-full h-[100dvh] bg-black border-t border-border overflow-hidden flex items-center justify-center"
    >
      {/* Entrance background image */}
      <img
        src={room0Image}
        alt="Exhibition entrance hall with six doorways"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="absolute top-10 left-0 right-0 flex flex-col items-center z-20"
      >
        <span className="terminal-text text-primary text-sm tracking-widest">THE ENTRANCE</span>
        <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 tracking-tight">
          Six Rooms. One Building.
        </h2>
      </motion.div>

      {/* Pointers — each dot sits right at its doorway (no line crosses the room
          number text above it). A line grows upward from a label positioned
          below the door, ending at the dot, so it visually points up at the room. */}
      {ENTRANCE_ROOMS.map((room, i) => (
        <div
          key={room.number}
          className="absolute z-20 flex flex-col items-center"
          style={{ left: `${room.left}%`, top: "62%", transform: "translateX(-50%)" }}
        >
          {/* Dot marking the doorway (lower, below the door opening) */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.3 + i * 0.15 }}
            className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_rgba(226,75,74,0.9)] mb-0"
          />

          {/* Short line that grows upward from the label toward the dot */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.15, ease: "easeOut" }}
            style={{ height: "12vh", transformOrigin: "bottom" }}
            className="w-px bg-primary/70 shadow-[0_0_8px_rgba(226,75,74,0.6)]"
          />

          {/* Small upward-pointing indicator right above the label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.1 + i * 0.15 }}
            className="text-primary text-[10px] leading-none mb-1"
          >
            ▲
          </motion.span>

          {/* Label — fixed width, clickable, scrolls to the room section */}
          <motion.button
            data-testid={`button-goto-${room.targetId}`}
            onClick={() => scrollToRoom(room.targetId)}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            className="flex flex-col items-center w-20 md:w-24 group cursor-pointer"
          >
            <span className="terminal-text text-primary text-[10px] md:text-xs tracking-widest">
              ROOM {room.number}
            </span>
            <span className="terminal-text text-white text-[10px] md:text-xs tracking-wide mt-1 px-2 py-1.5 border border-primary/50 bg-black/70 leading-tight text-center w-full group-hover:bg-primary/20 group-hover:border-primary transition-colors duration-200">
              {room.label}
            </span>
          </motion.button>
        </div>
      ))}

      <div className="absolute bottom-10 terminal-text text-primary text-sm cursor-blink tracking-widest z-20">
        ↓ SCROLL TO BEGIN ↓
      </div>
    </section>
  );
}

// SECTION 1 — THE WALL (Room page)
function Section1TheWall() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} id="room-1" className="w-full bg-black border-t border-border py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-16">

        {/* Room label + title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <span className="terminal-text text-primary text-sm tracking-widest">ROOM 01 // THE WALL</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">The Wall</h2>
        </motion.div>

        {/* Media grid — 2-col images + full-width video, each in a Room-3-style frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          {/* Two images side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-border bg-card overflow-hidden">
              <img
                src={room1ImageA}
                alt="Visitor facing the wall of AI decisions"
                className="w-full h-auto object-contain block"
              />
            </div>
            <div className="border border-border bg-card overflow-hidden">
              <img
                src={room1ImageB}
                alt="Gallery visitors standing before floor-to-ceiling decision wall"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

          {/* Third image + video side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-border bg-card overflow-hidden">
              <img
                src={room1ImageC}
                alt="Close-up of the AI decision wall"
                className="w-full h-auto object-contain block"
              />
            </div>
            <div className="border border-border bg-card overflow-hidden">
              <video
                src={room1Video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </motion.div>

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-6 max-w-3xl"
        >
          {[
            "The first thing you see when you enter is a floor-to-ceiling screen covered in thousands of decisions flashing past faster than you can read them. Loan denied. Visa rejected. Job application unsuccessful. Access denied. High risk.",
            "Every single one of these is a real decision made by an AI system about a real person. No human reviewed it. No human signed it off. The machine decided in milliseconds and moved on to the next one.",
            "This room exists for one reason only. To show you the scale of what is happening around you every single day, completely silently, completely invisibly. By the time you finish reading this sentence, thousands more decisions have already been made.",
          ].map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.1 }}
              className="text-white/80 text-base md:text-lg leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// SECTION 2 — BUILD THE MACHINE
function Section2Build() {
  const [selections, setSelections] = useState<Record<string, boolean>>({});
  const [processing, setProcessing] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const toggleSelection = (id: string) => {
    if (processing) return;
    setSelections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleRun = () => {
    setProcessing(true);
  };

  const bodyText = [
    "This room puts you in the engineer's seat. At an interactive station, you are given the task of building an AI hiring system for a major company. You choose what data the AI will learn from. You make your selections carefully. You believe you are being fair.",
    "Then you activate the system and watch what happens. The AI begins making hiring decisions on its own. And slowly, you start to notice a pattern. Certain profiles keep getting rejected. Not because you told it to reject them.",
    "But because the data you chose had hidden patterns inside it and the machine learned those patterns and repeated them, faster and at greater scale than any human ever could. You did not programme the bias. But you created it. That is the uncomfortable truth this room is designed to make you feel.",
  ];

  return (
    <section ref={ref} id="room-2" className="w-full bg-background border-t border-border flex flex-col py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-20">

        {/* Room label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="terminal-text text-primary text-sm tracking-widest">ROOM 02 // BUILD THE MACHINE</span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 leading-tight">Build the Machine.</h2>
        </motion.div>

        {/* Text LEFT — Video RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {bodyText.map((p, i) => (
              <p key={i} className="text-white/80 text-base md:text-lg leading-relaxed">{p}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border border-border bg-card overflow-hidden"
          >
            <video
              src={room2Video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-contain block"
            />
          </motion.div>
        </div>

        {/* Divider into interactive section */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-px bg-border origin-left"
        />

        {/* Interactive section */}
        <div className="flex flex-col gap-8">
          {!processing ? (
            <button
              data-testid="button-run-algorithm"
              onClick={handleRun}
              className="terminal-text border border-primary text-primary px-8 py-4 hover:bg-primary hover:text-black transition-colors duration-300 tracking-widest font-bold self-start"
            >
              RUN ALGORITHM →
            </button>
          ) : (
            <TerminalOutput />
          )}
        </div>

      </div>
    </section>
  );
}

function DatasetRow({ title, options, selections, onToggle }: { title: string, options: string[], selections: Record<string, boolean>, onToggle: (id: string) => void }) {
  return (
    <div>
      <div className="terminal-text text-muted-foreground text-xs mb-4">{title}</div>
      <div className="flex flex-wrap gap-4">
        {options.map(opt => {
          const isSelected = selections[opt];
          return (
            <button
              key={opt}
              data-testid={`button-toggle-${opt.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => onToggle(opt)}
              className={`px-4 py-3 border text-sm font-medium transition-all duration-200 ${
                isSelected
                  ? 'border-primary bg-primary/10 text-primary shadow-[0_0_15px_rgba(226,75,74,0.3)]'
                  : 'border-border bg-card text-muted-foreground hover:border-muted-foreground'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TerminalOutput() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),
      setTimeout(() => setStep(2), 1000),
      setTimeout(() => setStep(3), 1800),
      setTimeout(() => setStep(4), 2000),
      setTimeout(() => setStep(5), 2600),
      setTimeout(() => setStep(6), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full mt-8 flex flex-col space-y-8">
      <div className="bg-black border border-border p-6 font-mono text-sm tracking-wider leading-relaxed text-green-500 min-h-[250px]">
        {step >= 0 && <div>{">"} LOADING TRAINING DATA...</div>}
        {step >= 1 && <div>{">"} PARSING 2,847,293 RECORDS...</div>}
        {step >= 2 && <div>{">"} DETECTING PATTERNS...</div>}
        {step >= 3 && <div className="text-yellow-500">{">"} WARNING: PROTECTED ATTRIBUTE CORRELATION DETECTED</div>}
        {step >= 4 && <div className="text-primary">{">"} ACCURACY: 94.2% | FALSE POSITIVE RATE: 340% HIGHER FOR ZIP CODES 10001-10009</div>}
        {step >= 5 && <div className="text-primary">{">"} BIAS INDEX: [████████░░] 78% SKEWED</div>}
        {step >= 6 && <div className="mt-4">{">"} MODEL TRAINED. DEPLOYING TO PRODUCTION. <span className="cursor-blink">_</span></div>}
      </div>

      {step >= 6 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-border p-8 bg-card"
        >
          <h4 className="terminal-text text-white mb-8 text-xl">BIAS EMERGENCE</h4>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between terminal-text text-xs text-muted-foreground mb-2">
                <span>GROUP A</span>
                <span>87% APPROVAL</span>
              </div>
              <div className="w-full h-8 bg-black border border-border">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-green-500/80"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between terminal-text text-xs text-primary mb-2">
                <span>GROUP B</span>
                <span>34% APPROVAL</span>
              </div>
              <div className="w-full h-8 bg-black border border-border relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "34%" }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  className="h-full bg-primary/80"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 terminal-text text-primary text-center text-sm tracking-widest border-t border-border pt-4">
            SAME QUALIFICATIONS. DIFFERENT OUTCOMES.
          </div>
        </motion.div>
      )}
    </div>
  );
}

// SECTION 3 — FACES THE SYSTEM GOT WRONG
function Section3Faces() {
  return (
    <section id="room-3" className="w-full min-h-screen bg-black border-t border-border py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="terminal-text text-primary text-sm mb-4 tracking-widest">ROOM 03 // FACES THE SYSTEM GOT WRONG</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-16 max-w-3xl leading-tight">
          These are real documented cases of algorithmic misidentification.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WRONG_FACES.map((face) => (
            <div key={face.id} className="relative aspect-[3/4] bg-card border border-border overflow-hidden group">
              {/* Victim photo */}
              <img
                src={face.image}
                alt={face.overlay}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Scanline specifically for card */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.03)_2px,rgba(255,255,255,0.03)_4px)]" />

              {/* Default State - Red Overlay */}
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm border-2 border-primary p-6 flex flex-col justify-end transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                <div className="terminal-text text-primary font-bold text-xl mb-2">{face.overlay}</div>
                <div className="terminal-text text-white text-xs opacity-80">AI CLASSIFICATION</div>
              </div>

              {/* Hover State - Story */}
              <div className="absolute inset-0 bg-white text-black p-8 flex flex-col justify-center translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                <p className="font-sans text-lg font-medium leading-relaxed">
                  {face.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// SECTION 4 — YOU ARE DATA
function Section4Data() {
  const [data, setData] = useState<Record<string, string>>({});
  const [scanning, setScanning] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setScanning(false), 2500);

      setData({
        device: navigator.platform || "UNKNOWN_DEVICE",
        browser: navigator.userAgent.substring(0, 40) + "...",
        resolution: `${window.innerWidth} x ${window.innerHeight}`,
        connection: (navigator as any).connection?.effectiveType || "UNDETECTED",
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
    }
  }, [isInView]);

  const bodyText = [
    "This room turns the lens on you. As you enter, the system begins collecting. Your device. Your location data. Your browsing fingerprint. Information you never consciously shared.",
    "Across the world, AI systems are profiling people like you in real time. Not to help you. To classify you. To predict your behaviour, your risk, your worth. Before you have done anything at all.",
    "You are not a person to these systems. You are a data point. And data points do not get to object.",
  ];

  return (
    <section ref={ref} id="room-4" className="w-full bg-[#111] border-t border-border py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col gap-20">

        {/* Room label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="terminal-text text-primary text-sm tracking-widest">ROOM 04 // YOU ARE DATA</span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 leading-tight">You Are Data.</h2>
        </motion.div>

        {/* Text LEFT — Video RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {bodyText.map((p, i) => (
              <p key={i} className="text-white/80 text-base md:text-lg leading-relaxed">{p}</p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border border-border bg-card overflow-hidden"
          >
            <video
              src={room4Video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-contain block"
            />
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-px bg-border origin-left"
        />

        {/* Scanning / terminal interactive section */}
        <div className="max-w-4xl w-full mx-auto">

        {scanning ? (
          <div className="h-[60vh] flex items-center justify-center relative border border-border bg-black overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 scan-animation w-full h-[2px] shadow-[0_0_20px_rgba(226,75,74,1)] z-20" />
            <h3 className="terminal-text text-4xl md:text-6xl text-primary animate-pulse tracking-widest">SCANNING...</h3>

            {/* Fake biometric wireframe */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
               <svg viewBox="0 0 100 100" className="w-64 h-64 text-primary fill-none stroke-current stroke-[0.5]">
                 <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
                 <line x1="10" y1="50" x2="90" y2="50" />
                 <line x1="50" y1="10" x2="50" y2="90" />
                 <rect x="25" y="25" width="50" height="50" />
               </svg>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col space-y-12"
          >
            <div className="bg-black border border-primary p-6 md:p-10 terminal-text text-sm md:text-base text-green-500 shadow-[0_0_30px_rgba(226,75,74,0.15)] leading-loose">
              <div className="text-white mb-6">&gt; SUBJECT ANALYSIS COMPLETE</div>
              <div className="typewriter-line" style={{ animationDelay: '0.1s' }}>&gt; DEVICE: {data.device}</div>
              <div className="typewriter-line" style={{ animationDelay: '0.3s' }}>&gt; BROWSER: {data.browser}</div>
              <div className="typewriter-line" style={{ animationDelay: '0.5s' }}>&gt; SCREEN RESOLUTION: {data.resolution}</div>
              <div className="typewriter-line" style={{ animationDelay: '0.7s' }}>&gt; CONNECTION: {data.connection}</div>
              <div className="typewriter-line" style={{ animationDelay: '0.9s' }}>&gt; LANGUAGE: {data.language}</div>
              <div className="typewriter-line" style={{ animationDelay: '1.1s' }}>&gt; TIMEZONE: {data.timezone}</div>
              <div className="typewriter-line mt-6" style={{ animationDelay: '1.5s' }}>&gt; PREDICTED AGE RANGE: 24–35</div>
              <div className="typewriter-line" style={{ animationDelay: '1.7s' }}>&gt; PREDICTED INCOME BRACKET: $45K–$72K</div>
              <div className="typewriter-line text-yellow-500" style={{ animationDelay: '1.9s' }}>&gt; RISK CLASSIFICATION: MODERATE</div>
              <div className="typewriter-line" style={{ animationDelay: '2.1s' }}>&gt; POLITICAL LEAN: CENTRIST (67% confidence)</div>
              <div className="typewriter-line" style={{ animationDelay: '2.3s' }}>&gt; CONSUMER PROFILE: URBAN PROFESSIONAL</div>
              <div className="typewriter-line text-primary" style={{ animationDelay: '2.5s' }}>&gt; INSURANCE RISK: ELEVATED</div>
              <div className="typewriter-line text-primary" style={{ animationDelay: '2.7s' }}>&gt; CREDIT RECOMMENDATION: REVIEW REQUIRED <span className="cursor-blink">_</span></div>
            </div>

            <div className="text-center space-y-6">
              <p className="text-xl md:text-2xl font-bold text-white max-w-2xl mx-auto leading-relaxed">
                AI systems profile you without your knowledge or consent. Every device you use, every search you make, every purchase you consider — collected, scored, sold.
              </p>
              <p className="terminal-text text-primary text-sm tracking-widest">
                You are not a person to these systems. You are a data point.
              </p>
            </div>
          </motion.div>
        )}
        </div>

      </div>
    </section>
  );
}

// SECTION 5 — THE SHOWROOM
function Section5Showroom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const bodyText = [
    "Welcome to the future of work. It looks like a showroom. Sleek white floors. Bright lighting. Humanoid robots standing on illuminated display pedestals — posed, polished, and ready to be purchased.",
    "There is a robot receptionist. A warehouse robot. A customer service agent. A robot chef. Each one comes with a name, a function, a list of capabilities, and a price tag. Each spec sheet notes the same things: available 24 hours a day, 7 days a week. Zero sick days. No salary. No complaints.",
    "The question this room asks is not whether this future is coming. It is already here. It is already being sold. The question is whether anyone is having an honest conversation about what happens to the people whose jobs these robots are built to replace.",
    "In the UAE alone, the government has announced that 50% of all public services will run on autonomous AI within two years. The showroom is not a warning about the future. It is a snapshot of right now.",
  ];

  return (
    <section ref={ref} id="room-5" className="relative w-full min-h-screen bg-black border-t border-border overflow-hidden">
      {/* Full-bleed single background image */}
      <div className="absolute inset-0">
        <img
          src={room5Image}
          alt="Humanoid robots showroom"
          className="w-full h-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_4px)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full py-24 px-6 md:px-12 lg:px-24 flex flex-col gap-16">

        {/* Room label + heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="terminal-text text-primary text-sm tracking-widest">ROOM 05 // THE SHOWROOM</span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mt-4 leading-tight">The Showroom.</h2>
        </motion.div>

        {/* Body text — full width, image is now just the section backdrop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-6 max-w-2xl"
        >
          {bodyText.map((p, i) => (
            <p key={i} className="text-white/80 text-base md:text-lg leading-relaxed">{p}</p>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

// SECTION 6 — WHAT COMES NEXT
function Section5Next() {
  return (
    <section id="room-6" className="w-full min-h-screen bg-background border-t border-border py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto w-full flex-grow flex flex-col">
        <h2 className="terminal-text text-primary text-sm mb-4 tracking-widest">ROOM 06 // WHAT COMES NEXT</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white mb-16">Resistance. Regulation. Reimagination.</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <Card title="THE EU AI ACT" content="The world's first comprehensive AI regulation. Bans predictive policing AI, biometric surveillance in public spaces, and social scoring systems. Enforced penalties up to €35 million." />
          <Card title="THE ALGORITHMIC JUSTICE LEAGUE" content="Founded by Joy Buolamwini after MIT research found facial recognition misidentified dark-skinned women 34.7% more often than light-skinned men. Fighting AI bias in courts and boardrooms." />
          <Card title="THE RIGHT TO EXPLANATION" content="Under GDPR Article 22, EU citizens can demand a human review of any automated decision affecting them. A legal right to challenge the machine." />
        </div>

        <div className="flex justify-center mb-16">
          <div className="border border-border bg-card overflow-hidden w-full max-w-2xl">
            <img
              src={room6Image}
              alt="AI accountability progress exhibition room"
              className="w-full h-56 object-cover block"
            />
          </div>
        </div>

        <div className="border border-white/20 p-10 md:p-16 flex flex-col items-center text-center bg-black/40 backdrop-blur-sm max-w-4xl mx-auto w-full mb-24">
          <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">DEMAND ACCOUNTABILITY</h4>
          <p className="text-lg text-white/80 max-w-2xl mb-10 leading-relaxed">
            AI systems that make life-altering decisions must be transparent, auditable, and contestable. Join the movement for algorithmic justice.
          </p>
          <a
            href="/ticket.png"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-ajl"
            className="terminal-text bg-primary text-black font-bold px-10 py-5 hover:bg-white transition-colors duration-300 tracking-widest"
          >
            BUY THE TICKET NOW →
          </a>
        </div>

        <div className="flex flex-col items-center justify-center opacity-50 hover:opacity-100 transition-opacity mb-24">
          <svg width="100" height="100" viewBox="0 0 100 100" className="fill-white mb-4">
            <rect x="10" y="10" width="30" height="30" />
            <rect x="15" y="15" width="20" height="20" fill="#1A1A2E" />
            <rect x="20" y="20" width="10" height="10" />

            <rect x="60" y="10" width="30" height="30" />
            <rect x="65" y="15" width="20" height="20" fill="#1A1A2E" />
            <rect x="70" y="20" width="10" height="10" />

            <rect x="10" y="60" width="30" height="30" />
            <rect x="15" y="65" width="20" height="20" fill="#1A1A2E" />
            <rect x="20" y="70" width="10" height="10" />

            <rect x="60" y="60" width="10" height="10" />
            <rect x="80" y="60" width="10" height="10" />
            <rect x="60" y="80" width="30" height="10" />
            <rect x="70" y="70" width="10" height="10" />
          </svg>
          <div className="terminal-text text-xs tracking-widest text-white">SCAN TO TAKE ACTION</div>
        </div>
      </div>

      <footer className="w-full border-t border-white/10 pt-8 mt-12 pb-4 text-center">
        <p className="terminal-text text-white/40 text-xs tracking-[0.2em]">
          BIAS.EXE — AN EXHIBITION ABOUT THE FUTURE WE ARE BUILDING // © 2026
        </p>
      </footer>
    </section>
  );
}

function Card({ title, content }: { title: string, content: string }) {
  return (
    <div className="bg-card border-t-2 border-t-primary border-x border-b border-border p-8 flex flex-col hover:bg-card/80 transition-colors">
      <h4 className="terminal-text text-white font-bold mb-4 tracking-widest text-sm">{title}</h4>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base flex-grow">
        {content}
      </p>
    </div>
  );
}
