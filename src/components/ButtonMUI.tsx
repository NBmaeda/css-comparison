import { Button } from "@mui/material";

const ButtonMUI = () => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          textTransform: "unset",
          fontFamily: "inherit",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        Button
      </Button>
    </>
  );
};

export default ButtonMUI;
