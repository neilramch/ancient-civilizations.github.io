const warsData = {
    regions: [
      {
        name: "Europe",
        wars: [
    {
      id: 1,
      name: "Peloponnesian War",
      startYear: "431 BCE",
      endYear: "404 BCE",
      description:
                "The Peloponnesian War (431–404 BCE) was a protracted conflict between the Athenian Empire and the Peloponnesian League, led by Sparta. It marked a pivotal moment in the decline of Greek power. The war was the result of decades of growing tension between Athens and Sparta, driven by rivalry between the Delian League, led by Athens, and the Peloponnesian League, led by Sparta.\n\n" +
                "Key causes included Athens' transformation of the Delian League into an empire, disputes among city-states like Corinth and Corcyra, and the Megarian Decree, which banned Spartan allies from Athenian markets. Sparta feared Athenian expansion, while Athens sought to maintain dominance.\n\n" +
                "The war unfolded in three major phases:\n" +
                "1. **Archidamian War (431–421 BCE)**: Sparta invaded Athenian territory, while Athens relied on its navy and Long Walls for defense. A devastating plague struck Athens in 430 BCE, killing a third of its population, including its leader, Pericles. The phase ended in a stalemate with the Peace of Nicias.\n" +
                "2. **Sicilian Expedition (415–413 BCE)**: Athens launched a massive campaign against Syracuse in Sicily. Despite initial successes, the expedition ended in disaster, with the Athenian fleet destroyed and thousands of soldiers killed or captured.\n" +
                "3. **Ionian War (413–404 BCE)**: Also known as the Decelean War, this phase saw Spartan naval victories, Persian financial support for Sparta, and the decisive Battle of Aegospotami in 405 BCE, where the Spartan fleet, led by Lysander, crushed Athens’ navy.\n\n" +
                "The war ended in 404 BCE with Athens' surrender. The Long Walls were dismantled, Athens lost its fleet, and its empire collapsed. Sparta imposed an oligarchic government, known as the Thirty Tyrants, on Athens.\n\n" +
                "The aftermath left Greece weakened and divided. The war devastated the Greek economy, depopulated city-states, and made Greece vulnerable to external threats, including the eventual Macedonian conquest under Philip II and Alexander the Great. Key figures included Pericles, Alcibiades, Lysander, Nicias, and Gylippus.\n\n" +
                "The Peloponnesian War is immortalized in Thucydides’ 'History of the Peloponnesian War,' which offers profound insights into power, greed, and human nature. It serves as a timeless lesson in the dangers of imperial overreach, prolonged conflict, and fragile alliances.",

      keyBattles: ["Battle of Syracuse", "Battle of Aegospotami"],
      leaders: ["Pericles (Athens)", "Brasidas (Sparta)", "Lysander (Sparta)"],
      mapUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Peloponnesian_war_alliances_431_BC.png"
    },
    {
      id: 2,
      name: "Punic Wars",
      startYear: -264,
      endYear: -146,
      description:
      "The Punic Wars (264–146 BCE) were a series of three wars fought between the Roman Republic and the Carthaginian Empire. These wars determined control over the western Mediterranean and marked a critical period in the rise of Rome as a dominant power. The wars were fueled by economic rivalry, territorial disputes, and ambitions of imperial expansion by both states.\n\n" +
      "The First Punic War (264–241 BCE) was centered on the island of Sicily. Rome, initially inexperienced in naval warfare, built a powerful fleet and eventually defeated Carthage in several key battles, including the Battle of the Aegates Islands. Carthage was forced to cede Sicily and pay a large indemnity, marking the first Roman province outside the Italian Peninsula.\n\n" +
      "The Second Punic War (218–201 BCE) is perhaps the most famous of the three. Carthaginian general Hannibal led a daring invasion of Italy by crossing the Alps with a formidable army, including war elephants. Hannibal won spectacular victories, such as the Battle of Cannae, but was unable to capture Rome. The tide turned when Roman general Scipio Africanus invaded North Africa, forcing Hannibal to return home. The decisive Battle of Zama in 202 BCE ended the war, with Carthage defeated and reduced to a client state of Rome.\n\n" +
      "The Third Punic War (149–146 BCE) was a brief but brutal conflict. Rome, fearing a revival of Carthaginian power, launched a siege of Carthage. After a three-year siege, the city was destroyed, its population enslaved, and its territory annexed as the Roman province of Africa. The annihilation of Carthage marked the end of Carthaginian civilization and solidified Roman dominance in the Mediterranean.\n\n" +
      "The Punic Wars had profound consequences for both Rome and the Mediterranean world. Rome emerged as the supreme power, expanding its influence across Europe, North Africa, and the Near East. The wars also demonstrated the effectiveness of Roman military discipline and adaptability. However, the massive influx of wealth and slaves from conquest exacerbated social and economic inequalities in Rome, sowing the seeds of internal unrest in the Republic.",
      keyBattles: ["Battle of Cannae", "Battle of Zama"],
      leaders: ["Hannibal (Carthage)", "Scipio Africanus (Rome)"],
      mapUrl: "https://cdn.britannica.com/42/1042-050-F1D06D1D/Mediterranean-Punic-Wars.jpg"
    },
    {
      id: 3,
      name: "Hundred Years' War",
      startYear: 1337,
      endYear: 1453,
      description:
      "The Hundred Years’ War (1337–1453) was a protracted series of conflicts fought between England and France over claims to the French throne and territorial disputes. This war profoundly influenced the political and cultural landscape of medieval Europe, marking the transition from feudal armies to centralized monarchies and standing armies.\n\n" +
      "The war began when Edward III of England claimed the French crown, challenging the legitimacy of the Valois dynasty under Philip VI of France. England’s initial successes were due to superior military tactics, including the use of the longbow, which was decisive in battles such as Crécy (1346) and Poitiers (1356).\n\n" +
      "In 1360, the Treaty of Brétigny temporarily halted hostilities, granting England significant territories in France. However, this truce unraveled, and fighting resumed as French forces, under leaders like Charles V and Bertrand du Guesclin, gradually regained lost territory.\n\n" +
      "The war entered its most dramatic phase in the early 15th century, with England under Henry V achieving a monumental victory at Agincourt (1415), where a small English force decimated the much larger French army. The Treaty of Troyes (1420) recognized Henry V as heir to the French throne, but his death in 1422 created a succession crisis.\n\n" +
      "The turning point came with the emergence of Joan of Arc, a French peasant girl who claimed divine guidance. She led French forces to critical victories, including the lifting of the Siege of Orléans in 1429. Her efforts inspired a national revival, leading to the coronation of Charles VII as king of France in Reims. Despite being captured and executed by the English in 1431, Joan’s legacy continued to galvanize French resistance.\n\n" +
      "The war concluded with France’s decisive victory, culminating in the recapture of Bordeaux in 1453. England retained only Calais, marking the end of its ambitions in France. The conflict left a lasting legacy, including the development of national identities in England and France, the decline of feudalism, and advances in military technology.\n\n" +
      "The Hundred Years’ War reshaped Europe, ushering in the Renaissance and laying the groundwork for centralized states. It also underscored the enduring human cost of prolonged warfare, as millions perished from battle, famine, and the Black Death, which ravaged populations during the conflict."
    ,
      keyBattles: [
        "Battle of Crécy",
        "Battle of Agincourt",
        "Siege of Orleans"
      ],
      leaders: [
        "Edward III (England)",
        "Joan of Arc (France)",
        "Henry V (England)"
      ],
      mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hundred_years_war.gif/522px-Hundred_years_war.gif"
    },
    {
      id: 4,
      name: "Thirty Years' War",
      startYear: 1618,
      endYear: 1648,
      description:
      "The Thirty Years’ War (1618–1648) was a devastating conflict that engulfed much of Europe, particularly the Holy Roman Empire. It began as a religious struggle between Protestant and Catholic states but evolved into a broader political and territorial contest involving major European powers. The war is considered one of the most destructive in European history, resulting in widespread famine, disease, and depopulation.\n\n" +
      "The war was triggered by the Defenestration of Prague in 1618, where Protestant nobles in Bohemia rebelled against the Catholic Habsburg emperor Ferdinand II. Initially a localized conflict, it escalated as neighboring powers, including Spain, France, Sweden, and Denmark, became involved.\n\n" +
      "The conflict is traditionally divided into four main phases:\n" +
      "1. **Bohemian Phase (1618–1625)**: Marked by Protestant resistance in Bohemia, culminating in the Battle of White Mountain, where Catholic forces decisively defeated the Bohemian rebels.\n" +
      "2. **Danish Phase (1625–1629)**: Denmark, led by King Christian IV, intervened to support the Protestant cause but was defeated by Imperial forces under General Albrecht von Wallenstein.\n" +
      "3. **Swedish Phase (1630–1635)**: Sweden, under King Gustavus Adolphus, entered the war as a champion of Protestantism. The Swedes achieved significant victories, including the Battle of Breitenfeld, but suffered a setback with Gustavus Adolphus' death at the Battle of Lützen.\n" +
      "4. **Franco-Swedish Phase (1635–1648)**: France, despite being Catholic, allied with Protestant Sweden to weaken the Habsburgs. This phase was marked by large-scale battles, including the Battle of Rocroi, where French forces defeated Spain, signaling the decline of Spanish dominance.\n\n" +
      "The war ended with the Peace of Westphalia in 1648, a series of treaties that reshaped the political map of Europe. The Holy Roman Empire's power was significantly diminished, and the concept of state sovereignty was formalized, laying the groundwork for the modern nation-state system.\n\n" +
      "The Thirty Years’ War had a profound impact on Europe. It caused immense human suffering, with millions dying from violence, famine, and disease. Economically, many regions were devastated, particularly Germany. Politically, the war marked the decline of religious wars in Europe and the rise of France as a dominant power. It also underscored the importance of diplomacy and balance of power in European politics.",
    
      keyBattles: ["Battle of White Mountain", "Battle of Breitenfeld"],
      leaders: [
        "Gustavus Adolphus (Sweden)",
        "Ferdinand II (Holy Roman Empire)"
      ],
      mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Map_Thirty_Years_War-en.svg/1280px-Map_Thirty_Years_War-en.svg.png"
    },
    {
      id: 5,
      name: "Napoleonic Wars",
      startYear: 1803,
      endYear: 1815,
      description:
                "The Napoleonic Wars (1803–1815) were a series of conflicts involving Napoleon Bonaparte’s French Empire and a coalition of European powers, including Britain, Austria, Prussia, and Russia. These wars reshaped the political and social landscape of Europe and marked the height of French influence under Napoleon’s leadership.\n\n" +
                "The conflict arose from the instability created by the French Revolution and the subsequent rise of Napoleon. After declaring himself Emperor of France in 1804, Napoleon embarked on a campaign to expand French territory and establish dominance over Europe. The wars are typically divided into several major campaigns.\n\n" +
                "Napoleon achieved early successes, including victories at the Battle of Austerlitz (1805), where he decisively defeated the combined forces of Austria and Russia, and the Battle of Jena-Auerstedt (1806), which crushed Prussian resistance. The Continental System, an economic blockade against Britain, was introduced but ultimately failed, as it hurt France’s allies and led to widespread discontent.\n\n" +
                "The Peninsular War (1808–1814) marked a turning point, as Spanish guerrillas and British forces under the Duke of Wellington resisted French occupation, tying down large numbers of French troops. The catastrophic invasion of Russia in 1812 further weakened Napoleon. The French army suffered massive losses due to harsh weather, logistical failures, and Russian scorched-earth tactics.\n\n" +
                "By 1813, the Sixth Coalition, including Britain, Russia, Austria, and Prussia, launched a coordinated campaign against Napoleon. The decisive Battle of Leipzig (1813), also known as the Battle of Nations, forced Napoleon to retreat to France. In 1814, Paris fell to the coalition forces, and Napoleon was exiled to Elba.\n\n" +
                "Napoleon briefly returned to power in 1815 during the Hundred Days but was defeated at the Battle of Waterloo by British and Prussian forces. This final defeat led to his exile to Saint Helena, where he spent the remainder of his life.\n\n" +
                "The Napoleonic Wars had far-reaching consequences. They ended centuries of feudal structures across Europe, spread revolutionary ideals, and led to the redrawing of borders at the Congress of Vienna. The wars also ushered in an era of nationalism, shaping the modern political landscape of Europe. However, they came at a great cost, with millions of soldiers and civilians killed or displaced."
              ,
      keyBattles: [
        "Battle of Austerlitz",
        "Battle of Trafalgar",
        "Battle of Waterloo"
      ],
      leaders: [
        "Napoleon Bonaparte (France)",
        "Duke of Wellington (UK)",
        "Tsar Alexander I (Russia)"
      ],
      mapUrl: "https://cdn.britannica.com/66/366-050-CFFB3F13/extent-Napoleon-I-First-Empire.jpg"
    },
    {
      id: 6,
      name: "World War I",
      startYear: 1914,
      endYear: 1918,
      description:
              "World War I (1914–1918), known as the Great War, was a devastating global conflict centered in Europe. Triggered by the assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo, the war quickly escalated as alliances and rivalries among European powers came to the forefront. The two major alliances were the Allied Powers, led by France, Britain, and Russia, and the Central Powers, dominated by Germany, Austria-Hungary, and the Ottoman Empire.\n\n" +
              "The war was characterized by trench warfare and industrial-scale violence, with the Western Front in France and Belgium becoming a grim symbol of stalemates, mass casualties, and technological advancements in weaponry. Key battles such as the Battle of the Somme, the Battle of Verdun, and the First and Second Battles of Ypres epitomized the brutality of the conflict, with millions of soldiers killed in futile attempts to gain ground.\n\n" +
              "On the Eastern Front, fighting between Russia and the Central Powers was marked by mobility compared to the stagnation in the West. The Russian Empire suffered devastating defeats, and internal turmoil led to the Bolshevik Revolution in 1917, which resulted in Russia’s withdrawal from the war under the Treaty of Brest-Litovsk.\n\n" +
              "The war also extended to other theaters, including the Balkans, the Middle East, and Africa, as European empires drew their colonies and dominions into the conflict. Naval battles, such as the Battle of Jutland, and unrestricted submarine warfare by Germany also played significant roles.\n\n" +
              "The entry of the United States into the war in 1917 provided a critical boost to the Allied Powers. By 1918, Germany and its allies were exhausted, facing economic collapse, internal unrest, and a failing military effort. The signing of the Armistice on November 11, 1918, ended the fighting, leading to the eventual Treaty of Versailles in 1919.\n\n" +
              "The Treaty of Versailles placed significant blame for the war on Germany, imposing harsh reparations, territorial losses, and military restrictions. The map of Europe was redrawn, with the Austro-Hungarian and Ottoman Empires dissolved, and new nations such as Czechoslovakia, Yugoslavia, and Poland emerging.\n\n" +
              "World War I had profound consequences for Europe. It caused unprecedented destruction, with over 16 million dead and millions more wounded or displaced. Economically and socially, Europe was left shattered, with many nations struggling to recover. Politically, the war sowed the seeds of discontent and nationalism that would lead to World War II. Culturally, it marked the end of the old European order and the beginning of a modern, more fractured world."
            ,
      keyBattles: [
        "Battle of the Somme",
        "Battle of Verdun",
        "Second Battle of Ypres"
      ],
      leaders: [
        "Woodrow Wilson (USA)",
        "Kaiser Wilhelm II (Germany)",
        "David Lloyd George (UK)"
      ],
      mapUrl: "https://cdn.britannica.com/14/196314-050-3FE67EC0/Map-Allies-Central-Powers-World-War-I.jpg"
    },
    {
      id: 7,
      name: "World War II",
      startYear: 1939,
      endYear: 1945,
      description:
          "World War II (1939–1945) was the deadliest conflict in human history, originating in Europe and spreading across the globe. It began on September 1, 1939, when Nazi Germany, under Adolf Hitler, invaded Poland. This led Britain and France to declare war on Germany, initiating a conflict that would engulf much of the continent. The war was driven by aggressive expansionism from the Axis Powers—Germany, Italy, and later Japan—and the Allied Powers' efforts to resist their domination.\n\n" +
          "The early years of the war saw Germany's blitzkrieg tactics result in the rapid conquest of Poland, France, and much of Western Europe. The fall of France in 1940 left Britain as the last major Allied power in Europe, enduring relentless bombing during the Battle of Britain. Germany also turned its attention eastward, invading the Soviet Union in 1941 under Operation Barbarossa, resulting in some of the largest and bloodiest battles in history.\n\n" +
          "The Axis Powers initially achieved significant territorial gains, but their fortunes began to reverse after critical defeats. The Battle of Stalingrad (1942–1943) marked a turning point on the Eastern Front, as Soviet forces halted the German advance and began pushing westward. In North Africa, the Allies defeated German and Italian forces, paving the way for the invasion of Italy in 1943, which led to the collapse of Mussolini’s regime.\n\n" +
          "The Western Allies opened a second front in Europe with the D-Day landings on June 6, 1944. The successful invasion of Normandy allowed Allied forces to liberate France and advance into Germany. Meanwhile, the Soviet Red Army advanced from the east, capturing Berlin in May 1945. Hitler committed suicide, and Germany surrendered unconditionally on May 7, 1945, ending the war in Europe.\n\n" +
          "World War II devastated Europe, leaving tens of millions dead, including six million Jews who were systematically murdered in the Holocaust. The continent’s cities, infrastructure, and economies were left in ruins. The war also led to significant political changes, with Eastern Europe falling under Soviet influence and Western Europe embarking on reconstruction efforts with American support through the Marshall Plan.\n\n" +
          "The aftermath of World War II marked the end of European dominance in global affairs and the beginning of the Cold War between the United States and the Soviet Union. Europe was divided along ideological lines, symbolized by the Iron Curtain, as the world transitioned into a new era of geopolitical tension. Despite the destruction, the war also laid the groundwork for European integration, eventually leading to the formation of the European Union."
        ,
      keyBattles: [
        "Battle of Stalingrad",
        "D-Day (Normandy Landings)",
        "Battle of the Bulge"
      ],
      leaders: [
        "Winston Churchill (UK)",
        "Adolf Hitler (Germany)",
        "Joseph Stalin (USSR)"
      ],
      mapUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Second_world_war_europe_1941-1942_map_en.png"
    },
    {
      id: 8,
      name: "Cold War Conflicts",
      startYear: 1947,
      endYear: 1991,
      description:
  "The Cold War conflicts in Europe (1947–1991) were a series of geopolitical tensions, proxy conflicts, and ideological confrontations between the United States and its NATO allies, and the Soviet Union and its Eastern Bloc. While the Cold War never escalated into direct military conflict between the superpowers, Europe became the primary theater for political, economic, and military standoffs, shaping the continent's post-war trajectory.\n\n" +
  "The division of Europe began with the aftermath of World War II. The continent was split into Western democracies under American influence and Eastern communist states under Soviet control. Germany became a focal point of Cold War tensions, with the division of the country into East Germany (GDR) and West Germany (FRG) symbolized by the Berlin Wall, built in 1961 to prevent East Germans from fleeing to the West.\n\n" +
  "Key events during this period included:\n" +
  "- The Berlin Blockade (1948–1949): The Soviet Union attempted to cut off access to West Berlin, prompting the Western Allies to organize the Berlin Airlift, which delivered vital supplies to the city's residents.\n" +
  "- The Hungarian Uprising (1956): A spontaneous revolt against Soviet control was brutally suppressed by the Red Army, highlighting the limits of resistance in Eastern Europe.\n" +
  "- The Prague Spring (1968): Czechoslovakia's attempt at liberal reforms under Alexander Dubček was crushed by Warsaw Pact forces, reaffirming Soviet dominance in the region.\n" +
  "- NATO and the Warsaw Pact: Europe became heavily militarized, with both sides amassing troops and nuclear weapons. This standoff included crises such as the deployment of intermediate-range nuclear missiles in the 1980s, leading to widespread anti-nuclear protests.\n\n" +
  "Cultural and economic differences between the blocs were stark. Western Europe experienced a post-war economic boom, aided by the Marshall Plan and the development of the European Economic Community (EEC), while Eastern Europe lagged behind under centrally planned economies. Dissatisfaction with communist regimes grew, culminating in a wave of resistance movements by the 1980s.\n\n" +
  "The Cold War conflicts in Europe began to thaw in the late 1980s. Soviet leader Mikhail Gorbachev introduced reforms such as glasnost (openness) and perestroika (restructuring), signaling a shift in Soviet policy. The fall of the Berlin Wall in 1989 became a powerful symbol of the end of division in Europe. By 1991, the dissolution of the Soviet Union marked the formal conclusion of the Cold War.\n\n" +
  "The Cold War profoundly reshaped Europe. It left lasting scars in the form of economic disparities between East and West, but it also paved the way for European integration and cooperation. The legacy of Cold War conflicts remains evident in the political and cultural landscapes of modern Europe."
,
      keyBattles: ["Berlin Blockade", "Hungarian Uprising"],
      leaders: [
        "Harry Truman (USA)",
        "Joseph Stalin (USSR)",
        "John F. Kennedy (USA)"
      ],
      mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Cold_war_europe_military_alliances_map_en.png/582px-Cold_war_europe_military_alliances_map_en.png?20120520193611"
    },
    {
      id: 9,
      name: "Yugoslav Wars",
      startYear: 1991,
      endYear: 2001,
      description:
            "The Cold War conflicts in Europe (1947–1991) were a series of geopolitical tensions, proxy conflicts, and ideological confrontations between the United States and its NATO allies, and the Soviet Union and its Eastern Bloc. While the Cold War never escalated into direct military conflict between the superpowers, Europe became the primary theater for political, economic, and military standoffs, shaping the continent's post-war trajectory.\n\n" +
            "The division of Europe began with the aftermath of World War II. The continent was split into Western democracies under American influence and Eastern communist states under Soviet control. Germany became a focal point of Cold War tensions, with the division of the country into East Germany (GDR) and West Germany (FRG) symbolized by the Berlin Wall, built in 1961 to prevent East Germans from fleeing to the West.\n\n" +
            "Key events during this period included:\n" +
            "- The Berlin Blockade (1948–1949): The Soviet Union attempted to cut off access to West Berlin, prompting the Western Allies to organize the Berlin Airlift, which delivered vital supplies to the city's residents.\n" +
            "- The Hungarian Uprising (1956): A spontaneous revolt against Soviet control was brutally suppressed by the Red Army, highlighting the limits of resistance in Eastern Europe.\n" +
            "- The Prague Spring (1968): Czechoslovakia's attempt at liberal reforms under Alexander Dubček was crushed by Warsaw Pact forces, reaffirming Soviet dominance in the region.\n" +
            "- NATO and the Warsaw Pact: Europe became heavily militarized, with both sides amassing troops and nuclear weapons. This standoff included crises such as the deployment of intermediate-range nuclear missiles in the 1980s, leading to widespread anti-nuclear protests.\n\n" +
            "Cultural and economic differences between the blocs were stark. Western Europe experienced a post-war economic boom, aided by the Marshall Plan and the development of the European Economic Community (EEC), while Eastern Europe lagged behind under centrally planned economies. Dissatisfaction with communist regimes grew, culminating in a wave of resistance movements by the 1980s.\n\n" +
            "The Cold War conflicts in Europe began to thaw in the late 1980s. Soviet leader Mikhail Gorbachev introduced reforms such as glasnost (openness) and perestroika (restructuring), signaling a shift in Soviet policy. The fall of the Berlin Wall in 1989 became a powerful symbol of the end of division in Europe. By 1991, the dissolution of the Soviet Union marked the formal conclusion of the Cold War.\n\n" +
            "The Cold War profoundly reshaped Europe. It left lasting scars in the form of economic disparities between East and West, but it also paved the way for European integration and cooperation. The legacy of Cold War conflicts remains evident in the political and cultural landscapes of modern Europe."
          ,
      keyBattles: [
        "Siege of Sarajevo",
        "Battle of Vukovar",
        "Operation Storm"
      ],
      leaders: [
        "Slobodan Milošević (Serbia)",
        "Franjo Tuđman (Croatia)",
        "Alija Izetbegović (Bosnia)"
      ],
      mapUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Map_of_war_in_Yugoslavia%2C_1993.png"
                }
            ],
      },
      {
        name: "Asia",
        wars: [
          {
            id: 1,
            name: "First Sino-Japanese War",
            startYear: "1894",
            endYear: "1895",
            description:
              "The First Sino-Japanese War (1894–1895) was a conflict between the Qing Dynasty of China and the Empire of Japan over influence in Korea. The war marked the rise of Japan as a major regional power and highlighted the weaknesses of the Qing government.\n\n" +
              "The war began as both China and Japan sought to exert control over Korea, which was strategically important and nominally a vassal state of the Qing Empire. After a series of skirmishes, Japan launched a full-scale invasion, deploying its modernized army and navy to devastating effect.\n\n" +
              "Japanese forces achieved significant victories on land and sea, including the Battle of Pyongyang and the Battle of the Yalu River. The Qing military, plagued by corruption, poor logistics, and outdated technology, was unable to mount an effective resistance.\n\n" +
              "The Treaty of Shimonoseki in 1895 ended the war, granting Japan control over Taiwan, the Liaodong Peninsula (later ceded under foreign pressure), and recognition of Korea’s independence from China. The war’s outcome significantly weakened the Qing Dynasty and spurred reform movements in China, while Japan’s victory elevated its status as a modern imperial power in East Asia.\n\n" +
              "The First Sino-Japanese War was a precursor to further conflicts in the region, including the Russo-Japanese War and the Second Sino-Japanese War.",
            keyBattles: ["Battle of Pyongyang", "Battle of the Yalu River"],
            leaders: ["Li Hongzhang (China)", "Yamagata Aritomo (Japan)", "Itō Hirobumi (Japan)"],
            mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/First_Chinese_Japanese_war_map_of_battles.jpg/457px-First_Chinese_Japanese_war_map_of_battles.jpg",

          },
          {
          id: 2,
          name: "Second Sino-Japanese War",
          startYear: "1937",
          endYear: "1945",
          description:
            "The Second Sino-Japanese War (1937–1945) was a major conflict between the Republic of China and the Empire of Japan, beginning with Japan’s invasion of China and later merging into the global conflict of World War II. It was marked by widespread atrocities, including the Nanking Massacre, and significant resistance from Chinese forces supported by the Allies.\n\n" +
            "The war began with the Marco Polo Bridge Incident in 1937, escalating into full-scale hostilities. Japan quickly captured major cities, including Shanghai, Beijing, and Nanjing, but faced prolonged resistance in rural areas and from guerrilla forces. Despite initial advances, Japan struggled to secure control over vast Chinese territories.\n\n" +
            "Key campaigns included the Battle of Shanghai, the Battle of Wuhan, and the Hundred Regiments Offensive, showcasing the resilience of Chinese forces under Chiang Kai-shek and Mao Zedong. The war caused immense suffering, with millions of civilians killed, displaced, or subjected to forced labor.\n\n" +
            "The Second Sino-Japanese War ended in 1945 with Japan’s defeat in World War II. China emerged as one of the Allied victors but was left devastated by the conflict, paving the way for the Chinese Civil War between the Nationalists and Communists.\n\n" +
            "The war profoundly shaped modern East Asia, influencing the dynamics between China, Japan, and the rest of the world.",
          keyBattles: ["Battle of Shanghai", "Battle of Wuhan", "Nanking Massacre"],
          leaders: ["Chiang Kai-shek (China)", "Mao Zedong (China)", "Hideki Tojo (Japan)"],
          mapUrl: "https://cdn.britannica.com/37/64937-050-62DF3060/Japanese-much-Manchuria-coast-North-China-Plain-1941.jpg",
        },
        {
          id: 3,
          name: "Vietnam War",
          startYear: "1955",
          endYear: "1975",
          description:
            "The Vietnam War (1955–1975) was a protracted conflict in Southeast Asia, involving North Vietnam, supported by communist allies, and South Vietnam, backed primarily by the United States. It was both a civil war within Vietnam and a proxy war in the broader context of the Cold War.\n\n" +
            "The roots of the conflict lay in Vietnam’s struggle for independence from French colonial rule, culminating in the First Indochina War (1946–1954). After the French defeat, Vietnam was divided at the 17th parallel, with Ho Chi Minh’s communist government in the North and an anti-communist regime in the South. Tensions escalated into open conflict as North Vietnam sought to reunify the country under communism.\n\n" +
            "Key battles included the Tet Offensive, the Battle of Hue, and the Fall of Saigon. Despite massive U.S. military involvement, including aerial bombings and ground forces, North Vietnam’s persistence, along with widespread anti-war sentiment in the U.S., led to the eventual withdrawal of American troops in 1973.\n\n" +
            "The war ended in 1975 with the fall of Saigon, marking the reunification of Vietnam under communist rule. The conflict left a lasting legacy, with millions dead, widespread devastation in Vietnam, and significant political and cultural impacts worldwide.",
          keyBattles: ["Tet Offensive", "Battle of Hue", "Fall of Saigon"],
          leaders: ["Ho Chi Minh (North Vietnam)", "Nguyen Van Thieu (South Vietnam)", "Lyndon B. Johnson (USA)"],
          mapUrl: "https://cdn.britannica.com/29/78729-050-AC5EEAF5/map-North-and-South-Vietnam-communists-War.jpg",
        },

        {
          id: 4,
          name: "Mongol Conquests",
          startYear: "1206",
          endYear: "1368",
          description:
            "The Mongol Conquests (1206–1368) were a series of military campaigns led by Genghis Khan and his successors, resulting in the largest contiguous empire in history. These campaigns brought immense territorial expansion, connecting much of Asia, Europe, and the Middle East.\n\n" +
            "Genghis Khan unified the Mongol tribes in 1206, initiating a campaign of expansion that targeted Central Asia, China, Persia, and Eastern Europe. The Mongols employed innovative military tactics, exceptional mobility, and psychological warfare to defeat larger, well-established armies.\n\n" +
            "Key victories included the conquest of the Khwarezmian Empire, the defeat of the Jin Dynasty in China, and the capture of Baghdad in 1258, marking the end of the Abbasid Caliphate. However, the invasions also caused massive destruction, with entire cities destroyed and populations massacred.\n\n" +
            "The Mongol Empire fragmented in the late 13th century, but its legacy endured through trade, cultural exchanges, and the diffusion of technologies and ideas along the Silk Road.",
          keyBattles: ["Battle of the Indus", "Siege of Baghdad", "Battle of Xiangyang"],
          leaders: ["Genghis Khan", "Kublai Khan", "Subutai"],
          mapUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Mongol_Empire_map.gif",
        },
        {
          id: 5,
          name: "Korean War",
          startYear: "1950",
          endYear: "1953",
          description:
            "The Korean War (1950–1953) was a conflict between North Korea, supported by China and the Soviet Union, and South Korea, backed by the United Nations, primarily the United States. It was one of the first major conflicts of the Cold War and set the stage for ongoing tensions on the Korean Peninsula.\n\n" +
            "The war began on June 25, 1950, when North Korea invaded South Korea. United Nations forces intervened, pushing the North Koreans back across the 38th parallel. However, China's entry into the war in late 1950 turned the tide, leading to a prolonged stalemate.\n\n" +
            "Major battles included the Battle of Incheon, which allowed UN forces to recapture Seoul, and the Battle of the Chosin Reservoir, where Chinese forces inflicted heavy casualties. The war ended in 1953 with an armistice agreement, leaving the Korean Peninsula divided along the demilitarized zone (DMZ).\n\n" +
            "The Korean War resulted in millions of casualties and devastated the peninsula. It solidified the division between North and South Korea, with the North adopting a communist regime and the South embracing capitalism and democracy.",
          keyBattles: ["Battle of Incheon", "Battle of Pusan Perimeter", "Battle of Chosin Reservoir"],
          leaders: ["Kim Il-sung (North Korea)", "Douglas MacArthur (USA)", "Mao Zedong (China)"],
          mapUrl: "https://cdn.britannica.com/20/73420-050-3472C505/Korean-War-map-August-1950.jpg?w=300",
        },
        {
          id: 6,
          name: "Taiping Rebellion",
          startYear: "1850",
          endYear: "1864",
          description:
            "The Taiping Rebellion (1850–1864) was a massive civil war in southern China, led by Hong Xiuquan, who claimed to be the brother of Jesus Christ. The rebellion aimed to overthrow the Qing Dynasty and establish a 'Heavenly Kingdom of Great Peace.'\n\n" +
            "Hong Xiuquan’s movement attracted millions of followers, including peasants and disenfranchised groups, and controlled significant parts of southern China, including Nanjing, which served as its capital. The rebellion was marked by extreme violence, both in battles and in the suppression of dissent within the Taiping regime.\n\n" +
            "Key events included the Siege of Nanjing and the final Qing victory with the help of Western-trained armies such as the Ever Victorious Army, led by Charles Gordon. The rebellion ultimately failed, but it caused immense devastation, with an estimated death toll of 20–30 million.\n\n" +
            "The Taiping Rebellion weakened the Qing Dynasty and highlighted the deep social and economic inequalities in China, contributing to further unrest and the eventual fall of the dynasty in the early 20th century.",
          keyBattles: ["Siege of Nanjing", "Battle of Tianjing", "Second Capture of Wuhan"],
          leaders: ["Hong Xiuquan", "Zeng Guofan", "Charles Gordon"],
          mapUrl: "https://upload.wikimedia.org/wikipedia/commons/2/23/Taiping_Heavenly_Kingdom_map.svg",
        },

        {
          id: 7,
          name: "Indian Rebellion of 1857",
          startYear: "1857",
          endYear: "1858",
          description:
            "The Indian Rebellion of 1857, also known as the Sepoy Mutiny or the First War of Indian Independence, was a widespread uprising against British colonial rule in India. The rebellion was sparked by grievances among Indian soldiers (sepoys) in the British East India Company’s army but quickly spread to civilians and regional rulers.\n\n" +
            "Key causes included cultural and religious insensitivity, such as the introduction of rifle cartridges rumored to be greased with cow and pig fat, which offended both Hindu and Muslim soldiers. Economic exploitation, land policies, and the annexation of princely states further fueled resentment.\n\n" +
            "Major events included the Siege of Delhi, the Siege of Lucknow, and the Massacre of Kanpur. Despite initial successes, the rebellion was crushed by British forces, aided by loyal Indian troops and reinforcements from Britain. The East India Company was dissolved, and India came under direct rule by the British Crown.\n\n" +
            "The rebellion had profound consequences for India and Britain. It led to significant reforms in governance, military organization, and social policies. However, it also deepened racial divisions and set the stage for future nationalist movements seeking independence.",
          keyBattles: ["Siege of Delhi", "Siege of Lucknow", "Battle of Kanpur"],
          leaders: ["Rani Lakshmibai", "Bahadur Shah II", "Major-General Henry Havelock"],
          mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Indian_revolt_of_1857_states_map.svg/530px-Indian_revolt_of_1857_states_map.svg.png",
        }
        ],
      },
      {
        name: "Americas",
        wars: [
          {
            id: 1,
            name: "American Revolutionary War",
            startYear: "1775",
            endYear: "1783",
            description:
              "The American Revolutionary War (1775–1783), also known as the War of Independence, was a conflict between Great Britain and its thirteen North American colonies, which declared independence as the United States of America. The war arose from colonial resistance to British taxation and governance, symbolized by events like the Boston Tea Party and the First Continental Congress.\n\n" +
              "Major battles included the Battle of Saratoga, which convinced France to enter the war as an ally of the colonies, and the Siege of Yorktown, which marked the decisive defeat of British forces under Lord Cornwallis. The Treaty of Paris in 1783 formally ended the war, recognizing American independence.\n\n" +
              "The war reshaped global politics, weakened Britain’s global dominance, and inspired other independence movements worldwide. It also marked the beginning of a new era for the United States, laying the groundwork for its constitutional democracy.",
            keyBattles: ["Battle of Saratoga", "Siege of Yorktown"],
            leaders: ["George Washington (USA)", "King George III (Britain)", "Marquis de Lafayette (France)"],
            mapUrl: "https://www.emersonkent.com/images/american_revolution_campaigns.jpg",
          },
          {
            id: 2,
            name: "War of 1812",
            startYear: "1812",
            endYear: "1815",
            description:
              "The War of 1812 (1812–1815) was a conflict between the United States and Great Britain, fueled by British restrictions on American trade, impressment of American sailors, and territorial ambitions in North America. The war also involved Indigenous nations allied with both sides.\n\n" +
              "Key events included the burning of Washington, D.C., by British forces, the defense of Fort McHenry, which inspired 'The Star-Spangled Banner,' and the Battle of New Orleans, a major American victory led by Andrew Jackson. Despite widespread fighting, the Treaty of Ghent ended the war in a stalemate, restoring pre-war borders.\n\n" +
              "The war had mixed consequences. It fostered a sense of national identity in the United States, weakened Indigenous resistance in the Northwest Territory, and bolstered Andrew Jackson’s political career. For Britain, the war was a secondary theater during the Napoleonic Wars, but it solidified its control over Canada.",
            keyBattles: ["Battle of New Orleans", "Burning of Washington", "Siege of Fort McHenry"],
            leaders: ["James Madison (USA)", "Sir Isaac Brock (Britain)", "Andrew Jackson (USA)"],
            mapUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4a/United_States_1812-05-1812-06.png",
          },
          {
            id: 3,
            name: "Mexican-American War",
            startYear: "1846",
            endYear: "1848",
            description:
              "The Mexican-American War (1846–1848) was a conflict between the United States and Mexico, driven by disputes over the annexation of Texas and territorial ambitions of the United States. It was part of the larger Manifest Destiny ideology.\n\n" +
              "The war began after border skirmishes near the Rio Grande. U.S. forces, led by General Zachary Taylor and General Winfield Scott, achieved decisive victories, including the capture of Mexico City. The Treaty of Guadalupe Hidalgo ended the war, with Mexico ceding vast territories, including modern-day California, Arizona, and New Mexico, to the United States.\n\n" +
              "The war significantly expanded U.S. territory but exacerbated tensions over the expansion of slavery, contributing to the American Civil War. In Mexico, the war deepened internal divisions and weakened national unity.",
            keyBattles: ["Battle of Buena Vista", "Siege of Veracruz", "Capture of Mexico City"],
            leaders: ["James K. Polk (USA)", "Antonio López de Santa Anna (Mexico)", "Zachary Taylor (USA)"],
            mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Mexican–American_War_%28without_Scott%27s_Campaign%29-en.svg/1280px-Mexican–American_War_%28without_Scott%27s_Campaign%29-en.svg.png",
          },
          {
            id: 4,
            name: "American Civil War",
            startYear: "1861",
            endYear: "1865",
            description:
              "The American Civil War (1861–1865) was a civil war between the United States (Union) and the Confederate States of America, formed by eleven Southern states that seceded from the Union. The war was primarily fought over issues of slavery and states’ rights.\n\n" +
              "Key events included the Battle of Gettysburg, often considered the war’s turning point, and General Sherman's March to the Sea, which devastated the South’s infrastructure and morale. The war concluded with General Robert E. Lee’s surrender at Appomattox Court House in 1865.\n\n" +
              "The Civil War remains the deadliest conflict in American history, with over 600,000 deaths. It ended slavery in the United States and preserved the Union, but it left the South economically devastated and socially fractured for decades.",
            keyBattles: ["Battle of Gettysburg", "Battle of Antietam", "Sherman’s March to the Sea"],
            leaders: ["Abraham Lincoln (Union)", "Robert E. Lee (Confederacy)", "Ulysses S. Grant (Union)"],
            mapUrl: "https://cdn.britannica.com/55/89955-004-200D00E3.jpg",
          },
          {
            id: 5,
            name: "Spanish-American War",
            startYear: "1898",
            endYear: "1898",
            description:
              "The Spanish-American War (1898) was a brief but impactful conflict between the United States and Spain, primarily fought over Cuba’s struggle for independence. The explosion of the USS Maine in Havana Harbor was a key event that galvanized U.S. public opinion against Spain.\n\n" +
              "Key victories, such as the Battle of Manila Bay and the Battle of San Juan Hill, showcased the growing power of the U.S. Navy and the strategic use of volunteer forces like the Rough Riders. The Treaty of Paris ended the war, granting the United States control over Puerto Rico, Guam, and the Philippines, and establishing Cuba as a U.S. protectorate.\n\n" +
              "The war marked the United States’ emergence as a global power and its entry into imperial politics, while Spain’s defeat signaled the decline of its colonial empire.",
            keyBattles: ["Battle of Manila Bay", "Battle of San Juan Hill"],
            leaders: ["William McKinley (USA)", "Admiral George Dewey (USA)", "Pascual Cervera (Spain)"],
            mapUrl: "https://www.emersonkent.com/images/world_map_1898.jpg",
          },
        ],
      },
      {

      name: "Middle East",
      wars:
       [
      {
        id: 1,
        name: "Crusades",
        startYear: "1096",
        endYear: "1291",
        description:
          "The Crusades (1096–1291) were a series of religious wars initiated by European Christians to reclaim Jerusalem and other holy sites in the Levant from Muslim control. They were marked by cultural exchanges, brutal sieges, and shifting alliances.\n\n" +
          "Key events included the First Crusade, which captured Jerusalem in 1099, and the Third Crusade, led by Richard the Lionheart against Saladin. The Crusades ended with the fall of the last Christian stronghold, Acre, in 1291. The conflicts significantly influenced both European and Middle Eastern societies, leaving a legacy of religious and cultural interaction and tension.",
        keyBattles: ["Siege of Jerusalem (1099)", "Battle of Hattin (1187)"],
        leaders: ["Saladin", "Richard the Lionheart", "Godfrey of Bouillon"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Syrian_Civil_War_map_%28ISW-CTP%29.svg/1200px-Syrian_Civil_War_map_%28ISW-CTP%29.svg.png",
      },
      {
        id: 2,
        name: "Arab-Israeli Wars",
        startYear: "1948",
        endYear: "Present",
        description:
          "The Arab-Israeli Wars refer to a series of conflicts between Israel and neighboring Arab states, beginning with the 1948 Arab-Israeli War, triggered by the creation of the state of Israel. Major wars include the Six-Day War (1967), in which Israel captured the Sinai Peninsula, West Bank, and Golan Heights, and the Yom Kippur War (1973).\n\n" +
          "These conflicts have been driven by territorial disputes, refugee crises, and religious tensions. Despite peace treaties with Egypt (1979) and Jordan (1994), the Israeli-Palestinian conflict remains unresolved, with sporadic violence continuing into the present.",
        keyBattles: ["Battle of Latrun (1948)", "Six-Day War (1967)", "Yom Kippur War (1973)"],
        leaders: ["David Ben-Gurion", "Gamal Abdel Nasser", "Golda Meir"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/1948_Arab_Israeli_War_-_May_15-June_10.svg/250px-1948_Arab_Israeli_War_-_May_15-June_10.svg.png",
      },
      {
        id: 3,
        name: "Iran-Iraq War",
        startYear: "1980",
        endYear: "1988",
        description:
          "The Iran-Iraq War (1980–1988) was a prolonged and devastating conflict between Iran and Iraq, initiated by Iraqi leader Saddam Hussein’s desire to assert dominance in the Persian Gulf and counter the Iranian Revolution.\n\n" +
          "The war featured large-scale trench warfare, chemical weapons, and attacks on civilian infrastructure. Despite immense human and economic losses, neither side achieved a decisive victory. The war ended in a stalemate, with a UN-brokered ceasefire in 1988, leaving the region politically unstable.",
        keyBattles: ["Battle of Khorramshahr", "Operation Ramadan", "Al-Faw Peninsula Campaign"],
        leaders: ["Saddam Hussein (Iraq)", "Ruhollah Khomeini (Iran)"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/War_of_the_Cities_map.png/220px-War_of_the_Cities_map.png",
      },
      {
        id: 4,
        name: "Gulf War",
        startYear: "1990",
        endYear: "1991",
        description:
          "The Gulf War (1990–1991), also known as Operation Desert Storm, was a conflict triggered by Iraq's invasion of Kuwait. A US-led coalition, authorized by the UN, launched a military campaign to liberate Kuwait and counter Iraq's aggression.\n\n" +
          "The war was marked by high-tech warfare, including airstrikes and precision bombing. The rapid success of coalition forces highlighted the dominance of modern military technology. The Gulf War reshaped geopolitics in the Middle East but left Saddam Hussein in power, contributing to future instability.",
        keyBattles: ["Battle of Kuwait City", "Highway of Death"],
        leaders: ["George H.W. Bush (USA)", "Norman Schwarzkopf (USA)", "Saddam Hussein (Iraq)"],
        mapUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-aJEKBiiV3xaLzxP7A0BVvqLucfbXmnVIw&s",
      },
      {
        id: 5,
        name: "Syrian Civil War",
        startYear: "2011",
        endYear: "Present",
        description:
          "The Syrian Civil War (2011–present) is an ongoing conflict that began with protests during the Arab Spring and escalated into a multifaceted war involving Syrian government forces, opposition groups, ISIS, and international powers.\n\n" +
          "Key issues include the use of chemical weapons, the humanitarian crisis, and the involvement of foreign actors like Russia, Iran, and the United States. The war has devastated Syria, with millions displaced and hundreds of thousands killed, leaving the country fragmented and unstable.",
        keyBattles: ["Battle of Aleppo", "Battle of Raqqa"],
        leaders: ["Bashar al-Assad (Syria)", "Abu Bakr al-Baghdadi (ISIS)", "Vladimir Putin (Russia)"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Syrian_Civil_War_map_%28ISW-CTP%29.svg/1280px-Syrian_Civil_War_map_%28ISW-CTP%29.svg.png",
      },
    ]
  },

  {
    name: "Africa",
    wars: [
      {
        id: 1,
        name: "Punic Wars",
        startYear: "264 BCE",
        endYear: "146 BCE",
        description:
          "The Punic Wars (264–146 BCE) were a series of three wars fought between the Roman Republic and the Carthaginian Empire, centered in North Africa. These wars determined control over the western Mediterranean and ended with the destruction of Carthage. Hannibal’s daring invasion of Italy during the Second Punic War remains one of the most famous military campaigns in history.",
        keyBattles: ["Battle of Cannae", "Battle of Zama"],
        leaders: ["Hannibal (Carthage)", "Scipio Africanus (Rome)"],
        mapUrl: "https://cdn.britannica.com/42/1042-050-F1D06D1D/Mediterranean-Punic-Wars.jpg",
      },
      {
        id: 2,
        name: "Zulu Wars",
        startYear: "1879",
        endYear: "1879",
        description:
          "The Zulu Wars (1879) were a conflict between the British Empire and the Zulu Kingdom in southern Africa. The war began after British demands for Zulu disarmament and territorial concessions were rejected. Despite early Zulu victories, such as the Battle of Isandlwana, British reinforcements ultimately overwhelmed the Zulu forces, leading to the kingdom’s annexation.",
        keyBattles: ["Battle of Isandlwana", "Battle of Ulundi"],
        leaders: ["Cetshwayo (Zulu)", "Lord Chelmsford (UK)"],
        mapUrl: "https://cdn.britannica.com/38/169538-004-17E50BCA.jpg",
      },
      {
        id: 3,
        name: "Boer Wars",
        startYear: "1880",
        endYear: "1902",
        description:
          "The Boer Wars (1880–1881, 1899–1902) were two conflicts between the British Empire and the Afrikaner settlers (Boers) in South Africa. The wars were fought over British expansionism and control of the resource-rich Boer republics. The Second Boer War introduced guerrilla tactics and scorched-earth policies, ending with British victory and the incorporation of the Boer republics into the Union of South Africa.",
        keyBattles: ["Siege of Mafeking", "Battle of Spion Kop"],
        leaders: ["Paul Kruger (Boers)", "Lord Kitchener (UK)"],
        mapUrl: "https://www.warmuseum.ca/cwm/exhibitions/boer/images/maps/boerwar_map.jpg",
      },
      {
        id: 4,
        name: "Ethiopian-Adal War",
        startYear: "1529",
        endYear: "1543",
        description:
          "The Ethiopian-Adal War (1529–1543) was a conflict between the Christian Ethiopian Empire and the Muslim Adal Sultanate, led by Ahmad ibn Ibrahim al-Ghazi, also known as Ahmad Gran. The war featured significant battles and foreign intervention, with Portuguese forces aiding Ethiopia and the Ottoman Empire supporting Adal. The war ended with the death of Ahmad Gran and Ethiopia’s victory, though it left the region devastated.",
        keyBattles: ["Battle of Shimbra Kure", "Battle of Wayna Daga"],
        leaders: ["Ahmad Gran (Adal)", "Emperor Gelawdewos (Ethiopia)"],
        mapUrl: "https://cdn.britannica.com/25/25-004-F459702F/Ethiopia-map-boundaries-cities-locator.jpg",
      },
      {
        id: 5,
        name: "Mfecane",
        startYear: "1815",
        endYear: "1840",
        description:
          "The Mfecane (1815–1840), also known as the 'crushing' or 'scattering,' was a period of widespread chaos and warfare among indigenous groups in southern Africa. It was triggered by the rise of the Zulu Kingdom under Shaka Zulu and the subsequent displacement of communities through conquest and forced migration. The Mfecane reshaped the region’s demographics and political landscape, creating new states such as the Sotho and Swazi kingdoms.",
        keyBattles: ["Battle of Gqokli Hill", "Conflict at Mhlatuze River"],
        leaders: ["Shaka Zulu", "Moshoeshoe I (Lesotho)"],
        mapUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1KflqVU8Yp9TocWKqNvFINPq04gS9ZzV0Q&s",
      },
      {
        id: 6,
        name: "Nigerian Civil War",
        startYear: "1967",
        endYear: "1970",
        description:
          "The Nigerian Civil War (1967–1970), also known as the Biafran War, was a conflict between the Nigerian government and the secessionist Republic of Biafra. The war arose from ethnic tensions, political instability, and economic disparities. It resulted in a humanitarian crisis, with millions of deaths from starvation and conflict. The war ended with Biafra’s reintegration into Nigeria.",
        keyBattles: ["Battle of Abagana", "Fall of Enugu"],
        leaders: ["Odumegwu Ojukwu (Biafra)", "Yakubu Gowon (Nigeria)"],
        mapUrl: "https://cdn.britannica.com/23/61723-004-4EDF3E92/Nigeria-boundaries-1960.jpg",
      },
      {
        id: 7,
        name: "South African Border War",
        startYear: "1966",
        endYear: "1989",
        description:
          "The South African Border War (1966–1989), also known as the Namibian War of Independence, was fought between South Africa and the South West Africa People’s Organization (SWAPO), with involvement from Angola and Cuba. The conflict centered on Namibia’s struggle for independence and the Cold War rivalries in southern Africa. The war ended with the independence of Namibia in 1990.",
        keyBattles: ["Battle of Cuito Cuanavale"],
        leaders: ["Sam Nujoma (SWAPO)", "Pieter Botha (South Africa)"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/NamibianWar1978.PNG/220px-NamibianWar1978.PNG",
      },
      {
        id: 8,
        name: "Rwandan Genocide",
        startYear: "1994",
        endYear: "1994",
        description:
          "The Rwandan Genocide (1994) was a mass slaughter of Tutsi by Hutu extremists, occurring over 100 days and resulting in the deaths of an estimated 800,000 people. The genocide was fueled by deep-rooted ethnic tensions, colonial legacies, and political instability. The conflict ended when the Rwandan Patriotic Front, led by Paul Kagame, overthrew the Hutu government.",
        keyBattles: ["Battle of Kigali"],
        leaders: ["Paul Kagame (RPF)", "Juvénal Habyarimana (Rwanda)"],
        mapUrl: "https://www.ushmm.org/adaptivemedia/rendition?id=a9b4d79b780d820495c325e0671b623975569104&op=webp",
      },
      {
        id: 9,
        name: "Libyan Civil War",
        startYear: "2011",
        endYear: "Present",
        description:
          "The Libyan Civil War (2011–present) began as a popular uprising against Muammar Gaddafi’s regime during the Arab Spring. NATO intervention helped rebels topple Gaddafi, but Libya descended into chaos as rival factions, Islamist groups, and foreign powers vied for control. The ongoing conflict has created a humanitarian crisis and destabilized the region.",
        keyBattles: ["Battle of Tripoli", "Battle of Sirte"],
        leaders: ["Muammar Gaddafi", "Fayez al-Sarraj"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Libyan_Civil_War.svg/1280px-Libyan_Civil_War.svg.png",
      },
    ],
  },
  {
    name: "Oceania",
    wars: [
      {
        id: 1,
        name: "New Zealand Wars",
        startYear: "1845",
        endYear: "1872",
        description:
          "The New Zealand Wars (1845–1872) were a series of conflicts between the British Crown and Māori tribes over land ownership and sovereignty. These wars arose after the Treaty of Waitangi (1840) and the increasing encroachment of British settlers on Māori land. Despite Māori resistance, including the use of innovative fortifications called pā, the British forces ultimately subdued the tribes, resulting in significant land confiscations and long-lasting grievances.",
        keyBattles: ["Battle of Ruapekapeka", "Battle of Gate Pā"],
        leaders: ["Hone Heke (Māori)", "George Grey (UK)"],
        mapUrl: "https://cdn.britannica.com/63/62463-004-D7D3E70C.jpg",
      },
      {
        id: 2,
        name: "World War II Pacific Theater",
        startYear: "1941",
        endYear: "1945",
        description:
          "The Pacific Theater of World War II (1941–1945) involved a series of battles between the Allied Powers, led by the United States, Australia, and New Zealand, against the Empire of Japan. Key events included Japan’s attack on Pearl Harbor, the Battle of Midway, and the island-hopping campaigns that culminated in Japan’s surrender.\n\n" +
          "The war had a profound impact on Oceania, with significant battles fought in the Solomon Islands, Papua New Guinea, and other Pacific territories. The conflict reshaped the geopolitical landscape of the region and marked the rise of the United States as a dominant Pacific power.",
        keyBattles: ["Battle of Midway", "Battle of Guadalcanal", "Battle of Coral Sea"],
        leaders: ["Douglas MacArthur (USA)", "Isoroku Yamamoto (Japan)"],
        mapUrl: "https://media.defense.gov/2011/Jun/03/2000572719/1200/1200/0/050607-F-1234P-001.JPG",
      },
      {
        id: 3,
        name: "Bougainville Civil War",
        startYear: "1988",
        endYear: "1998",
        description:
          "The Bougainville Civil War (1988–1998) was a conflict in Papua New Guinea sparked by disputes over resource exploitation at the Panguna copper mine and demands for Bougainville's independence. The conflict pitted Bougainville Revolutionary Army (BRA) fighters against the Papua New Guinea Defence Force, resulting in widespread displacement and civilian casualties.\n\n" +
          "A peace agreement was eventually signed in 2001, granting Bougainville autonomy and the promise of a future independence referendum, which was held in 2019, with overwhelming support for independence.",
        keyBattles: ["Siege of Panguna"],
        leaders: ["Francis Ona (BRA)", "Julius Chan (Papua New Guinea)"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Bvdistricts.svg/1200px-Bvdistricts.svg.png",
      },
      {
        id: 4,
        name: "Fiji Coup Conflicts",
        startYear: "1987",
        endYear: "2006",
        description:
          "Fiji experienced a series of political coups between 1987 and 2006, driven by ethnic tensions between indigenous Fijians and Indo-Fijians. The coups disrupted Fiji’s democratic processes and led to periods of military rule and political instability.\n\n" +
          "Key events included the 1987 coups led by Sitiveni Rabuka and the 2006 coup led by Frank Bainimarama. The conflicts highlighted Fiji's struggles with ethnic divisions, governance, and national identity.",
        keyBattles: ["1987 Coup", "2006 Military Takeover"],
        leaders: ["Sitiveni Rabuka", "Frank Bainimarama"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Oceania_ISO_3166-1.svg/640px-Oceania_ISO_3166-1.svg.png",
      },
      {
        id: 5,
        name: "Timor-Leste Independence War",
        startYear: "1975",
        endYear: "1999",
        description:
          "The Timor-Leste Independence War (1975–1999) was a conflict between Timorese independence fighters and Indonesian forces following Indonesia’s invasion of East Timor in 1975. The war was marked by human rights abuses, including massacres and forced displacement.\n\n" +
          "The conflict ended with a UN-backed independence referendum in 1999, resulting in East Timor’s independence in 2002. The war left a profound legacy, with widespread devastation and ongoing reconciliation efforts.",
        keyBattles: ["Battle of Dili", "Santa Cruz Massacre"],
        leaders: ["Xanana Gusmão (Timor-Leste)", "Suharto (Indonesia)"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Timor_-_Indonesian_Invasion.png/1280px-Timor_-_Indonesian_Invasion.png",
      },
    ],
  },

  {
    name: "South Asia",
    wars: [
      {
        id: 1,
        name: "Maurya-Kalinga War",
        startYear: "262 BCE",
        endYear: "261 BCE",
        description:
          "The Maurya-Kalinga War (262–261 BCE) was a devastating conflict between the Maurya Empire, led by Emperor Ashoka, and the state of Kalinga (modern-day Odisha, India). It was one of the bloodiest wars in Indian history, resulting in massive casualties and the annexation of Kalinga by the Mauryan Empire.\n\n" +
          "The war deeply impacted Ashoka, leading to his conversion to Buddhism and the promotion of nonviolence and Dharma throughout his empire. The Kalinga Edicts stand as testimony to Ashoka’s remorse and his efforts to govern with compassion.",
        keyBattles: ["Battle of Kalinga"],
        leaders: ["Ashoka (Maurya)", "Unknown (Kalinga)"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Chandragupta_Maurya_Empire.png",
      },
      {
        id: 2,
        name: "Delhi Sultanate Conquests",
        startYear: "1206",
        endYear: "1526",
        description:
          "The Delhi Sultanate Conquests (1206–1526) were a series of military campaigns that established Muslim rule in northern India. The Sultanate’s rulers, including Qutb-ud-din Aibak and Alauddin Khalji, expanded their territory through conquest, subjugating Hindu kingdoms and tribal regions.\n\n" +
          "Key campaigns included the defeat of the Rajputs, the southern expeditions of Alauddin Khalji, and the resistance of regional kingdoms like the Vijayanagara Empire. The Sultanate laid the foundation for subsequent Islamic rule in India.",
        keyBattles: ["Battle of Tarain", "Siege of Ranthambore"],
        leaders: ["Alauddin Khalji", "Qutb-ud-din Aibak"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Map_of_the_Tughlaqs.png/1280px-Map_of_the_Tughlaqs.png",
      },
      {
        id: 3,
        name: "Mughal-Maratha Wars",
        startYear: "1680",
        endYear: "1707",
        description:
          "The Mughal-Maratha Wars (1680–1707) were a series of conflicts between the Mughal Empire and the Maratha Confederacy in central and western India. The wars began during the reign of Emperor Aurangzeb, who sought to crush the growing power of the Marathas under leaders like Shivaji and Sambhaji.\n\n" +
          "The conflict drained the Mughal treasury and contributed to the decline of the empire, while the Marathas emerged as a dominant power in India. Key events included the Siege of Bijapur and the relentless guerrilla tactics employed by the Marathas.",
        keyBattles: ["Siege of Bijapur", "Battle of Salher"],
        leaders: ["Aurangzeb (Mughal)", "Shivaji (Maratha)"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Early_Maratha_History-Joppen.jpg/1280px-Early_Maratha_History-Joppen.jpg",
      },
      {
        id: 4,
        name: "Anglo-Sikh Wars",
        startYear: "1845",
        endYear: "1849",
        description:
          "The Anglo-Sikh Wars (1845–1849) were a series of conflicts between the British East India Company and the Sikh Empire in Punjab. The First Anglo-Sikh War ended with British victory and the Treaty of Lahore, while the Second Anglo-Sikh War led to the annexation of Punjab into British India.\n\n" +
          "The wars marked the end of Sikh sovereignty and the integration of Punjab into the British colonial administration. The Sikh army, known as the Khalsa, displayed remarkable valor, leaving a legacy of resistance.",
        keyBattles: ["Battle of Ferozeshah", "Battle of Gujrat"],
        leaders: ["Maharaja Ranjit Singh (Sikh Empire)", "Sir Hugh Gough (British)"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/Sketch_Map_to_Illustrate_the_First_Anglo-Sikh_War_from_%27A_Short_History_of_the_Sikhs%27_%281915%29%2C_by_Charles_Herbert_Payne.jpg",
      },
      {
        id: 5,
        name: "Indian Rebellion of 1857",
        startYear: "1857",
        endYear: "1858",
        description:
          "The Indian Rebellion of 1857, also known as the Sepoy Mutiny or the First War of Indian Independence, was a widespread uprising against British colonial rule in India. Sparked by grievances among Indian soldiers (sepoys) in the British East India Company’s army, the rebellion quickly spread to civilians and regional rulers.\n\n" +
          "The rebellion was suppressed, and India came under direct rule by the British Crown, leading to significant governance and military reforms. The rebellion remains a pivotal moment in India’s struggle for independence.",
        keyBattles: ["Siege of Delhi", "Siege of Lucknow", "Battle of Kanpur"],
        leaders: ["Rani Lakshmibai", "Bahadur Shah II"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Indian_revolt_of_1857_states_map.svg/530px-Indian_revolt_of_1857_states_map.svg.png",
      },
      {
        id: 6,
        name: "Bangladesh Liberation War",
        startYear: "1971",
        endYear: "1971",
        description:
          "The Bangladesh Liberation War (1971) was a conflict between East Pakistan (now Bangladesh) and West Pakistan (now Pakistan) over political, cultural, and economic disparities. The war escalated into a full-scale independence movement, supported by India after the Pakistan military's brutal suppression of Bengali aspirations.\n\n" +
          "The war ended with the defeat of West Pakistan and the creation of Bangladesh as an independent nation. The conflict left a lasting impact on South Asia, with millions of casualties and refugees.",
        keyBattles: ["Battle of Dhaka"],
        leaders: ["Sheikh Mujibur Rahman", "Yahya Khan"],
        mapUrl: "https://origins.osu.edu/sites/default/files/migrated_files/732px-Partition_of_India_1947_en.svg.png",
      },
      {
        id: 7,
        name: "Kashmir Conflict",
        startYear: "1947",
        endYear: "Present",
        description:
          "The Kashmir Conflict (1947–present) is an ongoing territorial dispute between India and Pakistan, with China also claiming parts of the region. The conflict began after the partition of British India, when the princely state of Jammu and Kashmir acceded to India amid Pakistani military intervention.\n\n" +
          "The conflict has led to multiple wars, including the Indo-Pakistani Wars of 1947–1948, 1965, and 1999, as well as insurgencies and cross-border skirmishes. Efforts to resolve the issue have repeatedly failed, leaving Kashmir as one of the most militarized zones in the world.",
        keyBattles: ["Indo-Pakistani War of 1947", "Kargil War"],
        leaders: ["Hari Singh (Jammu and Kashmir)", "Muhammad Ali Jinnah (Pakistan)", "Jawaharlal Nehru (India)"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Kashmir_region._LOC_2003626427_-_showing_sub-regions_administered_by_different_countries.jpg/1280px-Kashmir_region._LOC_2003626427_-_showing_sub-regions_administered_by_different_countries.jpg",
      },
    ],
  },
  {
    name: "Central Asia",
    wars: [
      {
        id: 1,
        name: "Persian-Achaemenid Conquests",
        startYear: "550 BCE",
        endYear: "330 BCE",
        description:
          "The Persian-Achaemenid Conquests (550–330 BCE) were led by Cyrus the Great and later Persian kings, expanding the Achaemenid Empire into Central Asia. The campaigns brought regions like Bactria, Sogdia, and Parthia under Persian control, facilitating trade along the Silk Road and cultural exchanges.\n\n" +
          "The Achaemenids established a network of satrapies (provinces) and infrastructure, promoting stability and connectivity across the empire. These regions remained integral to Persian influence until Alexander the Great’s invasion in 330 BCE.",
        keyBattles: ["Battle of Bactria"],
        leaders: ["Cyrus the Great", "Darius I"],
        mapUrl: "https://www.worldhistory.org/uploads/images/16107.png?v=1711511463-1706686944",
      },
      {
        id: 2,
        name: "Mongol Conquests",
        startYear: "1206",
        endYear: "1368",
        description:
          "The Mongol Conquests (1206–1368) were a series of military campaigns led by Genghis Khan and his successors, which significantly impacted Central Asia. The Mongols defeated major powers like the Khwarezmian Empire, establishing control over the region and integrating it into the vast Mongol Empire.\n\n" +
          "The campaigns devastated cities such as Samarkand and Bukhara but also facilitated trade and cultural exchange along the Silk Road. The Mongol period left a lasting legacy in Central Asia’s history and culture.",
        keyBattles: ["Siege of Bukhara", "Battle of the Indus"],
        leaders: ["Genghis Khan", "Subutai"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Mongol_Empire_map.gif",
      },
      {
        id: 3,
        name: "Timur's Campaigns",
        startYear: "1370",
        endYear: "1405",
        description:
          "Timur's Campaigns (1370–1405), led by Timur (Tamerlane), were a series of military expeditions aimed at expanding his empire across Central Asia, the Middle East, and South Asia. Timur claimed descent from Genghis Khan and sought to restore the Mongol Empire’s legacy.\n\n" +
          "He established control over Samarkand, making it his capital, and conducted brutal conquests against cities such as Delhi and Baghdad. Timur's campaigns were characterized by their scale, destructiveness, and the creation of a cultural and architectural renaissance in Samarkand.",
        keyBattles: ["Battle of Delhi", "Battle of Ankara"],
        leaders: ["Timur"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Timurid_Empire_Map.png/1280px-Timurid_Empire_Map.png",
      },
      {
        id: 4,
        name: "Russian Conquest of Asia",
        startYear: "1839",
        endYear: "1895",
        description:
          "The Russian Conquest of Central Asia (1839–1895) was a series of military campaigns by the Russian Empire to subjugate Central Asian khanates, including Khiva, Bukhara, and Kokand. The expansion aimed to secure Russian influence over the region and counter British interests in the 'Great Game.'\n\n" +
          "The campaigns brought about the integration of Central Asia into the Russian Empire, leading to modernization and infrastructure development but also significant resistance from local populations.",
        keyBattles: ["Siege of Khiva", "Battle of Geok Tepe"],
        leaders: ["Mikhail Skobelev", "Emir of Bukhara"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Russian_advance_in_Central_Asia.jpg",
      },
      {
        id: 5,
        name: "Basmachi Rebellion",
        startYear: "1916",
        endYear: "1934",
        description:
          "The Basmachi Rebellion (1916–1934) was an anti-Soviet uprising in Central Asia, primarily led by local Muslim populations opposing Russian and later Soviet control. The rebellion was fueled by grievances over land reforms, conscription, and the suppression of Islamic practices.\n\n" +
          "Despite initial successes, the rebellion was ultimately crushed by the Soviet Red Army, resulting in significant loss of life and the consolidation of Soviet control over Central Asia.",
        keyBattles: ["Battle of Fergana Valley"],
        leaders: ["Enver Pasha", "Ibrahim Bek"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/SovietCentralAsia1922.svg/220px-SovietCentralAsia1922.svg.png",
      },
      {
        id: 6,
        name: "Soviet-Afghan War",
        startYear: "1979",
        endYear: "1989",
        description:
          "The Soviet-Afghan War (1979–1989) was a Cold War-era conflict between the Soviet Union and Afghan Mujahideen forces, who were supported by the United States, Pakistan, and other nations. The war began with a Soviet invasion to support the communist government of Afghanistan against insurgent groups.\n\n" +
          "The war devastated Afghanistan and contributed to the eventual collapse of the Soviet Union. It also set the stage for ongoing conflict in the region, including the rise of the Taliban.",
        keyBattles: ["Battle of Jalalabad", "Siege of Kandahar"],
        leaders: ["Babrak Karmal (Afghanistan)", "Mikhail Gorbachev (Soviet Union)"],
        mapUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bf/SovietInvasionAfghanistanMap.png",
      },
    ],
  }
    
]};
  
  export default warsData;
  