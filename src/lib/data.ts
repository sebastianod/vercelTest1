"use server";
import { sql } from "@vercel/postgres";
import { VocabItem } from "@/components/ui/VocabCard";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchAllVocabInstantFeedback() {
  noStore();
  try {
    const data = await sql<VocabItem>`SELECT * FROM vocabularycards LIMIT 1000`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(
      "Failed to fetch vocabulary data for the instant feedback form.",
    );
  }
}

export async function fetchPaginatedVocabInstantFeedback(
  items: number,
  page: number,
) {
  noStore();
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
      "Failed to fetch paginated vocabulary data for the instant feedback form.",
    );
  }
}

interface NewVocabItem {
  vocab_image_url?: string; //vocab_id and created_at are added server side!
  vocab_word: string;
  vocab_definition: string;
  vocab_context?: string;
  vocab_example?: string;
}

export async function insertVocabItem(newItem: NewVocabItem) {
  try {
    await sql`
        INSERT INTO vocabularycards 
        (vocab_image_url, vocab_word, vocab_definition, vocab_context, vocab_example)
        VALUES (${newItem.vocab_image_url}, ${newItem.vocab_word}, ${newItem.vocab_definition}, ${newItem.vocab_context}, ${newItem.vocab_example});
      `;
    return true; // Return true if the insert was successful
  } catch (error) {
    console.error("Database Error:", error);
    return false; // Return true if the insert was successful
  }
}
