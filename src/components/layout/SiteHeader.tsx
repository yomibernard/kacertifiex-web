"use client";

import { Logo } from "@/components/brand/Logo";
import { SiteSearch } from "@/components/search/SiteSearch";
import { Button } from "@/components/ui/Button";
import { ServicesNavMenu } from "@/components/layout/ServicesNavMenu";
import { navLinks, services } from "@/lib/site-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const overlay = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const primaryNav = navLinks.filter((l) =>
    [
      "/",
      "/about",
      "/services",
      "/industries",
      "/insights",
      "/people",
      "/careers",
    ].includes(l.href),
  );

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
          overlay
            ? "border-b border-white/10 bg-transparent"
            : "border-b border-white/10 bg-navy/95 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-6">
          <Logo variant="light" compact={false} />

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {primaryNav.map((link) => {
              if (link.href === "/services") {
                return <ServicesNavMenu key={link.href} />;
              }
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-gold" : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white"
              aria-label="Search site"
            >
              <SearchIcon />
            </button>
            <Button
              href="/contact"
              variant="primary"
              className="hidden sm:inline-flex !py-2 !text-xs sm:!text-sm"
            >
              Let&apos;s Talk →
            </Button>
            <button
              type="button"
              className="rounded-md p-2 text-white lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {open && (
          <nav
            className="border-t border-white/10 bg-navy px-4 py-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href === "/services" ? (
                    <>
                      <Link
                        href="/services"
                        className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                      <ul className="mb-2 ml-3 border-l border-white/15 pl-3">
                        {services.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="block rounded-md px-2 py-2 text-xs text-white/75 hover:bg-white/10 hover:text-white"
                              onClick={() => setOpen(false)}
                            >
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Button href="/contact" variant="primary" className="w-full">
                  Let&apos;s Talk →
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
