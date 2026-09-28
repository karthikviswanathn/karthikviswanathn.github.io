// Footnotes in the style of LessWrong. On wide screens every note is repeated in the
// margin next to its marker. On narrower screens, hovering a marker shows the note.

document.addEventListener("DOMContentLoaded", () => {
  const markers = Array.from(document.querySelectorAll("sup[id^='fnref'] > a.footnote"));
  if (markers.length === 0) return;

  // Copy of the content of a note, without the link back to the text.
  const noteContent = (marker) => {
    const note = document.getElementById(decodeURIComponent(marker.hash.slice(1)));
    if (!note) return null;

    const content = document.createElement("span");
    note.childNodes.forEach((child) => content.appendChild(child.cloneNode(true)));
    content.querySelectorAll(".reversefootnote").forEach((backlink) => backlink.remove());

    const index = document.createElement("span");
    index.className = "sidenote-index";
    index.textContent = marker.textContent.trim() + ".";
    content.prepend(index);
    return content;
  };

  // Margin notes
  const sidenotes = [];
  markers.forEach((marker) => {
    const container = marker.closest("#markdown-content, .post-content, article");
    const content = noteContent(marker);
    if (!container || !content) return;

    const sidenote = document.createElement("aside");
    sidenote.className = "sidenote";
    sidenote.appendChild(content);
    container.classList.add("has-sidenotes");
    container.appendChild(sidenote);
    sidenotes.push({ marker, container, sidenote });

    marker.addEventListener("mouseenter", () => sidenote.classList.add("active"));
    marker.addEventListener("mouseleave", () => sidenote.classList.remove("active"));
  });

  // Line each margin note up with its marker, moving it down if it would overlap the previous one.
  const placeSidenotes = () => {
    let previousBottom = 0;
    sidenotes.forEach(({ marker, container, sidenote }) => {
      const line = marker.parentElement.getBoundingClientRect();
      const top = Math.max(line.top - container.getBoundingClientRect().top, previousBottom);
      sidenote.style.top = top + "px";
      previousBottom = top + sidenote.offsetHeight + 12;
    });
  };

  const sidenotesVisible = () => sidenotes.length > 0 && getComputedStyle(sidenotes[0].sidenote).display !== "none";

  placeSidenotes();
  window.addEventListener("load", placeSidenotes);
  window.addEventListener("resize", placeSidenotes);

  // Preview on hover
  const preview = document.createElement("div");
  preview.className = "footnote-preview";
  document.body.appendChild(preview);

  let hideTimer = null;
  const hidePreview = () => {
    hideTimer = setTimeout(() => preview.classList.remove("visible"), 150);
  };

  const showPreview = (marker) => {
    if (sidenotesVisible()) return;
    const content = noteContent(marker);
    if (!content) return;

    clearTimeout(hideTimer);
    preview.replaceChildren(content);
    preview.classList.add("visible");

    const line = marker.getBoundingClientRect();
    const left = Math.min(line.left, document.documentElement.clientWidth - preview.offsetWidth - 16);
    preview.style.left = Math.max(left, 16) + window.scrollX + "px";
    preview.style.top = line.bottom + window.scrollY + 6 + "px";
  };

  markers.forEach((marker) => {
    marker.addEventListener("mouseenter", () => showPreview(marker));
    marker.addEventListener("mouseleave", hidePreview);
  });
  preview.addEventListener("mouseenter", () => clearTimeout(hideTimer));
  preview.addEventListener("mouseleave", hidePreview);
});
