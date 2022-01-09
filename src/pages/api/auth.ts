import approvezAPI from "./config";

export const signInWithEmail = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    approvezAPI
      .post(
        "/auth/web/apple",
        {
          email,
          password,
        },
        {}
      )
      .then((res) => {
        resolve(res);
        if (res.status !== 200) {
          throw new Error("Something Went Wrong!");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
