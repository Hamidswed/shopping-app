import { hashSync } from "bcryptjs";

const userData = {
  users: [
    {
      name: "Admin",
      email: "admin@hdelshad.com",
      password: hashSync("12345", 10),
      role: "Admin",
    },
    {
      name: "User",
      email: "user@hdelshad.com",
      password: hashSync("12345", 10),
      role: "User",
    },
  ],
};

export default userData;
