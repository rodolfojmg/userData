
import express    from 'express';
import bodyParser from 'body-parser';
import config     from 'config';
import consign    from 'consign';


export default () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());

  // ENDPOINTS
  consign({cwd: 'src'})
    .then('data')
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};