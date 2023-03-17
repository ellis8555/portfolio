import { createRouteContainer } from "../../utilities/routes/createDivRoutes";
import wywmJavaFundatmentals from "../../images/WYWM-certificates/WYWM-JavaFundamentals.jpg";
import wywmPythonFundatmentals from "../../images/WYWM-certificates/WYWM-Python-Programming-Fundamentals.jpg";
import wywmIntermediateDev from "../../images/WYWM-certificates/WYWM-IntermediateWebDev.jpg";
import wywmBigO from "../../images/WYWM-certificates/WYWM-BigO.JPG";
import wywmDevOps from "../../images/WYWM-certificates/WYWM-DevOps.JPG";
import wywmIntroDev from "../../images/WYWM-certificates/WYWM-IntroWebDev.JPG";
import wywmSourceControl from "../../images/WYWM-certificates/WYWM-SourceControlFundamentals.jpg";
import wywmPrinciplesOfProgramming from "../../images/WYWM-certificates/WYWM-PrinciplesOfProgramming.JPG";
import wywmQaTesting from "../../images/WYWM-certificates/WYWM-SoftwareQATestingFundamentals.JPG";
import wywmDigitalProjectManagement from "../../images/WYWM-certificates/WYWM-IntroductionToDigitalProjectManagement.jpg";

const certificates = `
<p class="display-5 text-center w-75 mx-auto mt-5 rounded">
  WYWM certifications
</p>
<p class="text-center">
  <a
    href="https://withyouwithme.com/"
    class="text-dark text-decoration-underline text-white"
    >With You With Me link</a
  >
</p>
<div class="w-75 mx-auto container" id="carouselContainer">
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="true"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="5"
        aria-label="Slide 6"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="6"
        aria-label="Slide 7"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="7"
        aria-label="Slide 8"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="8"
        aria-label="Slide 9"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="9"
        aria-label="Slide 10"
      ></button>
    </div>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="${wywmJavaFundatmentals}"
          class="d-block w-100"
          alt="Java fundamentals"
        />
      </div>
      <div class="carousel-item">
        <img
          src="${wywmPythonFundatmentals}"
          class="d-block w-100"
          alt="Python fundamentals"
        />
      </div>
      <div class="carousel-item">
        <img
          src="${wywmIntermediateDev}"
          class="d-block w-100"
          alt="Intermediate web dev"
        />
      </div>
      <div class="carousel-item">
        <img
          src="${wywmBigO}"
          class="d-block w-100"
          alt="Big-O"
        />
      </div>
      <div class="carousel-item">
        <img
          src="${wywmDevOps}"
          class="d-block w-100"
          alt="DevOps"
        />
      </div>
      <div class="carousel-item">
        <img
          src="${wywmIntroDev}"
          class="d-block w-100"
          alt="Intro WebDev"
        />
      </div>
      <div class="carousel-item">
        <img
          src="${wywmSourceControl}"
          class="d-block mx-auto"
          alt="Source Control"
        />
      </div>
      <div class="carousel-item">
        <img
          src="${wywmPrinciplesOfProgramming}"
          class="d-block mx-auto"
          alt="Principles Of Programming"
        />
      </div>
      <div class="carousel-item">
        <img
          src="${wywmQaTesting}"
          class="d-block mx-auto"
          alt="QA Testing"
        />
      </div>
      <div class="carousel-item">
        <img
          src="${wywmDigitalProjectManagement}"
          class="d-block mx-auto"
          alt="Digital Project Management"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>`;

const certificatesElement = createRouteContainer(certificates, "certificates");
export { certificatesElement };
