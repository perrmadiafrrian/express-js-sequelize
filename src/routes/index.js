import { Router } from "express";
import Auth from "./Auth";

const router = Router();

router.get("/", (req, res) => res.send("ok"));

router.post("/hook", (req, res) => {
  console.log(req.body);
  return res.send("ok");
});

router.use("/auth", Auth);

export default router;
