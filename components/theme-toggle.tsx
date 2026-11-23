'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';
const storageKey = 'portfolio-theme';
const changeEvent = 'portfolio-theme-change';

function readTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new Event(changeEvent));
}

function subscribe(onChange: () => void) {
  const preference = window.matchMedia('(prefers-color-scheme: light)');
  const followSystem = () => {
    let preferred: Theme = preference.matches ? 'light' : 'dark';
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === 'light' || saved === 'dark') preferred = saved;
    } catch { /* Theme switching still works when storage is unavailable. */ }
    applyTheme(preferred);
  };
  const syncTabs = (event: StorageEvent) => {
    if (event.key !== storageKey && event.key !== null) return;
    applyTheme(event.newValue === 'light' || event.newValue === 'dark'
      ? event.newValue : preference.matches ? 'light' : 'dark');
  };
  window.addEventListener(changeEvent, onChange);
  window.addEventListener('storage', syncTabs);
  preference.addEventListener('change', followSystem);
  // Reconcile changes that occurred between the head script and hydration.
  followSystem();
  return () => {
    window.removeEventListener(changeEvent, onChange);
    window.removeEventListener('storage', syncTabs);
    preference.removeEventListener('change', followSystem);
  };
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => 'dark');
  const next = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#ffffff' : '#0d1210');
  }, [theme]);

  function toggleTheme() {
    const nextTheme = readTheme() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(storageKey, nextTheme); }
    catch { /* Keep the control usable without persistent storage. */ }
    applyTheme(nextTheme);
  }

  return <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${next} mode`} title={`Switch to ${next} mode`}>
    {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    <span>{next === 'light' ? 'Light' : 'Dark'}</span>
  </button>;
}
