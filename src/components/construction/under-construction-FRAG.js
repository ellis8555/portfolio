import { eachWebdevImage } from "../../images/allImages";

const underConstructionFRAG = `
<div class="row pb-3">
  <div class="col-lg-3 construction-ul-opacity mx-auto rounded p-2 my-2">
    <p>
      <a href="https://github.com/ellis8555/CertificatesOnGit/tree/src-branch" class="under-construction-text-color text-decoration-underline fs-5">This version github</a>
    </p>
    <div class="row d-flex">
      <p class="text-center">Front-end</p>
      <div class="col align-self-center">
        <img src="${eachWebdevImage[18].imageSrc}" alt="${eachWebdevImage[18].imageAlt}" class="rounded" />
      </div>
      <div class="col">
        <img
          src="${eachWebdevImage[0].imageSrc}"
          alt="${eachWebdevImage[0].imageAlt}"
        />
      </div>
      <div class="col align-self-center">
        <img src="${eachWebdevImage[15].imageSrc}" alt="${eachWebdevImage[15].imageAlt}" />
      </div>
    </div>
  </div>
  <div class="col-lg-3 construction-ul-opacity mx-auto rounded p-2 my-2">
    <p class="under-construction-text-color fs-5">
      Upcoming version
    </p>

    <div class="row d-flex">
      <p class="text-center">Front-end</p>
      <div class="col align-self-center">
        <img src="${eachWebdevImage[14].imageSrc}" alt="${eachWebdevImage[14].imageAlt}" />
      </div>
      <div class="col">
        <img src="${eachWebdevImage[12].imageSrc}" alt="${eachWebdevImage[12].imageAlt}" />
      </div>
      <div class="col align-self-center">
        <img src="${eachWebdevImage[16].imageSrc}" alt="${eachWebdevImage[16].imageAlt}" />
      </div>
    </div>
  </div>

  <div class="col-lg-3 construction-ul-opacity mx-auto rounded p-2 my-2">
    <p>
    <a href="https://github.com/ellis8555/portfolio-backend" class="under-construction-text-color text-decoration-underline fs-5">Both versions github</a>
    </p>

    <div class="row d-flex">
      <p class="text-center">Back-end</p>
      <div class="col align-self-center">
        <img src="${eachWebdevImage[2].imageSrc}" alt="${eachWebdevImage[2].imageAlt}" />
      </div>
      <div class="col align-self-center">
        <img src="${eachWebdevImage[8].imageSrc}" alt="${eachWebdevImage[8].imageAlt}" />
      </div>
      <div class="col align-self-center">
        <img src="${eachWebdevImage[7].imageSrc}" alt="${eachWebdevImage[7].imageAlt}" class="rounded" />
      </div>
    </div>
  </div>
</div>`;

export { underConstructionFRAG };
