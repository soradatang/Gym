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
        { name: "Incline Dumbbell Press – 4x8", img: "images/incline-dumbbell-press.jpg" },
        { name: "Incline Cable Fly – 3x12", img: "images/incline-cable-fly.jpg" },
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

    const workoutTitles = {
      1: "Ngực + Tay sau",
      2: "Lưng + Tay trước",
      3: "Nghỉ ngơi",
      4: "Vai + Bụng",
      5: "Nghỉ ngơi",
      6: "Ngực + Core",
      0: "Chân + Cầu vai"
    };

    const mealPlans = {
      1: ["Trưa: 150g ức gà, 200g khoai lang, rau luộc", "Tối: 150g cá hồi, 1 chén cơm, canh cải bó xôi"],
      2: ["Trưa: 200g thịt bò nạc, 1 củ khoai tây, salad", "Tối: 2 quả trứng luộc, cơm gạo lứt, rau xanh"],
      4: ["Trưa: 150g thịt ức gà áp chảo, yến mạch, rau hấp", "Tối: 150g cá basa, 1 củ cà rốt, bông cải xanh"],
      6: ["Trưa: 2 trứng ốp la, bánh mì nguyên cám, rau trộn", "Tối: 150g thịt heo nạc, bún gạo, canh bí"],
      0: ["Trưa: 150g tôm luộc, cơm trắng, rau cải", "Tối: 200g thịt gà, miến, súp lơ luộc"]
    };

    const dayNames = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    const daySelector = document.getElementById("daySelector");
    const exercisesList = document.getElementById("exercises");
    const workoutTitle = document.getElementById("workout-title");
    const mealDiv = document.getElementById("meal-plan");
    const toggleMealBtn = document.getElementById("toggle-meal");

    function updateExercises(day) {
      day = Number(day);
      exercisesList.innerHTML = "";
      workoutTitle.innerText = workoutTitles[day] || "";

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

      updateMealPlan(day);
    }

    function updateMealPlan(day) {
      if (mealPlans[day]) {
        const mealHTML = mealPlans[day].map(m => `<li>${m}</li>`).join("");
        mealDiv.innerHTML = `<h3>Thực đơn hôm nay:</h3><ul>${mealHTML}</ul>`;
      } else {
        mealDiv.innerHTML = "<h3>Hôm nay nghỉ ngơi, ăn uống linh hoạt</h3>";
      }
    }

    toggleMealBtn.addEventListener("click", () => {
      mealDiv.style.display = mealDiv.style.display === "none" ? "block" : "none";
    });

    const today = new Date().getDay();
    document.getElementById("today").innerText = "Hôm nay là: " + dayNames[today];
    daySelector.value = today;
    updateExercises(today);

    daySelector.addEventListener("change", (e) => {
      updateExercises(e.target.value);
    });
  </script>
</body>
</html>
