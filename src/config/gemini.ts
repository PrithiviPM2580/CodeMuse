import { systemPrompt } from "@/lib/utils";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
});

export async function createCode(prompt: string, framework: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
      config: {
        systemInstruction: systemPrompt(framework),
        temperature: 0.3,
      },
    });

    const generatedCode = response.text?.trim() || "";

    return generatedCode;
  } catch (error) {
    console.error("Code generation failed:", error);
    throw new Error("Failed to generate code");
  }
}
