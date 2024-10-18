import { Conversations } from "@/components/conversations";
import { mails } from "@/lib/data";

export default function MailPage() {
  return <Conversations chats={mails} />;
}
