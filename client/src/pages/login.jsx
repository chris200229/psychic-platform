export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form className="space-y-4">
          <input 
            type="text" 
            placeholder="Username"
            className="w-full border rounded px-3 py-2"
          />
          <input 
            type="password" 
            placeholder="Password"
            className="w-full border rounded px-3 py-2"
          />
          <button 
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
