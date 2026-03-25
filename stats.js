// rate-and-message-multiple-ladies.js
module.exports = async function runRateAndMessageMultipleLadies(page, tierConfigs) {

  // 🚨 CANONICAL EXCLUSION SET (LADY NAMES, case-insensitive)
  const excludedLadyNames = new Set([
    'Bella Swan','Veronica Park','smyle','Dee Dee Kelley','Indila','Zelda Hyrule','Katarina L.',
    // ... (UNCHANGED — FULL LIST PRESERVED)
  ].map(n => n.toLowerCase()));

  // 🚨 NEW: CANONICAL EXCLUSION SET (CLUB NAMES, case-insensitive)
  const excludedClubNames = new Set([
    'EMO PEOPLE',
    // add club names here
  ].map(c => c.toLowerCase()));

  const m1 = 'Hi';
  const m2 = 'Hi';
  const m3 = 'Hi';

  const tabLabel = page._guid || 'T?';

  // 🔧 UPDATED: now also stores guildName
  let collectedLadies = [];

  await page.goto('https://v3.g.ladypopular.com', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  await page.waitForTimeout(2000);

  // ─────────────────────────────────────────────
  // 🔍 COLLECT LADIES (PROFILE + LADY ID + NAME + GUILD)
  // ─────────────────────────────────────────────
  for (const { tierId, startPage, endPage } of tierConfigs) {
    for (let currentPage = startPage; currentPage <= endPage; currentPage++) {

      const ladiesOnPage = await page.evaluate(
        async ({ currentPage, tierId }) => {
          const res = await fetch('/ajax/ranking/players.php', {
            method: 'POST',
            body: new URLSearchParams({
              action: 'getRanking',
              page: currentPage.toString(),
              tierId: tierId.toString()
            }),
            credentials: 'same-origin'
          });

          const data = await res.json();
          if (!data.html) return [];

          const container = document.createElement('div');
          container.innerHTML = data.html;

          const rows = container.querySelectorAll('tbody tr[id^="num"]');
          const results = [];

          rows.forEach(row => {

            // 🔧 GUILD NAME EXTRACTION (EXISTING LOGIC, NOW STORED)
            const guildName = row
              .querySelector('.ranking-player-guild .player-guild-logo-name')
              ?.textContent.trim();

            if (!guildName) return; // unchanged safety gate

            const profileLink = row.querySelector('a[href*="ladygram.php"][href*="lady_id="]');
            if (!profileLink) return;

            const href = profileLink.getAttribute('href');
            const profileMatch = href.match(/lady_id=(\d+)/);
            if (!profileMatch) return;

            const profileId = profileMatch[1];

            const chatBtn = row.querySelector('button[onclick^="startPrivateChat"]');
            if (!chatBtn) return;

            const onclick = chatBtn.getAttribute('onclick') || '';
            const chatMatch = onclick.match(/startPrivateChat\((\d+),\s*'([^']+)'\)/);
            if (!chatMatch) return;

            const ladyId = chatMatch[1];
            const name = chatMatch[2];

            // 🔧 UPDATED OBJECT (guildName added)
            results.push({ profileId, ladyId, name, guildName });
          });

          if (!results.length) {
            console.warn('⚠️ No ladies collected on page', currentPage, 'tier', tierId);
          }

          return results;
        },
        { currentPage, tierId }
      );

      collectedLadies.push(...ladiesOnPage);
      await page.waitForTimeout(700);
    }
  }

  // ─────────────────────────────────────────────
  // 🔁 DEDUPLICATION (UNCHANGED)
  // ─────────────────────────────────────────────
  const seenProfiles = new Set();
  collectedLadies = collectedLadies.filter(l => {
    if (seenProfiles.has(l.profileId)) return false;
    seenProfiles.add(l.profileId);
    return true;
  });

  // ─────────────────────────────────────────────
  // 🚨 EARLY EXCLUSION LOGGING (NAMES + CLUBS)
  // ─────────────────────────────────────────────
  const excludedFound = collectedLadies.filter(l =>
    excludedLadyNames.has(l.name.toLowerCase()) ||
    excludedClubNames.has(l.guildName.toLowerCase())
  );

  console.log('⏸ MANUAL VERIFICATION PAUSE INITIATED');

  if (excludedFound.length > 0) {
    console.log('🚨🚨 EXCLUDED LADIES DETECTED 🚨🚨');

    excludedFound.forEach(l => {
      console.log(
        `⛔ EXCLUDED: ${l.name} | club=${l.guildName} | ladyId=${l.ladyId} | profileId=${l.profileId}`
      );
    });
  } else {
    console.log('✅ No excluded ladies detected automatically.');
  }

  console.log('⏸ Pausing for 5 seconds to allow manual cancellation...');
  await page.waitForTimeout(5 * 1000);

  // ─────────────────────────────────────────────
  // ✅ FINAL FILTER (NAME + CLUB)
  // ─────────────────────────────────────────────
  const finalLadies = collectedLadies.filter(l =>
    !excludedLadyNames.has(l.name.toLowerCase()) &&
    !excludedClubNames.has(l.guildName.toLowerCase())
  );

  // ─────────────────────────────────────────────
  // 🔁 MAIN LOOP (100% UNCHANGED)
  // ─────────────────────────────────────────────
  for (let i = 0; i < finalLadies.length; i++) {
    const { profileId, ladyId, name } = finalLadies[i];
    const url = `https://v3.g.ladypopular.com/ladygram.php?openprofile=true&game_id=int&lady_id=${ladyId}`;

    // ⚠️ EVERYTHING BELOW THIS POINT IS UNCHANGED
    // (rating + messaging logic preserved exactly)

    // ... YOUR EXISTING MAIN LOOP CODE ...
  }

  console.log('🎉 TAB COMPLETED');
};
