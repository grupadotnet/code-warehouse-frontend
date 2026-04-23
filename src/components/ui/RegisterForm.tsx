import { useState } from "react";
import { cn } from "../../lib/utils";
import Button from "../utilities/button";
import { CustomClasses } from "../utilities/customClasses";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/client";
import axios from "axios";

export function RegisterForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords must be identical.");
      return;
    }

    if (password.length < 15) {
      setError("Password is too short (min. 15 characters).");
      return;
    }

    try {
      const response = await api.post("/auth/register", {
        username: username,
        password: password,
      });

      if (response.status === 201 || response.status === 200) {
        navigate("/login");
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const backendMessage =
          err.response?.data?.error || "Registration failed.";
        setError(backendMessage);
      }
    }
  };

  return (
    <form
      className={cn(
        "flex flex-col gap-6 bg-white p-10 rounded-md shadow-xl",
        "w-full max-w-md",
      )}
      onSubmit={handleSubmit}
    >
      <h2 className={cn("text-3xl font-bold text-center mb-2")}>Sign Up</h2>

      <input
        type="text"
        placeholder="Choose Username"
        className={cn(
          "border border-gray-300 rounded-md py-4 px-6 outline-none text-lg",
        )}
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        required
      />

      <input
        type="password"
        placeholder="Choose Password"
        className={cn(
          "border border-gray-300 rounded-md py-4 px-6 text-lg outline-none",
        )}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className={cn("border rounded-md py-4 px-6 text-lg outline-none")}
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        required
      />
      <Button
        name="REGISTER"
        className={cn(
          "py-4 text-xl font-bold uppercase",
          CustomClasses.loginButton,
        )}
      />
      <p className={cn("text-center text-gray-600")}>
        Already have an account?{" "}
        <Link
          to="/login"
          className={cn("text-blue-500 hover:underline font-semibold")}
        >
          Sign in
        </Link>
      </p>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center justify-center">
          <span className="block sm:inline text-sm ">{error}</span>
        </div>
      )}
    </form>
  );
}
