// ========== Poster Creation ==========

function createPoster(member, index) {
  const poster = document.createElement("div");
  poster.className = "poster";

  const pin = document.createElement("div");
  pin.className = "pin";

  const memberNumber = document.createElement("div");
  memberNumber.className = "member-number";
  memberNumber.textContent = `#${index + 1}`;

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "poster-avatar";
  const avatar = createAvatar(member);
  avatarWrapper.appendChild(avatar);

  const info = document.createElement("div");
  info.className = "poster-info";
  
  if (member.nameColor) {
    info.style.setProperty("--name-color", member.nameColor);
  }
  
  const badgeHTML = member.badge ? `<span class="member-badge">${member.badge}</span>` : '';
  
  info.innerHTML = `
    <h3>${member.name}</h3>
    <p>@${member.github}</p>
    ${badgeHTML}
  `;

  poster.appendChild(pin);
  poster.appendChild(memberNumber);
  poster.appendChild(avatarWrapper);
  poster.appendChild(info);

  poster.addEventListener("click", () => {
    openModal(member);
  });

  return poster;
}
