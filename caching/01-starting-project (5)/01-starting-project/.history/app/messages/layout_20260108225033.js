import { getMessages } from "@/lib/messages";

export default function MessagesLayout({ children }) {
  // const response = await fetch("http://localhost:8080/messages", {
  //   headers: {
  //     "X-ID": "layout",
  //   },
  //   next: { tags: [msg] },
  // });
  // const messages = await response.json();
  const message = getMessages();
  const totalMessages = messages.length;

  return (
    <>
      <h1>Important Messages</h1>
      <p>{totalMessages} messages found</p>
      <hr />
      {children}
    </>
  );
}
