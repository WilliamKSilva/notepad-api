import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { notesRoutes } from "./notes.routes";
import { usersRoutes } from "./users.routesd";

const router = Router();

router.use("/notes", notesRoutes);

router.use("/users", usersRoutes);

router.use(authenticateRoutes);

export { router };       