import { doubleLandscape } from "./blocks/doubleLandscape";
import { doublePortrait } from "./blocks/doublePortrait";
import { landscape } from "./blocks/landscape";
import { projectDetails } from "./blocks/projectDetails";
import { projectHeaderImage } from "./blocks/projectHeaderImage";
import { contact } from "./contact";
import { project } from "./schema";
import { work } from "./work";

const schemas = [
  project,
  contact,
  work,

  // Blocks
  doublePortrait,
  doubleLandscape,
  landscape,
  projectDetails,
  projectHeaderImage,
];

export default schemas;
