import React from "react";

export default function BacktestingEngine() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", fontFamily: "sans-serif", padding: 24 }}>
      <h1 style={{ fontSize: "1.7rem", marginBottom: 8 }}>📊 Backtesting Engine for Algorithmic Trading Strategies</h1>
      <div style={{ color: "#888", marginBottom: 8 }}>
        Mar 2025 – May 2025<br />
        Independent Project
      </div>
      <div style={{ marginBottom: 16 }}>
        <a href="https://github.com/pjgranieri/backtesting-engine" target="_blank" rel="noopener noreferrer" style={{ marginRight: 16 }}>
          🔗 GitHub Repo
        </a>
        <a href="https://www.youtube.com/watch?v=APT564DnD9s" target="_blank" rel="noopener noreferrer">
          🎥 Video Demo
        </a>
      </div>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>🧠 Overview</h2>
      <p>
        This backtesting engine is a modular Python framework designed to simulate, visualize, and evaluate algorithmic trading strategies using historical financial data. Built from scratch, it supports plug-and-play strategy development, batch testing across tickers, and generates key performance metrics like Sharpe Ratio, Max Drawdown, and Win Rate — modeled after professional tools like QuantConnect and Backtrader.
      </p>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>⚙️ Key Features</h2>
      <ul>
        <li>
          <strong>Fully Custom Backtesting Pipeline:</strong> Simulates trade execution on OHLCV (Open, High, Low, Close, Volume) data. Tracks equity, cash, and portfolio value over time. Annotates trades with entry/exit points and visualizes holding periods.
        </li>
        <li>
          <strong>Plug-and-Play Strategy Interface:</strong> Create custom strategies using a <code>generate_signal()</code> function. Comes with prebuilt strategies: RSI, Bollinger Bands, Momentum, SMA Crossover, and more. Easily extendable for any rule-based approach.
        </li>
        <li>
          <strong>Batch Testing Architecture:</strong> Supports testing multiple tickers and strategies in a single CLI call. Outputs are organized in a structured results folder by [ticker]/[strategy]/.
        </li>
        <li>
          <strong>Performance Metrics and Reporting:</strong> Automatically computes:<br />
          📈 Total Return<br />
          📉 Max Drawdown<br />
          🟢 Win Rate<br />
          📊 Sharpe Ratio<br />
          Generates: <code>equity_curve.png</code>, <code>metrics.txt</code>, <code>summary.csv</code>, and <code>trades.csv</code>. Equity plots with buy/sell signals over time.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>🗂️ Project Structure</h2>
      <div style={{
        background: "#f6f8fa",
        padding: 12,
        borderRadius: 6,
        fontSize: "0.97rem",
        marginBottom: 16,
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        lineHeight: 1.5
      }}>
backtesting-engine/
  core/
    backtester.py           # Main simulation logic
    data_loader.py          # CSV loader and filtering
    portfolio.py            # Portfolio tracking
  strategies/
    sample_strategy.py
    bollinger_band_strategy.py
    momentum_strategy.py
    rsi_strategy.py
    frequent_trading_strategy.py
  utils/
    metrics.py              # Calculates performance stats
    plotter.py              # Generates annotated plots
  data/                     # Input CSVs
  results/                  # Output: plots, logs, metrics
  main.py                   # CLI runner
  requirements.txt
      </div>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>⚡ Getting Started</h2>
      <ol>
        <li>Place historical CSV files in the <code>data/</code> folder, formatted as: <br /><code>Date, Open, High, Low, Close, Volume</code></li>
        <li>Run the backtester via command line:<br /><code>python main.py</code></li>
        <li>Choose: Ticker (e.g., AAPL), Strategy (e.g., RSIStrategy or ALL)</li>
        <li>Find results in <code>results/</code> with equity plots, trade logs, CSV metrics and summary reports</li>
      </ol>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>📉 Sample Output</h2>
      <div style={{
        background: "#f6f8fa",
        padding: 12,
        borderRadius: 6,
        fontSize: "0.97rem",
        marginBottom: 16,
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        lineHeight: 1.5
      }}>
Total Return:   +15.43%
Max Drawdown:   -10.15%
Win Rate:       57.1%
Sharpe Ratio:   1.25

Output includes:
  equity_curve.png
  equity_curve.csv
  metrics.txt
  trades.csv
  summary.csv
      </div>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>🧩 Built-In Strategies</h2>
      <ul>
        <li><strong>SampleStrategy</strong> – Simple moving average crossover</li>
        <li><strong>RSIStrategy</strong> – RSI-based overbought/oversold triggers</li>
        <li><strong>BollingerBandStrategy</strong> – Trades breakouts and reversions</li>
        <li><strong>MomentumStrategy</strong> – Uses Rate of Change (ROC)</li>
        <li><strong>FrequentTradingStrategy</strong> – High-volume pattern detection</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>🔮 Future Improvements</h2>
      <ul>
        <li>Add support for slippage and transaction costs</li>
        <li>Integrate position sizing and risk management</li>
        <li>Develop a lightweight GUI interface for strategy execution and visualization</li>
      </ul>

      <h2 style={{ fontSize: "1.15rem", margin: "24px 0 8px" }}>💻 Tech Stack</h2>
      <ul>
        <li><strong>Languages:</strong> Python (OOP)</li>
        <li><strong>Libraries:</strong> pandas, numpy, matplotlib</li>
        <li><strong>Domain:</strong> Quantitative Finance · Algorithmic Trading · Simulation Design</li>
      </ul>
    </div>
  );
}