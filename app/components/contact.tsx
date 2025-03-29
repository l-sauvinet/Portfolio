"use client";
import React from "react";

export default function Contact() {
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
      <h1 className="text-3xl font-bold mb-6">Contactez-moi</h1>
      <form className="Contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Votre Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="Contact-input-email"
          />
        </div>
        <div>
          <label htmlFor="subject">Objet</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="Contact-input-object"
          />
        </div>
        <div>
          <label htmlFor="message">Contenu</label>
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
            Annuler
          </button>
          <button type="submit" className="Contact-btn-submit">
            Envoyer
          </button>
        </div>
      </form>
      </div>
    </section>
  );
}