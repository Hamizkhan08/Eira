import React from 'react'

const BotanicalDecoration = ({ side }) => (
  <div className={`botanical-edge botanical-edge--${side}`}>
    <svg viewBox="0 0 400 800" fill="none" stroke="#2C2C2C" strokeWidth="0.3" opacity="0.15">
      {/* Eucalyptus Branch */}
      <path d="M50,700 Q70,400 30,100" strokeWidth="0.5" />
      {[...Array(8)].map((_, i) => (
        <g key={`euc-${i}`} transform={`translate(0, ${600 - i * 70})`}>
          <ellipse cx={50 + (i % 2 ? 20 : -20)} cy="0" rx="25" ry="15" transform={`rotate(${i % 2 ? 30 : -30})`} />
          <path d={`M50,0 L${50 + (i % 2 ? 20 : -20)},0`} strokeWidth="0.2" />
        </g>
      ))}
      
      {/* Fern Leaf */}
      <path d="M150,750 Q130,450 170,50" strokeWidth="0.4" />
      {[...Array(15)].map((_, i) => (
        <path key={`fern-${i}`} d={`M${150 - i * 0.5},${700 - i * 45} Q${100 - i},${680 - i * 45} ${80},${710 - i * 45}`} />
      ))}
      
      {/* Lavender Sprig */}
      <path d="M250,780 Q260,500 240,200" strokeWidth="0.3" />
      {[...Array(10)].map((_, i) => (
        <circle key={`lav-${i}`} cx={250 + (Math.sin(i) * 5)} cy={650 - i * 20} r="3" strokeWidth="0.2" />
      ))}
    </svg>
  </div>
)

export default BotanicalDecoration
