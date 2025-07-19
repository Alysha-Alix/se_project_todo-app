class Todo {
    constructor(data, selector, handleCheck, handleDelete) {
        this._data =  data;
        this._templateElement = document.querySelector(selector);
        this._completed = data.completed;
        this._name = data.name;
        this._date =data.date;
        this._id = data.id;
        this._selector = selector;
        this._handleCheck = handleCheck;
        this._handleDelete = handleDelete;
    }

    _setEventListeners() {
        this._todoDeleteBtn.addEventListener("click", () => {
            this._handleDelete(this._completed)
        });
        this._todoCheckboxEl.addEventListener("change", () => {
            this._toggleCompletion();
            this._handleCheck(this._todoCheckboxEl.checked);
        });
    }

    _generateCheckboxEl() {
        this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
        this._todoLabel = this._todoElement.querySelector(".todo__label");
        this._todoCheckboxEl.checked = this._data.completed;
        this._todoCheckboxEl.id = `todo-${this._data.id}`;
        this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
    }

    _toggleCompletion = () => {
        this._completed = !this._completed;
    } 

    _generateDueDate(dueDate) {
        if (!isNaN(dueDate)) {
            this._todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}`;
        }
    }

    getView() {
      this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

      this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
      this._todoNameEl = this._todoElement.querySelector(".todo__name");
      this._todoDate = this._todoElement.querySelector(".todo__date");
      this._todoNameEl.textContent = this._data.name;
    
      this._generateCheckboxEl();
      this._generateDueDate(this._data.date);
      this._setEventListeners();

      return this._todoElement;
    }
}

export default Todo