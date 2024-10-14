import { useUserStore } from "../store/store";

const UpdateUserForm = () => {
  const { username, email, setUsername, setEmail } = useUserStore();

  return (
    <form>
      <div className="space-y-5">
        <input
          type="text"
          className="w-full h-12 p-3 rounded-lg bg-[#333] text-white placeholder-gray-400 border border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none"
          value={username}
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          className="w-full h-12 p-3 rounded-lg bg-[#333] text-white placeholder-gray-400 border border-blue-600 focus:ring-2 focus:ring-blue-600 outline-none"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </form>
  );
};

export default UpdateUserForm;
