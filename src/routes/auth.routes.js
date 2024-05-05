import {Router} from 'express'
import {register} from "../controllers/auth.controller.js";
import {getcities} from "../controllers/auth.controller.js";
import { getcitynamebyid } from "../controllers/auth.controller.js";
import { getcityreligion } from "../controllers/auth.controller.js";
import { getcityhour_zone } from "../controllers/auth.controller.js";
import { getcitycontinent } from "../controllers/auth.controller.js";
import { getcitysea_ocean } from "../controllers/auth.controller.js";
import { getcityextension } from "../controllers/auth.controller.js";
import { getcitypopulation } from "../controllers/auth.controller.js";
import { getcityeasy_curiosity } from "../controllers/auth.controller.js";
import { getcityhard_curiosity } from "../controllers/auth.controller.js";
import { getcityclimate } from "../controllers/auth.controller.js";
import { getcitylanguage } from "../controllers/auth.controller.js";
import { getcitycurrency } from "../controllers/auth.controller.js";
import { getcityanimal } from "../controllers/auth.controller.js";
import { getcityperson } from "../controllers/auth.controller.js";
import { getcitymonument } from "../controllers/auth.controller.js";
import { getcityplate } from "../controllers/auth.controller.js";
import { getcityflora } from "../controllers/auth.controller.js";
import { getcityseatemperature } from "../controllers/auth.controller.js";
import { getcityhemisphere } from "../controllers/auth.controller.js";
import { getcityprefix } from "../controllers/auth.controller.js";


const router = Router();
router.post('/register', register);
router.get('/getcities', getcities);
router.get('/getcitynamebyid/:id', getcitynamebyid);
router.get('/getcityreligion/:name', getcityreligion);
router.get('/getcityhour_zone/:name', getcityhour_zone);
router.get('/getcitycontinent/:name', getcitycontinent);
router.get('/getcitysea_ocean/:name', getcitysea_ocean);
router.get('/getcityextension/:name', getcityextension);
router.get('/getcitypopulation/:name', getcitypopulation);
router.get('/getcityeasy_curiosity/:name', getcityeasy_curiosity);
router.get('/getcityhard_curiosity/:name', getcityhard_curiosity);
router.get('/getcityclimate/:name', getcityclimate);
router.get('/getcitylanguage/:name', getcitylanguage);
router.get('/getcitycurrency/:name', getcitycurrency);
router.get('/getcityanimal/:name', getcityanimal);
router.get('/getcityperson/:name', getcityperson);
router.get('/getcitymonument/:name', getcitymonument);
router.get('/getcityplate/:name', getcityplate);
router.get('/getcityflora/:name', getcityflora);
router.get('/getcityseatemperature/:name', getcityseatemperature);
router.get('/getcityhemisphere/:name', getcityhemisphere);
router.get('/getcityprefix/:name', getcityprefix);
export default router;