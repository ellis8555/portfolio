const contactFRAG = `<p class="display-5 text-center">Contact Me</p>


<div class="rounded text-center d-md-inline-flex w-100 justify-content-md-around my-5 py-3 card-opacity">
  <p class="text-info h5 font-weight-bold">
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
    lsp1@hotmail.com
  </p>
  <a
    href="https://www.linkedin.com/in/lonnie-smith-4b0583208/"
    class="text-info h5 font-weight-bold"
    id="linkedin-link"
    >My linkedin</a>
</div>
<h4 class="text-center">Leave a comment or feedback</h4>

<div class="rounded d-flex justify-content-center mt-5">
  <form class="container-fluid card-opacity rounded px-sm-5" name="contactForm">
    <div class="my-3">
      <label for="name" class="form-label text-info">Name:</label>
      <div class="form-group row">
        <div class="col-lg-4">
  <input type="text" class="form-control" id="name" name="name" aria-describedby="nameHelp"/>
        </div>
        <div class="col-lg-8">
    <div id="nameHelp" class="form-text">Name needs to be between 2-20 characters in length</div>
        </div>
      </div>

    <div id="name-invalid" class="invalid-feedback"></div>
    </div>
  <div class="mb-3">
  <label for="comment" class="form-label text-info">Comment:</label>
  <textarea class="form-control" id="comment" name="comment" placeholder="Drop me a comment or leave some feedback" rows="10"></textarea>
  <div id="commentHelp" class="form-text">250 character limit</div>
  <div id="comment-invalid" class="invalid-feedback"></div>
  </div>
  <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </form>
</div>`;

export { contactFRAG };
