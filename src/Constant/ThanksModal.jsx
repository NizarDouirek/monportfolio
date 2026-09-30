import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { FaLinkedin } from "react-icons/fa";
import "./thanks.css";

export default function ThanksModal({
  open,
  onClose,
  word = "MERCI",
  title,
  text,
  variant = "check", // "check" ou "heart"
  closeLabel = "Retour au site",
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="thanks-overlay" onClick={onClose}>
      <div className="thanks-card" onClick={(e) => e.stopPropagation()}>
        <span className="thanks-shape t-circle" />
        <span className="thanks-shape t-square" />
        <span className="thanks-shape t-triangle" />
        <span className="thanks-bg-word">{word}</span>

        <div className="thanks-content">
          {variant === "heart" ? (
            <svg className="thanks-check thanks-heart" viewBox="0 0 52 52">
              <path
                className="heart-path"
                d="M26 44C10 32 6 24 6 17C6 11 10.5 7 16 7C20 7 23.5 9.5 26 13C28.5 9.5 32 7 36 7C41.5 7 46 11 46 17C46 24 42 32 26 44Z"
              />
            </svg>
          ) : (
            <svg className="thanks-check" viewBox="0 0 52 52">
              <circle className="check-circle" cx="26" cy="26" r="24" />
              <path className="check-path" d="M14 27l8 8 16-17" />
            </svg>
          )}

          <h2>{title}</h2>
          <p>{text}</p>

          <div className="thanks-actions">
            <button className="btn-thanks" onClick={onClose}>
              {closeLabel}
            </button>
            <a
              className="btn-thanks-ghost"
              href="https://www.linkedin.com/in/nizar-douirek/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}