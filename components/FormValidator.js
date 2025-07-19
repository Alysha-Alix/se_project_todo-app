class FormValidator {
    constructor(settings, formElement) {
        this._formElement = formElement;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._errorClass = settings.errorClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    }

    _showInputError( _inputElement, errorMessage) {
        const errorElementId = `#${_inputElement.id}-error`;
        const errorElement = this._formElement.querySelector(errorElementId);
        _inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
      }

    _hideInputError(_inputElement) {
        const errorElementId = `#${_inputElement.id}-error`;
        const errorElement = this._formElement.querySelector(errorElementId);
        _inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";
      }

    _checkInputValidity(_inputElement) {
        if (!_inputElement.validity.valid) {
          this._showInputError(
            _inputElement,
            _inputElement.validationMessage
          );
        } else {
          this._hideInputError(_inputElement);
        }
    }

    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      }

    _toggleButtonState() {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true;
          } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false;
          }
    }

    _setEventListeners() {
         this._toggleButtonState();
        
          this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
              this._checkInputValidity(inputElement);
              this._toggleButtonState();
            });
          });
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
        });
        this._setEventListeners();
    }

    resetValidation() {
        this._formElement.reset();
        this._toggleButtonState();
    }
}


export default FormValidator;