import { LiveList, LiveObject, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey:
    "pk_prod_OYdYSrkd6Sd3nL8Mhs_KHF8sWyWBPA38Sz4XZqVd1lW2SeFaox7n8vageVGfEdBd",
  throttle: 16,
});

type Person = LiveObject<{
  name: string;
  age: number;
}>;

type Presence = {};
type Storage = {
  people: LiveList<Person>;
};
type UserMeta = {};
type RoomEvent = {
  type: "TOAST";
  message: string;
};

export const {
  suspense: {
    RoomProvider,
    useRoom,
    useMyPresence,
    useUpdateMyPresence,
    useSelf,
    useOthers,
    useOthersMapped,
    useOthersConnectionIds,
    useOther,
    useBroadcastEvent,
    useEventListener,
    useErrorListener,
    useStorage,
    useObject,
    useMap,
    useList,
    useBatch,
    useHistory,
    useUndo,
    useRedo,
    useCanUndo,
    useCanRedo,
    useMutation,
  },
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent>(client);
