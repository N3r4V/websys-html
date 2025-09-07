document.getElementById("studentForm").addEventListener("change", () => {
    const otherInput = document.getElementById("others");
    otherInput.disabled = !document.getElementById("other").checked;

    const otherHobbyInput = document.getElementById("other1");
    otherHobbyInput.disabled = !document.getElementById("hobbyOther").checked;
});

document.getElementById("profilepic").addEventListener("change", (event) => {
    const preview = document.getElementById("preview");
    preview.src = URL.createObjectURL(event.target.files[0]);
    preview.style.display = "block";
});

document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        studentId: document.getElementById("student_id").value,
        email: document.getElementById("email").value,
        birthday: document.getElementById("birthday").value,
        gender: document.querySelector("input[name='gender']:checked")?.value || "",
        genderOther: document.getElementById("others").value,
        course: document.getElementById("course").value,
        year: document.querySelector("input[name='yearlevel']:checked")?.value || "",
        hobbies: Array.from(document.querySelectorAll("input[name='hobby']:checked")).map(h => h.value),
        hobbyOther: document.getElementById("other1").value,
        profilePic: document.getElementById("preview").src || ""
    };

    localStorage.setItem("studentData", JSON.stringify(data));
    window.location.href = "summary.html";
});

document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("studentForm").reset();
    document.getElementById("others").disabled = true;
    document.getElementById("other1").disabled = true;
    const preview = document.getElementById("preview");
    preview.src = "";
    preview.style.display = "none";
});
