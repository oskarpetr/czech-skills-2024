import Heading from "@/components/common/Heading";
import LoginForm from "@/components/forms/LoginForm";
import Layout from "@/components/layout/Layout";

export default function Login() {
  return (
    <Layout>
      <div className="bg-black h-[calc(100vh-6rem)] flex items-center justify-center w-1/2">
        <Heading title="Login" color="white" />
        <LoginForm />
      </div>
    </Layout>
  );
}
