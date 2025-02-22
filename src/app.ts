
import { getDatabaseConnection } from './database/connection';

const app = async () => {
  const db = await getDatabaseConnection();
  // test health check
  const healthcheck = await db.ping();
  if(db.status === 'connected' && healthcheck) {
    console.info('Connected to SurrealDB');
  } else {
    console.error('Failed to connect to SurrealDB');
  }
};

app();

