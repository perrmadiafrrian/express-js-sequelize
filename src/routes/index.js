import { Router } from "express";
import Auth from "./Auth";

const router = Router();

router.get("/", (req, res) => res.send("ok"));

router.use("/auth", Auth);

export default router;
