// 最終更新・現在時刻・ビルドID表示
const qs = new URLSearchParams(location.search);
const buildId = qs.get("id") || "none";

document.getElementById("buildId").textContent = buildId;
document.getElementById("lastModified").textContent = document.lastModified || "(unknown)";
document.getElementById("now").textContent = new Date().toLocaleString();
document.getElementById("year").textContent = new Date().getFullYear();

// ダミー統計（後でAPI/CSV読込に差し替え）
const fakeStats = [
  { label: "Visitors (sample)", value: 1234 },
  { label: "Sessions (sample)", value: 987 },
  { label: "Bounce% (sample)", value: "43.2%" },
  { label: "Avg.Time (sample)", value: "1m 12s" }
];

const wrap = document.getElementById("stats");
fakeStats.forEach(s => {
  const el = document.createElement("div");
  el.className = "stat";
  el.innerHTML = `<div class="label">${s.label}</div><div class="value">${s.value}</div>`;
  wrap.appendChild(el);
});
