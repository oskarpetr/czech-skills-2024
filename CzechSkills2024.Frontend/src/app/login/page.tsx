import FadeIn from "@/components/animation/FadeIn";
import Heading from "@/components/common/Heading";
import LoginForm from "@/components/forms/LoginForm";
import Layout from "@/components/layout/Layout";

export default function Login() {
  return (
    <Layout>
      <div className="bg-black bg-opacity-85 h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
        <div className="w-96 flex flex-col gap-12">
          <Heading title="Login" color="white" />

          <FadeIn delay={0.1}>
            <LoginForm />
          </FadeIn>
        </div>
      </div>
    </Layout>
  );
}
