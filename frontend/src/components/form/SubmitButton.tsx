import { Button } from "@mui/material";
import type { ReactNode } from "react";

export interface SubmitButtonProps { children: ReactNode; };

const SubmitButton = ({ children }: SubmitButtonProps) => {
  return (
    <Button
      fullWidth
      color="inherit"
      size="large"
      type="submit"
      variant="contained"
      sx={(theme) => {
        const textColor =
          theme.palette.mode === "light" ? "common.white" : "grey.800";
        return {
          bgcolor: "text.primary",
          color: textColor,
          "&:hover": {
            bgcolor: "text.primary",
            color: textColor,
          },
        };
      }}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
