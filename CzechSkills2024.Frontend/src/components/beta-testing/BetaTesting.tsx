"use client";

import { useSession } from "next-auth/react";

export default function BetaTesting() {
  const { data: session } = useSession();
  const userId = session?.user.userId;

  return (
    <div>
      <div>{userId}</div>
    </div>
  );
}
