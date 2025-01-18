// stores/useChatStore.ts
// A store to manage the generated chat data from MistralAI.
// contains data that are displayed dynamically in the components.

// generateStartup: function that calls the Mistral API Agent,
//                  expects a response in JSON format and updates the chat store data accordingly.
// resetAll: function to reset all the chat store data.
import { Mistral } from "@mistralai/mistralai";
import { create } from "zustand";

interface ChatState {
  problem: string;
  industry: string;
  first_clients: string;
  market_size: string;
  name: string;
  text_color: string;
  background_color: string;
  generateStartup: () => Promise<void>;
  resetAll: () => void;
}

// API key from the environment variables
const apiKey = process.env.NEXT_PUBLIC_MISTRAL_API_KEY;
// Create a new Mistral client
const client = new Mistral({ apiKey: apiKey });

export const useChatStore = create<ChatState>((set) => ({
  problem: "",
  industry: "",
  first_clients: "",
  market_size: "",
  text_color: "#ffffff", // Default colors
  background_color: "#09090b",
  name: "", // Default title to display before the first generation
  generateStartup: async () => {
    console.log("Generating startup with Mistral AI...");
    try {
      const response = await client.agents.complete({
        agentId: "ag:a57a6b0a:20250115:generate-a-random-startup:cfbbbc08",
        messages: [{ role: "user", content: "Generate a random sartup" }],
      });

      if (response.choices && response.choices.length > 0) {
        const content = response.choices[0].message.content;
        if (typeof content === "string") {
          // Clean the JSON string
          const cleanContent = content
            .replace(/(\r\n|\n|\r)/gm, "")
            .replace(/\\n/g, "")
            .replace(/\\\"/g, '"')
            .replace(/\\t/g, "")
            .replace(/\\r/g, "")
            .replace(/"(.*?)"/g, (match) => match.replace(/,/g, ""));

          const data = JSON.parse(cleanContent);

          set({
            problem: data.problem,
            industry: data.industry,
            first_clients: data.first_clients,
            market_size: data.market_size,
            name: data.name,
            text_color: data.text_color,
            background_color: data.background_color,
          });
        } else {
          set({ name: "No content received." });
        }
      } else {
        set({ name: "No startup generated." });
      }
    } catch (error) {
      console.error("API error occurred:", error);
      set({ name: "Error generating startup." });
    }
  },
  resetAll: () => {
    set({
      problem: "",
      industry: "",
      first_clients: "",
      market_size: "",
      name: "Loading...",
      text_color: "#09090b", // Default colors are switched to highlight the loading state
      background_color: "#ffffff",
    });
  },
}));
