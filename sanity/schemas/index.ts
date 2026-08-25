import { doubleLandscape } from "./blocks/doubleLandscape";
import { doublePortrait } from "./blocks/doublePortrait";
import { doubleSquare } from "./blocks/doubleSquare";
import { landscape } from "./blocks/landscape";
import { fullBleed } from "./blocks/fullBleed";
import { contact } from "./contact";
import { pageBuilderType } from "./pageBuilder";
import { project } from "./schema";
import { singleSquare } from "./blocks/singleSquare";
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
  doubleSquare,
  landscape,
  singleSquare,
  fullBleed,
  portrait,
];

export default schemas;
