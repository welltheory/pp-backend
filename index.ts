import './alias';
import '$utils/dayjs';
import Envs from '$envs';
import Express from '$api/express';

const { port } = Envs;

const server = Express.setup();
server.listen(port, async () => {
  console.log('Listening on:', port);
});
  

