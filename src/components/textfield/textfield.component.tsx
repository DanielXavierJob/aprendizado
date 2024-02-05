'use client'

import { TextField } from "@mui/material";
import { TextFieldProps } from "./textfield.type";

const TextfieldComponent = (props: TextFieldProps) => {
  const onChangeValue = (event: any) => {
    if(props.onChange){
        props.onChange(event.target.value)
    }
  };

  return <TextField {...props} onChange={onChangeValue} />;
};

export default TextfieldComponent;
