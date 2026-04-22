import { useState } from "react";
import { cn } from "../../lib/utils";
import Button from "../utilities/button";
import { CustomClasses } from "../utilities/customClasses";
import { Link } from "react-router-dom";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
    alert("Logged in successfully!");
  };

  return (
    <form
      className={cn(
        "flex flex-col gap-6 bg-white p-10 rounded-md shadow-xl",
        "w-full max-w-md",
      )}
      onSubmit={handleSubmit}
    >
      <h2 className={cn("text-3xl font-bold text-center mb-2")}>Sign In</h2>{" "}
      <input
        type="text"
        name="username"
        autoComplete="on"
        placeholder="Username"
        className={cn(
          "border border-gray-300 rounded-md py-4 px-6 outline-none text-lg",
        )}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        value={username}
      />
      <input
        type="password"
        name="password"
        autoComplete="on"
        placeholder="Password"
        className={cn("border border-gray-300 rounded-md py-4 px-6 text-lg")}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <Button
        name="LOGIN"
        className={cn(
          "py-4 text-xl font-bold uppercase",
          CustomClasses.loginButton,
        )}
      />
      <p className={cn("text-center text-gray-600")}>
        Don't have an account?{" "}
        <Link
          to="/register"
          className={cn("text-blue-500 hover:underline font-semibold")}
        >
          Sign up
        </Link>
      </p>
    </form>
  );
}
