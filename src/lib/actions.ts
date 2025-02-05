export const fetchGetMen = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/men`, {
    cache: "no-store",
  });

  const responseJson = await response.json();

  return responseJson;
};
