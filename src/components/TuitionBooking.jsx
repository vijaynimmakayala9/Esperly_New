"use client";
import { useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, BookOpen, Compass, CalendarDays, Users, Check, ArrowRight } from "./BrandIcons";
const boards = [
    { id: "cbse", name: "CBSE", desc: "Central Board of Secondary Education", icon: GraduationCap },
    { id: "icse", name: "ICSE", desc: "Indian Certificate of Secondary Education", icon: BookOpen },
    { id: "ib", name: "IB", desc: "International Baccalaureate", icon: GraduationCap },
    { id: "pearson", name: "Pearson Edexcel", desc: "Pearson Edexcel International", icon: Compass },
    { id: "cambridge", name: "Cambridge", desc: "Cambridge Assessment International", icon: Compass },
    { id: "state", name: "State Boards", desc: "State level curriculum", icon: BookOpen },
];

// Subjects grouped by class level
const getSubjectsByClass = (className) => {
    const classNum = parseInt(className.replace("Class ", ""));

    if (classNum >= 1 && classNum <= 5) {
        return {
            "Core Subjects": {
                subtitle: "Structured learning designed to build strong fundamentals.",
                subjects: ["English", "Mathematics", "Science", "Hindi", "Social Studies"],
            },
            "Regional Languages": {
                subtitle: "Connect learning with cultural roots.",
                subjects: ["Hindi", "Telugu", "Tamil", "Kannada", "Malayalam", "Marathi", "Gujarati", "Bengali", "Urdu"],
            },
            "Foreign Languages": {
                subtitle: "Build global communication skills from an early age.",
                subjects: ["French", "German", "Spanish", "Japanese", "Arabic", "Russian"],
            },
        };
    }

    if (classNum >= 6 && classNum <= 8) {
        return {
            "Core Subjects": {
                subtitle: "Strengthening concepts with a deeper academic focus and application-based learning.",
                subjects: ["English", "Mathematics", "Science", "Social Science", "Hindi", "Computer Science"],
            },
            "Regional Languages": {
                subtitle: "Enhancing communication and cultural understanding.",
                subjects: ["Hindi", "Telugu", "Tamil", "Kannada", "Malayalam", "Marathi", "Gujarati", "Bengali", "Urdu"],
            },
            "Foreign Languages": {
                subtitle: "Building global language proficiency and confidence.",
                subjects: ["French", "German", "Spanish", "Japanese", "Arabic", "Russian"],
            },
        };
    }

    // Classes 9–12
    return {
        "Core Subjects": {
            subtitle: "Strong foundation for board examinations and higher studies.",
            subjects: ["English", "Hindi", "Mathematics", "Science", "Social Science", "Computer Science"],
        },
        "Science Stream": {
            subtitle: "Focused on analytical thinking, experimentation, and problem-solving.",
            subjects: ["Physics", "Chemistry", "Biology"],
        },
        "Commerce Stream": {
            subtitle: "Designed for business, finance, and entrepreneurial careers.",
            subjects: ["Accountancy", "Business Studies", "Economics", "Entrepreneurship"],
        },
        "Humanities / Arts": {
            subtitle: "Exploring society, behavior, governance, and critical thinking.",
            subjects: ["History", "Political Science", "Sociology", "Psychology"],
        },
        "Skill & Applied Subjects": {
            subtitle: "Career-oriented learning with practical exposure.",
            subjects: ["Computer Science", "Physical Education", "Data Entry Operations", "Environmental Studies (EVS)"],
        },
        "Regional Languages": {
            subtitle: "",
            subjects: ["Hindi", "Telugu", "Tamil", "Kannada", "Malayalam", "Marathi", "Gujarati", "Bengali", "Urdu"],
        },
        "Foreign Languages": {
            subtitle: "",
            subjects: ["French", "German", "Spanish", "Japanese", "Arabic", "Russian"],
        },
    };
};

const daysOptions = ["1 day per week", "2 days per week", "3 days per week", "4 days per week", "5 days per week", "6 days per week", "7 days (daily)"];
const startOptions = ["Immediately", "In a week", "In a month"];

