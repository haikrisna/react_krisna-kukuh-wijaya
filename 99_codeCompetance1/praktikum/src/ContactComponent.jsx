import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ username: "", email: "", message: "" }); // Reset form after submission
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {" "}
            {/* Membuat form lebih kecil dengan menggunakan col-md-6 */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>
        </div>
      </form>

      {/* Display submitted data */}
      {submittedData && (
        <div className="mt-5">
          <h4>Submitted Data:</h4>
          <p>
            <strong>Username:</strong> {submittedData.username}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Message:</strong> {submittedData.message}
          </p>
        </div>
      )}
    </div>
  );
}
