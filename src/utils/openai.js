import OpenAI from "openai";
import { OPENAI_KEY } from "./constant";

const client = new OpenAI({
  apiKey: process.env[OPENAI_KEY], // This is the default and can be omitted
});
