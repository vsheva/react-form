import React, {useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
   /*
   const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
*/
    const [enteredEmail, setEnteredEmail] = useState(""); //*
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);//*
    const enteredEmailIsValid = enteredEmail.trim() !== "" &&  enteredEmail.includes("@") ;//*
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;//*


    const {
        value: enteredName,
        hasError,
        reset,
        isValid:enteredNameIsValid,
        valueChangeHandler: inputChangeHandler,
        valueBlurHandler: nameInputBlurHandler
    } = useInput((value) => value.trim() !== "" )


 /*   useEffect(()=>{
        if(enteredNameIsValid) {setFormIsValid(true)}
        else { setFormIsValid(false)}
    }, [enteredNameIsValid])
*/

    let formIsValid=false
    if(enteredNameIsValid && enteredEmailIsValid) {  // основная проверка*
        formIsValid=true
    }

   /* //1
    const inputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    //2
    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    }*/


     //1
    const enteredEmailChangeHandler=(event)=>{//*
        setEnteredEmail(event.target.value)
    }

    //2
    const emailInputBlurHandler = (event) => {//*
        setEnteredEmailTouched(true);
    }


    //3
    const formSubmitHandler = (event) => {
        event.preventDefault();
        //setEnteredNameTouched(true)

        /*if (enteredName.trim() === '') {return }*/
        if (!enteredNameIsValid && !enteredEmailIsValid ) {  // проверка всей формы* //*  enteredNameIsValid -false  enteredEmailIsValid-false
            return
        }


        reset(); //setEnteredName("");  setEnteredNameTouched(false) ////чтобы после сабмита не было подстветки невалидности
        setEnteredEmail("");//*
        setEnteredEmailTouched(false)//*
    }

    const nameInputClasses = hasError ? "form-control invalid" : "form-control" //подсветка невалидности name
    const emailInputClasses = emailInputIsInvalid ? "form-control invalid" : "form-control" //****  подсветка невалидности email

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input onBlur={nameInputBlurHandler}
                       value={enteredName} type='text'
                       id='name'
                       onChange={inputChangeHandler}/>
                {hasError && <p className='error-text'>Name must not be empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-Mail</label>
                <input onBlur={emailInputBlurHandler}
                       value={enteredEmail} type='email'
                       id='email'
                       onChange={enteredEmailChangeHandler}/>
                {emailInputIsInvalid && <p className='error-text'>Please enter a valid email.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;



/**
import {useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const [enteredEmail, setEnteredEmail] = useState(""); //!*
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);//!*
    const enteredEmailIsValid = enteredEmail.trim() !== "" &&  enteredEmail.includes("@") ;//!*
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;//!*


    /!*   useEffect(()=>{
           if(enteredNameIsValid) {setFormIsValid(true)}
           else { setFormIsValid(false)}
       }, [enteredNameIsValid])
   *!/

    let formIsValid=false
    if(enteredNameIsValid && enteredEmailIsValid) {  // основная проверка*
        formIsValid=true
    }

    //1
    const inputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    //2
    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    }


    //1
    const enteredEmailChangeHandler=(event)=>{//!*
        setEnteredEmail(event.target.value)
    }

    //2
    const emailInputBlurHandler = (event) => {//!*
        setEnteredEmailTouched(true);
    }


    //3
    const formSubmitHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true)

        /!*if (enteredName.trim() === '') {return }*!/
        if (!enteredNameIsValid && !enteredEmailIsValid ) {  // проверка всей формы* //!*  enteredNameIsValid -false  enteredEmailIsValid-false
            return
        }

        setEnteredName("");
        setEnteredNameTouched(false); //чтобы после сабмита не было подстветки невалидности

        setEnteredEmail("");//!*
        setEnteredEmailTouched(false)//!*
    }

    const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control" //подсветка невалидности name
    const emailInputClasses = emailInputIsInvalid ? "form-control invalid" : "form-control" //!****  подсветка невалидности email

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input onBlur={nameInputBlurHandler}
                       value={enteredName} type='text'
                       id='name'
                       onChange={inputChangeHandler}/>
                {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Your E-Mail</label>
                <input onBlur={emailInputBlurHandler}
                       value={enteredEmail} type='email'
                       id='email'
                       onChange={enteredEmailChangeHandler}/>
                {emailInputIsInvalid && <p className='error-text'>Please enter a valid email.</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
*/
