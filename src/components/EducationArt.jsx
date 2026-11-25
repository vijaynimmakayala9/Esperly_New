"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const coral = "#EB6664";
const navy = "#17243A";
const lavender = "#A18BD9";
const peach = "#FFD8CF";

function Book() {
  return <>
    <path d="M60 99 Q100 85 140 110 Q180 85 220 99 V181 Q180 167 140 192 Q100 167 60 181Z" fill={peach} />
    <path d="M67 88 Q106 77 140 103 Q174 77 213 88 V170 Q174 159 140 184 Q106 159 67 170Z" fill="white" />
    <path d="M140 103V184 M82 111Q108 107 126 120 M82 128Q108 124 126 137 M82 145Q108 141 126 154 M154 120Q174 107 198 111 M154 137Q174 124 198 128 M154 154Q174 141 198 145" stroke={coral} />
  </>;
}
function Cap() {
  return <>
    <path d="M91 70V96Q140 124 189 96V70" fill={lavender} />
    <path d="M65 64L140 29L215 64L140 99Z" fill={navy} />
    <path d="M140 64L200 76V111" stroke={coral} strokeWidth="5" />
    <path d="M195 112L200 103L205 112V125H195Z" fill={coral} stroke={coral} />
  </>;
}
function Science() {
  return <>
    <path d="M140 43C192 43 192 177 140 177S88 43 140 43Z" fill="none" stroke={coral} strokeWidth="5" />
    <path d="M140 43C192 43 192 177 140 177S88 43 140 43Z" transform="rotate(60 140 110)" fill="none" stroke={lavender} strokeWidth="5" />
    <path d="M140 43C192 43 192 177 140 177S88 43 140 43Z" transform="rotate(-60 140 110)" fill="none" stroke={navy} strokeWidth="5" />
    <circle cx="140" cy="110" r="13" fill={coral} stroke="white" />
    <circle cx="140" cy="43" r="7" fill={coral} stroke="white" />
    <circle cx="198" cy="144" r="7" fill={lavender} stroke="white" />
  </>;
}
function Progress() {
  return <>
    <rect x="66" y="48" width="148" height="132" rx="20" fill="white" />
    <path d="M86 150H194M86 150V72" stroke="#D8DCE6" />
    <path d="M97 150V127H116V150Z" fill={peach} stroke="none" />
    <path d="M130 150V106H149V150Z" fill={lavender} stroke="none" />
    <path d="M163 150V82H182V150Z" fill={coral} stroke="none" />
    <path d="M96 112L132 88L151 94L186 61M168 61H186V79" stroke={navy} strokeWidth="4" />
  </>;
}
function Calendar() {
  return <>
    <rect x="70" y="55" width="140" height="126" rx="18" fill="white" />
    <path d="M70 92H210V73Q210 55 192 55H88Q70 55 70 73Z" fill={peach} />
    <path d="M104 44V70M176 44V70" stroke={navy} strokeWidth="5" />
    <path d="M92 115H106M132 115H146M172 115H186M92 145H106M132 145H146" stroke={lavender} strokeWidth="5" />
    <path d="M169 145L177 153L191 137" stroke={coral} strokeWidth="5" />
  </>;
}
function Spark() {
  return <>
    <path d="M111 151V137Q85 119 85 91A55 55 0 0 1 195 91Q195 119 169 137V151Z" fill={peach} />
    <path d="M111 151H169V166H111Z M123 166V178H157V166" fill={lavender} />
    <path d="M140 141V104L124 88M140 104L156 88" stroke={coral} strokeWidth="5" />
    <path d="M140 18V29M62 45L72 55M218 45L208 55M48 91H61M219 91H232" stroke={coral} strokeWidth="4" />
  </>;
}
const artwork = { book: Book, science: Science, progress: Progress, calendar: Calendar, spark: Spark };

export default function EducationArt({ name = "learning", className = "h-40 w-40", label = "Educational illustration", glow = false, loop = true, speed = 1 }) {
  const ref = useRef(null);
  const visible = useInView(ref, { margin: "120px" });
  const reduced = useReducedMotion();
  const Art = artwork[name];
  const duration = 4 / (Number.isFinite(speed) && speed > 0 ? speed : 1);
  return (
    <div ref={ref} role="img" aria-label={label} className={`relative isolate ${className}`}>
      {glow && <div aria-hidden="true" className="pointer-events-none absolute inset-[15%] rounded-full bg-gradient-to-br from-[#EB6664]/25 via-pink-300/20 to-violet-400/20 blur-2xl" />}
      <motion.svg aria-hidden="true" viewBox="0 0 280 220" fill="none" stroke={navy} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 h-full w-full overflow-visible" initial={false} animate={!reduced && visible ? { y: loop ? [0, -5, 0] : [5, 0] } : { y: 0 }} transition={{ duration: loop ? duration : 0.5, repeat: loop && visible && !reduced ? Infinity : 0, ease: "easeInOut" }} whileHover={reduced ? undefined : { scale: 1.045 }}>
        <circle cx="140" cy="110" r="88" fill="#FFF0EE" stroke="none" />
        <circle cx="140" cy="110" r="101" stroke={coral} strokeOpacity=".22" strokeDasharray="3 9" />
        <path d="M37 65H51M44 58V72M229 148H243M236 141V155" stroke={coral} strokeWidth="3" />
        <circle cx="224" cy="42" r="5" fill={lavender} stroke="none" />
        <circle cx="52" cy="174" r="4" fill={coral} stroke="none" />
        {Art ? <Art /> : <><g transform="translate(0 15)"><Book /></g><g transform="translate(0 -5)"><Cap /></g></>}
      </motion.svg>
    </div>
  );
}
