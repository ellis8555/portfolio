import { createRouteContainer } from "../../utilities/allUtilities";
import { aboutMeFRAG } from "./about-me-FRAG";
import { hobbiesElement } from "../../components/hobbies/hobbies";
import { gitHubAccount } from "../projects/project-FRAGS/github/github";

const aboutMe = `
<div class="px-sm-5 py-5">
  <p class="display-5 text-center pb-5">About me</p>
  <!-- my github -->
<h4 class="text-center my-5">-- Github --</h4>
${gitHubAccount}
  <div class="rounded mt-5">
  <div id="aboutMe">${aboutMeFRAG}</div>
  ${hobbiesElement.outerHTML}
  </div>
</div>
`;

const aboutMeElement = createRouteContainer(aboutMe, "about-me");
export { aboutMeElement };
