import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, Gauge, RotateCw } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

function buildGearPath(teeth: number, outerR: number, innerR: number): string {
  const step = (Math.PI * 2) / teeth;
  const commands: string[] = [];
  for (let i = 0; i < teeth; i++) {
    const a0 = i * step;
    const a1 = a0 + step * 0.22;
    const a2 = a0 + step * 0.48;
    const a3 = a0 + step * 0.72;
    const p0x = (Math.cos(a0) * innerR).toFixed(2);
    const p0y = (Math.sin(a0) * innerR).toFixed(2);
    const p1x = (Math.cos(a1) * outerR).toFixed(2);
    const p1y = (Math.sin(a1) * outerR).toFixed(2);
    const p2x = (Math.cos(a2) * outerR).toFixed(2);
    const p2y = (Math.sin(a2) * outerR).toFixed(2);
    const p3x = (Math.cos(a3) * innerR).toFixed(2);
    const p3y = (Math.sin(a3) * innerR).toFixed(2);
    commands.push(
      `${i === 0 ? "M" : "L"} ${p0x} ${p0y} L ${p1x} ${p1y} L ${p2x} ${p2y} L ${p3x} ${p3y}`
    );
  }
  commands.push("Z");
  return commands.join(" ");
}

const MAIN_GEAR_PATH = buildGearPath(36, 118, 108);
const SUB_GEAR_LEFT = buildGearPath(18, 52, 45);
const SUB_GEAR_RIGHT = buildGearPath(24, 66, 58);

interface NotFoundProps {
  onReturnHome: (hash?: string) => void;
}

