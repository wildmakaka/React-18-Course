import { useState } from 'react';
import './App.css';

const messages = ['Learn React', 'Apply for new Jobs', 'Earn new income'];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previous() {
    if (step > 1) setStep(step - 1);
  }

  function next() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <div className="close" onClick={() => setIsOpen(!isOpen)}>
        X
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ background: '#7950f2', color: '#fff' }}
              onClick={previous}
            >
              Previous
            </button>
            <button
              style={{ background: '#7950f2', color: '#fff' }}
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
