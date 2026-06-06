/**
 * Central place for site-wide constants and copy that is reused across
 * components. Keeping these here makes it easy to refine messaging without
 * hunting through markup.
 */

/** The single conversion action for the whole site. */
export const DEMO_URL = 'https://calendly.com/heliosat-technologies/30min';

export const SITE = {
  name: 'HelioSat',
  // TODO: refine the one-liner once positioning is locked.
  tagline: 'Space weather forecasting for satellite operators.',
  title: 'HelioSat — Space weather forecasting for satellite operators',
  description:
    'HelioSat is a compute engine that forecasts space weather and thermospheric drag along your orbits, so satellite teams can plan maneuvers and protect hardware before disruptions hit.',
  // TODO: set to your production domain (used for canonical + OG URLs).
  url: 'https://heliosat.com',
  email: 'contact@heliosat.co',
  contactEmails: ['contact@heliosat.co', 'heliosat.technologies@gmail.com'],
  linkedin: 'https://www.linkedin.com/company/heliosat',
  ogImage: '/og-image.svg',
} as const;
