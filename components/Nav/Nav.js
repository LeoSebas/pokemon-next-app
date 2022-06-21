import NavHeader from "./NavHeader"
import NavItemsList from "./NavItemsList";
import NavItem from "./NavItem";

export default function Nav() {
    return (
        <nav className="flex flex-row justify-between bg-cyan-500"  >
            <NavHeader>
                <p className="p-2 whitespace-nowrap border-b-4 border-black font-bold hover:cursor-pointer hover:border-cyan-600">
                    Pokemon Cards
                </p>
            </NavHeader>
            <NavItemsList>
                <NavItem title={"Iniciar Sesión"} />
                <NavItem title={"Registrarse"} />
            </NavItemsList>
        </nav>
    );
}