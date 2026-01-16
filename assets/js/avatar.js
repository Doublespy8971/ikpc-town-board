// ========== Avatar Creation ==========

function createAvatar(member) {
  const avatar = document.createElement("div");
  
  const eyeClass = member.eyes && member.eyes !== "normal" ? `eyes-${member.eyes}` : "";
  const mouthClass = member.mouth && member.mouth !== "neutral" ? `mouth-${member.mouth}` : "";
  
  avatar.className = `avatar ${member.gender} ${eyeClass} ${mouthClass}`.trim();

  avatar.style.setProperty("--hair-color", member.hairColor);
  avatar.style.setProperty("--shirt-color", member.dressColor);

  avatar.innerHTML = `
    <div class="body"></div>
    <div class="hair"></div>
    <div class="eyes"></div>
    <div class="nose"></div>
    <div class="mouth"></div>
    <div class="clothes"></div>
  `;

  return avatar;
}
