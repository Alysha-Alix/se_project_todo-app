import { initialTodos } from "../utils/constants.js";

class TodoCounter {
    constructor(items, selector) {
        this._counter = document.querySelector(".counter__text");
        this._completed = items.filter((todo) => todo.completed).length;
        this._total = items.length;
        this._updateText();
    }

  updateCompleted = (increment) => {
    if (increment) {
        this._completed += 1;
    } else {
        this._completed -= 1;
    }
    this._updateText();
  };

  updateTotal = (increment) => {
    if (increment) {
        this._total += 1;
    } else {
        this._total -= 1;
    } 
    this._updateText();
  };

  _updateText() {
    this._counter.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;