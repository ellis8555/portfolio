import nodeJsIcon from "../../images/todos/node-js.jpg";

const todosFRAG = `
<p class="display-5 text-center">Todos</p>
<h4 class="text-center my-5">-- Personal --</h4>
<div class="row text-center rounded">
  <div class="col">
    <div class="card h-100 card-opacity">
      <div class="row g-0 h-100">
        <div class="col-md-4">
          <img
            src="${nodeJsIcon}"
            class="img-fluid rounded-start h-100 w-100"
            alt="..."
          />
        </div>
        <div class="col-md-8 align-self-center">
          <div class="card-body">
            <h5 class="card-title">List of things to accomplish</h5>
            <ul class="list-group list-group-flush rounded card-ul-opacity">
              <li class="list-group-item">1. Jest & React testing library</li>
              <li class="list-group-item">2. Complete react version of this project</li>
              <li class="list-group-item">3. Next.js</li>
              <li class="list-group-item">4. React Native</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

export { todosFRAG };
