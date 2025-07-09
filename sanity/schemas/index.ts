import { doubleLandscape } from "./blocks/doubleLandscape";
import { doublePortrait } from "./blocks/doublePortrait";
import { landscape } from "./blocks/landscape";
import { projectDetails } from "./blocks/projectDetails";
import { projectHeaderImage } from "./blocks/projectHeaderImage";
import { contact } from "./contact";
import { pageBuilderType } from "./pageBuilder";
import { project } from "./schema";
import { work } from "./work";

const schemas = [
  project,
  contact,
  work,
  pageBuilderType,

  // Blocks
  doublePortrait,
  doubleLandscape,
  landscape,
  projectDetails,
  projectHeaderImage,
];

export default schemas;
