import { createRouteContainer } from "../../utilities/allUtilities";
import { certificatesFRAG } from "./certificatesFRAG";
import { carouselButtons } from "./certificates-methods/carousel-button-injector";

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
<div class="w-75 mx-auto container pb-5" id="carouselContainer">
  <div
    id="carouselExampleIndicators"
    class="carousel slide"
    data-bs-ride="true"
  >
    <div class="carousel-indicators">
    ${carouselButtons}
    </div>
    <div class="carousel-inner">
    ${certificatesFRAG}
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
export { certificates, certificatesElement };
