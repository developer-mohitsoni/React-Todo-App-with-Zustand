import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

type Frequency = "daily" | "weekly";

const AddHabitForm = () => {
  const [name, setName] = useState("");

  const [frequency, setFrequency] = useState<Frequency>("daily");
  return (
    <>
      <form>
        <Box className="flex flex-col gap-4">
          <TextField
            label="Habit Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter habit name"
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel>Frequency</InputLabel>
            <Select
              label="Frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as Frequency)}
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Add Habit
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddHabitForm;
