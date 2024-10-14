import { Box, Container, Typography } from "@mui/material";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";
// import useHabitStore from "./store/store";

const App = () => {
  // const store = useHabitStore();

  // console.log(store);

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
