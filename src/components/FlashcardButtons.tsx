import React from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {
  onPrev: () => void;
  onNext: () => void;
  disabled: boolean;
};

export default function FlashcardButtons({
  onPrev,
  onNext,
  disabled,
}: Props) {
  return (
    <Box sx={{ mt: '3rem', display: "grid", gridTemplateRows: "1fr", gap: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          onClick={onPrev}
          disabled={disabled}
          startIcon={<ArrowBackIcon />}
        >
          Anterior
        </Button>
        <Button
          variant="outlined"
          onClick={onNext}
          disabled={disabled}
          endIcon={<ArrowForwardIcon />}
        >
          Próxima
        </Button>
      </Box>
    </Box>
  );
}
