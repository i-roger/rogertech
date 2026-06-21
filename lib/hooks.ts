'use client';

import { useState, useEffect } from 'react';

export function useSystemTelemetry() {
  const [sysUptime, setSysUptime] = useState<string>("00:00:00");
  const [sysPing, setSysPing] = useState<string>("8ms");

  const [uxValue, setUxValue] = useState<number>(97);
  const [perfValue, setPerfValue] = useState<number>(94);

  const [diagnosticsLogs, setDiagnosticsLogs] = useState<string[]>([
    "[SYS_INFO] RogerTech Engine Booted... [OK]",
    "[SYS_INFO] SEO & Metadata Pipeline Synced...",
    "[SYS_INFO] Responsive CSS Viewport Active..."
  ]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const startTime = Date.now();
    const telemetryInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const hrs = Math.floor(elapsed / 3600000).toString().padStart(2, '0');
      const mins = Math.floor((elapsed % 3600000) / 60000).toString().padStart(2, '0');
      const secs = Math.floor((elapsed % 60000) / 1000).toString().padStart(2, '0');
      setSysUptime(`${hrs}:${mins}:${secs}`);

      const randomPing = Math.floor(Math.random() * 4) + 6;
      setSysPing(`${randomPing}ms`);
    }, 1000);

    const logsPool = [
      "[API_PULL] Analytics sincronizados.",
      "[SECURITY] Escaneando frames...",
      "[CACHE] CSS cacheado em cache_L1.",
      "[SYS_OK] Latência geral normalizada."
    ];
    const diagnosticsInterval = setInterval(() => {
      setUxValue(Math.floor(Math.random() * 5) + 95);
      setPerfValue(Math.floor(Math.random() * 4) + 96);

      setDiagnosticsLogs(prev => {
        const nextLog = `[SYS_INFO] ${logsPool[Math.floor(Math.random() * logsPool.length)]}`;
        const updated = [...prev, nextLog];
        if (updated.length > 5) updated.shift();
        return updated;
      });
    }, 4000);

    return () => {
      clearInterval(telemetryInterval);
      clearInterval(diagnosticsInterval);
    };
  }, []);

  return { sysUptime, sysPing, uxValue, perfValue, diagnosticsLogs };
}
