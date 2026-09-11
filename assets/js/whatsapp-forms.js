document.addEventListener('DOMContentLoaded', function () {
  // Dr. Mann V. Thummar's WhatsApp Phone Number (Shree Krishna Dental Hospital)
  const doctorPhoneNumber = "919879154525";

  const forms = document.querySelectorAll('form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const name = formData.get('name') || 'Patient';
      const phone = formData.get('phone') || 'Not provided';
      const email = formData.get('email') || '';
      const treatment = formData.get('treatment') || formData.get('department') || 'General Dental Consultation';
      const date = formData.get('date') || 'As soon as possible';
      const message = formData.get('message') || formData.get('subject') || 'No extra notes';

      const isAppointment = form.querySelector('input[name="date"]') || form.getAttribute('action')?.includes('appointment');

      let text = '';

      if (isAppointment) {
        text = `*SHREE KRISHNA DENTAL HOSPITAL* 🦷\n` +
          `*New Appointment Request for Dr. Mann V. Thummar*\n\n` +
          `👤 *Patient Name:* ${name}\n` +
          `📞 *Phone:* ${phone}\n` +
          (email ? `✉️ *Email:* ${email}\n` : '') +
          `🩺 *Treatment Needed:* ${treatment}\n` +
          `📅 *Preferred Date:* ${date}\n` +
          `📝 *Notes/Symptoms:* ${message}\n\n` +
          `Please confirm my appointment slot at Sarthana Jakatnaka Branch. Thank you!`;
      } else {
        text = `*SHREE KRISHNA DENTAL HOSPITAL* 📞\n` +
          `*New Patient Inquiry for Dr. Mann V. Thummar*\n\n` +
          `👤 *Name:* ${name}\n` +
          `📞 *Phone:* ${phone}\n` +
          (email ? `✉️ *Email:* ${email}\n` : '') +
          `🩺 *Treatment / Query:* ${treatment}\n` +
          `💬 *Message:* ${message}\n\n` +
          `Looking forward to your response. Thank you!`;
      }

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/${doctorPhoneNumber}?text=${encodedText}`;

      const sentMsg = form.querySelector('.sent-message');
      if (sentMsg) {
        sentMsg.innerHTML = '<i class="bi bi-whatsapp me-2"></i>Redirecting to WhatsApp to send your details to Dr. Mann V. Thummar...';
        sentMsg.style.display = 'block';
        sentMsg.classList.add('d-block', 'alert', 'alert-success', 'mt-3');
      }

      // Open WhatsApp chat in a new tab
      window.open(whatsappUrl, '_blank');
    });
  });
});
