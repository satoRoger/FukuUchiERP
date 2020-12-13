import { createConnection, getRepository } from 'typeorm';

import dbConfig from './db-config';
import TimecardModel from '../model/timecard';

createConnection(dbConfig).then(async (connection) => {
  console.log('Postgres Connected');
  try {
    const customerRepository = getRepository(TimecardModel);
    
    const allCustomers = await customerRepository.find();
    console.log('Select : ', allCustomers);
  }
  catch(error) {
    console.error('Failed : ', error);
  }
  finally {
    await connection.close();
    console.log('Connection Closed');
  }
})
.catch((error) => {
  console.error('Postgres Connection Failed', error);
});