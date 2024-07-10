console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // const formElements = event.target.elements;

  // console.log(formElements.firstName);
  // console.log(formElements.firstName.value);

  //  console.log(formElements.lastName);
  // console.log(formElements.lastName.value);

  // console.log(formElements.age);
  //console.log(formElements.age.value);

  // console.log(formElements.email);
  // console.log(formElements.email.value);

  //console.log(formElements.complaint);
  // console.log(formElements.complaint.value);

  // console.log(formElements.details);
  //console.log(formElements.details.value);

  // console.log(formElements.badness);
  //  console.log(formElements.badness.value);

  // console.log(formElements.orderDate);
  // console.log(formElements.orderDate.value);

  // console.log(formElements.tos);
  // console.log(formElements.tos.value);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  event.target.elements.firstName.focus();

  console.log(data);

  function ageBadnessSum(first, second) {
    const sum = first + second;
    console.log("The age-badness-sum of" + firstName + "is" + sum);
  }

  ageBadnessSum(age, badness);

  event.target.reset();
});
