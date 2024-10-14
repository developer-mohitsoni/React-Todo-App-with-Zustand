import { useUserStore } from "./store/store";

function App() {
  const userStore = useUserStore();

  console.log(userStore.username);

  return (
    <>
      <div>
        <h1>Hello Workd</h1>

        <div>{userStore.username}</div>
        <div>{userStore.email}</div>
      </div>
    </>
  );
}

export default App;
