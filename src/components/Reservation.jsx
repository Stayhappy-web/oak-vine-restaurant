import emailjs from "@emailjs/browser";
import { useState } from "react";

function Reservation() {

const [success, setSuccess] = useState(false);
const [loading, setLoading] = useState(false);
const handleReservation = async (e) => {
  e.preventDefault();

  setLoading(true);

  const form = e.target;

  try {

    await emailjs.sendForm(
      "service_zlo10yo",
      "template_6fttahp",
      form,
      "hwxxIQm1HEvy4dzJl"
    );

    await emailjs.sendForm(
      "service_zlo10yo",
      "template_g69468m",
      form,
      "hwxxIQm1HEvy4dzJl"
    );

    setSuccess(true);

    form.reset();

  } catch (error) {

    console.error(error);

    alert("Something went wrong.");

  }

  setLoading(false);
};
   return (
    <section
      id="reservation"
      className="reservation"
    >
      <h2>Reserve Your Table</h2>

      <p>
        Book your dining experience today.
      </p>

      <form
  className="reservation-form"
  onSubmit={handleReservation}
>

        <input
        name="customer_name"
          type="text"
          placeholder="Full Name"
          required
        />

        <input
        name="customer_email"
          type="email"
          placeholder="Email Address"
          required
        />

        <input
        name="phone"
          type="tel"
          placeholder="Phone Number"
          required
        />

        <input
        name="reservation_date"
          type="date"
          required
        />

        <input
        name="reservation_time"
          type="time"
          required
        />

        <select name="guests" required>
          <option value="">
            Number of Guests
          </option>

          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4 Guests</option>
          <option>5 Guests</option>
          <option>6+ Guests</option>
        </select>

        <textarea
  name="special_requests"
  placeholder="Special Requests"
></textarea>
        {
  success && (
    <div className="success-message">
      Reservation received successfully.

      A confirmation email has been sent.
    </div>
  )
}

        <button type="submit">
  {
    loading
      ? "Sending..."
      : "Confirm Reservation"
  }
</button>
      </form>
    </section>
  );
}

export default Reservation;