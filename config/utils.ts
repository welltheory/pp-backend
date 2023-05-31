import { RequestHandler } from 'express';

const requireHTTPS: RequestHandler = (req, res, next) => {
  const host = req.get('host');
  if (host?.includes('localhost')) return next();
  // The 'x-forwarded-proto' check is for Heroku
  const shouldRedirect = !req.secure
    && req.get('x-forwarded-proto') !== 'https'
    && process.env.NODE_ENV === 'production'
    && process.env.USED_PROTOCOL !== 'http';
  if (shouldRedirect) {
    const url = `https://${host}${req.url}`;
    return res.redirect(url);
  }
  return next();
};

const redirectNonWWW: RequestHandler = (req, res, next) => {
  const host = req.get('host');
  if (host?.slice(0, 4) === 'www.') {
    const newHost = host.slice(4);
    const url = `${req.protocol}://${newHost}${req.originalUrl}`;
    return res.redirect(301, url);
  }
  return next();
};

export default {
  redirectNonWWW,
  requireHTTPS,
};
