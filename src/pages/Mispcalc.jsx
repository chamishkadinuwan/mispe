import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import './Mispcalc.css'; // CSS stays unchanged

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00c49f', '#ff6666', '#a28eff'];

const Mispcalc = () => {
  const [inputs, setInputs] = useState({
    population: '',
    reproductiveAgeWomen: '',
    pregnantWomen: '',
    expectedBirths: ''
  });
  const [results, setResults] = useState(null);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateMISP = () => {
    const pop = parseFloat(inputs.population);
    const rawWomen = parseFloat(inputs.reproductiveAgeWomen);
    const pregnant = parseFloat(inputs.pregnantWomen);
    const births = parseFloat(inputs.expectedBirths);

    if (isNaN(pop) || pop <= 0) {
      setResults({ error: 'Please enter a valid total population number.' });
      return;
    }

    const reproductiveWomen = rawWomen || (pop * 0.25);
    const pregnantWomenEst = pregnant || (reproductiveWomen * 0.04);
    const expectedBirthsEst = births || (pop * 0.04);

    const calculations = {
      cleanDeliveryKits: Math.ceil(expectedBirthsEst / 12),
      contraceptives: Math.ceil(reproductiveWomen * 0.3),
      condoms: Math.ceil(pop * 0.5 * 12),
      postExposureKits: Math.ceil(pop * 0.001),
      tetanusVaccine: Math.ceil(reproductiveWomen * 0.1),
      sutureMaterial: Math.ceil(expectedBirthsEst * 0.1),
      oxytocin: Math.ceil(expectedBirthsEst * 0.15),
      midwives: Math.ceil(expectedBirthsEst / 175),
      clinicalOfficers: Math.ceil(pop / 10000),
      deliveryBeds: Math.ceil(expectedBirthsEst / 100),
      maternalMortalityRisk: Math.ceil(expectedBirthsEst * 0.015),
      genderBasedViolenceCases: Math.ceil(pop * 0.02)
    };

    setResults({
      inputs: {
        totalPopulation: pop,
        reproductiveAgeWomen: reproductiveWomen,
        pregnantWomen: pregnantWomenEst,
        expectedBirths: expectedBirthsEst
      },
      supplies: calculations
    });
  };

  const barData = results?.supplies
    ? [
        { name: 'Clean Delivery Kits', value: results.supplies.cleanDeliveryKits },
        { name: 'Contraceptives', value: results.supplies.contraceptives },
        { name: 'Condoms', value: results.supplies.condoms },
        { name: 'Post-Exposure Kits', value: results.supplies.postExposureKits },
        { name: 'Tetanus Vaccine', value: results.supplies.tetanusVaccine },
        { name: 'Suture Material', value: results.supplies.sutureMaterial },
        { name: 'Oxytocin', value: results.supplies.oxytocin }
      ]
    : [];

  return (
    <div className="misp-container">
      <h2 className="misp-title">MISP Calculator</h2>
      <p className="misp-description">
        Calculate Minimum Initial Service Package requirements for reproductive health in emergency settings
      </p>

      <div className="misp-form-grid">
        <div className="misp-form-group">
          <label className="misp-label">Total Population *</label>
          <input
            type="number"
            value={inputs.population}
            onChange={e => handleInputChange('population', e.target.value)}
            className="misp-input"
            placeholder="Enter total population"
          />
        </div>

        <div className="misp-form-group">
          <label className="misp-label">Women of Reproductive Age (optional)</label>
          <input
            type="number"
            value={inputs.reproductiveAgeWomen}
            onChange={e => handleInputChange('reproductiveAgeWomen', e.target.value)}
            className="misp-input"
            placeholder="Auto-calculated if left empty"
          />
        </div>

        <div className="misp-form-group">
          <label className="misp-label">Currently Pregnant Women (optional)</label>
          <input
            type="number"
            value={inputs.pregnantWomen}
            onChange={e => handleInputChange('pregnantWomen', e.target.value)}
            className="misp-input"
            placeholder="Auto-calculated if left empty"
          />
        </div>

        <div className="misp-form-group">
          <label className="misp-label">Expected Births/Year (optional)</label>
          <input
            type="number"
            value={inputs.expectedBirths}
            onChange={e => handleInputChange('expectedBirths', e.target.value)}
            className="misp-input"
            placeholder="Auto-calculated if left empty"
          />
        </div>
      </div>

      <button onClick={calculateMISP} className="misp-button">
        Calculate MISP Requirements
      </button>

      {results && (
        <div className="misp-results">
          {results.error ? (
            <div className="misp-error">{results.error}</div>
          ) : (
            <div className="misp-results-container">
              <div className="misp-card misp-card-population">
                <h3 className="misp-card-title population">Population Estimates</h3>
                <div className="misp-card-grid">
                  <div className="misp-stat">
                    <span className="misp-stat-label">Total Population:</span>
                    <span className="misp-stat-value">{results.inputs.totalPopulation.toLocaleString()}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Women of Reproductive Age:</span>
                    <span className="misp-stat-value">{Math.round(results.inputs.reproductiveAgeWomen).toLocaleString()}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Pregnant Women:</span>
                    <span className="misp-stat-value">{Math.round(results.inputs.pregnantWomen).toLocaleString()}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Expected Births/Year:</span>
                    <span className="misp-stat-value">{Math.round(results.inputs.expectedBirths).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="misp-card misp-card-supplies">
                <h3 className="misp-card-title supplies">Essential Supplies (Monthly)</h3>
                <div className="misp-card-grid">
                  <div className="misp-stat">
                    <span className="misp-stat-label">Clean Delivery Kits:</span>
                    <span className="misp-stat-value">{results.supplies.cleanDeliveryKits}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Contraceptive Units:</span>
                    <span className="misp-stat-value">{results.supplies.contraceptives}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Condoms:</span>
                    <span className="misp-stat-value">{results.supplies.condoms.toLocaleString()}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Post-Exposure Prophylaxis Kits:</span>
                    <span className="misp-stat-value">{results.supplies.postExposureKits}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Tetanus Vaccine Doses:</span>
                    <span className="misp-stat-value">{results.supplies.tetanusVaccine}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Suture Material Sets:</span>
                    <span className="misp-stat-value">{results.supplies.sutureMaterial}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Oxytocin Vials:</span>
                    <span className="misp-stat-value">{results.supplies.oxytocin}</span>
                  </div>
                </div>

                {/* ✅ Bar Chart Section */}
                <div style={{ width: '100%', height: 300, marginTop: '2rem' }}>
                  <ResponsiveContainer>
                    <BarChart data={barData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#8884d8">
                        {barData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="misp-card misp-card-personnel">
                <h3 className="misp-card-title personnel">Personnel & Infrastructure</h3>
                <div className="misp-card-grid">
                  <div className="misp-stat">
                    <span className="misp-stat-label">Midwives Needed:</span>
                    <span className="misp-stat-value">{results.supplies.midwives}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Clinical Officers:</span>
                    <span className="misp-stat-value">{results.supplies.clinicalOfficers}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Delivery Beds:</span>
                    <span className="misp-stat-value">{results.supplies.deliveryBeds}</span>
                  </div>
                </div>
              </div>

              <div className="misp-card misp-card-risks">
                <h3 className="misp-card-title risks">Risk Assessments</h3>
                <div className="misp-card-grid">
                  <div className="misp-stat">
                    <span className="misp-stat-label">Maternal Mortality Risk Cases:</span>
                    <span className="misp-stat-value">{results.supplies.maternalMortalityRisk}</span>
                  </div>
                  <div className="misp-stat">
                    <span className="misp-stat-label">Estimated GBV Cases:</span>
                    <span className="misp-stat-value">{results.supplies.genderBasedViolenceCases}</span>
                  </div>
                </div>
              </div>

              <div className="misp-note">
                <p><strong>Note:</strong> These calculations are based on standard MISP guidelines and global estimates.
                  Actual needs may vary based on specific context, existing infrastructure, and local conditions.
                  Always consult current WHO/UNFPA MISP guidelines and conduct field assessments.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Mispcalc;
