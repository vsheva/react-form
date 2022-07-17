import {useState} from "react";

const useInput =(validateValue)=>{
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    //const valueIsValid = enteredValue.trim() !== "";  ТРЮК!!!
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    //1
    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    //2
    const nameInputBlurHandler = (event) => {
        setIsTouched(true);
    }


    const reset =()=>{
        setEnteredValue("");
        setIsTouched(false); //чтобы после сабмита не было подстветки невалидности
    }


    return {
        value:enteredValue,
        hasError: hasError,
        isValid:valueIsValid,
        valueChangeHandler:inputChangeHandler,
        valueBlurHandler:nameInputBlurHandler,
        reset:reset,
    }


}

export default useInput;