import { sql } from "@vercel/postgres";
import { VocabItem } from "@/components/ui/VocabCard";

export async function fetchAllVocabInstantFeedback() {
  try {
    const data = await sql<VocabItem>`SELECT * FROM vocabularycards`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(
      "Failed to fetch vocabulary data for the instant feedback form."
    );
  }
}

export async function fetchPaginatedVocabInstantFeedback(
  items: number,
  page: number
) {
  const pageItems: number = items;
  const pageNumber: number = page;

  const offset: number = (pageNumber - 1) * pageItems;

  try {
    const data = await sql<VocabItem>`
      SELECT * FROM vocabularycards
      LIMIT ${pageItems}
      OFFSET ${offset}`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(
      "Failed to fetch paginated vocabulary data for the instant feedback form."
    );
  }
}
