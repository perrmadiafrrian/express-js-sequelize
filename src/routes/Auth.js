import { Router } from "express";
import { login } from "@controllers/AuthController";
import { User, Role } from "@models";

const router = Router();

router.get("/login", login);

router.get("/users", async (req, res) => {
  try {
    const u = await User.findAll()
      .then(r => r)
      .catch(err => err);
    return res.json(u);
  } catch (err) {
    return res.json(err.message);
  }
});

router.get("/roles", async (req, res) => {
  try {
    const ro = await Role.findAll()
      .then(r => r)
      .catch(err => err);
    return res.json(ro);
  } catch (err) {
    return res.json(err.message);
  }
});

export default router;
