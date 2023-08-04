export function getAbsoluteUrl(): string {
  const defaultUrl = 'https://dolphinnotbotdashboard.vercel.app';

  if (process.env.APP_URL != null) return process.env.APP_URL;

  return process.env.VERCEL_URL == null ? defaultUrl : `https://${process.env.VERCEL_URL}`;
}
