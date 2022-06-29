import Link from "next/link";

export default function NavItem({ title , href}) {
    return (<div className={`p-3 mx-1 ${href ? 'hover:cursor-pointer': ''}` }>
        {href ? <Link href={href}><p>{title}</p></Link> :
            <p>{title}</p>}
    </div>)
}