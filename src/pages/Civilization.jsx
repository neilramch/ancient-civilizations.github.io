import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Civilization.css";

const Civilization = () => {
  const { civilizationName } = useParams();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

    const civilizationData = {
       Akkad: {
        description: "The Akkadian Empire, established around 2334 BCE, is often celebrated as the first unified empire in human history. Emerging from the rich cultural landscape of Mesopotamia, Akkad bridged the Sumerian and Semitic traditions, introducing a centralized governance model that inspired future civilizations. Its legacy endures through its advancements in administration, language, and culture.",
        items: [
          {
            title: "Sargon the Great Founds the Akkadian Empire (2334–2279 BCE)",
            content: "Sargon of Akkad, also known as Sargon the Great, is often regarded as one of the first great empire builders in history. Rising from humble beginnings, Sargon was said to have been born to a priestess and placed in a basket in the Euphrates River, later to be found and raised by a gardener—a story echoing other legendary narratives. He unified the city-states of Mesopotamia under a single rule, creating the Akkadian Empire, which stretched from the Persian Gulf to the Mediterranean Sea. Sargon established a centralized system of governance, including the appointment of loyal governors and the use of Akkadian as an administrative language. His reign marked the first known use of a standing army, which he used to maintain control and expand trade routes. Sargon’s military campaigns ensured the empire's dominance over crucial trade routes for commodities like silver, copper, and timber. His legacy lasted for centuries, and he became a near-mythical figure in Mesopotamian culture.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/The_story_of_the_greatest_nations%3B_a_comprehensive_history%2C_extending_from_the_earliest_times_to_the_present%2C_founded_on_the_most_modern_authorities%2C_and_including_chronological_summaries_and_%2814783163205%29.jpg/1280px-thumbnail.jpg",
              description: "Illustration of the Assyrian Sargon legend (1913): The young Sargon, working as a gardener, is visited by Ishtar 'surrounded by a cloud of doves'."
            }
          },
          {
            title: "Enheduanna Becomes High Priestess and Poet (circa 2285–2250 BCE)",
            content: "Enheduanna, daughter of Sargon, holds the distinction of being the world's first recorded author. As a high priestess of the moon god Nanna in Ur, she played a vital role in consolidating the Sumerian and Akkadian cultural and religious traditions. Her works, particularly hymns such as 'The Exaltation of Inanna' and 'The Temple Hymns', expressed devotion to the goddess Inanna and depicted the struggles and triumphs of her spiritual life. Her compositions established the foundation for later Mesopotamian literary traditions, and they remain a significant source for understanding Akkadian spirituality and societal values. Enheduanna’s position as both a religious and political figure made her instrumental in solidifying her father’s control over newly conquered Sumerian territories, fostering a unified cultural identity within the Akkadian Empire.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Seal_of_Inanna%2C_2350-2150_BCE.jpg/1280px-Seal_of_Inanna%2C_2350-2150_BCE.jpg",
              description: "Ancient Akkadian cylinder seal depicting Inanna, the subject of three hymns attributed to Enheduanna, resting her foot on the back of a lion, c. 2334–2154 BCE"
            }
          },
          {
            title: "Naram-Sin Expands the Empire and Declares Divinity (2254–2218 BCE)",
            content: "Naram-Sin, grandson of Sargon, is renowned for expanding the Akkadian Empire to its zenith, extending its reach to parts of Anatolia and the Iranian plateau. He was the first Mesopotamian king to deify himself, taking the unprecedented title 'God of Akkad' and 'King of the Four Quarters of the World.' His reign is marked by military conquests and the suppression of widespread revolts, notably the 'Great Revolt' where multiple regions rebelled against Akkadian rule. Naram-Sin's Victory Stele commemorates his triumph over the Lullubi people, depicting him as a god-like figure, which underscores his self-deification and the centralization of power. His reign, while marked by military success, also faced challenges, including internal dissent and external pressures, which foreshadowed the eventual decline of the Akkadian Empire.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Naram-Sin_mace_head%2C_c._2254-2218_BC_-_Oriental_Institute_Museum%2C_University_of_Chicago_-_DSC07157.JPG/1280px-Naram-Sin_mace_head%2C_c._2254-2218_BC_-_Oriental_Institute_Museum%2C_University_of_Chicago_-_DSC07157.JPG",
              description: "Naram-Sin mace head, c. 2254-2218 BC - Oriental Institute Museum, University of Chicago."
            }
          },
          {
            title: "Rimush's Reign and Consolidation Efforts (2279–2270 BCE)",
            content: "Rimush, son of Sargon, ascended to the throne following his father's death. His reign was characterized by efforts to consolidate the empire's territories amidst widespread rebellions. Rimush led military campaigns to suppress revolts in Sumerian city-states and against external adversaries like Elam. Despite his military successes in maintaining the empire's integrity, his reign was short-lived, and he met a violent end, reportedly assassinated by his own courtiers. His death led to the succession of his brother, Manishtushu.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Jar_fragment_Rimush_Tell_Brak_127340.jpg/1280px-Jar_fragment_Rimush_Tell_Brak_127340.jpg",
              description: "Stone jar fragment, with inscription mentioning king Rimush of Akkad, ca 2278-2270 BC. Inscription: 'Rimush / LUGAL / KISH. From Tell Brak. British Museum 127340 https://www.britishmuseum.org/collection/object/W_1938-0727-190 / CDLI https://cdli.ucla.edu/search/archival_view.php?ObjectID=P216531"
            }
          },
          {
            title: "Manishtushu's Trade Expeditions and Administration (2270–2255 BCE)",
            content: "Manishtushu, another son of Sargon, succeeded his brother Rimush. His reign is noted for extensive trade expeditions, including a notable campaign to the Persian Gulf region to secure trade routes and resources. Manishtushu is also known for the 'Manishtushu Obelisk,' which records the distribution of land to his officials, reflecting administrative practices and attempts to strengthen central authority. Like his brother, Manishtushu's reign ended abruptly; he was assassinated in a palace conspiracy, leading to the ascension of his son, Naram-Sin.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Eshpum_votive_statue.jpg/1280px-Eshpum_votive_statue.jpg",
              description: "Archaic votive statue with Eshpum's inscription in the back"
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Empire_akkad.svg/1280px-Empire_akkad.svg.png",
          description: "Map of the Akkadian Empire at its height, showing its vast territorial extent."
        },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1atnhW508XGm3HBtbqwdLDlsB3UnHO0pIdxjYM-faN-E&font=Default&lang=en&initial_zoom=2&height=650"
      },
      Assyria: {
        description:
          "Assyria was one of the most powerful civilizations in Mesopotamian history, renowned for its military prowess, administrative innovations, and monumental architecture. Over the centuries, Assyria evolved from a modest city-state into a dominant empire that shaped the ancient Near East.",
        items: [
          {
            title: "Ashurbanipal Establishes the Library of Nineveh (669–631 BCE)",
            content:
              "Ashurbanipal, one of the last great kings of Assyria, is most famous for creating the Library of Nineveh. This vast collection of cuneiform tablets contained texts on law, literature, science, and religion, offering an unparalleled glimpse into ancient Mesopotamian civilization. Ashurbanipal's thirst for knowledge and dedication to preserving culture led to the collection of texts from across the empire, including the Epic of Gilgamesh. His reign also marked a period of military expansion and stability, but it was followed by the eventual decline of the Assyrian Empire.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Library_of_Ashurbanipal.jpg/1280px-Library_of_Ashurbanipal.jpg",
              description: "Library of Ashurbanipal Mesopotamia 1500-539 BC Gallery, British Museum, London, England, UK. Complete indexed photo collection at WorldHistoryPics.com."
            }
          },
          {
            title: "Tiglath-Pileser III Expands Assyrian Power (745–727 BCE)",
            content:
              "Tiglath-Pileser III revolutionized Assyrian governance and military strategy. He introduced standing armies with professional soldiers and reorganized provincial administration to centralize power. His reign saw the conquest of vast territories, including Babylon, Syria, and parts of Anatolia. Tiglath-Pileser III also implemented mass deportations to control conquered populations and ensure loyalty to the empire. These innovations cemented Assyria's dominance in the region and served as a model for future empires.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tiglath-pileser_III_and_submission_of_an_enemy%2C_8th_century_BC%2C_from_Nimrud%2C_Iraq._The_British_Museum.jpg/1280px-Tiglath-pileser_III_and_submission_of_an_enemy%2C_8th_century_BC%2C_from_Nimrud%2C_Iraq._The_British_Museum.jpg",
              description: "A relief from Nimrud depicting Tiglath-Pileser (right) trampling a defeated enemy"
            }
          },
          {
            title: "Sennacherib Rebuilds Nineveh (705–681 BCE)",
            content:
              "Sennacherib is best known for transforming Nineveh into a magnificent capital city. He constructed extensive gardens, aqueducts, and a sophisticated canal system to supply the city with water. Sennacherib's reign was marked by military campaigns, including the infamous siege of Jerusalem, which ended with the city paying tribute to avoid destruction. His architectural legacy, especially the vast palace known as 'The Palace Without Rival,' showcased Assyrian artistic and engineering achievements. Sennacherib's death in a palace coup marked a turbulent period in Assyrian history.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sargon_II_%28left%29_faces_a_high-ranking_official%2C_possibly_Sennacherib_his_son_and_crown_prince._710-705_BCE._From_Khorsabad%2C_Iraq._The_British_Museum%2C_London.jpg/1280px-Sargon_II_%28left%29_faces_a_high-ranking_official%2C_possibly_Sennacherib_his_son_and_crown_prince._710-705_BCE._From_Khorsabad%2C_Iraq._The_British_Museum%2C_London.jpg",
              description: "Sennacherib's father Sargon II (left) facing a high-ranking official, possibly his crown prince Sennacherib."
            }
          },
          {
            title: "Esarhaddon Invades Egypt (681–669 BCE)",
            content:
              "Esarhaddon, Sennacherib's son, led successful military campaigns to secure the empire's borders and expand its influence. His most notable achievement was the invasion of Egypt in 671 BCE, where he captured Memphis and declared himself king of Egypt. Esarhaddon also focused on rebuilding Babylon, which his father had destroyed, and he promoted religious tolerance by restoring temples across the empire. His reign demonstrated Assyria's ability to govern diverse populations across vast territories.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Ashurbanipal_II%27s_army_attacking_Memphis%2C_Egypt%2C_645-635_BCE%2C_from_Nineveh%2C_Iraq._British_Museum.jpg/1280px-Ashurbanipal_II%27s_army_attacking_Memphis%2C_Egypt%2C_645-635_BCE%2C_from_Nineveh%2C_Iraq._British_Museum.jpg",
              description: "Assyrian siege of an Egyptian fort, probably a scene from the war in 667 BCE referring to the capture of Memphis. Sculpted in 645 – 635 BCE, under Ashurbanipal. British Museum."
            }
          },
          {
            title: "Shamshi-Adad I Expands Assyrian Territory (1813–1781 BCE)",
            content:
              "Shamshi-Adad I was an early Assyrian ruler who established Assyria as a dominant power in northern Mesopotamia. He conquered neighboring city-states and built a network of fortified cities connected by roads. His administrative reforms included the division of the empire into provinces, each governed by officials loyal to the king. Shamshi-Adad's reign marked the beginning of Assyria's rise as a regional power and laid the foundation for future expansion.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Raid_of_Shamshi-Adad_I_to_the_great_sea.png",
              description: "Shamshi-Adad I and his armies reach the Mediterranean Sea, as envisaged by artist A. C. Weatherstone."
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Assyrie_general_en.jpg",
          description: "Map of the Assyrian Empire at its height, showing its vast territorial expanse."
        },
        iframeSrc:
          "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1AElahUzZXMflZNeOsSFZBgtYZDFnIRFguF1dCWukG0I&font=Default&lang=en&initial_zoom=2&height=650"
      },
      Babylonia: {
        description: "Babylonia was an ancient Akkadian-speaking state and cultural region based in central-southern Mesopotamia (present-day Iraq). Emerging as a significant power after the fall of the Third Dynasty of Ur, Babylonia became renowned for its contributions to governance, law, science, and art.",
        items: [
            {
                title: "Hammurabi’s Code Establishes Rule of Law (1792–1750 BCE)",
                content: "Hammurabi, the sixth king of Babylon, is celebrated for codifying one of the earliest comprehensive sets of laws, the Code of Hammurabi. This legal code, inscribed on a diorite stele, established principles of justice, penalties for various offenses, and social norms for governance. With edicts covering trade, property rights, and family disputes, Hammurabi aimed to unify his empire and promote fairness. The famous phrase 'an eye for an eye' epitomizes the code's retributive justice system. Hammurabi’s legal reforms ensured a legacy of structured governance and justice systems that influenced civilizations for centuries.",
                image: {
                    url: "https://assets.editorial.aetnd.com/uploads/2022/09/code-hammurabi-gettyimages-91425803.jpg?width=1080&height=540&crop=1080%3A540%2Csmart&quality=75&auto=webp",
                    description: "The Code of Hammurabi, engraved on a stele, is one of the earliest and most complete legal documents in history."
                }
            },
            {
                title: "Rise of Babylon as a Cultural Capital (1894 BCE Onwards)",
                content: "Babylon's foundation as a small city-state laid the groundwork for its rise to prominence. By the reign of Hammurabi, it had become a vibrant cultural and economic hub, drawing influence from Sumerian, Akkadian, and Amorite traditions. With advances in architecture, including ziggurats and canals, Babylon demonstrated its mastery of urban planning. The city's markets were renowned for trade in textiles, grain, and luxury goods, facilitating cultural exchange across Mesopotamia.",
                image: {
                    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Street_in_Babylon.jpg/1280px-Street_in_Babylon.jpg",
                    description: "A reconstructed portion of the ruins of Babylon."
                }
            },
            {
                title: "Nebuchadnezzar II’s Architectural Wonders (605–562 BCE)",
                content: "Under Nebuchadnezzar II, Babylon experienced a golden age of construction. The city became home to monumental structures such as the Ishtar Gate, adorned with glazed brick reliefs depicting dragons and bulls, and the Hanging Gardens, one of the Seven Wonders of the Ancient World. These gardens, if they existed as described, symbolized the king's devotion to his queen and demonstrated advanced irrigation techniques. Babylon’s walls, described as impenetrable, showcased the empire’s mastery in engineering and defense.",
                image: {
                    url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Hanging_Gardens_of_Babylon.jpg",
                    description: "Depiction of the Hanging Gardens if Bablyon"
                }
            },
            {
                title: "The Fall of Babylon to Persia (539 BCE)",
                content: "The decline of the Neo-Babylonian Empire culminated in 539 BCE when Cyrus the Great of Persia captured Babylon. Employing strategic brilliance and diplomacy, Cyrus entered the city with minimal resistance. His conquest marked the integration of Babylon into the Achaemenid Empire. The transition was notable for Cyrus’s respect for Babylonian culture and religion, as evidenced by the Cyrus Cylinder, which proclaimed policies of tolerance and restoration. Despite its political fall, Babylon remained a significant cultural center under Persian rule.",
                image: {
                    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/The_fall_of_Babylon%3B_Cyrus_the_Great_defeating_the_Chaldean_Wellcome_V0034440.jpg/1280px-The_fall_of_Babylon%3B_Cyrus_the_Great_defeating_the_Chaldean_Wellcome_V0034440.jpg",
                    description: "The fall of Babylon; Cyrus the Great defeating the Chaldean army. Mezzotint by J. Martin, 1831, after himself, 1819. Iconographic Collections Keywords: John Martin; Cyrus"
                }
            }
        ],
        image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Hammurabi%27s_Babylonia_1.svg/1280px-Hammurabi%27s_Babylonia_1.svg.png",
            description: "The extent of the Babylonian Empire at the start and end of Hammurabi's reign, in what today is modern day Iraq and Iran"
        },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Df-QKEZ1pptrdG48YEqAye-sDEZ9jswWflMHSDl6tC4&font=Default&lang=en&initial_zoom=2&height=650"
      },    
      Carthage: {
      description: "Carthage, founded by Phoenician settlers from Tyre around 814 BCE, emerged as a dominant maritime power in the western Mediterranean. Known for its extensive trade networks and formidable navy, Carthage became a central hub of commerce and culture. Its rivalry with Rome led to the Punic Wars, culminating in its destruction in 146 BCE. Despite this, Carthage's legacy endures through its contributions to maritime trade, military strategy, and cultural exchanges across the Mediterranean.",
      items: [
        {
          title: "Founding of Carthage (814 BCE)",
          content: "According to tradition, Carthage was established by Queen Elissa, also known as Dido, who fled Tyre to escape political turmoil. She and her followers settled on the coast of North Africa, founding Carthage, which means 'new city' in Phoenician. The city's strategic location facilitated its growth into a major trading hub, connecting various cultures and economies across the Mediterranean.",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Turner_Dido_Building_Carthage.jpg",
            description: "Painting depicting Queen Dido overseeing the construction of Carthage."
          }
        },
        {
          title: "Carthaginian Expansion and Trade Dominance (6th–3rd Century BCE)",
          content: "Carthage expanded its influence through a network of colonies and trade routes, extending from North Africa to parts of Spain, Sardinia, and Sicily. The city's economy thrived on the exchange of goods such as metals, textiles, and agricultural products. Carthage's powerful navy protected its commercial interests and asserted dominance over the western Mediterranean.",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Carthage_National_Museum_representation_of_city.jpg/1280px-Carthage_National_Museum_representation_of_city.jpg",
            description: "Modern reconstruction of Punic Carthage. The circular harbor at the front is the Cothon, the military port of Carthage, where all of Carthage's warships (Biremes) were anchored."
          }
        },
        {
          title: "The Punic Wars with Rome (264–146 BCE)",
          content: "Carthage engaged in a series of three wars with Rome, known as the Punic Wars. The most notable Carthaginian figure during this period was General Hannibal Barca, who famously led his troops, including war elephants, across the Alps into Italy during the Second Punic War. Despite initial successes, Carthage ultimately suffered defeat, leading to its complete destruction by Rome in 146 BCE.",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Hannibal_route_of_invasion-en.svg/1280px-Hannibal_route_of_invasion-en.svg.png",
            description: "Map showing Hannibal's route during his invasion of Italy in the Second Punic War."
          }
        },
        {
          title: "Reconstruction and Roman Carthage (1st Century BCE – 5th Century CE)",
          content: "After its destruction, Carthage was later rebuilt by the Romans under Julius Caesar and became a significant city within the Roman Empire. It served as a center of early Christianity and was the site of important councils in the early Church. The city remained influential until it was eventually overtaken by the Vandals in the 5th century CE.",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Quartier_Punique.JPG/1280px-Quartier_Punique.JPG",
            description: "Ruins of Roman Carthage, showcasing the city's architectural heritage."
          }
        }
      ],
      image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Carthage_323_BC.png",
        description: "Carthaginian territory in 323 BC"
      },
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1wurjG5FfsGfh095Dr4OKDVwHHLeCLBeArj9DGt0dEbk&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'"
      },
      Sumer: {
        description: "Sumer, located in the southern part of Mesopotamia (modern-day Iraq), is often regarded as the cradle of civilization. Emerging around 4500 BCE, the Sumerians developed one of the earliest known complex societies, marked by advancements in writing, architecture, governance, and agriculture. Their innovations laid the foundation for subsequent cultures in the region and significantly influenced the course of human history.",
        items: [
          {
            title: "Development of Cuneiform Writing (circa 3400 BCE)",
            content: "The Sumerians are credited with creating one of the world's earliest writing systems, known as cuneiform. Initially developed for record-keeping and administrative purposes, cuneiform evolved from pictographic representations to a complex script comprising wedge-shaped symbols pressed into clay tablets. This innovation facilitated the documentation of transactions, laws, and literary works, enabling the preservation and transmission of knowledge across generations.",
            image: {
              url: "https://cdn.kastatic.org/ka-perseus-images/59d49f3cd291d060c46f04afdd89e75495ab4df6.jpg",
              description: "A Sumerian cuneiform tablet from the city of Adab, dating to the 26th century BCE."
            }
          },
          {
            title: "Construction of Ziggurats (circa 3000 BCE)",
            content: "Sumerians constructed monumental religious structures known as ziggurats, which served as temples dedicated to their deities. These terraced, pyramid-like edifices were central to city-states such as Uruk, Ur, and Eridu. The ziggurat of Ur, dedicated to the moon god Nanna, exemplifies Sumerian architectural ingenuity and religious devotion. These structures not only functioned as places of worship but also symbolized the political and economic power of the city-state.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/White_Temple_ziggurat_in_Uruk.jpg/1280px-White_Temple_ziggurat_in_Uruk.jpg",
              description: "White temple ziggurat in Uruk"
            }
          },
          {
            title: "Formation of City-States and Early Governance (circa 2900 BCE)",
            content: "Sumer was characterized by the emergence of city-states, each functioning as an independent political entity with its own ruler, known as a 'lugal' or king. Prominent city-states included Uruk, Ur, Lagash, and Nippur. These urban centers featured complex social hierarchies, legal systems, and bureaucracies. The Sumerians developed early forms of governance, including codified laws and administrative practices, which influenced subsequent civilizations in the region.",
            image: {
              url: "https://www.artefacts-berlin.de/wp-content/uploads/2018/06/uruk-ur3-001.png",
              description: "Rconstruction of ancient Uruk"
            }
          },
          {
            title: "Advancements in Agriculture and Irrigation (circa 3000 BCE)",
            content: "The Sumerians developed sophisticated agricultural techniques, including the construction of extensive irrigation systems that harnessed the waters of the Tigris and Euphrates rivers. These innovations allowed for the cultivation of surplus crops, supporting population growth and urbanization. The ability to produce and store surplus food contributed to economic stability and the development of trade networks with neighboring regions.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mosul_river.jpg/1280px-Mosul_river.jpg",
              description: "The Tigris flowing through the region of modern Mosul in Upper Mesopotamia."
            }
          },
          {
            title: "Epic of Gilgamesh (circa 2100 BCE)",
            content: "The 'Epic of Gilgamesh' is one of the earliest known works of literary fiction, originating from Sumerian oral traditions. The epic narrates the adventures of Gilgamesh, the semi-mythical king of Uruk, exploring themes of friendship, the quest for immortality, and the human condition. This literary masterpiece provides valuable insights into Sumerian mythology, values, and societal concerns.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/7/7a/British_Museum_Flood_Tablet.jpg",
              description: "Neo-Assyrian clay tablet. Epic of Gilgamesh, Tablet 11: Story of the Flood. Known as the 'Flood Tablet' From the Library of Ashurbanipal, 7th century BC."
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Map_of_Sumer.png/1280px-Map_of_Sumer.png",
          description: "Map illustrating the major city-states of ancient Sumer in southern Mesopotamia."
        },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1WQ1mrd_3WQ5d4DDZb95_NoYyLXoBrS-N5QsVEhS7zyQ&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'"
      },
      IndusValley: {
        description: "The Indus Valley Civilization (IVC), also known as the Harappan Civilization, was a Bronze Age society that flourished from approximately 3300 BCE to 1300 BCE in the northwestern regions of South Asia, primarily in present-day Pakistan and northwest India. Renowned for its advanced urban planning, architecture, and social organization, the IVC is considered one of the world's earliest urban cultures, alongside those of Egypt and Mesopotamia.",
        items: [
          {
            title: "Urban Planning and Architecture",
            content: "The cities of the Indus Valley Civilization, such as Mohenjo-daro and Harappa, showcased remarkable urban planning and architectural prowess. Streets were laid out in a grid pattern, with well-organized residential and public areas. Buildings were constructed using standardized baked bricks, and many structures featured multiple stories. The cities also boasted advanced drainage systems, with covered sewers running along the streets, indicating a high priority on hygiene and public health.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Moen_Jo_Daro_%28The_Mond_of_the_Deads%29.jpg/1280px-Moen_Jo_Daro_%28The_Mond_of_the_Deads%29.jpg",
              description: "Regularity of streets and buildings suggests the influence of ancient urban planning in Mohenjo-daro's construction."
            }
          },
          {
            title: "Trade and Economy",
            content: "The Indus Valley Civilization had a thriving economy based on agriculture, supplemented by trade with neighboring regions. They cultivated crops such as wheat, barley, and peas, and domesticated animals including cattle and buffalo. The discovery of standardized weights and measures suggests a regulated trade system. Artifacts like seals and beads indicate commercial interactions with distant regions, including Mesopotamia, highlighting the civilization's extensive trade networks.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/d/da/Mesopotamia-Indus.jpg",
              description: "Mao of trade routes between IVC and Meopotamia"
            }
          },
          {
            title: "Script and Language",
            content: "The people of the Indus Valley developed a script known as the Indus script, consisting of various symbols inscribed on seals, pottery, and other artifacts. Despite numerous attempts, the script remains undeciphered, leaving aspects of their language and administrative systems a mystery. The inability to read their writings has limited our understanding of their societal structure, governance, and cultural practices.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Indus_script.jpg",
              description: "Three stamp seals and their impressions bearing Indus script characters alongside animals: 'unicorn' (left), bull (centre), and elephant (right); Guimet Museum"
            }
          },
          {
            title: "Art and Craftsmanship",
            content: "The Indus Valley Civilization is noted for its sophisticated craftsmanship. Artisans produced a variety of goods, including pottery, jewelry, and figurines, often exhibiting intricate designs and high-quality finishes. Notable artifacts include the 'Dancing Girl' bronze statue and various terracotta figurines, reflecting the artistic sensibilities and technological capabilities of the Harappans.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Valle_dell%27indo%2C_barca_a_forma_di_toro%2C_periodo_kot-dijan%2C_2800-2600_ac_ca._%28coll._priv.%29_02.jpg/1280px-Valle_dell%27indo%2C_barca_a_forma_di_toro%2C_periodo_kot-dijan%2C_2800-2600_ac_ca._%28coll._priv.%29_02.jpg",
              description: "Terracotta boat in the shape of a bull, and female figurines. Kot Diji period (c. 2800–2600 BC)."
            }
          },
          {
            title: "Decline and Legacy",
            content: "The decline of the Indus Valley Civilization around 1900 BCE remains a subject of scholarly debate. Theories suggest factors such as climate change, tectonic activity altering river courses, and invasions may have contributed to the gradual abandonment of urban centers. Despite its decline, the civilization's legacy persists, influencing subsequent cultures in the Indian subcontinent, particularly in urban planning, craft traditions, and agricultural practices.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/View_of_Granary_and_Great_Hall_on_Mound_F_-_Archaeological_site_of_Harappa.jpg/1280px-View_of_Granary_and_Great_Hall_on_Mound_F_-_Archaeological_site_of_Harappa.jpg",
              description: "Archaeological excavations at Harappa, providing insights into the rise and fall of the Indus Valley Civilization."
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Indus_Valley_Civilization%2C_Mature_Phase_%282600-1900_BCE%29.png",
          description: "Panoramic view of the archaeological site of Mohenjo-daro, a major urban center of the Indus Valley Civilization."
        },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1XNJEbdzPppmZs8IqreuGEoCYSPSxs_Xf1GeFsZ-Dqog&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'"
      },
      Egypt: {
        description: "Ancient Egypt, situated along the fertile banks of the Nile River in northeastern Africa, is renowned for its monumental architecture, rich cultural heritage, and significant contributions to human civilization. Spanning over 3,000 years, from approximately 3100 BCE to 30 BCE, Egyptian history is marked by periods of remarkable achievements in art, science, and governance, leaving an indelible legacy that continues to captivate the world.",
        items: [
          {
            title: "Unification of Upper and Lower Egypt (circa 3100 BCE)",
            content: "The unification of Upper and Lower Egypt under the first pharaoh, traditionally identified as King Narmer (also known as Menes), marked the beginning of the Early Dynastic Period. This monumental event established a centralized state, with Memphis as its capital, laying the foundation for the flourishing of Egyptian civilization. The Narmer Palette, an ancient ceremonial engraving, depicts this unification and is a testament to the early development of Egyptian art and hieroglyphic writing.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Abu_Simbel_0219.JPG/1280px-Abu_Simbel_0219.JPG",
              description: "Hapi tying the papyrus and reed plants in the sema tawy symbol for the unification of Upper and Lower Egypt."
            }
          },
          {
            title: "Construction of the Pyramids at Giza (circa 2580–2560 BCE)",
            content: "During the Fourth Dynasty of the Old Kingdom, Pharaoh Khufu commissioned the construction of the Great Pyramid at Giza, one of the most iconic structures in human history. This architectural marvel, along with the pyramids of Khafre and Menkaure, exemplifies the Egyptians' advanced engineering skills and their profound religious beliefs concerning the afterlife. The alignment and precision of these structures continue to intrigue scholars and visitors alike.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg/1280px-Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg",
              description: "The Great Pyramid of Giza, built during the Fourth Dynasty, stands as a testament to ancient Egyptian engineering."
            }
          },
          {
            title: "Reign of Hatshepsut (circa 1479–1458 BCE)",
            content: "Hatshepsut, one of Egypt's few female pharaohs, ruled during the Eighteenth Dynasty and is celebrated for her prosperous and peaceful reign. She initiated extensive building projects, including her mortuary temple at Deir el-Bahri, and expanded trade networks, notably sending expeditions to the Land of Punt. Hatshepsut's reign challenged traditional gender roles, and her legacy is evident in the monumental architecture and art from her era.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Il_tempio_di_Hatshepsut.JPG/1280px-Il_tempio_di_Hatshepsut.JPG",
              description: "The Mortuary Temple of Hatshepsut at Deir el-Bahri, an architectural masterpiece of the Eighteenth Dynasty."
            }
          },
          {
            title: "Amarna Period and Religious Reforms of Akhenaten (circa 1353–1336 BCE)",
            content: "Pharaoh Akhenaten, originally known as Amenhotep IV, introduced radical religious reforms by promoting the worship of Aten, the sun disk, as the supreme deity, effectively instituting a form of monotheism. He relocated the capital to a new city, Akhetaten (modern-day Amarna). This period, known as the Amarna Period, saw a distinctive artistic style and significant cultural upheaval. After Akhenaten's death, traditional religious practices were restored.",
            image: {
              url: "https://www.worldhistory.org/img/r/p/1500x1500/6946.jpg.webp?v=1736449988-1726471511",
              description: "Akhenaten and the royal family blessed by Aten, limestone relief from Tell el-Amarna, New Kingdom of Egypt, c. 1350 BCE. Egyptian Museum, Berlin."
            }
          },
          {
            title: "Reign of Ramses II (circa 1279–1213 BCE)",
            content: "Ramses II, also known as Ramses the Great, is often regarded as one of Egypt's most powerful and influential pharaohs. His reign during the Nineteenth Dynasty was marked by military campaigns, monumental construction projects, and a prolific progeny. He commissioned the temples at Abu Simbel and the Ramesseum, and his reign is notable for the signing of the first known peace treaty with the Hittites after the Battle of Kadesh.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ramses_II_besieging_the_Cheta_people_in_Dapur.jpg/1280px-Ramses_II_besieging_the_Cheta_people_in_Dapur.jpg",
              description: "Color reproduction of the relief depicting Ramesses II storming the Hittite fortress of Dapur"
            }
          },
          {
            title: "Cleopatra VII and the End of Ptolemaic Rule (69–30 BCE)",
            content: "Cleopatra VII, the last active ruler of the Ptolemaic Kingdom of Egypt, is renowned for her intelligence, political acumen, and relationships with Roman leaders Julius Caesar and Mark Antony. Her reign was marked by efforts to restore Egypt's independence amidst growing Roman influence. Following her defeat and subsequent suicide in 30 BCE, Egypt became a province of the Roman Empire, marking the end of ancient Egyptian self-rule.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Roman_Empire_-_Aegyptus_%28125_AD%29.svg/1280px-Roman_Empire_-_Aegyptus_%28125_AD%29.svg.png",
              description: "Map of Roman Egypt"
            }
          }
        ],
        image: {
          url: "https://www.worldhistory.org/uploads/images/12990.png?v=1730127312-0",
          description: "Map of ancient Egypt, showing the major cities and archaeological sites along the Nile River, from Abu Simbel in the south to Alexandria in the north."
        },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1VSwQtnMYOSTJeAMtnIfDOX_E7RGCknAQc5t8vVoHldg&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'"
      },
      Hittites: {
        description: "The Hittites were an ancient Indo-European people who established a significant civilization in Anatolia (modern-day Turkey) during the second millennium BCE. Known for their advanced legal systems, military prowess, and early use of iron, the Hittite Empire became one of the dominant powers in the ancient Near East, engaging in both conflict and diplomacy with neighboring civilizations such as Egypt and Assyria.",
        items: [
          {
            title: "Establishment of the Hittite Old Kingdom (circa 1700–1500 BCE)",
            content: "The Hittites emerged in central Anatolia, with their capital at Hattusa (modern Boğazköy). Early kings, such as Hattusili I, consolidated power over much of Anatolia and northern Syria. Hattusili's grandson, Mursili I, extended Hittite influence by raiding down the Euphrates River to Babylon, ending the Amorite dynasty there. This period laid the foundation for Hittite culture and governance.",
            image: {
              url: "https://smarthistory.org/wp-content/uploads/2021/02/35511001-870x447.jpg",
              description: "Limestone cylinder seal, Hittite, 14th–13th centuries B.C.E., from Carchemish, south-east Anatolia (modern Turkey) (© The Trustees of the British Museum)"
            }
          },
          {
            title: "The Hittite Empire (circa 1400–1200 BCE)",
            content: "Under rulers like Suppiluliuma I, the Hittites expanded their territory, becoming a major power in the Near East. They engaged in conflicts and formed treaties with neighboring states, including the famous Treaty of Kadesh with Egypt, one of the earliest known peace agreements. The Hittites were also among the first to work with iron, marking the transition from the Bronze Age to the Iron Age.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hittite_Kingdom.png/1280px-Hittite_Kingdom.png",
              description: "Map of the Hittite Empire at its greatest extent under Suppiluliuma I (c.1350–1322) and Mursili II (c.1321–1295)."
            }
          },
          {
            title: "Battle of Kadesh (circa 1274 BCE)",
            content: "The Battle of Kadesh was a significant conflict between the Hittite Empire, led by King Muwatalli II, and the Egyptian Empire under Pharaoh Ramesses II. Fought near the Orontes River in present-day Syria, it is one of the earliest battles in recorded history for which detailed tactics and formations are known. The battle concluded with the Treaty of Kadesh, one of the first known peace treaties.",
            image: {
              url: "https://pharaoh.se/images/Kadesh-iMonumenti-087t.webp",
              description: "Ancient Egyptian relief depicting the Battle of Kadesh."
            }
          },
          {
            title: "Decline and Fall of the Hittite Empire (circa 1200 BCE)",
            content: "The Hittite Empire began to decline due to internal strife, economic difficulties, and external pressures, including invasions by the Sea Peoples. The capital, Hattusa, was destroyed around 1180 BCE, marking the end of the Hittite Empire. However, Neo-Hittite city-states continued to exist in parts of Anatolia and northern Syria until they were eventually absorbed by the Neo-Assyrian Empire.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Hattusa%2C_capital_of_the_Hittite_Empire_04.jpg/1280px-Hattusa%2C_capital_of_the_Hittite_Empire_04.jpg",
              description: "The Great Temple in the inner city of Hattusa."
            }
          },
          {
            title: "Legacy of the Hittites",
            content: "The Hittites made significant contributions to law, governance, and technology. Their legal codes influenced subsequent legal systems in the region. They were pioneers in ironworking, which had a lasting impact on tool and weapon manufacturing. The discovery of Hittite cuneiform tablets has provided valuable insights into their language, culture, and interactions with other ancient civilizations.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Lion_Gate%2C_Hattusa_13_%28cropped%29.jpg/1280px-Lion_Gate%2C_Hattusa_13_%28cropped%29.jpg",
              description: "Gate of ancient city Hattusa."
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Empire_of_the_Hitties.png/1280px-Empire_of_the_Hitties.png",
          description: "Panoramic view of the Pyramids of Giza, emblematic of ancient Egypt's architectural achievements."
        },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1coTVUemq8OdCZhNEBIkPpT96BI2nLCnkdidnBtz_Yhk&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'"
      },
      Greece: {
        description: "Ancient Greece, spanning from approximately 800 BCE to 146 BCE, is celebrated as the cradle of Western civilization. Renowned for its profound contributions to philosophy, politics, art, and science, Greek culture laid the foundational principles of democracy, drama, and rational inquiry. The civilization's legacy continues to influence modern societies worldwide.",
        items: [
          {
            title: "The Archaic Period (circa 800–480 BCE)",
            content: "The Archaic Period marked the emergence of city-states, or 'poleis,' such as Athens, Sparta, and Corinth. This era witnessed the development of the Greek alphabet, inspired by the Phoenician script, facilitating the recording of literature and laws. Significant advancements in art and architecture occurred, including the creation of monumental sculptures and the establishment of the Doric and Ionic architectural orders. The period also saw the inception of the Olympic Games in 776 BCE, fostering a sense of shared Hellenic identity.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Apollon_Tempel_im_antiken_Korinth.jpg/1280px-Apollon_Tempel_im_antiken_Korinth.jpg",
              description: "Ruins of the Temple of Apollo within the polis of Ancient Corinth, built c. 540 BC, with the Acrocorinth (the city's acropolis) seen in the background"
            }
          },
          {
            title: "The Classical Period (circa 480–323 BCE)",
            content: "The Classical Period is often regarded as the zenith of Greek cultural and political achievement. Following the Greek victory in the Persian Wars, Athens experienced a 'Golden Age' under the leadership of Pericles, who championed the construction of the Parthenon and the flourishing of arts and philosophy. Thinkers such as Socrates, Plato, and Aristotle explored profound questions of ethics, politics, and metaphysics. This era also witnessed the Peloponnesian War between Athens and Sparta, culminating in Spartan victory and a shift in Greek power dynamics.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Taormina_BW_2012-10-05_16-23-06.JPG/1280px-Taormina_BW_2012-10-05_16-23-06.JPG",
              description: "Greek Theater of Taormina, Sicily, Magna Graecia."
            }
          },
          {
            title: "The Hellenistic Period (circa 323–146 BCE)",
            content: "The Hellenistic Period commenced with the conquests of Alexander the Great, who extended Greek culture across a vast empire encompassing Egypt, Persia, and parts of India. This era was characterized by the blending of Greek and Eastern cultures, leading to advancements in science, mathematics, and art. Cities like Alexandria became centers of learning, housing the Great Library and attracting scholars such as Euclid and Archimedes. The period concluded with the gradual annexation of Greek territories by the Roman Republic, culminating in the Battle of Corinth in 146 BCE.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Battle_of_Issus_mosaic_-_Museo_Archeologico_Nazionale_-_Naples_2013-05-16_16-25-06_BW.jpg/1280px-Battle_of_Issus_mosaic_-_Museo_Archeologico_Nazionale_-_Naples_2013-05-16_16-25-06_BW.jpg",
              description: "Mosaic of Alexander the Great"
            }
          },
          {
            title: "Philosophical Contributions",
            content: "Ancient Greece was the birthplace of Western philosophy. Socrates introduced the Socratic method, emphasizing the importance of questioning in the pursuit of knowledge. His student, Plato, founded the Academy and wrote dialogues exploring justice, virtue, and the ideal state. Aristotle, a student of Plato, made extensive contributions to logic, metaphysics, ethics, and natural sciences, profoundly shaping subsequent intellectual thought.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/UWASocrates_gobeirne_cropped.jpg/1280px-UWASocrates_gobeirne_cropped.jpg",
              description: "Cropped image of a Socrates bust for use in philosophy-related templates etc. Bust carved by by Victor Wager from a model by Paul Montford, University of Western Australia, Crawley, Western Australia."
            }
          },
          {
            title: "Birth of Democracy in Athens",
            content: "Athens is renowned for developing one of the earliest forms of democracy. Reforms initiated by leaders such as Solon and Cleisthenes in the 6th century BCE established institutions that allowed citizens to participate directly in decision-making processes. This system laid the groundwork for modern democratic governance, emphasizing principles of civic participation and equality before the law.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Discurso_funebre_pericles.PNG",
              description: "Nineteenth-century painting by Philipp Foltz depicting the Athenian politician Pericles delivering his famous funeral oration in front of the Assembly."
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Greek_Colonization_Archaic_Period.svg/1280px-Greek_Colonization_Archaic_Period.svg.png",
          description: "Map of Greek colonies"
        },
    iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1g8lXW7b85VmZBQ22nf4E4yJNL02mtTxoOep32dFUp-M&font=Default&lang=en&initial_zoom=2&height=650",
      },
      Rome: {
    description: "Ancient Rome, from its legendary founding in 753 BCE to the fall of the Western Roman Empire in 476 CE, was a civilization that profoundly influenced the course of Western history. Renowned for its republican governance, imperial conquests, legal innovations, and monumental architecture, Rome's legacy endures in modern legal systems, languages, engineering, and governance structures.",
    items: [
      {
        title: "Founding of Rome (753 BCE)",
        content: "According to Roman mythology, Rome was founded on April 21, 753 BCE, by the twin brothers Romulus and Remus, who were said to be the sons of the war god Mars. Raised by a she-wolf, the twins decided to establish a city; however, a dispute led Romulus to kill Remus and become the first king of Rome, naming the city after himself. This legendary origin underscores themes of conflict and destiny that permeate Roman history.",
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Altar_Mars_Venus_Massimo.jpg/1280px-Altar_Mars_Venus_Massimo.jpg",
          description: "Depictions of Romulus and Remus, the legendary founders of Rome."
        }
      },
      {
        title: "Establishment of the Roman Republic (509 BCE)",
        content: "In 509 BCE, the Roman monarchy was overthrown, leading to the establishment of the Roman Republic. This new political system was characterized by a complex constitution, a system of checks and balances, and the separation of powers among elected magistrates, the Senate, and popular assemblies. The Republic emphasized civic duty and the rule of law, laying the foundation for Roman political culture.",
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Roman_Republic_before_the_First_Punic_War.png/1280px-Roman_Republic_before_the_First_Punic_War.png",
          description: "The Roman Republic before the First Punic War."
        }
      },
      {
        title: "Punic Wars (264–146 BCE)",
        content: "The Punic Wars were a series of three conflicts fought between Rome and the city-state of Carthage. These wars were pivotal in establishing Rome's dominance over the western Mediterranean. The Second Punic War is particularly notable for the Carthaginian general Hannibal's daring crossing of the Alps to invade Italy. Rome's eventual victory in the Third Punic War led to the complete destruction of Carthage and the expansion of Roman territory.",
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Domain_changes_during_the_Punic_Wars.gif",
          description: "Map of the Punic Wars"
        }
      },
      {
        title: "Assassination of Julius Caesar (44 BCE)",
        content: "On March 15, 44 BCE, known as the Ides of March, Julius Caesar was assassinated by a group of Roman senators. Caesar's increasing power and declaration as 'dictator for life' had raised fears of a return to monarchy. His assassination led to a series of civil wars, ultimately resulting in the end of the Republic and the rise of the Roman Empire under his adopted heir, Octavian, later known as Augustus.",
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Vincenzo_Camuccini_-_La_morte_di_Cesare.jpg/1280px-Vincenzo_Camuccini_-_La_morte_di_Cesare.jpg",
          description: "Artistic depiction of Julius Caesar's assasination"
        }
      },
      {
        title: "Reign of Augustus and the Pax Romana (27 BCE – 14 CE)",
        content: "Augustus, the first Roman emperor, ruled from 27 BCE to 14 CE. His reign initiated the Pax Romana, a period of relative peace and stability across the Roman Empire that lasted for over two centuries. Augustus implemented significant administrative, financial, and military reforms, consolidating imperial power and fostering economic prosperity and cultural flourishing.",
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Domus-augusti-2.jpg/1280px-Domus-augusti-2.jpg",
          description: "Fresco paintings inside the House of Augustus, his residence during his reign as emperor."
        }
      },
      {
        title: "Constantine and the Edict of Milan (313 CE)",
        content: "Emperor Constantine the Great played a crucial role in the spread of Christianity within the Roman Empire. In 313 CE, he issued the Edict of Milan, granting religious tolerance to all faiths and effectively legalizing Christianity. Constantine also founded the city of Constantinople, which became the new capital of the Roman Empire, marking a significant shift in the empire's cultural and political center.",
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/ImperialpalaceMilan.jpg",
          description: "Remains of the Imperial palace of Mediolanum (Milan). The imperial palace (built in large part by Maximian, colleague of Diocletian) was a large complex with several buildings, gardens, and courtyards, used for the Emperor's private and public activities, and for his court, family, and imperial bureaucracy."
        }
      },
      {
        title: "Fall of the Western Roman Empire (476 CE)",
        content: "The fall of the Western Roman Empire is traditionally dated to 476 CE, when the Germanic chieftain Odoacer deposed the last Roman emperor, Romulus Augustulus. This event marked the end of ancient Rome and the beginning of the Middle Ages in Western Europe. However, the Eastern Roman Empire, known as the Byzantine Empire, continued to thrive for nearly a thousand more years until the fall of Constantinople in 1453.",
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Invasions_of_the_Roman_Empire_1.png/1280px-Invasions_of_the_Roman_Empire_1.png",
          description: "Map of the division of the Roman Empire"
        }
      }
    ],
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Roman_republic%2C_territory_44_BC.svg/1280px-Roman_republic%2C_territory_44_BC.svg.png",
      description: "Map of early Roman Empire"
    },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1BedduueglXkq94TJOWaAXAFALky6TQ5C8hFwPV9qJ6o&font=Default&lang=en&initial_zoom=2&height=650",
      },
      Persia: {
        description: "The Persian Empire, notably the Achaemenid Empire (circa 550–330 BCE), was a vast and culturally diverse civilization that spanned three continents, including parts of Asia, Africa, and Europe. Renowned for its administrative efficiency, architectural achievements, and policies of tolerance under leaders like Cyrus the Great and Darius I, the Persian Empire significantly influenced the course of world history.",
        items: [
          {
            title: "Rise of the Achaemenid Empire under Cyrus the Great (circa 550 BCE)",
            content: "Cyrus II, known as Cyrus the Great, founded the Achaemenid Empire by uniting the Persian tribes and overthrowing the Median Empire. His conquests extended the empire's reach, including the defeat of Lydia and the Neo-Babylonian Empire. Cyrus is celebrated for his progressive approach to governance, notably his respect for the customs and religions of the lands he conquered, exemplified by his decree allowing exiled Jews to return to Jerusalem.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Cyrus_Cylinder_front.jpg/1280px-Cyrus_Cylinder_front.jpg",
              description: "The Cyrus Cylindar, symbol of Cyrus the Great's rule."
            }
          },
          {
            title: "Reign of Darius I and Administrative Reforms (522–486 BCE)",
            content: "Darius I, also known as Darius the Great, ascended to the throne after a period of political turmoil. He implemented significant administrative reforms, dividing the empire into satrapies (provinces) governed by satraps. Darius standardized coinage, introduced a uniform system of weights and measures, and constructed the Royal Road to facilitate communication and trade across the vast empire. His reign also saw the construction of the ceremonial capital, Persepolis.",
            image: {
              url: "https://cdn.thecollector.com/wp-content/uploads/2020/01/bas-reliefs-persepolis-facts.jpg?width=750&quality=70",
              description: "Reliefs at Persepolis, built under Darius I."
            }
          },
          {
            title: "Greco-Persian Wars (circa 499–449 BCE)",
            content: "The Greco-Persian Wars were a series of conflicts between the Persian Empire and Greek city-states. Initiated by the Ionian Revolt and culminating in battles such as Marathon, Thermopylae, and Salamis, these wars highlighted the resilience of the Greek states against Persian expansion. Despite initial successes, the Persians were ultimately unable to subjugate Greece, marking a significant check on their westward expansion.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/2/22/Greek-Persian_duel.jpg",
              description: "Greek hoplite and Persian warrior fighting each other. Depiction in ancient kylix. 5th c. B.C. National Archaeological Museum of Athens."
            }
          },
          {
            title: "Construction of Persepolis (circa 518 BCE)",
            content: "Persepolis, the ceremonial capital of the Achaemenid Empire, was founded by Darius I. The city exemplified the empire's architectural grandeur, featuring impressive palaces, halls, and intricate reliefs depicting representatives from various subject nations bringing tribute. Persepolis symbolized the empire's wealth and diversity until its destruction by Alexander the Great in 330 BCE.",
            image: {
              url: "https://cdn.thecollector.com/wp-content/uploads/2020/01/bas-reliefs-persepolis-facts.jpg?width=750&quality=70",
              description: "Reliefs at Persepolis, built under Darius I."
            }
          },
          {
            title: "Fall of the Achaemenid Empire to Alexander the Great (330 BCE)",
            content: "The Achaemenid Empire met its demise when Alexander the Great of Macedonia launched a successful campaign against it. Following decisive battles, including the Battle of Gaugamela, Alexander captured key Persian cities, culminating in the burning of Persepolis. This conquest marked the end of Persian dominance and the beginning of the Hellenistic period.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Battle_of_Issus_mosaic_-_Museo_Archeologico_Nazionale_-_Naples_2013-05-16_16-25-06_BW.jpg/1280px-Battle_of_Issus_mosaic_-_Museo_Archeologico_Nazionale_-_Naples_2013-05-16_16-25-06_BW.jpg",
              description: "The Battle of Issus, between Alexander the Great on horseback to the left, and Darius III in the chariot to the right, represented in a Pompeii mosaic dated 1st century BC – Naples National Archaeological Museum."
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Achaemenid_Empire_500_BCE.jpg/1280px-Achaemenid_Empire_500_BCE.jpg",
          description: "The Achaemenid Empire at its greatest territorial extent, under the rule of Darius the Great (522–486 BC)."
        },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1GOojmtjOQMnS-6O6QS9xTBNLrAXm3rkTbP-PhJ2BFtM&font=Default&lang=en&initial_zoom=2&height=650",
      },
      China: {
        description: "Ancient China, with a history spanning thousands of years, is one of the world's oldest continuous civilizations. Renowned for its profound contributions to philosophy, technology, art, and governance, China's dynastic periods laid the foundation for many aspects of modern society. From the development of writing systems to monumental architectural achievements, ancient China's legacy continues to influence the world today.",
        items: [
          {
            title: "Xia Dynasty (circa 2070–1600 BCE)",
            content: "The Xia Dynasty is traditionally considered the first dynasty in Chinese history, marking the transition from a prehistoric society to a dynastic civilization. While archaeological evidence is limited and often debated, the Xia Dynasty is credited with establishing the hereditary system of governance and initiating early forms of Chinese culture and societal structure.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Nine_Provinces_of_China.png",
              description: "Approximate location of Xia dynasty (in pink) in traditional Chinese historiography. Because of the lack of written records, the existence of Xia cannot be proven."
            }
          },
          {
            title: "Shang Dynasty (circa 1600–1046 BCE)",
            content: "The Shang Dynasty is the earliest Chinese dynasty supported by archaeological evidence. Centered around the Yellow River Valley, the Shang are known for their advanced bronze casting, development of a writing system, and complex urban centers. Oracle bones from this period provide some of the earliest records of Chinese script, offering insights into their rituals, governance, and society.",
            image: {
              url: "https://cdn.kastatic.org/ka-perseus-images/2e212ffc849dd227625739c1b1e5098711c276dc.jpg",
              description: "Shang Dynasty bronze vessel"
            }
          },
          {
            title: "Zhou Dynasty and the Mandate of Heaven (1046–256 BCE)",
            content: "The Zhou Dynasty, which followed the Shang, introduced the concept of the Mandate of Heaven to justify their rule, suggesting that the right to govern was granted by a divine source based on virtue. This period saw the development of significant philosophical schools, including Confucianism and Daoism, which profoundly influenced Chinese thought and culture. The latter part of the Zhou era, known as the Warring States Period, was marked by fragmentation and conflict among rival states.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Early_Western_Zhou_Bronze_Gui_01.jpg/1920px-Early_Western_Zhou_Bronze_Gui_01.jpg",
              description: "Zhou Dynasty bronze vessel"
            }
          },
          {
            title: "Qin Dynasty and the Unification of China (221–206 BCE)",
            content: "The Qin Dynasty, though short-lived, was pivotal in unifying China after the Warring States Period. Under Emperor Qin Shi Huang, standardized systems of writing, currency, and measurements were implemented. The construction of the Great Wall began during this time to protect against northern invasions. Despite these achievements, the dynasty's authoritarian rule led to widespread dissent, resulting in its rapid collapse after the emperor's death.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/2560px-51714-Terracota-Army.jpg",
              description: "Terracotta Army from the Qin Dynasty"
            }
          },
          {
            title: "Han Dynasty and the Silk Road (206 BCE–220 CE)",
            content: "The Han Dynasty is often regarded as a golden age in Chinese history, marked by significant advancements in technology, culture, and trade. The establishment of the Silk Road facilitated commerce and cultural exchange between China and distant civilizations, including those in Europe and the Middle East. Innovations such as papermaking and the seismograph emerged during this period. Confucianism was adopted as the state philosophy, deeply influencing Chinese society and governance.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Silk_road_Kazakhstan.svg/1280px-Silk_road_Kazakhstan.svg.png",
              description: "Silk road on a globe with modern-day borders, centred on Kazakhstan"
            }
          }
        ],
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Later_Han.png",
            description: "Panoramic view of the Pyramids of Giza, emblematic of ancient Egypt's architectural achievements."
          },
          iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Yfyu0qIFjaq1KBRmGG7dojjFPraoCa59gjWD7ZSXX3s&font=Default&lang=en&initial_zoom=2&height=650",
      },
      VedicIndia: {
        description: "The Vedic Period (c. 1500 – c. 500 BCE) marks a significant era in ancient Indian history, characterized by the composition of the Vedas—the oldest sacred texts of Hinduism. This epoch witnessed the transition from nomadic pastoralism to settled agriculture, the emergence of complex social hierarchies, and the foundation of religious and philosophical concepts that continue to influence Indian culture.",
        items: [
          {
            title: "Composition of the Vedas (c. 1500 – 900 BCE)",
            content: "The Vedic corpus comprises four primary texts: the Rigveda, Samaveda, Yajurveda, and Atharvaveda. Composed in archaic Sanskrit, these texts consist of hymns, chants, rituals, and philosophical discourses. The Rigveda, believed to be the earliest, contains over a thousand hymns dedicated to various deities. These compositions were transmitted orally across generations, forming the bedrock of Vedic religion and societal norms.",
            image: {
              url: "https://sanatanforums.in/wp-content/uploads/hm_bbpui/1738/60q8ufdocgqskq6nsu33ftrq08qk68zr.jpeg",
              description: "Illustration representing Vedic manuscript"
            }
          },
          {
            title: "Early Vedic Society and Culture",
            content: "During the Early Vedic Period, Indo-Aryan tribes settled in the northwestern regions of the Indian subcontinent. Society was primarily pastoral, with cattle serving as a central measure of wealth. Social structure was relatively egalitarian, though distinctions based on occupation began to emerge, laying the groundwork for the later caste system. Religious practices centered around fire sacrifices (yajnas) conducted by priests to appease deities and ensure communal well-being.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/5/57/Early_Vedic_Culture_%281700-1100_BCE%29.png",
              description: "Early Vedic Culture (1500-1100 BCE)"
            }
          },
          {
            title: "Later Vedic Period and Societal Transformations (c. 1000 – 500 BCE)",
            content: "The Later Vedic Period saw the expansion of Aryan settlements into the Gangetic plains, transitioning from pastoralism to settled agriculture. This shift led to increased social stratification, formalized into the varna system, comprising Brahmins (priests), Kshatriyas (warriors), Vaishyas (traders), and Shudras (servants). Political structures evolved into larger kingdoms (Mahajanapadas), and religious practices became more complex, emphasizing elaborate rituals and the role of Brahmins as intermediaries between the gods and the people.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/MS_Indic_37%2C_Isa_upanisad._Wellcome_L0027330.jpg/1280px-MS_Indic_37%2C_Isa_upanisad._Wellcome_L0027330.jpg",
              description: "Ancient manuscript of Upanishad text"
            }
          },
          {
            title: "Philosophical Developments and the Upanishads",
            content: "Towards the end of the Vedic Period, a shift from ritualistic practices to philosophical inquiry emerged, encapsulated in the Upanishads. These texts delve into concepts such as Brahman (the ultimate reality), Atman (the individual soul), and the nature of existence, laying the foundation for Indian philosophical thought and influencing subsequent religious traditions, including Buddhism and Jainism.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Guru_and_DiscipleI.jpg/1280px-Guru_and_DiscipleI.jpg",
              description: "Depiction of sages discussing the Upanishads"
            }
          },
          {
            title: "Legacy of the Vedic Period",
            content: "The Vedic Period's contributions to Indian civilization are profound, including the establishment of Sanskrit as a literary and liturgical language, the codification of social and religious norms, and the development of early political institutions. The philosophical and spiritual ideas articulated during this era continue to resonate, forming the core of Hindu thought and influencing global philosophical discourses.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/ചിതിയുടെയും-ഉപകരണങ്ങളുടെയും_മാതൃക.jpg/1280px-ചിതിയുടെയും-ഉപകരണങ്ങളുടെയും_മാതൃക.jpg",
              description: "Modern replica of utensils and falcon shaped altar used for Agnicayana, an elaborate Śrauta ritual originating from the Kuru Kingdom."
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/0/02/Map_of_Vedic_India.png",
          description: "Map of Vedic India"
        },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=15Vj4t52WyUG_73AEEk26ZFm1o87nZI2I_9IhWHuLJXc&font=Default&lang=en&initial_zoom=2&height=650",
      },
       Teotihuacan: {
        description: "Teotihuacan, meaning 'The City of the Gods' in Nahuatl, was a prominent Mesoamerican city located northeast of modern-day Mexico City. Flourishing between 100 BCE and 650 CE, it was renowned for its monumental architecture, complex urban planning, and significant cultural influence across Mesoamerica. At its zenith, Teotihuacan was among the largest cities globally, with an estimated population of over 100,000 inhabitants. ",
        items: [
          {
            title: "Origins and Early Development",
            content: "The origins of Teotihuacan remain a subject of scholarly debate. Evidence suggests that the city began as a small settlement around 400 BCE, experiencing substantial growth by 100 BCE. Its development was likely influenced by the decline of neighboring cultures, such as the Olmec, and the strategic advantages of its location in the Valley of Mexico, which offered fertile land and access to trade routes. ",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Classic_sites_1.png",
              description: "Teotihuacan and other important Classic Era settlements."
            }
          },
          {
            title: "Urban Planning and Architecture",
            content: "Teotihuacan is renowned for its sophisticated urban planning and monumental structures. The city's layout is organized along the 'Avenue of the Dead,' a central axis flanked by impressive edifices. Notable structures include the Pyramid of the Sun, the Pyramid of the Moon, and the Temple of the Feathered Serpent (Quetzalcoatl). These pyramids served religious and ceremonial purposes, reflecting the city's role as a major religious center.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sun_Pyramid_05_2015_Teotihuacan_3304.JPG/2880px-Sun_Pyramid_05_2015_Teotihuacan_3304.JPG",
              description: "Pyramid of the Sun"
            }
          },
          {
            title: "Cultural and Economic Influence",
            content: "At its peak, Teotihuacan exerted considerable cultural and economic influence throughout Mesoamerica. The city was a hub for trade, art, and religious practices, with its distinctive architectural and artistic styles inspiring other civilizations, including the Maya. Artifacts such as pottery, obsidian tools, and murals reveal a society with complex social structures and a rich cultural life.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Teotihuacán_mask.jpg/1280px-Teotihuacán_mask.jpg",
              description: "Teotihuacán-style mask, Classical period. Walters Art Museum."
            }
          },
          {
            title: "Decline and Abandonment",
            content: "The decline of Teotihuacan began around 600 CE, with the city experiencing significant destruction by fire in the mid-7th century. The reasons for its collapse remain unclear, though theories include internal strife, resource depletion, and external invasions. By 750 CE, Teotihuacan was largely abandoned, yet its cultural legacy persisted, influencing subsequent civilizations such as the Aztecs, who revered the site and incorporated aspects of its culture into their own.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Teotihuacán_-_Menschenopfer_2.jpg/1280px-Teotihuacán_-_Menschenopfer_2.jpg",
              description: "Human sacrifices found at the foundations of La Ciudadela."
            }
          },
          {
            title: "Archaeological Significance",
            content: "Today, Teotihuacan is a UNESCO World Heritage Site and one of the most visited archaeological sites in Mexico. Ongoing excavations continue to uncover insights into its complex society, including recent discoveries of murals, artifacts, and residential compounds that shed light on the daily lives of its inhabitants. The city's enduring mysteries and monumental architecture make it a focal point for understanding pre-Columbian history in the Americas.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Från_utgrävningarna_vid_Thomas_Palmas_hus_-_SMVK_-_0307.a.0038.tif/lossy-page1-1280px-Från_utgrävningarna_vid_Thomas_Palmas_hus_-_SMVK_-_0307.a.0038.tif.jpg",
              description: "Images from the 1932 Sigvald Linné archeological expedition at Teotihuacán, Mexico."
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Mesoamerica_topographic_map-blank.svg/1280px-Mesoamerica_topographic_map-blank.svg.png",
          description: "Teotihuacan is located in Mesoamerica"
        },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1brElQBdWbvOaMlxNvNF4Jlu6XIAuyhcbZdA6v2-6ZDc&font=Default&lang=en&initial_zoom=2&height=650",
      },
      Olmecs: {
        description: "The Olmec civilization, flourishing from approximately 1200 to 400 BCE along Mexico's Gulf Coast in present-day Veracruz and Tabasco, is recognized as Mesoamerica's earliest major civilization. Renowned for their monumental stone sculptures, including colossal heads, and significant cultural contributions, the Olmecs laid foundational aspects of Mesoamerican society, influencing subsequent civilizations such as the Maya and Aztec. :contentReference[oaicite:0]{index=0}",
        items: [
          {
            title: "Origins and Heartland",
            content: "The Olmec civilization emerged in the fertile lowlands of the Gulf of Mexico, particularly in the modern Mexican states of Veracruz and Tabasco. This region, often referred to as the Olmec heartland, was characterized by rich alluvial soils, abundant water sources, and a tropical climate, providing an ideal environment for agriculture and settlement. The development of complex societies in this area set the stage for the rise of the Olmec civilization. :contentReference[oaicite:1]{index=1}",
            image: {
              url: "https://cdn.preterhuman.net/texts/other/crystalinks/olmecmap.jpg",
              
              description: "Map depicting the Olmec heartland along Mexico's Gulf Coast."
            }
          },
          {
            title: "Major Urban Centers",
            content: "The Olmecs established several significant urban centers, with San Lorenzo Tenochtitlán and La Venta being the most prominent. San Lorenzo, flourishing around 1200 to 900 BCE, is notable for its complex drainage systems and monumental architecture. Following the decline of San Lorenzo, La Venta rose to prominence around 900 to 400 BCE, featuring impressive earthen pyramids and ceremonial complexes. These centers served as political, religious, and cultural hubs, reflecting the sophistication of Olmec society. :contentReference[oaicite:2]{index=2}",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/La_Venta_Pirámide_cara_sur.jpg/800px-La_Venta_Pirámide_cara_sur.jpg",
              
              description: "The Great Pyramid of La Venta, an example of Olmec monumental architecture."
            }
          },
          {
            title: "Art and Iconography",
            content: "Olmec art is renowned for its distinctive style and iconography, with the colossal stone heads being among the most iconic artifacts. These massive sculptures, some weighing up to 40 tons, are believed to represent Olmec rulers and exhibit individualized facial features. In addition to the colossal heads, the Olmecs produced intricate jade carvings, pottery, and figurines, often depicting deities, mythical creatures, and ritual scenes. Their art reflects a complex cosmology and has significantly influenced the artistic traditions of subsequent Mesoamerican cultures. :contentReference[oaicite:3]{index=3}",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Olmeca_head_in_Villahermosa.jpg/1280px-Olmeca_head_in_Villahermosa.jpg",
              description: "An Olmec colossal head, showcasing the distinctive artistic style of the civilization."
            }
          },
          {
            title: "Religion and Mythology",
            content: "The religious beliefs of the Olmec civilization were complex and influential, featuring a pantheon of deities and supernatural beings. Central to their religion was the worship of the jaguar, often depicted as a were-jaguar figure, symbolizing a connection between the human and divine realms. The Olmecs are also credited with developing early forms of ritual practices, including bloodletting and possibly human sacrifice, which became prevalent in later Mesoamerican religions. :contentReference[oaicite:4]{index=4}",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Small_Olmec_Figurines_%28Met%29.jpg/1280px-Small_Olmec_Figurines_%28Met%29.jpg",
              description: "A selection of tiny naturalistic Olmec ceramic figurines from the Metropolitan Museum of Art. The hunchback at center is less than 3 inches (7.6 cm) tall."
            }
          },
          {
            title: "Influence and Legacy",
            content: "The Olmec civilization is often referred to as the 'mother culture' of Mesoamerica due to its significant influence on later societies. They are credited with innovations such as the Mesoamerican Long Count calendar, the concept of zero, and possibly the earliest writing system in the Western Hemisphere. Their religious iconography, architectural styles, and societal organization set foundational patterns that were adopted and adapted by subsequent civilizations, including the Maya and the Aztec. :contentReference[oaicite:5]{index=5}",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Tumba_Olmeca.jpg",
              description: "Olmec tomb at La Venta Park, Villahermosa, Tabasco"
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Olmec_Heartland_Overview_4.svg/1280px-Olmec_Heartland_Overview_4.svg.png",
          description: "An Olmec colossal head, showcasing the distinctive artistic style of the civilization."
        },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1Hdg32U125lbYxFSyXQsEpkmTWKtmpSSkkZZe5GtbjP4&font=Default&lang=en&initial_zoom=2&height=650",
      },
      Mayans: {
        description: "The Maya civilization, one of the most sophisticated in Mesoamerican history, thrived from as early as 2000 BCE to the Spanish conquest in 1697 CE. Known for their advancements in astronomy, mathematics, writing, and architecture, the Maya left a lasting legacy in Mesoamerican history. Their city-states, monumental temples, and detailed calendar systems demonstrate a high level of cultural and scientific achievement, which has continued to fascinate historians and archaeologists.",
        items: [
          {
            title: "Preclassic Period - Foundations of Maya Civilization (c. 2000 BCE–250 CE)",
            content: "The Preclassic Period laid the groundwork for the rise of Maya civilization. During this time, early agricultural communities developed in present-day southern Mexico, Guatemala, Belize, Honduras, and El Salvador. The domestication of maize, beans, and squash allowed populations to settle permanently, leading to the growth of small villages. As the population increased, so did social stratification, with evidence of emerging elite classes.\n\nKey developments included the establishment of ceremonial centers and the creation of early hieroglyphic writing. Settlements such as Nakbé and El Mirador featured monumental architecture, including pyramids and platforms that predated their more famous counterparts in the Classical Period. These early advancements in religion, governance, and urban planning set the stage for the golden age of Maya civilization.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Nakbe%2C_small_temple_1.jpg",
              description: "The pyramid at Nakbé, one of the earliest ceremonial centers of the Maya during the Preclassic Period."
            }
          },
          {
            title: "Classical Period - The Golden Age of the Maya (c. 250–900 CE)",
            content: "The Classical Period marks the height of Maya cultural and scientific achievements. City-states such as Tikal, Palenque, Copán, and Calakmul became dominant centers of political, religious, and economic activity. Monumental structures, including pyramids, palaces, and ball courts, were constructed, many of which still stand today.\n\nThe Maya developed a sophisticated writing system composed of hieroglyphs, which they used to record historical events, astronomical observations, and myths. The Long Count calendar, a mathematical system capable of tracking time across thousands of years, reflects their advanced understanding of astronomy and mathematics. This period also saw frequent conflicts between city-states, as rulers sought to expand their influence and control trade routes. Despite these rivalries, the Maya continued to flourish, producing remarkable achievements in art, architecture, and science.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Tikal_Temple1_2006_08_11.JPG/1280px-Tikal_Temple1_2006_08_11.JPG",
              description: "Temple I at Tikal, a major city-state during the Classical Period of Maya civilization."
            }
          },
          {
            title: "Postclassic Period - Decline and Adaptation (c. 900–1524 CE)",
            content: "After the collapse of many major city-states around 900 CE, Maya civilization transitioned into the Postclassic Period. This era saw the rise of northern centers such as Chichen Itza, Uxmal, and Mayapan in the Yucatan Peninsula. These cities retained much of the architectural and cultural traditions of the earlier periods but adapted to new political and economic realities.\n\nChichen Itza became a dominant power, likely due to its strategic location and access to coastal trade routes. The Maya also increased their interaction with neighboring civilizations, including the Toltecs and Aztecs, influencing and being influenced by their cultural practices. Despite the decline of political unity, the Maya maintained their artistic and scientific traditions. However, the arrival of Spanish conquistadors in the 16th century disrupted Maya society and marked the end of their independence.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1280px-Chichen_Itza_3.jpg",
              description: "El Castillo at Chichen Itza, a prominent Maya city during the Postclassic Period."
            }
          },
          {
            title: "The Long Count Calendar - A Timeless Legacy",
            content: "One of the Maya's most remarkable achievements is their calendrical system, particularly the Long Count calendar. This system, based on a vigesimal (base-20) numbering structure, allowed the Maya to calculate time over vast periods. Unlike the 365-day Haab calendar or the 260-day Tzolk'in calendar used for ritual purposes, the Long Count was used to document historical events and celestial cycles. It famously ended a major cycle on December 21, 2012, an event that sparked widespread speculation about the 'end of the world.' However, for the Maya, it signified the completion of one era and the beginning of another.\n\nThis calendar reflects the Maya's extraordinary knowledge of astronomy and their ability to align their structures, rituals, and daily life with cosmic events. The Maya viewed time as cyclical, and their calendar remains one of the most sophisticated systems ever devised.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/East_side_of_stela_C%2C_Quirigua.svg/800px-East_side_of_stela_C%2C_Quirigua.svg.png",
              description: "A representation of the Maya Long Count calendar, used to track extensive time periods."
            }
          },
          {
            title: "The Spanish Conquest and Resistance (1517–1697 CE)",
            content: "The arrival of Spanish conquistadors in the early 16th century marked a turning point in Maya history. Hernán Cortés and his followers, armed with advanced weaponry and aided by European diseases, began the systematic conquest of the Americas. The Maya fiercely resisted Spanish colonization, with some regions, such as the Petén Itzá, holding out until 1697.\n\nDuring this time, many Maya texts and artifacts were destroyed in an attempt to erase their culture and replace it with Christianity. However, some codices survived, providing valuable insights into their beliefs, astronomy, and history. Despite the hardships of conquest, the Maya people persevered. Their descendants continue to practice many of their traditional customs, ensuring the survival of their cultural heritage into the modern era.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Dresden_Codex_pp.58-62_78.jpg/1280px-Dresden_Codex_pp.58-62_78.jpg",
              description: "A Maya codex, one of the few surviving examples of their advanced writing system after the Spanish Conquest."
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Formative_Period_southern_Mesoamerica_2.svg/2880px-Formative_Period_southern_Mesoamerica_2.svg.png",
          description: "Map of the Maya civilization, highlighting key city-states during different periods."
        },
        iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1dAiu2GrrrIZeHHUZoD38mU9GYtkiW4pqrlkddbFpwD4&font=Default&lang=en&initial_zoom=2&height=650"
      },
      Toltecs: {
        description: "The Toltecs, active between approximately 900 and 1200 CE, were a Mesoamerican culture known for their impressive architecture, religious influence, and military prowess. Centered at their capital, Tollan (modern-day Tula), the Toltecs were instrumental in shaping the cultural and spiritual traditions of later civilizations, such as the Aztecs. Their mythology, artistry, and innovations in urban planning had a lasting impact on Mesoamerica, earning them a revered status in the historical narrative of the region.",
        items: [
          {
            title: "Founding of Tollan - The Heart of Toltec Civilization (c. 900 CE)",
            content: "The Toltecs established their capital, Tollan (Tula), in present-day Hidalgo, Mexico, around 900 CE. The city served as a political, cultural, and religious hub for the Toltec civilization, reflecting their architectural and urban planning expertise. Tollan was adorned with grand temples, pyramids, and ball courts, many of which featured intricate carvings and statues, such as the iconic Atlantean warrior figures.\n\nTollan was strategically located to control trade routes that spanned across Mesoamerica. This allowed the Toltecs to influence regions far beyond their immediate borders, spreading their cultural and religious practices. The city's design showcased their skill in engineering, with features like stepped pyramids, ceremonial platforms, and irrigation systems that supported agriculture and a growing population.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Telamones_Tula.jpg/1280px-Telamones_Tula.jpg",
              description: "The Atlantean statues at Tollan, representing Toltec warriors, are among the most iconic remnants of Toltec artistry."
            }
          },
          {
            title: "The Rise of Toltec Influence Across Mesoamerica (c. 950 CE)",
            content: "During its height, the Toltec civilization expanded its influence across Mesoamerica, establishing a vast trade network and cultural dominance. Toltec artisans and merchants traded goods such as obsidian, textiles, and ceramics, which were highly sought after throughout the region. Their architectural and artistic styles, characterized by intricate carvings and the use of bright pigments, became widespread.\n\nThe Toltecs were also known for their religious innovations, particularly the worship of Quetzalcoatl, the feathered serpent god. This deity became central to Mesoamerican spirituality, symbolizing wisdom, creation, and renewal. Toltec mythology and rituals, including human sacrifice, heavily influenced subsequent civilizations like the Aztecs, who regarded the Toltecs as a golden age of culture and enlightenment.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/TulaSite109.JPG/1280px-TulaSite109.JPG",
              description: "Ruins of the Burned Palace at Tollan, showcasing Toltec architectural achievements and artistic detail."
            }
          },
          {
            title: "Quetzalcoatl and Toltec Mythology",
            content: "The Toltecs played a pivotal role in the development of Quetzalcoatl's mythology, which became one of the most enduring elements of Mesoamerican religion. According to legend, Quetzalcoatl was a cultural hero and god who taught the Toltecs about agriculture, metallurgy, and astronomy. His moral teachings emphasized wisdom and harmony, contrasting with the practices of other deities associated with war and sacrifice.\n\nThe downfall of Quetzalcoatl is one of the central myths of the Toltec tradition. After being tricked into disgrace, Quetzalcoatl fled Tollan, promising to return one day to reclaim his place. This prophecy profoundly influenced later civilizations, particularly the Aztecs, who believed Hernán Cortés to be the reincarnation of Quetzalcoatl due to his arrival in 1519 CE.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Teotihuacan_Feathered_Serpent_%28Jami_Dwyer%29.jpg/1280px-Teotihuacan_Feathered_Serpent_%28Jami_Dwyer%29.jpg",
              description: "Feathered Serpent head at the Ciudadela complex in Teotihuacan"
            }
          },
          {
            title: "The Decline of the Toltec Civilization (c. 1150 CE)",
            content: "The Toltec civilization began to decline around 1150 CE due to a combination of internal strife, environmental challenges, and external pressures. Archaeological evidence suggests that Tollan experienced significant social unrest, possibly linked to leadership disputes and overexploitation of resources. This instability weakened the city's ability to maintain its dominance and left it vulnerable to invasions by northern tribes.\n\nBy the mid-12th century, Tollan was largely abandoned, marking the end of Toltec hegemony in Mesoamerica. However, their cultural legacy persisted, as their myths, architectural styles, and religious practices were adopted and revered by the Aztecs, who viewed themselves as inheritors of Toltec greatness.",
            image: {
              url: "https://www.adventures-abroad.com/images/blog/2019/10/toltec-temple-ruins-tula-mexico.jpg",
              description: "Pyramid at Tula, abandoned during the decline of the Toltec civilization in the 12th century."
            }
          },
          {
            title: "Toltec Legacy in Aztec Culture",
            content: "Despite their decline, the Toltecs left an indelible mark on Mesoamerican history and culture. The Aztecs, who rose to power centuries later, revered the Toltecs as a golden age of civilization. They referred to the Toltecs as 'Tolteca,' meaning 'artist' or 'artisan,' reflecting their admiration for Toltec craftsmanship and innovation.\n\nMany Aztec rulers traced their lineage to Toltec kings, reinforcing their claim to legitimacy and divine favor. The influence of Toltec mythology, particularly the worship of Quetzalcoatl, remained central to Aztec religious practices. Even today, the ruins of Tollan and the stories of the Toltec people continue to captivate historians and archaeologists, serving as a testament to their enduring legacy.",
            image: {
              url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/TulaSite133.JPG/1280px-TulaSite133.JPG",
              description: "Relief of Toltec ruler at the Guadalupe Mastache Orientation center."
            }
          }
        ],
        image: {
          url: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Toltecas.png",
          description: "Map of the Toltec civilization, highlighting its key architectural and cultural landmarks."
        },

      
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1qtm64yFzITO8IyAzRanA2gzunUhGBzUEBMZEoZ3Q6K0&font=Default&lang=en&initial_zoom=2&height=650",
    },
    Japan: {
      description: "Ancient Japan, spanning from the Jomon to the Heian period, represents a rich tapestry of cultural, political, and religious development. From early hunter-gatherer societies to the rise of an aristocratic courtly culture, Japan's ancient history laid the foundation for one of the world's most enduring civilizations. Notable for its early adoption of agriculture, the introduction of Buddhism, and the creation of a sophisticated system of governance, ancient Japan's legacy is deeply ingrained in its art, literature, and philosophy.",
      items: [
        {
          title: "The Jomon Period - Foundations of Japanese Culture (c. 10,000–300 BCE)",
          content: "The Jomon period is recognized as one of the earliest and longest-lasting eras of Japanese history. It derives its name from the distinctive cord-marked pottery ('Jomon') that characterizes the culture. During this time, people in Japan lived as hunter-gatherers and fishermen, relying heavily on the abundant natural resources of their environment.\n\nThe Jomon people were among the first in the world to produce pottery, which they used for storage and cooking. Their intricate designs and attention to detail suggest a highly developed sense of aesthetics. Archaeological evidence points to a semi-sedentary lifestyle with the development of pit-dwelling settlements and early forms of agriculture. Ritual practices, including the creation of dogu (clay figurines), indicate a rich spiritual life. This period set the stage for later cultural and technological advancements in Japanese history.",
          image: {
            url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/45532/159769/main-image",
            description: "A clay figurine (dogu) from the Jomon period, believed to have spiritual or ritual significance."
          }
        },
        {
          title: "The Yayoi Period - Agriculture and Social Stratification (c. 300 BCE–300 CE)",
          content: "The Yayoi period marked a significant transformation in Japanese society with the introduction of wet-rice agriculture from the Asian mainland. This new technology revolutionized the economy and led to the development of settled agricultural communities. The Yayoi people also introduced metallurgy, crafting tools and weapons from bronze and iron, which facilitated trade and warfare.\n\nSocial stratification emerged during this period, as seen in burial practices that indicated differences in status and wealth. Large burial mounds, or kofun, began to appear, foreshadowing the monumental tombs of later periods. The Yayoi period also saw the emergence of early forms of governance, as powerful clans began to consolidate power. This era laid the groundwork for Japan's political and cultural structure in the centuries to come.",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/d/d8/YayoiJar.JPG",
            description: "Artifacts from the Yayoi period, including pottery and tools, showcasing the technological advancements of the time."
          }
        },
        {
          title: "The Kofun Period - Rise of the Yamato State (c. 300–538 CE)",
          content: "The Kofun period is named after the massive keyhole-shaped burial mounds (kofun) built for the elite. These tombs, surrounded by moats and adorned with haniwa (clay figures), symbolize the growing power and sophistication of the Yamato rulers. The Yamato clan emerged as a dominant force during this time, establishing the first unified state in Japan.\n\nThis period also saw significant cultural and technological influence from the Korean Peninsula and China. Buddhism, Confucianism, and Chinese writing systems began to make their way into Japan, introducing new philosophies and administrative practices. The Kofun period is considered a critical step in the formation of Japan's centralized government and cultural identity.",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/NintokuTomb_Aerial_photograph_2007.jpg",
            description: "The Daisen Kofun, one of the largest burial mounds in the world, attributed to Emperor Nintoku."
          }
        },
        {
          title: "The Asuka Period - Introduction of Buddhism and Cultural Transformation (c. 538–710 CE)",
          content: "The Asuka period was a time of profound cultural and political change in Japan. The introduction of Buddhism, brought from Korea, had a transformative effect on Japanese society, art, and governance. Buddhist temples, such as Horyu-ji, were constructed, showcasing a synthesis of Chinese, Korean, and Japanese architectural styles.\n\nThis period also marked the adoption of the Chinese-style centralized government under the Taika Reforms. The reforms sought to consolidate imperial power, redistribute land, and establish an official administrative system modeled on Tang China. The Asuka period is often viewed as the beginning of Japan's historical era due to the establishment of written records and the codification of laws.",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Horyu-ji_National_Treasure_World_heritage_国宝・世界遺産法隆寺85.JPG/1280px-Horyu-ji_National_Treasure_World_heritage_国宝・世界遺産法隆寺85.JPG",
            description: "Horyu-ji Temple, one of the oldest wooden structures in the world, built during the Asuka period."
          }
        },
        {
          title: "The Heian Period - A Golden Age of Courtly Culture (794–1185 CE)",
          content: "The Heian period is often regarded as the pinnacle of classical Japanese culture. Centered around the imperial court in Kyoto (formerly Heian-kyo), this era saw the flourishing of art, literature, and aesthetics. Aristocratic life was dominated by elaborate rituals, poetry, and the pursuit of beauty.\n\nThe period produced some of Japan's most enduring literary works, including 'The Tale of Genji' by Murasaki Shikibu, often considered the world's first novel. The development of kana (Japanese syllabary) allowed for greater creativity and accessibility in writing. Buddhism continued to evolve, giving rise to uniquely Japanese sects such as Pure Land Buddhism.\n\nDespite its cultural achievements, the Heian period also saw the weakening of central authority as powerful clans like the Fujiwara, Minamoto, and Taira vied for control. This political instability eventually led to the rise of the samurai class and the establishment of the Kamakura Shogunate.",
          image: {
            url: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Tosa_Mitsuoki—Portrait_of_Murasaki_Shikibu.jpg",
            description: "An illustration from 'The Tale of Genji,' depicting courtly life during the Heian period."
          }
        }
      ],
      image: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/1696_Genroku_9_%28early_Edo%29_Japanese_Map_of_Kyoto%2C_Japan_-_Geographicus_-_Kyoto-genroku9-1696.jpg/1280px-1696_Genroku_9_%28early_Edo%29_Japanese_Map_of_Kyoto%2C_Japan_-_Geographicus_-_Kyoto-genroku9-1696.jpg",
        description: "Map of Heian-kyo (modern-day Kyoto), the cultural and political center of the Heian period."
      },
      iframeSrc: "https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1PJuU0muRYLqOerJ5Qt0OEtUXe567_wtNQfqCImaIXRM&font=Default&lang=en&initial_zoom=2&height=650",
    },    
          default: {
            description: "Information coming soon!",
          }
      
        };

    const civilization = civilizationData[civilizationName] || civilizationData.default;

    const formatCivilizationName = (name) => {
      return name.replace(/([A-Z])/g, " $1").trim();
    };
  
    const getWikipediaUrl = (name) => {
      return `https://en.wikipedia.org/wiki/${name.replace(/ /g, "_")}`;
    };
  
    return (
      <div className="civilization-section">
      <h1>{formatCivilizationName(civilizationName)}</h1>
      <p>{civilization.description}</p>
      <img src={civilization.image?.url} alt={civilization.image?.description || `${civilizationName} illustration`} className="civilization-image" />

      <ul className="civilization-items">
        {civilization.items.map((item, index) => (
          <li key={index} className="civilization-item">
            <div>
              <h2>{item.title}</h2>
              <button
                className="more-info"
                onClick={() => toggleExpand(index)}
                aria-expanded={expandedIndex === index}
                aria-controls={`item-content-${index}`}
              >
                {expandedIndex === index ? "Collapse" : "Learn More"}
              </button>
            </div>
            {expandedIndex === index && (
             <div id={`item-content-${index}`} className="expand-content">
             {item.image && (
               <div className="image-container">
                 <img src={item.image.url} alt={item.image.description} />
                 {item.image.description && <p className="image-description">{item.image.description}</p>}
               </div>
             )}
              <p>{item.content}</p>
           </div>
            )}
          </li>
        ))}
      </ul>

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