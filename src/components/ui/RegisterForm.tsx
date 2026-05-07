import { useState } from "react";
import { cn } from "../../lib/utils";
import Button from "../utilities/button";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/client";
import axios from "axios";
import Icon from "../../lib/iconConfig";
import { Eye, EyeOff } from "lucide-react";

export function RegisterForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!agreedToTerms) {
      setError("You must agree to the service terms.");
      return;
    }

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
    <div
      className={cn(
        "flex w-full max-w-[594px] flex-col items-center gap-[10px]",
      )}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-[10px]">
        <div className="flex h-[66px] w-[66px] items-center justify-center border-4 border-black bg-[#FFD500]">
          <Icon name="editProduct" className="h-[46px] w-[46px] text-black" style={{ strokeWidth: 2.5 }} />
        </div>
        <div className="flex w-[340px] flex-col items-center text-center">
          <h2
            className={cn("font-mono text-[30px] font-bold leading-[44px] text-black")}
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            CREATE ACCOUNT
          </h2>
          <p
            className={cn("font-mono text-[16px] leading-[24px] text-black font-normal")}
            style={{ fontFamily: "'Space Mono', monospace", fontWeight: 400 }}
          >
            Join the inventory managment system
          </p>
        </div>
      </div>

      {/* Form card */}
      <form
        className={cn(
          "box-border flex w-[486px] flex-col gap-[15px] border-2 border-black bg-white p-[20px]",
          "shadow-[4px_4px_0px_#000000]",
        )}
        onSubmit={handleSubmit}
      >
        {/* USERNAME field */}
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="username"
            className={cn("font-mono text-[16px] font-bold leading-[24px] text-black")}
            style={{ fontFamily: "'Space Mono', monospace", fontWeight: 800 }}
          >
            USERNAME
          </label>
          <input
            id="username"
            type="text"
            name="username"
            autoComplete="username"
            placeholder="Choose a username"
            className={cn(
              "h-[52px] w-full border-2 border-black bg-white px-[20px]",
              "font-sans text-[18px] font-bold leading-[23px] text-black outline-none placeholder:font-semibold placeholder:text-black/50",
            )}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
        </div>

        {/* EMAIL ADDRESS field */}
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="email"
            className={cn("font-mono text-[16px] font-bold leading-[24px] text-black")}
            style={{ fontFamily: "'Space Mono', monospace", fontWeight: 800 }}
          >
            EMAIL ADDRESS
          </label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Enter your email"
            className={cn(
              "h-[52px] w-full border-2 border-black bg-white px-[20px]",
              "font-sans text-[18px] font-bold leading-[23px] text-black outline-none placeholder:font-semibold placeholder:text-black/50",
            )}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        {/* PASSWORD field */}
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="password"
            className={cn("font-mono text-[16px] font-bold leading-[24px] text-black")}
            style={{ fontFamily: "'Space Mono', monospace", fontWeight: 800 }}
          >
            PASSWORD
          </label>
          <div className="flex h-[51px] w-full items-center border-2 border-black bg-white px-[20px]">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="new-password"
              placeholder="Choose a password"
              className={cn(
                "h-full flex-1 bg-transparent font-sans text-[18px] font-bold leading-[23px] text-black outline-none placeholder:font-semibold placeholder:text-black/50",
              )}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((current) => !current)}
              className="ml-3 flex h-[21px] w-[21px] items-center justify-center text-black opacity-40"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-[21px] w-[21px]" /> : <Eye className="h-[21px] w-[21px]" />}
            </button>
          </div>
        </div>

        {/* CONFIRM PASSWORD field */}
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="confirmPassword"
            className={cn("font-mono text-[16px] font-bold leading-[24px] text-black")}
            style={{ fontFamily: "'Space Mono', monospace", fontWeight: 800 }}
          >
            CONFIRM PASSWORD
          </label>
          <div className="flex h-[51px] w-full items-center border-2 border-black bg-white px-[20px]">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              autoComplete="new-password"
              placeholder="Confirm your password"
              className={cn(
                "h-full flex-1 bg-transparent font-sans text-[18px] font-bold leading-[23px] text-black outline-none placeholder:font-semibold placeholder:text-black/50",
              )}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((current) => !current)}
              className="ml-3 flex h-[21px] w-[21px] items-center justify-center text-black opacity-40"
              aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
            >
              {showConfirmPassword ? <EyeOff className="h-[21px] w-[21px]" /> : <Eye className="h-[21px] w-[21px]" />}
            </button>
          </div>
        </div>

        {/* Terms checkbox */}
        <label className="flex h-[40px] w-fit items-center gap-[15px] py-[10px]">
          <input
            type="checkbox"
            className="h-[20px] w-[20px] appearance-none border-2 border-black bg-white outline outline-0 outline-black outline-offset-0 accent-black"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
          />
          <span
            className={cn("font-sans text-[14px] leading-[18px] text-black/60")}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
          >
            I agree to the{" "}
            <Link
              to="#"
              className="box-border inline-flex items-center border-b border-black px-[2px] font-bold text-black"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Terms of Service
            </Link>
            {" "}and{" "}
            <Link
              to="#"
              className="box-border inline-flex items-center border-b border-black px-[2px] font-bold text-black"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Privacy Policy
            </Link>
          </span>
        </label>

        {/* Submit button — black bg matching login button style */}
        <Button
          className={cn(
            "h-[69px] w-full bg-black font-sans text-[22px] leading-[28px] text-white shadow-[4px_4px_0px_#000000]",
            "flex items-center justify-center gap-2",
            "hover:bg-[#FFF9F0] hover:text-black transition-colors duration-150",
          )}
        >
          <span style={{ fontWeight: 500 }}>CREATE ACCOUNT</span>
          <span style={{ fontWeight: 900, fontSize: "28px" }}>→</span>
        </Button>

        <div className="w-full border-t-[2px] border-dashed border-black" />
      </form>

      {/* Bottom link */}
      <div className="flex h-[42px] w-[594px] items-start justify-center gap-[5px] py-[10px]">
        <span
          className={cn("font-sans text-[14px] font-medium leading-[18px] text-black/60 text-center")}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Already have an account?
        </span>
        <Link
          to="/login"
          className={cn(
            "box-border inline-flex items-center border-b border-black px-[2px] font-bold text-black",
            "font-sans text-[14px] font-bold leading-[18px] text-black text-center",
          )}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Sign in 
        </Link>
      </div>

      {error && (
        <div className="flex items-center justify-center rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
          <span className="block text-center text-sm">{error}</span>
        </div>
      )}
    </div>
  );
}
