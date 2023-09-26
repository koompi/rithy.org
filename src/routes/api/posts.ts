import axios from "axios";
import { json } from "solid-start";
const botToken = "6409740144:AAGkD4awfIPzORom8GRL1W3E2Dsq_kqSw7Y";
const channelUsername = "https://t.me/s/rithythul";
import MTProto from "@mtproto/core";
import path from "node:path";
import { fileURLToPath } from "node:url"; // the node package 'url'

function dirname(meta) {
  return fileURLToPath(meta.url);
}

// call with import.meta
const __dirname = dirname(import.meta);

const api_id = "20608";
const api_hash = "9eb1df2700463c8d71527d84227431a9";

const mtproto = new MTProto({
  api_id,
  api_hash,

  storageOptions: {
    path: path.resolve(__dirname, "../data/1.json"),
  },
});

const channel_data = async () => {
  const resolvedPeer = await mtproto.call("contacts.resolveUsername", {
    username: "mtproto_core",
  });

  const channel = resolvedPeer.chats.find(
    (chat) => chat.id === resolvedPeer.peer.channel_id
  );

  const inputPeer = {
    _: "inputPeerChannel",
    channel_id: channel.id,
    access_hash: channel.access_hash,
  };

  const LIMIT_COUNT = 10;
  const allMessages = [];

  const firstHistoryResult = await mtproto.call("messages.getHistory", {
    peer: inputPeer,
    limit: LIMIT_COUNT,
  });

  const historyCount = firstHistoryResult.count;

  for (let offset = 0; offset < historyCount; offset += LIMIT_COUNT) {
    const history = await mtproto.call("messages.getHistory", {
      peer: inputPeer,
      add_offset: offset,
      limit: LIMIT_COUNT,
    });

    allMessages.push(...history.messages);
  }

  // console.log("allMessages:", allMessages);
  return allMessages;
};

export async function GET() {
  let data = await channel_data();
  console.log(data);

  return json({
    posts: [],
  });
}
