import AuthForm from "@/components/AuthForm";

export const metadata = {
  title: "Create Account",
  description: "Create a ZA Automation account.",
};

export default function RegisterPage() {
  return <AuthForm mode="register" />;
}
