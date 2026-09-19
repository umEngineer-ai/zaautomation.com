import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Sign In",
  description: "Sign in to your ZA Automation account.",
};

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
