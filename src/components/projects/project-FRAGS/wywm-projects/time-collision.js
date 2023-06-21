import javaIcon from "../../../../images/hobbies/web-dev/javaMed.png";

const timeCollision = `
<div class="row text-center rounded mt-3">
  <div class="col mb-3">
    <div class="card h-100 card-opacity">
      <div class="row g-0 h-100">
        <div class="col-md-4">
          <img
            src="${javaIcon}"
            class="img-fluid rounded-start h-100 w-100"
            alt="..."
          />
        </div>
        <div class="col-md-8 align-self-center">
          <div class="card-body">
            <h5 class="card-title mb-2">Java text turn based game</h5>
            <h6 class="card-subtitle text-success text mb-2">Time Collision</h6>
            <p class="card-text mb-2">
              Basic java demonstrating OOP, looping and file organization
            </p>
              <small class="text-muted"
                ><a
                  href="https://hub.docker.com/r/ellis8555/docker-realms"
                  class="btn btn-primary"
                  >Docker Image</a
                ></small
              >
              <small class="text-muted"
                ><a
                  href="https://github.com/ellis8555/time_collision"
                  class="btn btn-primary"
                  >Source code</a
                ></small
              >
            <p class="card-text mt-2">Pull the docker image and run the image with "docker run -it --rm ellis8555/docker-realms"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export { timeCollision };
