$(document).ready(function () {
  // Adicionar tarefa
  $("#addBtn").click(function () {
    let task = $("#taskInput").val().trim();

    if (task !== "") {
      let newTask = `
        <li>
          <span>${task}</span>

          <div class="actions">
            <button class="doneBtn">✔</button>
            <button class="deleteBtn">✖</button>
          </div>
        </li>
      `;

      $("#taskList").append(newTask);

      $("#taskInput").val("");
    }
  });

  // Concluir tarefa
  $(document).on("click", ".doneBtn", function () {
    $(this).closest("li").toggleClass("completed");
  });

  // Excluir tarefa
  $(document).on("click", ".deleteBtn", function () {
    $(this).closest("li").remove();
  });

  // Enter adiciona tarefa
  $("#taskInput").keypress(function (e) {
    if (e.which === 13) {
      $("#addBtn").click();
    }
  });
});
