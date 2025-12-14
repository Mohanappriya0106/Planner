import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import crypto from "crypto";
// import User from "../models/User.js";
import PasswordReset from "../models/PasswordReset.js";
import sendEmail from "../utils/sendEmail.js";


export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check existing
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    return res.json({ message: "User registered successfully", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const message =
      "If an account exists, a reset link has been sent to your email.";

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({ message });
    }

    const token = crypto.randomBytes(32).toString("hex");

    const tokenHash = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    await PasswordReset.create({
      userId: user._id,
      tokenHash,
      expiresAt: Date.now() + 15 * 60 * 1000,
    });

    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    await sendEmail({
      to: user.email,
      subject: "Reset Password",
      html: `
        <p>Click below to reset your password</p>
        <a href="${resetLink}">Reset Password</a>
        <p>Link expires in 15 minutes</p>
      `,
    });

    return res.status(200).json({ message });
  } catch (error) {
  console.error("FORGOT PASSWORD FULL ERROR 👉", error);
  return res.status(500).json({
    message: "Server error",
    error: error.message,
  });
}

};

