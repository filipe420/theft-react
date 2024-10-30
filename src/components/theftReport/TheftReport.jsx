import React from 'react';
import './TheftReport.css'; // Verifique o caminho correto do arquivo CSS

const TheftReport = () => {
  return (
    <div className="theft-report-container">

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="subtitle">RELATÓRIO DE FURTOS<br /> EM FORTALEZA</h1>
            <p>
              Este é o sistema oficial de relatórios de furtos em fortaleza.<br />
              Aqui você pode encontrar estatísticas detalhadas e relatórios sobre os casos registrados.
            </p>
            <a href="#grafico02" className="btn-schedule">VER RELATÓRIOS</a>
          </div>
          <img className="Corte" src="/src/assets/ais/logo-pmce.png" style={{ width: "250px", height: "auto",marginTop: "-26px"  }} alt="" />
        </div>
      </section>
    </div>
  );
};

export default TheftReport;
