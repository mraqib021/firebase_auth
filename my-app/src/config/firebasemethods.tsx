import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set, ref, getDatabase } from "firebase/database";
import { app } from "./firebaseconfig";

const auth = getAuth(app);
const db = getDatabase(app);

let NewUserSignup = (model: any) => {
  console.log(model);
  return new Promise((resolve, reject) => {
    if (model.email || model.password) {
      reject("Please Fill The Form !");
    }
    createUserWithEmailAndPassword(auth, model.email, model.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        const x = {
          username: model.username,
          email: model.email,
          password: model.password,
          uid: user.uid,
        };
        set(ref(db, `users/${user.uid}`), x)
          .then((x) => {
            resolve(x);
          })
          .catch((x) => {
            reject(x);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(error);
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  });
};

let UserLogin = (loginmodel: any) => {
  console.log(loginmodel);
  signInWithEmailAndPassword(auth, loginmodel.email, loginmodel.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
};

export { NewUserSignup, UserLogin };
