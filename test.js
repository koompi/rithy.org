const MTProto = require("@mtproto/core");
const path = require("path");

const api_id = "20608";
const api_hash = "9eb1df2700463c8d71527d84227431a9";

const mtproto = new MTProto({
  api_id,
  api_hash,

  storageOptions: {
    path: path.resolve(__dirname, "1.json"),
  },
});

const channel_data = async () => {
  const resolvedPeer = await mtproto.call("contacts.resolveUsername", {
    username: "@rithypi",
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

channel_data().then((data) => {
  console.log(data);
});
//   console.log(data);

//   return json({
//     posts: [],
//   });
