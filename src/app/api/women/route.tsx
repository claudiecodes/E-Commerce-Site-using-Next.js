import { readWomen } from "@/app/models/womenModel";

export const GET = () => {
  const women = readWomen();
  return Response.json(women);
};
