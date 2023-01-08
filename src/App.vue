<template>
  <div id="app">
    <div class="btn" @click="showModal()">Открить форму</div>
    <div class="main_body" v-if="openModal">
      <div class="modalForm">
        <div class="x-mark" @click="showModal()">
          <img src="@/assets/x-mark.svg" />
        </div>
        <div class="inputBlock" style="margin-top: 10px">
          <div>
            <input
              v-model="full_name"
              class="input"
              type="text"
              placeholder="Ф. И. О."
              :style="
                errorFullName
                  ? 'border: 1px solid red'
                  : 'border: 1px solid #ced4da'
              "
              @input="checkFullName()"
            />
          </div>
          <div class="errorMessage" v-if="errorFullName">
            Не менее 3 символов
          </div>
        </div>
        <div class="inputBlock">
          <div>
            <input
              v-model="telephone"
              v-mask="'+7(###) ###-##-##'"
              class="input"
              type="text"
              placeholder="Телефон"
              :style="
                errorTelephone
                  ? 'border: 1px solid red'
                  : 'border: 1px solid #ced4da'
              "
              @input="checkTelephone()"
            />
          </div>
          <div class="errorMessage" v-if="errorTelephone">
            Не менее 11 символов
          </div>
        </div>
        <div class="inputBlock" style="min-height: 130px">
          <div>
            <textarea
              v-model="message"
              class="input"
              style="min-height: 100px; max-width: 270px"
              placeholder="Напишите сообщение..."
              :style="
                errorMessage
                  ? 'border: 1px solid red'
                  : 'border: 1px solid #ced4da'
              "
              @input="checkMessage()"
            ></textarea>
          </div>
          <div class="errorMessage" v-if="errorMessage">
            Не менее 3 символов
          </div>
        </div>
        <div
          class="btn"
          style="max-width: 100%; margin-top: 15px"
          @click="sendData()"
        >
          Отправить
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      full_name: null,
      telephone: null,
      message: null,
      openModal: false,
      errorFullName: false,
      errorTelephone: false,
      errorMessage: false,
    };
  },
  methods: {
    showModal() {
      this.openModal = !this.openModal;
    },
    checkFullName() {
      if (!this.full_name || this.full_name.length < 3) {
        this.errorFullName = true;
      } else {
        this.errorFullName = false;
      }
    },
    checkMessage() {
      if (!this.message || this.message.length < 3) {
        this.errorMessage = true;
      } else {
        this.errorMessage = false;
      }
    },
    checkTelephone() {
      if (!this.telephone || this.telephone.length < 17) {
        this.errorTelephone = true;
      } else {
        this.errorTelephone = false;
      }
    },
    sendData() {
      if (!this.full_name || this.full_name.length < 3) {
        this.errorFullName = true;
        this.$toast.error("Поле заполнено не верно", {
          position: "top-right",
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
        return false;
      }
      if (!this.telephone || this.telephone.length < 17) {
        this.errorTelephone = true;
        this.$toast.error("Поле заполнено не верно", {
          position: "top-right",
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
        return false;
      }
      if (!this.message || this.message.length < 3) {
        this.errorMessage = true;
        this.$toast.error("Поле заполнено не верно", {
          position: "top-right",
          timeout: 3000,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          pauseOnHover: true,
          draggable: true,
          draggablePercent: 0.6,
          showCloseButtonOnHover: false,
          hideProgressBar: true,
          closeButton: "button",
          icon: true,
          rtl: false,
        });
        return false;
      }
      let phone = this.telephone.split("-");
      phone = (
        phone[0].replace(/[\])}[{(]/g, "") +
        phone[1] +
        phone[2]
      ).replace(" ", "");
      let data = {
        name: this.full_name,
        phone: phone,
        message: this.message,
      };
      console.log(data);
      this.openModal = !this.openModal;
      this.$toast.success("Отправка формы успешно !", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false,
      });
      alert("пожалуйста, посмотрите на консоль");
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.btn {
  font-style: normal;
  border-radius: 5px;
  border: none;
  outline: none;
  color: #fff;
  background: #722ed1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  max-width: 168px;
  height: 45px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}
.x-mark {
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
}
.main_body {
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalForm {
  width: 300px;
  min-height: 270px;
  border-radius: 5px;
  padding: 30px;
  margin: 30px 20px;
  background-color: #fff;
  position: relative;
}
.input {
  width: 270px;
  display: block;
  height: 30px;
  padding: 0.3rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: black;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  outline: none;
  font-family: "Montserrat", sans-serif;
}
.inputBlock {
  min-height: 70px;
}
.errorMessage {
  font-size: 12px;
  color: red;
  font-weight: 500;
  margin-top: 3px;
}
</style>
