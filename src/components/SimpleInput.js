import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  //? Name input
  const {
    entredInputIsValid: entredName,
    inputValue: nameInput,
    hasError: nameHasError,
    inputChangeHandler: changeName,
    inputBlurHandler: blurName,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  //? Email input
  const {
    entredInputIsValid: entredEmail,
    inputValue: emailInput,
    hasError: emailHasError,
    inputChangeHandler: changeEmail,
    inputBlurHandler: blurEmail,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  //? Form
  let formIsValid = false;

  if (entredName && emailInput) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (!entredName && !entredEmail) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  //? Inputs dynamic classes validation
  const validationClasses = nameHasError ? "form-control invalid" : "form-control";
  const EmailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className={validationClasses}>
        <label htmlFor="name">Your Name</label>
        <input value={nameInput} onChange={changeName} type="text" onBlur={blurName} id="name" />
        {nameHasError && <p className="error-text">Name should not be an empty string</p>}
      </div>
      <div className={EmailClasses}>
        <label htmlFor="email">Your email</label>
        <input
          value={emailInput}
          onChange={changeEmail}
          type="email"
          onBlur={blurEmail}
          id="email"
        />
        {emailHasError && <p className="error-text">Email should include @</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
