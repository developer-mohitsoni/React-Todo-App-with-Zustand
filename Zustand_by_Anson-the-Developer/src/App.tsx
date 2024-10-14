import UpdateUserForm from "./components/UpdateUserForm";
import UpdatePostForm from "./components/UpdatePostForm";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-purple-600 to-blue-500 overflow-x-hidden">
      <div className="w-[600px] max-w-full p-6 rounded-xl shadow-2xl bg-[#1e1e1e] text-white">
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
          Welcome to Post Manager
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Update User Info</h2>
          <UpdateUserForm />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
          <UpdatePostForm />
        </div>
      </div>
    </div>
  );
}

export default App;
