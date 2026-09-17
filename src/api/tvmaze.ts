export interface Show {
  id: number;
  name: string;
  premiered: string | null;
  rating: {
    average: number | null;
  };
  image: {
    medium: string;
    original: string;
  } | null;
  summary: string | null;
  genres: string[];
  status: string;
}

const BASE_URL = "https://api.tvmaze.com";

// Fetch all shows (used for the listing page's default view)
export async function getAllShows(): Promise<Show[]> {
  const res = await fetch(`${BASE_URL}/shows`);
  if (!res.ok) {
    throw new Error("Failed to fetch shows");
  }
  return res.json();
}

// Search shows by title
export async function searchShows(query: string): Promise<Show[]> {
  const res = await fetch(
    `${BASE_URL}/search/shows?q=${encodeURIComponent(query)}`
  );
  if (!res.ok) {
    throw new Error("Failed to search shows");
  }
  const data = await res.json();
  // search endpoint returns [{ score, show }, ...], so we extract just the show
  return data.map((item: { show: Show }) => item.show);
}