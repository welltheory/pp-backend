import http from 'http';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from '$api/routes';
import { envs } from '$envs';
import ErrorsMiddleware from './middlewares/errors';

const setup = () => {
  const app = express();

  if (envs.maintenanceMode) {
    app.use('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/maintenance.html'));
    });
    return app;
  }

  app.disable('x-powered-by');

  app.use(express.static(path.join(__dirname, '../public')));

  app.use((...params) => {
    const [req] = params;
    if (req.url.endsWith('/wh/stripe')) {
      return bodyParser.raw({ type: 'application/json' })(...params);
    }
    return bodyParser.json()(...params);
  });
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(methodOverride());

  app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
    crossOriginResourcePolicy: false,
    frameguard: false,
  }));

  app.use(cors({
    origin: true,
    credentials: true,
  }));

  app.use(cookieParser());

  app.set('trust proxy', true);
  app.use(morgan('dev'));
  app.use('/', routes);

  // Error handling
  ErrorsMiddleware.setup(app);

  const httpServer = http.createServer(app);
  return httpServer;
};

export default { setup };
