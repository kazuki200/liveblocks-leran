"use client";
import { LiveList, LiveObject } from "@liveblocks/client";
import { RoomProvider } from "./liveblocks.config";
import { Room } from "./Room";
import { ClientSideSuspense } from "@liveblocks/react";

export default function Page() {
  const roomId = "liveblocks-tutorial-_mCxdfbG1QnRChxTTUj9j";

  return (
    <RoomProvider
      id={roomId}
      initialPresence={{}}
      initialStorage={{
        people: new LiveList([new LiveObject({ name: "かずき", age: 23 })]),
      }}
    >
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => <Room />}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
