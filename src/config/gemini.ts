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
        systemInstruction: `
            You are a senior software engineer and expert in ${framework}.
            
            Your job is to generate clean, production-ready, well-structured code.
            
            Rules:
            - Follow best practices for ${framework}
            - Use modern syntax and conventions
            - Keep the code clean and readable
            - Use functional components if applicable
            - Add necessary imports
            - Do not include unnecessary explanation
            - If multiple files are needed, separate them clearly with file names
            - Use meaningful variable names
            - Follow proper folder structure
            - Optimize for performance where reasonable
            - Use TypeScript if supported (unless specified otherwise)
            
            When I describe a feature, generate complete working code.
            
            If something is unclear, make reasonable professional assumptions.
        `,
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
