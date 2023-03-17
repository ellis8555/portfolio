import webpackIcon from "../../images/hobbies/web-dev/webpack.png";
import bootstrapIcon from "../../images/hobbies/web-dev/bootstrap.png";
import sassIcon from "../../images/hobbies/web-dev/sass.png";
import reactIcon from "../../images/hobbies/web-dev/react.png";
import postcssIcon from "../../images/hobbies/web-dev/postcss.png";
import tailwindIcon from "../../images/hobbies/web-dev/tailwind.png";
import expressIcon from "../../images/hobbies/web-dev/express.png";
import mongoDBIcon from "../../images/hobbies/web-dev/mongoDB.png";
import jwtIcon from "../../images/hobbies/web-dev/jwt.jpg";

const underConstructionFRAG = `
<div class="row pb-3">
  <div class="col-lg-3 construction-ul-opacity mx-auto rounded p-2 my-2">
    <p class="under-construction-text-color text-decoration-underline fs-5">
      This version
    </p>
    <div class="row d-flex">
      <p class="text-center">Front-end</p>
      <div class="col align-self-center">
        <img src="${webpackIcon}" alt="webpack" class="rounded" />
      </div>
      <div class="col">
        <img
          src="${bootstrapIcon}"
          alt="webpack"
          height="35px"
          width="35px"
          style="object-fit: cover; margin: auto"
        />
      </div>
      <div class="col align-self-center">
        <img src="${sassIcon}" alt="sass" />
      </div>
    </div>
  </div>
  <div class="col-lg-3 construction-ul-opacity mx-auto rounded p-2 my-2">
    <p class="under-construction-text-color text-decoration-underline fs-5">
      Upcoming version
    </p>

    <div class="row d-flex">
      <p class="text-center">Front-end</p>
      <div class="col align-self-center">
        <img src="${reactIcon}" alt="react" />
      </div>
      <div class="col">
        <img src="${postcssIcon}" alt="postcss" />
      </div>
      <div class="col align-self-center">
        <img src="${tailwindIcon}" alt="tailwind" />
      </div>
    </div>
  </div>

  <div class="col-lg-3 construction-ul-opacity mx-auto rounded p-2 my-2">
    <p class="under-construction-text-color text-decoration-underline fs-5">
      Both versions
    </p>

    <div class="row d-flex">
      <p class="text-center">Back-end</p>
      <div class="col align-self-center">
        <img src="${expressIcon}" alt="express" />
      </div>
      <div class="col align-self-center">
        <img src="${mongoDBIcon}" alt="mongoDB" />
      </div>
      <div class="col align-self-center">
        <img src="${jwtIcon}" alt="jwt" class="rounded" />
      </div>
    </div>
  </div>
</div>`;

export { underConstructionFRAG };
