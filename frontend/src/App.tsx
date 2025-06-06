import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Job Tracker</h1>
      </header>

      <main className="App-main">
        <section className="jobs-list">
          <h2>Your Applications</h2>
          {/* placeholder for job cards or table */}
          <div className="placeholder">No jobs yet. Click “New Application” to get started.</div>
        </section>

        <section className="jobs-form">
          <h2>New Application</h2>
          <form>
            <label>
              Company
              <input type="text" name="company" placeholder="e.g. Acme Corp" />
            </label>
            <label>
              Role
              <input type="text" name="role" placeholder="e.g. Front-end Engineer" />
            </label>
            <label>
              Applied Date
              <input type="date" name="applied_date" />
            </label>
            <label>
              Status
              <select name="status">
                <option>Applied</option>
                <option>Interviewing</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
            </label>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
