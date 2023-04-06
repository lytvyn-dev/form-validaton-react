import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    inputValue: firstNameValue,
    entredInputIsValid: firsNameIsValid,
    hasError: firstNameHasError,
    inputBlurHandler: blurFirstName,
    inputChangeHandler: firstNameChange,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: lastNameValue,
    entredInputIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputBlurHandler: blurLastName,
    inputChangeHandler: lastNameChange,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");

  const {
    inputValue: emailValue,
    entredInputIsValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: blurEmail,
    inputChangeHandler: emailChange,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const onSubmitHandler = (e) => {
    e.preventDefault();
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  //? Form handling
  let formIsInvalid = true;

  if (emailIsValid && lastNameIsValid && firsNameIsValid) {
    formIsInvalid = false;
  }

  //? Dynamic styles change hadling

  const fistNameValid = firstNameHasError ? "form-control invalid" : "form-control";
  const lastNameValid = lastNameHasError ? "form-control invalid" : "form-control";
  const emailValid = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={fistNameValid}>
          <label htmlFor="fist-name">First Name</label>
          <input
            value={firstNameValue}
            onBlur={blurFirstName}
            onChange={firstNameChange}
            type="text"
            id="fist-name"
          />
          {firstNameHasError && <p className="error-text">First name should no an empty string!</p>}
        </div>

        <div className={lastNameValid}>
          <label htmlFor="last-name">Last Name</label>
          <input
            value={lastNameValue}
            onChange={lastNameChange}
            onBlur={blurLastName}
            type="text"
            id="last-name"
          />
          {lastNameHasError && <p className="error-text">First name should no an empty string!</p>}
        </div>
      </div>

      <div className={emailValid}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={emailValue}
          onChange={emailChange}
          onBlur={blurEmail}
          type="email"
          id="email"
        />
        {emailHasError && <p className="error-text">Email field should include @</p>}
      </div>

      <div className="form-actions">
        <button disabled={formIsInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
