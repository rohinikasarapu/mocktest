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
.then(() => console.log("✅ Atlas Connected"))
.catch(err => console.log("❌ DB Error:", err));

// ================= MODELS =================
const User = mongoose.model("Users", {
  fullname: String,
  mobile: String,
  collegename: String,
  location: String,
  interScored: Number,
  interMax: Number,
  branches: [String],
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
console.log("TEST 1");
// ================= ROUTES =================

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
    res.status(500).send("Error fetching questions");
  }
});

// ➤ Login
app.post("/login", async (req, res) => {
    try {
        console.log("📥 Registration Data:", req.body); // Debugging kosam log

        const user = new User({
            fullname: req.body.fullname,
            mobile: req.body.mobile,
            collegename: req.body.collegename,
            location: req.body.location,
            interScored: Number(req.body.interScored), // Frontend nundi vache marks
            interMax: Number(req.body.interMax),       // Frontend nundi vache max marks
            branches: req.body.branches
        });

        const savedUser = await user.save();
        res.json({ message: "Saved", userId: savedUser._id });
    } catch (err) {
        console.error("❌ Login Error:", err);
        res.status(500).json({ error: "Failed to save user" });
    }
});

// ➤ Submit Test (🔥 FINAL REPAIRED VERSION)
app.post("/submit", async (req, res) => {
  try {
    const { studentId, answers } = req.body;

    // 1. Check if user exists and get fullname
    const user = await User.findById(studentId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 2. Fetch only the questions that match user's set (via qNo)
    const qNos = answers.map(a => a.qNo);
    const questionsFromDb = await Question.find({ qNo: { $in: qNos } });

    let attempted = 0;
    let correct = 0;

    answers.forEach((ans) => {
      // Logic check: Find question in DB by its qNo
      const q = questionsFromDb.find(dbQ => dbQ.qNo === ans.qNo);
      
      // 'marked' 0 ante unattempted, so anything else is an attempt
      if (ans.marked !== 0 && ans.marked !== undefined) {
        attempted++;
        // Type matching safety: Use Number()
        if (q && Number(ans.marked) === Number(q.answer)) {
          correct++;
        }
      }
    });

    const fixedTotal = 160; // 800 problem solved here
    const unattempted = fixedTotal - attempted;
    const wrong = attempted - correct;
    const accuracyVal = attempted > 0 ? ((correct / attempted) * 100).toFixed(2) : 0;

    // 3. Update result in database
    const savedResult = await Result.create({
      studentId: user._id,
      fullname: user.fullname, 
      score: correct,
      total: fixedTotal,
      attempted,
      correct,
      wrong,
      unattempted,
      accuracy: `${accuracyVal}%`
    });

    // 4. Also update the user's marks in User collection
    await User.findByIdAndUpdate(studentId, { marksScored: correct });

    console.log(`✅ Success: ${user.fullname} scored ${correct}/${fixedTotal}`);
    
    res.json({ 
        success: true, 
        score: correct, 
        total: fixedTotal,
        unattempted: unattempted 
    });

  } catch (err) {
    console.log("❌ SUBMIT ERROR:", err);
    res.status(500).json({ error: "Server error during submission" });
  }
});

// ================= SERVER =================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});