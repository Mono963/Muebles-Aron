import { createClient } from "@supabase/supabase-js";

export const supabase = createClient (
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)


export const checkBucketsExist = async (bucketNames: string[]) => {
  const { data: buckets, error } = await supabase.storage.listBuckets();
  if (error) throw error;

  for (const name of bucketNames) {
    if (!buckets.find((b) => b.name === name)) {
      throw new Error(`Bucket '${name}' no existe en Supabase Storage.`);
    }
  }
};