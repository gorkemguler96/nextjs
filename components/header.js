import Link from "next/link";

export default function Header(){
    return <header className={"header"}>
        <nav>
            <ul>
                <li>
                    <Link href={"/"}>
                        <a>AnaSayfa</a>
                    </Link>
                </li>
                <li>
                <Link href={"/about"}>
                    <a>Hakkında</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/blog"}>
                        <a>Blog</a>
                    </Link>
                </li>
            </ul>
        </nav>

        <style jsx>{`
        .header {
        height: 60px;
        border-bottom: 1px solid #ccc;
        background: #fff;
            
            ul {
            display: flex;
            list-style-type: none;
            
            li {
              a{
              display: flex;
              height: 60px;
              align-items:center ;
              padding: 0 20px;
              text-decoration: none;
              color: #333;
              }
            }
            }
        }
`}</style>

    </header>
}
