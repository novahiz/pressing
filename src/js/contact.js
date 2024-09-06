//=================================EmailJs===========================

const checkingForm = document.getElementById("contact_form"),
  formMessage = document.getElementById("form_message");

const sendEmail = (e) => {
  e.preventDefault();
  //serviceID_templateID_#form_publickey
  emailjs
    .sendForm(
      "service_8gbttd9",
      "template_oxugt8k",
      "#contact_form",
      "sagNfgQHO7yeLbpn5"
    )
    .then(
      () => {
        //show sent messenge
        formMessage.textContent =
          "Félicitation! vous recevrez régulière nos derniers offres et plus encore! ✅";

        // remove message after five seconds
        setTimeout(function () {
          formMessage.textContent = "";
        }, 5000);

        //clear field

        checkingForm.reset();
      },
      () => {
        //show err
        formMessage.textContent =
          "Votre demande a échoué, veuillez nous contacter si le problème persist ❌";
      }
    );
};

checkingForm.addEventListener("submit", sendEmail);
