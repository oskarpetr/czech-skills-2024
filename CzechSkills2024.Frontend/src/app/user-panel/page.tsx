"use client";

import FadeIn from "@/components/animation/FadeIn";
import Button from "@/components/common/Button";
import Heading from "@/components/common/Heading";
import Section from "@/components/common/Section";
import Layout from "@/components/layout/Layout";
import { signOut, useSession } from "next-auth/react";
import Error from "next/error";
import { useRouter } from "next/navigation";

export default function UserPanel() {
  const router = useRouter();
  const { status } = useSession();

  if (status === "unauthenticated") {
    return <Error statusCode={401} />;
  }

  const signOutFn = () => {
    signOut();
    router.push("/");
  };

  return (
    <Layout>
      <div className="bg-black px-24 py-20 bg-opacity-85 h-[calc(100vh-6rem)] flex flex-col gap-12">
        <Heading
          title="User panel"
          color="white"
          subtitle="You have successfully logged in."
        />

        <Section title="Beta testing" color="white" />

        <FadeIn delay={0.1}>
          <Button
            text="Log out"
            onClick={signOutFn}
            fullWidth={false}
            size="small"
          />
        </FadeIn>
      </div>
    </Layout>
  );
}
