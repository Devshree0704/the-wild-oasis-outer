import { supabase } from "./supabase";

//cabins
export async function getCabins() {
  let { data: Cabins, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Error while fetching cabins");
  }

  return Cabins;
}
