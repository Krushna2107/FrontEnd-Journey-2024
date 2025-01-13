const API_URL = "https://api.example.com/polls";

export const fetchPolls = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createPoll = async (poll) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(poll),
  });
  return response.json();
};
