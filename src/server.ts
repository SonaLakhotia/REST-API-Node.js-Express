import { createServer } from './index';
import  configuration  from './configuration';

const server = createServer();

server.listen(configuration.port, () => {
  console.log('Server is running');
})