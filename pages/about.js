import Link from 'next/link'

export default function About(){

    return <div>
        <h3>Hakkında</h3>
        <Link href={"/"}>
            Geri Dön
        </Link>

        <style jsx>{`
        h3{
        font-size: 20px;
        font-weight: 500;
        color: orange;
        }`}</style>

    </div>
}
