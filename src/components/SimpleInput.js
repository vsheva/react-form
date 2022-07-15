import {useEffect, useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    //const [formIsValid, setFormIsValid] = useState(false);


    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

 /*   useEffect(()=>{
        if(enteredNameIsValid) {setFormIsValid(true)}
        else { setFormIsValid(false)}
    }, [enteredNameIsValid])
*/

    let formIsValid=false
    if(enteredNameIsValid) {
        formIsValid=true
    } else {
        formIsValid=false
    }


    //1
    const inputChangeHandler = (event) => {
        setEnteredName(event.target.value);

        /* if (event.target.value.trim() !== '') {
             setEnteredNameIsValid(true);
         }*/
    }

    //2
    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);

        /*if (enteredName.trim() === '') {
            setEnteredNameIsValid(false);
        }*/
    }

    //3
    const formSubmitHandler = (event) => {
        event.preventDefault();
        setEnteredNameTouched(true)

        /*if (enteredName.trim() === '') {return }*/
        if (!enteredNameIsValid) {
            return
        } //* if enteredNameIsValid is false

        setEnteredName("");
        setEnteredNameTouched(false); //чтобы после сабмита не было подстветки невалидности
    }

    const nameInputClasses = nameInputIsInvalid ? "form-control invalid" : "form-control"

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input onBlur={nameInputBlurHandler} value={enteredName} type='text' id='name'
                       onChange={inputChangeHandler}/>
                {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
            </div>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Email</label>
                <input onBlur={nameInputBlurHandler} value={enteredName} type='text' id='name'
                       onChange={inputChangeHandler}/>
                {nameInputIsInvalid && <p className='error-text'>Email must not be empty</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;



