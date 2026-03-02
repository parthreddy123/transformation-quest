const chapterDiagrams = {

1: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Why Transformations Fail</text>
  <!-- Bars -->
  <rect x="60" y="45" width="330" height="28" rx="4" fill="var(--red)" opacity="0.85"/>
  <text x="55" y="63" text-anchor="end" font-size="10" fill="var(--dim)">Leadership</text>
  <text x="395" y="63" font-size="10" font-weight="600" fill="var(--text)">33%</text>
  <rect x="60" y="83" width="250" height="28" rx="4" fill="var(--pink)" opacity="0.8"/>
  <text x="55" y="101" text-anchor="end" font-size="10" fill="var(--dim)">Communication</text>
  <text x="315" y="101" font-size="10" font-weight="600" fill="var(--text)">25%</text>
  <rect x="60" y="121" width="200" height="28" rx="4" fill="var(--gold)" opacity="0.8"/>
  <text x="55" y="139" text-anchor="end" font-size="10" fill="var(--dim)">Change Fatigue</text>
  <text x="265" y="139" font-size="10" font-weight="600" fill="var(--text)">20%</text>
  <rect x="60" y="159" width="150" height="28" rx="4" fill="var(--cyan)" opacity="0.75"/>
  <text x="55" y="177" text-anchor="end" font-size="10" fill="var(--dim)">No Vision</text>
  <text x="215" y="177" font-size="10" font-weight="600" fill="var(--text)">15%</text>
  <rect x="60" y="197" width="70" height="28" rx="4" fill="var(--border)" opacity="0.7"/>
  <text x="55" y="215" text-anchor="end" font-size="10" fill="var(--dim)">Other</text>
  <text x="135" y="215" font-size="10" font-weight="600" fill="var(--text)">7%</text>
  <!-- Axis -->
  <line x1="60" y1="38" x2="60" y2="232" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="250" text-anchor="middle" font-size="9" fill="var(--dim)">Percentage of failed transformations citing each factor</text>
</svg>`,

2: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Kotter's 8-Step Model</text>
  <!-- Steps ascending left to right -->
  <rect x="30" y="238" width="50" height="24" rx="3" fill="var(--red)" opacity="0.8"/>
  <text x="55" y="254" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">1</text>
  <text x="55" y="272" text-anchor="middle" font-size="7" fill="var(--dim)">Create</text>
  <text x="55" y="280" text-anchor="middle" font-size="7" fill="var(--dim)">Urgency</text>
  <rect x="88" y="210" width="50" height="52" rx="3" fill="var(--pink)" opacity="0.8"/>
  <text x="113" y="232" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">2</text>
  <text x="113" y="272" text-anchor="middle" font-size="7" fill="var(--dim)">Build</text>
  <text x="113" y="280" text-anchor="middle" font-size="7" fill="var(--dim)">Coalition</text>
  <rect x="146" y="182" width="50" height="80" rx="3" fill="var(--gold)" opacity="0.8"/>
  <text x="171" y="210" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">3</text>
  <text x="171" y="272" text-anchor="middle" font-size="7" fill="var(--dim)">Form</text>
  <text x="171" y="280" text-anchor="middle" font-size="7" fill="var(--dim)">Vision</text>
  <rect x="204" y="154" width="50" height="108" rx="3" fill="var(--green)" opacity="0.75"/>
  <text x="229" y="188" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">4</text>
  <text x="229" y="272" text-anchor="middle" font-size="7" fill="var(--dim)">Enlist</text>
  <text x="229" y="280" text-anchor="middle" font-size="7" fill="var(--dim)">Volunteers</text>
  <rect x="262" y="126" width="50" height="136" rx="3" fill="var(--cyan)" opacity="0.75"/>
  <text x="287" y="166" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">5</text>
  <text x="287" y="272" text-anchor="middle" font-size="7" fill="var(--dim)">Enable</text>
  <text x="287" y="280" text-anchor="middle" font-size="7" fill="var(--dim)">Action</text>
  <rect x="320" y="98" width="50" height="164" rx="3" fill="var(--accent)" opacity="0.7"/>
  <text x="345" y="144" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">6</text>
  <text x="345" y="272" text-anchor="middle" font-size="7" fill="var(--dim)">Short-term</text>
  <text x="345" y="280" text-anchor="middle" font-size="7" fill="var(--dim)">Wins</text>
  <rect x="378" y="70" width="50" height="192" rx="3" fill="var(--cyan)" opacity="0.65"/>
  <text x="403" y="122" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">7</text>
  <text x="403" y="272" text-anchor="middle" font-size="7" fill="var(--dim)">Sustain</text>
  <text x="403" y="280" text-anchor="middle" font-size="7" fill="var(--dim)">Acceleration</text>
  <rect x="436" y="42" width="50" height="220" rx="3" fill="var(--green)" opacity="0.7"/>
  <text x="461" y="100" text-anchor="middle" font-size="9" font-weight="600" fill="var(--text)">8</text>
  <text x="461" y="272" text-anchor="middle" font-size="7" fill="var(--dim)">Institute</text>
  <text x="461" y="280" text-anchor="middle" font-size="7" fill="var(--dim)">Change</text>
  <!-- Arrow along top -->
  <line x1="45" y1="36" x2="460" y2="36" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/>
  <polygon points="462,36 454,32 454,40" fill="var(--accent)" opacity="0.5"/>
</svg>`,

3: `<svg viewBox="0 0 500 230" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">ADKAR Model</text>
  <!-- Block A -->
  <rect x="16" y="55" width="78" height="52" rx="6" stroke="var(--cyan)" stroke-width="2" fill="var(--code-bg)"/>
  <text x="55" y="78" text-anchor="middle" font-size="18" font-weight="700" fill="var(--cyan)">A</text>
  <text x="55" y="93" text-anchor="middle" font-size="8" fill="var(--dim)">Awareness</text>
  <!-- Arrow -->
  <line x1="98" y1="81" x2="112" y2="81" stroke="var(--accent)" stroke-width="2"/>
  <polygon points="114,81 108,77 108,85" fill="var(--accent)"/>
  <!-- Block D -->
  <rect x="118" y="55" width="78" height="52" rx="6" stroke="var(--gold)" stroke-width="2" fill="var(--code-bg)"/>
  <text x="157" y="78" text-anchor="middle" font-size="18" font-weight="700" fill="var(--gold)">D</text>
  <text x="157" y="93" text-anchor="middle" font-size="8" fill="var(--dim)">Desire</text>
  <!-- Arrow -->
  <line x1="200" y1="81" x2="214" y2="81" stroke="var(--accent)" stroke-width="2"/>
  <polygon points="216,81 210,77 210,85" fill="var(--accent)"/>
  <!-- Block K -->
  <rect x="220" y="55" width="78" height="52" rx="6" stroke="var(--green)" stroke-width="2" fill="var(--code-bg)"/>
  <text x="259" y="78" text-anchor="middle" font-size="18" font-weight="700" fill="var(--green)">K</text>
  <text x="259" y="93" text-anchor="middle" font-size="8" fill="var(--dim)">Knowledge</text>
  <!-- Arrow -->
  <line x1="302" y1="81" x2="316" y2="81" stroke="var(--accent)" stroke-width="2"/>
  <polygon points="318,81 312,77 312,85" fill="var(--accent)"/>
  <!-- Block A2 -->
  <rect x="322" y="55" width="78" height="52" rx="6" stroke="var(--pink)" stroke-width="2" fill="var(--code-bg)"/>
  <text x="361" y="78" text-anchor="middle" font-size="18" font-weight="700" fill="var(--pink)">A</text>
  <text x="361" y="93" text-anchor="middle" font-size="8" fill="var(--dim)">Ability</text>
  <!-- Arrow -->
  <line x1="404" y1="81" x2="418" y2="81" stroke="var(--accent)" stroke-width="2"/>
  <polygon points="420,81 414,77 414,85" fill="var(--accent)"/>
  <!-- Block R -->
  <rect x="424" y="55" width="62" height="52" rx="6" stroke="var(--red)" stroke-width="2" fill="var(--code-bg)"/>
  <text x="455" y="78" text-anchor="middle" font-size="18" font-weight="700" fill="var(--red)">R</text>
  <text x="455" y="93" text-anchor="middle" font-size="8" fill="var(--dim)">Reinforcement</text>
  <!-- Phase labels -->
  <line x1="16" y1="128" x2="196" y2="128" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 2"/>
  <line x1="220" y1="128" x2="486" y2="128" stroke="var(--border)" stroke-width="1" stroke-dasharray="3 2"/>
  <text x="106" y="145" text-anchor="middle" font-size="9" fill="var(--dim)">Current State</text>
  <text x="106" y="158" text-anchor="middle" font-size="8" fill="var(--dim)">(Readiness for change)</text>
  <text x="353" y="145" text-anchor="middle" font-size="9" fill="var(--dim)">Future State</text>
  <text x="353" y="158" text-anchor="middle" font-size="8" fill="var(--dim)">(Adoption &amp; usage)</text>
  <!-- Bottom note -->
  <text x="250" y="185" text-anchor="middle" font-size="9" fill="var(--dim)">Prosci's individual change management model</text>
</svg>`,

4: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Lean Transformation &mdash; 5 Principles</text>
  <!-- Value -->
  <rect x="30" y="65" width="80" height="42" rx="6" fill="var(--code-bg)" stroke="var(--green)" stroke-width="2"/>
  <text x="70" y="84" text-anchor="middle" font-size="10" font-weight="600" fill="var(--green)">Value</text>
  <text x="70" y="97" text-anchor="middle" font-size="7" fill="var(--dim)">Define it</text>
  <!-- Arrow -->
  <line x1="114" y1="86" x2="132" y2="86" stroke="var(--accent)" stroke-width="1.5"/>
  <polygon points="134,86 128,82 128,90" fill="var(--accent)"/>
  <!-- Value Stream -->
  <rect x="138" y="65" width="80" height="42" rx="6" fill="var(--code-bg)" stroke="var(--cyan)" stroke-width="2"/>
  <text x="178" y="80" text-anchor="middle" font-size="10" font-weight="600" fill="var(--cyan)">Value</text>
  <text x="178" y="92" text-anchor="middle" font-size="10" font-weight="600" fill="var(--cyan)">Stream</text>
  <text x="178" y="103" text-anchor="middle" font-size="7" fill="var(--dim)">Map it</text>
  <!-- Arrow -->
  <line x1="222" y1="86" x2="240" y2="86" stroke="var(--accent)" stroke-width="1.5"/>
  <polygon points="242,86 236,82 236,90" fill="var(--accent)"/>
  <!-- Flow -->
  <rect x="246" y="65" width="80" height="42" rx="6" fill="var(--code-bg)" stroke="var(--gold)" stroke-width="2"/>
  <text x="286" y="84" text-anchor="middle" font-size="10" font-weight="600" fill="var(--gold)">Flow</text>
  <text x="286" y="97" text-anchor="middle" font-size="7" fill="var(--dim)">Create it</text>
  <!-- Arrow -->
  <line x1="330" y1="86" x2="348" y2="86" stroke="var(--accent)" stroke-width="1.5"/>
  <polygon points="350,86 344,82 344,90" fill="var(--accent)"/>
  <!-- Pull -->
  <rect x="354" y="65" width="80" height="42" rx="6" fill="var(--code-bg)" stroke="var(--pink)" stroke-width="2"/>
  <text x="394" y="84" text-anchor="middle" font-size="10" font-weight="600" fill="var(--pink)">Pull</text>
  <text x="394" y="97" text-anchor="middle" font-size="7" fill="var(--dim)">Respond to it</text>
  <!-- Arrow down from Pull -->
  <line x1="394" y1="111" x2="394" y2="135" stroke="var(--accent)" stroke-width="1.5"/>
  <polygon points="394,137 390,131 398,131" fill="var(--accent)"/>
  <!-- Perfection -->
  <rect x="170" y="140" width="280" height="42" rx="6" fill="var(--code-bg)" stroke="var(--accent)" stroke-width="2"/>
  <text x="310" y="160" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Perfection</text>
  <text x="310" y="174" text-anchor="middle" font-size="8" fill="var(--dim)">Pursue continuously &mdash; eliminate waste relentlessly</text>
  <!-- Cycle arrow from Perfection back to Value -->
  <path d="M170,161 Q70,161 70,111" stroke="var(--accent)" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/>
  <polygon points="70,109 66,115 74,115" fill="var(--accent)"/>
  <!-- Cycle label -->
  <text x="60" y="140" text-anchor="end" font-size="8" fill="var(--dim)">Repeat</text>
  <!-- Bottom note -->
  <text x="250" y="210" text-anchor="middle" font-size="9" fill="var(--dim)">Based on Womack &amp; Jones, Lean Thinking</text>
</svg>`,

5: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Agile at Scale &mdash; SAFe Layers</text>
  <!-- Portfolio (top) -->
  <rect x="50" y="42" width="400" height="42" rx="6" fill="var(--accent)" opacity="0.2" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="250" y="60" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Portfolio</text>
  <text x="250" y="74" text-anchor="middle" font-size="8" fill="var(--dim)">Strategic Themes &bull; Lean Budgets &bull; Portfolio Kanban</text>
  <!-- Large Solution -->
  <rect x="70" y="92" width="360" height="42" rx="6" fill="var(--gold)" opacity="0.15" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="250" y="110" text-anchor="middle" font-size="11" font-weight="600" fill="var(--gold)">Large Solution</text>
  <text x="250" y="124" text-anchor="middle" font-size="8" fill="var(--dim)">Solution Train &bull; Capabilities &bull; Suppliers</text>
  <!-- Program / ART -->
  <rect x="90" y="142" width="320" height="42" rx="6" fill="var(--cyan)" opacity="0.15" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="250" y="160" text-anchor="middle" font-size="11" font-weight="600" fill="var(--cyan)">Program (ART)</text>
  <text x="250" y="174" text-anchor="middle" font-size="8" fill="var(--dim)">PI Planning &bull; System Demo &bull; Inspect &amp; Adapt</text>
  <!-- Team (bottom) -->
  <rect x="110" y="192" width="280" height="42" rx="6" fill="var(--green)" opacity="0.15" stroke="var(--green)" stroke-width="1.5"/>
  <text x="250" y="210" text-anchor="middle" font-size="11" font-weight="600" fill="var(--green)">Team</text>
  <text x="250" y="224" text-anchor="middle" font-size="8" fill="var(--dim)">Scrum / Kanban &bull; Stories &bull; Iterations</text>
  <!-- Side arrow -->
  <line x1="28" y1="230" x2="28" y2="48" stroke="var(--border)" stroke-width="1.5"/>
  <polygon points="28,45 24,52 32,52" fill="var(--border)"/>
  <text x="24" y="145" text-anchor="middle" font-size="8" fill="var(--dim)" transform="rotate(-90,24,145)">Scale &amp; Scope</text>
  <text x="250" y="252" text-anchor="middle" font-size="9" fill="var(--dim)">Scaled Agile Framework (SAFe) configuration layers</text>
</svg>`,

6: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Culture Change &mdash; Schein's Iceberg Model</text>
  <!-- Water line -->
  <line x1="40" y1="95" x2="460" y2="95" stroke="var(--cyan)" stroke-width="1.5" stroke-dasharray="6 3"/>
  <text x="465" y="92" font-size="8" fill="var(--cyan)">Waterline</text>
  <!-- Iceberg shape -->
  <path d="M160,50 Q250,35 340,50 L360,95 L380,140 Q390,200 250,240 Q110,200 120,140 L140,95 Z" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1.5"/>
  <!-- Above water: Artifacts -->
  <text x="250" y="68" text-anchor="middle" font-size="10" font-weight="600" fill="var(--green)">Artifacts</text>
  <text x="250" y="82" text-anchor="middle" font-size="8" fill="var(--dim)">Dress, office layout, rituals</text>
  <!-- Below water: Espoused Values -->
  <text x="250" y="125" text-anchor="middle" font-size="10" font-weight="600" fill="var(--gold)">Espoused Values</text>
  <text x="250" y="140" text-anchor="middle" font-size="8" fill="var(--dim)">Stated goals, strategies, philosophies</text>
  <!-- Deep below: Basic Assumptions -->
  <text x="250" y="185" text-anchor="middle" font-size="10" font-weight="600" fill="var(--red)">Basic Assumptions</text>
  <text x="250" y="200" text-anchor="middle" font-size="8" fill="var(--dim)">Unconscious beliefs, perceptions,</text>
  <text x="250" y="212" text-anchor="middle" font-size="8" fill="var(--dim)">thoughts &amp; feelings</text>
  <!-- Side labels -->
  <text x="420" y="68" font-size="9" fill="var(--green)">Visible</text>
  <text x="420" y="135" font-size="9" fill="var(--gold)">Partially</text>
  <text x="420" y="147" font-size="9" fill="var(--gold)">visible</text>
  <text x="420" y="198" font-size="9" fill="var(--red)">Hidden</text>
  <!-- Depth arrow -->
  <line x1="35" y1="50" x2="35" y2="235" stroke="var(--border)" stroke-width="1"/>
  <polygon points="35,238 31,232 39,232" fill="var(--border)"/>
  <text x="30" y="145" text-anchor="middle" font-size="8" fill="var(--dim)" transform="rotate(-90,30,145)">Depth</text>
  <text x="250" y="260" text-anchor="middle" font-size="9" fill="var(--dim)">Edgar Schein's three levels of organizational culture</text>
</svg>`,

7: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Digital Transformation &mdash; Technology Adoption Curve</text>
  <!-- Bell curve -->
  <path d="M30,195 Q60,192 90,185 Q120,170 145,145 Q170,105 195,70 Q210,52 230,42 Q250,38 270,42 Q290,52 305,70 Q330,105 355,145 Q380,170 410,185 Q440,192 470,195" stroke="var(--accent)" stroke-width="2" fill="none"/>
  <!-- Fill sections under curve -->
  <path d="M30,195 Q60,192 90,185 L90,195 Z" fill="var(--cyan)" opacity="0.25"/>
  <path d="M90,185 Q120,170 145,145 Q158,123 170,105 L170,195 L90,195 Z" fill="var(--green)" opacity="0.25"/>
  <path d="M170,105 Q195,70 210,52 Q230,42 250,38 Q270,42 290,52 L290,195 L170,195 Z" fill="var(--gold)" opacity="0.25"/>
  <path d="M290,52 Q305,70 330,105 Q350,135 370,155 L370,195 L290,195 Z" fill="var(--pink)" opacity="0.25"/>
  <path d="M370,155 Q400,180 440,192 Q455,194 470,195 L370,195 Z" fill="var(--red)" opacity="0.25"/>
  <!-- Divider lines -->
  <line x1="90" y1="185" x2="90" y2="200" stroke="var(--border)" stroke-width="1" stroke-dasharray="2 2"/>
  <line x1="170" y1="105" x2="170" y2="200" stroke="var(--border)" stroke-width="1" stroke-dasharray="2 2"/>
  <line x1="290" y1="52" x2="290" y2="200" stroke="var(--border)" stroke-width="1" stroke-dasharray="2 2"/>
  <line x1="370" y1="155" x2="370" y2="200" stroke="var(--border)" stroke-width="1" stroke-dasharray="2 2"/>
  <!-- Baseline -->
  <line x1="25" y1="195" x2="475" y2="195" stroke="var(--border)" stroke-width="1"/>
  <!-- Labels -->
  <text x="55" y="215" text-anchor="middle" font-size="8" font-weight="600" fill="var(--cyan)">Innovators</text>
  <text x="55" y="226" text-anchor="middle" font-size="9" fill="var(--dim)">2.5%</text>
  <text x="130" y="215" text-anchor="middle" font-size="8" font-weight="600" fill="var(--green)">Early</text>
  <text x="130" y="226" text-anchor="middle" font-size="8" font-weight="600" fill="var(--green)">Adopters</text>
  <text x="130" y="238" text-anchor="middle" font-size="9" fill="var(--dim)">13.5%</text>
  <text x="230" y="215" text-anchor="middle" font-size="8" font-weight="600" fill="var(--gold)">Early</text>
  <text x="230" y="226" text-anchor="middle" font-size="8" font-weight="600" fill="var(--gold)">Majority</text>
  <text x="230" y="238" text-anchor="middle" font-size="9" fill="var(--dim)">34%</text>
  <text x="330" y="215" text-anchor="middle" font-size="8" font-weight="600" fill="var(--pink)">Late</text>
  <text x="330" y="226" text-anchor="middle" font-size="8" font-weight="600" fill="var(--pink)">Majority</text>
  <text x="330" y="238" text-anchor="middle" font-size="9" fill="var(--dim)">34%</text>
  <text x="425" y="215" text-anchor="middle" font-size="8" font-weight="600" fill="var(--red)">Laggards</text>
  <text x="425" y="226" text-anchor="middle" font-size="9" fill="var(--dim)">16%</text>
  <text x="250" y="255" text-anchor="middle" font-size="9" fill="var(--dim)">Rogers' Diffusion of Innovations (1962)</text>
</svg>`,

8: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Organizational Design &mdash; Galbraith Star Model</text>
  <!-- Star points (5-pointed star centered at 250,148) -->
  <!-- Points: top(250,58), top-right(340,123), bottom-right(306,208), bottom-left(194,208), top-left(160,123) -->
  <!-- Star outline -->
  <polygon points="250,58 268,118 340,123 282,160 306,208 250,180 194,208 218,160 160,123 232,118"
    stroke="var(--accent)" stroke-width="2" fill="var(--accent)" opacity="0.08"/>
  <!-- Inner pentagon -->
  <polygon points="250,98 295,135 278,178 222,178 205,135"
    stroke="var(--border)" stroke-width="1" fill="var(--code-bg)" opacity="0.6"/>
  <!-- Point labels with circles -->
  <!-- Strategy (top) -->
  <circle cx="250" cy="52" r="18" fill="var(--code-bg)" stroke="var(--cyan)" stroke-width="2"/>
  <text x="250" y="48" text-anchor="middle" font-size="7" font-weight="600" fill="var(--cyan)">Strategy</text>
  <text x="250" y="58" text-anchor="middle" font-size="6" fill="var(--dim)">Direction</text>
  <!-- Structure (top-right) -->
  <circle cx="348" cy="118" r="18" fill="var(--code-bg)" stroke="var(--green)" stroke-width="2"/>
  <text x="348" y="115" text-anchor="middle" font-size="7" font-weight="600" fill="var(--green)">Structure</text>
  <text x="348" y="125" text-anchor="middle" font-size="6" fill="var(--dim)">Power</text>
  <!-- Rewards (bottom-right) -->
  <circle cx="312" cy="216" r="18" fill="var(--code-bg)" stroke="var(--gold)" stroke-width="2"/>
  <text x="312" y="213" text-anchor="middle" font-size="7" font-weight="600" fill="var(--gold)">Rewards</text>
  <text x="312" y="223" text-anchor="middle" font-size="6" fill="var(--dim)">Motivate</text>
  <!-- People (bottom-left) -->
  <circle cx="188" cy="216" r="18" fill="var(--code-bg)" stroke="var(--pink)" stroke-width="2"/>
  <text x="188" y="213" text-anchor="middle" font-size="7" font-weight="600" fill="var(--pink)">People</text>
  <text x="188" y="223" text-anchor="middle" font-size="6" fill="var(--dim)">Skills</text>
  <!-- Processes (top-left) -->
  <circle cx="152" cy="118" r="18" fill="var(--code-bg)" stroke="var(--red)" stroke-width="2"/>
  <text x="152" y="115" text-anchor="middle" font-size="7" font-weight="600" fill="var(--red)">Processes</text>
  <text x="152" y="125" text-anchor="middle" font-size="6" fill="var(--dim)">Info flow</text>
  <!-- Center label -->
  <text x="250" y="140" text-anchor="middle" font-size="8" font-weight="600" fill="var(--accent)">Org</text>
  <text x="250" y="150" text-anchor="middle" font-size="8" font-weight="600" fill="var(--accent)">Design</text>
  <text x="250" y="260" text-anchor="middle" font-size="9" fill="var(--dim)">All five elements must align for effective organization</text>
</svg>`,

9: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Transformation Governance &mdash; Stage-Gate Process</text>
  <!-- Stage boxes and gate diamonds -->
  <!-- Idea -->
  <rect x="8" y="65" width="48" height="32" rx="4" fill="var(--code-bg)" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="32" y="85" text-anchor="middle" font-size="8" font-weight="600" fill="var(--cyan)">Idea</text>
  <!-- Arrow -->
  <line x1="58" y1="81" x2="68" y2="81" stroke="var(--border)" stroke-width="1"/>
  <!-- Gate 1 -->
  <polygon points="80,81 72,73 80,65 88,73" fill="var(--gold)" opacity="0.3" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="80" y="102" text-anchor="middle" font-size="7" fill="var(--gold)">G1</text>
  <!-- Arrow -->
  <line x1="90" y1="81" x2="100" y2="81" stroke="var(--border)" stroke-width="1"/>
  <!-- Define -->
  <rect x="102" y="65" width="52" height="32" rx="4" fill="var(--code-bg)" stroke="var(--green)" stroke-width="1.5"/>
  <text x="128" y="85" text-anchor="middle" font-size="8" font-weight="600" fill="var(--green)">Define</text>
  <!-- Arrow -->
  <line x1="156" y1="81" x2="166" y2="81" stroke="var(--border)" stroke-width="1"/>
  <!-- Gate 2 -->
  <polygon points="178,81 170,73 178,65 186,73" fill="var(--gold)" opacity="0.3" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="178" y="102" text-anchor="middle" font-size="7" fill="var(--gold)">G2</text>
  <!-- Arrow -->
  <line x1="188" y1="81" x2="198" y2="81" stroke="var(--border)" stroke-width="1"/>
  <!-- Execute -->
  <rect x="200" y="65" width="56" height="32" rx="4" fill="var(--code-bg)" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="228" y="85" text-anchor="middle" font-size="8" font-weight="600" fill="var(--accent)">Execute</text>
  <!-- Arrow -->
  <line x1="258" y1="81" x2="268" y2="81" stroke="var(--border)" stroke-width="1"/>
  <!-- Gate 3 -->
  <polygon points="280,81 272,73 280,65 288,73" fill="var(--gold)" opacity="0.3" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="280" y="102" text-anchor="middle" font-size="7" fill="var(--gold)">G3</text>
  <!-- Arrow -->
  <line x1="290" y1="81" x2="300" y2="81" stroke="var(--border)" stroke-width="1"/>
  <!-- Deliver -->
  <rect x="302" y="65" width="52" height="32" rx="4" fill="var(--code-bg)" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="328" y="85" text-anchor="middle" font-size="8" font-weight="600" fill="var(--pink)">Deliver</text>
  <!-- Arrow -->
  <line x1="356" y1="81" x2="366" y2="81" stroke="var(--border)" stroke-width="1"/>
  <!-- Gate 4 -->
  <polygon points="378,81 370,73 378,65 386,73" fill="var(--gold)" opacity="0.3" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="378" y="102" text-anchor="middle" font-size="7" fill="var(--gold)">G4</text>
  <!-- Arrow -->
  <line x1="388" y1="81" x2="398" y2="81" stroke="var(--border)" stroke-width="1"/>
  <!-- Sustain -->
  <rect x="400" y="65" width="56" height="32" rx="4" fill="var(--code-bg)" stroke="var(--red)" stroke-width="1.5"/>
  <text x="428" y="85" text-anchor="middle" font-size="8" font-weight="600" fill="var(--red)">Sustain</text>
  <!-- Legend row -->
  <rect x="120" y="132" width="12" height="12" rx="2" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="138" y="142" font-size="8" fill="var(--dim)">= Stage (work phase)</text>
  <polygon points="290,138 284,132 290,126 296,132" fill="var(--gold)" opacity="0.3" stroke="var(--gold)" stroke-width="1"/>
  <text x="302" y="142" font-size="8" fill="var(--dim)">= Gate (go/no-go decision)</text>
  <!-- Gate criteria -->
  <text x="250" y="170" text-anchor="middle" font-size="9" fill="var(--dim)">At each gate: review deliverables, assess risk, approve or kill</text>
  <!-- Quality bar -->
  <rect x="60" y="190" width="380" height="6" rx="3" fill="var(--border)" opacity="0.3"/>
  <rect x="60" y="190" width="380" height="6" rx="3" fill="url(#govGrad)"/>
  <defs><linearGradient id="govGrad" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="var(--cyan)" stop-opacity="0.1"/>
    <stop offset="100%" stop-color="var(--green)" stop-opacity="0.5"/>
  </linearGradient></defs>
  <text x="250" y="210" text-anchor="middle" font-size="8" fill="var(--dim)">Confidence &amp; investment increase at each gate</text>
  <text x="250" y="232" text-anchor="middle" font-size="9" fill="var(--dim)">Based on Cooper's Stage-Gate innovation process</text>
</svg>`,

10: `<svg viewBox="0 0 500 270" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="600" fill="var(--accent)">Sustaining Change &mdash; PDCA Improvement Spiral</text>
  <!-- Spiral levels - two PDCA cycles going upward -->
  <!-- Level 1 (bottom) -->
  <ellipse cx="250" cy="220" rx="160" ry="30" stroke="var(--border)" stroke-width="1" fill="none" stroke-dasharray="4 3" opacity="0.4"/>
  <!-- Plan L1 -->
  <rect x="78" y="200" width="46" height="24" rx="4" fill="var(--code-bg)" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="101" y="216" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">Plan</text>
  <!-- Do L1 -->
  <rect x="178" y="240" width="46" height="24" rx="4" fill="var(--code-bg)" stroke="var(--green)" stroke-width="1.5"/>
  <text x="201" y="256" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">Do</text>
  <!-- Check L1 -->
  <rect x="328" y="240" width="50" height="24" rx="4" fill="var(--code-bg)" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="353" y="256" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">Check</text>
  <!-- Act L1 -->
  <rect x="398" y="200" width="46" height="24" rx="4" fill="var(--code-bg)" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="421" y="216" text-anchor="middle" font-size="9" font-weight="600" fill="var(--pink)">Act</text>
  <!-- Connecting arc L1 to L2 -->
  <path d="M421,198 Q440,170 421,148" stroke="var(--accent)" stroke-width="1.5" fill="none"/>
  <polygon points="421,146 417,153 425,153" fill="var(--accent)"/>
  <!-- Level 2 (middle) -->
  <ellipse cx="250" cy="155" rx="145" ry="27" stroke="var(--border)" stroke-width="1" fill="none" stroke-dasharray="4 3" opacity="0.4"/>
  <!-- Plan L2 -->
  <rect x="93" y="136" width="46" height="24" rx="4" fill="var(--code-bg)" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="116" y="152" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">Plan</text>
  <!-- Do L2 -->
  <rect x="188" y="172" width="46" height="24" rx="4" fill="var(--code-bg)" stroke="var(--green)" stroke-width="1.5"/>
  <text x="211" y="188" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">Do</text>
  <!-- Check L2 -->
  <rect x="318" y="172" width="50" height="24" rx="4" fill="var(--code-bg)" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="343" y="188" text-anchor="middle" font-size="9" font-weight="600" fill="var(--gold)">Check</text>
  <!-- Act L2 -->
  <rect x="388" y="136" width="46" height="24" rx="4" fill="var(--code-bg)" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="411" y="152" text-anchor="middle" font-size="9" font-weight="600" fill="var(--pink)">Act</text>
  <!-- Connecting arc L2 to L3 -->
  <path d="M411,134 Q428,106 411,84" stroke="var(--accent)" stroke-width="1.5" fill="none"/>
  <polygon points="411,82 407,89 415,89" fill="var(--accent)"/>
  <!-- Level 3 (top - partial, showing continuation) -->
  <ellipse cx="250" cy="90" rx="130" ry="24" stroke="var(--border)" stroke-width="1" fill="none" stroke-dasharray="4 3" opacity="0.3"/>
  <!-- Plan L3 -->
  <rect x="108" y="72" width="46" height="24" rx="4" fill="var(--code-bg)" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="131" y="88" text-anchor="middle" font-size="9" font-weight="600" fill="var(--cyan)">Plan</text>
  <!-- Do L3 -->
  <rect x="198" y="104" width="46" height="24" rx="4" fill="var(--code-bg)" stroke="var(--green)" stroke-width="1.5"/>
  <text x="221" y="120" text-anchor="middle" font-size="9" font-weight="600" fill="var(--green)">Do</text>
  <!-- Upward arrow indicating continuation -->
  <line x1="250" y1="66" x2="250" y2="42" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4 3"/>
  <polygon points="250,40 246,47 254,47" fill="var(--accent)"/>
  <text x="270" y="48" font-size="8" fill="var(--dim)">Continuous</text>
  <text x="270" y="58" font-size="8" fill="var(--dim)">improvement</text>
  <!-- Side label: maturity arrow -->
  <line x1="30" y1="255" x2="30" y2="48" stroke="var(--border)" stroke-width="1.5"/>
  <polygon points="30,45 26,52 34,52" fill="var(--border)"/>
  <text x="25" y="155" text-anchor="middle" font-size="8" fill="var(--dim)" transform="rotate(-90,25,155)">Maturity Level</text>
</svg>`

};
