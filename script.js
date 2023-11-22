$(document).ready(function() {
    $('#validate').validate({
      onfocusout: function(element) {
        this.element(element); // Validate element on blur
      },
      rules: {
        name: {
          required: true
        },
        lastName: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        address: {
          required: true
        },
        pincode: {
          required: true,
          digits: true
        },
        gender: {
          required: true
        },
        country: {
          required: true
        }
      },
      messages: {
        name: {
          required: "Please enter your first name."
        },
        lastName: {
          required: "Please enter your last name."
        },
        email: {
          required: "Please enter your email address.",
          email: "Please enter a valid email address."
        },
        address: {
          required: "Please enter your address."
        },
        pincode: {
          required: "Please enter a valid pincode.",
          digits: "Please enter only digits."
        },
        gender: {
          required: "Please select your gender."
        },
        country: {
          required: "Please select your country."
        }
      },
      errorElement: "div",
      errorPlacement: function(error, element) {
        error.addClass("invalid-feedback");
        element.closest(".form-group").append(error);
      },
      
      
    });
  });   