import * as admin from 'firebase-admin';

admin.initializeApp({
  projectId:"fukuuchierp",
  credential: admin.credential.applicationDefault()
});

export default admin;