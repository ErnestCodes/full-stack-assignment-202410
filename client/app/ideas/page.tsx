import { Ideas } from "@/components/ideas";
import { mails } from "@/lib/data";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return <Ideas chats={mails} />;
};

export default page;
