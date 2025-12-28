export interface Plant {
  name: string;
  element: string;
  uses: string[];
  notes: string;
  image: string;
}

export const plants: Plant[] = [
  {
    name: "Chamomile",
    element: "Water",
    uses: ["Rest", "Focus", "Purification"],
    notes:
      "Provides aid by soothing emotions and healing the mind, commonly used in calming rituals.",
    image: "assets/plants/chamomile.png"
  },
  {
    name: "Cinnamon",
    element: "Fire",
    uses: ["Abundance", "Power", "Success"],
    notes:
      "Strongly associated with vitality and protection, often used to energise intentions.",
    image: "assets/plants/cinnamon.png"
  },
  {
    name: "Bay Laurel",
    element: "Fire",
    uses: ["Success", "Insight", "Protection"],
    notes:
      "Historically associated with victory and achievement. Recommended for boosting confidence and fuelling good wishes.",
    image: "assets/plants/laurel.png"
  },
  {
    name: "Lavender",
    element: "Air",
    uses: ["Calm", "Sleep", "Protection"],
    notes:
      "Associated with relaxation and mental clarity. Commonly used to quiet the mind and support rest.",
    image: "assets/plants/lavender.png"
  },
  {
    name: "Rose",
    element: "Water",
    uses: ["Love", "Beauty", "Emotional Balance"],
    notes:
      "Closely linked to emotional work and compassion. Often used in practices centered on the heart.",
    image: "assets/plants/rose.png"
  },
  {
    name: "Sage",
    element: "Air",
    uses: ["Cleansing", "Wisdom", "Solace"],
    notes:
      "Widely used in grounding and cleansing practices, symbolising stability and wisdom.",
    image: "assets/plants/sage.png"
  },
  {
    name: "Stinging Nettle",
    element: "Earth",
    uses: ["Vitality", "Boundaries", "Growth"],
    notes:
      "Associated with inner growth and firm boundaries, and is believed to strengthen the body.",
    image: "assets/plants/nettle.png"
  },
  {
    name: "Thyme",
    element: "Air",
    uses: ["Loyalty", "Spirit", "Clarity"],
    notes:
      "Traditionally linked to courage and clear thinking, often used to strengthen focus.",
    image: "assets/plants/thyme.png"
  },
  {
    name: "Aloe Vera",
    element: "Water",
    uses: ["Beauty", "Healing", "Luck"],
    notes:
      "Known for soothing burns and can often be used in moon-related spells.",
    image: "assets/plants/aloe.png"
  },
  {
    name: "Basil",
    element: "Fire",
    uses: ["Fidelity", "Forgiveness", "Wealth"],
    notes:
      "Revered for its divine essence. Basil tea is traditionally made to invite love into one’s life.",
    image: "assets/plants/basil.png"
  },
  {
    name: "Vervain",
    element: "Earth",
    uses: ["Protection", "Creativity", "Prosperity"],
    notes:
      "Linked to cleansing and vivid dreams. Often used for spiritual protection.",
    image: "assets/plants/vervain.png"
  }
];
