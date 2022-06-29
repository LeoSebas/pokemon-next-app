import Link from "next/link";

export default function NavHeader({children, to}) {
    return (
        <div className="p-3 hover:cursor-pointer">
            <Link href={to}>
                {children}
            </Link>
        </div>

    )
}