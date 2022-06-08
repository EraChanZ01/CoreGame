import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
    const router = useRouter();
    router.push('profile/brands')
    console.log('!!!!!!!!!!!!!!!!!!', router.query.index )
    return (
        <footer className="h-16 bg-customize-blace111/90">
            <div className="box-border flex">
                <div>
                    Политика персональных данных
                </div>
            </div>
        </footer>
    )
}