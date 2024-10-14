import UpdateUserForm from "./components/UpdateUserForm";
import UpdatePostForm from "./components/UpdatePostForm";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center text items-center">
        <div className="w-[600px] p-3 rounded-md shadow-lg bg-[#242424]">
          <h1>Hello World</h1>
          <UpdateUserForm />

          <div className="mt-5">
            <b>Create a New Post</b>
          </div>
          <UpdatePostForm />
        </div>
      </div>
    </>
  );
}

export default App;
