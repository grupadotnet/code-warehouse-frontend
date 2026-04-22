import { useState } from "react";
import { cn } from "../../lib/utils";
import Button from "../utilities/button";
import { CustomClasses } from "../utilities/customClasses";
import { Link } from "react-router-dom";

export function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prosta walidacja przed wysłaniem
    if (password !== confirmPassword) {
      alert("hasło nie jest identyczne");
      return;
    }

    //console.log("Registering:", username, "with password:", password);
    alert("zarejestrowano pomyślnie");
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
        className={cn(
          "border rounded-md py-4 px-6 text-lg outline-none",

          confirmPassword && password !== confirmPassword
            ? "border-red-500"
            : "border-gray-300",
        )}
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        required
      />

      {confirmPassword && password !== confirmPassword && (
        <span className="text-red-500 text-sm -mt-4 ml-2">
          Passwords must be identical.
        </span>
      )}

      <Button
        name="SIGN UP"
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
    </form>
  );
}
