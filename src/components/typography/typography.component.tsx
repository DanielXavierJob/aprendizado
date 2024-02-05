import { Typography } from "@mui/material";
import { TypographyProps } from "./typography.type";

const TypographyComponent = ({ label }: TypographyProps) => {
  return (
    <Typography
      sx={{
        textAlign: "center",
        marginTop: '2rem'
      }}
    >
      {label}
    </Typography>
  );
};

export default TypographyComponent;
