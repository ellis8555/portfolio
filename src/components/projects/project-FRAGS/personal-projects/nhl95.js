import next from "../../../../images/projects/next.png";

const nhl95Project = `
<div class="row text-center rounded mb-4">
  <div class="col">
    <div class="card h-100 card-opacity">
      <div class="row g-0 h-100">
        <div class="col-md-4">
          <img
            src="${next}"
            class="img-fluid rounded-start h-100 w-100"
            alt="..."
          />
        </div>
        <div class="col-md-8 align-self-center">
          <div class="card-body">
            <h5 class="card-title">Website in beta mode</h5>
            <p class="card-text">
              A retro league project in development enabling a games saved state to be uploaded to a database! <br />
              This will refresh and update live standings and player stats
            </p>           
              <small class="text-muted"
                ><a href="https://nhl95.vercel.app" class="btn btn-primary"
                  >Nhl95</a
                ></small
              >
              <small class="text-muted"
                ><a href="https://github.com/ellis8555/wn95hl" class="btn btn-primary"
                  >Github</a
                ></small
              >   
              <p class="mt-2 card-text">Users save a game then upload that binary file via input and data is then persisted to mongodb</p>        
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export { nhl95Project };
