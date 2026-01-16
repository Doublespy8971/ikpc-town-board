// ========== Validation ==========

function validateMember(member) {
  const validated = { ...member };

  validated.name = (member.name && member.name.trim()) || "Anonymous";
  validated.github = (member.github && member.github.trim()) || "unknown";
  validated.quote = (member.quote && member.quote.trim()) || "No quote provided";

  if (validated.quote.length > 80) {
    validated.quote = validated.quote.substring(0, 77) + "...";
  }

  if (member.gender !== "male" && member.gender !== "female") {
    console.warn(`Invalid gender "${member.gender}" for ${validated.name}. Defaulting to male.`);
    validated.gender = "male";
  }

  validated.hairColor = validateColor(member.hairColor, "#6b4f2a");
  validated.dressColor = validateColor(member.dressColor, "#4a90e2");
  validated.nameColor = member.nameColor ? validateColor(member.nameColor, "#333") : "#333";

  const validEyes = ["normal", "happy", "sleepy", "wide", "wink"];
  const validMouths = ["neutral", "smile", "happy", "surprised", "sad"];
  
  validated.eyes = validEyes.includes(member.eyes) ? member.eyes : "normal";
  validated.mouth = validMouths.includes(member.mouth) ? member.mouth : "neutral";

  return validated;
}

function validateColor(color, fallback) {
  if (!color || typeof color !== "string") {
    return fallback;
  }

  const testElement = document.createElement("div");
  testElement.style.color = color;
  
  if (testElement.style.color) {
    return color;
  }
  
  console.warn(`Invalid color "${color}". Using fallback ${fallback}.`);
  return fallback;
}
