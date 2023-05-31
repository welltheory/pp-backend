import './alias';
import Envs from '$envs';
import Express from '$config/express';
import dayjs from '$utils/dayjs';

const server = Express.setup();
dayjs();
const port = Envs.get('port');
server.listen(port, async () => {
  console.log(`Server – listening on ${port}`);
});
  

