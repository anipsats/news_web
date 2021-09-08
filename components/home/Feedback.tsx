export default function Feedback() {
  const email = 'contact@newsta.in';
  const phoneNumber = '+91 8879657250';

  return (
    <section id="feedback" className="relative">
      <div className="p-6 mt-16">
        <h1 className="text-xl font-extrabold mb-4">Feedback</h1>

        <p className="my-2">We at Newsta can be reached at:</p>

        <h2 className="my-4 font-semibold text-l">Email</h2>

        <a
          className="my-2 text-primary-dark-blue underline"
          href={`mailto:${email}`}
        >
          {email}
        </a>

        <h2 className="my-4 font-semibold text-l">Phone Number</h2>

        <a
          className="my-2 text-primary-dark-blue underline"
          href={`tel:${phoneNumber}`}
        >
          {phoneNumber}
        </a>
      </div>
    </section>
  );
}
