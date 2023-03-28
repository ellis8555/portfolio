import { timeCollision } from "./wywm-projects/time-collision";
import { codingKnights } from "./wywm-projects/coding-knights";
import { goblinStoreTemplate } from "./wywm-projects/project-template";
import { myGoblinStore } from "./wywm-projects/my-logic";
import { catsApi } from "./wywm-projects/cats-api";
import { gitHubAccount } from "./github/github";

const wywmProjectsFrag = `
<!-- WYWM projects -->
<h4 class="text-center my-5">-- WYWM Projects --</h4>
<!-- time collision java project -->
${timeCollision}
<!-- Coding knights project -->
${codingKnights}
<!-- Next two componenets on same row  -->
<div class="row text-center rounded pt-2 pb-3">
<!-- goblin store project TEMPLATE -->
${goblinStoreTemplate}
  <!-- My Goblin store front -->
${myGoblinStore}
</div>
<!-- cat facts project -->
${catsApi}
<!-- my github -->
<h4 class="text-center my-5">-- Github --</h4>
${gitHubAccount}
`;

export { wywmProjectsFrag };
