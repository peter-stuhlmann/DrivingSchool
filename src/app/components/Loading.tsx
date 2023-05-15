import React from 'react';

export default function Loading(): JSX.Element {
  const containerStyles = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const spinnerStyle = {
    animation: 'spinner_0KQs 1.2s cubic-bezier(0.52,.6,.25,.99) infinite',
    fill: '#0f232e',
  };

  const keyframes = `@keyframes spinner_0KQs {
    0% { r: 0; opacity: 1; }
    100% { r: 50px; opacity: 0; }
  }`;

  return (
    <div style={containerStyles}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <style>{keyframes}</style>
        <circle style={spinnerStyle} cx="50" cy="50" r="0" />
      </svg>
    </div>
  );
}
