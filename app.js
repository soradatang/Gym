const schedule = {
  1: [
    { name: "Dumbbell Bench Press – 4x10", img: "images/dumbbell-bench-press.jpg" },
    { name: "Incline Dumbbell Press – 4x10", img: "images/incline-dumbbell-press.jpg" },
    { name: "Chest Fly – 4x12", img: "images/chest-fly.jpg" },
    { name: "Single-arm Cable Chest Press – 3x12 mỗi bên", img: "images/single-arm-cable-chest-press.jpg" },
    { name: "Triceps Dips – 4x12", img: "images/triceps-dips.jpg" },
    { name: "Rope Triceps Pushdown – 3x15", img: "images/rope-triceps-pushdown.jpg" },
    { name: "Overhead Dumbbell Extension – 3x12", img: "images/overhead-dumbbell-extension.jpg" }
  ],
  2: [
    { name: "Pull-up – 4x max", img: "images/pull-up.jpg" },
    { name: "Barbell Row – 4x10", img: "images/barbell-row.jpg" },
    { name: "One-arm Dumbbell Row – 3x12 mỗi bên", img: "images/one-arm-dumbbell-row.jpg" },
    { name: "Seated Cable Row – 3x12", img: "images/seated-cable-row.jpg" },
    { name: "Dumbbell Bicep Curl – 4x12", img: "images/dumbbell-bicep-curl.jpg" },
    { name: "Concentration Curl – 3x12 mỗi bên", img: "images/concentration-curl.jpg" },
    { name: "Hammer Curl – 3x12", img: "images/hammer-curl.jpg" },
    { name: "Reverse Curl – 2x15", img: "images/reverse-curl.jpg" },
    { name: "Wrist Curl – 2x20", img: "images/wrist-curl.jpg" }
  ],
  4: [
    { name: "Seated Dumbbell Shoulder Press – 4x10", img: "images/seated-dumbbell-shoulder-press.jpg" },
    { name: "One-arm Lateral Raise – 3x15 mỗi bên", img: "images/one-arm-lateral-raise.jpg" },
    { name: "Rear Delt Fly – 4x12", img: "images/rear-delt-fly.jpg" },
    { name: "Dumbbell Front Raise – 3x12", img: "images/dumbbell-front-raise.jpg" },
    { name: "Plank – 3x60s", img: "images/plank.jpg" },
    { name: "Leg Raise – 3x15", img: "images/leg-raise.jpg" },
    { name: "Cable Crunch – 3x20", img: "images/cable-crunch.jpg" }
  ],
  6: [
    { name: "Dumbbell Pullover – 4x12", img: "images/dumbbell-pullover.jpg" },
    { name: "Single-arm Chest Press – 3x12 mỗi bên", img: "images/single-arm-chest-press.jpg" },
    { name: "Hanging Leg Raise – 3x15", img: "images/hanging-leg-raise.jpg" },
    { name: "Russian Twist – 3x20 mỗi bên", img: "images/russian-twist.jpg" },
    { name: "Side Plank – 3x mỗi bên 30s", img: "images/side-plank.jpg" }
  ],
  0: [
    { name: "Bulgarian Split Squat – 3x12 mỗi bên", img: "images/bulgarian-split-squat.jpg" },
    { name: "Barbell Back Squat – 4x10", img: "images/barbell-back-squat.jpg" },
    { name: "Romanian Deadlift – 3x12", img: "images/romanian-deadlift.jpg" },
    { name: "Single-leg Press – 3x12 mỗi bên", img: "images/single-leg-press.jpg" },
    { name: "Seated Leg Curl – 3x15", img: "images/seated-leg-curl.jpg" },
    { name: "Standing Calf Raise – 3x20", img: "images/standing-calf-raise.jpg" },
    { name: "Dumbbell Shrug – 3x15", img: "images/dumbbell-shrug.jpg" },
    { name: "Barbell Shrug – 3x15", img: "images/barbell-shrug.jpg" }
  ]
};

const daySelector = document.getElementById("daySelector");
const exercisesList = document.getElementById("exercises");

function updateExercises(day) {
  exercisesList.innerHTML = "";
  if (schedule[day]) {
    schedule[day].forEach((ex) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = ex.img;
      img.alt = ex.name;
      li.innerHTML = `<strong>${ex.name}</strong><br>`;
      li.appendChild(img);
      exercisesList.appendChild(li);
    });
  } else {
    exercisesList.innerHTML = "<li>Ngày này nghỉ tập.</li>";
  }
}

daySelector.addEventListener("change", (e) => {
  updateExercises(e.target.value);
});

// Load current day by default
const today = new Date().getDay();
document.getElementById("today").innerText = "Hôm nay là: Thứ " + (today === 0 ? "Chủ nhật" : today);
daySelector.value = today;
updateExercises(today);