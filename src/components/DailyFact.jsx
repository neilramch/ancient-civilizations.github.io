import React, { useState, useEffect } from "react";
import "./DailyFact.css"; //

const DailyFact = () => {
  // Predefined list of dates and facts

  const facts = {
    // January
    "01-20": {
      fact: "On this day in 1981, Ronald Reagan was sworn in as the 40th President of the United States.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Portrait_of_President_Reagan_1981.jpg/1280px-Official_Portrait_of_President_Reagan_1981.jpg"
    },
    "01-21": {
      fact: "On this day in 1793, King Louis XVI of France was executed by guillotine.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Garneray_-_Louis_XVI_au_Temple_-_P2813_-_Mus%C3%A9e_Carnavalet_%28cropped%29.jpg/1280px-Garneray_-_Louis_XVI_au_Temple_-_P2813_-_Mus%C3%A9e_Carnavalet_%28cropped%29.jpg"
    },
    "01-22": {
      fact: "On this day in 1901, Queen Victoria passed away after a 63-year reign.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Queen_Victoria_by_Bassano.jpg/1280px-Queen_Victoria_by_Bassano.jpg"
    },
    "01-23": {
      fact: "On this day in 1556, the deadliest earthquake in history struck Shaanxi, China, killing over 830,000 people.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/China_edcp_relief_location_map.jpg/1280px-China_edcp_relief_location_map.jpg"
    },
    "01-24": {
      fact: "On this day in 1848, gold was discovered at Sutter's Mill, sparking the California Gold Rush.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/California_Clipper_500.jpg/1280px-California_Clipper_500.jpg"
    },
    "01-25": {
      fact: "On this day in 1924, the first Winter Olympics began in Chamonix, France.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/1924WOlympicPoster.jpg"
    },
    "01-26": {
      fact: "On this day in 1788, the first British fleet arrived in Australia to establish a penal colony.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/93/View_of_Botany_Bay.jpg"
    },
    "01-27": {
      fact: "On this day in 1888, the National Geographic Society was founded in Washington, D.C.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Natgeo_old.png"
    },
    "01-28": {
      fact: "On this day in 1986, the Space Shuttle Challenger tragically exploded shortly after takeoff.",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/NASA_STS_51L_Challenger.gif"
    },
    "01-29": {
      fact: "On this day in 1936, the Baseball Hall of Fame inducted its first members, including Babe Ruth.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Babe_Ruth2.jpg/1280px-Babe_Ruth2.jpg"
    },
    "01-30": {
      fact: "On this day in 1948, Mahatma Gandhi was assassinated in New Delhi, India.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Gandhi_funeral.jpg/1280px-Gandhi_funeral.jpg"
    },
    "01-31": {
      fact: "On this day in 1606, Guy Fawkes was executed for his role in the Gunpowder Plot.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/The_execution_of_Guy_Fawkes%27_%28Guy_Fawkes%29_by_Claes_%28Nicolaes%29_Jansz_Visscher.jpg/1280px-The_execution_of_Guy_Fawkes%27_%28Guy_Fawkes%29_by_Claes_%28Nicolaes%29_Jansz_Visscher.jpg"
    },
  
    // February
    "02-01": {
      fact: "On this day in 1884, the first volume of the Oxford English Dictionary was published.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/OED2_Complete.jpg"
    },
    "02-02": {
      fact: "On this day in 1925, the first dog sled relay to deliver diphtheria serum to Nome, Alaska, was completed.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Leonhard_Seppala_with_Togo.jpg"
    },
    "02-03": {
      fact: "On this day in 1959, Buddy Holly, Ritchie Valens, and J.P. Richardson died in a plane crash, known as 'The Day the Music Died.'",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Buddy_Holly_%281957%29.jpg"
    },
    "02-04": {
      fact: "On this day in 2004, Facebook was launched by Mark Zuckerberg and his college roommates.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Facebook_f_logo_%282019%29.svg"
    },
    "02-05": {
      fact: "On this day in 1919, the movie studio United Artists was established by Charlie Chaplin, Mary Pickford, and others.",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Charlie_Chaplin.jpg"
    },
    "02-06": {
      fact: "On this day in 1952, Queen Elizabeth II ascended to the throne after the death of her father, King George VI.",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Queen_Elizabeth_II_1953_portrait.jpg"
    },
    "02-07": {
      fact: "On this day in 1964, The Beatles arrived in the United States for the first time.",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/The_Beatles_in_America.JPG"
    },
    "02-08": {
      fact: "On this day in 1587, Mary, Queen of Scots, was executed for plotting to assassinate Queen Elizabeth I.",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Mary_Queen_of_Scots_portrait_by_Nicholas_Hilliard.jpg"
    },
    "02-09": {
      fact: "On this day in 1965, the U.S. launched the first combat troops to South Vietnam.",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/U.S._Marines_landing_at_Da_Nang%2C_1965.jpg"
    },
    "02-10": {
      fact: "On this day in 1996, the IBM computer Deep Blue defeated chess champion Garry Kasparov for the first time.",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Deep_Blue.jpg"
    },
    "02-11": {
  "fact": "On this day in 1990, Nelson Mandela was released from prison after 27 years.",
  "image": "https://media.npr.org/assets/img/2013/06/18/04_ap900211033_wide-6d0afcf7f3b6b1a67cf6eb2bbd10287f1d4c8e5d.jpg?s=1100&c=85&f=webp"
},
"02-12": {
  "fact": "On this day in 1809, Abraham Lincoln, the 16th president of the United States, was born.",
  "image": "https://cdn.britannica.com/23/62223-050-D8BF8591/President-Abraham-Lincoln-painting-George-Healy-1887-National-Portrait-Gallery.jpg?w=300"
},
"02-13": {
  "fact": "On this day in 1633, Galileo Galilei arrived in Rome for trial by the Inquisition.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Galileo_before_the_Holy_Office_-_Joseph-Nicolas_Robert-Fleury%2C_1847.png/1920px-Galileo_before_the_Holy_Office_-_Joseph-Nicolas_Robert-Fleury%2C_1847.png"
},
"02-14": {
  "fact": "On this day in 1929, the Saint Valentine's Day Massacre took place in Chicago.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/National_Museum_of_Crime_and_Punishmen_-_Saint_Valentine%27s_Day_Massacre_brick_%282868502113%29.jpg/1024px-National_Museum_of_Crime_and_Punishmen_-_Saint_Valentine%27s_Day_Massacre_brick_%282868502113%29.jpg"
},
"02-15": {
  "fact": "On this day in 1898, the USS Maine exploded in Havana Harbor, leading to the Spanish-American War.",
  "image": "https://go.newspapers.com/i/email/Ncom_HIH_Feb2015.jpg"
},
"02-16": {
  "fact": "On this day in 1923, archaeologist Howard Carter unsealed the tomb of Pharaoh Tutankhamun.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CairoEgMuseumTaaMaskMostlyPhotographed.jpg/800px-CairoEgMuseumTaaMaskMostlyPhotographed.jpg"
},
"02-17": {
  "fact": "On this day in 1864, the H.L. Hunley became the first submarine to sink a warship in combat.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Conrad_Wise_Chapman_-_Submarine_Torpedo_Boat_H.L._Hunley%2C_Dec._6%2C_1863_%28cropped%29.jpg"
},
"02-18": {
  "fact": "On this day in 1930, Pluto was discovered by astronomer Clyde Tombaugh.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/0/01/Clyde_W._Tombaugh.jpeg"
},
"02-19": {
  "fact": "On this day in 1945, U.S. Marines landed on Iwo Jima during World War II.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Raising_the_Flag_on_Iwo_Jima%2C_larger_-_edit1.jpg/2560px-Raising_the_Flag_on_Iwo_Jima%2C_larger_-_edit1.jpg"
},
"02-20": {
  "fact": "On this day in 1962, John Glenn became the first American to orbit the Earth.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GPN-2000-001027.jpg/1280px-GPN-2000-001027.jpg"
},
"02-21": {
  "fact": "On this day in 1965, Malcolm X was assassinated in New York City.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Malcolm_X_on_stretcher.jpg"
},
"02-22": {
  "fact": "On this day in 1732, George Washington, the first president of the United States, was born.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Portrait_of_George_Washington.jpeg"
},
"02-23": {
  "fact": "On this day in 1836, the Battle of the Alamo began in Texas.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/f/f3/The_fall_of_the_Alamo.jpg"
},
"02-24": {
  "fact": "On this day in 1582, Pope Gregory XIII announced the Gregorian calendar reform.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/Pope_Gregory_XIII.jpg"
},
"02-25": {
  "fact": "On this day in 1986, the People Power Revolution began in the Philippines, toppling Ferdinand Marcos.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/3/30/People_Power_Revolution_1986.jpg"
},
"02-26": {
  "fact": "On this day in 1993, the World Trade Center was bombed in a terrorist attack.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/d/d4/WTC_1993_Truck_Bomb_Damage.jpg"
},
"02-27": {
  "fact": "On this day in 1933, the Reichstag fire occurred in Germany, accelerating the Nazi rise to power.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/5/57/Reichstagsbrand.jpg"
},
"02-28": {
  "fact": "On this day in 1953, James Watson and Francis Crick discovered the structure of DNA.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/DNA_Overview.png"
},
"02-29": {
  "fact": "On this day in 1940, Hattie McDaniel became the first African American to win an Academy Award.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Hattie_McDaniel_in_Gone_With_the_Wind_trailer.jpg"
},
    // Add more February facts and links as needed
    // March
"03-01": {
  "fact": "On this day in 1936, the construction of the Hoover Dam was completed.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Hoover_Dam_construction.jpg"
},
"03-02": {
  "fact": "On this day in 1836, Texas declared independence from Mexico.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Texas_Declaration_of_Independence.jpg"
},
"03-03": {
  "fact": "On this day in 1931, the United States adopted 'The Star-Spangled Banner' as its national anthem.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Francis_Scott_Key_by_Joseph_Wood%2C_c1825.jpg"
},
"03-04": {
  "fact": "On this day in 1789, the U.S. Constitution went into effect as the first Congress met in New York City.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Constitution_of_the_United_States%2C_page_1.jpg"
},
"03-05": {
  "fact": "On this day in 1770, the Boston Massacre took place, escalating tensions between Britain and the American colonies.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Boston_Massacre.jpg"
},
"03-06": {
  "fact": "On this day in 1899, the pain reliever aspirin was patented by Bayer.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Aspirin_synthesis.svg"
},
"03-07": {
  "fact": "On this day in 1965, the first Selma to Montgomery civil rights march, known as 'Bloody Sunday,' took place.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bloody_Sunday-Alabama_police_attack.jpg"
},
"03-08": {
  "fact": "On this day in 1917, the February Revolution began in Russia, leading to the abdication of Tsar Nicholas II.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/3/30/Russian_Revolution_1917.jpg"
},
"03-09": {
  "fact": "On this day in 1959, the Barbie doll was introduced at the American International Toy Fair.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/6/64/FirstBarbie.jpg"
},
"03-10": {
  "fact": "On this day in 1876, Alexander Graham Bell made the first successful telephone call.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/7/76/Alexander_Graham_Bell.jpg"
},

// April
"04-01": {
  "fact": "On this day in 1976, Apple Inc. was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
},
"04-02": {
  "fact": "On this day in 1513, Spanish explorer Juan Ponce de León first sighted Florida.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Juan_Ponce_de_León.jpg"
},
"04-03": {
  "fact": "On this day in 1973, the first mobile phone call was made by Martin Cooper at Motorola.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Martin_Cooper.jpg"
},
"04-04": {
  "fact": "On this day in 1968, Martin Luther King Jr. was assassinated in Memphis, Tennessee.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Martin_Luther_King_Jr..jpg"
},
"04-05": {
  "fact": "On this day in 1994, Kurt Cobain, lead singer of Nirvana, was found dead in Seattle.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Kurt_Cobain_1992.jpg"
},
"04-06": {
  "fact": "On this day in 1917, the United States entered World War I by declaring war on Germany.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Uncle_Sam_I_Want_You_WWI_poster.jpg"
},
"04-07": {
  "fact": "On this day in 1948, the World Health Organization (WHO) was founded.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/2/2a/World_Health_Organization_Logo.svg"
},
"04-08": {
  "fact": "On this day in 1974, Hank Aaron broke Babe Ruth's home run record with his 715th home run.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Hank_Aaron.jpg"
},
"04-09": {
  "fact": "On this day in 1865, Confederate General Robert E. Lee surrendered to Union forces, effectively ending the American Civil War.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Robert_Edward_Lee.jpg"
},
"04-10": {
  "fact": "On this day in 1912, the RMS Titanic set sail on its ill-fated maiden voyage.",
  "image": "https://upload.wikimedia.org/wikipedia/commons/f/fd/RMS_Titanic_3.jpg"
}

  };
  
      
  const [factData, setFactData] = useState({
    fact: "Loading today's historical fact...",
    image: null
  });

  useEffect(() => {
    const today = new Date();
    const monthDay = `${String(today.getMonth() + 1).padStart(2, "0")}-${String(
      today.getDate()
    ).padStart(2, "0")}`;
    setFactData(facts[monthDay] || { fact: "No historical fact available for today.", image: null });
  }, []);

  return (
    <div className="daily-fact-container">
      <h2 className="daily-fact-heading">📜 Today in History</h2>
      <p className="daily-fact-text">{factData.fact}</p>
      {factData.image && <img src={factData.image} alt="Historical Event" className="daily-fact-image" />}
    </div>
  );
};


export default DailyFact;
