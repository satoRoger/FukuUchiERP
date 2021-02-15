import * as admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey";

admin.initializeApp({
  projectId: "fukuuchierp",
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});
export default admin;
