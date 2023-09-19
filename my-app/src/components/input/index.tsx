import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type propsType = {
  label: string;
  onChange?: any;
  type?: string;
  value?: any;
};

export default function BasicTextFields(props: propsType) {
  const { label, onChange, type, value } = props;
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        placeholder={label}
        value={value}
        onChange={onChange}
        type={type ?? "text"}
      />
    </Box>
  );
}
