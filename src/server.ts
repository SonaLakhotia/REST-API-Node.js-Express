import { createServer } from './index';

const server = createServer();

server.listen(3000, () => {
  console.log('Server is running');
})