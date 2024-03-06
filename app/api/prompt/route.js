import { connect } from "@utils/db";
import Prompt from "@models/prompt";

export const GET = async (request) => {
  try {
    await connect();
    const prompts = await Prompt.find({}).populate("creator");

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {}
};
