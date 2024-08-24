import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js";
import { doc, getFirestore, setDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseConfig = {
 apiKey: "AIzaSyBSk4FZXPVedVdBhDvo8UzYGhqiaDILlL0",
 authDomain: "forbys-d2e7f.firebaseapp.com",
 databaseURL: "https://forbys-d2e7f-default-rtdb.firebaseio.com",
 projectId: "forbys-d2e7f",
 storageBucket: "forbys-d2e7f.appspot.com",
 messagingSenderId: "826739439374",
 appId: "1:826739439374:web:0b8bc26953a717c25ec95f",
 measurementId: "G-GG8FXC09LL"
};
// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Inicializa a autenticação
const database = getDatabase(app);
const db = getFirestore(app); // Corrigido para passar o app
// Função para registrar um novo usuário
var confirm = true;

const registerUser = (email, password, emailError, passwordError) => {
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   const user = userCredential.user;// registro de usuário
   const userId = user.uid; // ID único do usuário gerado pelo Firebase Authentication

   // Dados adicionais do usuário
   const userData = {
    name: "Fagner",
    phone: "+55 81 982762800",
    birthdate: "13/07/1982",
    address: "Rua Herculano de Holanda Cunha 13",
   };

   // Salvando os dados no Firestore
   setDoc(doc(db, "users", userId), userData)
    .then(() => {
     console.log("Dados adicionais salvos com sucesso!");
     const divConcluido = document.getElementById("divConcluido");
     const registrationForm = document.getElementById("registrationForm");
     divConcluido.style.setProperty('display', 'block');
     registrationForm.style.setProperty('display', 'none');
    })
    .catch((error) => {
     alert("Erro ao salvar os dados adicionais: ", error);
    });
  })
  .catch((error) => {
   // Tratamento de erro
   const errorCode = error.code; // Código do erro
   const errorMessage = error.message; // Mensagem do erro
   // Exibir uma mensagem de erro no console
   alert("Erro ao registrar:", errorCode, errorMessage);
   if (errorCode === 'auth/email-already-in-use') {
    emailError.innerText = ("Este email já está em uso. Tente outro.");
   } else if (errorCode === 'auth/invalid-email') {
    emailError.innerText = ("O email fornecido é inválido.");
   } else if (errorCode === 'auth/weak-password') {
    passwordError.innerText = ("A senha deve ter pelo menos 6 caracteres.");
   } else {
    alert("Erro ao registrar: " + errorMessage);
   }
  });
};

const registerButton = document.getElementById("registerButton");
// Evento de clique no botão de registro
registerButton.addEventListener("click", (e) => {
 const email = document.getElementById("email").value;
 const password = document.getElementById("password").value;
 const passwordConfirm = document.getElementById("passwordConfirm").value;
 const emailError = document.getElementById('emailError');
 const passwordError = document.getElementById("passwordError");
 emailError.innerText = '';
 passwordError.innerText = '';
 e.preventDefault(); // Impede o comportamento padrão do formulário
 validarCampos()
  .then(() => {
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular básica para validar o email
   if (!emailPattern.test(email.value)) {
    emailError.innerText = 'O formato do email está errado';
    return;
   }
   if (password != passwordConfirm) {
    passwordError.innerText = 'Senhas diferetens, repita a mesma senha!';
    return;
   }
  })
  .then(() => {
   registerUser(email, password, emailError, passwordError);
  })
  .catch((error) => {
   alert("Erro: " + error.message);
  });
});