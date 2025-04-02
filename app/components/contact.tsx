"use client";
import React from "react";
import { useLanguage } from '../../context/languageContext';
import { translations } from '../../locales/translation';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const mailtoLink = `mailto:lucas.sauvinet@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`De: ${email}\n\n${message}`)}`;

    window.location.href = mailtoLink;
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = (e.currentTarget.closest("form") as HTMLFormElement);
    if (form) {
      form.reset();
    }
  };

  return (
    <section className="Contact">
      <div className="Contact-content">
        <h1 className="contact-title">{t.contactTitle}</h1>

        <div className="Contact-layout">
          {/* Formulaire */}
          <form className="Contact-form" onSubmit={handleSubmit}>
            <div className="input">
              <label htmlFor="email">{t.contactEmail}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="Contact-input-email"
              />
            </div>
            <div>
              <label htmlFor="subject">{t.contactObject}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="Contact-input-object"
              />
            </div>
            <div>
              <label htmlFor="message">{t.contactContent}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="Contact-input-content"
              ></textarea>
            </div>
            <div className="Contact-btn-section">
              <button
                type="button"
                className="Contact-btn-cancel"
                onClick={handleReset}
              >
                {t.cancel}
              </button>
              <button type="submit" className="Contact-btn-submit">
                {t.send}
              </button>
            </div>
          </form>

          {/* Carte */}
          <div className="Contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.770571979506!2d5.901578728229332!3d45.55494065257999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba9ae4e4111f7%3A0xe4865284ce8a765c!2sAll.%20de%20l&#39;Eau%20Vive%2C%2073000%20Jacob-Bellecombette!5e0!3m2!1sfr!2sfr!4v1743585341847!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          />
          </div>
        </div>
      </div>
    </section>
  );
}
