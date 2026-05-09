var selector = document.querySelector(".selector_box");
selector.addEventListener("click", () => {
  selector.classList.toggle("selector_open");
});

document.querySelectorAll(".date_input").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".date").classList.remove("error_shown");
  });
});

var sex = "m";

document.querySelectorAll(".selector_option").forEach((option) => {
  option.addEventListener("click", () => {
    sex = option.id;
    document.querySelector(".selected_text").innerHTML = option.innerHTML;
  });
});

var upload = document.querySelector(".upload");
var imageInput = document.createElement("input");
imageInput.type = "file";
imageInput.accept = "image/jpeg, image/png, image/gif";

upload.addEventListener("click", () => {
  imageInput.click();
  upload.classList.remove("error_shown");
});

imageInput.addEventListener("change", () => {
  const file = imageInput.files[0];
  if (!file) return;

  upload.classList.remove("upload_loaded");
  upload.classList.add("upload_loading");
  upload.removeAttribute("selected");

  const data = new FormData();
  data.append("image", file);

  fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
    "Authorization": "Client-ID 37148ca618a210fff77148d5b337ea2f
    },
    body: data,
  })
    .then((result) => {
      if (!result.ok) throw new Error("Imgur error: " + result.status);
      return result.json();
    })
    .then((response) => {
      if (response.data && response.data.link) {
        const url = response.data.link;
        upload.setAttribute("selected", url);
        upload.querySelector(".upload_uploaded").src = url;
        upload.classList.add("upload_loaded");
      } else {
        throw new Error("Brak linku");
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Nie udało się przesłać zdjęcia.\nSpróbuj mniejsze zdjęcie (do 8-10MB) lub inne zdjęcie.");
    })
    .finally(() => {
      upload.classList.remove("upload_loading");
    });
});

document.querySelector(".go").addEventListener("click", () => {
  var empty = [];
  var params = new URLSearchParams();

  params.set("sex", sex);

  if (!upload.hasAttribute("selected")) {
    empty.push(upload);
    upload.classList.add("error_shown");
  } else {
    params.set("image", upload.getAttribute("selected"));
  }

  ["day", "month", "year"].forEach(id => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      empty.push(document.querySelector(".date"));
    } else {
      params.set(id, input.value);
    }
  });

  document.querySelectorAll(".input_holder").forEach((element) => {
    var input = element.querySelector(".input");
    if (!input.value.trim()) {
      empty.push(element);
      element.classList.add("error_shown");
    } else {
      params.set(input.id, input.value);
    }
  });

  if (empty.length > 0) {
    empty[0].scrollIntoView({ behavior: "smooth" });
  } else {
    location.href = "/id?" + params.toString();
  }
});
