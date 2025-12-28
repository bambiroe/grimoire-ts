export interface Spell {
  name: string;
  intent: string;
  focus: string;
  notes: string;
  image: string;
}

export const spells: Spell[] = [
  {
    name: "Sleep Jar",
    intent: "Rest and calm",
    focus: "Evening reflection",
    notes:
      "A symbolic jar prepared with calming intentions, used as a reminder to slow down before rest.",
    image: "assets/spells/sleepjar.png",
  },
  {
    name: "Protection Charm",
    intent: "Personal boundaries",
    focus: "Visualization",
    notes:
      "A small charm carried or placed nearby to reinforce emotional and mental boundaries.",
    image: "assets/spells/protection.png",
  },
  {
    name: "Reading Preparation",
    intent: "Clarity and insight",
    focus: "Quiet attention",
    notes:
      "A short grounding practice performed before oracle or card readings to center focus.",
    image: "assets/spells/reading.png",
  },
  {
    name: "Morning Ritual",
    intent: "Presence and intention",
    focus: "Breath and routine",
    notes:
      "A simple morning practice to set intentions for the day through breath and awareness.",
    image: "assets/spells/morning.png",
  },
  {
    name: "Air Cleansing",
    intent: "Mental clarity",
    focus: "Environment",
    notes:
      "A reflective practice focused on refreshing a space through scent, airflow, or mindful attention.",
    image: "assets/spells/cleansing.png",
  },
  {
    name: "Good Luck Charm",
    intent: "Fortune and opportunity",
    focus: "Symbolic intention",
    notes:
      "A small object prepared with focused intention, carried or placed nearby to encourage confidence and openness to opportunity.",
    image: "assets/spells/luck.png",
  }  
];
