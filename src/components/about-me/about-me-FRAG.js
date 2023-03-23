import LCHawaii from "../../images/about-me/L&C-Hawaii.jpg";
import { aboutMeText } from "./about-me-text";

const aboutMeFRAG = `
<div class="row text-center rounded">
  <div class="col">
    <div class="card card-opacity">
      <div class="row g-0 h-100">
        <div class="col-lg-5">
          <img
            src="${LCHawaii}"
            class="img-fluid rounded-start h-100 w-100"
            alt="..."
          />
        </div>
        <div class="col-lg-7">
          <div class="card-body pt-5">
            <h3 class="card-title">Lonnie Smith</h3>
            <hr />
            <ul id="about-me-list" class="list-group card-ul-opacity mx-autos">${aboutMeText}</ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
export { aboutMeFRAG };
