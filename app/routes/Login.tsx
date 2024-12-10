import { Form } from "@remix-run/react"


function Login() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log({ email, password });
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Form onSubmit={handleSubmit} method="post" className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-700">Login</h1>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email:
        <input type="text" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" />
      </label>

      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-4">
        Password:
        <input type="password" name="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" />
      </label>

      <button type="submit" className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
      </Form>
    </div>
  )
}

export default Login