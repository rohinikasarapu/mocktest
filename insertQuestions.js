


const mongoose = require("mongoose");
require("dotenv").config();

// 1. Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ DB Connected for 10 Sets"))
  .catch(err => console.log("❌ DB Error:", err));

// 2. Schema
const Question = mongoose.model("Question", {
  qNo: Number,
  subject: String,
  chapter: String,
  question: String,
  image: String,
  options: [String],
  answer: Number,
  setNumber: Number,
  availableDate: Date 
});

// --- DATA ARRAYS ---
// Place your arrays here. Even if they are huge, just keep them organized.
const set1 = [
{
    qNo: 1,
    subject: "physics",
    chapter: "units and measurements",
    question: "If 'L' denotes the inductance, 'C' denotes the capacitance and 'R' denotes the resistance, then the dimensional formula of the quantity (R / L) + (1 / RC) is",
    image: "",
    options: ["[M^0 L^0 T^-1]", "[M^0 L^0 T^1]", "[M^1 L^0 T^-1]", "[M^0 L^1 T^-1]"],
    answer: 1 // [cite: 41]
  },
  {
    qNo: 2,
    subject: "physics",
    chapter: "kinematics",
    question: "A stone is dropped from a height 'h'. At the same time, another stone is thrown up from the ground, which reaches a height 4h. The two stones cross each other after a time",
    image: "",
    options: ["sqrt(h/8g)", "sqrt(8h/g)", "sqrt(h/2g)", "sqrt(2h/g)"],
    answer: 1 // [cite: 41]
  },
  {
    qNo: 3,
    subject: "physics",
    chapter: "motion in a plane",
    question: "A projectile is thrown with an initial velocity (a i + b j) ms^-1. If its range is double the maximum height, then",
    image: "",
    options: ["a = 2b", "b = a", "b = 2a", "b = 4a"],
    answer: 3 // [cite: 41]
  },
  {
    qNo: 4,
    subject: "physics",
    chapter: "laws of motion",
    question: "A body of mass 2 kg is acted upon by two forces 2N and 5N in the same direction. The acceleration of the body is",
    image: "",
    options: ["1.5 ms^-2", "3.5 ms^-2", "7.0 ms^-2", "10 ms^-2"],
    answer: 2 // [cite: 42]
  },
  {
    qNo: 5,
    subject: "physics",
    chapter: "work, energy and power",
    question: "A force F = (5i + 3j + 2k) N is applied over a particle which displaces it from its origin to the point r = (2i - j) m. The work done on the particle in joules is",
    image: "",
    options: ["7", "10", "13", "15"],
    answer: 1 // [cite: 42]
  },
  {
    qNo: 6,
    subject: "physics",
    chapter: "systems of particles",
    question: "Three identical particles each of mass 'm' are placed at the vertices of an equilateral triangle of side 'a'. The force of attraction on any one of the particles due to the other two is",
    image: "",
    options: ["Gm^2/a^2", "sqrt(2)Gm^2/a^2", "sqrt(3)Gm^2/a^2", "3Gm^2/a^2"],
    answer: 3 // [cite: 43]
  },
  {
    qNo: 7,
    subject: "physics",
    chapter: "rotational motion",
    question: "A thin uniform rod of length 'L' and mass 'M' is swinging freely about a horizontal axis passing through its end. Its maximum angular speed is ω. Its center of mass rises to a maximum height of",
    image: "",
    options: ["L^2ω^2 / 6g", "L^2ω^2 / 3g", "L^2ω^2 / 2g", "Lω^2 / 6g"],
    answer: 1 // [cite: 43]
  },
  {
    qNo: 8,
    subject: "physics",
    chapter: "gravitation",
    question: "If the distance between the earth and the sun were half its present value, the number of days in a year would have been",
    image: "",
    options: ["64.5", "129", "182.5", "730"],
    answer: 2 // [cite: 43]
  },
  {
    qNo: 9,
    subject: "physics",
    chapter: "mechanical properties of solids",
    question: "A wire of length 'L' and cross-sectional area 'A' is made of a material of Young's modulus 'Y'. If the wire is stretched by an amount 'x', the work done is",
    image: "",
    options: ["YAx/2L", "YAx^2/2L", "YAx^2/L", "YAx/L"],
    answer: 2 // [cite: 44]
  },
  {
    qNo: 10,
    subject: "physics",
    chapter: "mechanical properties of fluids",
    question: "A small spherical ball falling through a viscous medium of negligible density has terminal velocity 'v'. Another ball of the same mass but double the radius falling through the same medium will have terminal velocity",
    image: "",
    options: ["v", "v/2", "v/4", "2v"],
    answer: 2 // [cite: 44]
  },
  {
    qNo: 11,
    subject: "physics",
    chapter: "thermal properties of matter",
    question: "A copper rod of length 2m is heated from 30°C to 130°C. If the coefficient of linear expansion of copper is 1.7 x 10^-5 /°C, the increase in its length is",
    image: "",
    options: ["3.4 mm", "1.7 mm", "5.1 mm", "0.34 mm"],
    answer: 1 // [cite: 45]
  },
  {
    qNo: 12,
    subject: "physics",
    chapter: "thermodynamics",
    question: "In a thermodynamic process, the pressure of a fixed mass of gas is changed in such a manner that the gas releases 20J of heat and 8J of work is done on the gas. If the initial internal energy of the gas was 30J, then the final internal energy will be",
    image: "",
    options: ["18 J", "2 J", "42 J", "58 J"],
    answer: 1 // [cite: 45]
  },
  {
    qNo: 13,
    subject: "physics",
    chapter: "kinetic theory of gases",
    question: "The temperature at which the root mean square velocity of hydrogen molecules equals their escape velocity from the earth's surface is (Escape velocity = 11.2 km/s)",
    image: "",
    options: ["10^4 K", "5 x 10^3 K", "10^2 K", "10^5 K"],
    answer: 1 // [cite: 45]
  },
  {
    qNo: 14,
    subject: "physics",
    chapter: "oscillations",
    question: "The period of oscillation of a simple pendulum of length 'L' suspended from the roof of a vehicle which moves without friction down an inclined plane of inclination 'α' is",
    image: "",
    options: ["2π sqrt(L/g)", "2π sqrt(L/(g cos α))", "2π sqrt(L/(g sin α))", "2π sqrt(L/(g tan α))"],
    answer: 2 // [cite: 46]
  },
  {
    qNo: 15,
    subject: "physics",
    chapter: "waves",
    question: "A string of length 2m is fixed at both ends. If the string vibrates in its fourth harmonic with a frequency of 440 Hz, the speed of the wave in the string is",
    image: "",
    options: ["440 m/s", "880 m/s", "220 m/s", "110 m/s"],
    answer: 1 // [cite: 46]
  },
  {
    qNo: 16,
    subject: "physics",
    chapter: "ray optics",
    question: "An object is placed at a distance of 20 cm from a convex mirror of focal length 20 cm. The image is formed at",
    image: "",
    options: ["10 cm", "20 cm", "Infinity", "Focus"],
    answer: 1 // [cite: 47]
  },
  {
    qNo: 17,
    subject: "physics",
    chapter: "wave optics",
    question: "In Young's double slit experiment, if the distance between the slits is halved and the distance between the slits and the screen is doubled, the fringe width becomes",
    image: "",
    options: ["Half", "Double", "Four times", "Unchanged"],
    answer: 3 // [cite: 47]
  },
  {
    qNo: 18,
    subject: "physics",
    chapter: "electrostatics",
    question: "Two point charges +9e and +e are kept 16 cm apart. At what distance from the charge +9e should a third charge 'q' be placed so that it is in equilibrium?",
    image: "",
    options: ["12 cm", "4 cm", "8 cm", "10 cm"],
    answer: 1 // [cite: 48]
  },
  {
    qNo: 19,
    subject: "physics",
    chapter: "current electricity",
    question: "The resistance of a wire is R ohms. If it is melted and stretched to 'n' times its original length, its new resistance will be",
    image: "",
    options: ["nR", "R/n", "n^2 R", "R/n^2"],
    answer: 3 // [cite: 48]
  },
  {
    qNo: 20,
    subject: "physics",
    chapter: "magnetism",
    question: "A long straight wire carries a current of 35 A. The magnitude of the magnetic field 'B' at a point 20 cm from the wire is",
    image: "",
    options: ["3.5 x 10^-5 T", "7 x 10^-5 T", "1.75 x 10^-5 T", "1.4 x 10^-5 T"],
    answer: 1 // [cite: 48]
  },
  {
    qNo: 21,
    subject: "physics",
    chapter: "moving charges and magnetism",
    question: "A proton and an alpha particle enter a uniform magnetic field with the same velocity in a direction perpendicular to the field. The ratio of the radii of their circular paths is",
    image: "",
    options: ["1:1", "1:2", "2:1", "1:4"],
    answer: 2 // [cite: 49]
  },
  {
    qNo: 22,
    subject: "physics",
    chapter: "magnetism and matter",
    question: "At a certain place, the horizontal component of the earth's magnetic field is √3 times the vertical component. The angle of dip at that place is",
    image: "",
    options: ["30°", "45°", "60°", "90°"],
    answer: 1 // [cite: 49]
  },
  {
    qNo: 23,
    subject: "physics",
    chapter: "electromagnetic induction",
    question: "The self-inductance of a solenoid of length 'L', area of cross-section 'A' and having 'N' total number of turns is given by",
    image: "",
    options: ["μ₀N²A/L", "μ₀N A/L", "μ₀N²A L", "μ₀N A L"],
    answer: 1 // [cite: 49]
  },
 {
    qNo: 24,
    subject: "physics",
    chapter: "semiconductors",
    question: "In a common emitter amplifier, the output resistance is 5000 Ω and the input resistance is 500 Ω. If the current gain is 50, the voltage gain is",
    image: "",
    options: ["100", "250", "500", "1000"],
    answer: 3
  },
  {
    qNo: 25,
    subject: "physics",
    chapter: "electromagnetic waves",
    question: "The speed of electromagnetic waves in a vacuum is given by",
    image: "",
    options: ["1 / √(μ₀ε₀)", "√(μ₀/ε₀)", "√(ε₀/μ₀)", "μ₀ε₀"],
    answer: 1 // [cite: 50]
  },
  {
    qNo: 26,
    subject: "physics",
    chapter: "dual nature of radiation and matter",
    question: "The de-Broglie wavelength of a particle of mass 'm' and kinetic energy 'E' is",
    image: "",
    options: ["h / √(2mE)", "h / (2mE)", "√(2mE) / h", "h√(2mE)"],
    answer: 1 // [cite: 51]
  },
  {
    qNo: 27,
    subject: "physics",
    chapter: "atoms",
    question: "In the Bohr model of a hydrogen atom, the radius of the nth orbit is proportional to",
    image: "",
    options: ["n²", "n", "1/n", "1/n²"],
    answer: 1 // [cite: 51]
  },
  {
    qNo: 28,
    subject: "physics",
    chapter: "nuclei",
    question: "The relation between the half-life (T₁/₂) and the decay constant (λ) of a radioactive substance is",
    image: "",
    options: ["T₁/₂ = 0.693 / λ", "T₁/₂ = λ / 0.693", "T₁/₂ = 0.693 λ", "T₁/₂ = 1 / λ"],
    answer: 1 // [cite: 51]
  },
  {
    qNo: 29,
    subject: "physics",
    chapter: "semiconductor electronics",
    question: "In a p-type semiconductor, the majority charge carriers are",
    image: "",
    options: ["Holes", "Electrons", "Protons", "Neutrons"],
    answer: 1 // [cite: 52]
  },
  {
    qNo: 30,
    subject: "physics",
    chapter: "communication systems",
    question: "The device that converts one form of energy into another is called",
    image: "",
    options: ["Transducer", "Amplifier", "Modulator", "Demodulator"],
    answer: 1 // [cite: 52]
  },
  {
    qNo: 31,
    subject: "physics",
    chapter: "electrostatic potential",
    question: "The capacitance of a parallel plate capacitor increases with",
    image: "",
    options: ["Increase in area of plates", "Decrease in area of plates", "Increase in distance between plates", "None of these"],
    answer: 1 // [cite: 53]
  },
  {
    qNo: 32,
    subject: "physics",
    chapter: "current electricity",
    question: "Kirchhoff's first law (Junction rule) is based on the conservation of",
    image: "",
    options: ["Charge", "Energy", "Momentum", "Mass"],
    answer: 1 // [cite: 53]
  },
  {
    qNo: 33,
    subject: "physics",
    chapter: "moving charges",
    question: "The magnetic field at the center of a circular current-carrying loop of radius 'R' is",
    image: "",
    options: ["μ₀I / 2R", "μ₀I / R", "μ₀I / 4R", "2μ₀I / R"],
    answer: 1 // [cite: 53]
  },
  
   {
    qNo: 34,
    subject: "physics",
    chapter: "electrostatics",
    question: "Three capacitors each of capacitance 9 pF are connected in series. What is the total capacitance of the combination?",
    image: "",
    options: ["3 pF", "9 pF", "27 pF", "1 pF"],
    answer: 1
  },
  {
    qNo: 35,
    subject: "physics",
    chapter: "current electricity",
    question: "A wire of resistance 4 Ω is stretched to twice its original length. The new resistance of the wire will be",
    image: "",
    options: ["8 Ω", "16 Ω", "2 Ω", "4 Ω"],
    answer: 2
  },
  {
    qNo: 36,
    subject: "physics",
    chapter: "moving charges and magnetism",
    question: "A charged particle moves through a magnetic field in a direction perpendicular to it. Which of the following quantities of the particle will not change?",
    image: "",
    options: ["Velocity", "Acceleration", "Momentum", "Speed"],
    answer: 4
  },
  {
    qNo: 37,
    subject: "physics",
    chapter: "alternating current",
    question: "In an AC circuit, the peak value of voltage is 423 V. Its effective (rms) voltage is approximately",
    image: "",
    options: ["300 V", "423 V", "200 V", "600 V"],
    answer: 1
  },
  {
    qNo: 38,
    subject: "physics",
    chapter: "dual nature of radiation",
    question: "The threshold frequency for a photosensitive surface is 3.3 x 10^14 Hz. If light of frequency 8.2 x 10^14 Hz is incident on this surface, the cut-off voltage for the photoelectric emission is nearly",
    image: "",
    options: ["1 V", "2 V", "3 V", "5 V"],
    answer: 2
  },
  {
    qNo:  39,
    subject: "physics",
    chapter: "atoms",
    question: "The ratio of the speed of the electron in the first excited state to the ground state of a hydrogen atom is",
    image: "",
    options: ["1:1", "1:2", "1:4", "2:1"],
    answer: 2
  },
  {
    qNo: 40,
    subject: "physics",
    chapter: "wave optics",
    question: "The Brewster's angle for an air-glass interface (refractive index of glass = 1.5) is",
    image: "",
    options: ["33.7°", "45°", "56.3°", "60°"],
    answer: 3
  },

{
    qNo: 41,
    subject: "chemistry",
    chapter: "atomic structure",
    question: "The energy of an electron in the nth Bohr orbit of hydrogen atom is",
    image: "",
    options: ["-13.6/n² eV", "-13.6/n eV", "-13.6n² eV", "-13.6n eV"],
    answer: 1 // [cite: 58]
  },
  {
    qNo: 42,
    subject: "chemistry",
    chapter: "classification of elements",
    question: "Which of the following has the highest electronegativity?",
    image: "",
    options: ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"],
    answer: 1 // [cite: 58]
  },
  {
    qNo: 43,
    subject: "chemistry",
    chapter: "chemical bonding",
    question: "The shape of CIF₃ molecule is",
    image: "",
    options: ["T-shaped", "Trigonal planar", "Pyramidal", "Square planar"],
    answer: 1 // [cite: 59]
  },
  {
    qNo: 44,
    subject: "chemistry",
    chapter: "states of matter",
    question: "The value of the universal gas constant R in SI units is",
    image: "",
    options: ["8.314 J/K·mol", "0.0821 L·atm/K·mol", "1.987 cal/K·mol", "8.314 erg/K·mol"],
    answer: 1 // [cite: 59]
  },
  {
    qNo: 45,
    subject: "chemistry",
    chapter: "stoichiometry",
    question: "Number of moles of water in 180g of water is",
    image: "",
    options: ["10", "1", "18", "100"],
    answer: 1 // [cite: 59]
  },
 {
    qNo: 46,
    subject: "chemistry",
    chapter: "polymers",
    question: "The monomer of Natural Rubber is",
    image: "",
    options: ["Isoprene", "Chloroprene", "Styrene", "Butadiene"],
    answer: 1 
  },
  {
    qNo: 47,
    subject: "chemistry",
    chapter: "solutions",
    question: "A 0.002 molar solution of NaCl and a 0.002 molar solution of MgCl2 are separated by a semi-permeable membrane. If the degree of dissociation for both is 100%, what will happen?",
    image: "",
    options: [
      "Water flows from NaCl to MgCl2 solution", 
      "Water flows from MgCl2 to NaCl solution", 
      "No flow occurs as concentrations are equal", 
      "Solute moves from MgCl2 to NaCl"
    ],
    answer: 1
  },
  {
    qNo: 48,
    subject: "chemistry",
    chapter: "electrochemistry",
    question: "The limiting molar conductivities of KCl, KNO3, and AgNO3 are 149.9, 145.0, and 133.4 S cm² mol⁻¹ respectively. The limiting molar conductivity of AgCl is",
    image: "",
    options: ["138.3 S cm² mol⁻¹", "128.5 S cm² mol⁻¹", "154.5 S cm² mol⁻¹", "141.2 S cm² mol⁻¹"],
    answer: 1
  },
  {
    qNo: 49,
    subject: "chemistry",
    chapter: "organic chemistry",
    question: "Which of the following compounds will undergo the fastest SN1 reaction?",
    image: "",
    options: [
      "2-Chloropropane", 
      "2-Chloro-2-methylpropane", 
      "1-Chlorobutane", 
      "Chlorobenzene"
    ],
    answer: 2
  },
  {
    qNo: 50,
    subject: "chemistry",
    chapter: "thermodynamics",
    question: "For a reaction to be spontaneous at all temperatures, the conditions must be",
    image: "",
    options: [
      "ΔH < 0 and ΔS > 0", 
      "ΔH > 0 and ΔS < 0", 
      "ΔH < 0 and ΔS < 0", 
      "ΔH > 0 and ΔS > 0"
    ],
    answer: 1
  },
  {
    qNo: 51,
    subject: "chemistry",
    chapter: "Electrochemistry",
    question: "A current of 9.65 amperes is passed through an aqueous solution of CuSO4 for 100 minutes. If the current efficiency is 80%, the mass of copper deposited at the cathode is (Atomic mass of Cu = 63.5 u)",
    image: "",
    options: ["11.43 g", "15.24 g", "19.05 g", "22.86 g"],
    answer: 2
  },
  {
    qNo: 52,
    subject: "chemistry",
    chapter: "chemical equilibrium",
    question: "The relation between Kp and Kc for the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g) is",
    image: "",
    options: ["Kp = Kc(RT)⁻²", "Kp = Kc(RT)²", "Kp = Kc(RT)", "Kp = Kc"],
    answer: 1 
  },
  {
    qNo: 53,
    subject: "chemistry",
    chapter: "Organic Chemistry (Amines)",
    question: "The correct increasing order of basic strength for the following compounds in aqueous solution is: (I) NH3, (II) CH3NH2, (III) (CH3)2NH, (IV) (CH3)3N",
    image: "",
    options: ["I < IV < II < III", "IV < I < II < III", "I < II < III < IV", "I < IV < III < II"],
    answer: 1
  },
  {
    qNo: 54,
    subject: "chemistry",
    chapter: "Chemical Equilibrium",
    question: "For the reaction PCl5(g) ⇌ PCl3(g) + Cl2(g), the degree of dissociation is 'α' at a total pressure 'P'. The partial pressure of PCl3 is",
    image: "",
    options: ["[α / (1 + α)] P", "[α / (1 - α)] P", "[2α / (1 + α)] P", "[α² / (1 - α²)] P"],
    answer: 1
  },
  {
    qNo: 55,
    subject: "chemistry",
    chapter: "Atomic Structure",
    question: "The wavelength of the radiation emitted when an electron in a hydrogen atom falls from infinity to the stationary state 1 would be (R = Rydberg constant)",
    image: "",
    options: ["1/R", "R", "R/2", "4/R"],
    answer: 1
  },
  {
    qNo: 56,
    subject: "chemistry",
    chapter: "Thermodynamics",
    question: "For a reaction to be spontaneous at all temperatures, which of the following is correct?",
    image: "",
    options: ["ΔH > 0, ΔS > 0", "ΔH < 0, ΔS < 0", "ΔH < 0, ΔS > 0", "ΔH > 0, ΔS < 0"],
    answer: 3
  },
  {
    qNo: 57,
    subject: "chemistry",
    chapter: "Solutions",
    question: "An aqueous solution of a non-volatile solute freezes at -0.186°C. If Kf = 1.86 K kg mol⁻¹ and Kb = 0.512 K kg mol⁻¹, the elevation in boiling point of the same solution is",
    image: "",
    options: ["0.186°C", "0.0512°C", "0.512°C", "0.0186°C"],
    answer: 2
  },
  {
    qNo: 58,
    subject: "chemistry",
    chapter: "Coordination Compounds",
    question: "The spin-only magnetic moment of [Fe(H2O)6]²⁺ and [Fe(CN)6]⁴⁻ are respectively (in BM)",
    image: "",
    options: ["4.9 and 0", "5.92 and 0", "4.9 and 1.73", "0 and 4.9"],
    answer: 1
  },
  {
    qNo: 59,
    subject: "chemistry",
    chapter: "p-Block Elements",
    question: "The correct order of the thermal stability of hydrogen halides (HX) is",
    image: "",
    options: ["HI > HBr > HCl > HF", "HF > HCl > HBr > HI", "HCl > HF > HBr > HI", "HI > HF > HCl > HBr"],
    answer: 2
  },
  {
    qNo: 60,
    subject: "chemistry",
    chapter: "Aldehydes and Ketones",
    question: "Which of the following will undergo a Cannizzaro reaction but NOT an Aldol condensation?",
    image: "",
    options: ["CH3CHO", "CH3COCH3", "HCHO", "CH3CH2CHO"],
    answer: 3
  },
  {
    qNo: 61,
    subject: "chemistry",
    chapter: "Stoichiometry",
    question: "The number of water molecules present in a drop of water (volume = 0.0018 mL) at room temperature is (density = 1 g/mL)",
    image: "",
    options: ["6.023 x 10¹⁹", "1.08 x 10¹⁸", "4.84 x 10¹⁷", "6.023 x 10²³"],
    answer: 1
  },
  {
    qNo: 62,
    subject: "chemistry",
    chapter: "Solid State",
    question: "An element crystallizes in a face-centered cubic (fcc) lattice with edge length 'a'. The distance between the centers of two nearest neighbors is",
    image: "",
    options: ["a", "a/√2", "√2a", "√3a/2"],
    answer: 2
  },
  {
    qNo: 63,
    subject: "chemistry",
    chapter: "Biomolecules",
    question: "Which of the following does not reduce Fehling's solution?",
    image: "",
    options: ["Glucose", "Fructose", "Sucrose", "Lactose"],
    answer: 3
  },
  {
    qNo: 64,
    subject: "chemistry",
    chapter: "Surface Chemistry",
    question: "For a Freundlich adsorption isotherm, a plot of log(x/m) versus log P gives a straight line. The slope of this line is",
    image: "",
    options: ["n", "log k", "1/n", "k"],
    answer: 3
  },
  {
    qNo: 65,
    subject: "chemistry",
    chapter: "Hydrocarbons",
    question: "The major product formed when 3,3-dimethyl-1-butene reacts with HCl is",
    image: "",
    options: ["2-chloro-3,3-dimethylbutane", "2-chloro-2,3-dimethylbutane", "1-chloro-3,3-dimethylbutane", "2,2-dichloro-3,3-dimethylbutane"],
    answer: 2
  },
  {
    qNo: 66,
    subject: "chemistry",
    chapter: "Polymers",
    question: "Which of the following is a step-growth polymer?",
    image: "",
    options: ["Polyethylene", "PVC", "Nylon-6,6", "Polystyrene"],
    answer: 3
  },
  {
    qNo: 67,
    subject: "chemistry",
    chapter: "Classification of Elements",
    question: "The correct order of electron gain enthalpy (with negative sign) for the elements F, Cl, Br, and I is",
    image: "",
    options: ["F > Cl > Br > I", "Cl > F > Br > I", "I > Br > Cl > F", "Br > I > Cl > F"],
    answer: 2
  },
  {
    qNo: 68,
    subject: "chemistry",
    chapter: "Chemical Bonding",
    question: "According to Molecular Orbital Theory, which of the following is diamagnetic?",
    image: "",
    options: ["O2", "B2", "C2", "N2+"],
    answer: 3
  },
  {
    qNo: 69,
    subject: "chemistry",
    chapter: "Environmental Chemistry",
    question: "The gas responsible for 'Blue Baby Syndrome' is",
    image: "",
    options: ["CO", "Nitrate", "Fluoride", "Phosphate"],
    answer: 2
  },
  {
    qNo: 70,
    subject: "chemistry",
    chapter: "Organic Chemistry",
    question: "In the Reimer-Tiemann reaction, the electrophile involved is",
    image: "",
    options: ["Dichlorocarbene (:CCl2)", "Trichloromethyl anion (CCl3⁻)", "Formyl cation (CHO⁺)", "Dichloromethyl cation (CHCl2⁺)"],
    answer: 1
  },
  {
    qNo: 71,
    subject: "chemistry",
    chapter: "chemical kinetics",
    question: "If the rate constant for a first-order reaction is k, the time required for the completion of 99.9% of the reaction is given by",
    image: "",
    options: ["2.303 / k", "4.606 / k", "6.909 / k", "0.693 / k"],
    answer: 3
  },
  {
    qNo: 72,
    subject: "chemistry",
    chapter: "coordination compounds",
    question: "Which of the following is an inner orbital complex and is also diamagnetic?",
    image: "",
    options: ["[Ni(NH3)6]2+", "[Cr(NH3)6]3+", "[Co(NH3)6]3+", "[FeF6]3-"],
    answer: 3
  },
  {
    qNo: 73,
    subject: "chemistry",
    chapter: "equilibrium",
    question: "The solubility product (Ksp) of Ag2CrO4 is 1.1 x 10⁻¹². The solubility of Ag2CrO4 in a 0.1 M AgNO3 solution is",
    image: "",
    options: ["1.1 x 10⁻¹¹ M", "1.1 x 10⁻¹⁰ M", "5.5 x 10⁻¹¹ M", "1.1 x 10⁻⁸ M"],
    answer: 2
  },
  {
    qNo: 74 ,
    subject: "chemistry",
    chapter: "p-block elements",
    question: "The correct order of acidity for the following oxoacids is",
    image: "",
    options: [
      "HClO < HClO2 < HClO3 < HClO4", 
      "HClO4 < HClO3 < HClO2 < HClO", 
      "HClO3 < HClO4 < HClO2 < HClO", 
      "HClO4 < HClO2 < HClO3 < HClO"
    ],
    answer: 1
  },
  {
    qNo:  75,
    subject: "chemistry",
    chapter: "atomic structure",
    question: "If the radius of the second Bohr orbit of the He+ ion is r, then the radius of the third Bohr orbit of the Li2+ ion is",
    image: "",
    options: ["3r/2", "9r/4", "r/3", "2r/3"],
    answer: 1
  },
  {
    qNo: 76,
    subject: "chemistry",
    chapter: "surface chemistry",
    question: "The coagulation values in millimoles per litre of the electrolytes used for the coagulation of As2S3 are given below: I. NaCl = 52, II. BaCl2 = 0.69, III. MgSO4 = 0.22. The correct order of their coagulating power is",
    image: "",
    options: ["I > II > III", "III > II > I", "II > I > III", "III > I > II"],
    answer: 2
  },
  {
    qNo:  77,
    subject: "chemistry",
    chapter: "chemical kinetics",
    question: "For a reaction A + B → Products, doubling the concentration of A doubles the rate, and doubling the concentration of B quadruples the rate. The overall order of the reaction is",
    image: "",
    options: ["2", "3", "4", "1"],
    answer: 2
  },
  {
    qNo: 78,
    subject: "chemistry",
    chapter: "coordination compounds",
    question: "The secondary valence of Co in [Co(en)2Cl2]Cl is",
    image: "",
    options: ["4", "2", "6", "3"],
    answer: 3
  },
  {
    qNo: 79,
    subject: "chemistry",
    chapter: "organic chemistry",
    question: "Which of the following will not undergo Aldol condensation?",
    image: "",
    options: ["Acetaldehyde", "Propanaldehyde", "Benzaldehyde", "Acetone"],
    answer: 3
  },
  {
    qNo: 80,
    subject: "chemistry",
    chapter: "thermodynamics",
    question: "For an isothermal process, the change in internal energy (ΔU) is",
    image: "",
    options: ["Zero", "Positive", "Negative", "Equal to work done"],
    answer: 1 
  },
{
  qNo: 81,
  subject: "maths",
  chapter: "complex numbers",
  question: "If sin x + i cos 2x and cos x - i sin 2x are conjugate to each other then x =",
  image: "",
  options: ["nπ, n ∈ I", "(n+1)π/2, n ∈ I", "φ", "(2n+1)π, n ∈ I"],
  answer: 3
},

{
    qNo: 82,
    subject: "maths",
    chapter: "functions",
    question: "The range of the function f(x) defined as: f(x) = 4x-1 if x>3; x^2-2 if -2<=x<=3; 3x+4 if x<-2 is",
    image: "",
    options: ["(-∞, ∞)", "R - (-3, 3)", "R - (7, 11]", "(7, 11]"],
    answer: 1
  },
  {
    qNo: 83,
    subject: "maths",
    chapter: "functions",
    question: "The domain of the function y = f(x), where x and y are related by 2^x + 2^y = 2 is",
    image: "",
    options: ["(-∞, ∞)", "(-∞, 1)", "(0, ∞)", "(1, 5)"],
    answer: 2
  },
  {
    qNo: 84,
    subject: "maths",
    chapter: "complex numbers",
    question: "The multiplicative inverse of a complex number z is",
    image: "",
    options: ["z / |z|^2", "z_bar / |z|", "z_bar / |z|^2", "1 / z_bar"],
    answer: 3
  },
  {
    qNo: 85,
    subject: "maths",
    chapter: "complex numbers",
    question: "If 1, ω, ω^2 are the cube roots of unity, then the roots of 8z^3 - 12z^2 + 6z - 28 = 0 are",
    image: "",
    options: [
      "2, (1+3ω)/2, (1+3ω^2)/2",
      "2, (1-3ω)/2, (1-3ω^2)/2",
      "2, 1+3ω, 1+3ω^2",
      "2, (1+3ω)/2, (1+3ω^2)/2" 
    ],
    answer: 4
  },
  {
    qNo: 86,
    subject: "maths",
    chapter: "complex numbers",
    question: "If z1 = 2+3i, z2 = 4-5i and z3 is the midpoint of z1 and z2, and 5z1 + xz2 + yz3 = 0 for x,y ∈ R, then x+y is",
    image: "",
    options: ["1", "5", "10", "-1"],
    answer: 4
  },
  {
    qNo: 87,
    subject: "maths",
    chapter: "theory of equations",
    question: "If the roots of 6x^3 - 11x^2 + 6x - 1 = 0 are in H.P., then the roots of x^3 - 6x^2 + 11x - 6 = 0 are in",
    image: "",
    options: ["G.P.", "H.P.", "A.G.P.", "A.P."],
    answer: 4
  },
{
    qNo: 88,
    subject: "maths",
    chapter: "Set Theory",
    question: "The number of elements in the set S = {x ∈ ℤ : x² - 7x + 6 ≤ 0 and x² - 3x > 0} is",
    options: ["0", "2", "3", "4"],
    answer: 3
  },
  {
    qNo: 89,
    subject: "maths",
    chapter: "theory of equations",
    question: "If 3 + i and 2 - √3 are the roots of the equation f(x) = a0 + a1x + a2x² + ... + anxⁿ, where a0, a1, ..., an ∈ ℤ, then the least value of n and the value of a0 are respectively",
    options: ["n=4, a0=10", "n=4, a0=20", "n=2, a0=10", "n=2, a0=20"],
    answer: 1
  },
  {
    qNo: 90,
    subject: "maths",
    chapter: "theory of equations",
    question: "If the roots of x³ - 7x² + 14x - 8 = 0 are in geometric progression, then the common ratio is",
    options: ["2", "3", "4", "1"],
    answer: 1
  },
  {
    qNo: 91,
    subject: "maths",
    chapter: "permutations and combinations",

    question: "The number of ways of arranging 7 persons around a circle so that two particular persons are always together is",
    options: ["120", "240", "720", "5040"],
    answer: 2
  },
  {
    qNo: 92,
    subject: "maths",
    chapter: "binomial theorem",
    question: "The sum of the coefficients in the expansion of (1 + x - 3x²)²¹⁴³ is",
    options: ["1", "0", "-1", "2²¹⁴³"],
    answer: 3
  },
  {
    qNo: 93,
    subject: "maths",
    chapter: "binomial theorem",
    question: "If (1+x)ⁿ = C₀ + C₁x + C₂x² + ... + Cₙxⁿ, then C₀ + C₂ + C₄ + ... is equal to",
    options: ["2ⁿ", "2ⁿ⁻¹", "2ⁿ⁺¹", "n²"],
    answer: 2
  },
  {
    qNo: 94,
    subject: "maths",
    chapter: "partial fractions",
    question: "The partial fractions of (x² + 1) / ((x - 1)(x - 2)(x - 3)) are of the form",
    options: ["A/(x-1) + B/(x-2) + C/(x-3)", "A/(x-1) + (Bx+C)/(x-2)(x-3)", "(Ax+B)/(x-1) + C/(x-2)", "None of these"],
    answer: 1
  },
  {
    qNo: 95,
    subject: "maths",
    chapter: "trigonometry",
    question: "The value of sin(10°) sin(30°) sin(50°) sin(70°) is",
    options: ["1/8", "1/16", "3/16", "1/4"],
    answer: 2
  },
  {
    qNo: 96,
    subject: "maths",
    chapter: "trigonometry",
    question: "If cos A + cos B = 1/2 and sin A + sin B = 1/4, then tan((A+B)/2) is",
    options: ["1/2", "1/4", "2", "4"],
    answer: 1
  },
  {
    qNo: 97,
    subject: "maths",
    chapter: "trigonometry",
    question: "The general solution of the equation sin x + cos x = 1 is",
    options: ["2nπ", "2nπ + π/2", "nπ + (-1)ⁿ π/4", "2nπ or 2nπ + π/2"],
    answer: 4
  },
  {
    qNo: 98,
    subject: "maths",
    chapter: "hyperbolic functions",
    question: "The value of sinh⁻¹(3) is",
    options: ["log(3 + √10)", "log(3 - √10)", "log(√10 - 3)", "log(3 + √8)"],
    answer: 1
  },
  {
    qNo: 99,
    subject: "maths",
    chapter: "matrices",
    question:"",
    image: "q99.png",
    options: [
      "q99(1).png",
      "q99(2).png",
      "q99(3).png",
      "q99(4).png"
    ],
    answer: 4
  },
  {
    qNo: 100,
    subject: "maths",
    chapter: "matrices",
    question: "",
    image: "q100.png",
    options: ["1", "2", "3", "4"],
    answer: 3
  },
  {
    qNo: 101,
    subject: "maths",
    chapter: "complex numbers",
    question: "Arg((4+2i)/(1-2i) + (3+4i)/(2+3i)) lies in the interval",
    image: "",
    options: ["(π/4, π/2)", "(0, π/4)", "(π/2, 3π/4)", "(3π/4, π)"],
    answer: 1
  },
  {
    qNo: 102,
    subject: "maths",
    chapter: "calculus",
    question: "If f(x) is a continuous function such that ∫₀ˣ f(t) dt = eˣ - 1 - ∫₀ˣ t f(t) dt, then f(x) is equal to",
    image: "",
    options: ["eˣ/(x+1)", "eˣ/(x+2)", "eˣ(x+1)", "xeˣ"],
    answer: 1
  },
  {
    qNo: 103,
    subject: "maths",
    chapter: "matrices",
    question: "If A is a 3x3 non-singular matrix such that A'A = AA' and B = A⁻¹A', then BB' is equal to",
    image: "",
    options: ["I", "A", "B", "A'"],
    answer: 1
  },
  {
    qNo: 104,
    subject: "maths",
    chapter: "probability",
    question: "A bag contains 4 red and 6 black balls. A ball is drawn at random, its color is noted and is returned to the bag but with 2 additional balls of the same color. If a second ball is drawn, the probability that it is red is",
    image: "",
    options: ["2/5", "3/5", "4/7", "1/2"],
    answer: 1
  },
  {
    qNo: 105,
    subject: "maths",
    chapter: "coordinate geometry",
    question: "The locus of the point of intersection of perpendicular tangents to the parabola y² = 4ax is",
    image: "",
    options: ["x = a", "x = -a", "x² + y² = a²", "y = a"],
    answer: 2
  },
  {
    qNo: 106,
    subject: "maths",
    chapter: "vectors",
    question: "If a, b, c are three non-coplanar vectors such that [a+b b+c c+a] = λ [a b c], then λ is",
    image: "",
    options: ["1", "2", "3", "0"],
    answer: 2
  },
  {
    qNo: 107,
    subject: "maths",
    chapter: "trigonometry",
    question: "The number of solutions of the equation sin(πx/2) = x² - 2x + 2 is",
    image: "",
    options: ["0", "1", "2", "infinite"],
    answer: 2
  },
  {
    qNo: 108,
    subject: "maths",
    chapter: "integration",
    question: "The value of ∫₀ᵝ (√x / (√x + √(a-x))) dx is",
    image: "",
    options: ["a/2", "a/4", "a", "2a"],
    answer: 1
  },
  {
    qNo: 109,
    subject: "maths",
    chapter: "complex numbers",
    question: "If |z - 4/z| = 2, then the maximum value of |z| is",
    image: "",
    options: ["√5 + 1", "√5 - 1", "√3 + 1", "2"],
    answer: 1
  },
  {
    qNo: 110,
    subject: "maths",
    chapter: "differential equations",
    question: "The solution of the differential equation (x + 2y³) (dy/dx) = y is",
    image: "",
    options: ["x = y³ + cy", "x = y² + cy", "y = x³ + cx", "x = y⁴ + cy"],
    answer: 1
  },
  {
    qNo: 111,
    subject: "maths",
    chapter: "limits",
    question: "The limit as x → 0 of (1/x²) ∫₀ˣ (t dt / (t⁴ + 1)) is",
    image: "",
    options: ["0", "1/2", "1", "does not exist"],
    answer: 2
  },
  {
    qNo: 112,
    subject: "maths",
    chapter: "circles",
    question: "The length of the common chord of the circles x² + y² + 2x + 3y + 1 = 0 and x² + y² + 4x + 3y + 2 = 0 is",
    image: "",
    options: ["3/2", "√2", "1", "0"],
    answer: 4
  },
  {
    qNo: 113,
    subject: "maths",
    chapter: "sequences and series",
    question: "If the pth, qth and rth terms of an A.P. are a, b, c respectively, then a(q-r) + b(r-p) + c(p-q) is",
    image: "",
    options: ["1", "abc", "0", "pqr"],
    answer: 3
  },
  {
    qNo: 114,
    subject: "maths",
    chapter: "binomial theorem",
    question: "The coefficient of x⁴ in the expansion of (1 + x + x² + x³)¹¹ is",
    image: "",
    options: ["990", "505", "610", "495"],
    answer: 1
  },
  {
    qNo: 115,
    subject: "maths",
    chapter: "permutations",
    question: "The number of ways in which 5 boys and 5 girls can be seated in a row so that no two girls are together is",
    image: "",
    options: ["5! x 6!", "5! x 5!", "10!", "2 x 5!"],
    answer: 1
  },
  {
    qNo: 116,
    subject: "maths",
    chapter: "hyperbola",
    question: "If e and e' are the eccentricities of a hyperbola and its conjugate, then 1/e² + 1/(e')² is",
    image: "",
    options: ["0", "1", "2", "4"],
    answer: 2
  },
  {
    qNo: 117,
    subject: "maths",
    chapter: "3D geometry",
    question: "The distance of the point (1, -2, 3) from the plane x - y + z = 5 measured parallel to the line x/2 = y/3 = z/-6 is",
    image: "",
    options: ["1", "1/7", "7", "0"],
    answer: 3
  },
  {
    qNo: 118,
    subject: "maths",
    chapter: "functions",
    question: "If f: R → R is defined by f(x) = x³ + 5, then f⁻¹(x) is",
    image: "",
    options: ["(x-5)^(1/3)", "(x+5)^(1/3)", "x-5", "5-x"],
    answer: 1
  },
  {
    qNo: 119,
    subject: "maths",
    chapter: "differentiation",
    question: "If y = tan⁻¹( (√1+x² - 1) / x ), then dy/dx is",
    image: "",
    options: ["1/(1+x²)", "1/(2(1+x²))", "2/(1+x²)", "1/x"],
    answer: 2
  },
  {
    qNo: 120,
    subject: "maths",
    chapter: "area under curves",
    question: "The area bounded by the curves y = √x and y = x is",
    image: "",
    options: ["1/3", "1/6", "1/2", "1"],
    answer: 2
  },
  {
    qNo: 121,
    subject: "maths",
    chapter: "theory of equations",
    question: "If α, β, γ are the roots of x³ - px² + qx - r = 0, then the value of Σ α²β is",
    image: "",
    options: ["pq - 3r", "pq + 3r", "p² - 2q", "q² - 2pr"],
    answer: 1
  },
  {
    qNo: 122,
    subject: "maths",
    chapter: "Three Dimensional Geometry",
    question: "If the line joining the points A(2, 3, -1) and B(3, 5, -3) is perpendicular to the line joining C(1, 2, 3) and D(x, y, z), then a possible set of values for (x, y, z) is",
    options: ["(2, 1, 4)", "(1, 0, 4)", "(3, 4, 5)", "(0, 1, 2)"],
    answer: 2
  },
  {
    qNo: 123,
    subject: "maths",
    chapter: "Continuity and Differentiability",
    question: "The derivative of f(x) = |x-1| + |x-3| at x = 2 is",
    options: ["0", "1", "2", "-1"],
    answer: 1
  },
  {
    qNo: 124,
    subject: "maths",
    chapter: "Inverse Trigonometric Functions",
    question: "If y = tan⁻¹[(√1+x² - 1)/x], then dy/dx at x = 0 is",
    options: ["1/2", "1", "0", "1/4"],
    answer: 1
  },
  {
    qNo: 125,
    subject: "maths",
    chapter: "Application of Derivatives",
    question: "The maximum value of f(x) = x / (4 + x + x²) on the interval [-1, 1] is",
    options: ["1/6", "-1/4", "1/5", "1/4"],
    answer: 3
  },
  {
    qNo: 126,
    subject: "maths",
    chapter: "Application of Derivatives",
    question: "The rate of change of the volume of a sphere with respect to its surface area when the radius is 2 cm is",
    options: ["1 cm", "2 cm", "1/2 cm", "4 cm"],
    answer: 1
  },
  {
    qNo: 127,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "The value of ∫ (dx / (x(x⁴ + 1))) is",
    options: ["(1/4) log|x⁴/(x⁴+1)| + C", "log|x⁴/(x⁴+1)| + C", "(1/4) log|(x⁴+1)/x⁴| + C", "4 log|x⁴/(x⁴+1)| + C"],
    answer: 1
  },
  {
    qNo: 128,
    subject: "maths",
    chapter: "Definite Integration",
    question: "The value of the definite integral ∫₀ᵝ (sin x / (sin x + cos x)) dx is",
    options: ["π/2", "π/4", "π", "0"],
    answer: 2
  },
  {
    qNo: 129,
    subject: "maths",
    chapter: "Application of Integration",
    question: "The area bounded by the curve y = x² and the line y = 4 is",
    options: ["32/3", "16/3", "8/3", "4/3"],
    answer: 1
  },
  {
    qNo: 130,
    subject: "maths",
    chapter: "Differential Equations",
    question: "The order and degree of the differential equation [1 + (dy/dx)²]^(3/2) = d²y/dx² are respectively",
    options: ["2, 2", "2, 3", "1, 2", "1, 3"],
    answer: 1
  },
  {
    qNo: 131,
    subject: "maths",
    chapter: "Differential Equations",
    question: "The solution of dy/dx + y/x = x² is",
    options: ["xy = x⁴/4 + C", "y = x³/4 + C", "xy = x³/3 + C", "y = x²/2 + C"],
    answer: 1
  },
  {
    qNo: 132,
    subject: "maths",
    chapter: "Vector Algebra",
    question: "If a and b are two units vectors and θ is the angle between them, then |a - b| is",
    options: ["2 sin(θ/2)", "2 cos(θ/2)", "sin(θ/2)", "cos(θ/2)"],
    answer: 1
  },
  {
    qNo: 133,
    subject: "maths",
    chapter: "Vector Algebra",
    question: "The projection of the vector i + j + k on the vector i + j is",
    options: ["√2", "2", "√3", "1"],
    answer: 1
  },
  {
    qNo: 134,
    subject: "maths",
    chapter: "Three Dimensional Geometry",
    question: "If the points (1, 1, 1), (1, -1, 1) and (-7, -3, -5) are the vertices of a triangle, then the triangle is",
    options: ["Equilateral", "Isosceles", "Right-angled", "Scalene"],
    answer: 3
  },
  {
    qNo: 135,
    subject: "maths",
    chapter: "Three Dimensional Geometry",
    question: "The distance between the parallel planes 2x - y + 2z + 3 = 0 and 4x - 2y + 4z + 5 = 0 is",
    options: ["1/6", "1/3", "1/2", "1"],
    answer: 1
  },
  {
    qNo: 136,
    subject: "maths",
    chapter: "Probability",
    question: "The probability of getting a sum of 10 in a single throw of two dice is",
    options: ["1/12", "1/9", "1/6", "1/36"],
    answer: 1
  },
  {
    qNo: 137,
    subject: "maths",
    chapter: "Probability",
    question: "If A and B are independent events such that P(A) = 0.3 and P(B) = 0.4, then P(A ∩ B) is",
    options: ["0.12", "0.7", "0.1", "0.5"],
    answer: 1
  },
  {
    qNo: 138,
    subject: "maths",
    chapter: "Statistics",
    question: "The variance of the first n natural numbers is",
    options: ["(n²-1)/12", "(n²-1)/6", "n²/12", "n²/6"],
    answer: 1
  },
  {
    qNo: 139,
    subject: "maths",
    chapter: "Conic Sections",
    question: "The eccentricity of the ellipse 9x² + 25y² = 225 is",
    options: ["4/5", "3/5", "2/5", "1/5"],
    answer: 1
  },
  {
    qNo: 140,
    subject: "maths",
    chapter: "Circles",
    question: "The equation of the tangent to the circle x² + y² = 25 at the point (3, 4) is",
    options: ["3x + 4y = 25", "4x + 3y = 25", "3x - 4y = 25", "4x - 3y = 25"],
    answer: 1
  },
  {
    qNo: 141,
    subject: "maths",
    chapter: "Inverse Trigonometric Functions",
    question: "The value of sin⁻¹(sin 10) is",
    options: ["3π - 10", "10 - 3π", "10", "π - 10"],
    answer: 1
  },
  {
    qNo: 142,
    subject: "maths",
    chapter: "Limits and Derivatives",
    question: "The value of lim (x→0) (tan x - sin x) / x³ is",
    options: ["1/2", "1", "0", "1/4"],
    answer: 1
  },
  {
    qNo: 143,
    subject: "maths",
    chapter: "Integration",
    question: "The value of the definite integral ∫₀ᵝ (log(sin x) / (log(sin x) + log(cos x))) dx is",
    image: "",
    options: ["π/2", "π/4", "π/8", "0"],
    answer: 2
  },
  {
    qNo: 144,
    subject: "maths",
    chapter: "Differential Equations",
    question: "The solution of the differential equation x(dy/dx) + y = x² log x is",
    image: "",
    options: ["xy = (x³/9)(3 log x - 1) + C", "xy = (x²/4)(2 log x - 1) + C", "y = x log x - x + C", "xy = x³ log x + C"],
    answer: 1
  },
  {
    qNo: 145,
    subject: "maths",
    chapter: "Matrices",
    question: "If A is a 3x3 matrix such that det(A) = 4, then the value of det(adj(adj(A))) is",
    image: "",
    options: ["4", "16", "64", "256"],
    answer: 4
  },
  {
    qNo: 146,
    subject: "maths",
    chapter: "Coordinate Geometry",
    question: "The angle between the tangents drawn from the point (1, 4) to the parabola y² = 4x is",
    image: "",
    options: ["π/6", "π/4", "π/3", "π/2"],
    answer: 3
  },
  {
    qNo: 147,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "If |z - 3 + 2i| = 4, the difference between the maximum and minimum values of |z| is",
    image: "",
    options: ["√13", "2√13", "8", "4"],
    answer: 2
  },
  {
    qNo: 148,
    subject: "maths",
    chapter: "Probability",
    question: "A pair of fair dice is thrown independently three times. The probability of getting a total of 9 exactly twice is",
    image: "",
    options: ["1/81", "8/243", "4/81", "2/243"],
    answer: 2
  },
  {
    qNo: 149,
    subject: "maths",
    chapter: "Calculus",
    question: "If f(x) = x³ + e^(x/2) and g(x) = f⁻¹(x), then the value of g'(1) is",
    image: "",
    options: ["1", "2", "1/2", "0"],
    answer: 2
  },
  {
    qNo: 150,
    subject: "maths",
    chapter: "Vectors",
    question: "If the volume of the parallelepiped formed by vectors a, b, and c is 5, then the volume of the parallelepiped formed by (a+b), (b+c), and (c+a) is",
    image: "",
    options: ["5", "10", "15", "20"],
    answer: 2
  },
  {
    qNo: 151,
    subject: "maths",
    chapter: "Trigonometry",
    question: "The number of real solutions of the equation sin(eˣ) = 5ˣ + 5⁻ˣ is",
    image: "",
    options: ["0", "1", "2", "Infinite"],
    answer: 1
  },
  {
    qNo: 152,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "The number of 4-digit numbers that can be formed using digits {0, 1, 2, 3, 4, 5} such that the numbers are divisible by 3 (repetition not allowed) is",
    image: "",
    options: ["96", "72", "120", "48"],
    answer: 1
  },
  {
    qNo: 153,
    subject: "maths",
    chapter: "Circles",
    question: "The circle x² + y² - 4x - 4y + 4 = 0 is inscribed in a triangle which has two sides along the coordinate axes. The locus of the circumcentre of the triangle is",
    image: "",
    options: ["x + y - xy + √(x² + y²) = 0", "x + y + xy = 0", "x² + y² = 4", "x + y - 2 = 0"],
    answer: 1
  },
  {
    qNo: 154,
    subject: "maths",
    chapter: "Sequence and Series",
    question: "If a, b, c are in G.P. and log(a) - log(2b), log(2b) - log(3c), and log(3c) - log(a) are in A.P., then the common ratio of the G.P. is",
    image: "",
    options: ["1/3", "2/3", "3/2", "1/2"],
    answer: 2
  },
  {
    qNo: 155,
    subject: "maths",
    chapter: "Limits",
    question: "The value of lim (x→0) [(1 - cos 2x)(3 + cos x) / (x tan 4x)] is",
    image: "",
    options: ["1/2", "1", "2", "4"],
    answer: 3
  },
  {
    qNo: 156,
    subject: "maths",
    chapter: "Binomial Theorem",
    question: "The sum of the series 1 + (1/3)C₁ + (1/5)C₂ + ... + (1/(2n+1))Cₙ is",
    image: "",
    options: ["2ⁿ / (n+1)", "2²ⁿ / (2n+1)", "2ⁿ⁺¹ / (n+1)", "(2²ⁿ⁺¹ - 1) / (2n+1)"],
    answer: 4
  },
  {
    qNo: 157,
    subject: "maths",
    chapter: "Ellipses",
    question: "An ellipse has OB as semi-minor axis, F and F' are its foci and angle FBF' is a right angle. Then the eccentricity of the ellipse is",
    image: "",
    options: ["1/2", "1/√2", "1/4", "1/3"],
    answer: 2
  },
  {
    qNo: 158,
    subject: "maths",
    chapter: "Three Dimensional Geometry",
    question: "The image of the point (1, 6, 3) in the line (x/1) = (y-1)/2 = (z-2)/3 is",
    image: "",
    options: ["(1, 0, 7)", "(2, 1, 4)", "(0, -1, 5)", "(-1, -6, -3)"],
    answer: 1
  },
  {
    qNo: 159,
    subject: "maths",
    chapter: "Functions",
    question: "If f(x) = log((1+x)/(1-x)), then f(x) + f(y) is equal to",
    image: "",
    options: ["f((x+y)/(1+xy))", "f(x+y)", "f(xy)", "f((x-y)/(1-xy))"],
    answer: 1
  },
  {
    qNo: 160,
    subject: "maths",
    chapter: "Statistics",
    question: "The mean and variance of 7 observations are 8 and 16 respectively. If five of the observations are 2, 4, 10, 12, 14, then the remaining two observations are",
    image: "",
    options: ["6, 8", "5, 9", "7, 7", "4, 10"],
    answer: 1
  }
];
const set2 = [
  {
    qNo: 1,
    subject: "physics",
    chapter: "Units and Measurements",
    question: "If 'L' denotes the inductance, 'C' denotes the capacitance and 'R' denotes the resistance, then the dimensional formula of the quantity (R / L) + (1 / RC) is",
    image: "",
    options: ["[M^0 L^0 T^-1]", "[M^0 L^0 T^1]", "[M^1 L^0 T^-1]", "[M^0 L^1 T^-1]"],
    answer: 1 // 
  },
  {
    qNo: 2,
    subject: "physics",
    chapter: "Motion in a Straight Line",
    question: "The displacement x of a particle varies with time t as x = ae^-αt + be^βt, where a, b, α and β are positive constants. The velocity of the particle will",
    image: "",
    options: ["be independent of β", "drop to zero when α = β", "go on decreasing with time", "go on increasing with time"],
    answer: 4 // 
  },
  {
    qNo: 3,
    subject: "physics",
    chapter: "Motion in a Plane",
    question: "A particle is projected from the ground with an initial velocity of 20 m/s at an angle of 30° with the horizontal. The magnitude of its change in velocity when it is at the highest point is",
    image: "",
    options: ["10 m/s", "10√3 m/s", "20 m/s", "zero"],
    answer: 1 // 
  },
  {
    qNo: 4,
    subject: "physics",
    chapter: "Laws of Motion",
    question: "A block of mass 10 kg is placed on a rough horizontal surface having coefficient of friction μ = 0.5. If a horizontal force of 100 N is acting on it, then the acceleration of the block will be",
    image: "",
    options: ["0.5 m/s²", "5 m/s²", "10 m/s²", "15 m/s²"],
    answer: 2 // [cite: 47]
  },
  {
    qNo: 5,
    subject: "physics",
    chapter: "Work, Energy and Power",
    question: "A body of mass 5 kg is moving with a momentum of 10 kg m/s. A force of 0.2 N acts on it in the direction of motion for 10 seconds. The increase in its kinetic energy is",
    image: "",
    options: ["2.8 J", "3.2 J", "3.8 J", "4.4 J"],
    answer: 4 // [cite: 47]
  },
  {
    qNo: 6,
    subject: "physics",
    chapter: "System of Particles and Rotational Motion",
    question: "A thin uniform circular ring of mass M and radius R is rotating in a horizontal plane about an axis passing through its center and perpendicular to its plane with an angular velocity ω. If two objects each of mass m are attached gently to the opposite ends of a diameter of the ring, the new angular velocity will be",
    image: "",
    options: ["(M / (M + m)) ω", "(M / (M + 2m)) ω", "((M + 2m) / M) ω", "((M + m) / M) ω"],
    answer: 2 // [cite: 47]
  },
  {
    qNo: 7,
    subject: "physics",
    chapter: "Oscillations",
    question: "The time period of a simple pendulum of length L as measured in an elevator descending with acceleration g/3 is",
    image: "",
    options: ["2π√(L/g)", "π√(3L/g)", "2π√(3L/2g)", "2π√(3L/g)"],
    answer: 3 // [cite: 48]
  },
  {
    qNo: 8,
    subject: "physics",
    chapter: "Gravitation",
    question: "The ratio of escape velocity at earth (v_e) to the escape velocity at a planet (v_p) whose radius and mean density are twice as that of earth is",
    image: "",
    options: ["1 : 2", "1 : 2√2", "1 : 4", "1 : √2"],
    answer: 2 // [cite: 48]
  },
  {
    qNo: 9,
    subject: "physics",
    chapter: "Mechanical Properties of Solids",
    question: "If the load on a wire is increased such that its length increases by 0.1%, then the percentage increase in its energy density will be",
    image: "",
    options: ["0.01%", "0.1%", "0.2%", "0.4%"],
    answer: 3 // [cite: 49]
  },
  {
    qNo: 10,
    subject: "physics",
    chapter: "Mechanical Properties of Fluids",
    question: "The terminal velocity of a small sphere of radius r in a viscous liquid is proportional to",
    image: "",
    options: ["r", "r²", "1/r", "1/r²"],
    answer: 2 // [cite: 49]
  },
  {
    qNo: 11,
    subject: "physics",
    chapter: "Thermodynamics",
    question: "A heat engine works between two temperatures 600 K and 300 K. The efficiency of the engine is",
    image: "",
    options: ["25%", "50%", "75%", "100%"],
    answer: 2 // [cite: 50]
  },
  {
    qNo: 12,
    subject: "physics",
    chapter: "Kinetic Theory of Gases",
    question: "The average kinetic energy of a gas molecule at temperature T is directly proportional to",
    image: "",
    options: ["√T", "T", "T²", "T³"],
    answer: 2 // [cite: 50]
  },
  {
    qNo: 13,
    subject: "physics",
    chapter: "Waves",
    question: "A string of length 2 m is fixed at both ends. If it vibrates in its fundamental mode with a frequency of 100 Hz, the speed of the wave in the string is",
    image: "",
    options: ["200 m/s", "400 m/s", "600 m/s", "800 m/s"],
    answer: 2 // [cite: 51]
  },
  {
    qNo: 14,
    subject: "physics",
    chapter: "Electric Charges and Fields",
    question: "Two point charges +q and -q are placed at a distance 'd' apart. The electric potential at a point midway between them is",
    image: "",
    options: ["q / (2πε₀d)", "q / (πε₀d)", "zero", "2q / (πε₀d)"],
    answer: 3 // [cite: 51]
  },
  {
    qNo: 15,
    subject: "physics",
    chapter: "Electrostatic Potential and Capacitance",
    question: "Three capacitors each of capacitance 9 pF are connected in series. The total capacitance of the combination is",
    image: "",
    options: ["3 pF", "9 pF", "18 pF", "27 pF"],
    answer: 1 // [cite: 52]
  },
  {
    qNo: 16,
    subject: "physics",
    chapter: "Current Electricity",
    question: "A wire of resistance R is stretched to double its length. Its new resistance will be",
    image: "",
    options: ["R", "2R", "4R", "8R"],
    answer: 3 // [cite: 52]
  },
  {
    qNo: 17,
    subject: "physics",
    chapter: "Moving Charges and Magnetism",
    question: "A charged particle moves through a magnetic field perpendicular to its direction. Then",
    image: "",
    options: ["the momentum changes but the kinetic energy remains constant", "both momentum and kinetic energy change", "both momentum and kinetic energy remain constant", "kinetic energy changes but momentum remains constant"],
    answer: 1 // [cite: 52]
  },
  {
    qNo: 18,
    subject: "physics",
    chapter: "Magnetism and Matter",
    question: "The magnetic susceptibility of a paramagnetic material is inversely proportional to its absolute temperature T. This is known as",
    image: "",
    options: ["Gauss's Law", "Curie's Law", "Ampere's Law", "Lenz's Law"],
    answer: 2 // [cite: 53]
  },
  {
    qNo: 19,
    subject: "physics",
    chapter: "Electromagnetic Induction",
    question: "The self-inductance of a solenoid is L. If the number of turns is doubled, its self-inductance will become",
    image: "",
    options: ["L/2", "2L", "4L", "8L"],
    answer: 3 // [cite: 53]
  },
  {
    qNo: 20,
    subject: "physics",
    chapter: "Alternating Current",
    question: "In an LCR series circuit, at resonance, the impedance of the circuit is",
    image: "",
    options: ["minimum and equal to R", "maximum and equal to R", "zero", "infinite"],
    answer: 1 // [cite: 53]
  },
  {
    qNo: 21,
    subject: "physics",
    chapter: "Electromagnetic Waves",
    question: "Which of the following has the shortest wavelength?",
    image: "",
    options: ["Radio waves", "Microwaves", "Infrared waves", "Gamma rays"],
    answer: 4 // [cite: 54]
  },
  {
    qNo: 22,
    subject: "physics",
    chapter: "Ray Optics and Optical Instruments",
    question: "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 40 cm. The power of the combination is",
    image: "",
    options: ["+2.5 D", "-2.5 D", "+5.0 D", "-5.0 D"],
    answer: 1 // [cite: 54]
  },
  {
    qNo: 23,
    subject: "physics",
    chapter: "Wave Optics",
    question: "In Young's double slit experiment, if the distance between the slits is halved and the distance between the slits and the screen is doubled, the fringe width will become",
    image: "",
    options: ["half", "double", "four times", "eight times"],
    answer: 3 // [cite: 55]
  },
  {
    qNo: 24,
    subject: "physics",
    chapter: "Dual Nature of Radiation and Matter",
    question: "The de Broglie wavelength of an electron accelerated through a potential difference of 100 V is nearly",
    image: "",
    options: ["1.23 Å", "12.3 Å", "0.123 Å", "123 Å"],
    answer: 1 // [cite: 55]
  },
  {
    qNo: 25,
    subject: "physics",
    chapter: "Atoms",
    question: "In the Bohr model of a hydrogen atom, the ratio of the kinetic energy to the total energy of the electron in a quantum state n is",
    image: "",
    options: ["1 : 1", "1 : -1", "2 : 1", "1 : -2"],
    answer: 2 // [cite: 56]
  },
  {
    qNo: 26,
    subject: "physics",
    chapter: "Nuclei",
    question: "The half-life of a radioactive substance is 10 years. The time taken for its activity to reduce to 1/16th of its initial value is",
    image: "",
    options: ["20 years", "30 years", "40 years", "50 years"],
    answer: 3 // [cite: 56]
  },
  {
    qNo: 27,
    subject: "physics",
    chapter: "Semiconductor Electronics: Materials, Devices and Simple Circuits",
    question: "In a p-n junction diode, the thickness of the depletion layer is of the order of",
    image: "",
    options: ["10^-3 m", "10^-6 m", "10^-9 m", "10^-12 m"],
    answer: 2 // [cite: 57]
  },
  {
    qNo: 28,
    subject: "physics",
    chapter: "Communication Systems",
    question: "The maximum distance up to which TV transmission from a TV tower of height 'h' can be received is proportional to",
    image: "",
    options: ["h^1/2", "h", "h^3/2", "h^2"],
    answer: 1 // [cite: 57]
  },
  {
    qNo: 29,
    subject: "physics",
    chapter: "Thermal Properties of Matter",
    question: "A black body at 227°C radiates heat at the rate of 7 cal/cm²s. At a temperature of 727°C, the rate of heat radiation in the same units will be",
    image: "",
    options: ["14", "28", "56", "112"],
    answer: 4 // [cite: 58]
  },
  {
    qNo: 30,
    subject: "physics",
    chapter: "Thermodynamics",
    question: "During an adiabatic process, the pressure of a gas is found to be proportional to the cube of its absolute temperature. The ratio C_p/C_v for the gas is",
    image: "",
    options: ["3/2", "4/3", "5/3", "7/5"],
    answer: 1 // [cite: 58]
  },
  {
    qNo: 31,
    subject: "physics",
    chapter: "Kinetic Theory of Gases",
    question: "The root mean square speed of the molecules of an enclosed gas is 'v'. If the pressure is doubled keeping the temperature constant, the root mean square speed will be",
    image: "",
    options: ["v", "2v", "4v", "v/2"],
    answer: 1 // [cite: 59]
  },
  {
    qNo: 32,
    subject: "physics",
    chapter: "Oscillations",
    question: "A particle executes simple harmonic motion with an amplitude 'A'. The distance from the mean position at which its kinetic energy is equal to its potential energy is",
    image: "",
    options: ["A/2", "A/√2", "A/4", "A/√3"],
    answer: 2 // [cite: 59]
  },{
    qNo: 33,
    subject: "physics",
    chapter: "Waves",
    question: "A pipe open at both ends has a fundamental frequency 'f' in air. The pipe is dipped vertically in water such that half of it is in water. The fundamental frequency of the air column is now",
    image: "",
    options: ["f/2", "f", "2f", "3f/2"],
    answer: 2 // [cite: 58, 59]
  },
  {
    qNo: 34,
    subject: "physics",
    chapter: "Electric Charges and Fields",
    question: "An electric dipole is placed at an angle of 30° with an electric field of intensity 2 × 10⁵ N/C. It experiences a torque equal to 4 Nm. The charge on the dipole, if the dipole length is 2 cm, is",
    image: "",
    options: ["8 mC", "2 mC", "5 mC", "7 mC"],
    answer: 2 // [cite: 59]
  },
  {
    qNo: 35,
    subject: "physics",
    chapter: "Electrostatic Potential and Capacitance",
    question: "A parallel plate capacitor with air between the plates has a capacitance of 8 pF. What will be the capacitance if the distance between the plates is reduced by half, and the space between them is filled with a substance of dielectric constant 6?",
    image: "",
    options: ["48 pF", "96 pF", "24 pF", "12 pF"],
    answer: 2 // [cite: 59, 60]
  },
  {
    qNo: 36,
    subject: "physics",
    chapter: "Current Electricity",
    question: "In a potentiometer arrangement, a cell of emf 1.25 V gives a balance point at 35 cm length of the wire. If the cell is replaced by another cell and the balance point shifts to 63 cm, what is the emf of the second cell?",
    image: "",
    options: ["2.25 V", "2.50 V", "2.75 V", "3.00 V"],
    answer: 1 // [cite: 60]
  },
  {
    qNo: 37,
    subject: "physics",
    chapter: "Moving Charges and Magnetism",
    question: "A long straight wire carries a current of 35 A. What is the magnitude of the magnetic field B at a point 20 cm from the wire?",
    image: "",
    options: ["3.5 × 10^-5 T", "7.0 × 10^-5 T", "3.5 × 10^-4 T", "7.0 × 10^-4 T"],
    answer: 1 // [cite: 60]
  },
  {
    qNo: 38,
    subject: "physics",
    chapter: "Magnetism and Matter",
    question: "A short bar magnet placed with its axis at 30° with a uniform external magnetic field of 0.25 T experiences a torque of magnitude equal to 4.5 × 10^-2 J. What is the magnitude of magnetic moment of the magnet?",
    image: "",
    options: ["0.36 Am²", "0.48 Am²", "0.24 Am²", "0.12 Am²"],
    answer: 1 // [cite: 60, 61]
  },
  {
    qNo: 39,
    subject: "physics",
    chapter: "Electromagnetic Induction",
    question: "A circular coil of radius 8.0 cm and 20 turns is rotated about its vertical diameter with an angular speed of 50 rad/s in a uniform horizontal magnetic field of magnitude 3.0 × 10^-2 T. The maximum emf induced in the coil is",
    image: "",
    options: ["0.60 V", "1.2 V", "0.15 V", "0.30 V"],
    answer: 1 // [cite: 61]
  },
  {
    qNo: 40,
    subject: "physics",
    chapter: "Alternating Current",
    question: "A 100 Ω resistor is connected to a 220 V, 50 Hz ac supply. The rms value of current in the circuit is",
    image: "",
    options: ["1.56 A", "2.20 A", "3.11 A", "4.40 A"],
    answer: 2 // [cite: 61, 62]
  },
  {
    qNo: 41,
    subject: "chemistry",
    chapter: "Some Basic Concepts of Chemistry",
    question: "The number of significant figures in 0.0025 is",
    image: "",
    options: ["2", "3", "4", "5"],
    answer: 1 // 
  },
  {
    qNo: 42,
    subject: "chemistry",
    chapter: "Structure of Atom",
    question: "The maximum number of electrons in a subshell with l = 3 is",
    image: "",
    options: ["2", "6", "10", "14"],
    answer: 4 // 
  },
  {
    qNo: 43,
    subject: "chemistry",
    chapter: "Classification of Elements and Periodicity in Properties",
    question: "Which of the following elements has the highest electronegativity?",
    image: "",
    options: ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"],
    answer: 1 // 
  },
  {
    qNo: 44,
    subject: "chemistry",
    chapter: "Chemical Bonding and Molecular Structure",
    question: "The shape of BF₃ molecule is",
    image: "",
    options: ["Linear", "Tetrahedral", "Trigonal planar", "Pyramidal"],
    answer: 3 // 
  },
  {
    qNo: 45,
    subject: "chemistry",
    chapter: "States of Matter",
    question: "The value of gas constant R in SI units is",
    image: "",
    options: ["8.314 J K⁻¹ mol⁻¹", "0.0821 L atm K⁻¹ mol⁻¹", "1.987 cal K⁻¹ mol⁻¹", "8.314 erg K⁻¹ mol⁻¹"],
    answer: 1 // 
  },
  {
    qNo: 46,
    subject: "chemistry",
    chapter: "Thermodynamics",
    question: "For an isothermal process involving an ideal gas, the change in internal energy (ΔU) is",
    image: "",
    options: ["Positive", "Negative", "Zero", "Infinite"],
    answer: 3 // 
  },
  {
    qNo: 47,
    subject: "chemistry",
    chapter: "Equilibrium",
    question: "The pH of a 0.01 M HCl solution is",
    image: "",
    options: ["1", "2", "3", "7"],
    answer: 2 // 
  },
  {
    qNo: 48,
    subject: "chemistry",
    chapter: "Redox Reactions",
    question: "The oxidation state of Manganese in KMnO₄ is",
    image: "",
    options: ["+2", "+4", "+6", "+7"],
    answer: 4 // 
  },
  {
    qNo: 49,
    subject: "chemistry",
    chapter: "Hydrogen",
    question: "Which of the following is used as a moderator in nuclear reactors?",
    image: "",
    options: ["H₂O", "D₂O", "H₂O₂", "T₂O"],
    answer: 2 // 
  },
  {
    qNo: 50,
    subject: "chemistry",
    chapter: "s-Block Elements",
    question: "Which alkali metal is the most powerful reducing agent in aqueous solution?",
    image: "",
    options: ["Lithium", "Sodium", "Potassium", "Cesium"],
    answer: 1 // 
  },
  {
    qNo: 51,
    subject: "chemistry",
    chapter: "Chemical Thermodynamics",
    question: "For a spontaneous process at all temperatures, the conditions are",
    image: "",
    options: ["ΔH < 0, ΔS > 0", "ΔH > 0, ΔS < 0", "ΔH < 0, ΔS < 0", "ΔH > 0, ΔS > 0"],
    answer: 1 // [cite: 82, 83]
  },
  {
    qNo: 52,
    subject: "chemistry",
    chapter: "Equilibrium",
    question: "The conjugate base of H₂PO₄⁻ is",
    image: "",
    options: ["H₃PO₄", "P₂O₅", "PO₄³⁻", "HPO₄²⁻"],
    answer: 4 // [cite: 82, 83]
  },
  {
    qNo: 53,
    subject: "chemistry",
    chapter: "Redox Reactions",
    question: "In the reaction: MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂, the substance oxidized is",
    image: "",
    options: ["MnO₂", "HCl", "H₂O", "MnCl₂"],
    answer: 2 // [cite: 82, 83]
  },
  {
    qNo: 54,
    subject: "chemistry",
    chapter: "Hydrogen",
    question: "Temporary hardness of water is due to the presence of",
    image: "",
    options: ["Magnesium bicarbonate", "Calcium chloride", "Magnesium sulphate", "Calcium sulphate"],
    answer: 1 // [cite: 82, 83]
  },
  {
    qNo: 55,
    subject: "chemistry",
    chapter: "s-Block Elements",
    question: "Which of the following is known as 'Glauber's salt'?",
    image: "",
    options: ["MgSO₄·7H₂O", "Na₂SO₄·10H₂O", "FeSO₄·7H₂O", "Na₂CO₃·10H₂O"],
    answer: 2 // [cite: 82, 83]
  },
  {
    qNo: 56,
    subject: "chemistry",
    chapter: "p-Block Elements",
    question: "The hybridization of Boron in Diborane (B₂H₆) is",
    image: "",
    options: ["sp", "sp²", "sp³", "dsp²"],
    answer: 3 // [cite: 82, 83]
  },
  {
    qNo: 57,
    subject: "chemistry",
    chapter: "Organic Chemistry",
    question: "The IUPAC name of CH₃-CH(OH)-CH₂-CHO is",
    image: "",
    options: ["3-Hydroxybutanal", "2-Hydroxybutanal", "3-Hydroxybutane", "Butan-3-ol-1-al"],
    answer: 1 // [cite: 82, 83]
  },
  {
    qNo: 58,
    subject: "chemistry",
    chapter: "Hydrocarbons",
    question: "Which of the following is the most stable carbocation?",
    image: "",
    options: ["(CH₃)₃C⁺", "(CH₃)₂CH⁺", "CH₃CH₂⁺", "CH₃⁺"],
    answer: 1 // [cite: 82, 83]
  },
  {
    qNo: 59,
    subject: "chemistry",
    chapter: "Solid State",
    question: "The number of atoms per unit cell in a body-centered cubic (BCC) structure is",
    image: "",
    options: ["1", "2", "4", "6"],
    answer: 2 // [cite: 82, 83]
  },
  {
    qNo: 60,
    subject: "chemistry",
    chapter: "Solutions",
    question: "An example of a non-ideal solution showing negative deviation from Raoult's Law is",
    image: "",
    options: ["Benzene + Toluene", "Acetone + Carbon disulphide", "Acetone + Chloroform", "Ethanol + Water"],
    answer: 3 // [cite: 82, 83]
  },{
    qNo: 61,
    subject: "chemistry",
    chapter: "Electrochemistry",
    question: "The unit of molar conductivity is",
    image: "",
    options: ["S cm² mol⁻¹", "S cm mol⁻¹", "S⁻¹ cm² mol⁻¹", "S cm² mol"],
    answer: 1 //
  },
  {
    qNo: 62,
    subject: "chemistry",
    chapter: "Chemical Kinetics",
    question: "For a first-order reaction, the half-life period is",
    image: "",
    options: ["Independent of initial concentration", "Directly proportional to initial concentration", "Inversely proportional to initial concentration", "Directly proportional to the square of initial concentration"],
    answer: 1 //
  },
  {
    qNo: 63,
    subject: "chemistry",
    chapter: "Surface Chemistry",
    question: "Which of the following is an example of an oil-in-water emulsion?",
    image: "",
    options: ["Milk", "Butter", "Cold cream", "Cod liver oil"],
    answer: 1 //
  },
  {
    qNo: 64,
    subject: "chemistry",
    chapter: "Metallurgy",
    question: "In the extraction of Copper, the reaction taking place in the Bessemer converter is",
    image: "",
    options: ["2CuFeS₂ + O₂ → Cu₂S + 2FeS + SO₂", "FeO + SiO₂ → FeSiO₃", "2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂", "2Cu₂O + Cu₂S → 6Cu + SO₂"],
    answer: 4 //
  },
  {
    qNo: 65,
    subject: "chemistry",
    chapter: "p-Block Elements",
    question: "The correct order of acidity of oxoacids of phosphorous is",
    image: "",
    options: ["H₃PO₂ > H₃PO₃ > H₃PO₄", "H₃PO₄ > H₃PO₃ > H₃PO₂", "H₃PO₃ > H₃PO₄ > H₃PO₂", "H₃PO₂ > H₃PO₄ > H₃PO₃"],
    answer: 1 //
  },
  {
    qNo: 66,
    subject: "chemistry",
    chapter: "d and f-Block Elements",
    question: "The electronic configuration of Gadolinium (Z=64) is",
    image: "",
    options: ["[Xe] 4f⁷ 5d¹ 6s²", "[Xe] 4f⁸ 5d⁰ 6s²", "[Xe] 4f⁷ 5d⁰ 6s²", "[Xe] 4f⁶ 5d² 6s²"],
    answer: 1 //
  },
  {
    qNo: 67,
    subject: "chemistry",
    chapter: "Coordination Compounds",
    question: "The IUPAC name of [Co(NH₃)₅Cl]Cl₂ is",
    image: "",
    options: ["Pentaamminechloridocobalt(III) chloride", "Pentaamminechlorocobalt(II) chloride", "Chloropentaamminecobalt(III) chloride", "Pentaamminechloridocobalt(II) chloride"],
    answer: 1 //
  },
  {
    qNo: 68,
    subject: "chemistry",
    chapter: "Organic Chemistry",
    question: "The reaction of an alkyl halide with sodium in dry ether to give a hydrocarbon is called",
    image: "",
    options: ["Wurtz reaction", "Fittig reaction", "Frankland reaction", "Sandmeyer reaction"],
    answer: 1 //
  },
  {
    qNo: 69,
    subject: "chemistry",
    chapter: "Alcohols, Phenols and Ethers",
    question: "Phenol on treatment with Br₂ in CS₂ at low temperature gives",
    image: "",
    options: ["o- and p-Bromophenol", "2,4,6-Tribromophenol", "m-Bromophenol", "Benzene"],
    answer: 1 //
  },
  {
    qNo: 70,
    subject: "chemistry",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    question: "Which of the following does not undergo Cannizzaro reaction?",
    image: "",
    options: ["Formaldehyde", "Benzaldehyde", "Acetaldehyde", "Trimethylacetaldehyde"],
    answer: 3 //
  },{
    qNo: 71,
    subject: "chemistry",
    chapter: "Aldehydes, Ketones and Carboxylic Acids",
    question: "The product formed when Benzene reacts with CH₃COCl in the presence of anhydrous AlCl₃ is",
    image: "",
    options: ["Acetophenone", "Benzophenone", "Chlorobenzene", "Ethylbenzene"],
    answer: 1 // 
  },
  {
    qNo: 72,
    subject: "chemistry",
    chapter: "Amines",
    question: "Which of the following is the strongest base in aqueous solution?",
    image: "",
    options: ["(CH₃)₂NH", "CH₃NH₂", "(CH₃)₃N", "NH₃"],
    answer: 1 // 
  },
  {
    qNo: 73,
    subject: "chemistry",
    chapter: "Biomolecules",
    question: "Which of the following is a non-reducing sugar?",
    image: "",
    options: ["Sucrose", "Lactose", "Maltose", "Glucose"],
    answer: 1 // 
  },
  {
    qNo: 74,
    subject: "chemistry",
    chapter: "Polymers",
    question: "The monomer of Natural Rubber is",
    image: "",
    options: ["Isoprene", "Chloroprene", "Styrene", "Butadiene"],
    answer: 1 // 
  },
  {
    qNo: 75,
    subject: "chemistry",
    chapter: "Chemistry in Everyday Life",
    question: "Which of the following is a broad-spectrum antibiotic?",
    image: "",
    options: ["Chloramphenicol", "Penicillin G", "Amoxicillin", "Ofloxacin"],
    answer: 1 // 
  },
  {
    qNo: 76,
    subject: "chemistry",
    chapter: "p-Block Elements",
    question: "The noble gas which does not form any true chemical compound is",
    image: "",
    options: ["Helium", "Xenon", "Krypton", "Radon"],
    answer: 1 // 
  },
  {
    qNo: 77,
    subject: "chemistry",
    chapter: "d and f-Block Elements",
    question: "The transition metal which shows the highest oxidation state is",
    image: "",
    options: ["Manganese", "Iron", "Chromium", "Osmium"],
    answer: 4 // 
  },
  {
    qNo: 78,
    subject: "chemistry",
    chapter: "Coordination Compounds",
    question: "The number of geometrical isomers for [Pt(NH₃)₂Cl₂] is",
    image: "",
    options: ["2", "3", "4", "1"],
    answer: 1 // 
  },
  {
    qNo: 79,
    subject: "chemistry",
    chapter: "Environmental Chemistry",
    question: "The main greenhouse gas responsible for global warming is",
    image: "",
    options: ["CO₂", "CH₄", "N₂O", "CFCs"],
    answer: 1 // 
  },
  {
    qNo: 80,
    subject: "chemistry",
    chapter: "Organic Chemistry",
    question: "The major product of the reaction between Propene and HBr in the presence of peroxide is",
    image: "",
    options: ["1-Bromopropane", "2-Bromopropane", "1,2-Dibromopropane", "2,2-Dibromopropane"],
    answer: 1 // 
  },
  {
    qNo: 81,
    subject: "maths",
    chapter: "Functions",
    question: "Let f(x)=3+2x and gn(x) = (f ∘ f ∘ f..... n times) (x). ∀n ∈ N if all the lines y=gn(x) pass through a fixed point (α, β), then α + β =",
    image: "",
    options: ["-5", "30", "-4", "-3"],
    answer: 1 // -5 is marked with * in the source [cite: 8]
  },
  {
    qNo: 82,
    subject: "maths",
    chapter: "Functions",
    question: "Let a > 1 and 0 < b < 1. If f: ℝ → [0, 1] is defined by f(x) = {a^x, -∞ < x < 0; b^x, 0 ≤ x < ∞}, then f(x) is",
    image: "",
    options: ["A bijection", "One-one but not onto", "Onto but not one-one", "Neither one-one nor onto"],
    answer: 3 // [cite: 8, 9]
  },
  {
    qNo: 83,
    subject: "mathematics",
    chapter: "Series",
    question: "1/(3.7) + 1/(7.11) + 1/(11.15) + ... to 50 terms =",
    image: "",
    options: ["50/203", "50/609", "150/203", "25/609"],
    answer: 1 // [cite: 9]
  },
  {
    qNo: 84,
    subject: "maths",
    chapter: "Matrices",
    question: "If A = [[1, 0, 2], [2, 1, 3], [3, 2, 4]], then A² - 5A + 6I =",
    image: "",
    options: [
      "[[8, 4, 0], [3, 8, 4], [4, 0, 12]]",
      "[[8, 4, 0], [3, 6, 4], [4, 0, 14]]",
      "[[8, 6, 0], [3, 8, 4], [2, 0, 14]]",
      "[[8, 4, 0], [3, 8, 4], [4, 0, 14]]"
    ],
    answer: 4 // [cite: 9, 10]
  },
  {
    qNo: 85,
    subject: "maths",
    chapter: "Determinants",
    question: "Sum of the positive roots of the equation |x²+2x, x+2, 1; 2x+1, x-1, 1; x+2, -1, 1| = 0 is",
    image: "",
    options: ["(1+√13)/2", "1", "(√13-1)/2", "3"],
    answer: 3 // [cite: 10]
  },
  {
    qNo: 86,
    subject: "maths",
    chapter: "Systems of Linear Equations",
    question: "If the solution of the system of equations x+y-z=6, 3x+2y-z=5 and 2x-y-2z+3=0 is x=α, y=β, z=γ, then α+β =",
    image: "",
    options: ["-7", "2", "1", "-2"],
    answer: 1 // [cite: 10, 11]
  },
  {
    qNo: 87,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "If the point p represents the complex number z=x+iy in the Argand plane and if (z+i)/(z-1) is a purely imaginary number, then the locus of p is",
    image: "",
    options: [
      "x² + y² + x - y = 0 and (x,y) ≠ (1,0)",
      "x² + y² - x + y = 0 and (x,y) ≠ (1,0)",
      "x² + y² - x + y = 0 and (x,y) = (1,0)",
      "x² + y² + x + y = 0"
    ],
    answer: 2 // [cite: 11, 12]
  },
  {
    qNo: 88,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "S = {z ∈ ℂ / |z + 1 - i| = 1} represents",
    image: "",
    options: [
      "the circle with centre at (-1, 1) and radius 1 unit",
      "the circle with centre at (1, -1) and radius 1 unit",
      "the closed circular disc with centre at (1, -1) and radius 1 unit",
      "the closed circular disc with centre at (-1, 1) and radius 1 unit"
    ],
    answer: 1 // [cite: 12]
  },
  {
    qNo: 89,
    subject: "maths",
    chapter: "Trigonometry",
    question: "If cos α + cos β + cos γ = sin α + sin β + sin γ = 0, then (cos³ α + cos³ β + cos³ γ)² + (sin³ α + sin³ β + sin³ γ)² =",
    image: "",
    options: ["1", "3/4", "9/16", "9/8"],
    answer: 4 // [cite: 14]
  },
  {
    qNo: 90,
    subject: "maths",
    chapter: "Theory of Equations",
    question: "If α and β are two double roots of x² + 3(a+3)x - 9a = 0 for different values of a (α > β), then the minimum value of x² + αx - β = 0 is",
    image: "",
    options: ["69/4", "-69/4", "-35/4", "35/4"],
    answer: 2 // [cite: 15, 16]
  },{
    qNo: 91,
    subject: "maths",
    chapter: "Theory of Equations",
    question: "If 2x² + 3x - 2 = 0 and 3x² + ax - 2 = 0 have one common root, then the sum of all possible values of a is",
    image: "",
    options: ["13/2", "3", "7/2", "5"],
    answer: 3 //
  },
  {
    qNo: 92,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "The number of 5-digit numbers that can be formed using the digits 0, 1, 2, 3, 4, 5 without repetition such that the number is divisible by 6 is",
    image: "",
    options: ["156", "108", "96", "48"],
    answer: 2 //
  },
  {
    qNo: 93,
    subject: "maths",
    chapter: "Binomial Theorem",
    question: "The coefficient of x⁴ in the expansion of (1 + x + x² + x³)⁶ is",
    image: "",
    options: ["120", "210", "126", "84"],
    answer: 1 //
  },
  {
    qNo: 94,
    subject: "maths",
    chapter: "Partial Fractions",
    question: "If (3x + 4) / ((x + 1)²(x - 1)) = A / (x + 1) + B / (x + 1)² + C / (x - 1), then A + B + C =",
    image: "",
    options: ["-1/2", "1/2", "0", "1"],
    answer: 2 //
  },
  {
    qNo: 95,
    subject: "maths",
    chapter: "Trigonometric Ratios and Identities",
    question: "If tan A = 1/2 and tan B = 1/3, then the value of cos 2A - sin 2B is",
    image: "",
    options: ["0", "1/5", "1", "1/2"],
    answer: 1 //
  },
  {
    qNo: 96,
    subject: "maths",
    chapter: "Trigonometric Equations",
    question: "The general solution of the equation sin x + cos x = √2 is",
    image: "",
    options: ["2nπ + π/4", "nπ + (-1)ⁿ π/4", "2nπ ± π/4", "nπ + π/4"],
    answer: 1 //
  },
  {
    qNo: 97,
    subject: "maths",
    chapter: "Inverse Trigonometric Functions",
    question: "The value of sin[2 cos⁻¹(-3/5)] is",
    image: "",
    options: ["24/25", "-24/25", "7/25", "-7/25"],
    answer: 2 //
  },
  {
    qNo: 98,
    subject: "maths",
    chapter: "Hyperbolic Functions",
    question: "If cosh x = 5/2, then the value of cosh 2x is",
    image: "",
    options: ["23/2", "25/4", "17/2", "21/2"],
    answer: 1 //
  },
  {
    qNo: 99,
    subject: "maths",
    chapter: "Properties of Triangles",
    question: "In a triangle ABC, if a=5, b=6 and c=7, then the value of cos A is",
    image: "",
    options: ["5/7", "19/35", "3/4", "13/14"],
    answer: 1 //
  },
  {
    qNo: 100,
    subject: "maths",
    chapter: "Vector Algebra",
    question: "If a = i + j + k and b = i - j + 2k, then the unit vector perpendicular to both a and b is",
    image: "",
    options: ["(3i - j - 2k) / √14", "(i + j - 2k) / √6", "(3i + j - 2k) / √14", "(i - j - k) / √3"],
    answer: 1 //
  },
{
    qNo: 101,
    subject: "maths",
    chapter: "Vector Algebra",
    question: "If a, b, c are three non-zero vectors such that a × (b × c) = (a × b) × c, then",
    image: "",
    options: ["a and c are collinear", "a and b are collinear", "b and c are collinear", "a, b and c are coplanar"],
    answer: 1 //
  },
  {
    qNo: 102,
    subject: "maths",
    chapter: "Vector Algebra",
    question: "The area of the parallelogram whose diagonals are represented by the vectors d₁ = 3i + j - 2k and d₂ = i - 3j + 4k is",
    image: "",
    options: ["5√3", "√30", "10√3", "√15"],
    answer: 3 //
  },
  {
    qNo: 103,
    subject: "maths",
    chapter: "Measures of Dispersion",
    question: "The variance of the first n natural numbers is",
    image: "",
    options: ["(n² - 1) / 12", "n² / 12", "(n² + 1) / 12", "(n - 1)² / 12"],
    answer: 1 //
  },
  {
    qNo: 104,
    subject: "maths",
    chapter: "Probability",
    question: "If A and B are two events such that P(A) = 0.4, P(B) = 0.8 and P(B|A) = 0.6, then P(A|B) =",
    image: "",
    options: ["0.3", "0.25", "0.4", "0.5"],
    answer: 1 //
  },
  {
    qNo: 105,
    subject: "maths",
    chapter: "Probability Distributions",
    question: "In a Binomial distribution, the mean is 4 and the variance is 3. Then the number of trials n is",
    image: "",
    options: ["12", "16", "20", "24"],
    answer: 2 //
  },
  {
    qNo: 106,
    subject: "maths",
    chapter: "Coordinate Geometry - Locus",
    question: "The locus of a point which moves such that its distance from the point (0, 0) is twice its distance from the y-axis is",
    image: "",
    options: ["x² - y² = 0", "3x² - y² = 0", "x² + 3y² = 0", "y² - 3x² = 0"],
    answer: 4 //
  },
  {
    qNo: 107,
    subject: "maths",
    chapter: "The Straight Line",
    question: "The equation of the line passing through (1, 2) and perpendicular to the line x + y + 1 = 0 is",
    image: "",
    options: ["x - y + 1 = 0", "x + y - 3 = 0", "x - y - 1 = 0", "x - y + 3 = 0"],
    answer: 1 //
  },
  {
    qNo: 108,
    subject: "maths",
    chapter: "The Straight Line",
    question: "The distance between the parallel lines 3x + 4y - 5 = 0 and 3x + 4y + 10 = 0 is",
    image: "",
    options: ["1", "2", "3", "5"],
    answer: 3 //
  },
  {
    qNo: 109,
    subject: "maths",
    chapter: "Pair of Straight Lines",
    question: "If the pair of lines ax² + 2hxy + by² = 0 are perpendicular, then",
    image: "",
    options: ["a + b = 0", "a - b = 0", "h² = ab", "a + b = h"],
    answer: 1 //
  },
  {
    qNo: 110,
    subject: "maths",
    chapter: "Three Dimensional Coordinates",
    question: "The distance of the point (1, 2, 3) from the origin is",
    image: "",
    options: ["√6", "√14", "14", "6"],
    answer: 2 //
  },
  {
    qNo: 111,
    subject: "maths",
    chapter: "Limits",
    question: "The value of lim (x→0) (sin x / x) is",
    image: "",
    options: ["0", "1", "-1", "Does not exist"],
    answer: 2 // Correct options are shown in green with a checkmark icon[cite: 1].
  },
  {
    qNo: 112,
    subject: "maths",
    chapter: "Differentiation",
    question: "If y = log(sec x + tan x), then dy/dx is",
    image: "",
    options: ["sec x", "tan x", "sec² x", "sec x tan x"],
    answer: 1 // [cite: 1]
  },
  {
    qNo: 113,
    subject: "maths",
    chapter: "Applications of Derivatives",
    question: "The slope of the tangent to the curve y = x³ - x at x = 2 is",
    image: "",
    options: ["11", "12", "13", "10"],
    answer: 1 // [cite: 1]
  },
  {
    qNo: 114,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "∫ (1 / (1 + x²)) dx =",
    image: "",
    options: ["tan⁻¹ x + c", "sin⁻¹ x + c", "cos⁻¹ x + c", "log(1 + x²) + c"],
    answer: 1 // [cite: 1]
  },
  {
    qNo: 115,
    subject: "maths",
    chapter: "Definite Integration",
    question: "The value of ∫₀¹ x dx is",
    image: "",
    options: ["1", "1/2", "0", "2"],
    answer: 2 // [cite: 1]
  },
  {
    qNo: 116,
    subject: "maths",
    chapter: "Differential Equations",
    question: "The order of the differential equation (d²y/dx²)³ + (dy/dx)⁴ + y = 0 is",
    image: "",
    options: ["3", "4", "2", "1"],
    answer: 3 // [cite: 1]
  },
  {
    qNo: 117,
    subject: "maths",
    chapter: "Circle",
    question: "The center of the circle x² + y² - 4x - 6y - 12 = 0 is",
    image: "",
    options: ["(2, 3)", "(-2, -3)", "(4, 6)", "(-4, -6)"],
    answer: 1 // [cite: 1]
  },
  {
    qNo: 118,
    subject: "maths",
    chapter: "Parabola",
    question: "The focus of the parabola y² = 12x is",
    image: "",
    options: ["(3, 0)", "(0, 3)", "(-3, 0)", "(0, -3)"],
    answer: 1 // [cite: 1]
  },
  {
    qNo: 119,
    subject: "maths",
    chapter: "Ellipse",
    question: "The eccentricity of the ellipse x²/25 + y²/16 = 1 is",
    image: "",
    options: ["3/5", "4/5", "9/25", "1/2"],
    answer: 1 // [cite: 1]
  },
  {
    qNo: 120,
    subject: "maths",
    chapter: "Hyperbola",
    question: "The length of the latus rectum of the hyperbola x²/9 - y²/16 = 1 is",
    image: "",
    options: ["32/3", "16/3", "8/3", "4/3"],
    answer: 1 // [cite: 1]
  },
  {
    qNo: 121,
    subject: "maths",
    chapter: "Vector Algebra",
    question: "If a = i - 2j + 3k and b = 2i + j + k, then the projection of a on b is",
    image: "",
    options: ["3/√6", "5/√6", "1/√6", "√6"],
    answer: 1 // Correct options are shown in green with a checkmark in the source 
  },
  {
    qNo: 122,
    subject: "maths",
    chapter: "Vector Algebra",
    question: "The volume of the parallelepiped whose coterminous edges are i+j, j+k, k+i is",
    image: "",
    options: ["1", "2", "3", "4"],
    answer: 2 // 
  },
  {
    qNo: 123,
    subject: "maths",
    chapter: "Trigonometry",
    question: "The value of sin 18° is",
    image: "",
    options: ["(√5 - 1) / 4", "(√5 + 1) / 4", "√(10 - 2√5) / 4", "√(10 + 2√5) / 4"],
    answer: 1 // 
  },
  {
    qNo: 124,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "If z = 1 + i√3, then the amplitude of z is",
    image: "",
    options: ["π/6", "π/3", "π/4", "π/2"],
    answer: 2 // 
  },
  {
    qNo: 125,
    subject: "maths",
    chapter: "Theory of Equations",
    question: "If the roots of x³ - 3x² + x + 1 = 0 are a-d, a, a+d, then a =",
    image: "",
    options: ["1", "2", "0", "-1"],
    answer: 1 // 
  },
  {
    qNo: 126,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "The number of ways of arranging the letters of the word 'MATHEMATICS' is",
    image: "",
    options: ["11!", "11! / (2! 2! 2!)", "11! / 2!", "11! / (2! 2!)"],
    answer: 2 // 
  },
  {
    qNo: 127,
    subject: "maths",
    chapter: "Binomial Theorem",
    question: "The number of terms in the expansion of (x + y + z)¹⁰ is",
    image: "",
    options: ["11", "66", "55", "45"],
    answer: 2 // 
  },
  {
    qNo: 128,
    subject: "maths",
    chapter: "Partial Fractions",
    question: "If 1 / ((x - 1)(x - 2)) = A / (x - 1) + B / (x - 2), then A + B =",
    image: "",
    options: ["1", "0", "-1", "2"],
    answer: 2 // 
  },
  {
    qNo: 129,
    subject: "maths",
    chapter: "Trigonometry",
    question: "If tan θ = 3/4, then the value of cos 2θ is",
    image: "",
    options: ["7/25", "24/25", "-7/25", "1/2"],
    answer: 1 // 
  },
  {
    qNo: 130,
    subject: "maths",
    chapter: "Inverse Trigonometric Functions",
    question: "The value of tan⁻¹(1) + cos⁻¹(-1/2) + sin⁻¹(-1/2) is",
    image: "",
    options: ["π/4", "3π/4", "π/2", "π"],
    answer: 2 // 
  },{
    qNo: 131,
    subject: "maths",
    chapter: "Theory of Equations",
    question: "If the roots of the equation x² - px + q = 0 differ by unity, then p² - 4q =",
    image: "",
    options: ["1", "0", "2", "p"],
    answer: 1 // Correct options are shown in green with a checkmark in the source 
  },
  {
    qNo: 132,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "The number of diagonals in a polygon of 10 sides is",
    image: "",
    options: ["45", "35", "25", "50"],
    answer: 2 // 
  },
  {
    qNo: 133,
    subject: "maths",
    chapter: "Binomial Theorem",
    question: "The middle term in the expansion of (x + 1/x)¹⁰ is",
    image: "",
    options: ["10C₅", "10C₄", "10C₆", "252"],
    answer: 4 // 
  },
  {
    qNo: 134,
    subject: "maths",
    chapter: "Partial Fractions",
    question: "If (x² + 1) / ((x - 1)(x - 2)(x - 3)) = A / (x - 1) + B / (x - 2) + C / (x - 3), then A =",
    image: "",
    options: ["1", "2", "3", "4"],
    answer: 1 // 
  },
  {
    qNo: 135,
    subject: "maths",
    chapter: "Trigonometry",
    question: "The value of cos 1° cos 2° cos 3° ... cos 179° is",
    image: "",
    options: ["1", "0", "1/√2", "-1"],
    answer: 2 // 
  },
  {
    qNo: 136,
    subject: "maths",
    chapter: "Inverse Trigonometric Functions",
    question: "The value of sin(sin⁻¹ 1/2 + cos⁻¹ 1/2) is",
    image: "",
    options: ["0", "1", "1/2", "√3/2"],
    answer: 2 // 
  },
  {
    qNo: 137,
    subject: "maths",
    chapter: "Hyperbolic Functions",
    question: "The value of sinh(log 2) is",
    image: "",
    options: ["3/4", "5/4", "3/2", "0"],
    answer: 1 // 
  },
  {
    qNo: 138,
    subject: "maths",
    chapter: "Properties of Triangles",
    question: "In triangle ABC, if ∠A = 60°, then (b+c)² - a² =",
    image: "",
    options: ["bc", "2bc", "3bc", "4bc"],
    answer: 3 // 
  },
  {
    qNo: 139,
    subject: "maths",
    chapter: "The Straight Line",
    question: "The angle between the lines x + y = 1 and x - y = 1 is",
    image: "",
    options: ["30°", "45°", "60°", "90°"],
    answer: 4 // 
  },
  {
    qNo: 140,
    subject: "maths",
    chapter: "Circle",
    question: "The length of the tangent from (0, 0) to the circle x² + y² - 4x - 6y + 9 = 0 is",
    image: "",
    options: ["3", "9", "√3", "0"],
    answer: 1 // 
  },
  {
    qNo: 141,
    subject: "maths",
    chapter: "Circle",
    question: "The power of the point (1, 1) with respect to the circle x² + y² - 4x + 6y - 12 = 0 is",
    image: "",
    options: ["-8", "8", "12", "-12"],
    answer: 1 // Correct options are shown in green with a checkmark in the source [cite: 1]
  },
  {
    qNo: 142,
    subject: "maths",
    chapter: "Circle",
    question: "The number of common tangents to the circles x² + y² = 4 and x² + y² - 6x - 8y + 24 = 0 is",
    image: "",
    options: ["1", "2", "3", "4"],
    answer: 4 // [cite: 36, 40]
  },
  {
    qNo: 143,
    subject: "maths",
    chapter: "Parabola",
    question: "The length of the chord of the parabola y² = 8x passing through the vertex and making an angle of 45° with the axis is",
    image: "",
    options: ["4√2", "8√2", "2√2", "16√2"],
    answer: 2 // [cite: 38, 40]
  },
  {
    qNo: 144,
    subject: "maths",
    chapter: "Ellipse",
    question: "If the distance between the foci of an ellipse is 6 and the length of the minor axis is 8, then its eccentricity is",
    image: "",
    options: ["3/5", "4/5", "1/2", "3/4"],
    answer: 1 // [cite: 38, 40]
  },
  {
    qNo: 145,
    subject: "maths",
    chapter: "Hyperbola",
    question: "The equation of the asymptotes of the hyperbola xy = 10 is",
    image: "",
    options: ["x = 0, y = 0", "x + y = 0", "x - y = 0", "x = y"],
    answer: 1 // [cite: 38, 40]
  },
  {
    qNo: 146,
    subject: "maths",
    chapter: "Three Dimensional Coordinates",
    question: "The direction cosines of the line joining the points (1, 1, 1) and (2, 3, 3) are",
    image: "",
    options: ["1/3, 2/3, 2/3", "1/√3, 1/√3, 1/√3", "1/3, -2/3, 2/3", "2/3, 2/3, 1/3"],
    answer: 1 // [cite: 39, 40]
  },
  {
    qNo: 147,
    subject: "maths",
    chapter: "The Plane",
    question: "The equation of the plane passing through (1, 1, 1) and parallel to the plane 2x + 3y - z + 5 = 0 is",
    image: "",
    options: ["2x + 3y - z - 4 = 0", "2x + 3y - z + 4 = 0", "2x + 3y - z = 0", "2x + 3y - z - 5 = 0"],
    answer: 1 // [cite: 39, 40]
  },
  {
    qNo: 148,
    subject: "maths",
    chapter: "Limits",
    question: "The value of lim (x→0) (e^x - 1) / x is",
    image: "",
    options: ["0", "1", "e", "log e"],
    answer: 2 // [cite: 40]
  },
  {
    qNo: 149,
    subject: "maths",
    chapter: "Differentiation",
    question: "If f(x) = |x|, then f'(0) is",
    image: "",
    options: ["0", "1", "-1", "Does not exist"],
    answer: 4 // [cite: 40]
  },
  {
    qNo: 150,
    subject: "maths",
    chapter: "Applications of Derivatives",
    question: "The maximum value of f(x) = sin x + cos x is",
    image: "",
    options: ["1", "2", "√2", "1/√2"],
    answer: 3 // [cite: 40]
  },{
    qNo: 151,
    subject: "maths",
    chapter: "Differential Equations",
    question: "The general solution of the differential equation dy/dx = (1 + y²) / (1 + x²) is",
    image: "",
    options: ["tan⁻¹ y = tan⁻¹ x + c", "tan⁻¹ x + tan⁻¹ y = c", "y = x + c", "y = cx"],
    answer: 1 // Correct options are marked in green in the original paper
  },
  {
    qNo: 152,
    subject: "maths",
    chapter: "Probability",
    question: "If P(A) = 0.4, P(B) = 0.5 and P(A ∩ B) = 0.3, then P(A|B) is",
    image: "",
    options: ["0.6", "0.75", "0.8", "0.5"],
    answer: 1 //
  },
  {
    qNo: 153,
    subject: "maths",
    chapter: "Random Variables",
    question: "For a Poisson distribution with mean m = 2, the probability P(X = 0) is",
    image: "",
    options: ["e⁻²", "2e⁻²", "1/e", "0"],
    answer: 1 //
  },
  {
    qNo: 154,
    subject: "maths",
    chapter: "Measures of Dispersion",
    question: "The variance of the first n natural numbers is",
    image: "",
    options: ["(n² - 1) / 12", "(n² + 1) / 12", "n² / 12", "(n - 1)² / 12"],
    answer: 1 //
  },
  {
    qNo: 155,
    subject: "maths",
    chapter: "Circle",
    question: "The radical axis of the circles x² + y² + 2x + 3y + 1 = 0 and x² + y² + 4x + 3y + 2 = 0 is",
    image: "",
    options: ["2x + 1 = 0", "2x - 1 = 0", "x + 1 = 0", "y + 1 = 0"],
    answer: 1 //
  },
  {
    qNo: 156,
    subject: "maths",
    chapter: "Trigonometry",
    question: "The maximum value of 3 sin x + 4 cos x + 10 is",
    image: "",
    options: ["15", "10", "5", "17"],
    answer: 1 //
  },
  {
    qNo: 157,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "∫ e^x (sin x + cos x) dx =",
    image: "",
    options: ["e^x sin x + c", "e^x cos x + c", "-e^x sin x + c", "e^x tan x + c"],
    answer: 1 //
  },
  {
    qNo: 158,
    subject: "maths",
    chapter: "Matrices",
    question: "If A is a square matrix such that A² = A, then (I + A)³ - 7A is",
    image: "",
    options: ["I", "A", "3I", "7I"],
    answer: 1 //
  },
  {
    qNo: 159,
    subject: "maths",
    chapter: "Coordinate Geometry - Straight Lines",
    question: "The distance of the point (1, 2) from the line 3x + 4y - 6 = 0 is",
    image: "",
    options: ["1", "5", "2", "0.5"],
    answer: 1 //
  },
  {
    qNo: 160,
    subject: "maths",
    chapter: "Theory of Equations",
    question: "If α, β are the roots of ax² + bx + c = 0, then 1/α² + 1/β² =",
    image: "",
    options: ["(b² - 2ac) / c²", "b² / c²", "(b² + 2ac) / a²", "c² / a²"],
    answer: 1 //
  }
];
const set3 = [
  
  { qNo: 1, subject: "physics", chapter: "Units and Measurements", question: "If the percentage error in the measurement of the radius of a sphere is 2%, then the percentage error in its volume is", options: ["2%", "4%", "6%", "8%"], answer: 3 },
  { qNo: 2, subject: "physics", chapter: "Motion in a Straight Line", question: "A body starts from rest and moves with uniform acceleration. If the distance covered in the 5th second is 9 m, the acceleration of the body is", options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"], answer: 2 },
  { qNo: 3, subject: "physics", chapter: "Motion in a Plane", question: "The range of a projectile fired at an angle of 15° is 50 m. If it is fired with the same speed at an angle of 45°, its range will be", options: ["25 m", "50 m", "100 m", "150 m"], answer: 3 },
  { qNo: 4, subject: "physics", chapter: "Laws of Motion", question: "A force of 10 N acts on a body of mass 2 kg for 3 seconds. The change in momentum of the body is", options: ["10 kg m/s", "20 kg m/s", "30 kg m/s", "60 kg m/s"], answer: 3 },
  { qNo: 5, subject: "physics", chapter: "Work, Energy and Power", question: "A body of mass 5 kg is raised vertically through a height of 10 m. The work done is (g = 9.8 m/s²)", options: ["49 J", "490 J", "98 J", "980 J"], answer: 2 },
  { qNo: 6, subject: "physics", chapter: "System of Particles", question: "Two bodies of masses 1 kg and 3 kg have position vectors î + 2ĵ + k̂ and -3î - 2ĵ + k̂ respectively. The center of mass of the system has the position vector", options: ["-2î - ĵ + k̂", "2î + ĵ - k̂", "-î + ĵ + k̂", "-2î - ĵ - k̂"], answer: 1 },
  { qNo: 7, subject: "physics", chapter: "Rotational Motion", question: "A thin uniform rod of length L and mass M has a moment of inertia about an axis passing through its center and perpendicular to its length as", options: ["ML²/12", "ML²/3", "ML²/2", "ML²/6"], answer: 1 },
  { qNo: 8, subject: "physics", chapter: "Gravitation", question: "The acceleration due to gravity at a height h above the surface of the earth (radius R) is g/4. The value of h is", options: ["R", "2R", "R/2", "3R"], answer: 1 },
  { qNo: 9, subject: "physics", chapter: "Mechanical Properties of Solids", question: "A wire of length L and cross-sectional area A is stretched by a force F. If Young's modulus is Y, the elongation ∆L is", options: ["FL/AY", "FA/LY", "FY/AL", "LY/AF"], answer: 1 },
  { qNo: 10, subject: "physics", chapter: "Mechanical Properties of Fluids", question: "The terminal velocity of a small sphere of radius r falling through a viscous liquid is proportional to", options: ["r", "r²", "1/r", "1/r²"], answer: 2 },
  { qNo: 11, subject: "physics", chapter: "Thermal Properties of Matter", question: "A copper rod of length 1 m is heated from 30°C to 130°C. If the coefficient of linear expansion is 1.7 × 10⁻⁵ /°C, the increase in length is", options: ["1.7 mm", "1.7 cm", "0.17 mm", "17 mm"], answer: 1 },
  { qNo: 12, subject: "physics", chapter: "Thermodynamics", question: "In an isothermal process, the internal energy of an ideal gas", options: ["Increases", "Decreases", "Remains constant", "Becomes zero"], answer: 3 },
  { qNo: 13, subject: "physics", chapter: "Kinetic Theory", question: "The average kinetic energy of a gas molecule at temperature T is proportional to", options: ["√T", "T", "T²", "1/T"], answer: 2 },
  { qNo: 14, subject: "physics", chapter: "Oscillations", question: "The time period of a simple pendulum of length L is T. If the length is increased to 4L, the new time period is", options: ["T/2", "2T", "4T", "T/4"], answer: 2 },
  { qNo: 15, subject: "physics", chapter: "Waves", question: "The velocity of sound in a gas is v. If the pressure is doubled keeping the temperature constant, the new velocity will be", options: ["v", "2v", "v/2", "4v"], answer: 1 },
  { qNo: 16, subject: "physics", chapter: "Electrostatics", question: "The electric potential at a distance r from a point charge q is proportional to", options: ["r", "r²", "1/r", "1/r²"], answer: 3 },
  { qNo: 17, subject: "physics", chapter: "Current Electricity", question: "A wire of resistance 10 Ω is stretched to thrice its original length. The new resistance is", options: ["30 Ω", "60 Ω", "90 Ω", "10 Ω"], answer: 3 },
  { qNo: 18, subject: "physics", chapter: "Moving Charges and Magnetism", question: "A circular coil of radius R carries a current I. The magnetic field at its center is", options: ["µ₀I/2R", "µ₀I/R", "µ₀I/4R", "2µ₀I/R"], answer: 1 },
  { qNo: 19, subject: "physics", chapter: "Magnetism and Matter", question: "The magnetic susceptibility of a paramagnetic substance is", options: ["Small and negative", "Small and positive", "Large and positive", "Zero"], answer: 2 },
  { qNo: 20, subject: "physics", chapter: "Electromagnetic Induction", question: "The self-inductance of a solenoid is L. If the number of turns is doubled keeping other parameters constant, the new self-inductance is", options: ["L", "2L", "4L", "L/2"], answer: 3 },
  { qNo: 21, subject: "physics", chapter: "Alternating Current", question: "In a purely inductive AC circuit, the current", options: ["Leads the voltage by 90°", "Lags the voltage by 90°", "Is in phase with voltage", "Lags the voltage by 180°"], answer: 2 },
  { qNo: 22, subject: "physics", chapter: "Electromagnetic Waves", question: "Which of the following has the shortest wavelength?", options: ["Radio waves", "Microwaves", "Gama rays", "X-rays"], answer: 3 },
  { qNo: 23, subject: "physics", chapter: "Ray Optics", question: "The critical angle for a medium of refractive index √2 is", options: ["30°", "45°", "60°", "90°"], answer: 2 },
  { qNo: 24, subject: "physics", chapter: "Wave Optics", question: "In Young's double slit experiment, if the distance between slits is halved, the fringe width", options: ["Is halved", "Is doubled", "Remains same", "Is quadrupled"], answer: 2 },
  { qNo: 25, subject: "physics", chapter: "Dual Nature of Radiation", question: "The de Broglie wavelength of a particle of mass m and kinetic energy K is", options: ["h/√(2mK)", "h/√(mK)", "h/2mK", "√(2mK)/h"], answer: 1 },
  { qNo: 26, subject: "physics", chapter: "Atoms", question: "The radius of the nth orbit in Bohr's model of hydrogen atom is proportional to", options: ["n", "n²", "1/n", "1/n²"], answer: 2 },
  { qNo: 27, subject: "physics", chapter: "Nuclei", question: "The half-life of a radioactive substance is 10 days. The fraction of the substance left after 30 days is", options: ["1/3", "1/4", "1/8", "1/16"], answer: 3 },
  { qNo: 28, subject: "physics", chapter: "Semiconductors", question: "In a p-type semiconductor, the majority charge carriers are", options: ["Electrons", "Holes", "Neutrons", "Protons"], answer: 2 },
  { qNo: 29, subject: "physics", chapter: "Communication Systems", question: "The modulation index for an AM wave with max amplitude 10V and min amplitude 2V is", options: ["0.2", "0.4", "0.66", "0.8"], answer: 3 },
  { qNo: 30, subject: "physics", chapter: "Magnetism", question: "Magnetic induction at 10 cm east of a vertical conductor if it is 20µT due east at 5 cm north", options: ["5µT north", "10µT north", "5µT south", "10µT south"], answer: 4 },
  { qNo: 31, subject: "physics", chapter: "Magnetism", question: "Magnetic field at 20 cm from wire if it is B at 5 cm", options: ["2B", "B/4", "B/2", "B"], answer: 2 },
  { qNo: 32, subject: "physics", chapter: "Magnetism", question: "Zero field point between parallel conductors with 6A and 2A currents (5cm apart)", options: ["0.25 cm from B", "1 cm from B", "1.25 cm from B", "3.75 cm from B"], answer: 3 },
  { qNo: 33, subject: "physics", chapter: "Magnetism", question: "Magnetic induction at centre of square wire (side 2m, current 2A)", options: ["µ₀/2π", "µ₀√2/π", "2√2µ₀/π", "µ₀/√2"], answer: 3 },
  { qNo: 34, subject: "physics", chapter: "Magnetism", question: "Ratio of magnetic field at centre for coils in series (diameters 10cm, 20cm)", options: ["1:2", "2:1", "4:1", "1:4"], answer: 2 },
  { qNo: 35, subject: "physics", chapter: "Magnetism", question: "Work done moving north pole (π Am) around current (10A) in circle (r=10cm)", options: ["40", "55", "60", "65"], answer: 1 },
  { qNo: 36, subject: "physics", chapter: "Magnetism", question: "Magnetic field inside solenoid (L=0.5m, N=500, I=5A)", options: ["6.28", "7.25", "8.00", "8.25"], answer: 1 },
  { qNo: 37, subject: "physics", chapter: "Magnetism", question: "Line integral of induction around conductor with 1/(4π) A current", options: ["4π×10⁻⁷ Wb/m", "10⁻⁷ Wb/m", "16π²×10⁻⁷ Wb/m", "Zero"], answer: 2 },
  { qNo: 38, subject: "physics", chapter: "Work-Energy", question: "Work done by 1200N force sliding stone 10m at 60° to force", options: ["6000√3 J", "6000 J", "12000 J", "8000 J"], answer: 2 },
  { qNo: 39, subject: "physics", chapter: "Work-Energy", question: "Work done by F = 3î - 4ĵ + 5k̂ displacing body from (3,4,6) to (7,2,5)", options: ["15 units", "25 units", "20 units", "10 units"], answer: 1 },
  { qNo: 40, subject: "physics", chapter: "Work-Energy", question: "Work done by F = (6î - 8ĵ) N displacing 4m (X) and 6m (Y)", options: ["72 J", "24 J", "-24 J", "zero"], answer: 3 },
{ qNo: 41, subject: "chemistry", chapter: "Some Basic Concepts of Chemistry", question: "The number of significant figures in 0.0025 is", options: ["2", "3", "4", "5"], answer: 1 },
  { qNo: 42, subject: "chemistry", chapter: "Structure of Atom", question: "The maximum number of electrons in a subshell with l = 3 is", options: ["2", "6", "10", "14"], answer: 4 },
  { qNo: 43, subject: "chemistry", chapter: "Classification of Elements", question: "Which of the following elements has the highest electronegativity?", options: ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"], answer: 1 },
  { qNo: 44, subject: "chemistry", chapter: "Chemical Bonding", question: "The shape of BF₃ molecule is", options: ["Linear", "Tetrahedral", "Trigonal planar", "Pyramidal"], answer: 3 },
  { qNo: 45, subject: "chemistry", chapter: "States of Matter", question: "The value of gas constant R in SI units is", options: ["8.314 J K⁻¹ mol⁻¹", "0.0821 L atm K⁻¹ mol⁻¹", "1.987 cal K⁻¹ mol⁻¹", "8.314 erg K⁻¹ mol⁻¹"], answer: 1 },
  { qNo: 46, subject: "chemistry", chapter: "Thermodynamics", question: "For an isothermal process involving an ideal gas, the change in internal energy (ΔU) is", options: ["Positive", "Negative", "Zero", "Infinite"], answer: 3 },
  { qNo: 47, subject: "chemistry", chapter: "Equilibrium", question: "The pH of a 0.01 M HCl solution is", options: ["1", "2", "3", "7"], answer: 2 },
  { qNo: 48, subject: "chemistry", chapter: "Redox Reactions", question: "The oxidation state of Manganese in KMnO₄ is", options: ["+2", "+4", "+6", "+7"], answer: 4 },
  { qNo: 49, subject: "chemistry", chapter: "Hydrogen", question: "Which of the following is used as a moderator in nuclear reactors?", options: ["H₂O", "D₂O", "H₂O₂", "T₂O"], answer: 2 },
  { qNo: 50, subject: "chemistry", chapter: "s-Block Elements", question: "Which alkali metal is the most powerful reducing agent in aqueous solution?", options: ["Lithium", "Sodium", "Potassium", "Cesium"], answer: 1 },
  { qNo: 51, subject: "chemistry", chapter: "p-Block Elements", question: "The hybridization of Boron in Diborane (B₂H₆) is", options: ["sp", "sp²", "sp³", "dsp²"], answer: 3 },
  { qNo: 52, subject: "chemistry", chapter: "Organic Chemistry Basics", question: "The IUPAC name of CH₃-CH(OH)-CH₂-CHO is", options: ["3-Hydroxybutanal", "2-Hydroxybutanal", "3-Hydroxybutane", "Butan-3-ol-1-al"], answer: 1 },
  { qNo: 53, subject: "chemistry", chapter: "Hydrocarbons", question: "Which of the following is the most stable carbocation?", options: ["(CH₃)₃C⁺", "(CH₃)₂CH⁺", "CH₃CH₂⁺", "CH₃⁺"], answer: 1 },
  { qNo: 54, subject: "chemistry", chapter: "Solid State", question: "The number of atoms per unit cell in a body-centered cubic (BCC) structure is", options: ["1", "2", "4", "6"], answer: 2 },
  { qNo: 55, subject: "chemistry", chapter: "Solutions", question: "An example of a non-ideal solution showing negative deviation from Raoult's Law is", options: ["Benzene + Toluene", "Acetone + CS₂", "Acetone + Chloroform", "Ethanol + Water"], answer: 3 },
  { qNo: 56, subject: "chemistry", chapter: "Electrochemistry", question: "The unit of molar conductivity is", options: ["S cm² mol⁻¹", "S cm mol⁻¹", "S⁻¹ cm² mol⁻¹", "S cm² mol"], answer: 1 },
  { qNo: 57, subject: "chemistry", chapter: "Chemical Kinetics", question: "For a first-order reaction, the half-life period is", options: ["Independent of initial concentration", "Directly proportional to initial concentration", "Inversely proportional to initial concentration", "Proportional to square of concentration"], answer: 1 },
  { qNo: 58, subject: "chemistry", chapter: "Surface Chemistry", question: "Which of the following is an example of an oil-in-water emulsion?", options: ["Milk", "Butter", "Cold cream", "Cod liver oil"], answer: 1 },
  { qNo: 59, subject: "chemistry", chapter: "General Isolation Principles", question: "In the extraction of Copper, the reaction taking place in the Bessemer converter is", options: ["2CuFeS₂ + O₂ → Cu₂S + 2FeS + SO₂", "FeO + SiO₂ → FeSiO₃", "2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂", "2Cu₂O + Cu₂S → 6Cu + SO₂"], answer: 4 },
  { qNo: 60, subject: "chemistry", chapter: "p-Block Elements", question: "The correct order of acidity of oxoacids of phosphorous is", options: ["H₃PO₂ > H₃PO₃ > H₃PO₄", "H₃PO₄ > H₃PO₃ > H₃PO₂", "H₃PO₃ > H₃PO₄ > H₃PO₂", "H₃PO₂ > H₃PO₄ > H₃PO₃"], answer: 1 },
  { qNo: 61, subject: "chemistry", chapter: "d and f-Block Elements", question: "The electronic configuration of Gadolinium (Z=64) is", options: ["[Xe] 4f⁷ 5d¹ 6s²", "[Xe] 4f⁸ 5d⁰ 6s²", "[Xe] 4f⁷ 5d⁰ 6s²", "[Xe] 4f⁶ 5d² 6s²"], answer: 1 },
  { qNo: 62, subject: "chemistry", chapter: "Coordination Compounds", question: "The IUPAC name of [Co(NH₃)₅Cl]Cl₂ is", options: ["Pentaamminechloridocobalt(III) chloride", "Pentaamminechlorocobalt(II) chloride", "Chloropentaamminecobalt(III) chloride", "Pentaamminechloridocobalt(II) chloride"], answer: 1 },
  { qNo: 63, subject: "chemistry", chapter: "Haloalkanes", question: "The reaction of an alkyl halide with sodium in dry ether to give a hydrocarbon is called", options: ["Wurtz reaction", "Fittig reaction", "Frankland reaction", "Sandmeyer reaction"], answer: 1 },
  { qNo: 64, subject: "chemistry", chapter: "Phenols", question: "Phenol on treatment with Br₂ in CS₂ at low temperature gives", options: ["o- and p-Bromophenol", "2,4,6-Tribromophenol", "m-Bromophenol", "Benzene"], answer: 1 },
  { qNo: 65, subject: "chemistry", chapter: "Aldehydes and Ketones", question: "Which of the following does not undergo Cannizzaro reaction?", options: ["Formaldehyde", "Benzaldehyde", "Acetaldehyde", "Trimethylacetaldehyde"], answer: 3 },
  { qNo: 66, subject: "chemistry", chapter: "Carboxylic Acids", question: "The product formed when Benzene reacts with CH₃COCl in the presence of anhydrous AlCl₃ is", options: ["Acetophenone", "Benzophenone", "Chlorobenzene", "Ethylbenzene"], answer: 1 },
  { qNo: 67, subject: "chemistry", chapter: "Amines", question: "Which of the following is the strongest base in aqueous solution?", options: ["(CH₃)₂NH", "CH₃NH₂", "(CH₃)₃N", "NH₃"], answer: 1 },
  { qNo: 68, subject: "chemistry", chapter: "Biomolecules", question: "Which of the following is a non-reducing sugar?", options: ["Sucrose", "Lactose", "Maltose", "Glucose"], answer: 1 },
  { qNo: 69, subject: "chemistry", chapter: "Polymers", question: "The monomer of Natural Rubber is", options: ["Isoprene", "Chloroprene", "Styrene", "Butadiene"], answer: 1 },
  { qNo: 70, subject: "chemistry", chapter: "Everyday Life", question: "Which of the following is a broad-spectrum antibiotic?", options: ["Chloramphenicol", "Penicillin G", "Amoxicillin", "Ofloxacin"], answer: 1 },
  { qNo: 71, subject: "chemistry", chapter: "p-Block Elements", question: "The noble gas which does not form any true chemical compound is", options: ["Helium", "Xenon", "Krypton", "Radon"], answer: 1 },
  { qNo: 72, subject: "chemistry", chapter: "d and f-Block Elements", question: "The transition metal which shows the highest oxidation state is", options: ["Manganese", "Iron", "Chromium", "Osmium"], answer: 4 },
  { qNo: 73, subject: "chemistry", chapter: "Coordination Compounds", question: "The number of geometrical isomers for [Pt(NH₃)₂Cl₂] is", options: ["2", "3", "4", "1"], answer: 1 },
  { qNo: 74, subject: "chemistry", chapter: "Environmental Chemistry", question: "The main greenhouse gas responsible for global warming is", options: ["CO₂", "CH₄", "N₂O", "CFCs"], answer: 1 },
  { qNo: 75, subject: "chemistry", chapter: "Haloalkanes", question: "The major product of the reaction between Propene and HBr in the presence of peroxide is", options: ["1-Bromopropane", "2-Bromopropane", "1,2-Dibromopropane", "2,2-Dibromopropane"], answer: 1 },
  { qNo: 76, subject: "chemistry", chapter: "Thermodynamics", question: "For a spontaneous process at all temperatures, the conditions are", options: ["ΔH < 0, ΔS > 0", "ΔH > 0, ΔS < 0", "ΔH < 0, ΔS < 0", "ΔH > 0, ΔS > 0"], answer: 1 },
  { qNo: 77, subject: "chemistry", chapter: "Equilibrium", question: "The conjugate base of H₂PO₄⁻ is", options: ["H₃PO₄", "P₂O₅", "PO₄³⁻", "HPO₄²⁻"], answer: 4 },
  { qNo: 78, subject: "chemistry", chapter: "Redox Reactions", question: "In the reaction: MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂, the substance oxidized is", options: ["MnO₂", "HCl", "H₂O", "MnCl₂"], answer: 2 },
  { qNo: 79, subject: "chemistry", chapter: "Hydrogen", question: "Temporary hardness of water is due to the presence of", options: ["Magnesium bicarbonate", "Calcium chloride", "Magnesium sulphate", "Calcium sulphate"], answer: 1 },
  { qNo: 80, subject: "chemistry", chapter: "s-Block Elements", question: "Which of the following is known as 'Glauber's salt'?", options: ["MgSO₄·7H₂O", "Na₂SO₄·10H₂O", "FeSO₄·7H₂O", "Na₂CO₃·10H₂O"], answer: 2 },
  { qNo: 81, subject: "mathematics", chapter: "Functions", question: "If a function f: R → R is defined by f(x) = x³ - x, then f is", options: ["one one and onto", "one one but not onto", "onto but not one - one", "neither one one nor onto"], answer: 3 },
  { qNo: 82, subject: "mathematics", chapter: "Functions", question: "If f(x) = √x - 1 and g{f(x)} = x + 2√x + 1, then g(x) =", options: ["(x + 2)²", "(x - 2)²", "(√x + 2)²", "(√x - 2)²"], answer: 1 },
  { qNo: 83, subject: "mathematics", chapter: "Mathematical Induction", question: "For all positive integers 'n', if 3(5^(2n+1)) + 2^(3n+1) is divisible by k, then the number of prime numbers less than or equal to k is", options: ["17", "6", "7", "8"], answer: 3 },
  { qNo: 84, subject: "mathematics", chapter: "Matrices and Determinants", question: "If α, β, γ are the roots of the determinant equation |[1-x, -2, 1], [-2, 4-x, -2], [1, -2, 1-x]| = 0, then αβ + βγ + γα =", options: ["6", "8", "0", "-4"], answer: 3 },
  { qNo: 85, subject: "mathematics", chapter: "Matrices and Determinants", question: "If the determinant of a 3rd order matrix A is K, then the sum of the determinants of the matrices (AAᵀ) and (A - Aᵀ) is", options: ["2K", "0", "K²", "K"], answer: 3 },
  { qNo: 86, subject: "mathematics", chapter: "Matrices and Determinants", question: "While solving a system of linear equations AX = B using Cramer's rule, if Δ = |[1, 1, 1], [2, -1, 2], [-1, 1, 5]|, Δ₁ = |[5, 1, 1], [4, -1, 2], [11, 1, 5]| and X = [α, 2, β]ᵀ, then α² + β² =", options: ["9", "13", "5", "25"], answer: 2 },
  { qNo: 87, subject: "mathematics", chapter: "Complex Numbers", question: "If real parts of √(-5-12i) and √(5+12i) are positive, the real part of √(-8-6i) is negative and a + ib = [√(-5-12i) + √(5+12i)] / √(-8-6i), then 2a + b =", options: ["3", "2", "-3", "-2"], answer: 4 },
  { qNo: 88, subject: "mathematics", chapter: "Complex Numbers", question: "The set of all real values of c for which the equation zz̄ + (4-3i)z̄ + (4+3i)z + c = 0 represents a circle is", options: ["[25, ∞)", "[-5, 5]", "(-∞, -5] ∪ [5, ∞)", "(-∞, 25]"], answer: 4 },
  { qNo: 89, subject: "mathematics", chapter: "Complex Numbers", question: "If Z = x + iy is a complex number, then the number of distinct solutions of the equation z³ + z̄ = 0 is", options: ["1", "3", "Infinite", "5"], answer: 4 },
  { qNo: 90, subject: "mathematics", chapter: "Theory of Equations", question: "If the roots of the quadratic equation x² - 35x + c = 0 are in the ratio 2:3 and c = 6K, then K =", options: ["49", "14", "21", "7"], answer: 1 },
  { qNo: 91, subject: "mathematics", chapter: "Theory of Equations", question: "For real values of x and a, if the expression (x + a) / (2x² - 3x + 1) assumes all real values, then", options: ["a < -1 or a > -1/2", "-1 < a < -1/2", "1/2 < a < 1", "a < 1/2 or a > 1"], answer: 2 },
  { qNo: 92, subject: "mathematics", chapter: "Theory of Equations", question: "If the sum of two roots α, β of the equation x⁴ - x³ - 8x² + 2x + 12 = 0 is zero and γ, δ (γ > δ) are its other roots, then 3γ + 2δ =", options: ["2", "-2", "5", "1"], answer: 4 },
  { qNo: 93, subject: "mathematics", chapter: "Properties of Triangles", question: "If the lengths of the sides of a triangle are 3, 5, 7, then the measure of its greatest angle is", options: ["120°", "90°", "135°", "150°"], answer: 1 },
  { qNo: 94, subject: "mathematics", chapter: "Properties of Triangles", question: "In a triangle ABC, if (a+b+c)(b+c-a) = 3bc, then angle A =", options: ["30°", "45°", "60°", "90°"], answer: 3 },
  { qNo: 95, subject: "mathematics", chapter: "Vector Algebra", question: "If a = 2i + j - k and b = i - 3j + 2k, then the unit vector perpendicular to both a and b is", options: ["(i + 5j + 7k)/√75", "(-i - 5j - 7k)/√75", "(i - 5j - 7k)/√75", "(-i + 5j + 7k)/√75"], answer: 2 },
  { qNo: 96, subject: "mathematics", chapter: "Vector Algebra", question: "If the volume of the parallelepiped formed by vectors i+j, j+k and k+λi is 1, then λ =", options: ["0", "1", "-1", "2"], answer: 1 },
  { qNo: 97, subject: "mathematics", chapter: "Measures of Dispersion", question: "The variance of first 'n' even natural numbers is", options: ["(n²-1)/4", "(n²-1)/3", "(n²+1)/3", "n²/3"], answer: 2 },
  { qNo: 98, subject: "mathematics", chapter: "Probability", question: "Three dice are thrown. The probability of getting a total of 15 is", options: ["5/108", "5/216", "10/216", "1/18"], answer: 3 },
  { qNo: 99, subject: "mathematics", chapter: "Probability", question: "If A and B are two events such that P(A) = 0.4, P(B) = 0.8 and P(B|A) = 0.6, then P(A|B) =", options: ["0.3", "0.25", "0.4", "0.5"], answer: 1 },
  { qNo: 100, subject: "mathematics", chapter: "Random Variables", question: "A random variable X has the probability distribution: X=x: 0, 1, 2; P(X=x): 0.2, 0.5, 0.3. Then E(X) =", options: ["1.1", "1.0", "1.2", "0.9"], answer: 1 },
  { qNo: 101, subject: "mathematics", chapter: "Locus", question: "The locus of a point which moves such that its distance from (1, 2) is always 5 units is", options: ["x² + y² - 2x - 4y - 20 = 0", "x² + y² + 2x + 4y - 20 = 0", "x² + y² - 2x - 4y + 20 = 0", "x² + y² - 4x - 2y - 20 = 0"], answer: 1 },
  { qNo: 102, subject: "mathematics", chapter: "Transformation of Axes", question: "When the axes are rotated through an angle of 45°, the transformed equation of x² - y² = a² is", options: ["XY = a²/2", "2XY = a²", "XY = -a²/2", "X² + Y² = a²"], answer: 3 },
  { qNo: 103, subject: "mathematics", chapter: "Straight Lines", question: "The value of k for which the lines 2x + 3y + 4 = 0 and 4x + ky + 8 = 0 are coincident is", options: ["3", "6", "2", "8"], answer: 2 },
  { qNo: 104, subject: "mathematics", chapter: "Straight Lines", question: "The perpendicular distance from the point (3, 4) to the line 3x - 4y + 12 = 0 is", options: ["1 unit", "2 units", "5 units", "0 units"], answer: 1 },
  { qNo: 105, subject: "mathematics", chapter: "Pair of Straight Lines", question: "The angle between the lines represented by x² + 2xy sec θ + y² = 0 is", options: ["θ", "2θ", "π - θ", "π/2"], answer: 2 },
  { qNo: 106, subject: "mathematics", chapter: "Three Dimensional Geometry", question: "The direction cosines of the line joining the points (1, 2, 3) and (2, 4, 5) are", options: ["(1, 2, 2)/3", "(1, 2, 2)", "(-1, -2, -2)/3", "(1, 1, 1)/√3"], answer: 1 },
  { qNo: 107, subject: "mathematics", chapter: "The Plane", question: "The equation of the plane passing through (1, 1, 1) and parallel to the plane 2x + 3y + 4z = 5 is", options: ["2x + 3y + 4z = 9", "2x + 3y + 4z = 0", "2x + 3y + 4z = 1", "x + y + z = 3"], answer: 1 },
  { qNo: 108, subject: "mathematics", chapter: "Limits", question: "The value of lim (x→0) (sin 5x / sin 3x) is", options: ["5/3", "3/5", "1", "0"], answer: 1 },
  { qNo: 109, subject: "mathematics", chapter: "Continuity", question: "If f(x) = (k sin x)/x for x ≠ 0 and f(0) = 2 is continuous at x = 0, then k =", options: ["1", "2", "0", "-2"], answer: 2 },
  { qNo: 110, subject: "mathematics", chapter: "Differentiation", question: "If y = log(sec x + tan x), then dy/dx =", options: ["sec x", "tan x", "sec² x", "1/sec x"], answer: 1 },
  { qNo: 111, subject: "mathematics", chapter: "Differentiation", question: "The derivative of sin⁻¹(2x / (1 + x²)) with respect to tan⁻¹ x is", options: ["1", "2", "1/2", "0"], answer: 2 },
  { qNo: 112, subject: "mathematics", chapter: "Partial Differentiation", question: "If u = x² + y², then x(∂u/∂x) + y(∂u/∂y) =", options: ["u", "2u", "3u", "0"], answer: 2 },
  { qNo: 113, subject: "mathematics", chapter: "Errors and Approximations", question: "The approximate value of √25.2 is", options: ["5.02", "5.04", "5.01", "5.1"], answer: 1 },
  { qNo: 114, subject: "mathematics", chapter: "Tangents and Normals", question: "The slope of the tangent to the curve y = x³ - x at x = 2 is", options: ["11", "12", "10", "3"], answer: 1 },
  { qNo: 115, subject: "mathematics", chapter: "Mean Value Theorems", question: "The value of 'c' in Rolle's Theorem for f(x) = x² - 4x + 3 on [1, 3] is", options: ["2", "1.5", "2.5", "0"], answer: 1 },
  { qNo: 116, subject: "mathematics", chapter: "Maxima and Minima", question: "The minimum value of f(x) = x + 1/x for x > 0 is", options: ["1", "2", "0", "4"], answer: 2 },
  { qNo: 117, subject: "mathematics", chapter: "Indefinite Integration", question: "The integral ∫ (1 / (1 + cos x)) dx =", options: ["tan(x/2) + c", "cot(x/2) + c", "sec(x/2) + c", "sin(x/2) + c"], answer: 1 },
  { qNo: 118, subject: "mathematics", chapter: "Indefinite Integration", question: "∫ eˣ(sin x + cos x) dx =", options: ["eˣ sin x + c", "eˣ cos x + c", "-eˣ sin x + c", "-eˣ cos x + c"], answer: 1 },
  { qNo: 119, subject: "mathematics", chapter: "Definite Integration", question: "The value of ∫₀¹ (x / (1 + x²)) dx is", options: ["log 2", "(1/2) log 2", "π/4", "1"], answer: 2 },
  { qNo: 120, subject: "mathematics", chapter: "Definite Integration", question: "∫₀^(π/2) (sin x / (sin x + cos x)) dx =", options: ["π/2", "π/4", "π", "0"], answer: 2 },
  { qNo: 121, subject: "mathematics", chapter: "Definite Integration", question: "The area of the region bounded by the curve y = x² and the line y = 4 is", options: ["32/3", "16/3", "8/3", "4/3"], answer: 1 },
  { qNo: 122, subject: "mathematics", chapter: "Differential Equations", question: "The order of the differential equation (d²y/dx²)³ + (dy/dx)⁴ + y⁵ = 0 is", options: ["3", "2", "4", "5"], answer: 2 },
  { qNo: 123, subject: "mathematics", chapter: "Differential Equations", question: "The general solution of the differential equation dy/dx = y/x is", options: ["y = cx", "xy = c", "x + y = c", "x² + y² = c"], answer: 1 },
  { qNo: 124, subject: "mathematics", chapter: "Trigonometry", question: "The value of sin 15° is", options: ["(√3-1)/2√2", "(√3+1)/2√2", "(1-√3)/2√2", "√3/2"], answer: 1 },
  { qNo: 125, subject: "mathematics", chapter: "Trigonometry", question: "If tan A = 1/2 and tan B = 1/3, then A + B =", options: ["π/4", "π/2", "π/3", "π/6"], answer: 1 },
  { qNo: 126, subject: "mathematics", chapter: "Trigonometric Equations", question: "The general solution of sin x = 1/2 is", options: ["nπ + (-1)ⁿ π/6", "nπ + (-1)ⁿ π/3", "2nπ ± π/6", "nπ + π/6"], answer: 1 },
  { qNo: 127, subject: "mathematics", chapter: "Inverse Trigonometric Functions", question: "The value of cos(cos⁻¹(-1/2) + sin⁻¹(-1/2)) is", options: ["0", "1", "-1", "1/2"], answer: 1 },
  { qNo: 128, subject: "mathematics", chapter: "Hyperbolic Functions", question: "The value of cosh² x - sinh² x is", options: ["1", "0", "-1", "2"], answer: 1 },
  { qNo: 129, subject: "mathematics", chapter: "Properties of Triangles", question: "In a triangle ABC, if a=2, b=3 and sin A = 2/3, then B =", options: ["90°", "60°", "45°", "30°"], answer: 1 },
  { qNo: 130, subject: "mathematics", chapter: "Vector Algebra", question: "The angle between the vectors i + j and j + k is", options: ["60°", "30°", "45°", "90°"], answer: 1 },
  { qNo: 131, subject: "mathematics", chapter: "Vector Algebra", question: "If a and b are unit vectors and θ is the angle between them, then |a + b| = 1 implies θ =", options: ["2π/3", "π/3", "π/2", "π/4"], answer: 1 },
  { qNo: 132, subject: "mathematics", chapter: "Coordinate Geometry", question: "The distance between the points (1, 2) and (4, 6) is", options: ["5", "7", "√7", "4"], answer: 1 },
  { qNo: 133, subject: "mathematics", chapter: "Straight Lines", question: "The slope of the line perpendicular to 3x - 4y + 5 = 0 is", options: ["-4/3", "4/3", "3/4", "-3/4"], answer: 1 },
  { qNo: 134, subject: "mathematics", chapter: "Circles", question: "The center of the circle x² + y² - 4x + 6y - 12 = 0 is", options: ["(2, -3)", "(-2, 3)", "(4, -6)", "(-4, 6)"], answer: 1 },
  { qNo: 135, subject: "mathematics", chapter: "Circles", question: "The radius of the circle x² + y² = 25 is", options: ["5", "25", "√5", "10"], answer: 1 },
  { qNo: 136, subject: "mathematics", chapter: "Parabola", question: "The focus of the parabola y² = 12x is", options: ["(3, 0)", "(0, 3)", "(-3, 0)", "(0, -3)"], answer: 1 },
  { qNo: 137, subject: "mathematics", chapter: "Ellipse", question: "The eccentricity of the ellipse x²/25 + y²/16 = 1 is", options: ["3/5", "4/5", "9/25", "1/2"], answer: 1 },
  { qNo: 138, subject: "mathematics", chapter: "Hyperbola", question: "The length of the latus rectum of x²/9 - y²/16 = 1 is", options: ["32/3", "16/3", "8/3", "4/3"], answer: 1 },
  { qNo: 139, subject: "mathematics", chapter: "Three Dimensional Geometry", question: "The distance of the point (1, 2, 3) from the origin is", options: ["√14", "14", "6", "√6"], answer: 1 },
  { qNo: 140, subject: "mathematics", chapter: "Limits", question: "The value of lim (x→2) (x² - 4)/(x - 2) is", options: ["4", "2", "0", "∞"], answer: 1 },
  { qNo: 141, subject: "mathematics", chapter: "Differentiation", question: "If y = sin(x²), then dy/dx =", options: ["2x cos(x²)", "cos(x²)", "2 sin x cos x", "-2x cos(x²)"], answer: 1 },
  { qNo: 142, subject: "mathematics", chapter: "Applications of Derivatives", question: "The rate of change of the area of a circle with respect to its radius r when r = 5 cm is", options: ["10π", "5π", "25π", "20π"], answer: 1 },
  { qNo: 143, subject: "mathematics", chapter: "Integration", question: "∫ tan x dx =", options: ["log |sec x| + c", "log |sin x| + c", "sec² x + c", "-log |cos x| + c"], answer: 1 },
  { qNo: 144, subject: "mathematics", chapter: "Integration", question: "∫ (1 / √(1 - x²)) dx =", options: ["sin⁻¹ x + c", "cos⁻¹ x + c", "tan⁻¹ x + c", "log x + c"], answer: 1 },
  { qNo: 145, subject: "mathematics", chapter: "Definite Integration", question: "∫₀^(π/2) cos x dx =", options: ["1", "0", "-1", "π/2"], answer: 1 },
  { qNo: 146, subject: "mathematics", chapter: "Differential Equations", question: "The integrating factor of dy/dx + y/x = x² is", options: ["x", "log x", "eˣ", "1/x"], answer: 1 },
  { qNo: 147, subject: "mathematics", chapter: "Probability", question: "If P(A) = 1/2 and P(B) = 1/3, and A, B are independent, then P(A ∩ B) =", options: ["1/6", "5/6", "1/2", "1/3"], answer: 1 },
  { qNo: 148, subject: "mathematics", chapter: "Statistics", question: "The mean of first 5 prime numbers is", options: ["5.6", "5", "6", "4.8"], answer: 1 },
  { qNo: 149, subject: "mathematics", chapter: "Matrices", question: "If A is a square matrix such that A² = A, then (I + A)³ - 7A =", options: ["I", "A", "I - A", "3A"], answer: 1 },
  { qNo: 150, subject: "mathematics", chapter: "Trigonometry", question: "The maximum value of 3 sin x + 4 cos x is", options: ["5", "7", "1", "25"], answer: 1 },
  { qNo: 151, subject: "mathematics", chapter: "Functions", question: "The domain of the function f(x) = 1/√(x-1) is", options: ["(1, ∞)", "[1, ∞)", "R", "R - {1}"], answer: 1 },
  { qNo: 152, subject: "mathematics", chapter: "Complex Numbers", question: "The argument of the complex number 1 + i is", options: ["π/4", "π/2", "π/3", "π/6"], answer: 1 },
  { qNo: 153, subject: "mathematics", chapter: "Quadratic Equations", question: "The roots of x² - 5x + 6 = 0 are", options: ["2, 3", "-2, -3", "1, 6", "-1, -6"], answer: 1 },
  { qNo: 154, subject: "mathematics", chapter: "Sequences and Series", question: "The 10th term of the AP 2, 5, 8, ... is", options: ["29", "27", "31", "32"], answer: 1 },
  { qNo: 155, subject: "mathematics", chapter: "Permutations and Combinations", question: "The value of ⁿCᵣ + ⁿCᵣ₋₁ is", options: ["ⁿ⁺¹Cᵣ", "ⁿCᵣ₊₁", "ⁿ⁺¹Cᵣ₋₁", "2ⁿCᵣ"], answer: 1 },
  { qNo: 156, subject: "mathematics", chapter: "Binomial Theorem", question: "The number of terms in the expansion of (x + y)¹⁰ is", options: ["11", "10", "9", "12"], answer: 1 },
  { qNo: 157, subject: "mathematics", chapter: "Vector Algebra", question: "The projection of vector a on b is", options: ["(a·b)/|b|", "(a·b)/|a|", "a·b", "|a||b|"], answer: 1 },
  { qNo: 158, subject: "mathematics", chapter: "Probability", question: "A card is drawn from a pack of 52. The probability it is a king is", options: ["1/13", "1/52", "4/13", "1/4"], answer: 1 },
  { qNo: 159, subject: "mathematics", chapter: "Mathematical Logic", question: "The negation of 'p ∨ q' is", options: ["~p ∧ ~q", "~p ∨ ~q", "p ∧ q", "~p ∧ q"], answer: 1 },
  { qNo: 160, subject: "mathematics", chapter: "Linear Programming", question: "The objective function in LPP is always", options: ["Linear", "Quadratic", "Cubic", "Constant"], answer: 1 }
];
const set4 = [{
    qNo: 1,
    subject: "physics",
    chapter: "Units and Measurements",
    question: "The number of significant figures in 4.870 m is",
    image: "",
    options: ["3", "4", "2", "1"],
    answer: 2
  },
  {
    qNo: 2,
    subject: "physics",
    chapter: "Work, Energy and Power",
    question: "A constant power of 7 watt is applied on a toy car of mass 15kg. The distance travelled by the car when its velocity increases from 3ms^–1 to 5 ms^–1 is.",
    image: "",
    options: ["56m", "7m", "61m", "70m"],
    answer: 4
  },
  {
    qNo: 3,
    subject: "physics",
    chapter: "Motion in a Plane",
    question: "The resultant of two vectors A and B is perpendicular to vector A and the resultant magnitude is equal to half of the magnitude of B, then the angle between A and B is",
    image: "",
    options: ["30°", "60°", "150°", "120°"],
    answer: 3
  },
  {
    qNo: 4,
    subject: "physics",
    chapter: "Motion in a Plane",
    question: "At any instant 't' the vertical distance 'Y' and horizontal distance 'X' of a projectile are given by 2Y = 6t - gt² and X = 4t. The initial velocity of projectile is",
    image: "",
    options: ["3 ms⁻¹", "4 ms⁻¹", "5 ms⁻¹", "6 ms⁻¹"],
    answer: 3
  },
  {
    qNo: 5,
    subject: "physics",
    chapter: "Laws of Motion",
    question: "A lorry is moving on a smooth circular path of radius 50 m with a velocity of 20 ms⁻¹. Then the banking angle of the road is (g=10 ms⁻²)",
    image: "",
    options: ["tan⁻¹(5/4)", "tan⁻¹(4/5)", "tan⁻¹(2/5)", "tan⁻¹(5/2)"],
    answer: 2
  },
  {
    qNo: 6,
    subject: "physics",
    chapter: "Laws of Motion",
    question: "A body of mass 1 kg is moving with a velocity 10 ms⁻¹ due to a constant force on a horizontal rough surface having coefficient of kinetic friction 0.4. If the constant force is removed, the body comes to rest in a time (g=10 ms⁻²)",
    image: "",
    options: ["2.5 s", "4 s", "0.4 s", "0.25 s"],
    answer: 1
  },
  {
    qNo: 7,
    subject: "physics",
    chapter: "Work, Energy and Power",
    question: "A ball of mass 10 g is allowed to fall down from 10 m height. After collision with the ground if 50% of its energy is lost, then the height reached by the ball is",
    image: "",
    options: ["4 m", "6 m", "5 m", "7 m"],
    answer: 3
  },
  {
    qNo: 8,
    subject: "physics",
    chapter: "Systems of Particles and Rotational Motion",
    question: "A bomb at rest explodes into three pieces of equal masses. If two pieces move perpendicular to each other, each with a speed v then the speed of the third piece is",
    image: "",
    options: ["v", "v/√2", "v√2", "2v"],
    answer: 3
  },
  {
    qNo: 9,
    subject: "physics",
    chapter: "Systems of Particles and Rotational Motion",
    question: "A body rotating with uniform acceleration about its geometrical axis makes 8 rotations in the first 2 seconds. The number of rotations the body makes in the next 3 seconds is (Initially the body is at rest)",
    image: "",
    options: ["50", "25", "42", "21"],
    answer: 3
  },
  {
    qNo: 10,
    subject: "physics",
    chapter: "Systems of Particles and Rotational Motion",
    question: "A solid sphere is pushed on a horizontal surface such that it slides with a speed 3.5 ms⁻¹ initially without rolling. The sphere will start rolling without slipping when its velocity becomes",
    image: "",
    options: ["2.5 ms⁻¹", "5 ms⁻¹", "3.5 ms⁻¹", "7 ms⁻¹"],
    answer: 1
  },
  {
    qNo: 11,
    subject: "physics",
    chapter: "Oscillations",
    question: "The mechanical energy of a damped oscillator becomes half of its initial energy in 4 seconds. In another t seconds its mechanical energy becomes 12.5% of its initial mechanical energy. Then t =",
    image: "",
    options: ["4 s", "8 s", "12 s", "16 s"],
    answer: 2
  },
  {
    qNo: 12,
    subject: "physics",
    chapter: "Oscillations",
    question: "When an external force with angular frequency ω_d acts on a system of natural angular frequency ω, the system oscillates with angular frequency ω_d. The condition for the amplitude of oscillations to be maximum is",
    image: "",
    options: ["ω_d = 2ω", "ω_d = ω", "ω_d = ω/2", "ω_d = 3ω"],
    answer: 2
  },
  {
    qNo: 13,
    subject: "physics",
    chapter: "Gravitation",
    question: "A uniform solid sphere of mass M and radius 'a' is surrounded by a concentric uniform thin spherical shell of mass 0.5M and radius 1.5a. The gravitational potential energy of a unit mass kept at a distance of 2.5a from the center is",
    image: "",
    options: ["-3GM/(5a)", "3GM/(5a)", "2GM/(5a)", "-2GM/(5a)"],
    answer: 1
  },
  {
    qNo: 14,
    subject: "physics",
    chapter: "Mechanical Properties of Solids",
    question: "A cylindrical rod made of aluminum has length 1 meter and diameter of 10 cm. The rod is subjected to a tensile force of 100 kN. The elongation in the rod is (Young's modulus of aluminum = 70 GPa)",
    image: "",
    options: ["0.81×10⁻⁴ m", "2×10⁻⁴ m", "0.2×10⁻⁴ m", "1.81×10⁻⁴ m"],
    answer: 4
  },
  {
    qNo: 15,
    subject: "physics",
    chapter: "Mechanical Properties of Fluids",
    question: "A large open top water tank is completely filled with water. A hole of diameter 4 mm is made 10 m below the water level. The flow rate of water through the hole is (g=10 ms⁻²)",
    image: "",
    options: ["14.14×10⁻⁶ m³s⁻¹", "2.1×10⁻⁶ m³s⁻¹", "1.77×10⁻⁶ m³s⁻¹", "0.177×10⁻⁶ m³s⁻¹"],
    answer: 4
  },
  {
    qNo: 16,
    subject: "physics",
    chapter: "Thermal Properties of Matter",
    question: "The phenomena of lowering freezing point of water by the application of pressure is known as",
    image: "",
    options: ["Sublimation", "Regelation", "Precipitation", "Crystallization"],
    answer: 2
  },
  {
    qNo: 17,
    subject: "physics",
    chapter: "Thermal Properties of Matter",
    question: "A steel ball of mass 200 g falls freely from a height of 20 m and bounces to a height of 10.8 m from the ground. If the energy lost in this process is absorbed by the ball, the rise in its temperature is (g=10 ms⁻², specific heat capacity of steel is 460 Jkg⁻¹K⁻¹)",
    image: "",
    options: ["0.1 °C", "1 °C", "0.2 °C", "2 °C"],
    answer: 3
  },
  {
    qNo: 18,
    subject: "physics",
    chapter: "Thermodynamics",
    question: "A work of 166.28 J is done to adiabatically compress one mole of a gas. If the increase in the temperature of the gas is 8 °C, the gas is (R = 8.314 J mol⁻¹ K⁻¹)",
    image: "",
    options: ["monatomic", "diatomic", "polyatomic", "mixture of diatomic and polyatomic"],
    answer: 2
  },
  {
    qNo: 19,
    subject: "physics",
    chapter: "Thermodynamics",
    question: "In a Carnot's engine, as the gas absorbs heat energy from the source, then the temperature of the source",
    image: "",
    options: ["decreases", "increases", "remains constant", "becomes zero"],
    answer: 3
  },
  {
    qNo: 20,
    subject: "physics",
    chapter: "Kinetic Theory of Gases",
    question: "If the rms speeds of helium and oxygen are equal, then the ratio of the temperatures of helium and oxygen is",
    image: "",
    options: ["1:8", "2:1", "1:4", "4:1"],
    answer: 1
  },
  {
    qNo: 21,
    subject: "physics",
    chapter: "Waves",
    question: "The ratio of radii of two wires is 1:2 and the density of their materials are in the ratio 1:4. If same tension is applied to both the wires then the ratio of the speed of transverse waves produced in them is",
    image: "",
    options: ["1:16", "16:1", "1:4", "4:1"],
    answer: 4
  },
  {
    qNo: 22,
    subject: "physics",
    chapter: "Ray Optics and Optical Instruments",
    question: "The frequency of a light ray is 6×10¹⁴ Hz. Its frequency when it propagates in a medium of refractive index 1.5, will be",
    image: "",
    options: ["1.67×10¹⁴ Hz", "9.10×10¹⁴ Hz", "6×10¹⁴ Hz", "4×10¹⁴ Hz"],
    answer: 3
  },
  {
    qNo: 23,
    subject: "physics",
    chapter: "Wave Optics",
    question: "Two coherent light sources having intensity in the ratio 2x produce an interference pattern. Then the value of (I_max - I_min)/(I_max + I_min) will be",
    image: "",
    options: ["(2√(2x))/(x+1)", "√(2x)/(x+1)", "(2√(2x))/(x+1)", "√(2x)/(x+1)"],
    answer: 3
  },
  {
    qNo: 24,
    subject: "physics",
    chapter: "Electric Charges and Fields",
    question: "Two charges Q and 4Q are separated by a distance of 6 cm. The distance of the point from 4Q at which net electric field is zero is",
    image: "",
    options: ["2 cm", "6 cm", "8 cm", "4 cm"],
    answer: 4
  },
  {
    qNo: 25,
    subject: "physics",
    chapter: "Electrostatic Potential and Capacitance",
    question: "Inside a charged hollow sphere, at any point the electric field (E) and potential (V) are",
    image: "",
    options: ["V=0 and E=0", "V is constant and E=0", "V=0 and E is constant", "V is constant and E is constant"],
    answer: 2
  },
  {
    qNo: 26,
    subject: "physics",
    chapter: "Thermodynamics",
    question: "Two heat engines X and Y of same efficiency are connected in series in such a way that the sink of X works as source of Y. X receives heat at 900 K and rejects some heat to its sink at T K and in turn Y rejects heat to its sink at 400 K, then the temperature T is",
    image: "",
    options: ["550 K", "600 K", "650 K", "700 K"],
    answer: 2
  },
  {
    qNo: 27,
    subject: "physics",
    chapter: "Current Electricity",
    question: "Two metal wires of same length, same area of cross-section have conductivities of their material σ₁ and σ₂. If they are connected in series, the effective conductivity is",
    image: "",
    options: ["(σ₁σ₂)/(σ₁+σ₂)", "(2σ₁σ₂)/(σ₁+σ₂)", "(σ₁σ₂)/(σ₁-σ₂)", "(2σ₁σ₂)/(σ₁-σ₂)"],
    answer: 2
  },
  {
    qNo: 28,
    subject: "physics",
    chapter: "Ray Optics and Optical Instruments",
    question: "When an object is moved along the principle axis of a concave mirror placed in air, the image coincides with the object if the object is 50 cm from the mirror. If the mirror is placed at a depth of 20 cm in a transparent medium, the image coincides with the object when the object is 40 cm from the mirror. The refractive index of the liquid is",
    image: "",
    options: ["5/4", "4/3", "3/2", "5/3 "],
    answer: 3
  },
  {
    qNo: 29,
    subject: "physics",
    chapter: "Moving Charges and Magnetism",
    question: "If 'q' is electric charge, B is magnetic field, 'R' is the dee radius and 'm' is the mass of ions, the kinetic energy of the ions in cyclotron is given by",
    image: "",
    options: ["qBR/(2m)", "qBR/m", "q²B²R²/(4πm)", "q²B²R²/(2m)"],
    answer: 4
  },
  {
    qNo: 30,
    subject: "physics",
    chapter: "Moving Charges and Magnetism",
    question: "Curl the palm of your right hand around the circular wire with the fingers pointing in the direction of current and the thumb gives the direction of the magnetic field. In this case the upper side of the loop may be thought of as",
    image: "",
    options: ["direction of current", "south pole", "north pole", "direction of electric field"],
    answer: 3
  },
  {
    qNo: 31,
    subject: "physics",
    chapter: "Magnetism and Matter",
    question: "The Curie temperature Tc represents",
    image: "",
    options: ["temperature of transition from paramagnetic to ferromagnetic", "temperature of transition from paramagnetic to diamagnetic", "temperature of transition from ferromagnetic to paramagnetic", "temperature of transition from diamagnetic to paramagnetic"],
    answer: 3
  },
  {
    qNo: 32,
    subject: "physics",
    chapter: "Alternating Current",
    question: "A resistor of 100 Ω, an inductor of 25/π² mH and a capacitor of 0.1 μF are connected in series to an ac source. The impedance of the circuit is minimum for a frequency of",
    image: "",
    options: ["5 kHz", "10 kHz", "15 kHz", "20 kHz"],
    answer: 2
  },
  {
    qNo: 33,
    subject: "physics",
    chapter: "Electromagnetic Waves",
    question: "The electric field in NC⁻¹ of an electromagnetic wave is E = 36√π Sin(ωt - kx). The average energy density of the electromagnetic wave due to the electric field is (1/(4πε₀) = 9×10⁹ Nm²C⁻²)",
    image: "",
    options: ["36×10⁻⁹ Jm⁻³", "18×10⁻⁹ Jm⁻³", "36×10⁻⁷ Jm⁻³", "18×10⁻⁷ Jm⁻³"],
    answer: 2
  },
  {
    qNo: 34,
    subject: "physics",
    chapter: "Dual Nature of Radiation and Matter",
    question: "When light of wavelength λ incidents on a photosensitive material, photoelectrons are emitted. If the wavelength of the incident light is reduced by 50%, the maximum kinetic energy of the emitted photoelectrons becomes 3 times the initial maximum kinetic energy. The work function of the material is (h - Planck's constant, c - Speed of light in vacuum)",
    image: "",
    options: ["hc/(2λ)", "hc/λ", "2hc/λ", "hc/(3λ)"],
    answer: 1
  },
  {
    qNo: 35,
    subject: "physics",
    chapter: "Atoms",
    question: "The total energy of an electron in an orbit of hydrogen atom is E. The potential energy of the electron in the same orbit is",
    image: "",
    options: ["E", "E/2", "2E", "3E"],
    answer: 3
  },
  {
    qNo: 36,
    subject: "physics",
    chapter: "Nuclei",
    question: "Positron is the antiparticle of",
    image: "",
    options: ["proton", "electron", "neutron", "photon"],
    answer: 2
  },
  {
    qNo: 37,
    subject: "physics",
    chapter: "Wave Optics",
    question: "In Young’s double slit experiment, light of wavelength 5900 Å is used. When the slits are 2 mm apart, the fringe width is 1.2 mm. If the slit separation is increased to one and half times the previous value, then the fringe width will be",
    image: "",
    options: ["0.9mm", "0.8mm", "1.8mm", "1.6mm"],
    answer: 2
  },
  {
    qNo: 38,
    subject: "physics",
    chapter: "Semiconductor Electronics",
    question: "In a transistor amplifier, the voltage gain is",
    image: "",
    options: ["same for all frequencies", "high for high frquencies and low for low frequencies", "low for high frquencies and high for low frequencies", "low for high and low frquencies and constant at mid frequencies"],
    answer: 4
  },
  {
    qNo: 39,
    subject: "physics",
    chapter: "Communication Systems",
    question: "The radio horizon of the transmission of an antenna placed on 20th floor in a shopping mall, where the height of each floor is 2 m is (Radius of earth is 6.4×10⁶m)",
    image: "",
    options: ["22.6 km", "45 km", "36 km", "67.5 km"],
    answer: 1
  },
  {
    qNo: 40,
    subject: "physics",
    chapter: "Electromagnetic Induction",
    question: "Physically, the self-inductance plays the role of ",
    image: "",
    options: ["inertia", "kinetic energy", "potential energy", "velocity"],
    answer: 1
  },{
    qNo: 41,
    subject: "chemistry",
    chapter: "Structure of Atom",
    question: "Identify the region of spectral lines of electromagnetic spectrum, when electron transitions takes place from higher energy level to n=3,4,5 in atomic spectrum of hydrogen is",
    image: "",
    options: ["Ultraviolet", "Visible", "Infrared", "Microwave"],
    answer: 3
  },
  {
    qNo: 42,
    subject: "chemistry",
    chapter: "Structure of Atom",
    question: "Maximum number of electrons theoretically possible for an orbit with principal quantum number n = 6 in an atom is",
    image: "",
    options: ["27", "98", "72", "50"],
    answer: 3
  },
  {
    qNo: 43,
    subject: "chemistry",
    chapter: "Classification of Elements and Periodicity",
    question: "Which of the following statements are correct? I. P is having least negative electron gain enthalpy among P, S, Cl, and F. II. In Eu, Yb Lanthanoid contraction is not observed. III. Ce(OH)₃ is most basic among lanthanoid hydroxides. IV. The radii of Na and Na⁺ are 95 pm, 186 pm respectively.",
    image: "",
    options: ["I, III, IV only", "II, IV only", "I, III only", "I, II, III only"],
    answer: 4
  },
  {
    qNo: 44,
    subject: "chemistry",
    chapter: "Classification of Elements and Periodicity",
    question: "The correct order of electron gain enthalpy of N, O, Cl, Al is",
    image: "",
    options: ["Cl < N < O < Al", "Al < N < O < Cl", "O < N < Al < Cl", "N < O < Cl < Al"],
    answer: 2
  },
  {
    qNo: 45,
    subject: "chemistry",
    chapter: "Chemical Bonding and Molecular Structure",
    question: "The correct order of bond enthalpy of given molecules is",
    image: "",
    options: ["O₂ < N₂ < H₂", "N₂ < O₂ < H₂", "H₂ < N₂ < O₂", "H₂ < O₂ < N₂"],
    answer: 4
  },
  {
    qNo: 46,
    subject: "chemistry",
    chapter: "Chemical Bonding and Molecular Structure",
    question: "The number of bond pairs of electrons and total number of lone pairs of electrons in XeOF₄ are respectively",
    image: "",
    options: ["6, 10", "5, 15", "5, 10", "6, 15"],
    answer: 4
  },
  {
    qNo: 47,
    subject: "chemistry",
    chapter: "States of Matter",
    question: "At T(K), an ideal gas (Z) present in V L flask exerted a pressure of 16.4 atm. Its concentration is 1 mol L⁻¹. What is the value of T in K?",
    image: "",
    options: ["100", "400", "300", "200"],
    answer: 4
  },
  {
    qNo: 48,
    subject: "chemistry",
    chapter: "States of Matter",
    question: "At 300 K, the following graph is obtained for one mole of an ideal gas. If its pressure is 10 atm, slope = 1.1, then its volume (in L) will be",
    image: "",
    options: ["0.11", "1.1", "2.0", "4.0"],
    answer: 1
  },
  {
    qNo: 49,
    subject: "chemistry",
    chapter: "Redox Reactions",
    question: "What are x, y and z respectively in the following reaction? xFe²⁺(aq) + yH⁺(aq) + zCr₂O₇²⁻(aq) → (y/2)H₂O(l) + xFe³⁺(aq) + 2zCr³⁺(aq)",
    image: "",
    options: ["14, 1, 6", "14, 6, 1", "6, 1, 14", "6, 14, 1"],
    answer: 4
  },
  {
    qNo: 50,
    subject: "chemistry",
    chapter: "Thermodynamics",
    question: "If the enthalpy and entropy change for a reaction at 298 K are -145 kJ mol⁻¹ and -650 J K⁻¹ mol⁻¹ respectively, which one of the following statements is correct?",
    image: "",
    options: ["ΔG = -50 kJ mol⁻¹, the reaction is spontaneous", "ΔG = -48.7 kJ mol⁻¹, the reaction is non-spontaneous", "ΔG = +50 kJ mol⁻¹, the reaction is spontaneous", "ΔG = 48.7 kJ mol⁻¹, the reaction is non-spontaneous"],
    answer: 4
  },
  {
    qNo: 51,
    subject: "chemistry",
    chapter: "Thermodynamics",
    question: "11.0 L of an ideal gas at constant external pressure of 5 atm is compressed isothermally to a final volume of one liter. The heat absorbed and work done respectively, during this compression (in L atm) are",
    image: "",
    options: ["-50, -50", "50, -50", "-50, 50", "50, 50"],
    answer: 3
  },
  {
    qNo: 52,
    subject: "chemistry",
    chapter: "Equilibrium",
    question: "Given below are two statements Statement I: The changes in pH with temperature are so small that we often ignore it Statement II: When the hydrogen ion concentration changes by a factor of 100, the pH changes by one unit",
    image: "",
    options: ["Both statements are correct", "Statement I is correct but statement II is not correct", "Statement I is not correct but statement II is correct", "Both statements are not correct"],
    answer: 2
  },
  {
    qNo: 53,
    subject: "chemistry",
    chapter: "Equilibrium",
    question: "One mole H₂O(g) and one mole CO(g) are taken in 1L flask and heated to 725K. At equilibrium, 40% (by mass) of water reacted with CO(g) as follows: H₂O(g) + CO(g) ⇌ H₂(g) + CO₂(g). Its Kp value is",
    image: "",
    options: ["2.220", "0.444", "4.440", "0.222"],
    answer: 2
  },
  {
    qNo: 54,
    subject: "chemistry",
    chapter: "Hydrogen",
    question: "The following methods can not be used to remove permanent hardness of water",
    image: "",
    options: ["Treatment with washing soda", "Ion-exchange method", "Treating with Calgon", "Adding calculated amount of lime"],
    answer: 4
  },
  {
    qNo: 55,
    subject: "chemistry",
    chapter: "s-Block Elements",
    question: "Which of the following statement(s) is/are correct? (i) LiNO₃, Ba(NO₃)₂ both will give NO₂ on heating (ii) BaSO₄ is less soluble in water than CaSO₄ (iii) Alkaline earth metals do not dissolve in liquid ammonia",
    image: "",
    options: ["i only", "i, ii only", "i, ii & iii", "i, iii only"],
    answer: 2
  },
  {
    qNo: 56,
    subject: "chemistry",
    chapter: "p-Block Elements",
    question: "Statement I: Boron does not exhibit allotropy Statement II: Boron is extremely hard and black coloured solid",
    image: "",
    options: ["Both I & II are correct", "Both I & II are not correct", "I is correct but II is not correct", "I is not correct but II is correct"],
    answer: 4
  },
  {
    qNo: 57,
    subject: "chemistry",
    chapter: "p-Block Elements",
    question: "Which of the following is not correct?",
    image: "",
    options: ["Lead does not show catenation", "Buckminster fullerene contains 20 six-membered rings and 12 five-membered rings", "Stability order of GeX₂, SnX₂ and PbX₂ is GeX₂ < SnX₂ < PbX₂", "The number of metalloids in group 14 elements is 2"],
    answer: 4
  },
  {
    qNo: 58,
    subject: "chemistry",
    chapter: "Organic Chemistry - Principles and Techniques",
    question: "The decreasing order of priority for the following functional groups in the IUPAC Nomenclature is -SO₂H, -CN, -COOH, -OH, -CHO",
    image: "",
    options: ["-SO₃H > -COOH > -CN > -CHO > -OH", "-SO₃H > -COOH > -CHO > -CN > -OH", "-COOH > -SO₃H > -CHO > -CN > -OH", "-COOH > -SO₃H > -CN > -CHO > -OH"],
    answer: 4
  },
  {
    qNo: 59,
    subject: "chemistry",
    chapter: "Organic Chemistry - Principles and Techniques",
    question: "Arrange the following free radicals in the correct order of their stability (i) CH₂=CH• (ii) CH₃• (iii) CH₃-CH^•-CH₃ (iv) (CH₃)₃C•",
    image: "",
    options: ["i > ii > iii > iv", "iv > iii > ii > i", "i < ii < iii < iv", "iv > iii > i > ii"],
    answer: 2
  },
  {
    qNo: 60,
    subject: "chemistry",
    chapter: "Electrochemistry",
    question: "In which of the following cells, the space between cathode and anode is filled by a moist mixture of ammonium chloride and zinc chloride",
    image: "",
    options: ["Mercury cell", "Leclanché cell", "Nickel-cadmium cell", "Fuel cell"],
    answer: 2
  },
  {
    qNo: 61,
    subject: "chemistry",
    chapter: "Solutions",
    question: "6 g of a non-volatile solute (x) is dissolved in 100 g of water. The relative lowering of vapour pressure of resultant solution is 0.006. What is the molar mass (in g mol⁻¹) of x?",
    image: "",
    options: ["60", "360", "100", "180"],
    answer: 4
  },
  {
    qNo: 62,
    subject: "chemistry",
    chapter: "Solutions",
    question: "The molality of solution, when 18 g of glucose is added to the 18 g of H₂O is",
    image: "",
    options: ["0.55 m", "5.55 m", "2.55 m", "55.5 m"],
    answer: 2
  },
  {
    qNo: 63,
    subject: "chemistry",
    chapter: "General Principles of Isolation of Metals",
    question: " Identify the correct statements from the following: i. In the extraction of Ag and Au, zinc is used as reducing agent. ii. Impure zinc can be refined by distillation method. iii. Malachite is an ore of nickel.",
    image: "",
    options: [" i, ii, iii", "i, iii only", "ii, iii only", "i, ii only"],
    answer: 4
  },
  {
    qNo: 64,
    subject: "chemistry",
    chapter: "Surface Chemistry",
    question: "Which of the following is not correctly matched for enzymatic reactions?",
    image: "",
    options: ["Proteins → Amino acids ; Trypsin", "Starch → Maltose : Diastase", "Sucrose → glucose and fructose; zymase", "Maltose → glucose ; Maltase"],
    answer: 3
  },
  {
    qNo: 65,
    subject: "chemistry",
    chapter: "Surface Chemistry",
    question: "The greater the valence of the flocculating ion added, the greater is its power to cause precipitation of a colloid. This rule is",
    image: "",
    options: ["Hund's rule", "Pauling rule", "Henry's rule", "Hardy-Schulze rule"],
    answer: 4
  },
  {
    qNo: 66,
    subject: "chemistry",
    chapter: "p-Block Elements",
    question: "White phosphorous reacts with sulphuryl chloride to form PCl5 and X. Chlorine reacts with X in the presence of wood charcoal to form Y. X and Y are respectively",
    image: "",
    options: ["SO2, SO2Cl2", " SO2, SCl4", "SO3, SO2Cl2", "SO3, SCl4"],
    answer: 1
  },
  {
    qNo: 67,
    subject: "chemistry",
    chapter: "p-Block Elements",
    question: "In which of the following, the mystery are arranged in the increasing order of their bond angles?",
    image: "",
    options: ["P₄ < S₆ < O₃ < S₈", "S₆ < O₃ < S₈ < P₄", "O₃ < S₈ < P₄ < S₆", "P₄ < S₆ < S₈ < O₃"],
    answer: 4
  },
  {
    qNo: 68,
    subject: "chemistry",
    chapter: "d and f Block Elements",
    question: "Select the correct order of radii of the given ions",
    image: "",
    options: ["Yb³⁺ < Sm³⁺ < Dy³⁺ < Pr³⁺", "Yb³⁺ < Dy³⁺ < Sm³⁺ < Pr³⁺", "Pr³⁺ < Sm³⁺ < Dy³⁺ < Yb³⁺", "Pr³⁺ < Sm³⁺ < Yb³⁺ < Dy³⁺"],
    answer: 2
  },
  {
    qNo: 69,
    subject: "chemistry",
    chapter: "d and f Block Elements",
    question: "Among V, Cr, Zn, Fe, the metal having lowest enthalpy of atomization is",
    image: "",
    options: ["V", "Cr", "Zn", "Fe"],
    answer: 3
  },
  {
    qNo: 70,
    subject: "chemistry",
    chapter: "Polymers",
    question: "Which of the following polymer is used in the preparation of gaskets?",
    image: "",
    options: ["Polyethylene", "Polystyrene", "Polyvinyl chloride", "Polyurethane"],
    answer: 4
  },
  {
    qNo: 71,
    subject: "chemistry",
    chapter: "Biomolecules",
    question: "Match the following: List-I (A. Beri Beri, B. Scurvy, C. Cheilosis, D. Rickets) with List-II (I. Riboflavin, II. Thiamine, III. Pyridoxine, IV. Ascorbic acid, V. Vitamin D)",
    image: "",
    options: ["A-III, B-IV, C-III, D-V", "A-II, B-IV, C-I, D-V", "A-III, B-V, C-I, D-II", "A-III, B-V, C-IV, D-II"],
    answer: 2
  },
  {
    qNo: 72,
    subject: "chemistry",
    chapter: "Biomolecules",
    question: "The source of vitamin, whose deficiency causes scurvy is",
    image: "",
    options: ["Amla", "Carrot", "Egg", "Fish"],
    answer: 1
  },
  {
    qNo: 73,
    subject: "chemistry",
    chapter: "Chemistry in Everyday Life",
    question: "Ranitidine belongs to which of the following class of drugs?",
    image: "",
    options: ["Tranquiliser", "Antiseptic", "Analgesic", "Antacid"],
    answer: 4
  },
  {
    qNo: 74,
    subject: "chemistry",
    chapter: "p-Block Elements",
    question: "Assertion (A): Helium has lowest boiling point (4.2 K) Reason (R): The forces that exist between Helium atoms are weak dispersion forces. The correct answer is",
    image: "",
    options: ["Both (A) and (R) are correct and (R) is the correct explanation of (A).", "Both (A) and (R) are correct and (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct."],
    answer: 1
  },
  {
    qNo: 75,
    subject: "chemistry",
    chapter: "Polymers",
    question: "Number average molecular mass of a polymer that contains 15 molecules with each of mass 8,000 and 15 molecules with each of mass 80,000 is",
    image: "",
    options: ["22,000", "33,000", "11,000", "44,000"],
    answer: 4
  },
  {
    qNo: 76,
    subject: "chemistry",
    chapter: "Biomolecules",
    question: "Which of the following statements are correct? A. A tripeptide has two peptide bonds B. A pentapeptide contains five amino acids C. Nucleotide is a product of base and sugar D. In cellulose, β-glycosidic linkages are present",
    image: "",
    options: ["B, C ,D", " C,D only", "A,B,D", "A,C only"],
    answer: 3
  },
  {
    qNo: 77,
    subject: "chemistry",
    chapter: "Structure of Atom",
    question: " The work function (W0 ) of Li, K, Mg, Ag and Cu are 2.42, 2.25, 3.70, 4.30 and 4.80 eV respectively. The number of metals which undergo photoelectric effect if a radiation of wavelength 540 nm falls on them is- (1 eV= 1.602 x 10^-19 J)",
    image: "",
    options: ["4", "2", "1", "3"],
    answer: 3
  },
  {
    qNo: 78,
    subject: "chemistry",
    chapter: "Structure of Atom",
    question: "What is the mass of a particle with a wavelength of 3.13 A^o moving with a speed of 2.0 × 10⁸ m/s^-1?",
    image: "",
    options: ["1.0x10^-28 kg", "2.0x10^-32 kg", "1.0x10^-32 kg", "2.0x10^-28 kg"],
    answer: 3
  },
  {
    qNo: 79,
    subject: "chemistry",
    chapter: "d and f Block Elements",
    question: "If the electronic configuration of M3+ is [Xe] 4f^3, then M^3+ is",
    image: "",
    options: ["Nd^3+", "Pr^3+", "Sm^3+", "Dy^3+"],
    answer: 1
  },
  {
    qNo: 80,
    subject: "chemistry",
    chapter: "States of Matter",
    question: " The ratio of rates of diffusion of gases A and B is 1:0.707. If the molecular weight of B is 32, the molecular weight of A is",
    image: "",
    options: ["2", "64", "16", "8"],
    answer: 3
  },{
    qNo: 81,
    subject: "maths",
    chapter: "Functions",
    question: "If a set A has n elements, then the number of functions defined from A to A that are not one-one is",
    image: "",
    options: ["(n)^(n)^2", "n!", "n^n - n!", "n^n"],
    answer: 3
  },
  {
    qNo: 82,
    subject: "maths",
    chapter: "Matrices",
    question: "If A = [[1,1,3],[5,2,6],[-2,-1,-3]], then A + A³ + A⁴ + A⁵ + 3I =",
    image: "",
    options: ["[[4,2,1],[2,5,6],[-3,2,3]]", "[[4,1,3],[5,5,6],[-2,-1,0]]", "[[3,1,4],[3,1,-2],[-1,2,-1]]", "[[4,1,3],[2,3,5],[-3,-2,-3]]"],
    answer: 2
  },
  {
    qNo: 83,
    subject: "maths",
    chapter: "Matrices",
    question: "If the solution for the system of equations x + 2y - z = 3, 3x - y + 2z = 1 and 2x - 2y + 3z = 2 is (α,β,γ), then α² + β² + γ² =",
    image: "",
    options: ["33", "5", "17", "14"],
    answer: 1
  },
  {
    qNo: 84,
    subject: "maths",
    chapter: "Matrices",
    question: "If A, is a 3x3 matrix and |A|=2 then (Adj A)|Adj(Adj A)=",
    image: "",
    options: ["32A", "64A", "16A", "8A"],
    answer: 1
  },
  {
    qNo: 85,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "If 1, ω, ω² are the cube roots of unity, k is positive integer and (1-ω+ω²)³ᵏ + (1-ω²+ω)³ᵏ = (1-ω+ω²)³ᵏ⁺¹ + (1+ω-ω²)³ᵏ⁺¹, then k =",
    image: "",
    options: ["r, r ∈ N", "2r+1, r ∈ N", "4r+1, r ∈ N", "3r, r ∈ N"],
    answer: 1
  },
  {
    qNo: 86,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "If α, β are the two real roots of 4th roots of unity and γ, δ are the other two roots of it, then the sum of the eccentricities of the conics |z-α|+|z-β|=4 and |z-γ|+|z-δ|=6 is",
    image: "",
    options: ["5/6", "5/12", "3/7", "4/5"],
    answer: 1
  },
  {
    qNo: 87,
    subject: "maths",
    chapter: "Theory of Equations",
    question: "If the sum of the cubes of the roots of the equation x³ - ax² + bx - c = 0 is zero, then a³ + 3c =",
    image: "",
    options: ["-2ab", "2ab", "-3ab", "3ab"],
    answer: 4
  },
  {
    qNo: 88,
    subject: "maths",
    chapter: "Theory of Equations",
    question: "If α, β, γ are the roots of x³ + 2x + 5 = 0, then Σ (β+γ)/α² =",
    image: "",
    options: ["-2/5", "1/5", "2/5", "-3/5"],
    answer: 3
  },
  {
    qNo: 89,
    subject: "maths",
    chapter: "Binomial Theorem",
    question: "If the numerically greatest term in the expansion of (2 - 3x)^9 when x = 1 is P₁ᵅ P₂ᵝ P₃ᵞ P₄ᵟ (where P₁ < P₂ < P₃ < P₄ are the first four prime numbers), then α + β + γ + δ =",
    image: "",
    options: ["13", "12", "14", "11"],
    answer: 1
  },
  {
    qNo: 90,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "The number of all 8 digit odd numbers is",
    image: "",
    options: ["45×10⁶", "90×10⁶", "9×10⁸", "9×10⁶"],
    answer: 1
  },
  {
    qNo: 91,
    subject: "maths",
    chapter: "Binomial Theorem",
    question: "The degree of the polynomial (x+√(x⁴-1))⁹ + (x-√(x⁴-1))⁹ is",
    image: "",
    options: ["14", "15", "16", "17"],
    answer: 4
  },
  {
    qNo: 92,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "The number of all four digit numbers which begin with 4 and end with either zero or five is",
    image: "",
    options: ["200", "64", "256", "32"],
    answer: 1
  },
  {
    qNo: 93,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "If f(n) = n!(31-n)!, where n ∈ {0,1,2,...,31}, then the minimum value of f(n) is",
    image: "",
    options: ["15!(15!)", "15!(14!)", "(14!)(16!)", "(15!)(16!)"],
    answer: 4
  },
  {
    qNo: 94,
    subject: "maths",
    chapter: "Trigonometric Ratios",
    question: "tan A/(1-cot A) + cot A/(1-tan A) =",
    image: "",
    options: ["sec A cosec A - 1", "tan A + cot A", "tan A + cot A + 1", "sec A + cosec A + 1"],
    answer: 3
  },
  {
    qNo: 95,
    subject: "maths",
    chapter: "Matrices",
    question: "If x=α, y=β, z=γ is the solution for the system of equation, 2x-y+8z=13, 3x+4y+5z=18, 5x-2y+7z=20, Then αβ + βγ + γα =",
    image: "",
    options: ["1", "0", "7", "-3"],
    answer: 3
  },
  {
    qNo: 96,
    subject: "maths",
    chapter: "Trigonometric Equations",
    question: "In ΔABC, (sin2A + sin2B + sin2C)/(cos A + cos B + cos C-1) =",
    image: "",
    options: ["2[sin A + sin B + sin C]", "sin A + sin B + sin C", "4[sin A + sin B + sin C]", "8[sin A + sin B + sin C]"],
    answer: 1
  },
  {
    qNo: 97,
    subject: "maths",
    chapter: "Trigonometric Ratios",
    question: "cos12°.cos24°.cos36°.cos48°.cos72°.cos84° =",
    image: "",
    options: ["1/32", "1/16", "1/64", "1/128"],
    answer: 3
  },
  {
    qNo: 98,
    subject: "maths",
    chapter: "Trigonometric Ratios",
    question: "If α, β are acute angles such that sinβ = 2sinα and 3cosβ = 2cosα, then sec(α+β) =",
    image: "",
    options: ["4", "√15", "√20", "5"],
    answer: 1
  },
  {
    qNo: 99,
    subject: "maths",
    chapter: "Hyperbolic Functions",
    question: "If sinh x = 5/12, then cosh(x/2) =",
    image: "",
    options: ["3/2√5", "2/3√3", "5/√6", "5/(2√6)"],
    answer: 4
  },
  {
    qNo: 100,
    subject: "maths",
    chapter: "Properties of Triangles",
    question: "In ΔABC, if ∠C = 90°, then [(r₁ - r₃)/r₁][(r₂ - r₃)/r₂] =",
    image: "",
    options: ["1", "3", "4", "2"],
    answer: 4
  },
  {
    qNo: 101,
    subject: "maths",
    chapter: "Properties of Triangles",
    question: "In ΔABC, A, B and C are in arithmetic progression and a:c = 1:2. If b = 4√3 cm, then the area of ΔABC (in sq.cm) is",
    image: "",
    options: ["16√3", "12√3", "8√3", "6√3"],
    answer: 3
  },
  {
    qNo: 102,
    subject: "maths",
    chapter: "Partial Fractions",
    question: "If (17x-2)/(12x²-x-20) = A/(ax+5) + B/(3x+b), then aA + bB =",
    image: "",
    options: ["0", "4", "7", "10"],
    answer: 2
  },
  {
    qNo: 103,
    subject: "maths",
    chapter: "Addition of Vectors",
    question: "Let a, b and c be any three non coplanar vectors. If m, n are scalars such that a + b = md - c and b + c = na - d, then 3a + 2b + 2c + d =",
    image: "",
    options: ["a - d", "a + d", "0", "b+c+2d"],
    answer: 1
  },
  {
    qNo: 104,
    subject: "maths",
    chapter: "Addition of Vectors",
    question: "If 2i+j-k, i-3j+5k and -3i+4j+4k are the position vectors of three points A, B and C respectively, then",
    image: "",
    options: ["ABC is a right angled triangle", "ABC is an isosceles triangle", "A, B, C are collinear points", "ABC is a scalene triangle"],
    answer: 4
  },
  {
    qNo: 105,
    subject: "maths",
    chapter: "Product of Vectors",
    question: "A line L passes through the points i-9k and 7j+k and plane π passes through the point 6i+j and is perpendicular to i+j+k. If θ is the angle between L and π, then sinθ =",
    image: "",
    options: ["8√2/15", "3√3/8", "7/13", "24/25"],
    answer: 1
  },
  {
    qNo: 106,
    subject: "maths",
    chapter: "Probability",
    question: "If S be the sample space of a random experiment ξ and P be a probability function defined on the power set P(S) of S, then which one of the following is not satisfied by P?",
    image: "",
    options: ["P(φ) = 0", "If Eᶜ is the complementary event of E, then P(Eᶜ) = 1 - P(E)", "0 ≤ P(E) ≤ 1, for all E ⊆ S", "If E₁ ⊆ E₂ then P(E₂) ≤ P(E₁)"],
    answer: 4
  },
  {
    qNo: 107,
    subject: "maths",
    chapter: "Probability",
    question: "If A and B simultaneously toss one coin each every time, each 50 times, then the probability of not getting tail on both the coins is",
    image: "",
    options: ["(3/4)⁵⁰", "(2/3)⁵⁰", "(1/3)⁵⁰", "(1/2)⁵⁰"],
    answer: 1
  },
  {
    qNo: 108,
    subject: "maths",
    chapter: "Probability",
    question: "A pair of dice is thrown. Then the probability that either of the dice shows 2 when their sum is 6 is",
    image: "",
    options: ["1/2", "1/5", "2/5", "3/5"],
    answer: 3
  },
  {
    qNo: 109,
    subject: "maths",
    chapter: "Probability",
    question: "If A and B are any two events of a sample space, then set-theoretic description for the event: 'Exactly one of the events A, B to occur' is",
    image: "",
    options: ["A ∩ Bᶜ", "(A - B) ∪ (A ∪ B)", "(A ∩ Bᶜ) ∪ (Aᶜ ∩ B)", "(A ∩ B)ᶜ ∪ (Aᶜ ∩ Bᶜ)"],
    answer: 3
  },
  {
    qNo: 110,
    subject: "maths",
    chapter: "Random Variables",
    question: "If the mean and variance of a binomial variable X are 2.4 and 1.44 respectively, then the parameters n and p are respectively",
    image: "",
    options: ["6, 2/5", "4, 3/5", "6, 3/5", "8, 1/3"],
    answer: 1
  },
  {
    qNo: 111,
    subject: "maths",
    chapter: "Random Variables",
    question: "If a Bernoulli trial is conducted n times, then which one of the following is not suitable to use Poisson distribution?",
    image: "",
    options: ["Each Trial results in two mutually exclusive outcomes", "The number 'n' of such trails is sufficiently large", "The trails are independent of each other", "The probability 'p' of success in each trail is very large"],
    answer: 4
  },
  {
    qNo: 112,
    subject: "maths",
    chapter: "The Straight Line",
    question: "If the y-intercept of the perpendicular bisector of the line segment joining P(1,4) and Q(k,3) is -4, then a possible value of k is",
    image: "",
    options: ["2", "-2", "-4", "1"],
    answer: 3
  },
  {
    qNo: 113,
    subject: "maths",
    chapter: "The Straight Line",
    question: "A straight line L at a distance of 4 units from the origin makes positive intercepts on the coordinate axes and the perpendicular drawn from the origin to this line makes an angle of 60° with the line x + y = 0. Then the equation of the line L is",
    image: "",
    options: ["(√3+1)x + (√3-1)y = 8√2", "(√3-1)x + (√3+1)y = 8√2", "√3x + y = 8", "x + √3y = 8"],
    answer: 2
  },
  {
    qNo: 114,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "The points in the Argand plane represented by the complex conjugate of 1+2i, 2-3i, 3-4i",
    image: "",
    options: ["are collinear", "form a equilateral triangle", "form a obtuse angled triangle", "form a acute angled triangle"],
    answer: 3
  },
  {
    qNo: 115,
    subject: "maths",
    chapter: "Pair of Straight Lines",
    question: "If ad ≠ 0 and two of the lines represented by ax³ + 3bx²y + 3cxy² + dy³ = 0 are perpendicular, then",
    image: "",
    options: ["a² + ac + bd + d² = 0", "a² + 3ac + 3bd + d² = 0", "a² - 3ac - 3bd + d² = 0", "a² + 3ac - 3bd + d² = 0"],
    answer: 2
  },
  {
    qNo: 116,
    subject: "maths",
    chapter: "Pair of Straight Lines",
    question: "The absolute value of the tangent of the difference of the angles made by the lines 4x² - 24xy + 11y² = 0 with the X-axis is",
    image: "",
    options: ["4/11", "24/11", "4/3", "11/24"],
    answer: 3
  },
  {
    qNo: 117,
    subject: "maths",
    chapter: "Three Dimensional Coordinates",
    question: "If the extremities of a diagonal of a square are (1,-2,3) and (2,-3,5), then the length of its side is",
    image: "",
    options: ["√6", "√3", "√5", "√7"],
    answer: 2
  },
  {
    qNo: 118,
    subject: "maths",
    chapter: "The Plane",
    question: "An equation of a plane parallel to the plane x - 2y + 2z - 5 = 0 and which is at one unit distance from the origin is",
    image: "",
    options: ["x - 2y + 2z - 1 = 0", "x - 2y + 2z + 5 = 0", "x - 2y + 2z - 3 = 0", "x - 2y + 2z + 1 = 0"],
    answer: 3
  },
  {
    qNo: 119,
    subject: "maths",
    chapter: "Circle",
    question: "A circle S touches Y-axis at (0,3) and makes an intercept of length 8 units on X-axis. If the centre C of the circle S lies in the second quadrant, then the distance of C from the point (-2,-1) is",
    image: "",
    options: ["13", "10", "5", "2"],
    answer: 3
  },
  {
    qNo: 120,
    subject: "maths",
    chapter: "Circle",
    question: "If the equation of the circle of radius 3 units which touches the circle x² + y² + 6x - 8y - 11 = 0 externally at (3,0) is x² + y² + 2gx + 2fy + c = 0, then 3g - 4f + c =",
    image: "",
    options: ["0", "5", "1", "-1"],
    answer: 2
  },{
    qNo: 121,
    subject: "maths",
    chapter: "Circle",
    question: "The polar of a point with respect to the circle x² + y² - 10x + 12y - 3 = 0 which is not a tangent and not a chord of contact is",
    image: "",
    options: ["2x + 3y + 8 = 0", "3x + 4y + 5 = 0", "5x - 12y + 7 = 0", "6x - 8y + 15 = 0"],
    answer: 4
  },
  {
    qNo: 122,
    subject: "maths",
    chapter: "System of Circles",
    question: "If the angle between the circles x² + y² + 2x - 4y + 1 = 0 and x² + y² - 4x - 2y + c = 0 is π/4, then c =",
    image: "",
    options: ["3", "-13", "-3 or 13", "-31 or -3"],
    answer: 1
  },
  {
    qNo: 123,
    subject: "maths",
    chapter: "Parabola",
    question: "Let a focal chord 12x + 5y - 27 = 0 of the parabola y² = kx intersect the parabola at the points P and P'. If S is the focus of this parabola, then 9(SP+SP') =",
    image: "",
    options: ["27", "108", "16(SP·SP')", "4(SP·SP')"],
    answer: 4
  },
  {
    qNo: 124,
    subject: "maths",
    chapter: "Ellipse",
    question: "Let E be an ellipse whose major axis is X-axis and minor axis is Y-axis. If the distance of a point (5/2, 2√3) on E from its foci are 7/2 and 13/2, then the eccentricity of the ellipse E is",
    image: "",
    options: ["3/5", "1/5", "1/√5", "1/√2"],
    answer: 1
  },
  {
    qNo: 125,
    subject: "maths",
    chapter: "Hyperbola",
    question: "If P(π/4) and Q(3π/4) are two points on the hyperbola 4x² - y² - 8x - 2y - 13 = 0 in parametric form, then the distance between P and Q is",
    image: "",
    options: ["4√6", "10", "8√3", "5"],
    answer: 1
  },
  {
    qNo: 126,
    subject: "maths",
    chapter: "Hyperbola",
    question: "If the point (1,1) and the origin lie in the same region with respect to the hyperbola x²/a² - y²/1 = 1 (a>0), then the range of a is",
    image: "",
    options: ["(1/√2, ∞)", "(0, 1/√2)", "(0, 1)", "(0,√2)"],
    answer: 1
  },
  {
    qNo: 127,
    subject: "maths",
    chapter: "Limits and Continuity",
    question: "Let [t] represents the greatest integer not exceeding t and C = 1-2e². If the function f(x) = { [eˣ], x<0; aeˣ + [x-2], 0≤x<2; e^(-x) - C, x≥2 } is continuous at x=2, then f(x) is discontinuous at",
    image: "",
    options: ["x=1 only", "x=0 and x=1", "x=0 only", "x=0, x=1 and x=1/2"],
    answer: 1
  },
  {
    qNo: 128,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "If 1, α₁, α₂, ..., αₙ₋₁ are the n-th roots of unity and n is an even natural number, then (1+α₁)(1+α₂)...(1+αₙ₋₁) =",
    image: "",
    options: ["0", "-1", "1", "2"],
    answer: 1
  },
  {
    qNo: 129,
    subject: "maths",
    chapter: "Differentiation",
    question: "f(x) is differentiable on R and f'(m) ≠ 0, m∈R. If lim_{x→m} [x f(m) - m f(x)]/(x-m) + f'(m) = f(m), then m =",
    image: "",
    options: ["0", "-1", "1", "2"],
    answer: 3
  },
  {
    qNo: 130,
    subject: "maths",
    chapter: "Differentiation",
    question: "Let f(x) be a differentiable function such that f(1)=2, f(2)=6 and f(x+y) = f(x) + kxy + (4/3)y² ∀x,y∈R, then f(x) =",
    image: "",
    options: ["4x - 2", "y - 4x² + 2x - 4", "(8/3)x² + 4/3", "(4/3)x² + 2/3"],
    answer: 4
  },
  {
    qNo: 131,
    subject: "maths",
    chapter: "Differentiation",
    question: "Let f(x) = {(5e^{1/x} + 2)/(3 - e^{1/x}), x≠0 and 0, x=0. Then at x=0, xf(x) and f(x) are respectively",
    image: "",
    options: ["Differentiable and continuous", "Continuous and differentiable", "Continuous and not differentiable", "Not differentiable and continuous"],
    answer: 3
  },
  {
    qNo: 132,
    subject: "maths",
    chapter: "Applications of Derivatives",
    question: "The ordinates of the points on the curve y = tan⁻¹(sin√x), 0≤x≤8π², at which the tangent is parallel to X-axis are",
    image: "",
    options: ["+π/3 and -π/3", "+π/6 and -π/6", "+π/4 and -π/4", "+π/2 and -π/2"],
    answer: 3
  },
  {
    qNo: 133,
    subject: "maths",
    chapter: "Applications of Derivatives",
    question: "If (a²-1)x + ay + (3-a) = 0 is a normal to the curve xy = 1, then the interval in which 'a' lies is",
    image: "",
    options: ["[-1,1] ∪ [2,∞)", "(-∞,-1] ∪ (0,1]", "[-1,1) ∪ (1,∞)", "(1,∞)"],
    answer: 2
  },
  {
    qNo: 134,
    subject: "maths",
    chapter: "Applications of Derivatives",
    question: "The maximum value of x⁴y⁴ when a²x⁴ + b²y⁴ = c⁶ is",
    image: "",
    options: ["c¹²/(16a⁴b⁴)", "c¹²/(4a²b²)", "c⁶/(a+b)¹²", "c⁶/(a⁴+b⁴)"],
    answer: 2
  },
  {
    qNo: 135,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "∫ e^(sin x) (x cos³x - sin x)/cos²x dx =",
    image: "",
    options: ["e^(sin x)(x - sec x) + C", "e^(sin x)(x - cosec x) + C", "e^(sin x)(x + sec x) + C", "e^(sin x)(x + cosec x) + C"],
    answer: 1
  },
  {
    qNo: 136,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "If f'(x) = a cos x + b sin x and f'(0)=4, f(0)=3, f(π/2)=5, then f(x) =",
    image: "",
    options: ["2 cos x + 4 sin x + 1", "4 cos x + 2 sin x + 1", "2 cos x + 3 sin x + 1", "4 cos x + sin x + 1"],
    answer: 1
  },
  {
    qNo: 137,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "If ∫ f(x) dx = Ψ(x), then ∫ x⁵ f(x³) dx =",
    image: "",
    options: ["(1/3)[x³ Ψ(x³)] - ∫ x² Ψ(x³) dx", "(1/3)[x³ Ψ(x³)] + ∫ x² Ψ(x³) dx", "-(1/3)[x³ Ψ(x³)] - ∫ x³ Ψ(x³) dx", "-(1/3)[x³ Ψ(x³)] + ∫ x³ Ψ(x³) dx"],
    answer: 1
  },
  {
    qNo: 138,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "If ∫ (sin²α - sin²x)/(cos x - cos α) dx = φ(x) + Ax + B and B∈R, then",
    image: "",
    options: ["f(x)=2sinx, A=cosα", "f(x)=2sinx, A=2cosα", "f(x)=sinx, A=cosα", "f(x)=sinx, A=2cosα"],
    answer: 3
  },
  {
    qNo: 139,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "∫ (x³ᵐ + x²ᵐ + xᵐ)(2x²ᵐ + 3xᵐ + 6)^{1/m} dx =",
    image: "",
    options: ["(1/(6(m+1)))(2x³ᵐ + 3x²ᵐ + 6xᵐ)^{(m+1)/m} + C", "(1/(6(m+1)))(2x³ᵐ + 3x²ᵐ + 6xᵐ)^{(m-1)/m} + C", "(1/(6(m+1)))(2x³ᵐ + 3x²ᵐ + 6)^{(m+1)/m} + C", "(1/(6(m-1)))(2x³ᵐ + mx²ᵐ + 6xᵐ)^{(m-1)/m} + C"],
    answer: 1
  },
  {
    qNo: 140,
    subject: "maths",
    chapter: "Definite Integration",
    question: "If a ∈ Z⁺, [x] is greatest integer not more than x and ∫₀ᵃ 2^{[x]} dx = 127, then a =",
    image: "",
    options: ["6", "7", "8", "9"],
    answer: 3
  },{
    qNo: 141,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "If all the letters of the word REPEAT are permuted in all possible ways and if the six letter permutation thus formed are arranged in dictionary order, then the rank of the word REPEAT is",
    image: "",
    options: ["133", "267", "266", "132"],
    answer: 2
  },
  {
    qNo: 142,
    subject: "maths",
    chapter: "Definite Integration",
    question: "The positive value of x satisfying the equation ∫₁ˣ (1-t) dt = 1/2 is",
    image: "",
    options: ["1", "2", "3", "4"],
    answer: 2
  },
  {
    qNo: 143,
    subject: "maths",
    chapter: "Area under Curves",
    question: "The area (in sq. units) bounded by x = 4, y = -4 and y = x is",
    image: "",
    options: ["48", "32", "24", "16"],
    answer: 2
  },
  {
    qNo: 144,
    subject: "maths",
    chapter: "Differential Equations",
    question: "The particular solution of the differential equation (1+y²)dx - xy dy = 0, y(1)=0 represents",
    image: "",
    options: ["a circle", "a part of parabola", "a part of ellipse", "a part of hyperbola"],
    answer: 4
  },
  {
    qNo: 145,
    subject: "maths",
    chapter: "Differential Equations",
    question: "If c and d are arbitrary constants, then y = e^{2x}(c cosh√2 x + d sinh√2 x) is the general solution of the differential equation",
    image: "",
    options: ["y'' + 4y' + 2y = 0", "y'' - 4y' + 2y = 0", "y'' - 4y' + 4y = 0", "y'' - 2√2 y' + 2y = 0"],
    answer: 2
  },
  {
    qNo: 146,
    subject: "maths",
    chapter: "Differential Equations",
    question: "Which one of the following is a homogeneous differential equation?",
    image: "",
    options: ["dy/dx = x³ + (sin x)y", "dy/dx = (x³ + y³)e^{y/x} + x√y", "(x² + y²) dx = 2xy dy", "x dy/dx = y + e^{y/x}"],
    answer: 3
  },
  {
    qNo: 147,
    subject: "maths",
    chapter: "Probability",
    question: "The probability that a leap year has 53 Sundays is:",
    image: "",
    options: ["1/7", "2/7", "3/7", "1/2"],
    answer: 2
  },
  {
    qNo: 148,
    subject: "maths",
    chapter: "The Plane",
    question: "The equation of the plane passing through the points (1,0,0), (0,2,0) and (0,0,3) is:",
    image: "",
    options: ["6x + 3y + 2z = 6", "6x + 3y + 2z = 12", "x/1 + y/2 + z/3 = 1", "x/6 + y/3 + z/2 = 1"],
    answer: 1
  },
  {
    qNo: 149,
    subject: "maths",
    chapter: "Area under Curves",
    question: "The area of the region bounded by the curve y = x² and the line y = 4 is:",
    image: "",
    options: ["8/3", "16/3", "32/3", "64/3"],
    answer: 3
  },
  {
    qNo: 150,
    subject: "maths",
    chapter: "Probability",
    question: "A bag contains 5 red and 3 green balls. Two balls are drawn at random without replacement. The probability that both are of the same color is:",
    image: "",
    options: ["13/28", "15/28", "17/28", "19/28"],
    answer: 1
  },
  {
    qNo: 151,
    subject: "maths",
    chapter: "Differentiation",
    question: "The derivative of sin(x) with respect to x is:",
    image: "",
    options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    answer: 1
  },
  {
    qNo: 152,
    subject: "maths",
    chapter: "Definite Integration",
    question: "The value of ∫₀¹ 2x dx is:",
    image: "",
    options: ["0", "1", "2", "3"],
    answer: 2
  },
  {
    qNo: 153,
    subject: "maths",
    chapter: "Probability",
    question: "If P(A) = 0.4 and P(B) = 0.5, and A and B are independent, then P(A ∩ B) is:",
    image: "",
    options: ["0.1", "0.2", "0.9", "0.5"],
    answer: 2
  },
  {
    qNo: 154,
    subject: "maths",
    chapter: "The Straight Line",
    question: "The slope of the line passing through points (1,2) and (3,6) is:",
    image: "",
    options: ["1", "2", "3", "4"],
    answer: 2
  },
  {
    qNo: 155,
    subject: "maths",
    chapter: "Logarithms",
    question: "The value of log₁₀(100) is:",
    image: "",
    options: ["1", "2", "10", "100"],
    answer: 2
  },
  {
    qNo: 156,
    subject: "maths",
    chapter: "Quadratic Equations",
    question: "The sum of roots of the quadratic equation x² - 5x + 6 = 0 is:",
    image: "",
    options: ["5", "-5", "6", "-6"],
    answer: 1
  },
  {
    qNo: 157,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "The number of permutations of the letters in the word 'CAT' is:",
    image: "",
    options: ["3", "9", "6", "12"],
    answer: 3
  },
  {
    qNo: 158,
    subject: "maths",
    chapter: "Trigonometric Ratios",
    question: "If sin θ = 1/2 and θ is acute, then θ =",
    image: "",
    options: ["30°", "45°", "60°", "90°"],
    answer: 1
  },
  {
    qNo: 159,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "The value of i² (where i = √-1) is:",
    image: "",
    options: ["1", "-1", "i", "-i"],
    answer: 2
  },
  {
    qNo: 160,
    subject: "maths",
    chapter: "Probability",
    question: "If a die is rolled once, the probability of getting an even number is:",
    image: "",
    options: ["1/6", "1/3", "1/2", "2/3"],
    answer: 3
  }
];
const set5 = [{
    qNo: 1,
    subject: "physics",
    chapter: "Units and Measurements",
    question: "The number of significant figures in 4.870 m is",
    image: "",
    options: ["3", "4", "2", "1"],
    answer: 2
  },
  {
    qNo: 2,
    subject: "physics",
    chapter: "Work, Energy and Power",
    question: "A constant power of 7 watt is applied on a toy car of mass 15kg. The distance travelled by the car when its velocity increases from 3ms^–1 to 5 ms^–1 is.",
    image: "",
    options: ["56m", "7m", "61m", "70m"],
    answer: 4
  },
  {
    qNo: 3,
    subject: "physics",
    chapter: "Motion in a Plane",
    question: "The resultant of two vectors A and B is perpendicular to vector A and the resultant magnitude is equal to half of the magnitude of B, then the angle between A and B is",
    image: "",
    options: ["30°", "60°", "150°", "120°"],
    answer: 3
  },
  {
    qNo: 4,
    subject: "physics",
    chapter: "Motion in a Plane",
    question: "At any instant 't' the vertical distance 'Y' and horizontal distance 'X' of a projectile are given by 2Y = 6t - gt² and X = 4t. The initial velocity of projectile is",
    image: "",
    options: ["3 ms⁻¹", "4 ms⁻¹", "5 ms⁻¹", "6 ms⁻¹"],
    answer: 3
  },
  {
    qNo: 5,
    subject: "physics",
    chapter: "Laws of Motion",
    question: "A lorry is moving on a smooth circular path of radius 50 m with a velocity of 20 ms⁻¹. Then the banking angle of the road is (g=10 ms⁻²)",
    image: "",
    options: ["tan⁻¹(5/4)", "tan⁻¹(4/5)", "tan⁻¹(2/5)", "tan⁻¹(5/2)"],
    answer: 2
  },
  {
    qNo: 6,
    subject: "physics",
    chapter: "Laws of Motion",
    question: "A body of mass 1 kg is moving with a velocity 10 ms⁻¹ due to a constant force on a horizontal rough surface having coefficient of kinetic friction 0.4. If the constant force is removed, the body comes to rest in a time (g=10 ms⁻²)",
    image: "",
    options: ["2.5 s", "4 s", "0.4 s", "0.25 s"],
    answer: 1
  },
  {
    qNo: 7,
    subject: "physics",
    chapter: "Work, Energy and Power",
    question: "A ball of mass 10 g is allowed to fall down from 10 m height. After collision with the ground if 50% of its energy is lost, then the height reached by the ball is",
    image: "",
    options: ["4 m", "6 m", "5 m", "7 m"],
    answer: 3
  },
  {
    qNo: 8,
    subject: "physics",
    chapter: "Systems of Particles and Rotational Motion",
    question: "A bomb at rest explodes into three pieces of equal masses. If two pieces move perpendicular to each other, each with a speed v then the speed of the third piece is",
    image: "",
    options: ["v", "v/√2", "v√2", "2v"],
    answer: 3
  },
  {
    qNo: 9,
    subject: "physics",
    chapter: "Systems of Particles and Rotational Motion",
    question: "A body rotating with uniform acceleration about its geometrical axis makes 8 rotations in the first 2 seconds. The number of rotations the body makes in the next 3 seconds is (Initially the body is at rest)",
    image: "",
    options: ["50", "25", "42", "21"],
    answer: 3
  },
  {
    qNo: 10,
    subject: "physics",
    chapter: "Systems of Particles and Rotational Motion",
    question: "A solid sphere is pushed on a horizontal surface such that it slides with a speed 3.5 ms⁻¹ initially without rolling. The sphere will start rolling without slipping when its velocity becomes",
    image: "",
    options: ["2.5 ms⁻¹", "5 ms⁻¹", "3.5 ms⁻¹", "7 ms⁻¹"],
    answer: 1
  },
  {
    qNo: 11,
    subject: "physics",
    chapter: "Oscillations",
    question: "The mechanical energy of a damped oscillator becomes half of its initial energy in 4 seconds. In another t seconds its mechanical energy becomes 12.5% of its initial mechanical energy. Then t =",
    image: "",
    options: ["4 s", "8 s", "12 s", "16 s"],
    answer: 2
  },
  {
    qNo: 12,
    subject: "physics",
    chapter: "Oscillations",
    question: "When an external force with angular frequency ω_d acts on a system of natural angular frequency ω, the system oscillates with angular frequency ω_d. The condition for the amplitude of oscillations to be maximum is",
    image: "",
    options: ["ω_d = 2ω", "ω_d = ω", "ω_d = ω/2", "ω_d = 3ω"],
    answer: 2
  },
  {
    qNo: 13,
    subject: "physics",
    chapter: "Gravitation",
    question: "A uniform solid sphere of mass M and radius 'a' is surrounded by a concentric uniform thin spherical shell of mass 0.5M and radius 1.5a. The gravitational potential energy of a unit mass kept at a distance of 2.5a from the center is",
    image: "",
    options: ["-3GM/(5a)", "3GM/(5a)", "2GM/(5a)", "-2GM/(5a)"],
    answer: 1
  },
  {
    qNo: 14,
    subject: "physics",
    chapter: "Mechanical Properties of Solids",
    question: "A cylindrical rod made of aluminum has length 1 meter and diameter of 10 cm. The rod is subjected to a tensile force of 100 kN. The elongation in the rod is (Young's modulus of aluminum = 70 GPa)",
    image: "",
    options: ["0.81×10⁻⁴ m", "2×10⁻⁴ m", "0.2×10⁻⁴ m", "1.81×10⁻⁴ m"],
    answer: 4
  },
  {
    qNo: 15,
    subject: "physics",
    chapter: "Mechanical Properties of Fluids",
    question: "A large open top water tank is completely filled with water. A hole of diameter 4 mm is made 10 m below the water level. The flow rate of water through the hole is (g=10 ms⁻²)",
    image: "",
    options: ["14.14×10⁻⁶ m³s⁻¹", "2.1×10⁻⁶ m³s⁻¹", "1.77×10⁻⁶ m³s⁻¹", "0.177×10⁻⁶ m³s⁻¹"],
    answer: 4
  },
  {
    qNo: 16,
    subject: "physics",
    chapter: "Thermal Properties of Matter",
    question: "The phenomena of lowering freezing point of water by the application of pressure is known as",
    image: "",
    options: ["Sublimation", "Regelation", "Precipitation", "Crystallization"],
    answer: 2
  },
  {
    qNo: 17,
    subject: "physics",
    chapter: "Thermal Properties of Matter",
    question: "A steel ball of mass 200 g falls freely from a height of 20 m and bounces to a height of 10.8 m from the ground. If the energy lost in this process is absorbed by the ball, the rise in its temperature is (g=10 ms⁻², specific heat capacity of steel is 460 Jkg⁻¹K⁻¹)",
    image: "",
    options: ["0.1 °C", "1 °C", "0.2 °C", "2 °C"],
    answer: 3
  },
  {
    qNo: 18,
    subject: "physics",
    chapter: "Thermodynamics",
    question: "A work of 166.28 J is done to adiabatically compress one mole of a gas. If the increase in the temperature of the gas is 8 °C, the gas is (R = 8.314 J mol⁻¹ K⁻¹)",
    image: "",
    options: ["monatomic", "diatomic", "polyatomic", "mixture of diatomic and polyatomic"],
    answer: 2
  },
  {
    qNo: 19,
    subject: "physics",
    chapter: "Thermodynamics",
    question: "In a Carnot's engine, as the gas absorbs heat energy from the source, then the temperature of the source",
    image: "",
    options: ["decreases", "increases", "remains constant", "becomes zero"],
    answer: 3
  },
  {
    qNo: 20,
    subject: "physics",
    chapter: "Kinetic Theory",
    question: "If the rms speeds of helium and oxygen are equal, then the ratio of the temperatures of helium and oxygen is",
    image: "",
    options: ["1:8", "2:1", "1:4", "4:1"],
    answer: 1
  },
  {
    qNo: 21,
    subject: "physics",
    chapter: "Waves",
    question: "The ratio of radii of two wires is 1:2 and the density of their materials are in the ratio 1:4. If same tension is applied to both the wires then the ratio of the speed of transverse waves produced in them is",
    image: "",
    options: ["1:16", "16:1", "1:4", "4:1"],
    answer: 4
  },
  {
    qNo: 22,
    subject: "physics",
    chapter: "Ray Optics and Optical Instruments",
    question: "The frequency of a light ray is 6×10¹⁴ Hz. Its frequency when it propagates in a medium of refractive index 1.5, will be",
    image: "",
    options: ["1.67×10¹⁴ Hz", "9.10×10¹⁴ Hz", "6×10¹⁴ Hz", "4×10¹⁴ Hz"],
    answer: 3
  },
  {
    qNo: 23,
    subject: "physics",
    chapter: "Wave Optics",
    question: "Two coherent light sources having intensity in the ratio 2x produce an interference pattern. Then the value of (I_max - I_min)/(I_max + I_min) will be",
    image: "",
    options: ["(2√(2x))/(x+1)", "√(2x)/(x+1)", "(2√(2x))/(x+1)", "√(2x)/(x+1)"],
    answer: 3
  },
  {
    qNo: 24,
    subject: "physics",
    chapter: "Electric Charges and Fields",
    question: "Two charges Q and 4Q are separated by a distance of 6 cm. The distance of the point from 4Q at which net electric field is zero is",
    image: "",
    options: ["2 cm", "6 cm", "8 cm", "4 cm"],
    answer: 4
  },
  {
    qNo: 25,
    subject: "physics",
    chapter: "Electrostatic Potential and Capacitance",
    question: "Inside a charged hollow sphere, at any point the electric field (E) and potential (V) are",
    image: "",
    options: ["V=0 and E=0", "V is constant and E=0", "V=0 and E is constant", "V is constant and E is constant"],
    answer: 2
  },
  {
    qNo: 26,
    subject: "physics",
    chapter: "Thermodynamics",
    question: "Two heat engines X and Y of same efficiency are connected in series in such a way that the sink of X works as source of Y. X receives heat at 900 K and rejects some heat to its sink at T K and in turn Y rejects heat to its sink at 400 K, then the temperature T is",
    image: "",
    options: ["550 K", "600 K", "650 K", "700 K"],
    answer: 2
  },
  {
    qNo: 27,
    subject: "physics",
    chapter: "Current Electricity",
    question: "Two metal wires of same length, same area of cross-section have conductivities of their material σ₁ and σ₂. If they are connected in series, the effective conductivity is",
    image: "",
    options: ["(σ₁σ₂)/(σ₁+σ₂)", "(2σ₁σ₂)/(σ₁+σ₂)", "(σ₁σ₂)/(σ₁-σ₂)", "(2σ₁σ₂)/(σ₁-σ₂)"],
    answer: 2 
  },
  {
    qNo: 28,
    subject: "physics",
    chapter: "Ray Optics and Optical Instruments",
    question: "When an object is moved along the principle axis of a concave mirror placed in air, the image coincides with the object if the object is 50 cm from the mirror. If the mirror is placed at a depth of 20 cm in a transparent medium, the image coincides with the object when the object is 40 cm from the mirror. The refractive index of the liquid is",
    image: "",
    options: ["5/4", "4/3", "3/2", "5/3 "],
    answer: 3
  },
  {
    qNo: 29,
    subject: "physics",
    chapter: "Moving Charges and Magnetism",
    question: "If 'q' is electric charge, B is magnetic field, 'R' is the dee radius and 'm' is the mass of ions, the kinetic energy of the ions in cyclotron is given by",
    image: "",
    options: ["qBR/(2m)", "qBR/m", "q²B²R²/(4πm)", "q²B²R²/(2m)"],
    answer: 4
  },
  {
    qNo: 30,
    subject: "physics",
    chapter: "Moving Charges and Magnetism",
    question: "Curl the palm of your right hand around the circular wire with the fingers pointing in the direction of current and the thumb gives the direction of the magnetic field. In this case the upper side of the loop may be thought of as",
    image: "",
    options: ["direction of current", "south pole", "north pole", "direction of electric field"],
    answer: 3
  },
  {
    qNo: 31,
    subject: "physics",
    chapter: "Magnetism and Matter",
    question: "The Curie temperature Tc represents",
    image: "",
    options: ["temperature of transition from paramagnetic to ferromagnetic", "temperature of transition from paramagnetic to diamagnetic", "temperature of transition from ferromagnetic to paramagnetic", "temperature of transition from diamagnetic to paramagnetic"],
    answer: 3
  },
  {
    qNo: 32,
    subject: "physics",
    chapter: "Alternating Current",
    question: "A resistor of 100 Ω, an inductor of 25/π² mH and a capacitor of 0.1 μF are connected in series to an ac source. The impedance of the circuit is minimum for a frequency of",
    image: "",
    options: ["5 kHz", "10 kHz", "15 kHz", "20 kHz"],
    answer: 2
  },
  {
    qNo: 33,
    subject: "physics",
    chapter: "Electromagnetic Waves",
    question: "The electric field in NC⁻¹ of an electromagnetic wave is E = 36√π Sin(ωt - kx). The average energy density of the electromagnetic wave due to the electric field is (1/(4πε₀) = 9×10⁹ Nm²C⁻²)",
    image: "",
    options: ["36×10⁻⁹ Jm⁻³", "18×10⁻⁹ Jm⁻³", "36×10⁻⁷ Jm⁻³", "18×10⁻⁷ Jm⁻³"],
    answer: 2
  },
  {
    qNo: 34,
    subject: "physics",
    chapter: "Dual Nature of Radiation and Matter",
    question: "When light of wavelength λ incidents on a photosensitive material, photoelectrons are emitted. If the wavelength of the incident light is reduced by 50%, the maximum kinetic energy of the emitted photoelectrons becomes 3 times the initial maximum kinetic energy. The work function of the material is (h - Planck's constant, c - Speed of light in vacuum)",
    image: "",
    options: ["hc/(2λ)", "hc/λ", "2hc/λ", "hc/(3λ)"],
    answer: 1
  },
  {
    qNo: 35,
    subject: "physics",
    chapter: "Atoms",
    question: "The total energy of an electron in an orbit of hydrogen atom is E. The potential energy of the electron in the same orbit is",
    image: "",
    options: ["E", "E/2", "2E", "3E"],
    answer: 3
  },
  {
    qNo: 36,
    subject: "physics",
    chapter: "Nuclei",
    question: "Positron is the antiparticle of",
    image: "",
    options: ["proton", "electron", "neutron", "photon"],
    answer: 2
  },
  {
    qNo: 37,
    subject: "physics",
    chapter: "Wave Optics",
    question: "In Young’s double slit experiment, light of wavelength 5900 Å is used. When the slits are 2 mm apart, the fringe width is 1.2 mm. If the slit separation is increased to one and half times the previous value, then the fringe width will be",
    image: "",
    options: ["0.9mm", "0.8mm", "1.8mm", "1.6mm"],
    answer: 2
  },
  {
    qNo: 38,
    subject: "physics",
    chapter: "Semiconductor Electronics",
    question: "In a transistor amplifier, the voltage gain is",
    image: "",
    options: ["same for all frequencies", "high for high frquencies and low for low frequencies", "low for high frquencies and high for low frequencies", "low for high and low frquencies and constant at mid frequencies"],
    answer: 4
  },
  {
    qNo: 39,
    subject: "physics",
    chapter: "Communication Systems",
    question: "The radio horizon of the transmission of an antenna placed on 20th floor in a shopping mall, where the height of each floor is 2 m is (Radius of earth is 6.4×10⁶m)",
    image: "",
    options: ["22.6 km", "45 km", "36 km", "67.5 km"],
    answer: 1
  },
  {
    qNo: 40,
    subject: "physics",
    chapter: "Electromagnetic Induction",
    question: "Physically, the self-inductance plays the role of ",
    image: "",
    options: ["inertia", "kinetic energy", "potential energy", "velocity"],
    answer: 1
  },{
    qNo: 41,
    subject: "chemistry",
    chapter: "Structure of Atom",
    question: "Identify the region of spectral lines of electromagnetic spectrum, when electron transitions takes place from higher energy level to n=3,4,5 in atomic spectrum of hydrogen is",
    image: "",
    options: ["Ultraviolet", "Visible", "Infrared", "Microwave"],
    answer: 3
  },
  {
    qNo: 42,
    subject: "chemistry",
    chapter: "Structure of Atom",
    question: "Maximum number of electrons theoretically possible for an orbit with principal quantum number n = 6 in an atom is",
    image: "",
    options: ["27", "98", "72", "50"],
    answer: 3
  },
  {
    qNo: 43,
    subject: "chemistry",
    chapter: "Classification of Elements and Periodicity in Properties",
    question: "Which of the following statements are correct? I. P is having least negative electron gain enthalpy among P, S, Cl, and F. II. In Eu, Yb Lanthanoid contraction is not observed. III. Ce(OH)₃ is most basic among lanthanoid hydroxides. IV. The radii of Na and Na⁺ are 95 pm, 186 pm respectively.",
    image: "",
    options: ["I, III, IV only", "II, IV only", "I, III only", "I, II, III only"],
    answer: 4
  },
  {
    qNo: 44,
    subject: "chemistry",
    chapter: "Classification of Elements and Periodicity in Properties",
    question: "The correct order of electron gain enthalpy of N, O, Cl, Al is",
    image: "",
    options: ["Cl < N < O < Al", "Al < N < O < Cl", "O < N < Al < Cl", "N < O < Cl < Al"],
    answer: 2
  },
  {
    qNo: 45,
    subject: "chemistry",
    chapter: "Chemical Bonding and Molecular Structure",
    question: "The correct order of bond enthalpy of given molecules is",
    image: "",
    options: ["O₂ < N₂ < H₂", "N₂ < O₂ < H₂", "H₂ < N₂ < O₂", "H₂ < O₂ < N₂"],
    answer: 4
  },
  {
    qNo: 46,
    subject: "chemistry",
    chapter: "Chemical Bonding and Molecular Structure",
    question: "The number of bond pairs of electrons and total number of lone pairs of electrons in XeOF₄ are respectively",
    image: "",
    options: ["6, 10", "5, 15", "5, 10", "6, 15"],
    answer: 4
  },
  {
    qNo: 47,
    subject: "chemistry",
    chapter: "States of Matter",
    question: "At T(K), an ideal gas (Z) present in V L flask exerted a pressure of 16.4 atm. Its concentration is 1 mol L⁻¹. What is the value of T in K?",
    image: "",
    options: ["100", "400", "300", "200"],
    answer: 4
  },
  {
    qNo: 48,
    subject: "chemistry",
    chapter: "States of Matter",
    question: "At 300 K, the following graph is obtained for one mole of an ideal gas. If its pressure is 10 atm,slope= 1.1 , then its volume (in L) will be",
    image: "",
    options: ["0.11", "1.1", "2.0", "4.0"],
    answer: 1
  },
  {
    qNo: 49,
    subject: "chemistry",
    chapter: "Redox Reactions",
    question: "What are x, y and z respectively in the following reaction? xFe²⁺(aq) + yH⁺(aq) + zCr₂O₇²⁻(aq) → (y/2)H₂O(l) + xFe³⁺(aq) + 2zCr³⁺(aq)",
    image: "",
    options: ["14, 1, 6", "14, 6, 1", "6, 1, 14", "6, 14, 1"],
    answer: 4
  },
  {
    qNo: 50,
    subject: "chemistry",
    chapter: "Thermodynamics",
    question: "If the enthalpy and entropy change for a reaction at 298 K are -145 kJ mol⁻¹ and -650 J K⁻¹ mol⁻¹ respectively, which one of the following statements is correct?",
    image: "",
    options: ["ΔG = -50 kJ mol⁻¹, the reaction is spontaneous", "ΔG = -48.7 kJ mol⁻¹, the reaction is non-spontaneous", "ΔG = +50 kJ mol⁻¹, the reaction is spontaneous", "ΔG = 48.7 kJ mol⁻¹, the reaction is non-spontaneous"],
    answer: 4
  },
  {
    qNo: 51,
    subject: "chemistry",
    chapter: "Thermodynamics",
    question: "11.0 L of an ideal gas at constant external pressure of 5 atm is compressed isothermally to a final volume of one liter. The heat absorbed and work done respectively, during this compression (in L atm) are",
    image: "",
    options: ["-50, -50", "50, -50", "-50, 50", "50, 50"],
    answer: 3
  },
  {
    qNo: 52,
    subject: "chemistry",
    chapter: "Equilibrium",
    question: "Given below are two statements Statement I: The changes in pH with temperature are so small that we often ignore it Statement II: When the hydrogen ion concentration changes by a factor of 100, the pH changes by one unit",
    image: "",
    options: ["Both statements are correct", "Statement I is correct but statement II is not correct", "Statement I is not correct but statement II is correct", "Both statements are not correct"],
    answer: 2
  },
  {
    qNo: 53,
    subject: "chemistry",
    chapter: "Equilibrium",
    question: "One mole H₂O(g) and one mole CO(g) are taken in 1L flask and heated to 725K. At equilibrium, 40% (by mass) of water reacted with CO(g) as follows: H₂O(g) + CO(g) ⇌ H₂(g) + CO₂(g). Its Kp value is",
    image: "",
    options: ["2.220", "0.444", "4.440", "0.222"],
    answer: 2
  },
  {
    qNo: 54,
    subject: "chemistry",
    chapter: "Hydrogen",
    question: "The following methods can not be used to remove permanent hardness of water",
    image: "",
    options: ["Treatment with washing soda", "Ion-exchange method", "Treating with Calgon", "Adding calculated amount of lime"],
    answer: 4
  },
  {
    qNo: 55,
    subject: "chemistry",
    chapter: "The s-Block Elements",
    question: "Which of the following statement(s) is/are correct? (i) LiNO₃, Ba(NO₃)₂ both will give NO₂ on heating (ii) BaSO₄ is less soluble in water than CaSO₄ (iii) Alkaline earth metals do not dissolve in liquid ammonia",
    image: "",
    options: ["i only", "i, ii only", "i, ii & iii", "i, iii only"],
    answer: 2
  },
  {
    qNo: 56,
    subject: "chemistry",
    chapter: "The p-Block Elements",
    question: "Statement I: Boron does not exhibit allotropy Statement II: Boron is extremely hard and black coloured solid",
    image: "",
    options: ["Both I & II are correct", "Both I & II are not correct", "I is correct but II is not correct", "I is not correct but II is correct"],
    answer: 4
  },
  {
    qNo: 57,
    subject: "chemistry",
    chapter: "The p-Block Elements",
    question: "Which of the following is not correct?",
    image: "",
    options: ["Lead does not show catenation", "Buckminster fullerene contains 20 six-membered rings and 12 five-membered rings", "Stability order of GeX₂, SnX₂ and PbX₂ is GeX₂ < SnX₂ < PbX₂", "The number of metalloids in group 14 elements is 2"],
    answer: 4
  },
  {
    qNo: 58,
    subject: "chemistry",
    chapter: "Organic Chemistry - Some Basic Principles and Techniques",
    question: "The decreasing order of priority for the following functional groups in the IUPAC Nomenclature is -SO₂H, -CN, -COOH, -OH, -CHO",
    image: "",
    options: ["-SO₃H > -COOH > -CN > -CHO > -OH", "-SO₃H > -COOH > -CHO > -CN > -OH", "-COOH > -SO₃H > -CHO > -CN > -OH", "-COOH > -SO₃H > -CN > -CHO > -OH"],
    answer: 4
  },
  {
    qNo: 59,
    subject: "chemistry",
    chapter: "Organic Chemistry - Some Basic Principles and Techniques",
    question: "Arrange the following free radicals in the correct order of their stability (i) CH₂=CH• (ii) CH₃• (iii) CH₃-CH^•-CH₃ (iv) (CH₃)₃C•",
    image: "",
    options: ["i > ii > iii > iv", "iv > iii > ii > i", "i < ii < iii < iv", "iv > iii > i > ii"],
    answer: 2
  },
  {
    qNo: 60,
    subject: "chemistry",
    chapter: "Electrochemistry",
    question: "In which of the following cells, the space between cathode and anode is filled by a moist mixture of ammonium chloride and zinc chloride",
    image: "",
    options: ["Mercury cell", "Leclanché cell", "Nickel-cadmium cell", "Fuel cell"],
    answer: 2
  },
  {
    qNo: 61,
    subject: "chemistry",
    chapter: "Solutions",
    question: "6 g of a non-volatile solute (x) is dissolved in 100 g of water. The relative lowering of vapour pressure of resultant solution is 0.006. What is the molar mass (in g mol⁻¹) of x?",
    image: "",
    options: ["60", "360", "100", "180"],
    answer: 4
  },
  {
    qNo: 62,
    subject: "chemistry",
    chapter: "Solutions",
    question: "The molality of solution, when 18 g of glucose is added to the 18 g of H₂O is",
    image: "",
    options: ["0.55 m", "5.55 m", "2.55 m", "55.5 m"],
    answer: 2
  },
  {
    qNo: 63,
    subject: "chemistry",
    chapter: "General Principles and Processes of Isolation of Elements",
    question: " Identify the correct statements from the following: i. In the extraction of Ag and Au, zinc is used as reducing agent. ii. Impure zinc can be refined by distillation method. iii. Malachite is an ore of nickel.",
    image: "",
    options: [" i, ii, iii", "i, iii only", "ii, iii only", "i, ii only"],
    answer: 4
  },
  {
    qNo: 64,
    subject: "chemistry",
    chapter: "Surface Chemistry",
    question: "Which of the following is not correctly matched for enzymatic reactions?",
    image: "",
    options: ["Proteins → Amino acids ; Trypsin", "Starch → Maltose : Diastase", "Sucrose → glucose and fructose; zymase", "Maltose → glucose ; Maltase"],
    answer: 3
  },
  {
    qNo: 65,
    subject: "chemistry",
    chapter: "Surface Chemistry",
    question: "The greater the valence of the flocculating ion added, the greater is its power to cause precipitation of a colloid. This rule is",
    image: "",
    options: ["Hund's rule", "Pauling rule", "Henry's rule", "Hardy-Schulze rule"],
    answer: 4
  },
  {
    qNo: 66,
    subject: "chemistry",
    chapter: "The p-Block Elements",
    question: "White phosphorous reacts with sulphuryl chloride to form PCl5 and X. Chlorine reacts with X in the presence of wood charcoal to form Y. X and Y are respectively",
    image: "",
    options: ["SO2, SO2Cl2", " SO2, SCl4", "SO3, SO2Cl2", "SO3, SCl4"],
    answer: 1
  },
  {
    qNo: 67,
    subject: "chemistry",
    chapter: "The p-Block Elements",
    question: "In which of the following, the molecules are arranged in the increasing order of their bond angles?",
    image: "",
    options: ["P₄ < S₆ < O₃ < S₈", "S₆ < O₃ < S₈ < P₄", "O₃ < S₈ < P₄ < S₆", "P₄ < S₆ < S₈ < O₃"],
    answer: 4
  },
  {
    qNo: 68,
    subject: "chemistry",
    chapter: "The d-and f-Block Elements",
    question: "Select the correct order of radii of the given ions",
    image: "",
    options: ["Yb³⁺ < Sm³⁺ < Dy³⁺ < Pr³⁺", "Yb³⁺ < Dy³⁺ < Sm³⁺ < Pr³⁺", "Pr³⁺ < Sm³⁺ < Dy³⁺ < Yb³⁺", "Pr³⁺ < Sm³⁺ < Yb³⁺ < Dy³⁺"],
    answer: 2
  },
  {
    qNo: 69,
    subject: "chemistry",
    chapter: "The d-and f-Block Elements",
    question: "Among V, Cr, Zn, Fe, the metal having lowest enthalpy of atomization is",
    image: "",
    options: ["V", "Cr", "Zn", "Fe"],
    answer: 3
  },
  {
    qNo: 70,
    subject: "chemistry",
    chapter: "Polymers",
    question: "Which of the following polymer is used in the preparation of gaskets?",
    image: "",
    options: ["Polyethylene", "Polystyrene", "Polyvinyl chloride", "Polyurethane"],
    answer: 4
  },
  {
    qNo: 71,
    subject: "chemistry",
    chapter: "Biomolecules",
    question: "Match the following: List-I (A. Beri Beri, B. Scurvy, C. Cheilosis, D. Rickets) with List-II (I. Riboflavin, II. Thiamine, III. Pyridoxine, IV. Ascorbic acid, V. Vitamin D)",
    image: "",
    options: ["A-III, B-IV, C-III, D-V", "A-II, B-IV, C-I, D-V", "A-III, B-V, C-I, D-II", "A-III, B-V, C-IV, D-II"],
    answer: 2
  },
  {
    qNo: 72,
    subject: "chemistry",
    chapter: "Biomolecules",
    question: "The source of vitamin, whose deficiency causes scurvy is",
    image: "",
    options: ["Amla", "Carrot", "Egg", "Fish"],
    answer: 1
  },
  {
    qNo: 73,
    subject: "chemistry",
    chapter: "Chemistry in Everyday Life",
    question: "Ranitidine belongs to which of the following class of drugs?",
    image: "",
    options: ["Tranquiliser", "Antiseptic", "Analgesic", "Antacid"],
    answer: 4
  },
  {
    qNo: 74,
    subject: "chemistry",
    chapter: "The p-Block Elements",
    question: "Assertion (A): Helium has lowest boiling point (4.2 K) Reason (R): The forces that exist between Helium atoms are weak dispersion forces. The correct answer is",
    image: "",
    options: ["Both (A) and (R) are correct and (R) is the correct explanation of (A).", "Both (A) and (R) are correct and (R) is not the correct explanation of (A)", "(A) is correct but (R) is not correct", "(A) is not correct but (R) is correct."],
    answer: 1
  },
  {
    qNo: 75,
    subject: "chemistry",
    chapter: "Polymers",
    question: "Number average molecular mass of a polymer that contains 15 molecules with each of mass 8,000 and 15 molecules with each of mass 80,000 is",
    image: "",
    options: ["22,000", "33,000", "11,000", "44,000"],
    answer: 4
  },
  {
    qNo: 76,
    subject: "chemistry",
    chapter: "Biomolecules",
    question: "Which of the following statements are correct? A. A tripeptide has two peptide bonds B. A pentapeptide contains five amino acids C. Nucleotide is a product of base and sugar D. In cellulose, β-glycosidic linkages are present",
    image: "",
    options: ["B, C ,D", " C,D only", "A,B,D", "A,C only"],
    answer: 3
  },
  {
    qNo: 77,
    subject: "chemistry",
    chapter: "Structure of Atom",
    question: " The work function (W0 ) of Li, K, Mg, Ag and Cu are 2.42,2.25, 3.70, 4.30 and 4.80 eV respectively. The number of metals which undergo photoelectric effect if a radiation of wavelength 540 nm falls on them is- (1 eV= 19 1.602 10 J − × )",
    image: "",
    options: ["4", "2", "1", "3"],
    answer: 3
  },
  {
    qNo: 78,
    subject: "chemistry",
    chapter: "Structure of Atom",
    question: "What is the mass of a particle with a wavelength of 3.13 A^o moving with a speed of 2.0 × 10⁸ m/s^-1?",
    image: "",
    options: ["1.0x10^-28 kg", "2.0x10^-32 kg", "1.0x10^-32 kg", "2.0x10^-28 kg"],
    answer: 3
  },
  {
    qNo: 79,
    subject: "chemistry",
    chapter: "The d-and f-Block Elements",
    question: "If the electronic configuration of M3+ is [Xe] 4f^3, then M^3+ is",
    image: "",
    options: ["Nd^3+", "Pr^3+", "Sm^3+", "Dy^3+"],
    answer: 1
  },
  {
    qNo: 80,
    subject: "chemistry",
    chapter: "States of Matter",
    question: " The ratio of rates of diffusion of gases A and B is 1:0.707. If the molecular weight of B is 32, the molecular weight of A is",
    image: "",
    options: ["2", "64", "16", "8"],
    answer: 3
  },{
    qNo: 81,
    subject: "maths",
    chapter: "Functions",
    question: "If a set A has n elements, then the number of functions defined from A to A that are not one-one is",
    image: "",
    options: ["(n)^(n)^2", "n!", "n^n - n!", "n^n"],
    answer: 3
  },
  {
    qNo: 82,
    subject: "maths",
    chapter: "Matrices",
    question: "If A = [[1,1,3],[5,2,6],[-2,-1,-3]], then A + A³ + A⁴ + A⁵ + 3I =",
    image: "",
    options: ["[[4,2,1],[2,5,6],[-3,2,3]]", "[[4,1,3],[5,5,6],[-2,-1,0]]", "[[3,1,4],[3,1,-2],[-1,2,-1]]", "[[4,1,3],[2,3,5],[-3,-2,-3]]"],
    answer: 2
  },
  {
    qNo: 83,
    subject: "maths",
    chapter: "Matrices",
    question: "If the solution for the system of equations x + 2y - z = 3, 3x - y + 2z = 1 and 2x - 2y + 3z = 2 is (α,β,γ), then α² + β² + γ² =",
    image: "",
    options: ["33", "5", "17", "14"],
    answer: 1
  },
  {
    qNo: 84,
    subject: "maths",
    chapter: "Matrices",
    question: "If A, is a 3x3 matrix and |A|=2 then (Adj A)|Adj(Adj A)=",
    image: "",
    options: ["32A", "64A", "16A", "8A"],
    answer: 1
  },
  {
    qNo: 85,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "If 1, ω, ω² are the cube roots of unity, k is positive integer and (1-ω+ω²)³ᵏ + (1-ω²+ω)³ᵏ = (1-ω+ω²)³ᵏ⁺¹ + (1+ω-ω²)³ᵏ⁺¹, then k =",
    image: "",
    options: ["r, r ∈ N", "2r+1, r ∈ N", "4r+1, r ∈ N", "3r, r ∈ N"],
    answer: 1
  },
  {
    qNo: 86,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "If α, β are the two real roots of 4th roots of unity and γ, δ are the other two roots of it, then the sum of the eccentricities of the conics |z-α|+|z-β|=4 and |z-γ|+|z-δ|=6 is",
    image: "",
    options: ["5/6", "5/12", "3/7", "4/5"],
    answer: 1
  },
  {
    qNo: 87,
    subject: "maths",
    chapter: "Theory of Equations",
    question: "If the sum of the cubes of the roots of the equation x³ - ax² + bx - c = 0 is zero, then a³ + 3c =",
    image: "",
    options: ["-2ab", "2ab", "-3ab", "3ab"],
    answer: 4
  },
  {
    qNo: 88,
    subject: "maths",
    chapter: "Theory of Equations",
    question: "If α, β, γ are the roots of x³ + 2x + 5 = 0, then Σ (β+γ)/α² =",
    image: "",
    options: ["-2/5", "1/5", "2/5", "-3/5"],
    answer: 3
  },
  {
    qNo: 89,
    subject: "maths",
    chapter: "Binomial Theorem",
    question: "If the numerically greatest term in the expansion of $(2 - 3x)^9$ when $x = 1$ is $P_1^{\alpha} P_2^{\beta} P_3^{\gamma} P_4^{\delta}$ (where $P_1 < P_2 < P_3 < P_4$ are the first four prime numbers), then $\alpha + \beta + \gamma + \delta =$",
    image: "",
    options: ["13", "12", "14", "11"],
    answer: 1
  },
  {
    qNo: 90,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "The number of all 8 digit odd numbers is",
    image: "",
    options: ["45×10⁶", "90×10⁶", "9×10⁸", "9×10⁶"],
    answer: 1
  },
  {
    qNo: 91,
    subject: "maths",
    chapter: "Binomial Theorem",
    question: "The degree of the polynomial (x+√(x⁴-1))⁹ + (x-√(x⁴-1))⁹ is",
    image: "",
    options: ["14", "15", "16", "17"],
    answer: 4
  },
  {
    qNo: 92,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "The number of all four digit numbers which begin with 4 and end with either zero or five is",
    image: "",
    options: ["200", "64", "256", "32"],
    answer: 1
  },
  {
    qNo: 93,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "If f(n) = n!(31-n)!, where n ∈ {0,1,2,...,31}, then the minimum value of f(n) is",
    image: "",
    options: ["15!(15!)", "15!(14!)", "(14!)(16!)", "(15!)(16!)"],
    answer: 4
  },
  {
    qNo: 94,
    subject: "maths",
    chapter: "Trigonometric Ratios and Identities",
    question: "tan A/(1-cot A) + cot A/(1-tan A) =",
    image: "",
    options: ["sec A cosec A - 1", "tan A + cot A", "tan A + cot A + 1", "sec A + cosec A + 1"],
    answer: 3
  },
  {
    qNo: 95,
    subject: "maths",
    chapter: "Matrices",
    question: "If x=α, y=β, z=γ is the solution for the system of equation,2x-y+8z=13,3x+4y+5z=18,5z-2y+7z=20 , Then αβ + βγ + γα =",
    image: "",
    options: ["1", "0", "7", "-3"],
    answer: 3
  },
  {
    qNo: 96,
    subject: "maths",
    chapter: "Properties of Triangles",
    question: "In ΔABC, (sin2A + sin2B + sin2C)/(cos A + cos B + cos C-1) =",
    image: "",
    options: ["2[sin A + sin B + sin C]", "sin A + sin B + sin C", "4[sin A + sin B + sin C]", "8[sin A + sin B + sin C]"],
    answer: 1
  },
  {
    qNo: 97,
    subject: "maths",
    chapter: "Trigonometric Ratios and Identities",
    question: "cos12°.cos24°.cos36°.cos48°.cos72°.cos84° =",
    image: "",
    options: ["1/32", "1/16", "1/64", "1/128"],
    answer: 3
  },
  {
    qNo: 98,
    subject: "maths",
    chapter: "Trigonometric Ratios and Identities",
    question: "If α, β are acute angles such that sinβ = 2sinα and 3cosβ = 2cosα, then sec(α+β) =",
    image: "",
    options: ["4", "√15", "√20", "5"],
    answer: 1
  },
  {
    qNo: 99,
    subject: "maths",
    chapter: "Hyperbolic Functions",
    question: "If sinh x = 5/12, then cosh(x/2) =",
    image: "",
    options: ["3/2√5", "2/3√3", "5/√6", "5/(2√6)"],
    answer: 4
  },
  {
    qNo: 100,
    subject: "maths",
    chapter: "Properties of Triangles",
    question: "In ΔABC, if ∠C = 90°, then [(r₁ - r₃)/r₁][(r₂ - r₃)/r₂] =",
    image: "",
    options: ["1", "3", "4", "2"],
    answer: 4
  },
  {
    qNo: 101,
    subject: "maths",
    chapter: "Properties of Triangles",
    question: "In ΔABC, A, B and C are in arithmetic progression and a:c = 1:2. If b = 4√3 cm, then the area of ΔABC (in sq.cm) is",
    image: "",
    options: ["16√3", "12√3", "8√3", "6√3"],
    answer: 3
  },
  {
    qNo: 102,
    subject: "maths",
    chapter: "Partial Fractions",
    question: "If (17x-2)/(12x²-x-20) = A/(ax+5) + B/(3x+b), then aA + bB =",
    image: "",
    options: ["0", "4", "7", "10"],
    answer: 2
  },
  {
    qNo: 103,
    subject: "maths",
    chapter: "Vector Algebra",
    question: "Let a, b and c be any three non coplanar vectors. If m, n are scalars such that a + b = md - c and b + c = na - d, then 3a + 2b + 2c + d =",
    image: "",
    options: ["a - d", "a + d", "0", "b+c+2d"],
    answer: 1
  },
  {
    qNo: 104,
    subject: "maths",
    chapter: "Vector Algebra",
    question: "If 2i+j-k, i-3j+5k and -3i+4j+4k are the position vectors of three points A, B and C respectively, then",
    image: "",
    options: ["ABC is a right angled triangle", "ABC is an isosceles triangle", "A, B, C are collinear points", "ABC is a scalene triangle"],
    answer: 4
  },
  {
    qNo: 105,
    subject: "maths",
    chapter: "Vector Algebra",
    question: "A line L passes through the points i-9k and 7j+k and plane π passes through the point 6i+j and is perpendicular to i+j+k. If θ is the angle between L and π, then sinθ =",
    image: "",
    options: ["8√2/15", "3√3/8", "7/13", "24/25"],
    answer: 1
  },
  {
    qNo: 106,
    subject: "maths",
    chapter: "Probability",
    question: "If S be the sample space of a random experiment ξ and P be a probability function defined on the power set P(S) of S, then which one of the following is not satisfied by P?",
    image: "",
    options: ["P(φ) = 0", "If Eᶜ is the complementary event of E, then P(Eᶜ) = 1 - P(E)", "0 ≤ P(E) ≤ 1,for all E ⊆ S", "If E₁ ⊆ E₂ then P(E₂) ≤ P(E₁)"],
    answer: 4
  },
  {
    qNo: 107,
    subject: "maths",
    chapter: "Probability",
    question: "If A and B simultaneously toss one coin each every time, each 50 times, then the probability of not getting tail on both the coins is",
    image: "",
    options: ["(3/4)⁵⁰", "(2/3)⁵⁰", "(1/3)⁵⁰", "(1/2)⁵⁰"],
    answer: 1
  },
  {
    qNo: 108,
    subject: "maths",
    chapter: "Probability",
    question: "A pair of dice is thrown. Then the probability that either of the dice shows 2 when their sum is 6 is",
    image: "",
    options: ["1/2", "1/5", "2/5", "3/5"],
    answer: 3
  },
  {
    qNo: 109,
    subject: "maths",
    chapter: "Probability",
    question: "If A and B are any two events of a sample space, then set-theoretic description for the event: 'Exactly one of the events A, B to occur' is",
    image: "",
    options: ["A ∩ Bᶜ", "(A - B) ∪ (A ∪ B)", "(A ∩ Bᶜ) ∪ (Aᶜ ∩ B)", "(A ∩ B)ᶜ ∪ (Aᶜ ∩ Bᶜ)"],
    answer: 3
  },
  {
    qNo: 110,
    subject: "maths",
    chapter: "Random Variables and Probability Distributions",
    question: "If the mean and variance of a binomial variable X are 2.4 and 1.44 respectively, then the parameters n and p are respectively",
    image: "",
    options: ["6, 2/5", "4, 3/5", "6, 3/5", "8, 1/3"],
    answer: 1
  },
  {
    qNo: 111,
    subject: "maths",
    chapter: "Random Variables and Probability Distributions",
    question: "If a Bernoulli trial is conducted n times, then which one of the following is not suitable to use Poisson distribution?",
    image: "",
    options: ["(i)Each Trail results in two mututally exclusive outcomes namely success,failure", "(ii)The number 'n' of such trails is sufficiently large", "(iii)The trails are independent of each other ", "(iv)The probability 'p' of success in each trail is very large"],
    answer: 4
  },
  {
    qNo: 112,
    subject: "maths",
    chapter: "The Straight Line",
    question: "If the y-intercept of the perpendicular bisector of the line segment joining P(1,4) and Q(k,3) is -4, then a possible value of k is",
    image: "",
    options: ["2", "-2", "-4", "1"],
    answer: 3
  },
  {
    qNo: 113,
    subject: "maths",
    chapter: "The Straight Line",
    question: "A straight line L at a distance of 4 units from the origin makes positive intercepts on the coordinate axes and the perpendicular drawn from the origin to this line makes an angle of 60° with the line x + y = 0. Then the equation of the line L is",
    image: "",
    options: ["(√3+1)x + (√3-1)y = 8√2", "(√3-1)x + (√3+1)y = 8√2", "√3x + y = 8", "x + √3y = 8"],
    answer: 2
  },
  {
    qNo: 114,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "The points in the Argand plane represented by the complex conjugate of 1+2i, 2-3i, 3-4i",
    image: "",
    options: ["are collinear", "form a equilateral triangle", "form a obtuse angled trianlge", "form a acute angled triangle"],
    answer: 3
  },
  {
    qNo: 115,
    subject: "maths",
    chapter: "Pair of Straight Lines",
    question: "If ad ≠ 0 and two of the lines represented by ax³ + 3bx²y + 3cxy² + dy³ = 0 are perpendicular, then",
    image: "",
    options: ["a² + ac + bd + d² = 0", "a² + 3ac + 3bd + d² = 0", "a² - 3ac - 3bd + d² = 0", "a² + 3ac - 3bd + d² = 0"],
    answer: 2
  },
  {
    qNo: 116,
    subject: "maths",
    chapter: "Pair of Straight Lines",
    question: "The absolute value of the tangent of the difference of the angles made by the lines 4x² - 24xy + 11y² = 0 with the X-axis is",
    image: "",
    options: ["4/11", "24/11", "4/3", "11/24"],
    answer: 3
  },
  {
    qNo: 117,
    subject: "maths",
    chapter: "Three Dimensional Coordinates",
    question: "If the extremities of a diagonal of a square are (1,-2,3) and (2,-3,5), then the length of its side is",
    image: "",
    options: ["√6", "√3", "√5", "√7"],
    answer: 2
  },
  {
    qNo: 118,
    subject: "maths",
    chapter: "The Plane",
    question: "An equation of a plane parallel to the plane x - 2y + 2z - 5 = 0 and which is at one unit distance from the origin is",
    image: "",
    options: ["x - 2y + 2z - 1 = 0", "x - 2y + 2z + 5 = 0", "x - 2y + 2z - 3 = 0", "x - 2y + 2z + 1 = 0"],
    answer: 3
  },
  {
    qNo: 119,
    subject: "maths",
    chapter: "Circle",
    question: "A circle S touches Y-axis at (0,3) and makes an intercept of length 8 units on X-axis. If the centre C of the circle S lies in the second quadrant, then the distance of C from the point (-2,-1) is",
    image: "",
    options: ["13", "10", "5", "2"],
    answer: 3
  },
  {
    qNo: 120,
    subject: "maths",
    chapter: "Circle",
    question: "If the equation of the circle of radius 3 units which touches the circle x² + y² + 6x - 8y - 11 = 0 externally at (3,0) is x² + y² + 2gx + 2fy + c = 0, then 3g - 4f + c =",
    image: "",
    options: ["0", "5", "1", "-1"],
    answer: 2
  },
  {
    qNo: 121,
    subject: "maths",
    chapter: "Circle",
    question: "The polar of a point with respect to the circle x² + y² - 10x + 12y - 3 = 0 which is not a tangent and not a chord of contact is",
    image: "",
    options: ["2x + 3y + 8 = 0", "3x + 4y + 5 = 0", "5x - 12y + 7 = 0", "6x - 8y + 15 = 0"],
    answer: 4
  },
  {
    qNo: 122,
    subject: "maths",
    chapter: "System of Circles",
    question: "If the angle between the circles x² + y² + 2x - 4y + 1 = 0 and x² + y² - 4x - 2y + c = 0 is π/4, then c =",
    image: "",
    options: ["3", "-13", "-3 or 13", "-31 or -3"],
    answer: 1
  },
  {
    qNo: 123,
    subject: "maths",
    chapter: "Parabola",
    question: "Let a focal chord 12x + 5y - 27 = 0 of the parabola y² = kx intersect the parabola at the points P and P^1. If S is the focus of this parabola, then 9(SP+SP^1) =",
    image: "",
    options: ["27", "108", "16(SP·SP^1)", "4(SP·SP^1)"],
    answer: 4
  },
  {
    qNo: 124,
    subject: "maths",
    chapter: "Ellipse",
    question: "Let E be an ellipse whose major axis is X-axis and minor axis is Y-axis. If the distance of a point (5/2, 2√3) on E from its foci are 7/2 and 13/2, then the eccentricity of the ellipse E is",
    image: "",
    options: ["3/5", "1/5", "1/√5", "1/√2"],
    answer: 1
  },
  {
    qNo: 125,
    subject: "maths",
    chapter: "Hyperbola",
    question: "If P(π/4) and Q(3π/4) are two points on the hyperbola 4x² - y² - 8x - 2y - 13 = 0 in parametric form, then the distance between P and Q is",
    image: "",
    options: ["4√6", "10", "8√3", "5"],
    answer: 1
  },
  {
    qNo: 126,
    subject: "maths",
    chapter: "Hyperbola",
    question: "If the point (1,1) and the origin lie in the same region with respect to the hyperbola x²/a² - y²/1 = 1 (a>0), then the range of a is",
    image: "",
    options: ["(1/√2, ∞)", "(0, 1/√2)", "(0, 1)", "(0,√2)"],
    answer: 1
  },
  {
    qNo: 127,
    subject: "maths",
    chapter: "Limits and Continuity",
    question: "Let [t] represents the greatest integer not exceeding t and C = 1-2e². If the function f(x) = { [eˣ], x<0; aeˣ + [x-2], 0≤x<2; e^(-x) - C, x≥2 } is continuous at x=2, then f(x) is discontinuous at",
    image: "",
    options: ["x=1 only", "x=0 and x=1", "x=0 only", "x=0, x=1 and x=1/2"],
    answer: 1
  },
  {
    qNo: 128,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "If 1.α1,α2,.... αn−1 are the n th root of unity and n is an even natural number then (1+α1)(1+α2)...(1+αn−1) = ",
    image: "",
    options: ["0", "-1", "0", "2"],
    answer: 2
  },
  {
    qNo: 129,
    subject: "maths",
    chapter: "Differentiation",
    question: "f(x) is differentiable on R and f'(m) ≠ 0, m∈R. If lim_{x→m} [x f(m) - m f(x)]/(x-m) + f'(m) = f(m), then m =",
    image: "",
    options: ["0", "-1", "1", "2"],
    answer: 3
  },
  {
    qNo: 130,
    subject: "maths",
    chapter: "Differentiation",
    question: "Let f(x) be a differentiable function such that f(1)=2, f(2)=6 and f(x+y) = f(x) + kxy + (4/3)y² ∀x,y∈R, then f(x) =",
    image: "",
    options: ["4x - 2", "y - 4x² + 2x - 4", "(8/3)x² + 4/3", "(4/3)x² + 2/3"],
    answer: 4
  },
  {
    qNo: 131,
    subject: "maths",
    chapter: "Differentiation",
    question: "Let f(x) = {(5e^{1/x} + 2)/(3 - e^{1/x}), x≠0 and 0 ,x=0. Then at x=0, xf(x) and f(x) are respectively",
    image: "",
    options: ["Differentiable and continuous", "Continuous and differentiable", "Continuous and not differentiable", "Not differentiable and continuous"],
    answer: 3
  },
  {
    qNo: 132,
    subject: "maths",
    chapter: "Applications of Derivatives",
    question: "The ordinates of the points on the curve y = tan⁻¹(sin√x), 0≤x≤8π², at which the tangent is parallel to X-axis are",
    image: "",
    options: ["+π/3 and -π/3", "+π/6 and -π/6", "+π/4 and -π/4", "+π/2 and -π/2"],
    answer: 3
  },
  {
    qNo: 133,
    subject: "maths",
    chapter: "Applications of Derivatives",
    question: "If (a²-1)x + ay + (3-a) = 0 is a normal to the curve xy = 1, then the interval in which 'a' lies is",
    image: "",
    options: ["[-1,1] ∪ [2,∞)", "(-∞,-1] ∪ (0,1]", "[-1,1) ∪ (1,∞)", "(1,∞)"],
    answer: 2
  },
  {
    qNo: 134,
    subject: "maths",
    chapter: "Applications of Derivatives",
    question: "The maximum value of x⁴y⁴ when a²x⁴ + b²y⁴ = c⁶ is",
    image: "",
    options: ["c¹²/(16a⁴b⁴)", "c^(12)/(4a²b²)", "c⁶/(a+b)¹²", "c⁶/(a⁴+b⁴)"],
    answer: 2
  },
  {
    qNo: 135,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "∫ e^(sin x) (x cos³x - sin x)/cos²x dx =",
    image: "",
    options: ["e^(sin x)(x - sec x) + C", "e^(sin x)(x - cosec x) + C", "e^(sin x)(x + sec x) + C", "e^(sin x)(x + cosec x) + C"],
    answer: 1
  },
  {
    qNo: 136,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "If f'(x) = a cos x + b sin x and f'(0)=4, f(0)=3, f(π/2)=5, then f(x) =",
    image: "",
    options: ["2 cos x + 4 sin x + 1", "4 cos x + 2 sin x + 1", "2 cos x + 3 sin x + 1", "4 cos x + sin x + 1"],
    answer: 1
  },
  {
    qNo: 137,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "If ∫ f(x) dx = Ψ(x), then ∫ x⁵ f(x³) dx =",
    image: "",
    options: ["(1/3)[x³ Ψ(x³)] - ∫ x² Ψ(x³) dx", "(1/3)[x³ Ψ(x³)] + ∫ x² Ψ(x³) dx", "-(1/3)[x³ Ψ(x³)] - ∫ x³ Ψ(x³) dx", "-(1/3)[x³ Ψ(x³)] + ∫ x³ Ψ(x³) dx"],
    answer: 1
  },
  {
    qNo: 138,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "If ∫ (sin²α - sin²x)/(cos x - cos α) dx = φ(x) + Ax + B and B∈R, then",
    image: "",
    options: ["f(x)=2sinx, A=cosα", "f(x)=2sinx, A=2cosα", "f(x)=sinx, A=cosα", "f(x)=sinx, A=2cosα"],
    answer: 3
  },
  {
    qNo: 139,
    subject: "maths",
    chapter: "Indefinite Integration",
    question: "∫ (x^{3m} + x^{2m} + x^m)(2x^{2m} + 3x^m + 6)^{1/m} dx =",
    image: "",
    options: ["(1/(6(m+1)))(2x^{3m} + 3x^{2m} + 6x^m)^{(m+1)/m} + C", "(1/(6(m+1)))(2x^{3m} + 3x^{2m} + 6x^m)^{(m-1)/m} + C", "(1/(6(m+1)))(2x^{3m} + 3x^{2m} + 6)^{(m+1)/m} + C", "(1/(6(m-1)))(2x^{3m} + mx^{2m} + 6x^m)^{(m-1)/m} + C"],
    answer: 1
  },
  {
    qNo: 140,
    subject: "maths",
    chapter: "Definite Integration",
    question: "If a ∈ Z⁺, [x] is greatest integer not more than x and ∫₀ᵃ 2^{[x]} dx = 127, then a =",
    image: "",
    options: ["6", "7", "8", "9"],
    answer: 3
  },
  {
    qNo: 141,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "If all the letters of the word REPEAT are permuted in all possible ways and if the six letter permutation thus formed are arranged in dictionary order, then the rank of the word REPEAT is",
    image: "",
    options: ["133", "267", "266", "132"],
    answer: 2
  },
  {
    qNo: 142,
    subject: "maths",
    chapter: "Definite Integration",
    question: "The positive value of x satisfying the equation ∫₁ˣ (1-t) dt = 1/2 is",
    image: "",
    options: ["1", "2", "3", "4"],
    answer: 2
  },
  {
    qNo: 143,
    subject: "maths",
    chapter: "Areas",
    question: "The area (in sq. units) bounded by x = 4, y = -4 and y = x is",
    image: "",
    options: ["48", "32", "24", "16"],
    answer: 2
  },
  {
    qNo: 144,
    subject: "maths",
    chapter: "Differential Equations",
    question: "The particular solution of the differential equation (1+y²)dx - xy dy = 0, y(1)=0 represents",
    image: "",
    options: ["a circle", "a part of parabola", "a part of ellipse", "a part of hyperbola"],
    answer: 4
  },
  {
    qNo: 145,
    subject: "maths",
    chapter: "Differential Equations",
    question: "If c and d are arbitrary constants, then y = e^{2x}(c cosh√2 x + d sinh√2 x) is the general solution of the differential equation",
    image: "",
    options: ["y'' + 4y' + 2y = 0", "y'' - 4y' + 2y = 0", "y'' - 4y' + 4y = 0", "y'' - 2√2 y' + 2y = 0"],
    answer: 2
  },
  {
    qNo: 146,
    subject: "maths",
    chapter: "Differential Equations",
    question: "Which one of the following is a homogeneous differential equation?",
    image: "",
    options: ["dy/dx = x³ + (sin x)y", "dy/dx = (x³ + y³)e^{y/x} + x√y", "(x² + y²) dx = 2xy dy", "x dy/dx = y + e^{y/x}"],
    answer: 3
  },
  {
    qNo: 147,
    subject: "maths",
    chapter: "Probability",
    question: "The probability that a leap year has 53 Sundays is:",
    image: "",
    options: ["1/7", "2/7", "3/7", "1/2"],
    answer: 2
  },
  {
    qNo: 148,
    subject: "maths",
    chapter: "The Plane",
    question: "The equation of the plane passing through the points (1,0,0), (0,2,0) and (0,0,3) is:",
    image: "",
    options: ["6x + 3y + 2z = 6", "6x + 3y + 2z = 12", "x/1 + y/2 + z/3 = 1", "x/6 + y/3 + z/2 = 1"],
    answer: 1
  },
  {
    qNo: 149,
    subject: "maths",
    chapter: "Areas",
    question: "The area of the region bounded by the curve y = x^2 and the line y = 4 is:",
    image: "",
    options: ["8/3", "16/3", "32/3", "64/3"],
    answer: 3
  },
  {
    qNo: 150,
    subject: "maths",
    chapter: "Probability",
    question: "A bag contains 5 red and 3 green balls. Two balls are drawn at random without replacement. The probability that both are of the same color is:",
    image: "",
    options: ["13/28", "15/28", "17/28", "19/28"],
    answer: 1
  },
  {
    qNo: 151,
    subject: "maths",
    chapter: "Differentiation",
    question: "The derivative of sin(x) with respect to x is:",
    image: "",
    options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    answer: 1
  },
  {
    qNo: 152,
    subject: "maths",
    chapter: "Definite Integration",
    question: "The value of ∫ 2x dx from 0 to 1 is:",
    image: "",
    options: ["0", "1", "2", "3"],
    answer: 2
  },
  {
    qNo: 153,
    subject: "maths",
    chapter: "Probability",
    question: "If P(A) = 0.4 and P(B) = 0.5, and A and B are independent, then P(A ∩ B) is:",
    image: "",
    options: ["0.1", "0.2", "0.9", "0.5"],
    answer: 2
  },
  {
    qNo: 154,
    subject: "maths",
    chapter: "The Straight Line",
    question: "The slope of the line passing through points (1,2) and (3,6) is:",
    image: "",
    options: ["1", "2", "3", "4"],
    answer: 2
  },
  {
    qNo: 155,
    subject: "maths",
    chapter: "Logarithms",
    question: "The value of log(100) base 10 is:",
    image: "",
    options: ["1", "2", "10", "100"],
    answer: 2
  },
  {
    qNo: 156,
    subject: "maths",
    chapter: "Quadratic Equations",
    question: "The sum of roots of the quadratic equation x² - 5x + 6 = 0 is:",
    image: "",
    options: ["5", "-5", "6", "-6"],
    answer: 1
  },
  {
    qNo: 157,
    subject: "maths",
    chapter: "Permutations and Combinations",
    question: "The number of permutations of the letters in the word 'CAT' is:",
    image: "",
    options: ["3", "9", "6", "12"],
    answer: 3
  },
  {
    qNo: 158,
    subject: "maths",
    chapter: "Trigonometric Ratios and Identities",
    question: "If sin θ = 1/2 and θ is acute, then θ = ?",
    image: "",
    options: ["30°", "45°", "60°", "90°"],
    answer: 1
  },
  {
    qNo: 159,
    subject: "maths",
    chapter: "Complex Numbers",
    question: "The value of i² (where i = √-1) is:",
    image: "",
    options: ["1", "-1", "i", "-i"],
    answer: 2
  },
  {
    qNo: 160,
    subject: "maths",
    chapter: "Probability",
    question: "If a die is rolled once, the probability of getting an even number is:",
    image: "",
    options: ["1/6", "1/3", "1/2", "2/3"],
    answer: 3
  }
];

// Wrap them in a big master array for looping
const allSets = [set1, set2, set3, set4, set5];

async function uploadIn5SetCycle() {
  try {
    let finalDataToInsert = [];
    
    // Config: Start Date (April 22, 2026)
    const startDay = 22;
    const month = 3; // April
    const year = 2026;

    console.log("⏳ Processing 10 data arrays into a 5-set loop...");

    allSets.forEach((currentSet, index) => {
      // MODULO 5: index 0..4 becomes 1..5, index 5..9 also becomes 1..5
      const cycleIndex = index % 5; 
      const setNumber = cycleIndex + 1;

      // Date also resets every 5 days
      const examDate = new Date(year, month, startDay + cycleIndex);
      examDate.setHours(0, 0, 0, 0);

      const mappedSet = currentSet.map(q => ({
        ...q,
        setNumber: setNumber, 
        availableDate: examDate
      }));

      finalDataToInsert.push(...mappedSet);
      console.log(`- Array[${index}] -> Mapped to Set ${setNumber} (${examDate.toDateString()})`);
    });

    // 3. Clear 'questions' collection ONLY
    // Ikkada Question model vaduthunnam kabatti 'results' collection delete avvadu.
    await Question.deleteMany({}); 
    
    const result = await Question.insertMany(finalDataToInsert);

    console.log(`
    -------------------------------------------
    🚀 SUCCESS: QUESTIONS UPLOADED!
    Total Questions in DB: ${result.length}
    Cycle: 5-Day Rotation (Set 1-5)
    Check 'questions' collection in Atlas.
    -------------------------------------------
    `);

  } catch (error) {
    console.error("❌ Error during upload:", error);
  } finally {
    mongoose.disconnect();
  }
}

uploadIn5SetCycle();
