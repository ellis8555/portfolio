import { createRouteContainer } from "../../utilities/allUtilities";
import { todosFRAG } from "./todos-FRAG";

const todos = `
<div class="container px-5 py-3 mt-5">
  <div id="todoSnippets">${todosFRAG}</div>
</div>`;

const todosElement = createRouteContainer(todos, "todos");
export { todosElement };
