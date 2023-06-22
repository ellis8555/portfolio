import pythonIcon from "../../../../images/projects/pythonMed.png";

const codingKnights = `
<div class="row text-center rounded mt-3">
  <div class="col mb-3">
    <div class="card h-100 card-opacity">
      <div class="row g-0 h-100">
        <div class="col-md-4">
          <img
            src="${pythonIcon}"
            class="img-fluid rounded-start h-100 w-100"
            alt="..."
          />
        </div>
        <div class="col-md-8 align-self-center">
          <div class="card-body">
            <h5 class="card-title mb-2">
              Python program that demonstrates CRUD OOP
            </h5>
            <h6 class="card-subtitle text-success text mb-2">Coding Knights</h6>
            <p class="card-text mb-2">
              Basic python allowing user to perform CRUD operations on objects
            </p>
            <small class="text-muted">
            <a
              href="https://hub.docker.com/r/ellis8555/docker-codingknights"
              class="btn btn-primary"
              >Docker Image</a
            ></small>
            <small class="text-muted">
            <a
              href="https://github.com/ellis8555/WYWM-CodingKnights"
              class="btn btn-primary"
              >Source code</a
            ></small>
            <p class="card-text">
            Pull the docker image and run the image with "docker run -it --rm ellis8555/docker-codingknights"
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export { codingKnights };
