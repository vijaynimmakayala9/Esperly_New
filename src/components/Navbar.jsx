"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  Menu,
  Search,
  X,
  ArrowUpRight,
} from "@/components/BrandIcons";
import { Button } from "./UI";
import {
  tuitionGroups,
  boosters,
  languageGroups,
  moreLinks,
  tuitionHref,
  boosterHref,
  languageHref,
} from "@/data/referenceNavigation";

const navGroups = [
  {
    id: "tuitions",
    label: "TUITIONS",
    groups: tuitionGroups,
    href: tuitionHref,
  },
  {
    id: "boosters",
    label: "LEARNING BOOSTERS",
    items: boosters.map((label) => ({ label, href: boosterHref(label) })),
  },
  {
    id: "language",
    label: "LANGUAGE TRACKS",
    groups: languageGroups,
    href: (_, item) => languageHref(item),
  },
  {
    id: "more",
    label: "MORE",
    items: moreLinks.map(({ label, href }) => ({ label, href })),
  },
];

function DesktopDropdown({ menu, close }) {
  const [active, setActive] = useState(null);
  const groups = menu.groups;
  return (
    <motion.div
      initial={{ opacity: 0, y: 9 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 7 }}
      transition={{ duration: 0.18 }}
      className="absolute left-0 top-full z-50 pt-3"
    >
      <div className="flex min-w-[210px] overflow-hidden rounded-2xl border border-[#EB6664]/20 bg-white shadow-[0_22px_65px_rgba(23,36,58,0.18)] ring-1 ring-white">
        {groups ? (
          <>
            <div className="min-w-[220px] py-2">
              {groups.map((group) => (
                <button
                  key={group.label}
                  type="button"
                  onMouseEnter={() => setActive(group.label)}
                  onFocus={() => setActive(group.label)}
                  onClick={() =>
                    setActive(active === group.label ? null : group.label)
                  }
                  aria-expanded={active === group.label}
                  className={`flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-[#EB6664] ${active === group.label ? "bg-[#FFF0EE] font-semibold text-[#D94E5B]" : "text-[#17243A] hover:bg-[#FFF9F6] hover:text-[#D94E5B]"}`}
                >
                  {group.label}
                  <ChevronRight size={15} />
                </button>
              ))}
            </div>
            {active && (
              <div className="min-w-[190px] border-l border-[#EB6664]/10 bg-gradient-to-br from-[#F1EDFF] via-[#FFF9F6] to-[#E8F8F2] py-2">
                {groups
                  .find((group) => group.label === active)
                  ?.items.map((item) => (
                    <Link
                      key={item}
                      href={menu.href(
                        groups.find((group) => group.label === active),
                        item,
                      )}
                      onClick={close}
                      className="block whitespace-nowrap px-4 py-2.5 text-[13px] text-[#17243A] transition-colors hover:bg-[#FFF0EE] hover:text-[#D94E5B] focus-visible:bg-[#FFF0EE]"
                    >
                      {item}
                    </Link>
                  ))}
              </div>
            )}
          </>
        ) : (
          <div className="min-w-[210px] py-2">
            {menu.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="block whitespace-nowrap px-4 py-2.5 text-[13px] text-[#17243A] transition-colors hover:bg-[#FFF0EE] hover:text-[#D94E5B]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [subExpanded, setSubExpanded] = useState(null);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const closeRef = useRef(null);
  const closeTimer = useRef(null);
  const cancelClose = () => clearTimeout(closeTimer.current);
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  };
  useEffect(() => {
    setOpen(null);
    setMobile(false);
    setExpanded(null);
    setSubExpanded(null);
    setSearch(false);
  }, [pathname]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const keydown = (event) => {
      if (event.key === "Escape") {
        setOpen(null);
        setMobile(false);
        setSearch(false);
      }
    };
    const pointer = (event) => {
      if (navRef.current && !navRef.current.contains(event.target))
        setOpen(null);
    };
    document.addEventListener("keydown", keydown);
    document.addEventListener("pointerdown", pointer);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("pointerdown", pointer);
      cancelClose();
    };
  }, []);
  useEffect(() => {
    if (!mobile) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobile]);
  const closeMenu = () => {
    setOpen(null);
    setMobile(false);
  };
  return (
    <>
      <div className="bg-[#17243A] px-5 py-2 text-center text-[11px] font-medium tracking-wide text-white/80">
        A more personal way to learn.{" "}
        <Link
          className="ml-2 text-[#FFB8A6] underline underline-offset-4"
          href="/book-demo"
        >
          Discover Esperly →
        </Link>
      </div>
      <header
        ref={navRef}
        className={`sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 backdrop-blur-xl transition-all ${scrolled ? "shadow-lg shadow-slate-900/5" : ""}`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 transition-all lg:px-8 ${scrolled ? "h-[56px] sm:h-[60px]" : "h-[60px] sm:h-[68px]"}`}
        >
          <Link
            href="/"
            aria-label="Esperly home"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/logo/logo1.png"
              alt="Esperly - Learn, Practice, Grow"
              width={180}
              height={60}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 xl:flex"
          >
            <Link
              href="/"
              className="rounded-full px-3 py-2 text-[13px] font-semibold text-slate-600 hover:text-[#EB6664]"
            >
              HUB
            </Link>
            {navGroups.map((menu) => (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  setOpen(menu.id);
                }}
                onMouseLeave={scheduleClose}
                onFocusCapture={() => {
                  cancelClose();
                  setOpen(menu.id);
                }}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget))
                    scheduleClose();
                }}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={open === menu.id}
                  aria-controls={`menu-${menu.id}`}
                  onClick={() => {
                    cancelClose();
                    setOpen(open === menu.id ? null : menu.id);
                  }}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-semibold transition-colors hover:text-[#EB6664] focus-visible:outline-2 focus-visible:outline-[#EB6664] ${open === menu.id ? "text-[#EB6664]" : "text-slate-600"}`}
                >
                  {menu.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${open === menu.id ? "rotate-180" : ""}`}
                  />
                </button>
                <div id={`menu-${menu.id}`}>
                  <AnimatePresence>
                    {open === menu.id && (
                      <DesktopDropdown
                        key={menu.id}
                        menu={menu}
                        close={closeMenu}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              aria-label="Search website"
              onClick={() => setSearch(!search)}
              className="rounded-full p-2 text-slate-700 hover:bg-[#FFF0EE]"
            >
              <Search size={20} />
            </button>
            <Link
              href="/login"
              className="text-sm font-semibold text-slate-700 hover:text-[#EB6664]"
            >
              Login
            </Link>
            <Button>Book Free Demo</Button>
          </div>
          <button
            type="button"
            onClick={() => setMobile(true)}
            className="rounded-xl p-3 text-[#17243A] xl:hidden"
            aria-label="Open navigation"
          >
            <Menu />
          </button>
        </div>
        {search && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href =
                "/resources?search=" + encodeURIComponent(query);
            }}
            className="mx-auto flex max-w-3xl gap-3 border-t border-slate-100 px-5 py-4"
          >
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search learning resources..."
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-[#EB6664]"
            />
            <button className="rounded-xl bg-[#EB6664] px-5 font-semibold text-white">
              Search
            </button>
          </form>
        )}
      </header>
      <AnimatePresence>
        {mobile && (
          <motion.div
            className="fixed inset-0 z-[80] bg-[#111827]/60 xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobile(false)}
          >
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30 }}
              onClick={(event) => event.stopPropagation()}
              className="ml-auto flex h-full w-[min(90vw,390px)] flex-col overflow-y-auto bg-white p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <strong className="text-2xl tracking-tight text-[#17243A]">
                  esperly<span className="text-[#EB6664]">.</span>
                </strong>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setMobile(false)}
                  aria-label="Close navigation"
                >
                  <X />
                </button>
              </div>
              <Link
                className="border-b py-4 font-semibold"
                href="/"
                onClick={closeMenu}
              >
                Hub
              </Link>
              {navGroups.map((menu) => (
                <div key={menu.id} className="border-b border-slate-100">
                  <button
                    type="button"
                    aria-expanded={expanded === menu.id}
                    onClick={() => {
                      setExpanded(expanded === menu.id ? null : menu.id);
                      setSubExpanded(null);
                    }}
                    className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-[#17243A]"
                  >
                    {menu.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${expanded === menu.id ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expanded === menu.id && (
                    <div className="mb-3 rounded-xl border border-[#EB6664]/10 bg-gradient-to-br from-[#FFF0EE] to-[#F1EDFF] p-2">
                      {menu.groups
                        ? menu.groups.map((group) => (
                            <div key={group.label}>
                              <button
                                type="button"
                                aria-expanded={subExpanded === group.label}
                                onClick={() =>
                                  setSubExpanded(
                                    subExpanded === group.label
                                      ? null
                                      : group.label,
                                  )
                                }
                                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-700 hover:bg-[#FFF0EE]"
                              >
                                {group.label}
                                <ChevronDown
                                  size={14}
                                  className={`transition-transform ${subExpanded === group.label ? "rotate-180" : ""}`}
                                />
                              </button>
                              {subExpanded === group.label && (
                                <div className="ml-3 border-l-2 border-[#EB6664]/20 pl-2">
                                  {group.items.map((item) => (
                                    <Link
                                      key={item}
                                      href={menu.href(group, item)}
                                      onClick={closeMenu}
                                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-[#FFF0EE] hover:text-[#EB6664]"
                                    >
                                      {item}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))
                        : menu.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={closeMenu}
                              className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-[#FFF0EE] hover:text-[#EB6664]"
                            >
                              {item.label}
                            </Link>
                          ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                className="border-b py-4 font-semibold"
                href="/login"
                onClick={closeMenu}
              >
                Login
              </Link>
              <div className="mt-7">
                <Button>Book Free Demo</Button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
