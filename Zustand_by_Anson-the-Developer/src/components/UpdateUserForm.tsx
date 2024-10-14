import { useUserStore } from "../store/store";

const UpdateUserForm = () => {
  const { username, email, setUsername, setEmail } = useUserStore();
  return (
    <form>
      <div className="mt-5">
        <input
          type="text"
          className="w-full h-10 p-2 rounded-lg bg-[#282828] outline-blue-700 border border-blue-700 mb-5 placeholder-orange-500"
          value={username}
          placeholder="Enter you username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="w-full h-10 p-2 rounded-lg bg-[#282828] outline-blue-700 border border-blue-700 placeholder-orange-500"
          value={email}
          placeholder="Enter you email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </form>
  );
};

export default UpdateUserForm;
