"use client";

import FadeIn from "@/components/animation/FadeIn";
import BetaTesting from "@/components/beta-testing/BetaTesting";
import Button from "@/components/common/Button";
import Heading from "@/components/common/Heading";
import Layout from "@/components/layout/Layout";
import { signOut, useSession } from "next-auth/react";
import Error from "next/error";

export default function UserPanel() {
  const { status } = useSession();

  if (status === "unauthenticated") {
    return <Error statusCode={401} />;
  }

  return (
    <Layout>
      <div className="bg-black px-24 py-20 bg-opacity-85 h-[calc(100vh-6rem)] flex flex-col gap-12">
        <Heading
          title="User panel"
          color="white"
          subtitle="You have successfully logged in."
        />

        <BetaTesting />

        <FadeIn delay={0.3}>
          <Button
            text="Log out"
            onClick={() => signOut({ callbackUrl: "/" })}
            fullWidth={false}
            size="small"
          />
        </FadeIn>
      </div>
    </Layout>
  );
}
