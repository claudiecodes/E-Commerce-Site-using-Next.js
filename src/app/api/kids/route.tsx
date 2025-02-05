import { readKids } from "@/app/models/kidsModel";

export const GET = () => {
  const kids = readKids();
  return Response.json(kids);
};
