import { useState } from "react";
import { cn } from "../../lib/utils";
import Button from "../utilities/button";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/client";
import axios from "axios";
import Icon from "../../lib/iconConfig";
import { Eye, EyeOff } from "lucide-react";

export function LoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    setShowPassword(false);
  };

  return (
    <div
      className={cn(
        "flex w-full max-w-[594px] flex-col items-center gap-[10px]",
      )}
    >
      <div className="flex flex-col items-center gap-[10px]">
        <div className="flex h-[66px] w-[66px] items-center justify-center border-4 border-black bg-[#FFD500]">
          <Icon name="editProduct" className="h-[46px] w-[46px] text-black" style={{ strokeWidth: 2.5 }} />
        </div>
        <div className="flex w-[340px] flex-col items-center text-center">
          <h2
            className={cn("font-mono text-[30px] font-bold leading-[44px] text-black")}
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            WELCOME BACK
          </h2>
          <p
            className={cn("font-mono text-[16px] leading-[24px] text-black font-normal")}
            style={{ fontFamily: "'Space Mono', monospace", fontWeight: 400 }}
          >
            Sign in to your account.
          </p>
        </div>
      </div>

      <form
        className={cn(
          "box-border flex w-[486px] flex-col gap-[15px] border-2 border-black bg-white p-[20px]",
          "shadow-[4px_4px_0px_#000000]",
        )}
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-[10px]">
          <label
            htmlFor="username"
            className={cn("font-mono text-[16px] font-bold leading-[24px] text-black")}
            style={{ fontFamily: "'Space Mono', monospace", fontWeight: 800 }}
          >
            EMAIL ADDRESS
          </label>
          <input
            id="username"
            type="text"
            name="username"
            autoComplete="on"
            placeholder="Enter your email"
            className={cn(
              "h-[52px] w-full border-2 border-black bg-white px-[20px]",
              "font-sans text-[18px] font-bold leading-[23px] text-black outline-none placeholder:font-semibold placeholder:text-black/50",
            )}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center justify-between gap-[10px]">
            <label
              htmlFor="password"
              className={cn("font-mono text-[16px] font-bold leading-[24px] text-black")}
              style={{ fontFamily: "'Space Mono', monospace", fontWeight: 800 }}
            >
              PASSWORD
            </label>
            <button
              type="button"
              className={cn("font-mono text-[14px] font-bold leading-[21px] text-black opacity-60")}
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              FORGOT PASSWORD?
            </button>
          </div>
          <div className="flex h-[51px] w-full items-center border-2 border-black bg-white px-[20px]">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="on"
              placeholder="Enter your password"
              className={cn(
                "h-full flex-1 bg-transparent font-sans text-[18px] font-bold leading-[23px] text-black outline-none placeholder:font-semibold placeholder:text-black/50",
              )}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
            <button
              type="button"
              onClick={() => {
                setShowPassword((current) => !current);
              }}
              className="ml-3 flex h-[21px] w-[21px] items-center justify-center text-black opacity-40"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-[21px] w-[21px]" /> : <Eye className="h-[21px] w-[21px]" />}
            </button>
          </div>
        </div>

        <label className="flex h-[40px] w-fit items-center gap-[15px] py-[10px]">
          <span className="relative inline-flex h-[20px] w-[20px] shrink-0 items-center justify-center">
            <input
              type="checkbox"
              className="peer h-full w-full cursor-pointer appearance-none rounded-none border-2 border-black bg-white outline-none checked:bg-black"
            />
            <svg
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute h-[14px] w-[14px] opacity-0 transition-opacity peer-checked:opacity-100"
            >
              <path d="M2 7.5L5.5 11L12 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span
            className={cn("font-sans text-[14px] font-bold leading-[18px] text-black opacity-50")}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            Remember for 30 days
          </span>
        </label>

        <Button
          className={cn(
            "h-[69px] w-full border-4 border-black bg-black font-sans text-[22px] leading-[28px] text-white shadow-[4px_4px_0px_#000000]",
            "flex items-center justify-center gap-2",
            "hover:border-black hover:bg-[#FFF9F0] hover:text-black transition-colors duration-150",
          )}
        >
          <span style={{ fontWeight: 500 }}>SIGN IN</span>
          <span style={{ fontWeight: 900, fontSize: "28px" }}>→</span>
        </Button>
        <div className="w-full border-t-[2px] border-dashed border-black" />
      </form>



      <div className="flex h-[42px] w-[594px] items-start justify-center gap-[5px] py-[10px]">
        <span
          className={cn("font-sans text-[14px] font-medium leading-[18px] text-black/60 text-center")}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Don't have an account?
        </span>
        <Link
          to="/register"
          className={cn(
            "box-border inline-flex items-center border-b border-black px-[2px] font-bold text-black",
            "font-sans text-[14px] font-bold leading-[18px] text-black text-center",
          )}
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Create Account 
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
