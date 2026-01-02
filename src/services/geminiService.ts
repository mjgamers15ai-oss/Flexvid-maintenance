import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// This service is prepared for when the app leaves maintenance mode.
// It implements the specific thinking budget requirements for complex queries.

const getAiClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not set in the environment.");
    // In a real app, we might throw or handle this gracefully.
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateThoughtfulContent = async (prompt: string): Promise<string | undefined> => {
  const ai = getAiClient();
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        thinkingConfig: {
            thinkingBudget: 32768, // Max budget for deep reasoning
        },
        // Explicitly NOT setting maxOutputTokens as per instructions when using thinkingBudget
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error generating content:", error);
    return undefined;
  }
};