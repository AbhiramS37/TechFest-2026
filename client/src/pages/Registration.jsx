import { useState } from "react";

function Registration() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        department: "",
        year: "",
        event: ""
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try {
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    year: Number(form.year)
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }

            setMessage("Registration successful! You're registered.");
            setForm({
                name: "",
                email: "",
                department: "",
                year: "",
                event: ""
            });
        } catch (error) {
            setMessage(error.message || "Unable to connect to the server.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="form-page">
            <div className="form-heading">
                <p className="eyebrow">BE PART OF THE EXPERIENCE</p>
                <h1>Student <span>Registration</span></h1>
                <p>Fill in your details to register for TechFest 2026.</p>
            </div>

            <form className="registration-form" onSubmit={handleSubmit}>
                <label>Full Name</label>
                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                />

                <label>Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                />

                <label>Department</label>
                <select name="department" value={form.department}
                    onChange={handleChange} required>
                    <option value="">Select department</option>
                    <option value="CSE">Computer Science</option>
                    <option value="ECE">Electronics</option>
                    <option value="EEE">Electrical</option>
                    <option value="ME">Mechanical</option>
                    <option value="CE">Civil</option>
                    <option value="Other">Other</option>
                </select>

                <label>Academic Year</label>
                <select name="year" value={form.year}
                    onChange={handleChange} required>
                    <option value="">Select year</option>
                    <option value="1">First Year</option>
                    <option value="2">Second Year</option>
                    <option value="3">Third Year</option>
                    <option value="4">Fourth Year</option>
                </select>

                <label>Choose Event</label>
                <select name="event" value={form.event}
                    onChange={handleChange} required>
                    <option value="">Select an event</option>
                    <option value="Coding Competition">Coding Competition</option>
                    <option value="Project Expo">Project Expo</option>
                    <option value="Tech Quiz">Tech Quiz</option>
                    <option value="Workshop">Workshop</option>
                </select>

                <button className="primary-btn submit-btn" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Registration →"}
                </button>

                {message && <p className="form-message">{message}</p>}
            </form>
        </main>
    );
}

export default Registration;