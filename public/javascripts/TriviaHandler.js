class TriviaHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.questionElm = document.getElementById("question")
    this.answersDiv = document.getElementById("answers")
    this.msgElm = document.getElementById("msg")
    this.answerButtons = document.getElementsByClassName("answer-btn")
    this.triviaDiv = document.getElementById("trivia")
    this.answers = []
    this.answersSpreaded
  }

  getQuestion() {
    axios.get(this.BASE_URL)
      .then(response => {
        console.log(response)
        this.answersDiv.innerHTML = ""
        this.msgElm.innerHTML = "<p>Tienes una oportunidad de poner a prueba tus conocimientos y poder librarte del castigo!</p>"
        this.questionElm.innerHTML = response.data.results[0].question
        this.answers = [response.data.results[0].correct_answer, response.data.results[0].incorrect_answers[0], response.data.results[0].incorrect_answers[1], response.data.results[0].incorrect_answers[2]]
        console.log("*****************", this.answers)
        this.answersSpreaded = [...this.answers]
        while (this.answersSpreaded.length) {
          let answer = this.answersSpreaded.splice(this.answersSpreaded.length * Math.random() | 0, 1)[0]
          this.answersDiv.innerHTML += `<li><button class="answer-btn">${answer}</button></li>`
        }
        for (let i = 0; i < this.answerButtons.length; i++) {
          this.answerButtons[i].onclick = (e) => {
            if (e.currentTarget.innerText == this.answers[0]) triviaAPI.correctAnswer()//console.log("respuesta correcta!")
            else { triviaAPI.incorrectAnswer() }  //console.log("respuesta incorrecta")
          }
        }
      })
  }
  correctAnswer() {
    this.answersDiv.innerHTML = ""
    this.msgElm.innerHTML = ""
    this.questionElm.innerHTML = ""
    this.msgElm.innerHTML = "<p>¡Respuesta correcta!</p>"
  }
  incorrectAnswer() {
    this.answersDiv.innerHTML = ""
    this.msgElm.innerHTML = ""
    this.questionElm.innerHTML = ""
    this.msgElm.innerHTML = "<p>¡Ooh respuesta incorrecta!</p>"
  }
  getPunishment(punishment) {
    switch (punishment) {
      case "APERITIVOS":
        triviaAPI.postPunishment("Invitar a aperitivos en Ironbeers")
        break;
      case "DESAYUNO":
        triviaAPI.postPunishment("Traer desayuno al día siguiente")
        break;
      case "AMOR":
        triviaAPI.postPunishment("Declarar tu amor de rodillas a Antonella o Victor en la zona común")
        break;
      case "CANTAR":
        triviaAPI.postPunishment("Cantar en el clase de Web")
        break;
      case "¿Y TU PERRO?":
        triviaAPI.postPunishment("Preguntar en Data si han visto a tu perro de manera desesperada")
        break;
      case "POST-IT":
        triviaAPI.postPunishment("Pegar un post-it a alguien de Data con tu número")
        break;
      case "PERREO":
        triviaAPI.postPunishment("Perrear a Fabio durante 30 secs")
        break;
      case "BODA":
        triviaAPI.postPunishment("Brindar por tu futura boda en las gradas de Ironhack")
        break;
      case "LA CLASE":
        triviaAPI.postPunishment("Hacer lo que elija la clase")
        break;
      case "EMBARAZO":
        triviaAPI.postPunishment("Llamar a un familiar y decirle que estás embarazad@")
        break;
      case "CAFE":
        triviaAPI.postPunishment("Comprar un café y delante de oficina de staff, gritar este café es una m*****")
        break;
      case "¿QUEDAMOS?":
        triviaAPI.postPunishment("Poner una nota “te espero en el baño en 5 min” a la persona que digan los TA")
        break;
      case "CREEPY":
        triviaAPI.postPunishment("Quedarte mirando 30 secs por el cristal de web con cara de creepy")
        break;
      case "LA MACARENA":
        triviaAPI.postPunishment("Bailar la Macarena en una de las mesas communes")
        break;
      case "LLAMADA REAL":
        triviaAPI.postPunishment("Llamar a Ironhack en nombre de la Casa Real y decir que Froilán está interesado en un Bootcamp de Data")
        break;
      case "LA CROQUETA":
        triviaAPI.postPunishment("Hacer la croqueta de un lado a otro de la clase")
        break;
      case "EL MONO":
        triviaAPI.postPunishment("Imitar a un mono loco y excitado")
        break;
      case "FOTO SEXY":
        triviaAPI.postPunishment("Mandar una foto sexy a Soni y preguntarle si vale para LinkedIn")
        break;
      case "CORRER":
        triviaAPI.postPunishment("Correr 3 vueltas por dentro haciendo movimientos de calentamiento")
        break;
    }
  }
  postPunishment(description) {
    this.answersDiv.innerHTML = ""
    this.msgElm.innerHTML = ""
    this.questionElm.innerHTML = ""
    this.answersDiv.innerHTML = "<p>Tienes que:</p>"
    this.answersDiv.innerHTML += `<p>${description}</p>`
  }
}