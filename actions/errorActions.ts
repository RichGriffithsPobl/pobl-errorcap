"use server";

import { ErrorObject } from "@/types/errorTypes";
import axios from "axios";

export const getAllErrors = async (): Promise<ErrorObject[]> => {
  const repsonse = await axios.get(`${process.env.DATABASE_URL}/errors`);
  return repsonse.data;
};
