<template>
    <div class="container">
      <div class="row mt-3">
        <h1>Contact</h1>
      </div>
      <div class="row mt-5 mb-5">
        <div class="col">
          <div>
            <h2 class="text-decoration-underline">Reach me on:</h2>
          </div>
          <div id="ct">LinkedIn:</div>
          <a href="https://www.linkedin.com/in/muttaqeen-slamat-95209019b/" target="_blank"><i class="bi bi-linkedin"></i> Take me there</a>
          <div id="ct">GitHub:</div>
          <a href="https://github.com/Muttaqeen-Slamat" target="_blank"><i class="bi bi-github"></i> Take me there</a>
          <div id="ct">Email:</div>
          <a href="mailto:muttaqeens@gmail.com" target="_blank"><i class="bi bi-envelope"></i> muttaqeens@gmail.com</a>
          <div id="ct">Via Phone:</div>
          <a href="/"><i class="bi bi-telephone"></i> 081 286 7370</a>
        </div>

        <div class="col">
          <h2 class="text-decoration-underline">Submit form</h2>
  
          <form @submit.prevent="submitForm" action="https://formspree.io/f/xnqezewg" method="POST" ref="form">
          <div>
            <label>
              Your Email:
              <div>
                <input v-model="email" class="p-3" type="email" name="email" placeholder="email@example.com">
              </div>
            </label>
          </div>
          <div class="mt-3">
            <label>
              Your Message:
              <div>
                <input v-model="message" class="p-3" name="message" placeholder="Send Your Message">
              </div>
            </label>
          </div>
          <!-- your other form fields go here -->
          <button type="submit" class="my-3 send">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
    };
  },
  methods: {
// my custom validation message function
    submitForm() {
      if (!this.email.trim() || !this.message.trim()) {
        alert('It seems you have not filled in the required text areas to send a message. Please enter your email and your message for it to be valid. Thank you.');
        return;
      }
      this.$refs.form.submit();
    },
  },
};
</script>
  
  <style scoped>
  input {
    border-radius: 25px;
  }
  
  a {
    color: black;
    text-decoration: none;
  }
  
  #ct {
    margin-top: 20px;
  }
  
  .container {
    margin-bottom: 10.1rem;
  }

  .send {
    position: relative;
    height: 52px;
  margin-bottom: 10px;
  margin-top: 60px;
  /* background-color:#d0368a; */
  border: 2px solid black;

  color: rgb(0, 0, 0);
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  font-size: 16px;
  font-weight: bold;
  padding: 0 20px;
  cursor: pointer;
  }

  .send:hover {
  background-color: blueviolet; 
  /* background:linear-gradient(72.5deg, crimson 0%, blueviolet 99%);  */
  color: white;
  transform: translateY(-2px);
}
  </style>
  