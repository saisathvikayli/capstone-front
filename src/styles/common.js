// src/styles/common.js
// Theme: Bold & Colorful with Comic Sans

// ─── Layout ───────────────────────────────────────────
export const pageBackground = "bg-[#fff9f0] min-h-screen";
export const pageWrapper = "max-w-5xl mx-auto px-6 py-16";
export const section = "mb-14";

// ─── Cards ────────────────────────────────────────────
export const cardClass =
  "bg-[#ffe8f0] rounded-2xl p-7 hover:bg-[#ffd6e7] transition-colors duration-200 cursor-pointer border-2 border-[#ff6b9d]";

// ─── Typography ───────────────────────────────────────
export const pageTitleClass = "text-5xl font-bold text-[#ff6b9d] tracking-tight leading-none mb-2" ;
export const headingClass = "text-2xl font-bold text-[#6c3fc5] tracking-tight";
export const subHeadingClass = "text-lg font-semibold text-[#ff6b9d] tracking-tight";
export const bodyText = "text-[#444] leading-relaxed";
export const mutedText = "text-sm text-[#999]";
export const linkClass = "text-[#ff6b9d] hover:text-[#e0457a] transition-colors";

// ─── Buttons ──────────────────────────────────────────
export const primaryBtn =
  "bg-[#ff6b9d] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#e0457a] transition-colors cursor-pointer text-sm tracking-tight border-2 border-[#e0457a]";
export const secondaryBtn =
  "border-2 border-[#6c3fc5] text-[#6c3fc5] font-medium px-5 py-2 rounded-full hover:bg-[#ede7f6] transition-colors cursor-pointer text-sm";
export const ghostBtn = "text-[#ff6b9d] font-medium hover:text-[#e0457a] transition-colors cursor-pointer text-sm";

// ─── Forms ────────────────────────────────────────────
export const formCard = "bg-[#fff0f8] rounded-2xl p-10 max-w-4xl mx-auto border-2 border-[#ff6b9d]";
export const formTitle = "text-2xl font-bold text-[#6c3fc5] tracking-tight text-center mb-7";
export const labelClass = "text-xs font-medium text-[#6c3fc5] mb-1.5 block";
export const inputClass =
  "w-full bg-white border-2 border-[#ff6b9d] rounded-xl px-4 py-2.5 text-[#333] text-sm placeholder:text-[#ffb3d1] focus:outline-none focus:border-[#6c3fc5] focus:ring-2 focus:ring-[#6c3fc5]/20 transition";
export const formGroup = "mb-4";
export const submitBtn =
  "w-full bg-[#ff6b9d] text-white font-semibold py-2.5 rounded-full hover:bg-[#e0457a] transition-colors cursor-pointer mt-2 text-sm tracking-tight border-2 border-[#e0457a]";

// ─── Navbar ───────────────────────────────────────────
export const navbarClass =
  "bg-[#6c3fc5] backdrop-blur-xl border-b border-[#ff6b9d] px-8 h-[52px] flex items-center sticky top-0 z-50";
export const navContainerClass = "max-w-5xl mx-auto w-full flex items-center justify-between";
export const navBrandClass = "text-base font-semibold text-white tracking-tight";
export const navLinksClass = "flex items-center gap-7";
export const navLinkClass = "text-[0.8rem] text-[#e8d5ff] hover:text-white transition-colors font-normal";
export const navLinkActiveClass = "text-[0.8rem] text-[#ff6b9d] font-medium";

// ─── Article / Blog ───────────────────────────────────
export const articleGrid = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";
export const articleCardClass =
  "bg-[#fff0f8] p-7 hover:bg-[#ffe0f0] transition-colors duration-200 flex flex-col gap-2.5 cursor-pointer border-2 border-[#ff6b9d] rounded-2xl";
export const articleTitle = "text-base font-semibold text-[#6c3fc5] leading-snug tracking-tight";
export const articleExcerpt = "text-sm text-[#666] leading-relaxed";
export const articleMeta = "text-xs text-[#ff6b9d]";
export const articleBody = "text-[#444] leading-[1.85] text-[0.95rem] max-w-2xl";
export const timestampClass = "text-xs text-[#ff6b9d] flex items-center gap-1.5";
export const tagClass = "text-[0.65rem] font-semibold text-[#6c3fc5] uppercase tracking-widest w-fit";

// ─── Article Page ─────────────────────────────────────
export const articlePageWrapper = "max-w-3xl mx-auto px-6 py-14";
export const articleHeader = "mb-10 flex flex-col gap-4";
export const articleCategory = "text-[0.7rem] font-semibold uppercase tracking-widest text-[#ff6b9d]";
export const articleMainTitle = "text-4xl font-bold text-[#6c3fc5] leading-tight tracking-tight";
export const articleAuthorRow =
  "flex items-center justify-between border-t border-b border-[#ff6b9d] py-4 text-sm text-[#666]";
export const authorInfo = "flex items-center gap-2 font-medium text-[#6c3fc5]";
export const articleContent = "text-[#333] leading-[1.9] text-[1rem] whitespace-pre-line mt-8";
export const articleFooter = "border-t border-[#ff6b9d] mt-12 pt-6 text-sm text-[#999]";

// ─── Article Actions ─────────────────────────────
export const articleActions = "flex gap-3 mt-6";
export const editBtn = "bg-[#6c3fc5] text-white text-sm px-4 py-2 rounded-full hover:bg-[#5a32a3] transition";
export const deleteBtn = "bg-[#ff3b30] text-white text-sm px-4 py-2 rounded-full hover:bg-[#d62c23] transition";

// ─── Article Status Badge ─────────────────────────
export const articleStatusActive =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-[#34c759]/20 text-[#248a3d]";
export const articleStatusDeleted =
  "absolute top-3 right-3 text-[10px] font-semibold px-2 py-1 rounded-full bg-[#ff3b30]/20 text-[#cc2f26]";

// ─── Feedback ─────────────────────────────────────────
export const errorClass =
  "bg-[#ff3b30]/[0.06] text-[#cc2f26] border border-[#ff3b30]/[0.18] rounded-xl px-4 py-3 text-sm";
export const successClass =
  "bg-[#34c759]/[0.07] text-[#248a3d] border border-[#34c759]/20 rounded-xl px-4 py-3 text-sm";
export const loadingClass = "text-[#ff6b9d] text-sm animate-pulse text-center py-10";
export const emptyStateClass = "text-center text-[#999] py-16 text-sm";

// ─── Comments ───────────────────────────────────────
export const commentsWrapper = "mt-12 flex flex-col gap-6";
export const commentCard = "bg-[#fff0f8] rounded-2xl p-5 transition hover:bg-[#ffe0f0] border border-[#ff6b9d]";
export const commentHeader = "flex items-center justify-between mb-2";
export const commentUser = "text-sm font-semibold text-[#6c3fc5]";
export const commentTime = "text-xs text-[#ff6b9d]";
export const commentText = "text-[#333] text-sm leading-relaxed mt-1";
export const avatar =
  "w-9 h-9 rounded-full bg-[#ff6b9d]/10 text-[#ff6b9d] flex items-center justify-center text-sm font-semibold";
export const commentUserRow = "flex items-center gap-3";

// ─── Divider ──────────────────────────────────────────
export const divider = "border-t border-[#ff6b9d] my-10";