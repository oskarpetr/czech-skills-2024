"use client";

import { ITesting } from "@/types/Testing";
import { cn } from "@/utils/cn";
import { getTesting, getTestings, postTesting } from "@/utils/fetchers";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Section from "../common/Section";
import FadeIn from "../animation/FadeIn";

export default function BetaTesting() {
  const { data: session } = useSession();
  const userId = session?.user.userId;

  const [activeTesting, setActiveTesting] = useState<null | string>();

  // post user's testing
  const postTestingQuery = useQuery({
    queryKey: ["testing", userId, "post"],
    queryFn: () => postTesting(userId!, activeTesting!),
    enabled: false,
  });

  // button post testing
  const buttonPostTesting = (testingId: string) => {
    console.log(testingId);
    setActiveTesting(testingId);
  };

  useEffect(() => {
    postTestingQuery.refetch();
  }, [activeTesting]);

  // fetch user's testing
  const testingQuery = useQuery({
    queryKey: ["testing", userId],
    queryFn: () => getTesting(userId!),
    enabled: !!session,
  });

  const userTesting = testingQuery.data?.data?.userTesting;

  // fetch all testings
  const testingsQuery = useQuery({
    queryKey: ["testings"],
    queryFn: getTestings,
  });

  const testings = (testingsQuery.data?.data as ITesting[]) ?? [];

  useEffect(() => {
    setActiveTesting(userTesting?.testing.testingId);
  }, [testingQuery]);

  return (
    <div className="flex flex-col gap-12">
      <FadeIn delay={0.2}>
        <Section title="Beta testing" color="white" />
        <div className="flex gap-6 w-full">
          {testings.map((testing) => (
            <button
              onClick={() => buttonPostTesting(testing.testingId)}
              className={cn(
                "w-full flex flex-col gap-2 p-6 rounded-lg bg-white border border-white border-opacity-10 hover:opacity-80 transition-all",
                userTesting !== null && activeTesting === testing.testingId
                  ? "bg-opacity-100 text-black"
                  : "bg-opacity-5 text-white"
              )}
              key={testing.testingId}
            >
              <div className="font-semibold text-xl">{testing.name}</div>
              <div className="opacity-50">{testing.description}</div>
            </button>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <Section title="Your game key" color="white" />
        <div className="opacity-50 text-white">{userTesting?.gameKey}</div>
      </FadeIn>
    </div>
  );
}
