const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ================= MIDDLEWARE =================
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= DB CONNECT =================
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("✅ Atlas Connected"))
.catch(err=>console.log("❌ DB Error:", err));

// ================= MODELS =================
const User = mongoose.model("Users", {
  fullname: String,
  mobile: String,
  collegename: String,
  location: String,
  marksScored: { type: Number, default: 0 },
  marksMax: { type: Number, default: 160 },
  branches: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now }
});

const Question = mongoose.model("Question", {
  qNo: Number,
  subject: String,
  question: String,
  image: String,
  options: [String],
  answer: Number,
  chapter: String
});

const Result = mongoose.model("Result", {
  studentId: mongoose.Schema.Types.ObjectId,
  fullname: String,
  score: Number,
  total: Number,
  attempted: Number,
  correct: Number,
  wrong: Number,
  unattempted: Number,
  accuracy: String,
  createdAt: { type: Date, default: Date.now }
});

// ================= ROUTES =================

// ➤ Add Question
app.post("/questions", async (req, res) => {
  try {
    const q = new Question(req.body);
    await q.save();
    res.send("✅ Question Added");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ➤ Get Questions
app.get("/questions", async (req, res) => {
  try {
    const data = await Question.find();

    // shuffle
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

// ➤ Login
app.post("/login", async (req, res) => {
  try {
    const user = new User({
      fullname: req.body.fullname,
      mobile: req.body.mobile,
      collegename: req.body.collegename,
      location: req.body.location,
      marksScored: 0,
      marksMax: 160,
      branches: req.body.branches || [],
      createdAt: new Date()
    });

    const savedUser = await user.save();

    res.json({ message: "Saved", userId: savedUser._id });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed" });
  }
});

// ➤ Submit Test (🔥 FIXED)
app.post("/submit", async (req, res) => {
  try {
    const { studentId, answers } = req.body;

    console.log("📥 SUBMIT:", studentId);

    if (!studentId || !answers) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const questions = await Question.find();

    let attempted = 0;
    let correct = 0;

    // 🔥 INDEX BASED MATCHING (FIX)
    answers.forEach((ans, index) => {

      const q = questions[index];

      if (ans.marked !== -1) attempted++;

      if (q && ans.marked === q.answer) {
        correct++;
      }

    });

    const wrong = attempted - correct;
    const unattempted = questions.length - attempted;
    const accuracy = attempted
      ? ((correct / attempted) * 100).toFixed(2)
      : 0;

    const user = await User.findById(studentId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // update user score
    await User.findByIdAndUpdate(studentId, {
      marksScored: correct
    });

    // save result
    await Result.create({
      studentId: user._id,
      fullname: user.fullname,
      score: correct,
      total: questions.length,
      attempted,
      correct,
      wrong,
      unattempted,
      accuracy: `${accuracy}%`
    });

    res.json({
      student: user.fullname,
      score: correct,
      total: questions.length,
      attempted,
      correct,
      wrong,
      unattempted,
      accuracy
    });

  } catch (err) {
    console.log("❌ ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});