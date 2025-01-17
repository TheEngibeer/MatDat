import React, { useEffect, useState } from "react";
import "../styles/DashboardPage.css";
import { PieChart, Pie, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

function DashboardPage() {
  const [summaryData, setSummaryData] = useState(null);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [materialDistribution, setMaterialDistribution] = useState([]);

  useEffect(() => {
    // Mock fetch requests
    setSummaryData({
      totalCO2Saved: 15000,
      totalTransactions: 45,
      totalMaterials: 100,
    });

    setMaterialDistribution([
      { name: "PET-plast", value: 40 },
      { name: "Metal", value: 30 },
      { name: "Glas", value: 20 },
      { name: "Papir", value: 10 },
    ]);

    setRecentTransactions([
      { date: "2024-01-01", material: "PET-plast", buyer: "LEGO", savedCO2: 800 },
      { date: "2024-01-03", material: "Metal", buyer: "Novo Nordisk", savedCO2: 500 },
    ]);
  }, []);

  return (
    <div className="dashboard-page">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Få indsigt i dine CO2-besparelser og transaktioner.</p>
      </header>

      {/* Summary Cards */}
      <section className="summary-cards">
        <div className="card">
          <h3>Total CO2 Besparelse</h3>
          <p>{summaryData?.totalCO2Saved.toLocaleString()} kg</p>
        </div>
        <div className="card">
          <h3>Antal Transaktioner</h3>
          <p>{summaryData?.totalTransactions}</p>
        </div>
        <div className="card">
          <h3>Ressourcer Handlet</h3>
          <p>{summaryData?.totalMaterials}</p>
        </div>
      </section>

      {/* Charts */}
      <section className="charts">
        <div className="chart chart-card">
          <h3>Fordeling af Materialer</h3>
          <PieChart width={400} height={400}>
            <Pie
              data={materialDistribution}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#30ce88"
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="chart chart-card">
          <h3>CO2 Besparelse Over Tid</h3>
          <LineChart width={500} height={300} data={recentTransactions}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="savedCO2" stroke="#205374" />
          </LineChart>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className="recent-transactions">
        <h3>Seneste Transaktioner</h3>
        <table>
          <thead>
            <tr>
              <th>Dato</th>
              <th>Materiale</th>
              <th>Køber</th>
              <th>CO2 Besparelse (kg)</th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.length > 0 ? (
              recentTransactions.map((tx, index) => (
                <tr key={index}>
                  <td>{tx.date}</td>
                  <td>{tx.material}</td>
                  <td>{tx.buyer}</td>
                  <td>{tx.savedCO2}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  Ingen transaktioner fundet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default DashboardPage;
