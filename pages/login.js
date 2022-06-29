import Nav from "../components/Nav/Nav";
import EmailInput from "../components/EmailInput";

export default function Login() {
    return <div>
        <Nav></Nav>
        <main>
            <p>Iniciar sesión en Pokemon Cards App</p>
            <div>
                <form>
                    <EmailInput>
                        <input id="__email_input__"/>
                    </EmailInput>
                </form>
            </div>
        </main>
    </div>
}