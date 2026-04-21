const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("✅ DB Connected"))
.catch(err=>console.log(err));

const Question = mongoose.model("Question", {
  qNo: Number,
  subject: String,
  question: String,
  chapter:String,
  image: String,
  options: [String],
  answer: Number
});

const questions = [

/* ================= PHYSICS ================= */

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


async function insertData() {
  await Question.deleteMany(); // optional clear
  await Question.insertMany(questions);
  console.log("Questions inserted ✅");
  mongoose.disconnect();
}

insertData();