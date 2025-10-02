import { doubleLandscape } from "./blocks/doubleLandscape";
import { doublePortrait } from "./blocks/doublePortrait";
import { landscape } from "./blocks/landscape";
import { fullBleed } from "./blocks/fullBleed";
import { contact } from "./contact";
import { pageBuilderType } from "./pageBuilder";
import { project } from "./schema";
import { work } from "./work";
import { portrait } from "./blocks/portrait";

const schemas = [
  project,
  contact,
  work,
  pageBuilderType,

  // Blocks
  doublePortrait,
  doubleLandscape,
  landscape,
  fullBleed,
  portrait,
];

export default schemas;
