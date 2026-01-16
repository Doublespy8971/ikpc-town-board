// ========== Town Stats ==========

function updateTownStats(members) {
  const totalMembers = members.length;
  const maleCount = members.filter(m => m.gender === 'male').length;
  const femaleCount = members.filter(m => m.gender === 'female').length;
  const newestMember = members[members.length - 1];
  
  document.getElementById('detail-total').textContent = totalMembers;
  document.getElementById('detail-male').textContent = maleCount;
  document.getElementById('detail-female').textContent = femaleCount;
  
  if (newestMember) {
    document.getElementById('newest-member').textContent = 
      `${newestMember.name} joined the town!`;
  }
  
  updateTownRank(totalMembers);
}

function updateTownRank(memberCount) {
  const rankFill = document.getElementById('rank-fill');
  const rankText = document.getElementById('rank-text');
  
  const maxMembers = 400;
  let rank, fillPercent;
  
  if (memberCount < 20) {
    rank = "Village";
    fillPercent = (memberCount / 20) * 100;
  } else if (memberCount < 60) {
    rank = "Town";
    fillPercent = ((memberCount - 20) / 40) * 100;
  } else if (memberCount < 150) {
    rank = "City";
    fillPercent = ((memberCount - 60) / 90) * 100;
  } else if (memberCount < 300) {
    rank = "Metropolis";
    fillPercent = ((memberCount - 150) / 150) * 100;
  } else if (memberCount < maxMembers) {
    rank = "Empire";
    fillPercent = ((memberCount - 300) / 100) * 100;
  } else {
    rank = "Empire";
    fillPercent = 100;
  }
  
  rankText.textContent = rank;
  rankFill.style.width = fillPercent + '%';
}
