import { Router } from "express";

import categoriesRoutes from "./categories.routes";
import specificationsRoutes from "./specifications.routes";

const appRoutes = Router();

// CAR MODULE
appRoutes.use("/categories", categoriesRoutes);
appRoutes.use("/specifications", specificationsRoutes);

export default appRoutes;
