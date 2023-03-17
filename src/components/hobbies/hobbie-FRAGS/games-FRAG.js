import hax94 from "../../../images/hobbies/games/94header.JPG";
import haxball from "../../../images/hobbies/games/Haxball.JPG";
import starcraft from "../../../images/hobbies/games/starcraft.JPG";

const hobbiesGamesFRAG = `
<h4 class="text-center my-5">-- Games --</h4>
<div class="d-lg-flex justify-content-center">
  <div class="mx-1 mb-3">
    <div class="card h-100 card-opacity" style="width: 18rem">
      <img
        src="${starcraft}"
        class="card-img-top"
        alt="Starfcraft"
      />

      <div class="card-body">
        <h5 class="card-title">Starcraft II</h5>

        <p class="card-text">
          A game that requires quick decision making in real-time!
        </p>
      </div>
      <div class="card-footer card-footer-opacity">
        <small>Starcraft II</small>
      </div>
    </div>
  </div>

  <div class="mx-1 mb-3">
    <div class="card h-100 card-opacity" style="width: 18rem">
      <img
        src="${haxball}"
        class="card-img-top"
        alt="hax94"
      />

      <div class="card-body">
        <h5 class="card-title">Haxball</h5>
        <p class="card-text text-wrap">
          <a href="https://www.haxball.com/">Haxball</a> is a browser based game
          fused between soccer and pong. It plays 1v1 up to 11v11!
        </p>
      </div>
      <div class="card-footer card-footer-opacity">
        <small>Haxball</small>
      </div>
    </div>
  </div>

  <div class="mx-1 mb-3">
    <div class="card h-100 card-opacity" style="width: 18rem">
      <img
        src="${hax94}"
        class="card-img-top"
        alt="nhl94"
      />

      <div class="card-body">
        <h5 class="card-title">NHL 94</h5>
        <p class="card-text text-wrap">
          Love the retro hockey game<a href="http://www.nhl94online.com/">
            nhl94online
          </a>
          that has a great community with online leagues!
        </p>
      </div>
      <div class="card-footer card-footer-opacity">
        <small>NHL 94 Online</small>
      </div>
    </div>
  </div>
</div>
<h4 class="text-center my-5">-- More to be added --</h4>`;

export { hobbiesGamesFRAG };
