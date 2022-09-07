import "./styles.css";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  userIsCorrect(userName, password) {
    return userName === "nathalye.chiarelli" && password === "teste123"
  }

  login() {
    var { userName, password } = this.state;

    if (userName === "" || password === "") {
      alert("Por favor preencha todos os campos.");
    }

    if (this.userIsCorrect(userName, password)) {
      alert(
        "Obrigado sr(a) " +
          userName +
          ". \n O sistema estará disponível em breve"
      );
    } else {
      alert("Usuário e senha incorretos");
    }
  }

  render() {
    var { userName, password } = this.state;

    return (
      <div className="App">
        <div id="login">
          <form className="card">
            <div className="card-header">
              <h2>Entrar</h2>
            </div>
            <div className="card-content">
              <div className="card-content-area">
                <label htmlFor="usuario">Usuário</label>
                <input
                  type="text"
                  id="usuario"
                  autoComplete="off"
                  value={userName}
                  onChange={(event) =>
                    this.setState({ userName: event.target.value })
                  }
                />
              </div>
              <div className="card-content-area">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="card-footer">
              <input
                type="button"
                defaultValue="Entrar"
                className="submit"
                onClick={() => this.login()}
              />
              <a
                href="https://i.imgur.com/yZswteT.png"
                className="recuperar_senha"
                target="_blank"
                rel="noreferrer"
              >
                Esqueceu a senha?
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
