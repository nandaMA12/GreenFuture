
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAITutorResponse = async (userPrompt: string, courseTitle: string) => {
  if (!API_KEY) return "Sistem AI sedang offline. Silakan coba lagi nanti.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Anda adalah AI Tutor bernama GreenFuture Assistant untuk platform GreenFutureClass. Anda membantu murid yang sedang belajar kursus: ${courseTitle}. Berikan jawaban yang ringkas, ramah, dan memotivasi dalam bahasa Indonesia.`,
      },
    });

    return response.text || "Maaf, saya tidak bisa memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Terjadi kesalahan saat menghubungi asisten AI kami.";
  }
};
