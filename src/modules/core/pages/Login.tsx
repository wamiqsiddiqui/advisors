const Login = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="p-44 bg-sky-400 flex flex-col justify-center items-center">
        <h1>LOGIN TO THE ADVISORS FINANCE PORTAL</h1>
        <input className="mt-6" placeholder="Email" />
        <input className="mt-6" placeholder="Password" />
        <button className="mt-6">Login</button>
      </div>
    </div>
  );
};

export default Login;
