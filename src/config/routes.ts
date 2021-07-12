import { UserRoutes } from '@routes/UserRoute';

const API = '/api';

export default (app) => {
  app.use(API, UserRoutes);

  app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ error: error.message });
    next(error);
  });
};