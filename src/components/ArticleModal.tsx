import React from 'react';
import { X, Calendar } from 'lucide-react';
import { ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onConsult: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onConsult,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#252223]/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-[#FFFFFF] rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header in Charcoal #252223 */}
        <div className="px-6 py-5 bg-[#252223] text-white flex items-center justify-between border-b border-[#383435]">
          <div>
            <span className="text-[11px] font-bold tracking-wider uppercase text-[#8ABE4B] block">
              {article.category} · Demola Adetola &amp; Co. Research
            </span>
            <h3 className="text-xl font-bold text-white mt-1 leading-snug">
              {article.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-sm text-[#626061] leading-relaxed">
          <div className="flex items-center gap-3 text-xs text-[#626061] pb-3 border-b border-[#E5E9E1]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#07A757]" />
              <span>Published: {article.date}</span>
            </span>
            <span>·</span>
            <span className="text-[#252223] font-medium">By Demola Adetola &amp; Co. Practice Partners</span>
          </div>

          <div className="p-4 bg-[#F5F8F2] rounded-xl font-medium text-[#252223] italic text-xs sm:text-sm shadow-2xs">
            "{article.excerpt}"
          </div>

          {article.content.map((p, idx) => (
            <p key={idx} className="text-[#626061]">
              {p}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F5F8F2] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#626061] hover:text-[#252223]"
          >
            Close Article
          </button>

          <button
            onClick={() => {
              onClose();
              onConsult();
            }}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#252223] bg-[#8ABE4B] hover:bg-[#07A757] hover:text-white rounded-lg shadow-2xs transition-colors"
          >
            Discuss With Our Valuers
          </button>
        </div>

      </div>
    </div>
  );
};
