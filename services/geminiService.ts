import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

const getClient = () => {
  // API key is injected via environment
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  const ai = getClient();
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7, // Creative but grounded
    },
  });
  return chatSession;
};

export const sendMessageToStylist = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result = await chat.sendMessage({ message });
    
    if (result.text) {
      return result.text;
    }
    return "I apologize, but I am momentarily distracted by a new arrival. Could you please repeat that?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I seem to be having trouble connecting to our atelier. Please try again in a moment.";
  }
};