export default function NotFound({ onReturnHome }: NotFoundProps) {
  const { language } = useLanguage();
  const zh = language === "zh";

  const phaseRef = useRef(0);
  const boostRef = useRef(0);
  const [angle, setAngle] = useState(0);
  const [boostLevel, setBoostLevel] = useState(0);

  useEffect(() => {
    let rafId = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      boostRef.current = Math.max(0, boostRef.current * Math.pow(0.42, dt));
      const speedMultiplier = 1 + boostRef.current * 3.6;
      phaseRef.current += dt * speedMultiplier;

      setAngle(phaseRef.current);
      setBoostLevel(boostRef.current);
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const windMainspring = () => {
    boostRef.current = Math.min(2.5, boostRef.current + 1.15);
  };

  // Dynamic Lissajous harmonic curve inside the central tourbillon '0'
  const lissajousPoints = useMemo(() => {
    const pts: string[] = [];
    const delta = angle * 0.9;
    for (let i = 0; i <= 96; i++) {
      const t = (i / 96) * Math.PI * 2;
      const x = (Math.sin(3 * t + delta) * 62).toFixed(1);
      const y = (Math.sin(2 * t) * 62).toFixed(1);
      pts.push(`${x},${y}`);
    }
    return pts.join(" ");
  }, [angle]);

  const pendulumDeg = Math.sin(angle * 2.4) * (16 + boostLevel * 6);
  const mainGearDeg = (angle * 22) % 360;
  const leftGearDeg = -((angle * 44) % 360);
  const rightGearDeg = -((angle * 33) % 360);
  const freqHz = (4.04 + boostLevel * 5.2).toFixed(2);
  const reservePct = Math.min(100, Math.round(72 + boostLevel * 11));

  // Orbiting resonator bead on the Lissajous curve
  const orbT = angle * 1.4;
  const orbX = (Math.sin(3 * orbT + angle * 0.9) * 62).toFixed(1);
  const orbY = (Math.sin(2 * orbT) * 62).toFixed(1);

  return (
    <div className="nf-page-container">
      <section className="nf-shell page-shell" aria-labelledby="nf-horology-title">
        <div className="nf-kicker">
          <span>
            <i className="status-dot" />
            {zh ? "精密奇点 · 机械谐振 404" : "KINETIC HOROLOGY · CALIBRE 404"}
          </span>
          <span className="nf-telemetry">
            ESCAPEMENT {freqHz} Hz · RESERVE {reservePct}%
          </span>
        </div>

        <div className="nf-horology-grid">
          {/* Left Column: Swiss Horology Editorial & Specs */}
          <div className="nf-horology-info">
            <p className="eyebrow muted">
              {zh ? "ERROR 404 · 页面未找到" : "ERROR 404 · PAGE NOT FOUND"}
            </p>
            <h1 id="nf-horology-title">
              {zh ? (
                <>
                  时间在此空转，
                  <br />
                  <span>齿轮仍在思考。</span>
                </>
              ) : (
                <>
                  A missing gear
                  <br />
                  <span>in the timeline.</span>
                </>
              )}
            </h1>
            <p className="nf-description">
              {zh
                ? "编号 404 的陀飞轮擒纵系统正在空转。你寻找的页面不在当前时间轴上——点击机芯或「上链蓄能」为发条注入扭矩，观察李萨如共振曲线的变化。"
                : "Calibre 404 is running in free oscillation. The page you requested slipped between the teeth of the timeline—wind the mainspring to accelerate the Lissajous resonator."}
            </p>

            <dl className="nf-spec-list">
              <div>
                <dt>{zh ? "机芯编号" : "CALIBRE"}</dt>
                <dd>YYH-404 TOURBILLON</dd>
              </div>
              <div>
                <dt>{zh ? "振荡频率" : "FREQUENCY"}</dt>
                <dd>{freqHz} Hz (28,800 vph)</dd>
              </div>
              <div>
                <dt>{zh ? "谐振比例" : "HARMONIC RATIO"}</dt>
                <dd>3 : 2 LISSAJOUS</dd>
              </div>
              <div>
                <dt>{zh ? "动力储存" : "POWER RESERVE"}</dt>
                <dd>{reservePct}% TORQUE</dd>
              </div>
            </dl>

            <div className="nf-actions">
              <button
                type="button"
                className="nf-btn-primary"
                onClick={() => onReturnHome()}
              >
                <ArrowLeft size={16} />
                {zh ? "返回主页时间线" : "Return to Timeline"}
              </button>
              <button
                type="button"
                className="nf-btn-secondary"
                onClick={windMainspring}
              >
                <RotateCw size={15} />
                {zh ? "上链蓄能 (+Hz)" : "Wind Mainspring"}
              </button>
              <button
                type="button"
                className="nf-btn-ghost"
                onClick={() => onReturnHome("#works")}
              >
                <Gauge size={15} />
                {zh ? "查看我的作品" : "Explore Works"}
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive SVG Horological Instrument */}
          <div className="nf-horology-stage">
            <svg
              viewBox="0 0 680 480"
              className="nf-svg-canvas"
              role="img"
              aria-label={
                zh
                  ? "404 瑞士陀飞轮齿轮与李萨如谐振摆钟"
                  : "404 Swiss tourbillon escapement gears and Lissajous pendulum"
              }
              onClick={windMainspring}
            >
              <defs>
                <radialGradient id="nf-horology-aura" cx="50%" cy="46%" r="48%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Instrument Outer Frame */}
              <rect
                x="16"
                y="16"
                width="648"
                height="448"
                rx="4"
                fill="var(--surface)"
                fillOpacity="0.45"
                stroke="var(--border)"
                strokeWidth="1"
              />
              <circle cx="340" cy="220" r="205" fill="url(#nf-horology-aura)" />

              {/* Blueprint Axes & Concentric Construction Circles */}
              <g stroke="var(--border)" strokeWidth="0.8" fill="none">
                <line x1="16" y1="220" x2="664" y2="220" strokeDasharray="4 4" />
                <line x1="340" y1="16" x2="340" y2="464" strokeDasharray="4 4" />
                <circle cx="340" cy="220" r="168" strokeDasharray="2 6" />
                <circle cx="340" cy="220" r="136" />
              </g>

              {/* Harmonic Pendulum Swinging from Central Pivot */}
              <g transform={`translate(340, 220) rotate(${pendulumDeg.toFixed(2)})`}>
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="188"
                  stroke="var(--foreground)"
                  strokeWidth="2"
                />
                <circle
                  cx="0"
                  cy="188"
                  r="22"
                  fill="var(--background)"
                  stroke="var(--foreground)"
                  strokeWidth="3"
                />
                <circle
                  cx="0"
                  cy="188"
                  r="12"
                  fill="#d5ec91"
                  stroke="#203e52"
                  strokeWidth="1.5"
                />
                <circle cx="0" cy="188" r="3" fill="#203e52" />
              </g>
              {/* Pendulum scale arc at bottom */}
              <path
                d="M 250 404 A 192 192 0 0 0 430 404"
                fill="none"
                stroke="var(--muted)"
                strokeWidth="1"
                strokeDasharray="2 6"
              />

              {/* Left Planetary Gear & Skeletonized Bridge '4' */}
              <g transform="translate(152, 220)">
                <g transform={`rotate(${leftGearDeg.toFixed(2)})`}>
                  <path
                    d={SUB_GEAR_LEFT}
                    fill="var(--background)"
                    stroke="var(--border)"
                    strokeWidth="1.4"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="32"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1"
                    strokeDasharray="6 4"
                  />
                  <line x1="-32" y1="0" x2="32" y2="0" stroke="var(--border)" strokeWidth="1.5" />
                  <line x1="0" y1="-32" x2="0" y2="32" stroke="var(--border)" strokeWidth="1.5" />
                </g>
                {/* Skeletonized Bridge '4' */}
                <path
                  d="M 22 -106 L -64 26 L 52 26 M 22 -106 L 22 106"
                  fill="none"
                  stroke="var(--foreground)"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 22 -106 L -64 26 L 52 26 M 22 -106 L 22 106"
                  fill="none"
                  stroke="var(--background)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Ruby / Sapphire pivot bearings */}
                <circle cx="0" cy="0" r="7" fill="#d5ec91" stroke="#203e52" strokeWidth="2" />
                <circle cx="22" cy="-106" r="5" fill="var(--accent)" />
                <circle cx="-64" cy="26" r="5" fill="var(--accent)" />
                <circle cx="22" cy="26" r="5" fill="var(--accent)" />
              </g>

              {/* Right Planetary Gear & Skeletonized Bridge '4' */}
              <g transform="translate(528, 220)">
                <g transform={`rotate(${rightGearDeg.toFixed(2)})`}>
                  <path
                    d={SUB_GEAR_RIGHT}
                    fill="var(--background)"
                    stroke="var(--border)"
                    strokeWidth="1.4"
                  />
                  <circle
                    cx="0"
                    cy="0"
                    r="42"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1"
                    strokeDasharray="8 5"
                  />
                  <line x1="-42" y1="0" x2="42" y2="0" stroke="var(--border)" strokeWidth="1.5" />
                  <line x1="0" y1="-42" x2="0" y2="42" stroke="var(--border)" strokeWidth="1.5" />
                </g>
                {/* Skeletonized Bridge '4' */}
                <path
                  d="M 26 -106 L -60 26 L 56 26 M 26 -106 L 26 106"
                  fill="none"
                  stroke="var(--foreground)"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 26 -106 L -60 26 L 56 26 M 26 -106 L 26 106"
                  fill="none"
                  stroke="var(--background)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="0" cy="0" r="7" fill="#d5ec91" stroke="#203e52" strokeWidth="2" />
                <circle cx="26" cy="-106" r="5" fill="var(--accent)" />
                <circle cx="-60" cy="26" r="5" fill="var(--accent)" />
                <circle cx="26" cy="26" r="5" fill="var(--accent)" />
              </g>

              {/* Central '0' — Tourbillon Escapement & Lissajous Harmonic Resonator */}
              <g transform="translate(340, 220)">
                {/* Outer 36-tooth Escapement Wheel */}
                <g transform={`rotate(${mainGearDeg.toFixed(2)})`}>
                  <path
                    d={MAIN_GEAR_PATH}
                    fill="var(--background)"
                    stroke="var(--foreground)"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  <circle cx="0" cy="0" r="98" fill="none" stroke="var(--foreground)" strokeWidth="6" />
                </g>

                {/* Gimbal Elliptical Rings */}
                <ellipse
                  cx="0"
                  cy="0"
                  rx="86"
                  ry="44"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="1.2"
                  transform={`rotate(${(angle * 35).toFixed(1)})`}
                />
                <ellipse
                  cx="0"
                  cy="0"
                  rx="86"
                  ry="44"
                  fill="none"
                  stroke="var(--border)"
                  strokeWidth="1.2"
                  transform={`rotate(${(-angle * 28 + 60).toFixed(1)})`}
                />

                {/* Live Parametric Lissajous Harmonic Curve */}
                <polyline
                  points={lissajousPoints}
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Orbiting Resonator Bead */}
                <circle
                  cx={orbX}
                  cy={orbY}
                  r="6.5"
                  fill="#d5ec91"
                  stroke="#203e52"
                  strokeWidth="2"
                />

                {/* Central Tourbillon Bridge */}
                <line x1="-94" y1="0" x2="-74" y2="0" stroke="var(--foreground)" strokeWidth="4" />
                <line x1="74" y1="0" x2="94" y2="0" stroke="var(--foreground)" strokeWidth="4" />
                <circle cx="0" cy="0" r="7" fill="var(--foreground)" />
                <circle cx="0" cy="0" r="2.5" fill="#d5ec91" />
              </g>

              {/* Technical Annotations inside Blueprint */}
              <text
                x="36"
                y="44"
                fill="var(--muted)"
                fontSize="10"
                fontWeight="700"
                letterSpacing="0.14em"
              >
                FIG. 404 — ESCAPEMENT CALIBRE
              </text>
              <text
                x="644"
                y="44"
                textAnchor="end"
                fill="var(--accent)"
                fontSize="10"
                fontWeight="700"
                letterSpacing="0.14em"
              >
                {boostLevel > 0.15 ? "OVERDRIVE ACTIVE" : "CLICK MECHANISM TO WIND"}
              </text>
              <text
                x="36"
                y="444"
                fill="var(--muted)"
                fontSize="10"
                fontWeight="600"
                letterSpacing="0.12em"
              >
                STUDIO YYH HOROLOGICAL LAB · SWISS RATIO
              </text>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
