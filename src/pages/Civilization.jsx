import React from "react";
import { useParams } from "react-router-dom";
import "./Civilization.css";

const Civilization = () => {
  const { civilizationName } = useParams();

  // Define content for each civilization
  const civilizationData = {
    Akkad: {
      description: "The Akkadian Empire, established around 2334 BCE, is widely regarded as the world’s first empire. It united the Sumerian city-states of Mesopotamia under one central authority and laid the foundations for future empires in the region. Below is a detailed, chronological account of its rise, achievements, and eventual decline.",
       listitem1: "Before the rise of the Akkadian Empire, Mesopotamia was a collection of independent city-states such as Ur, Uruk, Lagash, and Kish. These cities shared a common Sumerian culture but were often at war with one another for resources and control. The Akkadian people, Semitic-speaking nomads, gradually migrated into the region and settled alongside the Sumerians.",
       listitem2: "The Reign of Sargon the Great (2334–2279 BCE)",
       listitem3: "The Golden Age Under Naram-Sin (2254–2218 BCE)",
       listitem4: "Decline and Fall (After 2218 BCE)",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Empire_akkad.svg/1280px-Empire_akkad.svg.png",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1atnhW508XGm3HBtbqwdLDlsB3UnHO0pIdxjYM-faN-E&font=Default&lang=en&initial_zoom=2&height=650",
    },
    Assyria: {
      description: "Assyria was a major Mesopotamian East Semitic kingdom known for its military innovations and administrative efficiency.",
      listitem1: "The Early Assyrian Period (circa 2500 BCE): Assyria began as the city-state of Assur, which became a crucial trade hub in northern Mesopotamia. It was known for its interactions with neighboring regions through extensive trade networks.",
      listitem2: "The Middle Assyrian Empire (1365–1056 BCE): Under kings like Ashur-uballit I, Assyria transformed into a powerful kingdom, expanding its territory and consolidating power over Mesopotamia.",
      listitem3: "The Neo-Assyrian Empire (911–612 BCE): The Neo-Assyrian period marked the height of Assyrian power. Under rulers like Tiglath-Pileser III and Sennacherib, Assyria dominated the Near East, using advanced military tactics and efficient administration.",
      listitem4: "The Fall of Assyria (612 BCE): Internal strife and external pressures from Babylonians and Medes led to the fall of the empire. The capital, Nineveh, was sacked, marking the end of Assyrian dominance.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Artist’s_impression_of_Assyrian_palaces_from_The_Monuments_of_Nineveh_by_Sir_Austen_Henry_Layard%2C_1853.jpg/1280px-Artist’s_impression_of_Assyrian_palaces_from_The_Monuments_of_Nineveh_by_Sir_Austen_Henry_Layard%2C_1853.jpg", // Replace with actual image URL
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1AElahUzZXMflZNeOsSFZBgtYZDFnIRFguF1dCWukG0I&font=Default&lang=en&initial_zoom=2&height=650",
    },
    Babylonia: {
      description: "Babylonia was an ancient Akkadian-speaking state in Mesopotamia, renowned for its contributions to law, architecture, and culture.",
      listitem1: "Emergence of Babylon (circa 2000 BCE): Babylon started as a small Amorite city-state in Mesopotamia. Located on the Euphrates River, it gained prominence as a center of trade and culture.",
      listitem2: "Hammurabi’s Reign (1792–1750 BCE): Hammurabi, Babylon's sixth king, unified much of Mesopotamia under his rule. He established the famous Code of Hammurabi, one of the earliest written law codes in history.",
      listitem3: "Hittite Sack of Babylon (1595 BCE): The Hittites invaded and sacked Babylon, leading to the fall of the First Babylonian Empire. Despite this, Babylon remained a key cultural center.",
      listitem4: "Rise of the Neo-Babylonian Empire (626 BCE): After centuries of decline, Babylon regained its power under the Chaldean dynasty, becoming the heart of the Neo-Babylonian Empire.",
      listitem5: "Nebuchadnezzar II’s Reign (605–562 BCE): Babylon reached its peak under Nebuchadnezzar II. He expanded the empire, built the Hanging Gardens of Babylon, and reconstructed the grand city of Babylon, including the Ishtar Gate.",
      listitem6: "Fall of Babylon (539 BCE): The Persian King Cyrus the Great conquered Babylon, integrating it into the Achaemenid Empire. This marked the end of Babylonian independence.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/The_walls_of_Babylon_and_the_temple_of_Bel.png/1280px-The_walls_of_Babylon_and_the_temple_of_Bel.png",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Df-QKEZ1pptrdG48YEqAye-sDEZ9jswWflMHSDl6tC4&font=Default&lang=en&initial_zoom=2&height=650",
    },
    Carthage: {
      description: "Carthage was a powerful and wealthy city-state located on the coast of North Africa. Founded by Phoenician settlers, it became a dominant maritime and trade power in the ancient Mediterranean before its eventual destruction by Rome.",
      listitem1: "Founding of Carthage (c. 814 BCE): Carthage was traditionally founded by Phoenician settlers from Tyre, led by Queen Dido. It grew into a major center of trade due to its strategic location on the Mediterranean coast.",
      listitem2: "Conflicts in Sicily (580–376 BCE): Carthage engaged in a series of struggles with Greek city-states for control over Sicily, a key island in the Mediterranean.",
      listitem3: "First Punic War (264–241 BCE): Carthage fought Rome in the First Punic War, primarily a naval conflict over Sicily. Rome emerged victorious, marking Carthage's first major defeat.",
      listitem4: "Second Punic War (218–201 BCE): Hannibal, Carthage's most famous general, led his forces (including war elephants) across the Alps to invade Italy. Despite initial victories, Carthage was eventually defeated by Rome.",
      listitem5: "Third Punic War and Destruction (149–146 BCE): Rome besieged Carthage for three years during the Third Punic War. The city was destroyed in 146 BCE, ending Carthaginian independence.",
      listitem6: "Refounding as Roman Carthage (44 BCE): Julius Caesar ordered the rebuilding of Carthage as a Roman colony. It became one of the most important cities of the Roman Empire.",
      listitem7: "Carthage as a Roman Metropolis (200 CE): By the 2nd century CE, Carthage was a thriving Roman city, second in importance only to Rome itself, serving as a hub of trade and culture.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Carthaginianempire.PNG/1280px-Carthaginianempire.PNG",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1wurjG5FfsGfh095Dr4OKDVwHHLeCLBeArj9DGt0dEbk&font=Default&lang=en&initial_zoom=2&height=650",
    },
    
    Sumer: {
      description: "Sumer was the earliest known civilization in southern Mesopotamia, often considered the cradle of civilization. It was characterized by the establishment of city-states, the invention of writing, and advances in agriculture, law, and culture.",
      listitem1: "Founding of Eridu (c. 5400 BCE): Eridu, considered the world's first city, was established in southern Mesopotamia. It became a key religious and cultural center.",
      listitem2: "Founding of Uruk (c. 4500 BCE): The city of Uruk rose to prominence as a major Sumerian city-state, known for its monumental architecture and early urbanization.",
      listitem3: "Invention of Cuneiform Writing (c. 3500 BCE): The Sumerians developed one of the world's earliest writing systems, cuneiform, which was used for record-keeping, administration, and literature.",
      listitem4: "Early Dynastic Period (c. 2900 BCE): The rise of independent city-states such as Ur, Uruk, Lagash, and Kish marked a period of political and economic development.",
      listitem5: "Rise of the Akkadian Empire (c. 2334 BCE): Sargon of Akkad conquered the Sumerian city-states, uniting them under the Akkadian Empire, the first known empire in history.",
      listitem6: "Gutian Invasion (c. 2154 BCE): The Gutians overthrew the Akkadian Empire, leading to a period of instability and decline for Sumer.",
      listitem7: "Third Dynasty of Ur (c. 2112 BCE): Ur-Nammu established the Third Dynasty of Ur, leading to a Sumerian renaissance in culture, literature, and governance.",
      listitem8: "Fall of Ur III (c. 2004 BCE): The Elamites and Amorites invaded Mesopotamia, leading to the decline of Sumerian civilization and its absorption into other emerging powers.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Enthroned_King_of_Ur.jpg/1280px-Enthroned_King_of_Ur.jpg",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1WQ1mrd_3WQ5d4DDZb95_NoYyLXoBrS-N5QsVEhS7zyQ&font=Default&lang=en&initial_zoom=2&height=650",
    },

    IndusValley: {
      description: "The Indus Valley Civilization, also known as the Harappan Civilization, was one of the world's earliest urban cultures. Flourishing between 3300 BCE and 1300 BCE, it spanned regions of modern-day Pakistan, northwest India, and parts of Afghanistan. Known for its advanced urban planning, drainage systems, and trade networks, the Indus Valley was a center of innovation and culture.",
      listitem1: "Early Harappan Phase (c. 3300–2600 BCE): Small agricultural communities begin to emerge in the Indus Valley, laying the foundation for urbanization and trade networks.",
      listitem2: "Mature Harappan Phase (c. 2600–1900 BCE): The Indus Valley Civilization reaches its peak, with major cities like Harappa, Mohenjo-Daro, and Dholavira showcasing advanced urban planning, grid layouts, and sanitation systems.",
      listitem3: "Development of Writing (c. 2500 BCE): The Indus script emerges as one of the earliest known writing systems, used primarily for seals and trade records.",
      listitem4: "Trade with Mesopotamia (c. 2000 BCE): The Indus Valley Civilization engages in long-distance trade with Mesopotamia, exporting goods like cotton, beads, and pottery.",
      listitem5: "Advanced Urban Infrastructure (c. 2400 BCE): The civilization pioneers advanced drainage systems, public baths, and standardized brick construction, highlighting their engineering expertise.",
      listitem6: "Late Harappan Phase (c. 1900–1300 BCE): The civilization begins to decline, with urban centers being abandoned, likely due to climate change, economic issues, or environmental factors.",
      listitem7: "End of the Indus Valley Civilization (c. 1300 BCE): The final remnants of the Indus Valley Civilization disappear, with cultural shifts and ruralization replacing urban life.",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1XNJEbdzPppmZs8IqreuGEoCYSPSxs_Xf1GeFsZ-Dqog&font=Default&lang=en&initial_zoom=2&height=650",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Shiva_Pashupati.jpg"
    },

    Egypt: {
      description: "Ancient Egypt, located along the Nile River, was one of the most enduring and influential civilizations of the ancient world. Known for its monumental architecture, complex religion, and advancements in science, art, and governance, it thrived for over 3,000 years.",
      listitem1: "Unification of Upper and Lower Egypt (c. 3100 BCE): King Narmer (or Menes) united Upper and Lower Egypt, marking the beginning of the First Dynasty and the centralized state of ancient Egypt.",
      listitem2: "Old Kingdom Period (c. 2686–2181 BCE): Known as the 'Age of the Pyramids,' this period saw the construction of monumental structures such as the Great Pyramid of Giza under Pharaoh Khufu.",
      listitem3: "Middle Kingdom Period (c. 2055–1650 BCE): The Middle Kingdom brought cultural flourishing, territorial expansion into Nubia, and increased agricultural development.",
      listitem4: "Second Intermediate Period (c. 1650–1550 BCE): Egypt faced invasions by the Hyksos, who introduced chariots and advanced weaponry.",
      listitem5: "New Kingdom Period (c. 1550–1070 BCE): Egypt reached its peak as a powerful empire under rulers like Hatshepsut, Akhenaten, Tutankhamun, and Ramses II. Monumental temples like Abu Simbel were constructed.",
      listitem6: "Reign of Tutankhamun (c. 1334–1325 BCE): King Tut restored the traditional polytheistic religion after Akhenaten’s reforms. His tomb’s discovery in 1922 revealed unparalleled treasures.",
      listitem7: "Reign of Ramses II (c. 1279–1213 BCE): Ramses the Great led successful military campaigns and commissioned vast architectural projects, solidifying Egypt's power.",
      listitem8: "Late Period and Decline (c. 1070–332 BCE): Egypt suffered from internal conflicts, invasions, and weakened authority, leading to its gradual decline.",
      listitem9: "Ptolemaic Dynasty (332–30 BCE): Alexander the Great conquered Egypt, and the Ptolemaic dynasty was established, with Cleopatra VII as its final ruler.",
      listitem10: "Roman Conquest of Egypt (30 BCE): After Cleopatra VII's defeat, Egypt became a province of the Roman Empire, ending its ancient era.",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1VSwQtnMYOSTJeAMtnIfDOX_E7RGCknAQc5t8vVoHldg&font=Default&lang=en&initial_zoom=2&height=650"
    },
    Hittites: {
      description: "The Hittites were an ancient Anatolian people who established a powerful empire in central Turkey during the Late Bronze Age. Known for their advanced military tactics, early use of ironworking, and diplomacy, they played a significant role in shaping ancient Near Eastern history.",
      listitem1: "Establishment of the Kingdom of Kussara (c. 1750 BCE): The Hittites emerge in central Anatolia, establishing the Kingdom of Kussara, which marks the beginning of their political presence in the region.",
      listitem2: "Foundation of Hattusa (c. 1650 BCE): Under King Hattusili I, the Hittites establish Hattusa as their capital, solidifying their control over Anatolia and beginning the Old Kingdom period.",
      listitem3: "Sack of Babylon (c. 1595 BCE): King Mursili I leads a campaign against Babylon, sacking the city and ending the Amorite dynasty, which demonstrates the Hittites' growing power.",
      listitem4: "Introduction of Ironworking (c. 1400 BCE): The Hittites begin using iron for tools and weapons, marking one of the earliest known uses of iron metallurgy in the ancient world.",
      listitem5: "Battle of Kadesh (c. 1274 BCE): The Hittite Empire, under King Muwatalli II, faces off against Ramses II of Egypt in one of the largest chariot battles in history. The battle ends in a stalemate.",
      listitem6: "Treaty of Kadesh (c. 1259 BCE): The Hittites and Egyptians sign one of the earliest known peace treaties, resolving their long-standing conflict.",
      listitem7: "Collapse of the Hittite Empire (c. 1200 BCE): The Hittite Empire falls during the Late Bronze Age collapse due to internal strife, invasions, and economic challenges. Neo-Hittite city-states emerge afterward.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hittite_Kingdom.png/1280px-Hittite_Kingdom.png",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1coTVUemq8OdCZhNEBIkPpT96BI2nLCnkdidnBtz_Yhk&font=Default&lang=en&initial_zoom=2&height=650",
    },
    Greece: {
      description: "Ancient Greece was a civilization that laid the foundations for Western philosophy, democracy, art, literature, and science. Spanning from the Minoan and Mycenaean periods to the Roman conquest, Greece's contributions continue to influence the modern world.",
      listitem1: "Minoan and Mycenaean Civilization (c. 1600–1100 BCE): The Minoans on Crete and the Mycenaeans on mainland Greece formed the earliest Greek cultures, known for palatial centers, trade, and art.",
      listitem2: "Trojan War (c. 1200 BCE): According to legend, the Greeks waged war against Troy, an event immortalized in Homer’s epic, the Iliad.",
      listitem3: "End of the Greek Dark Ages (c. 800 BCE): Writing, trade, and cultural development revived after a period of decline, leading to the rise of city-states (polis).",
      listitem4: "First Olympic Games (776 BCE): The first recorded Olympic Games were held in Olympia, honoring Zeus and fostering unity among Greek city-states.",
      listitem5: "Homeric Epics Written (c. 750 BCE): Homer composed the Iliad and the Odyssey, which became cornerstones of Greek literature and cultural identity.",
      listitem6: "Birth of Democracy in Athens (508 BCE): Under Cleisthenes, Athens introduced democratic reforms, giving citizens a role in governance.",
      listitem7: "Battle of Marathon (490 BCE): Athenian forces defeated the Persian army, marking a key victory in the Greco-Persian Wars.",
      listitem8: "Battle of Thermopylae (480 BCE): King Leonidas and his 300 Spartans heroically resisted the Persian invasion at Thermopylae.",
      listitem9: "Peloponnesian War (431–404 BCE): A devastating war between Athens and Sparta weakened the Greek city-states and led to Athens' decline.",
      listitem10: "Reign of Alexander the Great (336–323 BCE): Alexander united Greece and conquered the Persian Empire, spreading Greek culture across Asia, Africa, and Europe.",
      listitem11: "Greece Becomes a Roman Province (146 BCE): Greece fell under Roman control, ending its political independence but preserving its cultural influence.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Map_of_Greece%2C_Archipelago_and_part_of_Anadoli%3B_Louis_Stanislas_d%27Arcy_Delarochette_1791.jpg/1280px-Map_of_Greece%2C_Archipelago_and_part_of_Anadoli%3B_Louis_Stanislas_d%27Arcy_Delarochette_1791.jpg",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1g8lXW7b85VmZBQ22nf4E4yJNL02mtTxoOep32dFUp-M&font=Default&lang=en&initial_zoom=2&height=650"
    },

    Rome: {
      description: "Ancient Rome was one of the most influential civilizations in history, spanning over a millennium. It evolved from a small city-state to a vast empire, shaping Western law, governance, engineering, and culture. Its legacy endures in modern politics, architecture, and language.",
      listitem1: "Founding of Rome (753 BCE): According to legend, Rome was founded by Romulus, who became its first king. The city grew along the Tiber River.",
      listitem2: "Founding of the Roman Republic (509 BCE): The Roman monarchy was overthrown, leading to the establishment of the Roman Republic governed by the Senate and elected magistrates.",
      listitem3: "Punic Wars (264–146 BCE): A series of wars between Rome and Carthage resulted in Roman control over the western Mediterranean.",
      listitem4: "Assassination of Julius Caesar (44 BCE): Julius Caesar, dictator of Rome, was assassinated, leading to political instability and the fall of the Republic.",
      listitem5: "Beginning of the Roman Empire (27 BCE): Augustus became the first Roman emperor, marking the start of the Roman Empire and a period of peace known as Pax Romana.",
      listitem6: "Construction of the Colosseum (80 CE): The Colosseum was completed under Emperor Titus, showcasing Roman engineering and serving as a venue for gladiatorial games.",
      listitem7: "Edict of Milan (313 CE): Emperor Constantine legalized Christianity, ending centuries of persecution and setting the stage for its spread across the empire.",
      listitem8: "Division of the Roman Empire (395 CE): Emperor Theodosius I divided the empire into Western and Eastern halves to improve administration.",
      listitem9: "Fall of the Western Roman Empire (476 CE): The Western Roman Empire collapsed when Romulus Augustulus was deposed by the Germanic king Odoacer.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Roman_Empire_Trajan_117AD.png/1280px-Roman_Empire_Trajan_117AD.png",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1BedduueglXkq94TJOWaAXAFALky6TQ5C8hFwPV9qJ6o&font=Default&lang=en&initial_zoom=2&height=650",
    },
    Persia: {
      description: "The Persian Empire was one of the most powerful and influential civilizations in the ancient world. From the Achaemenid Empire under Cyrus the Great to the Sassanian Empire, Persia shaped culture, governance, and religion across vast territories, leaving an enduring legacy.",
      listitem1: "Founding of the Achaemenid Empire (550 BCE): Cyrus the Great unites Persian tribes and establishes the vast Achaemenid Empire, known for its tolerance and governance.",
      listitem2: "Conquest of Babylon (539 BCE): Cyrus conquers Babylon and issues the Cyrus Cylinder, an early declaration of human rights promoting religious freedom.",
      listitem3: "Reign of Darius I (522–486 BCE): Darius I expands the empire, implements administrative reforms, and constructs Persepolis as a ceremonial capital.",
      listitem4: "Battle of Marathon (490 BCE): The Persians, under Darius I, suffer defeat against Athens during the first Greco-Persian War.",
      listitem5: "Battle of Thermopylae and Salamis (480 BCE): Xerxes I wins at Thermopylae but faces a decisive naval loss at the Battle of Salamis.",
      listitem6: "Battle of Gaugamela (331 BCE): Alexander the Great defeats Darius III, leading to the fall of the Achaemenid Empire.",
      listitem7: "Rise of the Parthian Empire (247 BCE): The Parthians overthrow the Seleucids, establishing a powerful empire that rivals Rome.",
      listitem8: "Establishment of the Sassanian Empire (224 CE): The Sassanian Empire marks a resurgence of Persian culture and military strength under Ardashir I.",
      listitem9: "Fall of the Sassanian Empire (651 CE): The Sassanian Empire collapses following defeat by the Islamic Caliphate, marking the end of ancient Persia.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Achaemenid_Empire_at_its_greatest_extent_according_to_Oxford_Atlas_of_World_History_2002.jpg/1280px-Achaemenid_Empire_at_its_greatest_extent_according_to_Oxford_Atlas_of_World_History_2002.jpg",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1GOojmtjOQMnS-6O6QS9xTBNLrAXm3rkTbP-PhJ2BFtM&font=Default&lang=en&initial_zoom=2&height=650",
    },
    China: {
      description: "Ancient China is one of the world's oldest civilizations, with a rich history marked by the rise and fall of dynasties, significant cultural and technological advancements, and profound philosophical contributions that have shaped human history.",
      listitem1: "Shang Dynasty (1600–1046 BCE): The earliest recorded Chinese dynasty, known for its advanced bronze casting, writing system, and urban development.",
      listitem2: "Zhou Dynasty (1046–256 BCE): The longest-lasting Chinese dynasty, introducing the Mandate of Heaven and seeing the development of Confucianism and Taoism.",
      listitem3: "Qin Dynasty and Unification of China (221–206 BCE): Emperor Qin Shi Huang unifies China, standardizes measurements, and begins construction of the Great Wall.",
      listitem4: "Han Dynasty (206 BCE – 220 CE): A golden age of Chinese civilization, marked by territorial expansion, the opening of the Silk Road, and significant cultural and technological advancements.",
      listitem5: "Invention of Paper (105 CE): Cai Lun invents papermaking, revolutionizing communication and record-keeping.",
      listitem6: "Three Kingdoms Period (220–280 CE): A time of fragmentation and civil war following the Han Dynasty, leading to the rise of the Wei, Shu, and Wu kingdoms.",
      listitem7: "Sui Dynasty (581–618 CE): Reunification of China after centuries of division, notable for initiating the construction of the Grand Canal.",
      listitem8: "Tang Dynasty (618–907 CE): Considered a high point in Chinese civilization, with flourishing arts, culture, and trade.",
      listitem9: "Song Dynasty (960–1279 CE): Known for economic prosperity, technological innovations, and the development of urban centers.",
      listitem10: "Yuan Dynasty (1271–1368 CE): Established by Kublai Khan, marking the first foreign-led dynasty in China under Mongol rule.",
      listitem11: "Ming Dynasty (1368–1644 CE): Recognized for its trade expansion, cultural achievement",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Greatwall_large.jpg",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Yfyu0qIFjaq1KBRmGG7dojjFPraoCa59gjWD7ZSXX3s&font=Default&lang=en&initial_zoom=2&height=650"
    },
    VedicIndia: {
      description: "Vedic India (c. 1500–500 BCE) marks a formative period in Indian history, characterized by the composition of the Vedas, the emergence of early Hinduism, and the development of social and political structures that laid the foundation for subsequent Indian civilization.",
      listitem1: "Early Vedic Period (c. 1500–1200 BCE): Arrival of Indo-Aryans and composition of the Rigveda, reflecting a pastoral society.",
      listitem2: "Composition of Sama, Yajur, and Atharva Vedas (c. 1200–1000 BCE): Expansion of Vedic literature and rituals.",
      listitem3: "Later Vedic Period (c. 1000–600 BCE): Transition to settled agriculture, emergence of the varna system, and composition of Brahmanas and Upanishads.",
      listitem4: "Composition of the Upanishads (c. 800–500 BCE): Philosophical exploration of concepts like Brahman and Atman.",
      listitem5: "Rise of Mahajanapadas (c. 700–500 BCE): Emergence of sixteen large states in northern India, setting the stage for future political developments.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Early_Vedic_Culture_%281700-1100_BCE%29.png",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=15Vj4t52WyUG_73AEEk26ZFm1o87nZI2I_9IhWHuLJXc&font=Default&lang=en&initial_zoom=2&height=650",
    },
    Teotihuacan: {
      description: "Teotihuacan, located in the Basin of Central Mexico, was one of the largest and most influential cities in pre-Columbian America. Flourishing between 100 BCE and 550 CE, it is renowned for its monumental pyramids, complex urban planning, and significant cultural impact on Mesoamerica.",
      listitem1: "Early Settlement (c. 200 BCE): Initial settlements in the Teotihuacan area lay the groundwork for the city's development.",
      listitem2: "Construction of the Pyramid of the Sun (c. 100 CE): Erection of one of the largest pyramids in the Western Hemisphere.",
      listitem3: "Construction of the Pyramid of the Moon (c. 150 CE): Completion of another major pyramid, enhancing the city's monumental landscape.",
      listitem4: "Completion of the Temple of the Feathered Serpent (c. 200 CE): Showcasing intricate carvings and the city's architectural prowess.",
      listitem5: "Teotihuacan at its Zenith (c. 450 CE): The city reaches its peak with a population exceeding 125,000, becoming a major cultural and economic center.",
      listitem6: "Decline and Abandonment (c. 550 CE): The city begins to decline due to various factors, leading to its eventual abandonment.",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Classic_sites_1.png",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1brElQBdWbvOaMlxNvNF4Jlu6XIAuyhcbZdA6v2-6ZDc&font=Default&lang=en&initial_zoom=2&height=650",
    },
    Olmecs: {
      description: "The Olmec civilization, often considered the 'mother culture' of Mesoamerica, flourished along the Gulf Coast of Mexico between 1500 and 400 BCE. Known for their colossal stone heads, ceremonial centers, and cultural innovations, the Olmecs laid the groundwork for later Mesoamerican civilizations.",
      listitem1: "Formation of Olmec Culture (c. 1500–1200 BCE): The Olmec civilization begins to develop around San Lorenzo, one of the earliest ceremonial centers.",
      listitem2: "Height of the Olmec Civilization (c. 1200–400 BCE): The Olmecs reach their zenith, constructing monumental ceremonial centers like La Venta and creating iconic colossal stone heads.",
      listitem3: "Decline of San Lorenzo (c. 900 BCE): San Lorenzo is abandoned, likely due to environmental changes, political instability, or resource depletion.",
      listitem4: "Abandonment of La Venta (c. 400 BCE): The ceremonial center of La Venta is abandoned, signaling the decline of the Olmecs as a dominant culture.",
      listitem5: "Legacy of the Olmecs (c. 300 BCE and beyond): The Olmec influence persists in Mesoamerican cultures through art, religious practices, and innovations such as the Mesoamerican calendar and writing systems.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Formative_Era_sites.svg/2560px-Formative_Era_sites.svg.png",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Hdg32U125lbYxFSyXQsEpkmTWKtmpSSkkZZe5GtbjP4&font=Default&lang=en&initial_zoom=2&height=650",
    },
    Mayans: {
      description: "The Maya civilization, one of the most sophisticated in the ancient Americas, thrived from as early as 2000 BCE to the Spanish conquest in 1697 CE. Known for their advances in astronomy, mathematics, architecture, and writing, the Maya left a lasting legacy in Mesoamerican history.",
      listitem1: "Preclassic Period (c. 2000 BCE–250 CE): Early settlements and agricultural practices mark the beginnings of Maya civilization.",
      listitem2: "Classical Period (c. 250–900 CE): The height of the Maya civilization, featuring monumental architecture, advanced mathematics, and a flourishing cultural life.",
      listitem3: "Construction of Chichen Itza (c. 600 CE): Chichen Itza emerges as a major center of Maya culture and religion.",
      listitem4: "Decline of the Southern Lowlands (c. 900 CE): The collapse of major city-states in the southern lowlands ends the Classical Period.",
      listitem5: "Postclassic Period (c. 1200 CE): The Maya civilization shifts to the northern Yucatan Peninsula, with cities like Chichen Itza and Mayapan thriving.",
      listitem6: "Arrival of the Spanish (c. 1517 CE): Spanish explorers arrive in the Yucatan, leading to centuries of conflict and eventual conquest.",
      listitem7: "Fall of the Last Maya Kingdom (c. 1697 CE): The Spanish conquest of Nojpeten marks the end of independent Maya rule.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Mayamap.png",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1dAiu2GrrrIZeHHUZoD38mU9GYtkiW4pqrlkddbFpwD4&font=Default&lang=en&initial_zoom=2&height=650",
    },
    Toltecs: {
      description: "The Toltec civilization (c. 900–1200 CE) was a prominent Mesoamerican culture known for its capital city of Tula, its influence on later civilizations like the Aztecs, and its religious and artistic innovations. The Toltecs are often regarded as a bridge between the classic and postclassic periods of Mesoamerican history.",
      listitem1: "Founding of Tula (c. 900 CE): The Toltecs establish their capital at Tula (Tollan), which becomes a center of cultural and political power.",
      listitem2: "Expansion of Toltec Influence (c. 950 CE): The Toltecs expand their reach, influencing other Mesoamerican regions with their art, religion, and political systems.",
      listitem3: "Quetzalcoatl Legend (c. 1000 CE): The legend of Quetzalcoatl, a Toltec god associated with wisdom and civilization, spreads across Mesoamerica.",
      listitem4: "Decline of Tula (c. 1150 CE): Internal conflicts, environmental pressures, and invasions lead to the decline of Tula and the Toltec civilization.",
      listitem5: "Toltec Legacy in Aztec Culture (c. 1200 CE): The Toltecs' cultural and religious practices are adopted and revered by the Aztecs, influencing their society and mythology.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Toltecas.png",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1qtm64yFzITO8IyAzRanA2gzunUhGBzUEBMZEoZ3Q6K0&font=Default&lang=en&initial_zoom=2&height=650",
    },
    Japan: {
      description: "Ancient Japan, spanning from the Jomon Period to the Heian Period, witnessed the development of early cultures, the introduction of Buddhism, and the establishment of a sophisticated courtly culture. Each era contributed uniquely to Japan's rich historical and cultural legacy.",
      listitem1: "Jomon Period (c. 10000–300 BCE): Characterized by a hunter-gatherer lifestyle, the creation of some of the world's oldest pottery, and early permanent settlements.",
      listitem2: "Yayoi Period (c. 300 BCE–300 CE): Introduction of wet-rice agriculture, metallurgy, and significant advancements in technology and trade, leading to increased social stratification.",
      listitem3: "Kofun Period (c. 300–538 CE): Known for its monumental burial mounds (kofun) and the rise of powerful clans, alongside early interactions with China and Korea.",
      listitem4: "Asuka Period (c. 538–710 CE): Introduction of Buddhism, centralized government, and cultural exchanges with China, influencing Japanese art, architecture, and governance.",
      listitem5: "Nara Period (c. 710–794 CE): Establishment of Nara as the capital, compilation of historical texts like the Kojiki, and the spread of Buddhism as a state religion.",
      listitem6: "Heian Period (c. 794–1185 CE): A cultural golden age of courtly refinement, featuring classical literature such as The Tale of Genji and artistic achievements.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Japan_glaciation.gif",
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1PJuU0muRYLqOerJ5Qt0OEtUXe567_wtNQfqCImaIXRM&font=Default&lang=en&initial_zoom=2&height=650",
    },    
    default: {
      description: "Information coming soon!",
    }

  };

  const civilization = civilizationData[civilizationName] || civilizationData.default;
  const listItems = Object.entries(civilization)
  .filter(([key]) => key.startsWith("listitem")) // Filter keys starting with "listitem"
  .map(([key, value]) => value); // Get the values of these keys

  const formatCivilizationName = (name) => {
    return name.replace(/([A-Z])/g, " $1").trim(); // Inserts space before uppercase letters
  };

  const getWikipediaUrl = (name) => {
    return `https://en.wikipedia.org/wiki/${name.replace(/ /g, "_")}`;
  };

  return (
    <div className="civilization-section">
      <h1>{formatCivilizationName(civilizationName)}</h1>
      <div className="underline"></div>
      <div className="civilization-summary">
        <p>{civilization.description}</p>
        <img
          src={civilization.image}
          alt={`${civilizationName}`}
          className="civilization-image"
        />
          
        </div>

        <ul className="civilization-list">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li> // Dynamically render each list item
        ))}
      </ul>
    
      <div className="wikilink">
        <p>
          Learn more on Wikipedia:{" "}
          <a
            href={getWikipediaUrl(formatCivilizationName(civilizationName))}
            target="_blank"
            rel="noopener noreferrer"
          >
            {formatCivilizationName(civilizationName)}
          </a>
        </p>
      </div>

      {civilization.iframeSrc ? (
        <iframe
          src={civilization.iframeSrc}
          width="100%"
          height="650"
          frameBorder="0"
          allowFullScreen
          title={formatCivilizationName(civilizationName)}
        ></iframe>
      ) : (
        <p>No timeline available for this civilization.</p>
      )}
    </div>
  );
};

export default Civilization;