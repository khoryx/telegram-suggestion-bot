const COMMAND_RE = /^\/(start|help)(@\w+)?(\s|$)/i;

export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("OK", { status: 200 });
    }

    let update;
    try {
      update = await request.json();
    } catch {
      return new Response("Bad Request", { status: 400 });
    }

    const message = update.message;
    if (!message) {
      return new Response("OK", { status: 200 });
    }

    const chatId = message.chat?.id;
    const messageId = message.message_id;
    const text = message.text || "";

    if (COMMAND_RE.test(text)) {
      await sendMessage(env, chatId, "Добро пожаловать! Здесь вы можете отправить сообщение редакции.", messageId);
      return new Response("OK", { status: 200 });
    }

    const forward = await callTelegram(env, "forwardMessage", {
      chat_id: env.GROUP_ID,
      from_chat_id: chatId,
      message_id: messageId,
    });

    if (!forward.ok) {
      await sendMessage(env, chatId, "Ошибка при отправлении(", messageId);
      return new Response("OK", { status: 200 });
    }

    await sendMessage(env, chatId, "Сообщение отправлено.", messageId);
    return new Response("OK", { status: 200 });
  },
};

async function sendMessage(env, chatId, text, replyToMessageId) {
  if (!chatId) {
    return { ok: false };
  }

  const payload = { chat_id: chatId, text };
  if (replyToMessageId) {
    payload.reply_to_message_id = replyToMessageId;
  }

  return callTelegram(env, "sendMessage", payload);
}

async function callTelegram(env, method, payload) {
  const url = `https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok || !data || data.ok !== true) {
    return { ok: false, status: response.status, data };
  }

  return { ok: true, data };
}
