import { RegisterForm } from "../components/ui/RegisterForm";
import { cn } from "../lib/utils";

export default function RegisterPage() {
  return (
    <div
      className={cn(
        "flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#FFF9F0]",
      )}
      style={{
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 3px, transparent 3px)",
        backgroundSize: "36px 36px",
        backgroundPosition: "42px 42px",
      }}
    >
      <RegisterForm />
    </div>
  );
}
