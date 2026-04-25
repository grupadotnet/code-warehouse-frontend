import { useState } from "react";
import { cn } from "../../lib/utils";
import Button from "../utilities/button";
import { CustomClasses } from "../utilities/customClasses";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/client";
import axios from "axios";

export function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const response = await api.post("/auth/login", {
        username,
        password,
      });

      const token = response.data.token;

      localStorage.setItem("username", username);
      if (token) {
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          setError("Invalid username or password.");
        } else {
          setError("An error occurred. Please try again.");
        }
      }
    }
    setUsername("");
    setPassword("");
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
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center justify-center">
          <span className="block sm:inline text-sm text-center">{error}</span>
        </div>
      )}
    </form>
  );
}
