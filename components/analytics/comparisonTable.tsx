import React from "react";

interface Cell {
  text: string | React.ReactNode;
  className?: string;
}

interface ComparisonTableProps {
  topLeft: string;
  topRight: string;
  headers: Cell[];
  rows: Cell[][];
}

export default function ComparisonTable({ topLeft, topRight, headers, rows }: ComparisonTableProps) {
  return (
    <div className="border border-white/10 bg-zinc-900/20 rounded-xl overflow-hidden shadow-2xl">
      <div className="bg-[#0b0b14] border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <span className="text-xs font-bold text-white font-mono tracking-widest">{topLeft}</span>
        <span className="text-[10px] text-zinc-500 font-mono">{topRight}</span>
      </div>

      <div className="p-6 overflow-x-auto font-mono">
        <table className="w-full text-left text-xs text-zinc-400 border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              {headers.map((h, idx) => (
                <th key={idx} className={`pb-3 font-semibold uppercase ${h.className || 'text-zinc-500'}`}>
                  {h.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} className={`py-4 ${cell.className || 'text-zinc-500 text-center'}`}>
                    {cell.text}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
