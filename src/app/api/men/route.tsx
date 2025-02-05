import { readMen } from "@/app/models/menModel";

export const GET = () => {
  const men = readMen();
  return Response.json(men);
};
