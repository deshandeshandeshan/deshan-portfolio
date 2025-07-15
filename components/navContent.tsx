import { CONTACT_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/sanity-utils";
import { Contact } from "@/sanity/types";
import Nav from "./nav";

export default async function navContent() {
  const contactInfo = await client.fetch<Contact>(CONTACT_QUERY);

  return <Nav contactInfo={contactInfo} />;
}
