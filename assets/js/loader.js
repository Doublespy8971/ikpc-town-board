// ========== Data Loading ==========

function loadMembers() {
  fetch("data/members.json")
    .then(res => res.json())
    .then(members => {
      if (!Array.isArray(members)) {
        throw new Error("members.json must be an array");
      }
      
      updateTownStats(members);
      
      members.forEach((member, index) => {
        const validatedMember = validateMember(member);
        const poster = createPoster(validatedMember, index);
        board.appendChild(poster);
      });
    })
    .catch(err => {
      console.error("Failed to load members.json", err);
      board.innerHTML = `<p style="color: #fff; text-align: center;">Failed to load members. Please check console.</p>`;
    });
}

loadMembers();
