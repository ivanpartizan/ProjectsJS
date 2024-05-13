const testimonials = [
  {
    name: "Peta Jensen",
    photoUrl:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,accusamus ex eius unde quam quas dolorem quis error aut. Dicta facererem dolore nihil repudiandae illo blanditiis saepe, esse, quos dolor, culpa earum excepturi velit illum ratione minus sint porro consectetur maiores molestias sit odit libero nobis animi. Cupiditate, labore!",
  },
  {
    name: "Blake Blossom",
    photoUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,accusamus ex eius unde quam quas dolorem quis error aut. Dicta facererem dolore nihil repudiandae illo blanditiis saepe, esse, quos dolor, culpa earum excepturi velit illum ratione minus sint porro consectetur maiores molestias sit odit libero nobis animi. Cupiditate, labore!",
  },
  {
    name: "Romi Rain",
    photoUrl:
      "https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,accusamus ex eius unde quam quas dolorem quis error aut. Dicta facererem dolore nihil repudiandae illo blanditiis saepe, esse, quos dolor, culpa earum excepturi velit illum ratione minus sint porro consectetur maiores molestias sit odit libero nobis animi. Cupiditate, labore!",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];

  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
