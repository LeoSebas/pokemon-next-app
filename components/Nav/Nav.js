import NavHeader from "./NavHeader"
import NavItemList from "./NavItemList";
import NavItem from "./NavItem";

export default function Nav() {

    function handleClickLogin() {

    }
    return (
        <nav className="w-full bg-primary flex flex-col items-center" >
            <div className="container flex flex-row justify-between items-center ">
                <NavHeader to="/" >
                    <p className=" whitespace-nowrap font-bold  ">
                        Pokemon Cards
                    </p>
                </NavHeader>
                <NavItemList>
                    <NavItem title={"Iniciar Sesión"} href={"/login"} />
                    <NavItem title={"Registrarse"} href={"/register"}/>
                </NavItemList>
            </div>
        </nav>
    );
}