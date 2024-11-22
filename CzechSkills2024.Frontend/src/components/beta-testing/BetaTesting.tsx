"use client";

import { getTesting } from "@/utils/fetchers";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function BetaTesting() {
  const { data: session } = useSession();
  const userId = session?.user.userId;

  const testingQuery = useQuery({
    queryKey: ["testing", userId],
    queryFn: () => getTesting(userId!),
    enabled: !!session,
  });

  console.log(testingQuery.data);

  return (
    <div>
      <div>{userId}</div>
    </div>
  );
}
