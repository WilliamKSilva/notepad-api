import { Router } from "express";
import { notesRoutes } from "./notes.routes";
import { usersRoutes } from "./users.routesd";

const router = Router();

router.use("/notes", notesRoutes);
router.use("/users", usersRoutes);

export { router };       