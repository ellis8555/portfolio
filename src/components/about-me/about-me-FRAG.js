import hawaiiPicture from "../../images/about-me/L&C-Hawaii.jpg";

const aboutMeFRAG = `
<div class="row text-center rounded">
  <div class="col">
    <div class="card card-opacity">
      <div class="row g-0 h-100">
        <div class="col-lg-5">
          <img
            src="${hawaiiPicture}"
            class="img-fluid rounded-start h-100 w-100"
            alt="..."
          />
        </div>
        <div class="col-lg-7">
          <div class="card-body pt-5">
            <h3 class="card-title">Lonnie Smith</h3>
            <hr />
            <!-- <ul class="list-group list-group-flush rounded card-ul-opacity"> -->
            <div class="row">
              <ul class="list-group card-ul-opacity col-lg-8 mx-auto">
                <li class="list-group-item border-0">
                  <p class="text-start">
                    I am currently working towards becoming a full stack web
                    developer.
                  </p>
                </li>
                <li class="list-group-item border-0">
                  <p class="text-start">
                    I have a strong foundation in HTML, CSS, and JavaScript
                  </p>
                </li>
                <li class="list-group-item border-0">
                  <p class="text-start">
                    Good solid base knowledge of server side technologies
                  </p>
                </li>
                <li class="list-group-item border-0">
                  <p class="text-start">
                    Good solid base knowledge of front side technologies
                  </p>
                </li>
                <li class="list-group-item border-0">
                  <p class="text-start">
                    Very adaptable and vesatile with change
                  </p>
                </li>
              </ul>
            </div>
            <hr />
            <div class="card-body mt-3">
              <p class="card-text text-warning display-3">
                Contact form coming
              </p>
              <div class="card-text">
                <p>Contact Me:</p>
                <p class="text-info h6 font-weight-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="email-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <!-- <span
                      class="material-symbols-outlined text-light contact-icon"
                    >
                      mail
                    </span> -->
                  lsp1@hotmail.com
                </p>
                <a
                  href="https://www.linkedin.com/in/lonnie-smith-4b0583208/"
                  class="text-info h6 font-weight-bold"
                  id="linkedin-link"
                  >My linkedin</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

export { aboutMeFRAG };
