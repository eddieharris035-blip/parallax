/* ===================================================================
   Parallax — shared utilities
   Vanilla JS, no dependencies.
   =================================================================== */

/** Orbital period in Earth years (sidereal) */
export const ORBITAL_YEARS = {
  mercury: 0.2408467,
  venus:   0.6151973,
  earth:   1.0000000,
  mars:    1.8808476,
  jupiter: 11.862615,
  saturn:  29.447498,
  uranus:  84.016846,
  neptune: 164.79132,
  pluto:   247.94,
};

/** Mean day length in Earth hours (sidereal). Venus and Uranus rotate retrograde. */
export const DAY_HOURS = {
  mercury: 1407.5,
  venus:   5832.5,
  earth:   23.9345,
  mars:    24.6229,
  jupiter: 9.925,
  saturn:  10.656,
  uranus:  17.24,
  neptune: 16.11,
  pluto:   153.29,
};

export const PLANETS = [
  { key: "mercury", name: "Mercury", fact: "A year here is about 88 days, so you rack up birthdays fast." },
  { key: "venus",   name: "Venus",   fact: "A day on Venus is longer than its year. Odd place." },
  { key: "earth",   name: "Earth",   fact: "The one where you actually age." },
  { key: "mars",    name: "Mars",    fact: "Mars years are nearly twice Earth's — time slows down here." },
  { key: "jupiter", name: "Jupiter", fact: "You'd still be a toddler in Jovian years." },
  { key: "saturn",  name: "Saturn",  fact: "A Saturn year is about 29½ Earth years." },
  { key: "uranus",  name: "Uranus",  fact: "Takes 84 Earth years to finish one orbit." },
  { key: "neptune", name: "Neptune", fact: "Barely a couple of Neptune years into human history." },
  { key: "pluto",   name: "Pluto",   fact: "Still a planet in our hearts. One year = 248 Earth years." },
];

/** Return { days, earthYears } from a birth date to now. */
export function ageFromBirth(birthDate, now = new Date()) {
  const ms = now.getTime() - birthDate.getTime();
  const days = ms / 86400000;
  const earthYears = days / 365.25;
  return { days, earthYears };
}

/** Format a number with a fixed number of decimals but no trailing zeros when < 1. */
export function fmt(n, decimals = 2) {
  if (!isFinite(n)) return "—";
  return n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

export function fmtSmart(n) {
  if (!isFinite(n)) return "—";
  if (n >= 100) return Math.round(n).toLocaleString();
  if (n >= 10)  return n.toFixed(1);
  return n.toFixed(2);
}

/** Formatted long date — "March 14, 2026" */
export function fmtDate(d) {
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

/** Next birthday date on a given planet, given Earth birth date and now. */
export function nextBirthdayOn(planetKey, birthDate, now = new Date()) {
  const orbitYears = ORBITAL_YEARS[planetKey];
  const orbitMs = orbitYears * 365.25 * 86400000;
  const agedMs = now.getTime() - birthDate.getTime();
  const agePlanetYears = agedMs / orbitMs;
  const nextIntYear = Math.floor(agePlanetYears) + 1;
  const nextMs = birthDate.getTime() + nextIntYear * orbitMs;
  return new Date(nextMs);
}

/** Read a birth date from a date input and return a Date object or null. */
export function parseDateInput(value) {
  if (!value) return null;
  const d = new Date(value + "T00:00:00");
  if (isNaN(d.getTime())) return null;
  if (d.getTime() > Date.now()) return null;
  return d;
}

/** Persist/retrieve birth date across tools so users don't re-enter. */
export function rememberBirth(date) {
  try { localStorage.setItem("parallax.birth", date.toISOString().slice(0, 10)); } catch (e) {}
}
export function recalledBirth() {
  try {
    const raw = localStorage.getItem("parallax.birth");
    if (!raw) return "";
    return raw;
  } catch (e) { return ""; }
}
