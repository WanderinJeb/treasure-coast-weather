import React, { useEffect, useState } from "react";

export default function Forecast() {
  const [periods, setPeriods] = useState(null);
  const [error, setError] = useState(null);

  // Port St Lucie coordinates
  const LAT = 27.2730;
  const LON = -80.3582;

  useEffect(() => {
    async function load() {
      try {
        // Step 1: get forecast URL for this point
        const pt = await fetch(`https://api.weather.gov/points/${LAT},${LON}`).then(r => r.json());
        // Step 2: fetch the 7-day forecast
        const fc = await fetch(pt.properties.forecast).then(r => r.json());
        setPeriods(fc.properties.periods);
      } catch {
        setError("Could not load forecast.");
      }
    }
    load();
  }, []);

  if (error) return <p>{error}</p>;
  if (!periods) return <p>Loading forecast…</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", padding: "1rem" }}>
      {periods.map(p => (
        <div key={p.number}
             style={{ flex: "1 0 140px", border: "1px solid #ddd",
                      margin: 4, padding: 4, textAlign: "center" }}>
          <h4>{p.name}</h4>
          <img src={p.icon} alt={p.shortForecast} />
          <p style={{ fontSize: "1.2rem", margin: 0 }}>
            {p.temperature}°{p.temperatureUnit}
          </p>
          <p style={{ margin: 0 }}>{p.shortForecast}</p>
        </div>
      ))}
    </div>
  );
}
