import React, { useState, useEffect } from "react";

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
    // Add more February facts and links as needed
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
    <div style={styles.container}>
      <h2 style={styles.heading}>📜 Today in History</h2>
      <p style={styles.fact}>{factData.fact}</p>
      {factData.image && <img src={factData.image} alt="Historical Event" style={styles.image} />}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "10px",
  },
  fact: {
    fontSize: "18px",
    color: "#555",
  },
  image: {
    marginTop: "15px",
    width: "auto",
    maxHeight: "40svh",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

export default DailyFact;
