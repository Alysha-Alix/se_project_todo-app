import { initialTodos } from "../utils/constants.js";

class TodoCounter {
    constructor(items, counter) {
        this._counter = document.querySelector(".counter__text");
        this._completed = items.filter((todo) => todo.completed).length;
        this._total = items.length;
        this._updateText();
    }

  // Call this when a checkbox is clicked, and when a completed
  // to-do is deleted.
  updateCompleted = (increment) => {
    if (increment) {
        this._completed += 1;
    } else {
        this._completed -= 1;
    }
    this._updateText();
  };

  // Call this when a to-do is deleted, or when a to-do is   
  // created via the form. 
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