const colors = ["bg-blue-100 border-blue-200 text-blue-950", "bg-violet-100 border-violet-200 text-violet-950", "bg-amber-100 border-amber-200 text-amber-950", "bg-emerald-100 border-emerald-200 text-emerald-950", "bg-sky-100 border-sky-200 text-sky-950", "bg-rose-100 border-rose-200 text-rose-950"];
const labels = ["Curriculum", "Subjects", "Schedule", "Your details"];
const button = "rounded-full bg-gradient-to-r from-[#C94846] to-[#B83E65] px-7 py-3 font-bold text-white shadow-lg transition hover:-translate-y-1 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0";
export default function TuitionBooking({ title }) {
 const [step,setStep] = useState(0);
 const [board,setBoard] = useState("");
 const [subjects,setSubjects] = useState([]);
 const [days,setDays] = useState("");
 const [start,setStart] = useState("");
 const [review,setReview] = useState(false);
 const [contact,setContact] = useState({name:"",email:"",mobile:""});
 const panel = useRef(null);
 const reduce = useReducedMotion();
 const go = (n) => {setStep(n); setReview(false); requestAnimationFrame(()=>panel.current?.scrollIntoView({behavior:reduce?"instant":"smooth",block:"start"}));};
 const toggle = s => setSubjects(prev=>prev.includes(s)?prev.filter(x=>x!==s):[...prev,s]);
 const groups = getSubjectsByClass(title);
 const ready = [!!board,subjects.length>0,!!days&&!!start];
 return <section id="tuition-booking" className="scroll-mt-28 bg-gradient-to-br from-sky-50 via-violet-50 to-amber-50 px-4 py-16 sm:px-8 lg:py-24">
 <div className="mx-auto w-full max-w-7xl">
 <div className="mb-9 max-w-3xl"><p className="font-bold uppercase tracking-widest text-[#C94846]">Your personalized learning plan</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">Make {title} learning <span className="text-violet-700">your own.</span></h2><p className="mt-4 text-slate-600">Choose the curriculum, subjects and schedule that suit your goals.</p></div>
 <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
 <div ref={panel} className="scroll-mt-28 rounded-[32px] border border-white bg-white/90 p-5 shadow-xl shadow-violet-200/40 sm:p-8">
 <nav aria-label="Booking progress" className="mb-8 grid grid-cols-4 gap-2">{labels.map((label,i)=><button key={label} type="button" disabled={i>step} onClick={()=>go(i)} aria-current={i===step?"step":undefined} className={`rounded-xl p-2 text-left text-xs font-bold sm:p-3 ${i===step?colors[i]:i<step?"bg-emerald-50 text-emerald-800":"bg-slate-50 text-slate-500"}`}><span className="mb-1 block text-lg">{i<step?"✓":`0${i+1}`}</span>{label}</button>)}</nav>
 <motion.div key={step} initial={reduce?false:{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.35}}>
 {step===0&&<><h3 className="text-2xl font-extrabold">Choose your board</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{boards.map((b,i)=><button key={b.id} type="button" aria-pressed={board===b.id} onClick={()=>setBoard(b.id)} className={`relative rounded-2xl border p-5 text-left transition hover:-translate-y-1 ${colors[i]} ${board===b.id?"ring-2 ring-[#EB6664] ring-offset-2":""}`}><b.icon size={40}/><span className="mt-3 block text-lg font-black">{b.name}</span><span className="block text-sm">{b.desc}</span>{board===b.id&&<Check className="absolute right-4 top-4"/>}</button>)}</div></>}
 {step===1&&<><h3 className="text-2xl font-extrabold">Select your subjects</h3><div className="mt-5 space-y-4">{Object.entries(groups).map(([name,g],i)=><div key={name} className={`rounded-2xl border p-4 ${colors[i%colors.length]}`}><h4 className="flex items-center gap-2 font-black"><BookOpen/>{name}</h4><p className="mt-1 text-sm">{g.subtitle}</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{g.subjects.map(s=><button key={s} type="button" aria-pressed={subjects.includes(s)} onClick={()=>toggle(s)} className={`flex items-center gap-2 rounded-xl border p-3 text-left text-sm font-semibold ${subjects.includes(s)?"border-violet-600 bg-white ring-1 ring-violet-600":"border-white bg-white/70 hover:bg-white"}`}><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border ${subjects.includes(s)?"border-violet-700 bg-violet-700 text-white":"border-slate-400"}`}>{subjects.includes(s)&&<Check size={14}/>}</span>{s}</button>)}</div></div>)}</div></>}
 {step===2&&<><h3 className="flex items-center gap-3 text-2xl font-extrabold"><CalendarDays size={32}/>Set your schedule</h3>{[["Days per week",daysOptions,days,setDays],["When to start",startOptions,start,setStart]].map(([label,options,value,set],i)=><fieldset key={label} className={`mt-5 rounded-2xl border p-4 ${colors[i+2]}`}><legend className="px-2 font-bold">{label}</legend><div className="grid gap-2 sm:grid-cols-2">{options.map(o=><label key={o} className="flex cursor-pointer items-center gap-3 rounded-xl bg-white p-3 text-sm font-semibold"><input type="radio" name={label} checked={value===o} onChange={()=>set(o)} className="accent-violet-700"/>{o}</label>)}</div></fieldset>)}</>}
 {step===3&&<form onSubmit={e=>{e.preventDefault();setReview(true);}}><h3 className="flex items-center gap-3 text-2xl font-extrabold"><Users size={32}/>Your details</h3><p className="mt-2 text-sm text-slate-600">Use a parent or guardian's contact details.</p><div className="mt-5 space-y-4">{[["name","Student full name","text"],["email","Parent email","email"],["mobile","Parent phone (include country code)","tel"]].map(([key,label,type])=><label key={key} className="block text-sm font-bold">{label}<input required type={type} pattern={key==="mobile"?"[+]?[0-9]{7,15}":undefined} value={contact[key]} onChange={e=>{setReview(false);setContact(p=>({...p,[key]:e.target.value}));}} className="mt-2 block w-full rounded-xl border border-slate-200 bg-slate-50 p-3 font-normal focus:border-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-200"/></label>)}</div><button className={`${button} mt-6`} type="submit">Review learning plan</button>{review&&<div role="status" className="mt-5 rounded-2xl bg-emerald-50 p-4 text-emerald-950"><strong>Your learning plan is ready to review.</strong><p className="mt-2 text-sm">This is a local preview. No booking has been submitted and no OTP has been sent. Contact {contact.name ? "your Esperly team" : "Esperly"} to confirm availability.</p></div>}</form>}
 <div className="mt-7 flex flex-wrap items-center justify-between gap-3">{step>0&&<button type="button" onClick={()=>go(step-1)} className="rounded-full border border-slate-300 px-5 py-3 font-bold hover:bg-slate-100">Back</button>}{step<3&&<button type="button" disabled={!ready[step]} onClick={()=>go(step+1)} className={`${button} ml-auto flex items-center gap-2`}>Continue <ArrowRight size={18}/></button>}</div>
 </motion.div></div>
 <aside className="h-fit rounded-[30px] bg-gradient-to-br from-[#17243A] via-[#253B65] to-[#583C85] p-6 text-white shadow-xl lg:sticky lg:top-28"><GraduationCap size={48}/><h3 className="mt-4 text-xl font-black">Your learning plan</h3><dl className="mt-5 space-y-4">{[["Class",title],["Curriculum",boards.find(b=>b.id===board)?.name],["Subjects",subjects.join(", ")],["Frequency",days],["Starting",start]].map(([k,v])=><div key={k} className="border-b border-white/15 pb-3"><dt className="text-xs text-sky-200">{k}</dt><dd className="mt-1 break-words font-semibold">{v||"Not selected yet"}</dd></div>)}</dl><p className="mt-5 text-xs leading-6 text-white/80">Your selections are preferences, subject to tutor and curriculum availability.</p></aside>
 </div></div></section>;
}
