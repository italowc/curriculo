const nome = "Ítalo Weiler e Castro";
const cargo = "Futuro Integrador tecnologias indústria 4.0";

const NomeHtml = document.getElementById("Nome-no-html");
const cargoHtml = document.getElementById("Cargo-no-html");

const texto1 = document.getElementById("texto-1");
const texto2 = document.getElementById("texto-2");
const texto3 = document.getElementById("texto-3");

function colocarNomeNoHtml(nome) {
  NomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
  cargoHtml.innerHTML = cargo;
}

function logarNome() {
  console.log(nome);
}

function clickNocurriculo() {
  console.log("Clicou no botão currículo");
  texto2.style.display = "block";
  texto1.style.display = "none";
  texto3.style.display = "none";
}

function clickNoSobre() {
  console.log("Clicou no botão Sobre");
  texto2.style.display = "none";
  texto1.style.display = "block";
  texto3.style.display = "none";
  
showCommentsSobre(); 
}

function clickNoContato() {
  console.log("Clicou no botão Contato");
  texto2.style.display = "none";
  texto1.style.display = "none";
  texto3.style.display = "block";
}

colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);

const nome1 = document.getElementById("nome1");
const comentario1 = document.getElementById("comentario1");
const nome2 = document.getElementById("nome2");
const comentario2 = document.getElementById("Comentario2");
const nome3 = document.getElementById("nome3");
const celular = document.getElementById("celular");
const email = document.getElementById("email");


const commentsSectionsCurriculo = document.getElementById("commentsCurriculo");

const teste = document.getElementById("commentsCurriculo");

async function showCommentsCurriculo() {
  commentsSectionsCurriculo.innerHTML = "";
  const response = await fetch("http://localhost:3333/comentariosCurriculo")
  const commentsCurriculo = await response.json();
  console.log(commentsCurriculo);

  commentsCurriculo.comentariosCurriculo.map((comment) => {
    const divComment = document.createElement("div");
    const h4 = document.createElement("h4");
    const h5 = document.createElement("h5");

    divComment.setAttribute("class", "user-comment");

    commentsSectionsCurriculo.appendChild(divComment);
    divComment.appendChild(h4);
    divComment.appendChild(h5);

    h4.innerHTML = `nome: ${comment.nome}`;
    h5.innerHTML = `comentario: ${comment.comentario}`;
    
  });
}

showCommentsCurriculo();


async function addCommentsCurriculo() {
  console.log(nome2.value)
  console.log(comentario2.value)

  const newItem = {
    nome: nome2.value,
    comentario: comentario2.value,
  };

  await fetch("http://localhost:3333/comentariosCurriculo", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })

  showCommentsCurriculo()
}


const commentsSectionSobre = document.getElementById("commentsSobre");

async function showCommentsSobre() {

  commentsSectionSobre.innerHTML = "";
  const response = await fetch("http://localhost:3333/comentariosSobre");
  const comments = await response.json();
  console.log(comments);

  comments.comentariosSobre.map((comment) => {
    const divComment = document.createElement("div");
    const h4 = document.createElement("h4");
    const h5 = document.createElement("h5");

    divComment.setAttribute("class", "user-comment");

    commentsSectionSobre.appendChild(divComment);
    divComment.appendChild(h4);
    divComment.appendChild(h5);

    h4.innerHTML = `nome: ${comment.nome}`;
    h5.innerHTML = `comentario: ${comment.comentario}`;
  });

}

showCommentsSobre()


async function addCommentsSobre() {
  console.log(nome1.value)
  console.log(comentario1.value)

  const newItem = {
    nome: nome1.value,
    comentario: comentario1.value,
  };

  await fetch('http://localhost:3333/comentariosSobre', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })

  showCommentsSobre()
}


const commentsContatos = document.getElementById("commentsContato");

async function showCommentsContato() {
  commentsContatos.innerHTML = "";
  const response = await fetch("http://localhost:3333/comentariosContato");
  const comments = await response.json();
  console.log(comments);

  comments.comentariosContato.map((comment) => {
    const divComment = document.createElement("div");
    const h4 = document.createElement("h4");
    const h5 = document.createElement("h5");
    const h5Tel = document.createElement("h5")
    

    divComment.setAttribute("class", "user-comment");

    commentsContatos.appendChild(divComment);
    divComment.appendChild(h4);
    divComment.appendChild(h5);
    divComment.appendChild(h5Tel);    

    h4.innerHTML = `nome: ${comment.nome}`;
    h5Tel.innerHTML = `celular: ${comment.celular}`;
    h5.innerHTML = `email: ${comment.email}`;
  });

}

showCommentsContato()

async function addCommentsContato() {
  console.log(nome3.value)
  console.log(celular.value)
  console.log(email.value)

  const newItem = {
    nome: nome3.value,
    celular: celular.value,
    email: email.value,
  };

  await fetch('http://localhost:3333/comentariosContato', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })

  showCommentsContato()
}

