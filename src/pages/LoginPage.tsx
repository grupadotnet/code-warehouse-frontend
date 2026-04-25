import { LoginForm } from "../components/ui/LoginForm";
import { cn } from "../lib/utils";

export default function LoginPage() {
  return (
    <div
      className={cn(
        "flex items-center justify-center h-screen w-full bg-gradient-to-r from-gray-100 to-gray-300",
      )}
    >
      <LoginForm />
    </div>
  );
}
