// ========== Modal ==========

function openModal(member) {
  modalAvatar.innerHTML = "";
  modalAvatar.appendChild(createAvatar(member));

  modalName.textContent = member.name;
  modalGithub.textContent = `@${member.github}`;
  modalGithub.href = `https://github.com/${member.github}`;
  modalQuote.textContent = `"${member.quote}"`;

  modalOverlay.classList.remove("hidden");
}

function closeModal() {
  modalOverlay.classList.add("hidden");
}

modalClose.onclick = closeModal;

modalOverlay.onclick = (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
