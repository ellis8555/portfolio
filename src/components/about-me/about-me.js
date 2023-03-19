import { createRouteContainer } from "../../utilities/allUtilities";
import { aboutMeFRAG } from "./about-me-FRAG";

const aboutMe = `
<div class="container pt-5 px-5">
  <p class="display-5 text-center pb-5">About me</p>
  <div class="rounded">
    <div id="aboutMe">${aboutMeFRAG}</div>
  </div>
</div>`;

const aboutMeElement = createRouteContainer(aboutMe, "about-me");
export { aboutMeElement };
