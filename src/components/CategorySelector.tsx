import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

type Props = {
  category: string;
  onChange: (category: string) => void;
};

export default function CategorySelector({ category, onChange }: Props) {
  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel id="category-select-label">Categoria</InputLabel>
      <Select
        labelId="category-select-label"
        value={category}
        label="Categoria"
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="technical">Técnicas</MenuItem>
        <MenuItem value="behavioral">Comportamentais</MenuItem>
      </Select>
    </FormControl>
  );
}