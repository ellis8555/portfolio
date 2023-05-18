import { webDevImages } from "./webDev-methods/webDevImageInjector";

const hobbiesWebDevFRAG = `
<h4 class="text-center my-5">-- Web dev --</h4>
<p class="card-opacity text-light text-center w-50 mx-auto rounded">I have used each of these in some capacity</p>
<div class="row text-center py-3">
  <div
    class="col-md icons rounded web-dev-hobbies-bg d-flex flex-wrap justify-content-center gap-4"
  >
  ${webDevImages}
  </div>
</div>`;

export { hobbiesWebDevFRAG };
