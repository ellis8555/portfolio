import { createRouteContainer } from "../../../utilities/allUtilities";

const contactForm = `
<form class="container-fluid card-opacity rounded pt-2 px-sm-5" name="contactForm">
<div class="my-3">
  <label for="name" class="form-label text-info">Name:</label>
  <div class="form-group row">
    <div class="col-md-4">
<input type="text" class="form-control" id="name" name="name" aria-describedby="nameHelp"/>
    </div>
    <div class="col-md-8">
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
`;

const contactFormElement = createRouteContainer(contactForm, "contactForm");
export { contactFormElement };
