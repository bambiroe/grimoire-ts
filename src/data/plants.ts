export interface Plant {
  name: string;
  element: string;
  uses: string[];
  notes: string;
}

export const plants: Plant[] = [
  {
    name: "Rosemary",
    element: "Fire",
    uses: ["Protection", "Memory", "Clarity"],
    notes: "Traditionally associated with remembrance and mental focus."
  },
  {
    name: "Lavender",
    element: "Air",
    uses: ["Calm", "Sleep", "Peace"],
    notes: "Often used to soothe the mind and encourage rest."
  }
];
