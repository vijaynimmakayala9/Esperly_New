import * as Outline from "lucide-react";

// Shared Esperly illustration palette; functional controls retain crisp outlines.
const C = '#EB6664', N = '#17243A', P = '#FFD8CF', L = '#A18BD9';
const shapes = {
 BookOpen: <><path d="M3 5Q8 3 12 7Q16 3 21 5V19Q16 17 12 21Q8 17 3 19Z" fill="white"/><path d="M12 7V21"/><path d="M5.5 9L9 10M5.5 13L9 14M15 10L18.5 9M15 14L18.5 13" stroke={C}/></>,
 GraduationCap: <><path d="M6 11V17Q12 21 18 17V11" fill={L}/><path d="M2 9L12 4L22 9L12 14Z" fill={N}/><path d="M12 9L20 12V19" stroke={C}/></>,
 Atom: <><ellipse cx="12" cy="12" rx="4" ry="9" stroke={C}/><ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(60 12 12)" stroke={L}/><ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(-60 12 12)"/><circle cx="12" cy="12" r="2" fill={C}/></>,
 CalendarDays: <><rect x="4" y="5" width="16" height="16" rx="3" fill="white"/><path d="M4 10H20V8Q20 5 17 5H7Q4 5 4 8Z" fill={P}/><path d="M8 3V7M16 3V7"/><path d="M7 13H9M12 13H14M7 17H9M13 17L15 19L18 15" stroke={C}/></>,
 Lightbulb: <><path d="M8 17V15A7 7 0 1 1 16 15V17Z" fill={P}/><path d="M8 17H16V20H8Z" fill={L}/><path d="M12 16V10L10 8M12 10L14 8" stroke={C}/></>,
 ChartNoAxesCombined: <><rect x="3" y="4" width="18" height="17" rx="3" fill="white"/><path d="M6 18V14H9V18Z" fill={P}/><path d="M11 18V11H14V18Z" fill={L}/><path d="M16 18V8H19V18Z" fill={C}/><path d="M6 11L11 7L14 8L18 4"/></>,
 Target: <><circle cx="12" cy="12" r="9" fill={P}/><circle cx="12" cy="12" r="6" fill="white"/><circle cx="12" cy="12" r="3" fill={L}/><path d="M12 12L21 3M17 3H21V7" stroke={C}/></>,
 Users: <><circle cx="9" cy="8" r="3" fill={P}/><circle cx="17" cy="9" r="2.5" fill={L}/><path d="M3 20V17A6 6 0 0 1 15 17V20Z" fill="white"/><path d="M16 14Q22 14 22 20H17" fill={L}/></>,
 Sprout: <><path d="M12 21V11M12 14Q3 14 3 5Q12 5 12 14Z" fill={P}/><path d="M12 11Q12 3 21 3Q21 11 12 11Z" fill={L}/><path d="M7 21H17" stroke={C}/></>,
 Video: <><rect x="3" y="5" width="13" height="14" rx="3" fill="white"/><path d="M16 10L22 6V18L16 14Z" fill={L}/><path d="M8 9L12 12L8 15Z" fill={C}/></>,
 ShieldCheck: <><path d="M12 3L21 7V12Q21 18 12 22Q3 18 3 12V7Z" fill={P}/><path d="M7 12L10 15L17 8" stroke={C}/></>,
};
shapes.TrendingUp = shapes.ChartNoAxesCombined;
shapes.UserRound = shapes.Users;
const make = (name) => {
 const Base = Outline[name];
 function BrandIcon({size=24, strokeWidth=1.65, className='', ...props}) {
  const art = shapes[name];
  if (!art) return <Base size={size} strokeWidth={strokeWidth} className={className} {...props}/>;
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={N} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`shrink-0 ${className}`} {...props}>{art}</svg>;
 }
 BrandIcon.displayName = name;
 return BrandIcon;
};
export const ArrowDownRight = make("ArrowDownRight");
export const ArrowLeft = make("ArrowLeft");
export const ArrowRight = make("ArrowRight");
export const ArrowUpRight = make("ArrowUpRight");
export const Atom = make("Atom");
export const BadgeCheck = make("BadgeCheck");
export const BookOpen = make("BookOpen");
export const CalendarDays = make("CalendarDays");
export const ChartNoAxesCombined = make("ChartNoAxesCombined");
export const Check = make("Check");
export const CheckCircle2 = make("CheckCircle2");
export const ChevronDown = make("ChevronDown");
export const ChevronRight = make("ChevronRight");
export const CircleHelp = make("CircleHelp");
export const Clock = make("Clock");
export const Compass = make("Compass");
export const GraduationCap = make("GraduationCap");
export const Heart = make("Heart");
export const HeartHandshake = make("HeartHandshake");
export const Layers3 = make("Layers3");
export const Lightbulb = make("Lightbulb");
export const Menu = make("Menu");
export const MessageCircle = make("MessageCircle");
export const MoveUpRight = make("MoveUpRight");
export const Play = make("Play");
export const PlayCircle = make("PlayCircle");
export const Search = make("Search");
export const Send = make("Send");
export const ShieldCheck = make("ShieldCheck");
export const Sparkles = make("Sparkles");
export const Sprout = make("Sprout");
export const Star = make("Star");
export const Target = make("Target");
export const TrendingUp = make("TrendingUp");
export const UserRound = make("UserRound");
export const Users = make("Users");
export const Video = make("Video");
export const WandSparkles = make("WandSparkles");
export const X = make("X");

shapes.Calculator = <><rect x="4" y="2" width="16" height="20" rx="3" fill={P}/><rect x="7" y="5" width="10" height="5" rx="1" fill="white"/><path d="M8 14H10M14 14H16M8 18H10M14 18H16" stroke={N}/></>;
shapes.FlaskConical = <><path d="M9 3H15M10 3V10L4 19Q3 22 7 22H17Q21 22 20 19L14 10V3" fill="white"/><path d="M7 15H17L20 20Q20 22 17 22H7Q4 22 4 20Z" fill={L}/><circle cx="12" cy="18" r="1" fill={C}/></>;
shapes.Leaf = shapes.Sprout;
export const Calculator = make("Calculator");
export const FlaskConical = make("FlaskConical");
export const Leaf = make("Leaf");
