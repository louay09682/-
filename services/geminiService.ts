
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the Google GenAI client with the API key from environment variables.
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a piece of wisdom about peace in Arabic.
 */
export const generatePeaceWisdom = async (topic?: string) => {
  const ai = getAI();
  const prompt = topic 
    ? `أعطني حكمة عميقة وملهمة عن السلام في سياق ${topic}. اجعلها باللغة العربية الفصحى بأسلوب أدبي رفيع.`
    : "أعطني حكمة عالمية ملهمة عن السلام والتعايش بين الشعوب باللغة العربية الفصحى.";

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      temperature: 0.8,
      topP: 0.95,
    }
  });

  return response.text;
};

/**
 * Mediates a conflict by providing a peaceful perspective in Arabic.
 */
export const mediateConflict = async (conflictDescription: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `بصفتك وسيطاً حكيماً وخبيراً في حل النزاعات، قدم نصيحة عملية وروحية لحل هذا النزاع: "${conflictDescription}". ركز على التفاهم، التسامح، والحلول الوسطى التي تحفظ كرامة الجميع. اجعل الرد باللغة العربية وبلهجة مطمئنة.`,
    config: {
      systemInstruction: "أنت وسيط سلام عالمي، هدفك دائماً تقريب وجهات النظر ونبذ العنف والكراهية.",
    }
  });

  return response.text;
};

/**
 * Generates a symbolic image representing peace using the gemini-2.5-flash-image model.
 */
export const generatePeaceArt = async (style: string) => {
  const ai = getAI();
  const prompt = `A beautiful and symbolic art piece representing world peace, specifically featuring a white dove, in the style of: ${style}. The image should be serene and inspiring.`;
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { text: prompt },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
      },
    },
  });

  // Extract the image data from the response parts.
  const candidate = response.candidates?.[0];
  if (candidate?.content?.parts) {
    for (const part of candidate.content.parts) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }
  }
  
  return null;
};
