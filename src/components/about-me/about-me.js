import { createRouteContainer } from "../../utilities/allUtilities";
import { aboutMeFRAG } from "./about-me-FRAG";
import { hobbiesElement } from "../../components/hobbies/hobbies";

const aboutMe = `
<div class="px-sm-5 py-5">
  <p class="display-5 text-center pb-5">About me</p>
  <div class="rounded">
  <div id="aboutMe">${aboutMeFRAG}</div>
  ${hobbiesElement.outerHTML}
  </div>
</div>
`;

const aboutMeElement = createRouteContainer(aboutMe, "about-me");
export { aboutMeElement };
