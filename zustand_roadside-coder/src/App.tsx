import { Box, Container, Typography } from "@mui/material";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
import useHabitStore from "./store/store";
import { useEffect } from "react";

const App = () => {
  const { fetchHabits } = useHabitStore();

  useEffect(() => {
    fetchHabits();
  }, [fetchHabits]);

  return (
    <>
      <Container>
        <Box>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Habit Tracker
          </Typography>
          {/* Form */}
          <AddHabitForm />
          {/* list */}
          <HabitList />
          {/* stats */}
        </Box>
      </Container>
    </>
  );
};

export default App;
