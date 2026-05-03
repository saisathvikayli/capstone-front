// src/styles/common.js
// Theme: red or others

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-[#0a0a0a] min-h-screen";
export const pageWrapper = "max-w-5xl mx-auto px-6 py-16";
export const section = "mb-14";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-[#1a1a1a] rounded-2xl p-7 hover:bg-[#222] transition-colors duration-200 cursor-pointer border border-[#c9a84c]";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "text-5xl font-bold text-[#c9a84c] tracking-tight leading-none mb-2";
export const headingClass = "text-2xl font-bold text-[#c9a84c] tracking-tight";
export const subHeadingClass = "text-lg font-semibold text-[#e34234] tracking-tight";
export const bodyText = "text-[#e0e0e0] leading-relaxed";
export const mutedText = "text-sm text-[#888]";
export const linkClass = "text-[#ffd700] hover:text-[#c9a84c] transition-colors";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-[#e34234] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#c0392b] transition-colors cursor-pointer text-sm tracking-tight border border-[#c9a84c]";
export const secondaryBtn =
  "border border-[#c9a84c] text-[#c9a84c] font-medium px-5 py-2 rounded-full hover:bg-[#1a1a1a] transition-colors cursor-pointer text-sm";
export const ghostBtn = "text-[#ffd700] font-medium hover:text-[#c9a84c] transition-colors cursor-pointer text-sm";

// ─── Forms ────────────────────────────────────────────
export const formCard = "bg-[#1a1a1a] rounded-2xl p-10 max-w-4xl mx-auto border border-[#c9a84c]";
export const formTitle = "text-2xl font-bold text-[#c9a84c] tracking-tight text-center mb-7";
export const labelClass = "text-xs font-medium text-[#ffd700] mb-1.5 block";
export const inputClass =
  "w-full bg-[#0a0a0a] border border-[#c9a84c] rounded-xl px-4 py-2.5 text-[#e0e0e0] text-sm placeholder:text-[#555] focus:outline-none focus:border-[#e34234] focus:ring-2 focus:ring-[#e34234]/20 transition";
export const formGroup = "mb-4";
export const submitBtn =
  "w-full bg-[#e34234] text-white font-semibold py-2.5 rounded-full hover:bg-[#c0392b] transition-colors cursor-pointer mt-2 text-sm tracking-tight border border-[#c9a84c]";

// ─── Navbar ───────────────────────────────────────────
export const navbarClass =
  "bg-[#0a0a0a] border-b border-[#c9a84c] px-8 h-[52px] flex items-center sticky top-0 z-50";
export const navContainerClass = "max-w-5xl mx-auto w-full flex items-center justify-between";
export const navBrandClass = "text-base font-semibold text-[#ffd700] tracking-tight";
export const navLinksClass = "flex items-center gap-7";
export const navLinkClass = "text-[0.8rem] text-[#888] hover:text-[#ffd700] transition-colors font-normal";
export const navLinkActiveClass = "text-[0.8rem] text-[#e34234] font-medium";

// ─── Article / Blog ───────────────────────────────────
export const articleGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";
export const articleCardClass =
  "bg-[#1a1a1a] p-7 hover:bg-[#222] transition-colors duration-200 flex flex-col gap-2.5 cursor-pointer border border-[#c9a84c] rounded-2xl";
export const articleTitle = "text-base font-semibold text-[#ffd700] leading-snug tracking-tight";
export const articleExcerpt = "text-sm text-[#aaa] leading-relaxed";
export const articleMeta = "text-xs text-[#e34234]";
export const articleBody = "text-[#e0e0e0] leading-[1.85] text-[0.95rem] max-w-2xl";
export const timestampClass = "text-xs text-[#c9a84c] flex items-center gap-1.5";
export const tagClass = "text-[0.65rem] font-semibold text-[#ffd700] uppercase tracking-widest w-fit";

// ─── Article Page ─────────────────────────────────────
export const articlePageWrapper = "max-w-3xl mx-auto px-6 py-14";
export const articleHeader = "mb-10 flex flex-col gap-4";
export const articleCategory = "text-[0.7rem] font-semibold uppercase tracking-widest text-[#e34234]";
export const articleMainTitle = "text-4xl font-bold text-[#ffd700] leading-tight tracking-tight";
export const articleAuthorRow =
  "flex items-center justify-between border-t border-b border-[#c9a84c] py-4 text-sm text-[#aaa]";
export const authorInfo = "flex items-center gap-2 font-medium text-[#c9a84c]";
export const articleContent = "text-[#1a1a1a] leading-[1.9] text-[1rem] whitespace-pre-line mt-8";
export const articleFooter = "border-t border-[#c9a84c] mt-12 pt-6 text-sm text-[#888]";

// ─── Article Actions ─────────────────────────────
export const articleActions = "flex gap-3 mt-6";
export const editBtn = "bg-[#c9a84c] text-black text-sm px-4 py-2 rounded-full hover:bg-[#ffd700] transition";
export const deleteBtn = "bg-[#e34234] text-white text-sm px-4 py-2 rounded-full hover:bg-[#c0392b] transition";

// ─── Article Status Badge ─────────────────────────
export const articleStatusActive =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-[#ffd700]/20 text-[#c9a84c]";
export const articleStatusDeleted =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-[#e34234]/20 text-[#e34234]";

// ─── Feedback ─────────────────────────────────────────
export const errorClass =
  "bg-[#e34234]/10 text-[#e34234] border border-[#e34234]/30 rounded-xl px-4 py-3 text-sm";
export const successClass =
  "bg-[#ffd700]/10 text-[#c9a84c] border border-[#ffd700]/20 rounded-xl px-4 py-3 text-sm";
export const loadingClass = "text-[#ffd700] text-sm animate-pulse text-center py-10";
export const emptyStateClass = "text-center text-[#888] py-16 text-sm";

// ─── Comments ───────────────────────────────────────
export const commentsWrapper = "mt-12 flex flex-col gap-6";
export const commentCard = "bg-[#1a1a1a] rounded-2xl p-5 transition hover:bg-[#222] border border-[#c9a84c]";
export const commentHeader = "flex items-center justify-between mb-2";
export const commentUser = "text-sm font-semibold text-[#ffd700]";
export const commentTime = "text-xs text-[#c9a84c]";
export const commentText = "text-[#e0e0e0] text-sm leading-relaxed mt-1";
export const avatar =
  "w-9 h-9 rounded-full bg-[#e34234]/10 text-[#e34234] flex items-center justify-center text-sm font-semibold";
export const commentUserRow = "flex items-center gap-3";

// ─── Divider ──────────────────────────────────────────
export const divider = "border-t border-[#c9a84c] my-10";