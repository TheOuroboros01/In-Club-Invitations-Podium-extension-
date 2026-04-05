// rate-and-message-multiple-ladies.js
module.exports = async function runRateAndMessageMultipleLadies(page, tierConfigs) {

  // 🚨 CANONICAL EXCLUSION SET (LADY NAMES, case-insensitive)
  const excludedLadyNames = new Set([
    'Bella Swan','Veronica Park','smyle','Dee Dee Kelley','Indila','Zelda Hyrule','Her Majesty','Sakura Haruno','Wild Rose','Agent X','Giggles','Pania','Everest','RAMBØ XT','Katniss Everdeen','lady liz','Lotus','LXUU_ABDE','Queen Taylen','Natasha Romanoff','Jodza','Joselia','Astoria','уσυηg кιηg','Red Queen','Lady Penelope','Scarlet Timberlake','Ashley','AVA','MELODY','AjS_StYlE','King Tyler','Nicole_Edgar','Jhosseline','Jewerline','Mpetty','nadia','Sara','Brianna','Jasmine','Natally','Лана','LaooyaA','Alexandra','Stefanie','katinka-jc','Gizem','Maya','Donna Rowe',
    'Artemisa','Miškica','Octavia','Lady Jamie','اماندا N','stef','Emma','Shiry','margo1726','Veronica','Aelin Galathynius','elegent julei','The Pirate','lady Sophia','Serena','liya','Cathexo','Amelia Jacobs','Eman32','Kleophya','MistfulSky','Alira','AnnaRegina','Isabella','Athena','veronika','Chloe','Sylvia Lorena','Сензация','nade','denny','lady05','jood14','COCCOLE....','Cayle','duushi','Louis','vicky','Hridita','хілларі','Alex','Анна','Lina','HOPE HOD KETER','НИЛО','Thynaël','Lana turner','Lamia','Elodeja','Kaoda Twinkle',
    'Andreeasophia','Alexandra_Sunshine','Anistemi','AitacJm','Abhigya','May Fernandes','LadyDeeDee','Cat Woman','Metal Princess','Queen of_girls','Ferozekhan.lover','Fenty','Annie','Harley Quinn','mykasa','Kahh','Auralis','melissa','Renata','Athenaya','zani ali','tiki1','Mikasapisame','derya','Queen C','Αννα','Nesryn','Marki','FΣΛЯLΣSS','Didiqn','VALERIA','𝓐𝓷𝓷𝓪','Marina Fathy','azhar','Aurora','Katherine_Amara','Anastassia','CharShawn','CVRA','DOLCE MILK','darkknightfallen','Shenhe','Medyson','MI 997','Hellga','liseokk','gatsby_elle','Heeyat Sd','Zahra','Furiosa','Scarlett',
    'MOON DANCER','Sea Smoke','Silver Gryphon','genesssa','TOMI xR','viksa','seyoung','ell','iskrus','Love_Damon','the legend','zizoo','sawako','Gracelan','danae','Susie','Lillian-Grace','Isra and Douaa','Jill','Soleilla','G.Giovanna','Mila','Ива Лени','Doviliukas','Iro','My beautiful lady','Maryse','Reckless_ThinG','Danicawho','Surìe','Ever','Paris.Winter','perinaz','ash0101','MARINA','Fiercelee','trakunia','ivana','Amanda','Niki','golodlove','Hellga','baby c','Alaska','Susie','Lngelina','Amber Elizabeth','Kelly Shanum','Ava','lulumarlene',
    'Aquamarine','nata0508','kat','Satou','Katharina','Avaleina','Lady Evie Solange','Medyson','NUR10','Ανελιζ','HollyBri','Nadja','Phoenix','Boryanaaa','Karolina','Jessica','Mia','Megane','Zornitsa','Nivien','Ranime anni','IsaDora','Lady Nina','Klerry','perunita 2022','SasanaCrow','Tessa','Elza 92','Sayuri','Ekin','Cremesi','Jasmin','funny 2','Samantha Sumers','Leona','Estefania Soledad','Tristania','ᙁᎯᙁᙁᏋᏋ','leelee','GIORDANI','Freya','Cora','Quintella','minoflora','Nicanora','LUCY','Allora Lyric','Tryn','Ikky Watari','anabella_x13',
    'kamill','Rimantė','Yri moon','Andrea_dea12','eli20158','dazou','Wiki13579','BlooBerry','bezimena','Irene','Camy18','ivaivka','Flora','missy90120','Nayara','Lolatralala','Meyghan','churruska','jossh','Lal Deniz','Эмма','Tamunia','kusum','Lasma25','Романтика','Charice','tamara','aaaa','M.A.Y.','JULLY','Nihane','naina','Isa Gold','Krystyna. S. Buraków','Azulinderella','Marki','Veselina','gözdem','TitaLopes','Bouthy','Thando','MichelleGrace','giusep','QueerQueen','Lagherta','brean','LADY-XXX','хрисит','klara','Lada116','chanel',
    'Raneta','Omnia Revertutur','Fari','MrsAnt','SkyTraveller','janajana','Monika','kafy','BeautyMarie17','Monica','Gabriella Elena','Lady Gaga','Lisette','kanza','Saba Maca','Menekse','Ally','Geda','leide paixao','teddyB','betsi','ASH','camila','Dalia Cualler','Cris','Лина','RubyPhonic','SunnyBeam','jhh','Brittleigh','Wolf girl power','Nourhan','STORM K.','MoniB','Meliss22','Спортяга200','Khloe','Silver Zoey','Supreme','Rosa Espinosa','Park Jeon','Elena','Mrs Amileah','harley','TaDah','bestsuperstar1','liran','DiDa','Sorcha','Fabbyfabfab','Mapuнa Clear','mimijh','Queen Clairissa',
    'Jessica Stewart','Monica','kajaz','Solo Killer','ERINА','Miss Nikys','Pammy','_Autumn_','Raven Red','Yennefer','nana','JullieneGlamour','Jayne','Esma','Olivia Louise','Elle Lee','Asmaa love','NinaElf','LADY KIM','Martina','Zdenul','Nelama','KalinneCris13','Twiztid Witch','ViKs_ViKs','taliah','LoriKyleene','Rhea','WaNgXiAn','A.W.','Bella','Classa','GouraSouriante','VenusDoom','Anais','lolli','Cas','Friderika','Feraci','Miss Marmelade','Amelia Jae','Winter SnowFlake','Pixie','Nynaeve','X.cumalielif.X','ღ.Diana.ღ','ميمي ليلى','Kaiulany','ღZoeNoireSashaღ','Alex57','sky seeker','Bonnie H','Lady Nina','Sayoh','kingszon','SRKKING',
    'Krystyna. S. Buraków','Val56','Ulyana','Ели',
     //removed most presidents till 7900 fame or page 14 of club ranks page or top 280 clubs in the game
  ].map(n => n.toLowerCase()));

  // 🚨 CANONICAL EXCLUSION SET (CLUB NAMES, case-insensitive)
  const excludedClubNames = new Set([
    'VENUS®','Valkyries','JJF','Models Inc💎','Catladies','VENUS®𝕀𝕀','NStyleSisterhood','Gang Girls','Angel Wings','STAR WORLD','Eternal Muses','Royal Fashionist','Models BG 💥','Scream Queens','👑 ՏմӀԵɑղՏ 👑','PRINCESAS','The RUNAWAYS','╰☆☆ ✿Balkαnkє✿ ☆','REALM OF ANGELS','HellHounds','ф Exultant ф','ღ BGR ღ','NEW-BegiNNinG','MERMAIDS','† МОНАСТЫРЬ †','Fashion Queens','MOON','Eldur Crest Clan','Models Ltd 🌸','♔ʀԑıԍղ♕','Alluring Ocean','Glam Girls','Secret team','✿WiLD❀♡❀AnGeLs✿','Snowflake','Shangrila',
    'Stardust_Mirage','Відьомська хата','REVOLUTION','Black & White','The Hydras','*SUPER STARS*','♡Balkan girls♡','Lavender Honey','⋆˚ MARKHØRS ˚⋆','MOON Callisto','Alpha','Joyous','۞Charmed Dreams۞','Stilettos & Lace','♚ First.Ladies ♚','Strong Ladys 🍀','Purple Reigns','♔Bulgaria♔','Bulgarian Girls','Elite',
    '⭐CrèmeDeLaCrème⭐','ღFemme Fatalesღ','╰☆☆☆FANTASIA☆☆☆','💎丅ᕼᗴ Ǥᖇᗴᗩ丅ᗴᔕ丅💙','Red Roses Club','Mꨄ︎gic','•Winner♡Ladies•','Wild Cats','Fireflies','PaRiS Maj3stic','MaJ3stic Ang3Ls','Daisy','Magyarok','Black Dahlia','Dancing Queens','♥ PINK ♥','Royal Belles','💗DIVINE💗','Always For Doina','♥The dreamers♥',
    'InItToWinIt','𝒫𝒾𝒳ℯℒ ℳℴ𝒟ℯℒ','≈Floribunda≈','Diamond💎Divas','🤝KINDREDSPIRITS🤝','Charmed','Invicta','Royal Angels','Beauty✿Blossoms','The Rejected','Fashion Forward','Quiksilvers Club','Girlgroup','The OG clannad','Pink Realty','Queens','TEA','Hello Princess',
    'Magical Queens','Mačke sa Balkana','B.YღurSelf ツ✿','WITCHES LAIR','ANTI FASHION','The untouchable','Pink World💖','ROSE AMBER','..♥♛Русские♛♥..','CͨђAͣRͬMⷨEͤDͩ ⚝','EMERALD CITY','Luxury⚜️','ღ Carpe Diem ღ','Colors Of Beauty','WINCHESTER GIRLS','White Angels','Zeldas',
    'Fashion Wizard','Pretty in PINK','₪₪OΛΥΜΠUΣ₪₪','Stylistas','Frizzle Sizzle','Vintage Russia','Shangrila 2','♕Love Myself♕','ICE QUEENS','Butterfly Wings','♕Asian Lovers♕','LOYALTY','Female Forceღ','RunwayMcFunway','Лудите Бабки','Mode France','✧ Shining Star ✧','★Rebels★','Zellbury','Fortune',
    'Rule Breakers','Ƹ̴Ӂ̴ƷBuTtErFly','♔ Pearls 𝕀𝕀 ♔','New Era','Lunar Queens','UNIVERSE TEAM','♛✰ VR-46 ✰♛','Dazzling Divas 💎','baddie girls','VENUS®','Valkyries','JJF','Models Inc💎','Catladies','VENUS®𝕀𝕀','NStyleSisterhood','Gang Girls','Angel Wings','E.The.real MuSeS','Royal Fashionist','STAR WORLD','Models BG 💥','Scream Queens','👑 ՏմӀԵɑղՏ 👑','PRINCESAS','ф Exultant ф','The RUNAWAYS','╰☆☆ ✿Balkαnkє✿ ☆','REALM OF ANGELS',
    'HellHounds','NEW-BegiNNinG','MERMAIDS','ღ BGR ღ','† МОНАСТЫРЬ †','♔ʀԑıԍղ♕','Fashion Queens','MOON','Eldur Crest Clan','Models Ltd 🌸','Glam Girls','Secret team','Alluring Ocean','✿WiLD❀♡❀AnGeLs✿','Shangrila','Snowflake','Відьомська хата','Black & White','⋆˚ MARKHØRS ˚⋆','Stardust_Mirage','*SUPER STARS*',
    'REVOLUTION','♡Balkan girls♡','Purple Reigns','The Hydras','Lavender Honey','Only me','Joyous','Stilettos & Lace','♚ First.Ladies ♚','Daisy','Mꨄ︎gic','♔Bulgaria♔','Alpha','Elite','⭐CrèmeDeLaCrème⭐','ღFemme Fatalesღ','╰☆☆☆FANTASIA☆☆☆','💎丅ᕼᗴ Ǥᖇᗴᗩ丅ᗴᔕ丅💙','Red Roses Club','•Winner♡Ladies•','۞Charmed Dreams۞','Wild Cats','Fireflies','Bulgarian Girls','PaRiS Maj3stic','The OG clannad','MaJ3stic Ang3Ls','TEA','MOON Callisto','Magyarok','Black Dahlia','♥ PINK ♥','Royal Belles','💗DIVINE💗','B.YღurSelf ツ✿','Always For Doina','InItToWinIt','𝒫𝒾𝒳ℯℒ ℳℴ𝒟ℯℒ','≈Floribunda≈','Diamond💎Divas','🤝KINDREDSPIRITS🤝',
    'Invicta','Charmed','Royal Angels','Beauty✿Blossoms','Fashion Forward','Quiksilvers Club','Pink Realty','Strong Ladys 🍀','Magical Queens','Dancing Queens','Queens','Hello Princess','Mačke sa Balkana','WITCHES LAIR','ANTI FASHION','LOYALTY','Pink World💖','ღ Carpe Diem ღ','ROSE AMBER','..♥♛Русские♛♥..','CͨђAͣRͬMⷨEͤDͩ ⚝','EMERALD CITY','Luxury⚜️','The untouchable','Colors Of Beauty','Stylistas','WINCHESTER GIRLS','White Angels','Fashion Wizard','Pretty in PINK','₪₪OΛΥΜΠUΣ₪₪','Vintage Russia','Shangrila 2','Mode France','♕Love Myself♕','ICE QUEENS','♕Asian Lovers♕','Female Forceღ','Лудите Бабки','RunwayMcFunway','Zeldas','✧ Shining Star ✧','★Rebels★','Frizzle Sizzle','Butterfly Wings','Zellbury','Fortune','Rule Breakers','Ƹ̴Ӂ̴ƷBuTtErFly',
    // add more clubs here
  ].map(c => c.toLowerCase()));

  const m1 = 'Hi honey! If you r open to a change, would u like to join our club? Donations arent needed, just participate in club fights when u can. In 2-3 weeks, we plan to win all 5 club trophies to help boost gameplay. It will be lovely to have u with us! :)';
  const m2 = 'Hi honey! If you r open to a change, would u like to join our club? Donations arent needed, just participate in club fights when u can. In 2-3 weeks, we plan to win all 5 club trophies to help boost gameplay. It will be lovely to have u with us! :)';
  const m3 = 'Hi honey! If you r open to a change, would u like to join our club? Donations arent needed, just participate in club fights when u can. In 2-3 weeks, we plan to win all 5 club trophies to help boost gameplay. It will be lovely to have u with us! :)';
  //Hi honey! If you're open to a change, would u like to join our club? Donations aren’t needed, just participate in club fights when u can. In 2-3 weeks, we plan to win all 5 club trophies to help boost gameplay. It'd be lovely to have u with us! :)

  const tabLabel = page._guid || 'T?';

  let collectedLadies = [];

  await page.goto('https://v3.g.ladypopular.com', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });
  await page.waitForTimeout(2000);

  // ─────────────────────────────────────────────
  // 🔍 COLLECT LADIES (PROFILE + LADY ID + NAME + CLUB)
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
            const guildName = row
              .querySelector('.ranking-player-guild .player-guild-logo-name')
              ?.textContent.trim();
            if (!guildName) return;

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

            results.push({ profileId, ladyId, name, guildName });
          });

          return results;
        },
        { currentPage, tierId }
      );

      collectedLadies.push(...ladiesOnPage);
      await page.waitForTimeout(700);
    }
  }

  // ─────────────────────────────────────────────
  // 🔁 DEDUPLICATION
  // ─────────────────────────────────────────────
  const seenProfiles = new Set();
  collectedLadies = collectedLadies.filter(l => {
    if (seenProfiles.has(l.profileId)) return false;
    seenProfiles.add(l.profileId);
    return true;
  });

  // ─────────────────────────────────────────────
  // 🚨 EARLY EXCLUSION LOG
  // ─────────────────────────────────────────────
  const excludedFound = collectedLadies.filter(l =>
    excludedLadyNames.has(l.name.toLowerCase()) ||
    excludedClubNames.has(l.guildName.toLowerCase())
  );

  console.log('⏸ MANUAL VERIFICATION PAUSE INITIATED');

  if (excludedFound.length > 0) {
    console.log('🚨🚨 EXCLUDED LADIES DETECTED 🚨🚨');
    excludedFound.forEach(l => {
      console.log(`⛔ EXCLUDED: ${l.name} | club=${l.guildName} | ladyId=${l.ladyId}`);
    });
  } else {
    console.log('✅ No excluded ladies detected automatically.');
  }

  await page.waitForTimeout(5000); //delay or pause for manual verification

  // ─────────────────────────────────────────────
  // ✅ FINAL FILTER
  // ─────────────────────────────────────────────
  const finalLadies = collectedLadies.filter(l =>
    !excludedLadyNames.has(l.name.toLowerCase()) &&
    !excludedClubNames.has(l.guildName.toLowerCase())
  );

  // ─────────────────────────────────────────────
  // 🔁 MAIN LOOP (UNCHANGED)
  // ─────────────────────────────────────────────
  for (let i = 0; i < finalLadies.length; i++) {
    const { profileId, ladyId, name } = finalLadies[i];
    const url = `https://v3.g.ladypopular.com/ladygram.php?openprofile=true&game_id=int&lady_id=${ladyId}`;

    let caseType = 'case1';
    let ratingResult = null;
    let ratingGiven = null;
    let messageResult = false;

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForSelector('.main-info .lady-name', { timeout: 15000 });
      await page.waitForTimeout(1200);

      const stars = page.locator('.lg-profile-podium-rating-layout .ratings .star');
      const starCount = await stars.count();

      if (starCount === 0) {
        caseType = 'case2';
      } else {
        const enabledStars = await page
          .locator('.lg-profile-podium-rating-layout .ratings .star:not(.disabled)')
          .count();
        caseType = enabledStars > 0 ? 'case1' : 'case3';
      }

      if (caseType === 'case1') {
        const stars = page.locator('.lg-profile-podium-rating-layout .ratings .star:not(.disabled)');
        const count = await stars.count();
        if (count > 0) {
          await stars.nth(count - 1).click();
          await page.waitForFunction(() =>
            [...document.querySelectorAll('.star')].every(s => s.classList.contains('disabled'))
          );
          ratingResult = true;
          ratingGiven = count;
        }
      }

      const message = caseType === 'case1' ? m1 : caseType === 'case2' ? m2 : m3;

      await page.evaluate(({ ladyId, name }) => {
        startPrivateChat(ladyId, name);
      }, { ladyId, name });

      await page.waitForSelector('#msgArea', { timeout: 7000 });
      await page.evaluate(msg => {
        document.getElementById('msgArea').value = msg;
        document.getElementById('_sendMessageButton').click();
      }, message);

      messageResult = true;

    } catch {}

    console.log(
      `${tabLabel} - (${i + 1}/${finalLadies.length}) ${url} | ${caseType} | ` +
      `${ratingResult ? '✅' : '❌'} ${messageResult ? '✅' : '❌'}`
    );
  }

  console.log('🎉 TAB COMPLETED');
};
